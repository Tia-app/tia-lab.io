import re,os,sys,json,html,shutil,datetime
BASE=(sys.argv[1] if len(sys.argv)>1 else "https://tia-app.github.io/tia-lab.io").rstrip("/")
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
E=html.escape
T=open(os.path.join(ROOT,"index.html"),encoding="utf8").read()
blk=re.search(r"const labs=\[(.*?)\n\];",T,re.S).group(1)
labs=[dict(name=m[1],en=m[2],desc=m[3],mods=re.findall(r'"([^"]+)"',m[4])) for m in re.finditer(r'\{name:"([^"]+)",en:"([^"]+)",icon:"[^"]*",tone:"[^"]+",desc:"([^"]+)",mods:\[(.*?)\]\}',blk,re.S)]
LS=["math","ai","physics","tech","space","data","earth","library","biology"]
MS=[["sieve","ulam-spiral","prime-test","twin-primes","prime-gaps","factorization","big-numbers","sequences","function-plotter","geometry"],
["perceptron","function-learning","genetic-algorithm","pathfinding-agent","q-learning","path-search","data-cleaning","decision-stump","kmeans","classification-metrics"],
["projectile","gravity","mirrors","circuit-builder","rc-rl-circuits","wave-interference","magnetism","static-electricity","lorentz-force","lenses-refraction"],
["code-stats","sorting","base-converter","json-validator","caesar-cipher","engineering-calculator","regex-lab","text-counter","javascript-lab","html-builder"],
["solar-system","orbit-ellipse","planet-sizes","weight-on-planets","distance-scale","light-time","schwarzschild-radius","moons","travel-time","astronomical-units"],
["z-scores","descriptive-statistics","bar-chart","correlation","frequency-table","regression","data-generator","scatter-plot","compare-datasets","moving-average"],
["earth-basics","distance-bearing","coordinates","map-scale","earthquake-energy","water-cycle","heat-index","water-pressure","unit-converter","earth-atlas"],
["scientists","timeline","formulas","math-concepts","physics-concepts","ai-concepts","astronomy-terms","technologies","discoveries","glossary"],
["nervous-system-map","brain-3d","reflex-spinal-cord","neuron-3d","action-potential","synapse","memory-plasticity","diseases-addiction","receptors","eye-vision","ear-smell-taste","skeleton-bone","joint-muscle","summary-quiz"]]
assert len(labs)==9 and all(len(l["mods"])==len(MS[i]) for i,l in enumerate(labs))
ab={m[1]:(m[2],m[3]) for m in re.finditer(r'"(\d+-\d+)":\["([^"]*)","([^"]*)"',open(os.path.join(ROOT,"assets/about.js"),encoding="utf8").read())}
for m in re.finditer(r'"(\d+)-(\d+)":"([^"]*)"',open(os.path.join(ROOT,"assets/about.js"),encoding="utf8").read().split("window.ABOUT2=")[1]):ab[m[1]+"-"+m[2]]=(labs[int(m[1])]["mods"][int(m[2])]+" چیست؟",m[3])
open(os.path.join(ROOT,"assets/routes.js"),"w",encoding="utf8").write("window.ROUTES={l:"+json.dumps(LS)+",m:"+json.dumps(MS)+',root:(function(){var b=document.querySelector("base");return b?b.href:new URL(".",location.href).href})(),u:function(l,m){return new URL(l===undefined?"./":ROUTES.l[l]+"/"+(m===undefined?"":ROUTES.m[l][m]+"/"),ROUTES.root).href}};\n')
for d in LS+["labs"]:shutil.rmtree(os.path.join(ROOT,d),ignore_errors=True)
for f in os.listdir(os.path.join(ROOT,"tools")):
    if f.endswith(".html"):os.remove(os.path.join(ROOT,"tools",f))
TOT=sum(len(l["mods"]) for l in labs)
res=[("library/scientists/","دانشمندان و دستاوردها"),("library/timeline/","گاه‌شمار علم"),("library/formulas/","فرمول‌های ریاضی"),("library/glossary/","واژه‌نامهٔ علمی"),("library/discoveries/","کشفیات مهم")]
foot='<footer class="sfoot" id="sfoot"><div class="fg"><div><div class="fb"><img src="assets/icon-192.png" alt="آزمایشگاه تیا" width="34" height="34">آزمایشگاه تیا</div><p>آزمایشگاه فارسی علم و فناوری برای بچه‌های پایه هشتم: ریاضی، فیزیک، زیست‌شناسی، فضا، هوش مصنوعی و علم داده؛ همه به‌صورت شبیه‌ساز و مدل تعاملی.</p></div><div><h5>آزمایشگاه‌ها</h5>'+"".join(f'<a href="{LS[i]}/">{E(l["name"])}</a>' for i,l in enumerate(labs))+'</div><div><h5>منابع</h5>'+"".join(f'<a href="{u}">{t}</a>' for u,t in res)+'</div><div><h5>پیوندها</h5><a href="biology/">زیست‌شناسی؛ حس و حرکت</a><a href="math/sieve/">غربال اراتستن</a></div></div><details><summary>فهرست همهٔ بخش‌ها</summary>'+"".join(f'<div><b>{E(l["name"])}:</b> '+"".join(f'<a href="{LS[i]}/{MS[i][j]}/">{E(m)}</a>' for j,m in enumerate(l["mods"]))+'</div>' for i,l in enumerate(labs))+'</details><div class="fc"><span>© ۲۰۲۶ آزمایشگاه تیا · همهٔ حقوق محفوظ است.</span><span>علم را آزمایش کن.</span></div></footer>'
T=re.sub(r'<footer class="sfoot".*?</footer>',lambda m:foot,T,1,flags=re.S)
if '<base href="./">' not in T:T=T.replace("<head>\n",'<head>\n<base href="./">\n',1)
open(os.path.join(ROOT,"index.html"),"w",encoding="utf8").write(T)
urls=[(BASE+"/","1.0")]
def page(path,depth,start,title,desc,url,body):
    t=T.replace('<base href="./">\n',"").replace("<head>\n",f'<head>\n<base href="{"../"*depth}">\n<script>window.TIA_START={start}</script>\n',1)
    sub=lambda pat,rep:re.sub(pat,lambda m:rep,t,1)
    t=sub(r"<title>.*?</title>",f"<title>{E(title)}</title>")
    for tag in ['name="description"','property="og:description"','name="twitter:description"']:t=re.sub(r'(<meta '+re.escape(tag)+r' content=")[^"]*(")',lambda m:m[1]+E(desc)+m[2],t,1)
    for tag in ['property="og:title"','name="twitter:title"']:t=re.sub(r'(<meta '+re.escape(tag)+r' content=")[^"]*(")',lambda m:m[1]+E(title)+m[2],t,1)
    t=re.sub(r'(<link rel="canonical" href=")[^"]*(")',lambda m:m[1]+url+m[2],t,1);t=re.sub(r'(<meta property="og:url" content=")[^"]*(")',lambda m:m[1]+url+m[2],t,1)
    ld=json.dumps({"@context":"https://schema.org","@type":"WebApplication","name":title,"description":desc,"url":url,"inLanguage":"fa","applicationCategory":"EducationalApplication","operatingSystem":"Web"},ensure_ascii=False)
    t=t.replace("</head>",f'<script type="application/ld+json">{ld}</script>\n</head>',1)
    t=re.sub(r"<noscript>.*?</noscript>",lambda m:"<noscript>"+body+"</noscript>",t,1,flags=re.S)
    os.makedirs(os.path.dirname(path),exist_ok=True);open(path,"w",encoding="utf8").write(t)
for i,l in enumerate(labs):
    lu=f"{BASE}/{LS[i]}/";urls.append((lu,"0.8"))
    desc=f"آزمایشگاه {l['name']} در آزمایشگاه تیا: {l['desc']}. {len(l['mods'])} ابزار و شبیه‌ساز تعاملی مثل {'، '.join(l['mods'][:3])} برای بچه‌های پایه هشتم."
    page(os.path.join(ROOT,LS[i],"index.html"),1,f"[{i}]",f"آزمایشگاه {l['name']} | آزمایشگاه تیا",desc,lu,f"<h1>آزمایشگاه {E(l['name'])}</h1><p>{E(desc)}</p>")
    for j,m in enumerate(l["mods"]):
        u=f"{BASE}/{LS[i]}/{MS[i][j]}/";urls.append((u,"0.6"));a=ab.get(f"{i}-{j}")
        desc=(a[1] if a else f"{m} در آزمایشگاه {l['name']}: ابزار تعاملی آزمایشگاه تیا.")[:300]
        page(os.path.join(ROOT,LS[i],MS[i][j],"index.html"),2,f"[{i},{j}]",f"{m} | {l['name']} | آزمایشگاه تیا",desc,u,f"<h1>{E(a[0] if a else m)}</h1><p>{E(desc)}</p>")
today=datetime.date.today().isoformat()
open(os.path.join(ROOT,"sitemap.xml"),"w",encoding="utf8").write('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{u}</loc><lastmod>{today}</lastmod><priority>{p}</priority></url>\n" for u,p in urls)+"</urlset>\n")
open(os.path.join(ROOT,"robots.txt"),"w").write(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
print(len(urls),"آدرس")

import re,sys,os,datetime,html
BASE=(sys.argv[1] if len(sys.argv)>1 else "https://tia-app.github.io/tia-lab.io").rstrip("/")
ROOT=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src=open(os.path.join(ROOT,"index.html"),encoding="utf8").read()
blk=re.search(r"const labs=\[(.*?)\n\];",src,re.S).group(1)
labs=[]
for m in re.finditer(r'\{name:"([^"]+)",en:"([^"]+)",icon:"[^"]*",tone:"[^"]+",desc:"([^"]+)",mods:\[(.*?)\]\}',blk,re.S):
    labs.append(dict(name=m[1],en=m[2],desc=m[3],mods=re.findall(r'"([^"]+)"',m[4])))
assert len(labs)==8 and all(len(l["mods"])==10 for l in labs)
E=html.escape;TODAY=datetime.date.today().isoformat()
FIX='<script>(function(){var l=document.querySelector("link[rel=canonical]");if(l&&/USERNAME/.test(l.href))l.href=location.origin+location.pathname;var o=document.querySelector("meta[property=\'og:url\']");if(o&&/USERNAME/.test(o.content))o.content=location.href.split("#")[0]})()</script>'
CSS='<style>body{margin:0;font-family:Vazirmatn,Tahoma,sans-serif;background:#080b14;color:#edf2ff;line-height:2}main{max-width:820px;margin:auto;padding:32px 20px}a{color:#b1a4ff}nav.bc{font-size:13px;color:#9aa8c0}h1{font-size:30px;margin:12px 0}.btn{display:inline-block;background:linear-gradient(110deg,#8b78ff,#547fdb);color:#fff;padding:12px 22px;border-radius:12px;text-decoration:none;margin:14px 0}ul{padding-right:20px}li{margin:6px 0}small{color:#9aa8c0}</style>'
def head(title,desc,url,ld,depth):
    p="../"*depth
    return f'''<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{E(title)}</title>
<meta name="description" content="{E(desc)}">
<meta name="robots" content="index,follow,max-image-preview:large">
<link rel="canonical" href="{url}">
<meta property="og:type" content="website"><meta property="og:locale" content="fa_IR"><meta property="og:site_name" content="آزمایشگاه تیا"><meta property="og:title" content="{E(title)}"><meta property="og:description" content="{E(desc)}"><meta property="og:url" content="{url}"><meta property="og:image" content="{BASE}/assets/og.png">
<meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="{E(title)}"><meta name="twitter:description" content="{E(desc)}">
<link rel="icon" href="{p}favicon-32.png"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@300..900&display=swap">
<script type="application/ld+json">{ld}</script>
{CSS}
</head>
'''
import json
def J(o):return json.dumps(o,ensure_ascii=False)
urls=[(BASE+"/","1.0")]
os.makedirs(os.path.join(ROOT,"labs"),exist_ok=True);os.makedirs(os.path.join(ROOT,"tools"),exist_ok=True)
for i,l in enumerate(labs):
    lu=f"{BASE}/labs/{i}.html";urls.append((lu,"0.8"))
    title=f"آزمایشگاه {l['name']} | آزمایشگاه تیا";desc=f"آزمایشگاه {l['name']} ({l['en']}): {l['desc']}. ۱۰ ابزار و شبیه‌ساز تعاملی شامل {'، '.join(l['mods'][:3])} و بیشتر."
    ld=J({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"آزمایشگاه تیا","item":BASE+"/"},{"@type":"ListItem","position":2,"name":l["name"],"item":lu}]},{"@type":"CollectionPage","name":title,"description":desc,"inLanguage":"fa","mainEntity":{"@type":"ItemList","itemListElement":[{"@type":"ListItem","position":j+1,"name":m,"url":f"{BASE}/tools/{i}-{j}.html"} for j,m in enumerate(l["mods"])]}}]})
    lis="".join(f'<li><a href="../tools/{i}-{j}.html">{E(m)}</a></li>' for j,m in enumerate(l["mods"]))
    others="".join(f'<a href="{k}.html">{E(o["name"])}</a> · ' for k,o in enumerate(labs) if k!=i)
    open(os.path.join(ROOT,"labs",f"{i}.html"),"w",encoding="utf8").write(head(title,desc,lu,ld,1)+f'<body><main><nav class="bc"><a href="../">آزمایشگاه تیا</a> › {E(l["name"])}</nav><h1>آزمایشگاه {E(l["name"])}</h1><p>{E(l["desc"])}.</p><a class="btn" href="../index.html#/{i}">ورود به آزمایشگاه {E(l["name"])}</a><h2>ابزارها و شبیه‌سازها</h2><ul>{lis}</ul><p><small>آزمایشگاه‌های دیگر: {others}<a href="../">صفحه اصلی</a></small></p></main>{FIX}</body></html>')
    for j,m in enumerate(l["mods"]):
        tu=f"{BASE}/tools/{i}-{j}.html";urls.append((tu,"0.6"))
        title=f"{m} | {l['name']} | آزمایشگاه تیا";desc=f"{m} در آزمایشگاه {l['name']}: ابزار تعاملی با محاسبه و نمودار زنده، ذخیره‌ی ورودی‌ها و لینک اشتراک. {l['desc']}."
        ld=J({"@context":"https://schema.org","@graph":[{"@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"آزمایشگاه تیا","item":BASE+"/"},{"@type":"ListItem","position":2,"name":l["name"],"item":f"{BASE}/labs/{i}.html"},{"@type":"ListItem","position":3,"name":m,"item":tu}]},{"@type":"WebApplication","name":m,"description":desc,"url":tu,"inLanguage":"fa","applicationCategory":"EducationalApplication","operatingSystem":"Web","isPartOf":{"@type":"WebSite","name":"آزمایشگاه تیا","url":BASE+"/"}}]})
        sib="".join(f'<li><a href="{i}-{k}.html">{E(x)}</a></li>' for k,x in enumerate(l["mods"]) if k!=j)
        pv=f'<a href="{i}-{j-1}.html">→ {E(l["mods"][j-1])}</a>' if j else "";nx=f' &nbsp; <a href="{i}-{j+1}.html">{E(l["mods"][j+1])} ←</a>' if j<9 else ""
        open(os.path.join(ROOT,"tools",f"{i}-{j}.html"),"w",encoding="utf8").write(head(title,desc,tu,ld,1)+f'<body><main><nav class="bc"><a href="../">آزمایشگاه تیا</a> › <a href="../labs/{i}.html">{E(l["name"])}</a> › {E(m)}</nav><h1>{E(m)}</h1><p>«{E(m)}» بخش {j+1} از آزمایشگاه {E(l["name"])} است؛ {E(l["desc"])}. ورودی‌ها را تغییر بده تا نتیجه و نمودار هم‌زمان به‌روز شوند، سپس تصویر نمودار یا لینک اشتراک آن را ذخیره کن.</p><a class="btn" href="../index.html#/{i}/{j}">باز کردن ابزار «{E(m)}»</a><h2>بخش‌های دیگر {E(l["name"])}</h2><ul>{sib}</ul><p>{pv}{nx}</p></main>{FIX}</body></html>')
sm='<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'+"".join(f"<url><loc>{u}</loc><lastmod>{TODAY}</lastmod><priority>{p}</priority></url>\n" for u,p in urls)+"</urlset>\n"
open(os.path.join(ROOT,"sitemap.xml"),"w",encoding="utf8").write(sm)
open(os.path.join(ROOT,"robots.txt"),"w").write(f"User-agent: *\nAllow: /\n\nSitemap: {BASE}/sitemap.xml\n")
print(len(urls),"URL ساخته شد برای",BASE)

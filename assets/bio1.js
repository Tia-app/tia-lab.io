(()=>{
const {E,g}=TIA,B=BIO;
const BODY=(extra="")=>`<defs><linearGradient id="bgb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#27406b"/><stop offset="1" stop-color="#16243f"/></linearGradient>
<radialGradient id="bgr" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#ffc2cc"/><stop offset=".6" stop-color="#e98aa0"/><stop offset="1" stop-color="#a94e6b"/></radialGradient></defs>
<g fill="url(#bgb)" stroke="#6f93d1" stroke-opacity=".5" stroke-width="1.5"><ellipse cx="200" cy="72" rx="40" ry="48"/><rect x="187" y="108" width="26" height="24" rx="8"/>
<path d="M148 134Q200 118 252 134L270 156L264 322Q200 342 136 322L130 156Z"/>
<path d="M150 150Q112 190 102 300" fill="none" stroke="#1b2d50" stroke-width="28" stroke-linecap="round"/><path d="M250 150Q288 190 298 300" fill="none" stroke="#1b2d50" stroke-width="28" stroke-linecap="round"/>
<path d="M178 326L170 596" fill="none" stroke="#1b2d50" stroke-width="38" stroke-linecap="round"/><path d="M222 326L230 596" fill="none" stroke="#1b2d50" stroke-width="38" stroke-linecap="round"/>
<ellipse cx="97" cy="318" rx="13" ry="18"/><ellipse cx="303" cy="318" rx="13" ry="18"/><ellipse cx="160" cy="610" rx="24" ry="11"/><ellipse cx="240" cy="610" rx="24" ry="11"/></g>${extra}`;
const NV={la:"M200 158C170 160 140 170 120 205S102 290 98 325",ra:"M200 158C230 160 260 170 280 205S298 290 302 325",ll:"M200 330C190 360 180 420 174 480S170 570 168 604",rl:"M200 330C210 360 220 420 226 480S230 570 232 604"};
const brainSVG=`<g class="hs" data-id="brain"><path d="M158 62C150 28 190 14 205 22C232 14 252 40 245 66C250 88 228 100 214 96C200 104 168 100 160 86C150 80 152 70 158 62Z" fill="url(#bgr)" stroke="#fff4" stroke-width="1.5"/><path d="M175 40Q190 52 182 68M205 32Q215 50 205 70M228 44Q238 56 230 72M168 76Q190 70 210 82" fill="none" stroke="#9b4560" stroke-width="2" stroke-linecap="round"/></g>`;
const cordSVG=`<g class="hs" data-id="cord"><path d="M200 96L200 336" stroke="#f6f0dc" stroke-width="7" stroke-linecap="round"/><path d="M200 96L200 336" stroke="#fff" stroke-width="2.2" stroke-opacity=".7"/></g>`;
const nervesSVG=Object.values(NV).map(d=>`<path class="hs" data-id="nerve" d="${d}" fill="none" stroke="#ffd166" stroke-width="3.2" stroke-linecap="round"/><path class="hs" data-id="nerve" d="${d}" fill="none" stroke="transparent" stroke-width="22"/>`).join("")+[160,190,220,250,285].map(y=>`<path class="hs" data-id="nerve" d="M200 ${y}Q172 ${y+10} 152 ${y+4}M200 ${y}Q228 ${y+10} 248 ${y+4}" fill="none" stroke="#ffd166" stroke-width="1.6" stroke-opacity=".8"/>`).join("");
const pulses=(on)=>on?Object.values(NV).map((d,i)=>`<circle r="4.6" fill="#51d5e8"><animateMotion dur="${2.4+i*.25}s" repeatCount="indefinite" path="${d}" keyPoints="1;0" keyTimes="0;1" calcMode="linear"/></circle><circle r="4.6" fill="#ff9a4d"><animateMotion dur="${2.4+i*.25}s" begin="1.1s" repeatCount="indefinite" path="${d}" keyPoints="0;1" keyTimes="0;1" calcMode="linear"/></circle>`).join(""):"";

/* ───────── ۸-۰ دستگاه عصبی؛ نقشهٔ تعاملی ───────── */
E["8-0"]=h=>{
 const L=B.layout(h,"#ffd166");
 L.vis.innerHTML=`<div class="btabs" id="mt"></div><svg class="bsvg" id="msv" viewBox="0 0 400 640">${BODY()}<text x="200" y="632" fill="#8fa3c9" font-size="11" text-anchor="middle">روی مغز، نخاع یا اعصاب کلیک کن</text>${nervesSVG}${cordSVG}${brainSVG}<g id="hrt"><path d="M222 214c-6-12-24-4-14 10l14 14 14-14c10-14-8-22-14-10z" fill="#ff4d6d"><animateTransform attributeName="transform" type="scale" values="1;1.22;1" dur=".8s" repeatCount="indefinite" additive="sum"/></path></g><g id="pl">${pulses(1)}</g></svg><div class="bstat"><div><b>۲ بخش</b><small>مرکزی و محیطی</small></div><div><b>۴۳ جفت</b><small>عصب متصل به بخش مرکزی</small></div><div><b>۳۱ + ۱۲</b><small>جفت از نخاع + از مغز</small></div></div><div class="bnote"><span style="color:#51d5e8">●</span> پیام حسی (به‌سوی مغز و نخاع) · <span style="color:#ff9a4d">●</span> پیام عصبی/حرکتی (از مغز و نخاع به اندام‌ها)</div>`;
 const sv=g("msv"),T={
  all:["دستگاه عصبی","<p>مثل بقیهٔ دستگاه‌های بدن، دستگاه عصبی از اندام‌ها و بافت‌هایی ساخته شده است و <b>دو بخش مرکزی و محیطی</b> دارد.</p><p><b>بخش مرکزی</b> شامل مغز و نخاع و مرکز واپایش (کنترل) فعالیت‌های ارادی و غیرارادی بدن است. <b>بخش محیطی</b> مجموعهٔ اعصابی است که همهٔ قسمت‌های بدن را به مغز و نخاع وصل می‌کند.</p>","«پیام حسی» اطلاعاتی است که از محیط دریافت می‌شود و «پیام عصبی (حرکتی)» دستوری است که در مغز و نخاع صادر و مثلاً به ماهیچه‌ها فرستاده می‌شود."],
  brain:["مغز","<p>مغز درون جمجمه قرار دارد و مثل مرکز فرماندهی، اطلاعات را دریافت و درک می‌کند، بررسی می‌کند و در صورت نیاز به اندام‌ها دستور می‌دهد.</p><p>مغز شامل <b>نیمکره‌های مخ، مخچه و ساقهٔ مغز</b> است. برای دیدن آن‌ها به بخش «مغز سه‌بعدی» برو.</p>","مغز انسان حدود ۱۰۰ میلیارد نورون دارد."],
  cord:["نخاع","<p>نخاع شبیه طناب سفیدرنگی است که درون ستون مهره‌ها قرار دارد و از <b>بصل‌النخاع تا کمر</b> امتداد دارد.</p><p>نخاع رابط مغز و اعصاب است: اطلاعات اندام‌ها را به مغز و فرمان‌های مغز را به اندام‌ها می‌رساند و مرکز برخی انعکاس‌ها مثل انعکاس زانوست.</p>","مغز درون جمجمه و نخاع درون کانال ستون مهره‌ها محافظت می‌شوند."],
  nerve:["اعصاب (بخش محیطی)","<p>به مجموعهٔ اعصاب بخش محیطی می‌گویند. این اعصاب پیام‌های حسی را از بخش‌های مختلف بدن به بخش مرکزی می‌رسانند و پیام‌های حرکتی را از بخش مرکزی به اندام‌های حرکتی می‌برند.</p><p>۴۳ جفت عصب به دستگاه عصبی مرکزی وصل است: <b>۳۱ جفت از نخاع و ۱۲ جفت از مغز</b> منشأ می‌گیرد.</p>","عصب مجموعه‌ای از تارهای عصبی است که با غلافی از بافت پیوندی احاطه شده‌اند."],
  vol:["فعالیت ارادی؛ برداشتن مداد","<p>مداد از روی میز می‌افتد. با شنیدن صدا یا دیدن آن، <b>پیام حسی</b> به دستگاه عصبی مرکزی می‌رود. مغز پیام را دریافت می‌کند و وقتی تصمیم می‌گیریم مداد را برداریم، <b>پیام حرکتی</b> به ماهیچه‌ها می‌رود و با انقباض آن‌ها خم می‌شویم و مداد را برمی‌داریم.</p><p>چون با اراده و خواست ما انجام می‌شود، «فعالیت ارادی» نام دارد.</p>",""],
  invol:["فعالیت غیرارادی؛ ضربان قلب","<p>برخی فعالیت‌ها مثل ضربان قلب غیرارادی‌اند. وقتی ورزش می‌کنی، دستگاه عصبی ضربان قلب و تنفس را زیاد می‌کند. این فعالیت‌ها همیشه انجام می‌شوند و متناسب با نیاز بدن تنظیم می‌شوند.</p><p>بصل‌النخاع (گرهٔ حیات) مرکز کنترل تنفس، ضربان قلب و فشار خون است.</p>","متن تکمیلی: دستگاه عصبی خودمختار دو بخش دارد: سمپاتیک (آمادهٔ فعالیت و هیجان) و پاراسمپاتیک (حالت آرامش)؛ این دو معمولاً برخلاف هم عمل می‌کنند."],
  ref:["بازتاب (انعکاس)","<p>اگر دستت به اتو یا کتری داغ بخورد، بدون اراده آن را عقب می‌کشی. این واکنش‌ها <b>بازتابی یا انعکاسی</b> نام دارند؛ بسیار سریع‌اند و بدون تفکر اغلب برای حفظ سلامت بدن انجام می‌شوند، مثل پلک زدن، عطسه، سرفه و ریزش اشک.</p><p>مسیر کامل آن را در بخش «بازتاب و نخاع» ببین.</p>",""]};
 const show=k=>{const t=T[k];L.set(t[0],t[1],t[2]);g("hrt").style.opacity=k==="invol"||k==="all"?1:.25};
 const hs=B.svgHS(sv,show);
 B.tabs(g("mt"),["نمای کلی","ارادی","غیرارادی","بازتابی"],i=>{const k=["all","vol","invol","ref"][i];show(k);sv.querySelectorAll(".hs").forEach(n=>n.classList.remove("on"));g("pl").innerHTML=pulses(k!=="ref");if(k==="ref"){g("pl").innerHTML=`<circle r="5" fill="#51d5e8"><animateMotion dur="1.4s" repeatCount="indefinite" path="${NV.la}" keyPoints="1;0.12" keyTimes="0;1"/></circle><circle r="5" fill="#ff9a4d"><animateMotion dur="1.4s" begin=".7s" repeatCount="indefinite" path="${NV.la}" keyPoints="0.12;1" keyTimes="0;1"/></circle>`}});
};

/* ───────── ۸-۱ مغز سه‌بعدی ───────── */
E["8-1"]=h=>{
 const L=B.layout(h,"#ff7a90");
 L.vis.innerHTML='<div class="btabs" id="bb1"></div>';
 const api=B.three(L.vis,{h:520,r:8,pit:.18,yaw:.9,target:[0,-.5,0]});
 if(!api){L.set("مغز","<p>نمایش سه‌بعدی در دسترس نیست.</p>");return}
 const T=api.T,M=B.mat,INFO={
  frontal:["لوب پیشانی","<p>در جلوی مخ است. تمرکز، تکلم، شخصیت، استدلال، حل مسئله، قضاوت و مهارت‌های حرکتی به این بخش مربوط است.</p>","نیمکره‌های مخ فکرکردن، حرف‌زدن و حل مسئله را ممکن می‌کنند.","#ff7a90"],
  parietal:["لوب آهیانه","<p>بالا و پشت مخ است. حرکت، گفتار، ادراک دیداری، احساس درد و لمس در آن پردازش می‌شود.</p>","قشر مخ بخش بیرونی نیمکره‌هاست و مرکز بسیاری از اعمال ارادی بدن است.","#ffd24d"],
  occipital:["لوب پس‌سری","<p>در عقب مخ است. اطلاعات بینایی را پردازش می‌کند و رنگ‌ها را تشخیص می‌دهد. پیام عصبی عصب بینایی به این‌جا می‌رسد.</p>","مرکز حس بینایی در قسمت پس‌سری قشر مخ است.","#7fd36b"],
  temporal:["لوب گیجگاهی","<p>در دو طرف و پایین مخ است و اطلاعات شنوایی را پردازش می‌کند. حافظه هم به ساختارهای عمیق این ناحیه وابسته است.</p>","مرکز شنوایی در قسمت گیجگاهی قشر مخ است.","#5fb4ff"],
  cereb:["مخچه","<p>پیام‌هایی از چشم، گوش و پوست به مخچه می‌رسد. مخچه آن‌ها را بررسی می‌کند و به ماهیچه‌ها پیام حرکتی می‌فرستد تا با انقباضشان <b>تعادل بدن</b> در هر حالتی حفظ شود. بندبازان و ژیمناست‌ها با تمرین مخچهٔ خود را تقویت می‌کنند.</p>","مخچه از دو نیمکره و بخش میانی به نام «کرمینه» ساخته شده است.","#d9a066"],
  mid:["مغز میانی (بخشی از ساقه)","<p>متن تکمیلی: در بالاترین قسمت ساقهٔ مغز است و در فعالیت‌های شنوایی، بینایی و حرکت نقش دارد.</p>","ساقهٔ مغز سه قسمت دارد: مغز میانی، پل مغزی و بصل‌النخاع.","#ee8f55"],
  pons:["پل مغزی","<p>متن تکمیلی: پل مغزی در تنظیم تنفس و ترشح بزاق و اشک نقش دارد و بخش‌های مغز را به هم وصل می‌کند.</p>","ساقهٔ مغز، مخ و مخچه را به نخاع وصل می‌کند.","#d9628a"],
  med:["بصل‌النخاع (گرهٔ حیات)","<p>در بالای نخاع قرار دارد و مرکز کنترل فعالیت‌های غیرارادی مثل <b>تنفس، ضربان قلب و فشار خون</b> است. به‌دلیل اهمیتش به آن «گرهٔ حیات» می‌گویند. مرکز انعکاس‌هایی مثل عطسه، سرفه و بلع هم هست.</p>","آسیب به این ناحیه بسیار خطرناک است.","#a584e0"],
  cord:["نخاع","<p>طناب سفیدرنگی درون ستون مهره‌هاست که مغز را به اعصاب بدن وصل می‌کند.</p>","",  "#f2ead3"],
  thal:["تالاموس","<p>متن تکمیلی: محل پردازش اولیه و تقویت اطلاعات حسی است و ایستگاه ارتباطی بین اندام‌های حسی و قشر مخ به شمار می‌آید.</p>","",  "#ffb703"],
  hypo:["هیپوتالاموس","<p>متن تکمیلی: دمای بدن، تعداد ضربان قلب، فشار خون، تشنگی، گرسنگی، خواب و ترشح هورمون‌ها را تنظیم می‌کند.</p>","","#fb5607"],
  hippo:["هیپوکامپ","<p>بخشی از دستگاه کناره‌ای (لیمبیک) است و در شکل‌گیری حافظه و یادگیری نقش دارد. برداشتن بخشی از آن در یک بیمار، توانایی تبدیل حافظهٔ کوتاه‌مدت به بلندمدت را از بین برد.</p>","","#8338ec"],
  amyg:["آمیگدال","<p>متن تکمیلی: در حافظه و احساساتی مثل ترس و لذت نقش دارد.</p>","","#ef476f"],
  cc:["جسم پینه‌ای","<p>نیمکره‌های مخ با هم مرتبط‌اند و فعالیت‌های مشترک دارند؛ مسیرهای عصبی مثل جسم پینه‌ای آن‌ها را به هم وصل می‌کنند. نیمکرهٔ چپ فعالیت‌های نیمهٔ راست بدن و نیمکرهٔ راست فعالیت‌های نیمهٔ چپ را واپایش می‌کند.</p>","","#f4f1e8"]};
 const sid=(k)=>{const t=INFO[k];L.set(t[0],t[1],t[2],t[3]);api.hl(k)};
 api.onPick=sid;
 const ell=(rx,ry,rz,f)=>{const g0=new T.SphereGeometry(1,64,48),p=g0.attributes.position;for(let i=0;i<p.count;i++){const q=f(p.getX(i),p.getY(i),p.getZ(i),rx,ry,rz);p.setXYZ(i,q[0],q[1],q[2])}g0.computeVertexNormals();return g0};
 const split=(geo,fn)=>{const p=geo.attributes.position,n=geo.attributes.normal,ix=geo.index.array,o={};for(let i=0;i<ix.length;i+=3){const a=ix[i],b=ix[i+1],c=ix[i+2],cx=(p.getX(a)+p.getX(b)+p.getX(c))/3,cy=(p.getY(a)+p.getY(b)+p.getY(c))/3,cz=(p.getZ(a)+p.getZ(b)+p.getZ(c))/3,k=fn(cx,cy,cz);(o[k]=o[k]||{p:[],n:[]});for(const v of[a,b,c]){o[k].p.push(p.getX(v),p.getY(v),p.getZ(v));o[k].n.push(n.getX(v),n.getY(v),n.getZ(v))}}
  const r={};for(const k in o){const bg=new T.BufferGeometry();bg.setAttribute("position",new T.Float32BufferAttribute(o[k].p,3));bg.setAttribute("normal",new T.Float32BufferAttribute(o[k].n,3));r[k]=bg}return r};
 const RX=.7,RY=1.02,RZ=1.75,cortex=[];
 const hemi=side=>{const grp=new T.Group(),geo=ell(RX,RY,RZ,(x,y,z,a,b,c)=>{const w=(Math.sin(7*x+3*z)+Math.sin(8*y-4*x)+Math.sin(6*z+5*y)+Math.sin(11*x*y+9*z))/4,d=1-.075*Math.exp(-w*w*16);let px=x*a*d;if(x*side<0)px*=.3;return[px,y*b*d,z*c*d]});
  const parts=split(geo,(x,y,z)=>{const ry=y/RY,rz=z/RZ;if(ry<-.3&&rz>-.5)return"temporal";if(rz<-.55)return"occipital";if(rz>.12)return"frontal";return"parietal"});
  for(const k in parts){const m=new T.Mesh(parts[k],M(parseInt(INFO[k][3].slice(1),16),{roughness:.62,transparent:true,opacity:1}));api.reg(m,k,INFO[k][0]);cortex.push(m);grp.add(m)}
  grp.position.x=side*.72;api.S.add(grp);return grp};
 const hR=hemi(1),hL=hemi(-1);
 const add=(geo,k,pos,sc)=>{const m=new T.Mesh(geo,M(parseInt(INFO[k][3].slice(1),16),{roughness:.5}));m.position.set(...pos);if(sc)m.scale.set(...sc);api.reg(m,k,INFO[k][0]);api.S.add(m);return m};
 const inner=new T.Group();api.S.add(inner);
 const cb=new T.SphereGeometry(1,64,40),cp=cb.attributes.position;for(let i=0;i<cp.count;i++){const y=cp.getY(i),r=1+.04*Math.sin(y*46);cp.setXYZ(i,cp.getX(i)*r*.95,y*r*.5,cp.getZ(i)*r*.62)}cb.computeVertexNormals();add(cb,"cereb",[0,-.95,-1.3]);
 add(new T.SphereGeometry(1,32,24),"mid",[0,-.62,-.12],[.26,.34,.26]);
 add(new T.SphereGeometry(1,40,28),"pons",[0,-1.12,-.38],[.42,.3,.34]);
 const med=B.tube([[0,-1.3,-.5],[0,-1.75,-.7],[0,-2.2,-.85]],.2,M(0xa584e0),12,12);api.reg(med,"med",INFO.med[0]);api.S.add(med);
 const cd=B.tube([[0,-2.2,-.85],[0,-3,-1.0],[0,-3.9,-1.15]],.15,M(0xf2ead3,{roughness:.4}),16,12);api.reg(cd,"cord",INFO.cord[0]);api.S.add(cd);
 const part=(k,geo,pos,sc)=>{const m=add(geo,k,pos,sc);inner.add(m);api.S.remove(m);return m};
 const ccm=new T.Mesh(new T.TorusGeometry(.78,.1,16,48,Math.PI),M(0xf4f1e8,{roughness:.4}));ccm.rotation.y=Math.PI/2;ccm.position.set(0,.25,-.05);ccm.scale.set(2.3,.8,1);api.reg(ccm,"cc",INFO.cc[0]);inner.add(ccm);
 for(const s of[-1,1]){const th=add(new T.SphereGeometry(1,32,24),"thal",[s*.28,.02,0],[.27,.22,.34]);api.S.remove(th);inner.add(th);
  const hp=B.tube([[s*1.05,-.38,-.55],[s*1.12,-.55,-.1],[s*1.0,-.5,.35]],.075,M(0x8338ec),16,8);api.reg(hp,"hippo",INFO.hippo[0]);inner.add(hp);
  const am=add(new T.SphereGeometry(1,20,16),"amyg",[s*1.0,-.5,.5],[.12,.12,.12]);api.S.remove(am);inner.add(am)}
 const hy=add(new T.SphereGeometry(1,24,18),"hypo",[0,-.34,.32],[.15,.13,.15]);api.S.remove(hy);inner.add(hy);inner.visible=false;
 const set=(sep,gl)=>{hR.position.x=.72+sep*2.4;hL.position.x=-.72-sep*2.4;inner.visible=sep>.25||gl;cortex.forEach(m=>{m.material.opacity=gl?.22:1;m.material.depthWrite=!gl})};
 const st={sep:0,gl:false};
 L.vis.insertAdjacentHTML("beforeend",'<div class="bctl"><label>جدا کردن نیمکره‌ها <input type="range" id="bsep" min="0" max="100" value="0"></label></div>');
 const go=B.tabs(g("bb1"),["نمای کامل","جدا شدن نیمکره‌ها","قشر شفاف (ساختارهای عمیق)","فقط ساقهٔ مغز و مخچه"],i=>{st.gl=i===2;st.sep=i===1?1:0;g("bsep").value=st.sep*100;set(st.sep,st.gl);const hide=i===3;cortex.forEach(m=>m.visible=!hide);api.hl(null)});
 g("bsep").oninput=e=>{st.sep=e.target.value/100;set(st.sep,st.gl)};
 L.set("مغز؛ مرکز فرماندهی","<p>بیشتر حجم مغز را <b>نیمکره‌های مخ</b> می‌سازند. هر لوب با رنگ خودش نشان داده شده است؛ روی هر بخش کلیک کن، بچرخانش و با نوار پایین نیمکره‌ها را از هم جدا کن تا ساختارهای عمیق دیده شوند.</p><p>رنگ‌ها: <b style='color:#ff7a90'>پیشانی</b> · <b style='color:#ffd24d'>آهیانه</b> · <b style='color:#7fd36b'>پس‌سری</b> · <b style='color:#5fb4ff'>گیجگاهی</b> · <b style='color:#d9a066'>مخچه</b>.</p>","مغز درون جمجمه است. قشر مخ به چهار ناحیهٔ پیشانی، آهیانه، گیجگاهی و پس‌سری تقسیم می‌شود.");
};

/* ───────── ۸-۲ بازتاب و نخاع ───────── */
E["8-2"]=h=>{
 const L=B.layout(h,"#ff9a4d");
 L.vis.innerHTML='<div class="btabs" id="t2"></div><div id="v2"></div>';
 const v=g("v2");
 const reflex=()=>{
  v.innerHTML=`<svg class="bsvg" id="rsv" viewBox="0 0 760 460"><defs><radialGradient id="rg" cx=".5" cy=".5" r=".7"><stop offset="0" stop-color="#9aa6bd"/><stop offset="1" stop-color="#5c6a87"/></radialGradient></defs>
<g id="cord"><ellipse cx="560" cy="250" rx="150" ry="140" fill="#e9e4d2" stroke="#fff6" stroke-width="2"/><path d="M560 250c-20-10-48-48-72-52-26-4-34 20-24 38 8 16 28 14 42 20-6 14-30 20-36 42-4 18 22 26 40 18 20-10 26-30 50-36zM560 250c20-10 48-48 72-52 26-4 34 20 24 38-8 16-28 14-42 20 6 14 30 20 36 42 4 18-22 26-40 18-20-10-26-30-50-36z" fill="url(#rg)"/><circle cx="560" cy="250" r="7" fill="#1b2438"/></g>
<text x="560" y="420" fill="#c9d3ea" font-size="13" text-anchor="middle">برش عرضی نخاع (ماده خاکستری: پروانه‌ای · ماده سفید: بیرونی)</text>
<text x="650" y="105" fill="#8fa3c9" font-size="12">ریشهٔ پشتی (حسی)</text><text x="650" y="415" fill="#8fa3c9" font-size="12" text-anchor="start"> </text><text x="440" y="440" fill="#8fa3c9" font-size="12">ریشهٔ شکمی (حرکتی)</text>
<g id="arm"><path d="M60 300Q120 220 180 250" stroke="#d99a7a" stroke-width="36" stroke-linecap="round" fill="none"/><ellipse id="hand" cx="48" cy="318" rx="34" ry="24" fill="#e6b296"/><path id="bic" d="M110 250Q140 215 170 245Q140 265 110 250Z" fill="#c8453b" stroke="#ff9a8f"/><path id="tri" d="M110 290Q140 320 175 285Q140 275 110 290Z" fill="#a8554b" stroke="#ff9a8f"/>
<g id="ket"><rect x="14" y="350" width="72" height="50" rx="8" fill="#555e73"/><path d="M14 372q-24 0-24 14" stroke="#555e73" stroke-width="7" fill="none"/><path id="stm" d="M30 345q-6-14 0-24M50 345q-6-16 0-28M70 345q-6-14 0-24" stroke="#ffb199" stroke-width="3" fill="none" stroke-linecap="round" opacity=".9"/></g></g>
<g id="mk"></g><path id="hot" d="M48 292l8-16 6 10 8-14 6 20z" fill="#ff7a2a" opacity=".0"/>
<path id="p1" d="M70 296C130 290 190 300 300 300S500 276 548 262" fill="none" stroke="#51d5e8" stroke-width="3" stroke-dasharray="7 6" opacity=".55"/>
<path id="p2" d="M548 262C560 240 575 240 584 248" fill="none" stroke="#fff" stroke-width="3" stroke-dasharray="4 4" opacity=".55"/>
<path id="p3" d="M584 262C560 300 540 330 500 345C400 372 260 340 150 270" fill="none" stroke="#ff9a4d" stroke-width="3" stroke-dasharray="7 6" opacity=".55"/>
<path id="p4" d="M560 235C560 160 560 90 560 40" fill="none" stroke="#c9a6ff" stroke-width="3" stroke-dasharray="3 5" opacity=".55"/>
<g id="brn" opacity=".35"><ellipse cx="560" cy="22" rx="48" ry="16" fill="url(#bgr)"/><text x="620" y="26" fill="#c9a6ff" font-size="12">مغز: احساس درد (کمی دیرتر)</text></g>
<circle id="dot" r="9" fill="#ffe27a" stroke="#fff" stroke-width="2" opacity="0"/><g id="lbls" font-size="12" fill="#e8eeff"><text x="100" y="283" id="l1">گیرندهٔ پوست</text></g></svg>
<div class="bctl"><button class="bbtn on" id="rgo">▶ اجرای واکنش</button><button class="bbtn" id="rnx">گام بعد</button><label>سرعت <input type="range" id="rsp" min="1" max="5" value="3"></label></div>`;
  const S=[
   ["۱) گیرنده‌ی پوست تحریک می‌شود","<p>دست به کتری داغ می‌خورد. گیرنده‌های دمایی و درد در پوست تحریک می‌شوند و اثر محرک را به <b>پیام عصبی</b> تبدیل می‌کنند.</p>",null,"hot"],
   ["۲) نورون حسی پیام را می‌برد","<p>پیام حسی از طریق <b>عصب حسی</b> به نخاع می‌رسد و از ریشهٔ پشتی وارد نخاع می‌شود.</p>","p1"],
   ["۳) نورون رابط در نخاع","<p>در نخاع، پیام به یک نورون رابط می‌رسد؛ برای انعکاس نیازی به تصمیم‌گیری مغز نیست. نخاع مرکز برخی انعکاس‌هاست.</p>","p2"],
   ["۴) نورون حرکتی فرمان را می‌برد","<p>فرمان از ریشهٔ شکمی خارج و از طریق <b>عصب حرکتی</b> به ماهیچه‌ها می‌رسد.</p>","p3"],
   ["۵) ماهیچه منقبض می‌شود","<p>ماهیچهٔ دوسر منقبض و ماهیچهٔ سه‌سر منبسط می‌شود؛ دست بدون اراده کنار می‌رود. ماهیچه‌ها جفت و عکس هم کار می‌کنند.</p>","mus"],
   ["۶) مغز هم باخبر می‌شود","<p>هم‌زمان نسخه‌ای از پیام به مغز می‌رود. پس از آن‌که دست عقب کشیده شد، حس درد را درک می‌کنیم.</p>","p4"]];
  let i=-1,tm=0,play=false,raf;const P=id=>g(id);
  const arm=g("arm"),dot=g("dot");
  const reset=()=>{["p1","p2","p3","p4"].forEach(k=>P(k).style.opacity=.35);g("brn").style.opacity=.35;g("hot").style.opacity=0;arm.style.transform="";g("hand").style.transform="";dot.style.opacity=0;g("bic").setAttribute("d","M110 250Q140 215 170 245Q140 265 110 250Z");g("tri").setAttribute("d","M110 290Q140 320 175 285Q140 275 110 290Z");g("stm").style.opacity=.9};
  const run=n=>{i=n;reset();const s=S[n];L.set(s[0],s[1],"قوس انعکاسی: گیرنده ← نورون حسی ← نورون رابط ← نورون حرکتی ← اندام پاسخ‌دهنده","#ff9a4d");
   for(let k=1;k<=n;k++){const p=S[k][2];if(p&&P(p))P(p).style.opacity=1}
   if(n===0)g("hot").style.opacity=1;
   if(n===5||n===4){g("brn").style.opacity=n===5?1:.35;}
   if(n>=4){arm.style.transform="translate(-6px,-26px) rotate(-8deg)";g("bic").setAttribute("d","M110 250Q140 195 172 242Q140 262 110 250Z");g("tri").setAttribute("d","M110 296Q140 306 175 292Q140 290 110 296Z");g("stm").style.opacity=.2}
   const path=s[2]&&P(s[2]);if(path&&path.getTotalLength){const L0=path.getTotalLength();let t0=performance.now();const dur=1400/(+g("rsp").value/3);cancelAnimationFrame(raf);const f=nn=>{const k=Math.min(1,(nn-t0)/dur),pt=path.getPointAtLength(k*L0);dot.setAttribute("cx",pt.x);dot.setAttribute("cy",pt.y);dot.style.opacity=1;if(k<1)raf=requestAnimationFrame(f);else{dot.style.opacity=0;if(play&&i<5)setTimeout(()=>{if(play)run(i+1)},350);else if(i>=5){play=false;g("rgo").textContent="▶ اجرای دوباره"}}};raf=requestAnimationFrame(f)}
   else if(play)setTimeout(()=>{if(play)run(i+1)},1300)};
  g("rgo").onclick=()=>{play=true;g("rgo").textContent="در حال اجرا…";run(0)};
  g("rnx").onclick=()=>{play=false;run((i+1)%6)};
  L.set("قوس انعکاسی","<p>دست‌ات را به کتری داغ نزدیک کن (دکمهٔ اجرا). مسیر پیام را از پوست تا نخاع و برگشت به ماهیچه دنبال کن.</p><p>بازتاب‌ها سریع، بدون اراده و بدون تفکرند و اغلب برای حفظ سلامت بدن انجام می‌شوند.</p>","چکش پلاستیکی زیر زانو را هم امتحان کن: انعکاس زانو هم مرکزش نخاع است.");
  reset();
 };
 const injury=()=>{
  v.innerHTML=`<svg class="bsvg" id="isv" viewBox="0 0 400 640">${BODY()}<g id="ov"></g><path d="M200 96L200 336" stroke="#f6f0dc" stroke-width="6" stroke-linecap="round"/><g id="cut"></g></svg><div class="bctl"><label>محل آسیب نخاع <input type="range" id="lvl" min="0" max="3" value="2"></label><span id="lvt" class="result" style="margin:0;padding:6px 12px"></span></div>`;
  const LV=[["گردن (بالا)",118,"حس و حرکت دست‌ها، تنه و پاها آسیب می‌بیند؛ حتی تنفس ممکن است درگیر شود."],["گردن پایین / شانه‌ها",150,"دست‌ها و پاها درگیرند."],["قفسهٔ سینه",230,"حس و حرکت پاها (و بخشی از تنه) از بین می‌رود، اما دست‌ها سالم می‌مانند."],["کمر",310,"فقط حس و حرکت پاها آسیب می‌بیند."]];
  const upd=()=>{const k=+g("lvl").value,y=LV[k][1];g("cut").innerHTML=`<circle cx="200" cy="${y}" r="9" fill="#ff3b5c" stroke="#fff" stroke-width="2"/>`;
   let ov=`<rect x="90" y="${y}" width="220" height="${640-y}" fill="#ff3b5c" opacity=".32" style="mix-blend-mode:screen"/>`;g("ov").innerHTML=`<clipPath id="bcl"><ellipse cx="200" cy="72" rx="40" ry="48"/><rect x="187" y="108" width="26" height="24"/><path d="M148 134Q200 118 252 134L270 156L264 322Q200 342 136 322L130 156Z"/><path d="M150 150Q112 190 102 300" fill="none" stroke="#000" stroke-width="28"/><path d="M250 150Q288 190 298 300" fill="none" stroke="#000" stroke-width="28"/><path d="M178 326L170 596M222 326L230 596" stroke="#000" stroke-width="38"/></clipPath><g clip-path="url(#bcl)">${ov}</g>`;
   g("lvt").textContent=LV[k][0];L.set("آسیب نخاع: "+LV[k][0],`<p>${LV[k][2]}</p><p>در افرادی که نخاع‌شان آسیب دیده، بسته به این‌که آسیب در چه قسمتی باشد، ناتوانی حسی و حرکتی متفاوتی دارند. هر چه محل آسیب بالاتر باشد، بخش بیشتری از بدن درگیر می‌شود.</p>`,"هشدار ایمنی: آسیب دستگاه عصبی برخلاف بقیهٔ قسمت‌های بدن جبران‌ناپذیر است. کلاه ایمنی و کمربند ایمنی بسیار مفید است.","#ff3b5c")};
  g("lvl").oninput=upd;upd();
 };
 B.tabs(g("t2"),["قوس انعکاسی","آسیب به نخاع"],i=>{TIA.pause=false;i?injury():reflex()});
};

/* ───────── ۸-۳ نورون سه‌بعدی ───────── */
E["8-3"]=h=>{
 const L=B.layout(h,"#8be26e");
 L.vis.innerHTML='<div class="btabs" id="t3"></div>';
 const api=B.three(L.vis,{h:500,r:11,pit:.22,yaw:.3,target:[0.5,0,0],hint:"بکش تا بچرخد · زوم با چرخ ماوس · روی هر قسمت نورون کلیک کن"});
 if(!api){L.set("نورون","<p>نمایش سه‌بعدی در دسترس نیست.</p>");return}
 L.vis.insertAdjacentHTML("beforeend",'<div class="bctl"><button class="bbtn" id="n-fire">⚡ ارسال پیام عصبی</button><button class="bbtn on" id="n-mye">غلاف میلین: روشن</button></div><div class="bstat"><div><b id="n-sp">—</b><small>روش هدایت</small></div><div><b>دارینه ← جسم ← آسه</b><small>جهت حرکت پیام</small></div></div>');
 const T=api.T,M=B.mat,S=api.S,R=B.rnd(11);let grp=null,type=0,mye=true,bead=null,light=null;
 const INFO={soma:["جسم یاخته‌ای","<p>هسته و بیشتر اندامک‌های یاختهٔ عصبی در جسم یاخته‌ای تجمع یافته‌اند.</p>","#9be15d"],nuc:["هسته","<p>هستهٔ یاخته درون جسم یاخته‌ای است.</p>","#7a5cff"],dend:["دارینه (دندریت)","<p>رشته‌ای عصبی که پیام عصبی را به <b>جسم یاخته‌ای می‌آورد</b>. دارینه‌ها پرشاخه‌اند تا پیام یاخته‌های زیادی را دریافت کنند.</p>","#6fd3a0"],axon:["آسه (آکسون)","<p>رشته‌ای عصبی که پیام را <b>از جسم یاخته‌ای بیرون می‌برد</b>. به دارینه‌ها یا آسه‌های بلند «تار عصبی» می‌گویند. عصب مجموعه‌ای از تارهاست که با غلافی از بافت پیوندی احاطه شده‌اند.</p>","#f2c14e"],mye:["غلاف میلین","<p>غلافی از جنس چربی که توسط <b>یاخته‌های پشتیبان</b> ساخته می‌شود؛ آسه را عایق‌بندی می‌کند و سرعت هدایت پیام عصبی را بسیار زیاد می‌کند. در بیماری ام‌اس این غلاف آسیب می‌بیند.</p>","#f5efd2"],node:["گرهٔ رانویه","<p>بخش‌هایی از آسه که میلین ندارند. پتانسیل عمل فقط در این گره‌ها ایجاد می‌شود و پیام از گره‌ای به گرهٔ دیگر می‌جهد؛ به همین دلیل هدایت جهشی سریع‌تر است.</p>","#ff9f1c"],term:["انتهای آسه","<p>پیام عصبی از طریق انتهای آسه با یاخته‌های عصبی و یاخته‌های دیگر مثل ماهیچه‌ای در ارتباط است و پیام را به آن‌ها منتقل می‌کند (سیناپس).</p>","#ef476f"],musc:["یاختهٔ ماهیچه‌ای","<p>نورون حرکتی پیام را به ماهیچه می‌رساند و آن را منقبض می‌کند.</p>","#c8453b"],skin:["گیرندهٔ پوست","<p>در نورون حسی، پیام از گیرنده (مثلاً در پوست) آغاز می‌شود و به مراکز عصبی می‌رود.</p>","#e6b296"],cns:["بخش مرکزی (نخاع)","<p>نورون حسی پیام را به مراکز عصبی (مغز و نخاع) می‌برد.</p>","#9aa6bd"]};
 const sid=k=>{const t=INFO[k];L.set(t[0],t[1],"انواع نورون‌ها: حسی (پیام را به مراکز عصبی می‌برد)، حرکتی (پیام را از مراکز به اندام‌ها می‌برد)، رابط (ارتباط بین نورون‌ها).",t[2]);api.hl(k)};api.onPick=sid;
 const cyl=(a,b,r,m,rs=14)=>{const A=new T.Vector3(...a),Bv=new T.Vector3(...b),d=Bv.clone().sub(A),m0=new T.Mesh(new T.CylinderGeometry(r,r,d.length(),rs),m);m0.position.copy(A.clone().add(Bv).multiplyScalar(.5));m0.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return m0};
 const dend=(grp,o,dir,len,r,dep)=>{const e=o.clone().add(dir.clone().multiplyScalar(len)),mid=o.clone().lerp(e,.5).add(new T.Vector3(R()-.5,R()-.5,R()-.5).multiplyScalar(len*.5));
  const t=B.tube([o.toArray(),mid.toArray(),e.toArray()],r,M(0x6fd3a0,{roughness:.5}),14,8);api.reg(t,"dend",INFO.dend[0]);grp.add(t);
  if(dep>0)for(let k=0;k<2;k++){const nd=dir.clone().add(new T.Vector3(R()-.5,R()-.5,R()-.5).multiplyScalar(1.3)).normalize();dend(grp,e,nd,len*.72,r*.7,dep-1)}};
 const build=()=>{if(grp){S.remove(grp)}grp=new T.Group();S.add(grp);const R0=B.rnd(5);
  let sx=-1.5,path=[],nodes=[];
  const soma=new T.Mesh(new T.SphereGeometry(type===1?.62:.85,40,30),M(0x9be15d,{roughness:.45,transparent:true,opacity:.9}));
  const mk=(m,k,x=0,y=0,z=0)=>{api.reg(m,k,INFO[k][0]);m.position.set(x,y,z);grp.add(m);return m};
  if(type===0){ // حرکتی
   mk(soma,"soma",-1.5,0,0);mk(new T.Mesh(new T.SphereGeometry(.34,24,18),M(0x7a5cff)),"nuc",-1.5,0,0);
   for(let i=0;i<7;i++){const a=i/7*Math.PI*2,d=new T.Vector3(-.9-Math.abs(Math.sin(a))*.4,Math.cos(a),Math.sin(a)).normalize();dend(grp,new T.Vector3(-1.5,0,0).add(d.clone().multiplyScalar(.75)),d,1.5,.07,2)}
   const X0=-.6,X1=7.2;path=[[X0,0,0],[X1,0,0]];
   grp.add(api.reg(cyl([X0,0,0],[X1,0,0],.075,M(0xf2c14e,{roughness:.35})),"axon",INFO.axon[0]));
   const seg=1.25,gap=.14;let x=X0+.55;const myel=[];while(x+seg<X1-.4){myel.push(x);nodes.push(x+seg+gap/2);const mm=new T.Mesh(new T.SphereGeometry(1,28,20),M(0xf5efd2,{roughness:.35}));mm.scale.set(seg/2,.27,.27);mm.position.set(x+seg/2,0,0);api.reg(mm,"mye",INFO.mye[0]);mm.userData.my=1;grp.add(mm);
    const nd=new T.Mesh(new T.CylinderGeometry(.1,.1,gap,14),M(0xff9f1c,{emissive:0x331a00}));nd.rotation.z=Math.PI/2;nd.position.set(x+seg+gap/2,0,0);api.reg(nd,"node",INFO.node[0]);grp.add(nd);x+=seg+gap}
   for(let i=0;i<6;i++){const a=i/6*Math.PI*2,e=[X1+.6,Math.cos(a)*.5,Math.sin(a)*.5];const t=B.tube([[X1,0,0],[X1+.3,Math.cos(a)*.22,Math.sin(a)*.22],e],.04,M(0xf2c14e),8,6);api.reg(t,"axon",INFO.axon[0]);grp.add(t);const bl=new T.Mesh(new T.SphereGeometry(.14,16,12),M(0xef476f));api.reg(bl,"term",INFO.term[0]);bl.position.set(...e);grp.add(bl)}
   const mu=new T.Mesh(new T.CylinderGeometry(.5,.5,2.8,28),M(0xc8453b,{roughness:.6}));mu.rotation.z=Math.PI/2;mu.position.set(X1+1.9,0,0);grp.add(api.reg(mu,"musc",INFO.musc[0]));
  }else if(type===1){ // حسی
   mk(soma,"soma",-1.0,.55,0);mk(new T.Mesh(new T.SphereGeometry(.27,24,18),M(0x7a5cff)),"nuc",-1.0,.55,0);
   const sk=new T.Mesh(new T.BoxGeometry(1.8,.35,2.2),M(0xe6b296,{roughness:.8}));mk(sk,"skin",-8.2,-.2,0);
   const rc=new T.Mesh(new T.SphereGeometry(.2,16,12),M(0xff8fa3));api.reg(rc,"skin",INFO.skin[0]);rc.position.set(-7.6,.08,0);grp.add(rc);
   const dd=B.tube([[-7.6,.08,0],[-5,.2,0],[-3,.35,0],[-1.45,.5,0]],.09,M(0x6fd3a0),30,10);api.reg(dd,"dend",INFO.dend[0]);grp.add(dd);path=[[-7.6,.08,0],[-1.0,.55,0]];
   const seg=1.1,gap=.13;let x=-7.1;while(x+seg<-1.6){nodes.push(x+seg+gap/2);const mm=new T.Mesh(new T.SphereGeometry(1,24,18),M(0xf5efd2,{roughness:.35}));mm.scale.set(seg/2,.22,.22);const yy=.08+(x+7.6)/6.1*.42;mm.position.set(x+seg/2,yy,0);api.reg(mm,"mye",INFO.mye[0]);mm.userData.my=1;grp.add(mm);x+=seg+gap}
   const ax=B.tube([[-.45,.55,0],[.3,.4,0],[1.6,.2,0],[3.2,.2,0]],.075,M(0xf2c14e),20,10);api.reg(ax,"axon",INFO.axon[0]);grp.add(ax);path.push([3.2,.2,0]);
   const cn=new T.Mesh(new T.BoxGeometry(2.4,1.7,2.4),M(0x9aa6bd,{transparent:true,opacity:.7}));mk(cn,"cns",4.6,.2,0);
   for(let i=0;i<4;i++){const a=i/4*6.28,t=B.tube([[3.2,.2,0],[3.6,.2+Math.cos(a)*.2,Math.sin(a)*.2],[3.95,.2+Math.cos(a)*.35,Math.sin(a)*.35]],.04,M(0xf2c14e),8,6);api.reg(t,"axon",INFO.axon[0]);grp.add(t);const bl=new T.Mesh(new T.SphereGeometry(.13,14,10),M(0xef476f));api.reg(bl,"term",INFO.term[0]);bl.position.set(3.95,.2+Math.cos(a)*.35,Math.sin(a)*.35);grp.add(bl)}
  }else{ // رابط
   mk(soma,"soma",0,0,0);mk(new T.Mesh(new T.SphereGeometry(.34,24,18),M(0x7a5cff)),"nuc",0,0,0);
   for(let i=0;i<9;i++){const a=i/9*Math.PI*2,d=new T.Vector3(-.6-.5*R0(),Math.cos(a),Math.sin(a)).normalize();dend(grp,d.clone().multiplyScalar(.8),d,1.35,.07,2)}
   const ax=B.tube([[.8,0,0],[1.6,.1,0],[2.4,-.1,0]],.07,M(0xf2c14e),16,8);api.reg(ax,"axon",INFO.axon[0]);grp.add(ax);path=[[-2,0,0],[0,0,0],[2.4,-.1,0]];
   for(let i=0;i<5;i++){const a=i/5*6.28,e=[3.4,Math.cos(a)*.8,Math.sin(a)*.8],t=B.tube([[2.4,-.1,0],[2.9,Math.cos(a)*.3,Math.sin(a)*.3],e],.04,M(0xf2c14e),10,6);api.reg(t,"axon",INFO.axon[0]);grp.add(t);const bl=new T.Mesh(new T.SphereGeometry(.14,14,10),M(0xef476f));api.reg(bl,"term",INFO.term[0]);bl.position.set(...e);grp.add(bl)}
  }
  grp.userData={path,nodes};grp.children.forEach(m=>{if(m.userData.my)m.visible=mye});
  if(!bead){bead=new T.Mesh(new T.SphereGeometry(.19,20,16),new T.MeshBasicMaterial({color:0xfff2a8}));S.add(bead);light=new T.PointLight(0xffe27a,1.4,4);bead.add(light)}
  bead.visible=false;api.hl(null);};
 let fire=null;
 const go=()=>{const p=grp.userData.path;if(!p||p.length<2)return;fire={t:0}};
 api.tick.push(dt=>{if(!fire||!grp)return;fire.t+=dt;const p=grp.userData.path,a=new T.Vector3(...p[0]),b=new T.Vector3(...p[p.length-1]),total=a.distanceTo(b);
  let k;if(mye&&type!==2&&grp.userData.nodes.length){const nd=[a.x,...grp.userData.nodes,b.x],per=.28,n=nd.length-1,i=Math.min(n-1,Math.floor(fire.t/per));if(fire.t>per*n){fire=null;bead.visible=false;return}const f=Math.min(1,(fire.t-i*per)/(per*.55)),e=f*f*(3-2*f);bead.position.x=nd[i]+(nd[i+1]-nd[i])*e;k=(bead.position.x-a.x)/(b.x-a.x)}
  else{const dur=type===2?1.4:5.2;k=fire.t/dur;if(k>=1){fire=null;bead.visible=false;return}bead.position.lerpVectors(a,b,k)}
  const pp=p.length===3&&k>.5?new T.Vector3(...p[1]).lerp(new T.Vector3(...p[2]),(k-.5)*2):null;bead.visible=true;if(p.length===3)bead.position.copy(k<.5?new T.Vector3(...p[0]).lerp(new T.Vector3(...p[1]),k*2):pp);
  if(type===1&&p.length===2){const pt=bead.position;pt.y=.08+(pt.x+7.6)/6.6*.5}});
 const sp=()=>{g("n-sp").textContent=type===2?"بدون میلین (کوتاه)":mye?"جهشی؛ گره‌به‌گره (سریع)":"پیوسته؛ کند"};
 B.tabs(g("t3"),["نورون حرکتی","نورون حسی","نورون رابط"],i=>{type=i;build();sp();fire=null;if(i===2)g("n-mye").style.display="none";else g("n-mye").style.display="";
  L.set(["نورون حرکتی","نورون حسی","نورون رابط"][i],["<p>پیام را از مراکز عصبی (مغز و نخاع) دریافت می‌کند و به اندام‌هایی مانند دست و پا (ماهیچه) می‌برد. روی بخش‌های مختلف کلیک کن.</p>","<p>پیام را از گیرنده‌ها (مثلاً پوست) به مراکز عصبی می‌برد. جسم یاخته‌ای آن در کنار مسیر قرار دارد.</p>","<p>ارتباط بین نورون‌ها را برقرار می‌کند و بیشتر در مغز و نخاع است. مغز انسان حدود ۱۰۰ میلیارد نورون دارد که هر کدام با تعدادی نورون دیگر ارتباط دارند.</p>"][i],"در بافت عصبی یاخته‌های پشتیبان هم هست که فعالیت عصبی ندارند و به یاخته‌های عصبی کمک می‌کنند.","#8be26e");api.look(i===1?-2:.8,0,0);api.zoom(i===1?15:11)});
 g("n-fire").onclick=go;g("n-mye").onclick=e=>{mye=!mye;e.target.textContent="غلاف میلین: "+(mye?"روشن":"خاموش");e.target.classList.toggle("on",mye);grp.children.forEach(m=>{if(m.userData.my)m.visible=mye});sp()};
 setInterval(()=>{if(!api.wrap.isConnected)return;if(!fire&&api.wrap.offsetParent)go()},3200);
};
})();

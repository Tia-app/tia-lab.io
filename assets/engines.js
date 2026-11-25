(()=>{
const {isP,bp,fac,cnt,nOf,inv,compile}=TM;
const en=s=>String(s).replace(/[۰-۹]/g,d=>d.charCodeAt(0)-1776).replace(/[٬,_\s]/g,"");
const E={};let RAF=0;const g=id=>document.getElementById(id);
const F=(id,l,v)=>`<div class="field"><label>${l}</label><input id="${id}" value="${v}" autocomplete="off"></div>`;
const R=(id,l,a,b,v)=>`<div class="field"><label>${l}</label><input id="${id}" type="range" min="${a}" max="${b}" value="${v}"></div>`;
const Bt=(id,l,c="primary")=>`<button class="btn ${c}" id="${id}">${l}</button>`;
const cv=(h,w=1000,hh=560)=>{h.insertAdjacentHTML("beforeend",`<div class="canvaswrap"><canvas width="${w}" height="${hh}"></canvas></div>`);return h.querySelector("canvas")};
const loop=(c,f)=>{cancelAnimationFrame(RAF);let l=0;const t=n=>{if(!c.isConnected)return;if(c.offsetParent&&!TIA.pause)f(Math.min(.05,(n-l)/1e3||.016));l=n;RAF=requestAnimationFrame(t)};RAF=requestAnimationFrame(t)};
const pt=(c,e)=>{const r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};
const L=n=>n.toLocaleString("en-US");

window.TIA={E,F,R,Bt,cv,loop,pt,g,L,en};
// غربال اراتستن
E["0-0"]=h=>{
h.innerHTML=`<div class="ctl">${F("sn","حد بالا (هر عدد طبیعی)",100)}${R("ss","سرعت نمایش",1,100,35)}${Bt("sgo","شروع غربال")}${Bt("sx","توقف","ghost")}</div><div class="bar"><i id="sb"></i></div><div class="result" id="so">حد را وارد کن و غربال را آغاز کن. تا ۲۵۰۰ عدد، خط‌خوردن مضرب‌ها گام‌به‌گام دیده می‌شود؛ برای عددهای بزرگ‌تر شمارش قطعه‌ای با نوار پیشرفت اجرا می‌شود (بدون سقف).</div>`;
const W=1000,H=500,c=cv(h,W,H),x=c.getContext("2d");let S=null,stop={v:0};
const paint=(i,col)=>{const{cols,cell}=S,px=(i-1)%cols*cell,py=Math.floor((i-1)/cols)*cell;x.fillStyle=col;x.fillRect(px+1,py+1,cell-2,cell-2);if(cell>=20){x.fillStyle="#fff";x.font=`${cell*.36}px Vazirmatn,Arial`;x.textAlign="center";x.textBaseline="middle";x.fillText(i,px+cell/2,py+cell/2)}};
const fin=()=>{S.done=1;let k=0;for(let i=2;i<=S.n;i++)if(!S.cp[i]){k++;paint(i,"#59d6a3")}g("sb").style.width="100%";g("so").innerHTML=`تعداد اعداد اول تا ${L(S.n)}: <b>${L(k)}</b><br>سبز: اول · قرمز تیره: مرکب`};
const step=()=>{if(S.k<=S.n){if(!S.cp[S.k]){S.cp[S.k]=1;paint(S.k,"#5a2f4a")}S.k+=S.p}else{paint(S.p,"#59d6a3");do S.p++;while(S.p*S.p<=S.n&&S.cp[S.p]);if(S.p*S.p>S.n)fin();else{S.k=S.p*S.p;paint(S.p,"#f0bc72")}}};
g("sx").onclick=()=>{stop.v=1;if(S)S.done=1};
g("sgo").onclick=async()=>{stop.v=1;await 0;const my=stop={v:0},n=Math.floor(Number(en(g("sn").value)));x.clearRect(0,0,W,H);g("sb").style.width="0";
if(!(n>=2)){g("so").textContent="یک عدد صحیح ۲ یا بزرگ‌تر وارد کن.";return}
if(n<=2500){const cols=Math.ceil(Math.sqrt(n*W/H)),rows=Math.ceil(n/cols),cell=Math.floor(Math.min(W/cols,H/rows));S={n,cols,cell,cp:new Uint8Array(n+2),p:2,k:4,acc:0,done:0};for(let i=1;i<=n;i++)paint(i,i===1?"#222c40":"#1c2a46");paint(2,"#f0bc72");g("so").textContent="در حال اجرا…";if(n<4)fin()}
else{S=null;g("so").textContent="در حال شمارش قطعه‌ای…";const t0=performance.now(),r=await cnt(n,p=>g("sb").style.width=p*100+"%",my);if(r===null){g("so").textContent="متوقف شد.";return}g("sb").style.width="100%";
g("so").innerHTML=`π(${L(n)}) = <b>${L(r)}</b><br>زمان: ${((performance.now()-t0)/1e3).toFixed(2)} ثانیه · تقریب n/ln n: ${L(Math.round(n/Math.log(n)))} (نسبت ${(r/(n/Math.log(n))).toFixed(4)})`;
x.fillStyle="#a99aff";x.font="64px Vazirmatn,Arial";x.textAlign="center";x.fillText(L(r),W/2,H/2);x.font="20px Vazirmatn,Arial";x.fillStyle="#9aa8c0";x.fillText("عدد اول تا "+L(n),W/2,H/2+50)}};
loop(c,dt=>{if(!S||S.done)return;S.acc+=dt*2*10**(g("ss").value/20);let q=0;while(S.acc>=1&&!S.done&&q++<4e5){S.acc--;step()}g("sb").style.width=Math.min(100,S.p/Math.sqrt(S.n)*100)+"%"});
g("sgo").click()};

// مارپیچ اولام تا یک میلیارد
E["0-1"]=h=>{
h.innerHTML=`<div class="ctl">${F("un","حد بالا (حداکثر ۱٬۰۰۰٬۰۰۰٬۰۰۰)","1000000000")}${F("uj","پرش به عدد","1")}${R("uz","بزرگ‌نمایی",-60,45,-34)}${Bt("ugo","اعمال")}</div><div class="result" id="ui">برای جابه‌جایی بکش، با چرخ ماوس بزرگ‌نمایی کن و روی هر خانه بایست تا عدد آن را ببینی. مارپیچ واقعی اولام تا یک میلیارد عدد.</div>`;
const W=1000,H=620,c=cv(h,W,H),x=c.getContext("2d");let cx=0,cy=0,q=0,dr=null;
const Z=()=>10**(g("uz").value/20),lim=()=>Math.min(1e9,Math.max(1,Math.floor(Number(en(g("un").value))||1e9)));
const draw=()=>{q=0;const z=Z(),N=lim();x.fillStyle="#080d18";x.fillRect(0,0,W,H);
if(z>=1){const a=Math.round(cx-W/2/z)-1,b=Math.round(cx+W/2/z)+1,c0=Math.round(cy-H/2/z)-1,c1=Math.round(cy+H/2/z)+1,gap=z>6?1:0;x.textAlign="center";x.textBaseline="middle";x.font=`${z*.34}px Arial`;
for(let gy=c0;gy<=c1;gy++)for(let gx=a;gx<=b;gx++){const n=nOf(gx,gy);if(n>N)continue;const sx=(gx-cx)*z+W/2,sy=(cy-gy)*z+H/2,p=isP(n);x.fillStyle=n===1?"#f0bc72":p?"#a99aff":"#141f36";x.fillRect(sx-z/2+gap/2,sy-z/2+gap/2,z-gap,z-gap);if(z>=26){x.fillStyle=p?"#10142a":"#52617f";x.fillText(n,sx,sy)}}}
else{const im=x.getImageData(0,0,W,H),d=im.data;for(let py=0;py<H;py+=2)for(let px=0;px<W;px+=2){const gx=Math.round(cx+(px-W/2)/z),gy=Math.round(cy-(py-H/2)/z),n=nOf(gx,gy);if(n>N||!isP(n))continue;for(let u=0;u<2;u++)for(let v=0;v<2;v++){const i=((py+v)*W+px+u)*4;d[i]=185;d[i+1]=170;d[i+2]=255;d[i+3]=255}}x.putImageData(im,0,0)}};
const sched=()=>{if(!q){q=1;requestAnimationFrame(draw)}};
c.onpointerdown=e=>{dr=pt(c,e);c.setPointerCapture(e.pointerId)};c.onpointerup=()=>dr=null;
c.onpointermove=e=>{const p=pt(c,e),z=Z();if(dr){cx-=(p[0]-dr[0])/z;cy+=(p[1]-dr[1])/z;dr=p;sched();return}const gx=Math.round(cx+(p[0]-W/2)/z),gy=Math.round(cy-(p[1]-H/2)/z),n=nOf(gx,gy);g("ui").innerHTML=n>lim()?"خارج از حد انتخاب‌شده":`عدد <b>${L(n)}</b> — ${isP(n)?"اول":"مرکب"} · مختصات (${gx}, ${gy})`};
c.addEventListener("wheel",e=>{e.preventDefault();g("uz").value=+g("uz").value-Math.sign(e.deltaY)*3;sched()},{passive:false});
g("uz").oninput=sched;g("un").onchange=sched;g("ugo").onclick=()=>{const n=Math.floor(Number(en(g("uj").value)));if(n>=1&&n<=lim()){[cx,cy]=inv(n);if(Z()<8)g("uz").value=35}draw()};draw()};

// آزمون اول بودن (BigInt)
E["0-2"]=h=>{
h.innerHTML=`<div class="ctl">${F("pn","عدد (بدون محدودیت طول)","170141183460469231731687303715884105727")}${Bt("pg","بررسی")}</div><div class="result" id="po"></div>`;
const go=()=>{const o=g("po");try{const s=en(g("pn").value);if(!/^\d+$/.test(s))throw Error("فقط رقم وارد کن.");const n=BigInt(s),t0=performance.now();let r=`<span class="mono">${s.length>40?s.slice(0,18)+"…"+s.slice(-18):s}</span> (${L(s.length)} رقم)<br>`;
const p=bp(n);r+=`نتیجه: <b>${p?"اول":n<2n?"نه اول و نه مرکب":"مرکب"}</b> — ${n<(1n<<81n)?"آزمون میلر–رابین قطعی":"آزمون میلر–رابین با ۱۲ پایه (احتمالی، خطای ناچیز)"}<br>`;
if(n>=2n){let a=n+1n,k=0;while(!bp(a)&&performance.now()-t0<2500){a++;k++}r+=`عدد اول بعدی: <span class="mono">${bp(a)?a:"یافت نشد (زمان)"}</span><br>`;if(n>2n){let b=n-1n;while(b>1n&&!bp(b)&&performance.now()-t0<3500)b--;r+=`عدد اول قبلی: <span class="mono">${b>1n&&bp(b)?b:"یافت نشد"}</span><br>`}}
if(p&&bp(2n*n+1n))r+="عدد اول سوفی ژرمن است (۲n+۱ هم اول است).<br>";
if(p&&n>2n)r+=`باقیمانده بر ۶: ${n%6n} ${(n%6n===1n||n%6n===5n)?"":"(غیرعادی)"}<br>`;
o.innerHTML=r+`<small>زمان محاسبه: ${(performance.now()-t0).toFixed(1)} میلی‌ثانیه</small>`}catch(e){o.textContent="خطا: "+e.message}};
g("pg").onclick=go;g("pn").onkeydown=e=>e.key==="Enter"&&go();go()};

// تجزیه
E["0-5"]=h=>{
h.innerHTML=`<div class="ctl">${F("fn","عدد صحیح (بدون محدودیت طول)","600851475143")}${Bt("fg","تجزیه کن")}</div><div class="result" id="fo"></div>`;
const go=()=>{const o=g("fo");try{const s=en(g("fn").value);if(!/^\d+$/.test(s)||BigInt(s)<2n)throw Error("عدد صحیح ۲ یا بزرگ‌تر وارد کن.");const n=BigInt(s),t0=performance.now();let f;try{f=fac(n)}catch(e){if(e.message==="HARD")throw Error("این عدد عامل‌های اول بسیار بزرگ دارد و در مرورگر زمان‌بر است.");throw e}
const m=new Map();f.forEach(p=>m.set(p,(m.get(p)||0)+1));const ex=[...m];let tau=1n,sig=1n,phi=n;ex.forEach(([p,e])=>{tau*=BigInt(e+1);sig*=(p**BigInt(e+1)-1n)/(p-1n);phi=phi/p*(p-1n)});
const cls=sig-n>n?"فراوان":sig-n===n?"کامل":"ناقص";
o.innerHTML=`<span class="mono">${s} = ${ex.map(([p,e])=>e>1?`${p}<sup>${e}</sup>`:p).join(" × ")}</span><br>تعداد مقسوم‌علیه‌ها τ: <span class="mono">${tau}</span><br>مجموع مقسوم‌علیه‌ها σ: <span class="mono">${sig}</span> (${cls})<br>تابع اویلر φ: <span class="mono">${phi}</span><br><small>${f.length===1?"عدد اول است · ":""}زمان: ${(performance.now()-t0).toFixed(1)} میلی‌ثانیه</small>`}catch(e){o.textContent="خطا: "+e.message}};
g("fg").onclick=go;g("fn").onkeydown=e=>e.key==="Enter"&&go();go()};

// رسم تابع
E["0-8"]=h=>{
h.innerHTML=`<div class="ctl">${F("f1","f₁(x)","sin(x)*x")}${F("f2","f₂(x)","x^2/10-3")}${F("f3","f₃(x)","5*exp(-x^2)")}${Bt("fr","بازنشانی نما","ghost")}</div><div class="result" id="fo" dir="ltr">sin cos tan asin acos atan sinh cosh tanh exp ln log sqrt abs floor ceil round pi e</div>`;
const W=1000,H=600,c=cv(h,W,H),x=c.getContext("2d"),col=["#a99aff","#59d6a3","#f0bc72"];let cx=0,cy=0,sc=50,dr=null;
const draw=()=>{x.fillStyle="#091321";x.fillRect(0,0,W,H);const st=10**Math.floor(Math.log10(W/sc/6));x.font="12px Arial";x.textAlign="left";x.lineWidth=1;
for(let v=Math.ceil((cx-W/2/sc)/st)*st;v<=cx+W/2/sc;v+=st){const px=(v-cx)*sc+W/2;x.strokeStyle=Math.abs(v)<st/2?"#7184a4":"#1c2a44";x.beginPath();x.moveTo(px,0);x.lineTo(px,H);x.stroke();x.fillStyle="#6d7c98";x.fillText(+v.toPrecision(6),px+3,H-6)}
for(let v=Math.ceil((cy-H/2/sc)/st)*st;v<=cy+H/2/sc;v+=st){const py=(cy-v)*sc+H/2;x.strokeStyle=Math.abs(v)<st/2?"#7184a4":"#1c2a44";x.beginPath();x.moveTo(0,py);x.lineTo(W,py);x.stroke();x.fillStyle="#6d7c98";x.fillText(+v.toPrecision(6),4,py-3)}
[1,2,3].forEach(i=>{const s=g("f"+i).value.trim();if(!s)return;let f;try{f=compile(s)}catch(e){g("fo").textContent="f"+i+": "+e.message;return}x.strokeStyle=col[i-1];x.lineWidth=2.4;x.beginPath();let on=false,p0=0;for(let px=0;px<=W;px++){let Y;try{Y=f(cx+(px-W/2)/sc)}catch{Y=NaN}const py=(cy-Y)*sc+H/2;if(!Number.isFinite(Y)||Math.abs(py-H/2)>5e3){on=false;continue}if(on&&Math.abs(py-p0)<H*2)x.lineTo(px,py);else x.moveTo(px,py);on=true;p0=py}x.stroke()})};
c.onpointerdown=e=>{dr=pt(c,e);c.setPointerCapture(e.pointerId)};c.onpointerup=()=>dr=null;
c.onpointermove=e=>{const p=pt(c,e);if(dr){cx-=(p[0]-dr[0])/sc;cy+=(p[1]-dr[1])/sc;dr=p;draw()}};
c.addEventListener("wheel",e=>{e.preventDefault();const p=pt(c,e),k=e.deltaY<0?1.15:1/1.15,ax=cx+(p[0]-W/2)/sc,ay=cy-(p[1]-H/2)/sc;sc*=k;cx=ax-(p[0]-W/2)/sc;cy=ay+(p[1]-H/2)/sc;draw()},{passive:false});
["f1","f2","f3"].forEach(i=>g(i).oninput=draw);g("fr").onclick=()=>{cx=cy=0;sc=50;draw()};draw()};

// n-body
E["2-1"]=h=>{
h.innerHTML=`<div class="ctl">${Bt("p1","دو جسم","ghost")}${Bt("p2","هشت‌شکل سه‌جسمی","ghost")}${Bt("p3","منظومه کوچک","ghost")}${Bt("p4","خوشه تصادفی","ghost")}${R("nsp","سرعت زمان",1,30,8)}${Bt("ntr","ردپا","ghost")}</div><div class="result" id="no">برای افزودن جرم تازه روی صفحه کلیک کن. انتگرال‌گیر: ورله سرعتی (پایستار)، با نرم‌سازی کوچک.</div>`;
const W=1000,H=560,c=cv(h,W,H),x=c.getContext("2d");let bd=[],sc=220,tr=true,E0=0,tm=0;
const acc=()=>bd.map(a=>{let ax=0,ay=0;for(const b of bd)if(b!==a){const dx=b.x-a.x,dy=b.y-a.y,r=b.m*Math.pow(dx*dx+dy*dy+4e-4,-1.5);ax+=dx*r;ay+=dy*r}return[ax,ay]});
const step=dt=>{let a=acc();bd.forEach((p,i)=>{p.vx+=a[i][0]*dt/2;p.vy+=a[i][1]*dt/2;p.x+=p.vx*dt;p.y+=p.vy*dt});a=acc();bd.forEach((p,i)=>{p.vx+=a[i][0]*dt/2;p.vy+=a[i][1]*dt/2})};
const en_=()=>{let e=0;bd.forEach((a,i)=>{e+=.5*a.m*(a.vx**2+a.vy**2);for(let j=i+1;j<bd.length;j++){const b=bd[j];e-=a.m*b.m/Math.sqrt((a.x-b.x)**2+(a.y-b.y)**2+4e-4)}});return e};
const pre={p1:()=>{sc=240;return[{m:1,x:-.5,y:0,vx:0,vy:-.7071},{m:1,x:.5,y:0,vx:0,vy:.7071}]},
p2:()=>{sc=240;return[{m:1,x:-.97000436,y:.24308753,vx:.466203685,vy:.43236573},{m:1,x:0,y:0,vx:-.93240737,vy:-.86473146},{m:1,x:.97000436,y:-.24308753,vx:.466203685,vy:.43236573}]},
p3:()=>{sc=190;return[{m:1,x:0,y:0,vx:0,vy:0},...[.35,.6,.9,1.3].map((r,i)=>{const a=i*1.9;return{m:1e-3,x:r*Math.cos(a),y:r*Math.sin(a),vx:-Math.sin(a)/Math.sqrt(r),vy:Math.cos(a)/Math.sqrt(r)}})]},
p4:()=>{sc=220;return Array.from({length:7},()=>({m:.2+Math.random()*.8,x:(Math.random()-.5)*1.6,y:(Math.random()-.5)*1.6,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))}};
const set=k=>{bd=pre[k]();E0=en_();tm=0;x.fillStyle="#091321";x.fillRect(0,0,W,H)};
["p1","p2","p3","p4"].forEach(k=>g(k).onclick=()=>set(k));g("ntr").onclick=()=>tr=!tr;
c.onpointerdown=e=>{const p=pt(c,e),px=(p[0]-W/2)/sc,py=(p[1]-H/2)/sc,r=Math.hypot(px,py)||1;bd.push({m:.05,x:px,y:py,vx:-py/r*.6,vy:px/r*.6});E0=en_()};
set("p2");
loop(c,()=>{const n=+g("nsp").value;for(let i=0;i<n;i++)step(.002);tm+=n*.002;x.fillStyle=tr?"rgba(9,19,33,.12)":"#091321";x.fillRect(0,0,W,H);
bd.forEach((b,i)=>{x.fillStyle=`hsl(${(i*67+200)%360} 85% 68%)`;x.shadowColor=x.fillStyle;x.shadowBlur=14;x.beginPath();x.arc(b.x*sc+W/2,b.y*sc+H/2,3+4*Math.cbrt(b.m),0,7);x.fill()});x.shadowBlur=0;
const e=en_();g("no").innerHTML=`اجسام: ${bd.length} · زمان شبیه‌سازی: ${tm.toFixed(2)} · انرژی کل: ${e.toFixed(5)} · رانش انرژی: ${(Math.abs((e-E0)/E0)*100).toFixed(4)}٪`})};

// آونگ دوگانه
E["2-6"]=h=>{
h.innerHTML=`<div class="ctl">${R("pa","زاویه اولیه (درجه)",10,179,120)}${R("pd","اختلاف دو آونگ (میلیونیوم رادیان)",1,1000,1)}${Bt("pgo","شروع دوباره")}</div><div class="result" id="po"></div>`;
const W=1000,H=600,c=cv(h,W,H),x=c.getContext("2d");let A,B,TA,TB,t;
const f=s=>{const[a,b,u,v]=s,d=a-b,den=3-Math.cos(2*d),G=9.81;return[u,v,(-3*G*Math.sin(a)-G*Math.sin(a-2*b)-2*Math.sin(d)*(v*v+u*u*Math.cos(d)))/den,2*Math.sin(d)*(2*u*u+2*G*Math.cos(a)+v*v*Math.cos(d))/den]};
const rk=(s,dt)=>{const ad=(a,b,k)=>a.map((v,i)=>v+b[i]*k),k1=f(s),k2=f(ad(s,k1,dt/2)),k3=f(ad(s,k2,dt/2)),k4=f(ad(s,k3,dt));return s.map((v,i)=>v+dt/6*(k1[i]+2*k2[i]+2*k3[i]+k4[i]))};
const reset=()=>{const a=g("pa").value*Math.PI/180,d=g("pd").value*1e-6;A=[a,a,0,0];B=[a+d,a,0,0];TA=[];TB=[];t=0};
const pos=s=>{const X0=W/2,Y0=170,k=135,x1=X0+k*Math.sin(s[0]),y1=Y0+k*Math.cos(s[0]);return[X0,Y0,x1,y1,x1+k*Math.sin(s[1]),y1+k*Math.cos(s[1])]};
g("pgo").onclick=reset;g("pa").onchange=reset;g("pd").onchange=reset;reset();
loop(c,()=>{for(let i=0;i<6;i++){A=rk(A,.004);B=rk(B,.004)}t+=.024;const pa=pos(A),pb=pos(B);TA.push([pa[4],pa[5]]);TB.push([pb[4],pb[5]]);if(TA.length>700){TA.shift();TB.shift()}
x.fillStyle="#091321";x.fillRect(0,0,W,H);[[TA,"#a99aff",pa],[TB,"#f0bc72",pb]].forEach(([T,co,p])=>{x.strokeStyle=co;x.globalAlpha=.55;x.lineWidth=1.6;x.beginPath();T.forEach((q,i)=>i?x.lineTo(q[0],q[1]):x.moveTo(q[0],q[1]));x.stroke();x.globalAlpha=1;x.lineWidth=3;x.beginPath();x.moveTo(p[0],p[1]);x.lineTo(p[2],p[3]);x.lineTo(p[4],p[5]);x.stroke();x.fillStyle=co;[[p[2],p[3]],[p[4],p[5]]].forEach(q=>{x.beginPath();x.arc(q[0],q[1],9,0,7);x.fill()})});
g("po").innerHTML=`زمان: ${t.toFixed(1)} s · اختلاف زاویه دو آونگ: ${Math.abs(A[1]-B[1]).toExponential(2)} rad<br><small>شرایط اولیه تقریباً یکسان است؛ اختلاف به‌تدریج رشد می‌کند (آشوب و اثر پروانه‌ای).</small>`})};

// منظومه شمسی
E["4-0"]=h=>{
const D=[["عطارد",.387,.206,87.97,4879,3.7,"#b9b2a7"],["زهره",.723,.007,224.7,12104,8.87,"#e8c07a"],["زمین",1,.017,365.25,12742,9.81,"#5ab0ff"],["مریخ",1.524,.093,687,6779,3.71,"#e2735a"],["مشتری",5.203,.049,4332.6,139820,24.79,"#d9a878"],["زحل",9.537,.054,10759,116460,10.44,"#e6d29a"],["اورانوس",19.19,.047,30688,50724,8.69,"#8fe0e6"],["نپتون",30.07,.009,60182,49244,11.15,"#6f8cff"]];
h.innerHTML=`<div class="ctl">${R("ts","سرعت زمان",0,100,40)}${Bt("tp","توقف / ادامه","ghost")}${Bt("tr","بازنشانی","ghost")}</div><div class="result" id="si"></div>`;
const W=1000,H=620,c=cv(h,W,H),x=c.getContext("2d");let t=0,pause=false,sel=2;const rs=a=>44*Math.sqrt(a);
const belt=Array.from({length:380},()=>({a:2.2+Math.random()*1.1,p:Math.random()*6.28}));
const kep=(M,e)=>{let E=M;for(let i=0;i<8;i++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));return E};
const P=()=>D.map((d,i)=>{const[,a,e,per]=d,E=kep((6.2832*t/per+i*.9)%6.2832,e),f=rs(a)/a;return[(a*(Math.cos(E)-e))*f+W/2,a*Math.sqrt(1-e*e)*Math.sin(E)*f+H/2]});
const info=()=>{const d=D[sel];g("si").innerHTML=`<b>${d[0]}</b> · فاصله از خورشید: ${d[1]} AU · دوره گردش: ${(d[3]/365.25).toFixed(2)} سال<br>قطر: ${L(d[4])} km · گرانش سطحی: ${d[5]} m/s² · سرعت مداری میانگین: ${(6.2832*d[1]*149597870.7/(d[3]*86400)).toFixed(1)} km/s · نور تا آنجا: ${(d[1]*499).toFixed(0)} s`};
g("tp").onclick=()=>pause=!pause;g("tr").onclick=()=>t=0;c.onpointerdown=e=>{const p=pt(c,e),q=P();let b=1e9;q.forEach((s,i)=>{const dd=Math.hypot(s[0]-p[0],s[1]-p[1]);if(dd<b&&dd<30){b=dd;sel=i}});info()};info();
loop(c,dt=>{if(!pause)t+=dt*10**(g("ts").value/25);x.fillStyle="#050a14";x.fillRect(0,0,W,H);const gr=x.createRadialGradient(W/2,H/2,2,W/2,H/2,48);gr.addColorStop(0,"#fff6c8");gr.addColorStop(.3,"#f8c55a");gr.addColorStop(1,"rgba(248,197,90,0)");x.fillStyle=gr;x.beginPath();x.arc(W/2,H/2,48,0,7);x.fill();
x.fillStyle="#6d7c98";belt.forEach(b=>{const an=b.p+t/(b.a**1.5*365.25)*6.2832,r=rs(b.a);x.fillRect(W/2+r*Math.cos(an),H/2+r*Math.sin(an)*.97,1.3,1.3)});
D.forEach((d,i)=>{const[,a,e]=d,f=rs(a)/a;x.strokeStyle=i===sel?"#ffffff55":"#ffffff1c";x.lineWidth=1;x.beginPath();x.ellipse(W/2-a*e*f,H/2,a*f,a*Math.sqrt(1-e*e)*f,0,0,7);x.stroke()});
P().forEach((p,i)=>{const d=D[i],r=Math.max(3,Math.min(12,3+Math.log10(d[4]/4e3)*5));x.fillStyle=d[6];x.shadowColor=d[6];x.shadowBlur=i===sel?20:8;x.beginPath();x.arc(p[0],p[1],r,0,7);x.fill();x.shadowBlur=0;if(i===5){x.strokeStyle=d[6];x.beginPath();x.ellipse(p[0],p[1],r*2,r*.6,-.4,0,7);x.stroke()}if(i===sel){x.fillStyle="#fff";x.font="13px Vazirmatn,Arial";x.textAlign="center";x.fillText(d[0],p[0],p[1]-r-8)}});
x.fillStyle="#9aa8c0";x.font="13px Vazirmatn,Arial";x.textAlign="right";x.fillText(`زمان گذشته: ${(t/365.25).toFixed(2)} سال زمینی · روی هر سیاره کلیک کن`,W-14,H-12)})};

// مسیریابی و ناوبری
const om=window.openModule;window.openModule=function(li,mi){const from=state.view;cancelAnimationFrame(RAF);om(li,mi);const k=li+"-"+mi,t=$(".tool");
$("#toolBack").onclick=()=>from==="detail"||from==="tool"?openLab(li):show(from);
if(E[k]){[...t.children].slice(3).forEach(n=>n.remove());t.classList.add("wide");const d=document.createElement("div");d.id="eng";t.appendChild(d);E[k](d);t.insertAdjacentHTML("beforeend",`<div class="toolbuttons"><button class="btn ghost" id="favBtn">☆ نشان‌کردن این بخش</button></div>`);$("#favBtn").onclick=()=>toggleFav(k)}
document.title=labs[li].mods[mi]+" | آزمایشگاه تیا";history.replaceState(null,"","#/"+li+"/"+mi)};
const ol=window.openLab;window.openLab=function(i){cancelAnimationFrame(RAF);ol(i);$$("[data-module]").forEach(b=>{if(E[i+"-"+b.dataset.module]){b.classList.add("eng");b.querySelector("small").textContent="موتور پژوهشی · شبیه‌سازی زنده"}});document.title=labs[i].name+" | آزمایشگاه تیا";history.replaceState(null,"","#/"+i)};
const sh=window.show;window.show=function(v,t){if(v!=="tool")cancelAnimationFrame(RAF);sh(v,t);if(v==="home"||v==="labs"){history.replaceState(null,"","#/");document.title=v==="home"?"آزمایشگاه تیا | آزمایشگاه آنلاین ریاضی، فیزیک، فضا و هوش مصنوعی":"آزمایشگاه‌ها | آزمایشگاه تیا"}};
const m=location.hash.match(/^#\/([0-7])(?:\/(\d))?$/);if(m){m[2]!==undefined?openModule(+m[1],+m[2]):openLab(+m[1])}
})();

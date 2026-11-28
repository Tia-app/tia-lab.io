(()=>{
const TAU=Math.PI*2,rg=s=>()=>(s=s*1664525+1013904223>>>0)/4294967296,hs=k=>[...k].reduce((a,c)=>(a*31+c.charCodeAt(0))>>>0,7);
const G={};
G.b=k=>{const r=rg(hs(k)),n=7+hs(k)%4,s=1.2+r()*2,H=[];for(let i=0;i<n;i++){H[i]=[];for(let j=0;j<n;j++)H[i][j]=.3+2.8*Math.exp(-(((i-n/2)**2+(j-n/2)**2)/(n*s)))+r()*.5}
return t=>{const L=[],P=[],u=Math.min(1,t*.7),w=.36;for(let i=0;i<n;i++)for(let j=0;j<n;j++){const x=(i-n/2)*.9,z=(j-n/2)*.9,h=H[i][j]*u,c=`hsl(${240-h*40} 80% 66%)`,q=[[x,z],[x+w,z],[x+w,z+w],[x,z+w]];q.forEach((a,m)=>{const b=q[(m+1)%4];L.push([a[0],0,a[1],a[0],h,a[1],c,1.4],[a[0],h,a[1],b[0],h,b[1],c,1.4])})}return{l:L,p:P}}};
G.s=k=>{const r=rg(hs(k)),c=2+hs(k)%3,g=()=>(r()+r()+r()-1.5)*1.3,C=[],D=[];for(let i=0;i<c;i++){const o=[(r()-.5)*7,(r()-.5)*4,(r()-.5)*7];C.push(o);for(let j=0;j<70;j++)D.push([o[0]+g(),o[1]+g(),o[2]+g(),i])}const col=["#a99aff","#59d6a3","#f0bc72","#f27d8d"];
return t=>{const L=[[-5,-3,-5,5,-3,-5,"#26324f",1],[-5,-3,-5,-5,3,-5,"#26324f",1],[-5,-3,-5,-5,-3,5,"#26324f",1]],P=D.map(d=>[d[0],d[1]+Math.sin(t*2+d[0])*.05,d[2],col[d[3]],3]);C.forEach((o,i)=>P.push([...o,col[i],9]));return{l:L,p:P}}};
G.f=(k,v)=>{const ph=hs(k)%5;return t=>{if(v==="0"){const m=TIA.mesh(22,9,(x,z)=>(x*x+z*z)*.08+.3*Math.sin(x*1.3)*Math.cos(z*1.1)-1.4);const a=(t*.5)%1,rr=4*(1-a),an=a*9+ph,x=rr*Math.cos(an),z=rr*Math.sin(an);m.p.push([x,(x*x+z*z)*.08+.3*Math.sin(x*1.3)*Math.cos(z*1.1)-1.4+.25,z,"#f0bc72",8]);return m}
if(v==="1")return TIA.mesh(24,9,(x,z)=>Math.sin(x*1.2+t)*Math.cos(z*1.2)*.9+(x*x-z*z)*.05);
if(v==="2")return TIA.mesh(28,10,(x,z)=>Math.sin(Math.hypot(x,z)*1.2-t*2.5+ph)*Math.exp(-Math.hypot(x,z)/5)*2+Math.sin(x*.8+t)*.3);
const m=TIA.mesh(28,10,(x,z)=>-1.8/(Math.hypot(x,z)+.55)+.8);m.p.push([0,-1.7,0,"#000",12]);const a=t*1.5;m.p.push([3*Math.cos(a)*(1-.12*(t%6)),-.9/(1+.1*(t%6)),3*Math.sin(a)*(1-.12*(t%6)),"#f0bc72",7]);return m}};
G.g=k=>{const r=rg(hs(k)),N=1300,D=[];for(let i=0;i<N;i++){const y=1-2*(i+.5)/N,rr=Math.sqrt(1-y*y),a=i*2.39996,lon=a%TAU,lat=Math.asin(y),land=Math.sin(2.1*lon+1.3)*Math.cos(1.7*lat)+.6*Math.sin(.7*lon+3*lat)>.15;D.push([rr*Math.cos(a)*3,y*3,rr*Math.sin(a)*3,land])}
const A=[(r()-.5)*2,r()*TAU],B=[(r()-.5)*2,r()*TAU],pos=(la,lo,R)=>[R*Math.cos(la)*Math.cos(lo),R*Math.sin(la),R*Math.cos(la)*Math.sin(lo)];
return t=>{const L=[],P=D.map(d=>[d[0],d[1],d[2],d[3]?"#59d6a3":"#2b4f9e",d[3]?2.6:2]);for(let m=0;m<6;m++){const lo=m/6*TAU;for(let i=0;i<40;i++){const a=i/40*TAU-Math.PI/2,b=(i+1)/40*TAU-Math.PI/2;L.push([...pos(a,lo,3.02),...pos(b,lo,3.02),"#1f3f7a",.8])}}
for(let m=-2;m<=2;m++){const la=m*.5;for(let i=0;i<40;i++)L.push([...pos(la,i/40*TAU,3.02),...pos(la,(i+1)/40*TAU,3.02),"#1f3f7a",.8])}
const s=(t*.3)%1;let o=null;for(let i=0;i<=30;i++){const f=i/30,la=A[0]+(B[0]-A[0])*f,lo=A[1]+(B[1]-A[1])*f,q=pos(la,lo,3.02+.9*Math.sin(f*Math.PI));if(o)L.push([...o,...q,"#f0bc72",2]);o=q;if(Math.abs(f-s)<.017)P.push([...q,"#fff",6])}P.push([...pos(...A,3.05),"#ff6b81",8],[...pos(...B,3.05),"#51d5e8",8]);return{l:L,p:P}}};
G.o=(k,v)=>{const d=[4879,12104,12742,6779,139820,116460,50724,49244],cl=["#b9b2a7","#e8c07a","#5ab0ff","#e2735a","#d9a878","#e6d29a","#8fe0e6","#6f8cff"],ec=k==="4-1"?.6:.06;
return t=>{const L=[],P=[];if(v==="1"){d.forEach((q,i)=>P.push([-6.5+i*1.85,0,0,cl[i],Math.max(2.5,Math.cbrt(q)*.55)*1.5]));P.push([-8,0,0,"#ffd76a",18]);return{l:L,p:P}}
if(v==="2"){P.push([0,0,0,"#d9a878",26]);[[2.2,1.2,"#f1ece0",4],[3.1,.75,"#e2c27a",5],[4.1,.5,"#b9b2a7",6],[5.2,.3,"#8fa1b8",5]].forEach(([a,w,c,z],i)=>{for(let j=0;j<60;j++)L.push([a*Math.cos(j/60*TAU),0,a*Math.sin(j/60*TAU),a*Math.cos((j+1)/60*TAU),0,a*Math.sin((j+1)/60*TAU),"#2b3a5f",1]);P.push([a*Math.cos(t*w+i),0,a*Math.sin(t*w+i),c,z])});return{l:L,p:P}}
P.push([0,0,0,"#ffd76a",22]);d.forEach((q,i)=>{const a=1.5+i*.62+(k==="4-4"?i*.25:0),b=a*Math.sqrt(1-ec*ec);for(let j=0;j<64;j++){const u=j/64*TAU,w=(j+1)/64*TAU;L.push([a*(Math.cos(u)-ec),0,b*Math.sin(u),a*(Math.cos(w)-ec),0,b*Math.sin(w),"#33426a",1])}const ang=t*1.3/Math.pow(a,1.5)+i;P.push([a*(Math.cos(ang)-ec),0,b*Math.sin(ang),cl[i],Math.max(3,Math.cbrt(q)*.35)])});
if(k==="4-5"){const rr=(t*2.5)%7;for(let j=0;j<40;j++)P.push([rr*Math.cos(j/40*TAU),0,rr*Math.sin(j/40*TAU),"#fff6c8",2.5])}return{l:L,p:P}}};
G.r=(k,v)=>t=>{const L=[],P=[],F=v==="1"?[-3.5,0,0]:[4,0,0],S=v==="1"?[-6,0,0]:[-6,0,0];for(let j=0;j<40;j++){const a=j/40*TAU,y=2*Math.cos(a),z=2*Math.sin(a),c=j%2?"#f0bc72":"#51d5e8";L.push([0,2*Math.cos(a),2*Math.sin(a),0,2*Math.cos((j+1)/40*TAU),2*Math.sin((j+1)/40*TAU),"#a99aff",2.4]);if(j%2===0){const q=v==="1"?[-3.5,0,0]:[4,0,0],e=[v==="1"?-9:9,y*(v==="1"?-.2:-.9)*0+ (q[0]-0)*0,0];L.push([...S,0,y,z,c,1.2]);const dx=q[0],ex=v==="1"?-1:1,Lx=7*ex;L.push([0,y,z,Lx,y+(0-y)*Math.abs(Lx/dx),z+(0-z)*Math.abs(Lx/dx),c,1.2]);const f=(t*.4+j/40)%1;P.push([-6+f*6,y*f,z*f,"#fff",3.5],[(v==="1"?-1:1)*f*Math.abs(Lx),y+(0-y)*f*Math.abs(Lx/dx),z+(0-z)*f*Math.abs(Lx/dx),"#fff",3.5])}}P.push([...S,"#59d6a3",9],[...F,"#ff6b81",7]);return{l:L,p:P}};
G.c=k=>t=>{const L=[],P=[],X=4.2,Z=2.6,per=2*(2*X+2*Z),at=s=>{s=(s%per+per)%per;if(s<2*X)return[-X+s,0,-Z];s-=2*X;if(s<2*Z)return[X,0,-Z+s];s-=2*Z;if(s<2*X)return[X-s,0,Z];s-=2*X;return[-X,0,Z-s]};
for(let i=0;i<48;i++){const a=at(i/48*per),b=at((i+1)/48*per);L.push([...a,...b,"#6d7c98",2.4])}for(let i=0;i<30;i++)P.push([...at(i/30*per+t*2),"#51d5e8",3.2]);
L.push([-X-.25,-.9,Z*.4,-X-.25,.9,Z*.4,"#59d6a3",4],[-X+.25,-.5,Z*.4,-X+.25,.5,Z*.4,"#9aa8c0",4]);const gl=.6+.4*Math.sin(t*3);P.push([X,0,0,"#ffe278",18+gl*10],[X,0,0,"#fff6c8",8]);for(let i=0;i<5;i++)L.push([-1.4+i*.7,0,-Z-.001,-1.1+i*.7,.5*(i%2?1:-1),-Z,"#a99aff",2.5]);return{l:L,p:P}};
G.t=k=>{const r=rg(hs(k)),nd=[{p:[0,3.5,0],ch:[],d:0}],Q=[0];let bi=0;while(bi<Q.length){const n=nd[Q[bi++]];if(n.d>=3)continue;const c=2+(r()<.5?1:0);for(let i=0;i<c;i++){const a=i/c*TAU+n.d+r()*.6,rr=2.6-n.d*.55,m={p:[n.p[0]+Math.cos(a)*rr,n.p[1]-1.7,n.p[2]+Math.sin(a)*rr],ch:[],d:n.d+1};nd.push(m);n.ch.push(nd.length-1);Q.push(nd.length-1)}}
return t=>{const L=[],P=[],h=Math.floor(t*4)%nd.length;nd.forEach((n,i)=>{n.ch.forEach(c=>L.push([...n.p,...nd[c].p,"#4a5a8c",1.5]));P.push([...n.p,i<=h?"#f0bc72":"#a99aff",i===h?10:6])});return{l:L,p:P}}};
G.p=k=>{const r=rg(hs(k)),n=26,ph=r()*2;return t=>{const L=[],P=[],pt=i=>{const a=i*.62+ph,rr=.7+i*.13;return[rr*Math.cos(a),-3.5+i*.28,rr*Math.sin(a)]};for(let i=0;i<n;i++){const a=pt(i);if(i)L.push([...pt(i-1),...a,"#4a5a8c",1.4]);P.push([...a,`hsl(${220+i*5} 80% 68%)`,i===Math.floor(t*3)%n?10:5])}return{l:L,p:P}}};
const M={0:{2:"b",3:"b",4:"b",5:"t",6:"b",7:"p"},1:{0:"s",1:"f0",2:"b",3:"t",4:"f0",5:"t",6:"s",7:"s",8:"s",9:"b"},2:{2:"r1",3:"c",4:"f2",9:"r0"},3:{0:"b",1:"b",2:"b",3:"t",4:"b",5:"f2",6:"t",7:"b",8:"t",9:"t"},4:{0:"o0",1:"o0",2:"o1",3:"o1",4:"o0",5:"o0",6:"f3",7:"o2",8:"o0",9:"o0"},5:{0:"b",1:"b",2:"b",3:"s",4:"b",5:"s",6:"b",7:"s",8:"b",9:"f2"},6:{0:"g",1:"g",2:"g",3:"g",4:"f2",5:"f2",6:"f1",7:"b",8:"b",9:"g"},7:Object.fromEntries(Array.from({length:10},(_,i)=>[i,"p"]))};
for(const l in M)for(const m in M[l]){const c=M[l][m],k=l+"-"+m;TIA.reg(k,G[c[0]](k,c.slice(1)))}
})();

/* نمای سه‌بعدی دانشمندان: خط زمان واقعی دانشمندان همین صفحه */
(()=>{
const TAU=Math.PI*2,fa=n=>String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
const LN={a:{z:-4.5,c:"#f0bc72",n:"نجوم و نورشناسی"},p:{z:-1.5,c:"#51d5e8",n:"فیزیک"},m:{z:1.5,c:"#a99aff",n:"ریاضی و رایانش"},c:{z:4.5,c:"#59d6a3",n:"پزشکی و شیمی"}};
const D=[["خوارزمی", 780, "m", "جبر و واژه‌ی «الگوریتم» به نام او پیوند دارد."], ["زکریای رازی", 865, "c", "پزشک و شیمی‌دان؛ نویسنده‌ی «الحاوی»."], ["ابن‌هیثم", 965, "a", "بنیان‌گذار اپتیک تجربی؛ نویسنده‌ی «المناظر»."], ["ابوریحان بیرونی", 973, "a", "شعاع زمین را با اندازه‌گیری ارتفاع کوه برآورد کرد؛ نویسنده‌ی «قانون مسعودی»."], ["ابن‌سینا", 980, "c", "«القانون فی الطب» و «الشفا» از آثار اوست."], ["عمر خیام", 1048, "m", "طبقه‌بندی و حل هندسی معادلات درجه سه و مشارکت در تقویم جلالی."], ["خواجه نصیر طوسی", 1201, "a", "رصدخانه‌ی مراغه و «زیج ایلخانی»."], ["غیاث‌الدین جمشید کاشانی", 1380, "m", "در «رساله‌ی محیطیه» عدد π را با دقتی نزدیک ۱۶ رقم اعشار محاسبه کرد."], ["گالیله", 1564, "a", "مشاهدات تلسکوپی و مطالعه‌ی سقوط آزاد و آونگ."], ["کپلر", 1571, "a", "سه قانون حرکت سیارات."], ["نیوتن", 1643, "p", "قوانین حرکت و گرانش عمومی."], ["لئونارد اویلر", 1707, "m", "بنیان‌گذار بسیاری از شاخه‌های ریاضی و نمادگذاری مدرن."], ["شارل کولن", 1736, "p", "قانون نیروی بین بارهای الکتریکی (۱۷۸۵)."], ["الساندرو ولتا", 1745, "p", "ساخت نخستین پیل الکتریکی پایا (۱۸۰۰)."], ["آندره-ماری آمپر", 1775, "p", "بنیان‌گذار الکترودینامیک؛ یکای جریان به نام اوست."], ["کارل فریدریش گاوس", 1777, "m", "نظریه‌ی اعداد، آمار و ژئودزی؛ قانون گاوس در الکتریسیته به نام اوست."], ["گئورگ اهم", 1789, "p", "رابطه‌ی V = IR (۱۸۲۷)."], ["مایکل فارادی", 1791, "p", "القای الکترومغناطیسی (۱۸۳۱)."], ["جیمز کلرک ماکسول", 1831, "p", "معادلات الکترومغناطیس و پیش‌بینی امواج الکترومغناطیسی."], ["نیکولا تسلا", 1856, "p", "سامانه‌های جریان متناوب چندفازی و موتور القایی."], ["هاینریش هرتز", 1857, "p", "تولید و آشکارسازی امواج رادیویی (دهه‌ی ۱۸۸۰)."], ["ماری کوری", 1867, "c", "پژوهش در پرتوزایی؛ نوبل فیزیک ۱۹۰۳ و شیمی ۱۹۱۱."], ["آلبرت اینشتین", 1879, "p", "نسبیت خاص و عام؛ نوبل فیزیک ۱۹۲۱ برای اثر فوتوالکتریک."], ["امی نوتر", 1882, "m", "قضیه‌ی نوتر: هر تقارن پیوسته یک کمیت پایسته می‌سازد."], ["آلن تورینگ", 1912, "m", "ماشین تورینگ و بنیان نظری رایانش."], ["ریچارد فاینمن", 1918, "p", "نمودارهای فاینمن و الکترودینامیک کوانتومی؛ نوبل ۱۹۶۵."], ["مریم میرزاخانی", 1977, "m", "نخستین زن برنده‌ی مدال فیلدز (۲۰۱۴)."]],LK=[[2, 9], [9, 10], [8, 10], [11, 15], [17, 18], [18, 20], [18, 22], [12, 14], [13, 16], [0, 5], [6, 7], [22, 23], [22, 25]];
const X=y=>8.5-(y<1500?(y-780)/720*4:4+(y-1500)/477*13);
const P=D.map(d=>[X(d[1]),0,LN[d[2]].z]);
let cur=-1,cap=null;
const caption=i=>{if(i===cur)return;cur=i;const w=document.querySelector(".d3");if(!w)return;
if(!cap||!cap.isConnected){cap=document.createElement("div");cap.id="sci3dCap";cap.style.cssText="margin:10px 0;padding:12px 14px;border:1px solid #263249;border-radius:12px;background:#0d1220;line-height:1.9";const sm=w.querySelector("small");sm?sm.before(cap):w.appendChild(cap)}
const d=D[i],l=LN[d[2]],lg=Object.values(LN).map(q=>`<span style="display:inline-flex;align-items:center;gap:5px;margin-inline-end:14px"><i style="display:inline-block;width:10px;height:10px;border-radius:3px;background:${q.c}"></i>${q.n}</span>`).join("");
cap.innerHTML=`<div style="font-size:13px;color:#9aa8c0;margin-bottom:6px">${lg}</div><div><b style="color:${l.c}">${d[0]}</b> <span style="color:#9aa8c0">(حدود سال ${fa(d[1])} میلادی)</span></div><div style="font-size:13px">${d[3]}</div><div style="font-size:12px;color:#6d7c98;margin-top:4px">هر کره یک دانشمند است. افق: زمان (قدیمی‌ترین سمت راست)، عمق: رشتهٔ کاری. خطوط روشن نشان می‌دهند کار کدام دانشمند بر پایهٔ کار دیگری ساخته شد.</div>`};
TIA.reg("7-0",t=>{const L=[],Pt=[],a=Math.floor(t*.55)%D.length;caption(a);
Object.values(LN).forEach(q=>{L.push([-9.6,0,q.z,9.6,0,q.z,"#1f2b46",1.4])});
for(const yr of[800,1000,1200,1400,1500,1600,1700,1800,1900,2000]){const x=X(yr);L.push([x,0,-6,x,0,6,"#16213a",1])}
D.forEach((d,i)=>{const p=P[i],q=LN[d[2]];L.push([p[0],-1.3,p[2],p[0],0,p[2],"#25324f",1]);Pt.push([p[0],0,p[2],q.c,i===a?15:6.5])});
for(let i=1;i<D.length;i++)L.push([...P[i-1],...P[i],i<=a?"#8a7fe0":"#2a3858",i<=a?1.8:1]);
LK.forEach(([s,e])=>{const A=P[s],B=P[e],on=Math.max(s,e)<=a;let o=A;for(let k=1;k<=14;k++){const f=k/14,q=[A[0]+(B[0]-A[0])*f,Math.sin(f*Math.PI)*1.6,A[2]+(B[2]-A[2])*f];L.push([...o,...q,on?"#fff0b0":"#3a4a6e",on?1.8:1]);o=q}});
const pa=P[a];Pt.push([pa[0],1.1+.15*Math.sin(t*4),pa[2],"#ffffff",9]);
return{l:L,p:Pt}});
})();

/* صحنه‌های سه‌بعدی اختصاصی هر بخش: ابزارهای مشترک، آزمایشگاه ریاضیات و هوش مصنوعی */
(()=>{
const TAU=Math.PI*2,fa=n=>String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]),f1=(v,d=1)=>fa(v.toFixed(d).replace(".","٫")),
rg=s=>()=>(s=s*1664525+1013904223>>>0)/4294967296,gs=r=>()=>(r()+r()+r()-1.5)*1.6,
sg=(L,a,b,c,w=1)=>L.push([a[0],a[1],a[2],b[0],b[1],b[2],c,w]),
ln=(L,p,c,w=1,cl=false)=>{for(let i=1;i<p.length;i++)sg(L,p[i-1],p[i],c,w);if(cl&&p.length>2)sg(L,p[p.length-1],p[0],c,w)},
ring=(L,r,ax,c,w=1,o=[0,0,0],n=48)=>{let q=null;for(let i=0;i<=n;i++){const a=i/n*TAU,u=r*Math.cos(a),v=r*Math.sin(a),p=ax==="y"?[o[0]+u,o[1],o[2]+v]:ax==="x"?[o[0],o[1]+u,o[2]+v]:[o[0]+u,o[1]+v,o[2]];if(q)sg(L,q,p,c,w);q=p}},
wb=(L,x,y,z,w,h,d,c,lw=1)=>{const X=[x,x+w],Y=[y,y+h],Z=[z,z+d];for(const a of X)for(const b of Y)sg(L,[a,b,Z[0]],[a,b,Z[1]],c,lw);for(const a of X)for(const b of Z)sg(L,[a,Y[0],b],[a,Y[1],b],c,lw);for(const a of Y)for(const b of Z)sg(L,[X[0],a,b],[X[1],a,b],c,lw)},
hm=v=>`hsl(${Math.round(240-Math.max(0,Math.min(1,v))*240)} 85% 62%)`,
grid=(L,s,n,y,c="#16213a")=>{for(let i=0;i<=n;i++){const a=-s+2*s*i/n;sg(L,[a,y,-s],[a,y,s],c,1);sg(L,[-s,y,a],[s,y,a],c,1)}},
surf=(n,s,f,cf)=>{const Z=[],L=[],X=i=>(i/n-.5)*s;for(let i=0;i<=n;i++){Z[i]=[];for(let j=0;j<=n;j++)Z[i][j]=f(X(i),X(j))}for(let i=0;i<=n;i++)for(let j=0;j<=n;j++){const c=cf(Z[i][j],i,j);if(i<n)L.push([X(i),Z[i][j],X(j),X(i+1),Z[i+1][j],X(j),c,1]);if(j<n)L.push([X(i),Z[i][j],X(j),X(i),Z[i][j+1],X(j+1),c,1])}return L},
cap=(title,text,col,ex)=>{const w=document.querySelector(".d3");if(!w)return;let c=w.querySelector("#d3cap");if(!c){c=document.createElement("div");c.id="d3cap";c.style.cssText="margin:10px 0;padding:12px 14px;border:1px solid #263249;border-radius:12px;background:#0d1220;line-height:1.9";const sm=w.querySelector("small");sm?sm.before(c):w.appendChild(c)}const k=title+"|"+text+"|"+(ex||"");if(c.dataset.k!==k){c.dataset.k=k;c.innerHTML=`<b style="color:${col||"#a99aff"}">${title}</b><div style="font-size:13px;color:#cbd5ea">${text}</div>`+(ex?`<div style="font-size:13px;color:#f0bc72;margin-top:2px">${ex}</div>`:"")}},
R=(k,title,text,f,col)=>TIA.reg(k,t=>{const r=f(t);cap(title,text,col,r.c);return r}),
CY=(k,items,per=8)=>TIA.reg(k,t=>{const i=Math.floor(t/per)%items.length,it=items[i],r=it[2](t%per);cap(it[0]+"  ("+fa(i+1)+" از "+fa(items.length)+")",it[1],it[3],r.c);return r});
TIA.H={TAU,fa,f1,rg,gs,sg,ln,ring,wb,hm,grid,surf,cap,R,CY};

/* ---------- ریاضیات ---------- */
const DV=[0],PRS=[];for(let n=1;n<=800;n++){let d=0;if(n<=220){for(let k=1;k<=n;k++)if(n%k===0)d++;DV[n]=d}else{d=2;for(let k=2;k*k<=n;k++)if(n%k===0){d=3;break}}if(d===2)PRS.push(n)}
const Y0=-2.4;
R("0-2","تحلیل اعداد اول","ارتفاع هر ستون برابر تعداد مقسوم‌علیه‌های آن عدد است. عددی که فقط دو مقسوم‌علیه دارد، یعنی ۱ و خودش، اول است و طلایی می‌شود.",t=>{const L=[],P=[],s=Math.min(1,t*.6),sel=Math.floor(t*1.4)%60+1;
for(let n=1;n<=60;n++){const i=(n-1)%10,j=Math.floor((n-1)/10),x=(i-4.5)*1.05,z=(j-2.5)*1.05,d=DV[n],h=d*.34*s+.05,pr=d===2;wb(L,x,Y0,z,.6,h,.6,pr?"#f0bc72":n===1?"#6d7c98":"#7f6cf0",pr?1.8:1);if(pr)P.push([x+.3,Y0+h+.25,z+.3,"#f0bc72",5])}
const i=(sel-1)%10,j=Math.floor((sel-1)/10);P.push([(i-4.5)*1.05+.3,Y0+DV[sel]*.34*s+.9,(j-2.5)*1.05+.3,"#fff",9]);
return{l:L,p:P,c:`عدد ${fa(sel)}: ${fa(DV[sel])} مقسوم‌علیه`+(DV[sel]===2?" (اول)":sel===1?" (نه اول است نه مرکب)":" (مرکب)")}});

R("0-3","اعداد اول دوقلو","هر کره یک عدد اول است. وقتی دو اول پشت‌سرهم فقط ۲ واحد فاصله دارند، با کمان آبی به هم وصل می‌شوند؛ این‌ها اول‌های دوقلو هستند. ستون‌های آویزان اندازهٔ فاصله تا اول بعدی‌اند.",t=>{const L=[],P=[],pr=PRS.filter(p=>p<=200),n=pr.length,X=k=>(k-(n-1)/2)*.38,a=Math.floor(t*1.8)%(n-1);let tw=0;
for(let k=0;k<n-1;k++){const g=pr[k+1]-pr[k],x0=X(k),x1=X(k+1);if(g===2){tw++;let o=[x0,0,0];for(let i=1;i<=10;i++){const f=i/10,q=[x0+(x1-x0)*f,Math.sin(f*Math.PI)*.9,0];sg(L,o,q,"#51d5e8",1);o=q}}else sg(L,[x0,0,0],[x1,0,0],"#2a3858",1);
sg(L,[(x0+x1)/2,0,0],[(x0+x1)/2,-g*.27,0],g===2?"#51d5e8":"#7f6cf0",1)}
for(let k=0;k<n;k++)P.push([X(k),0,0,"#f0bc72",k===a||k===a+1?9:5]);
const g=pr[a+1]-pr[a];return{l:L,p:P,c:`${fa(pr[a])} و ${fa(pr[a+1])}: فاصله ${fa(g)}`+(g===2?" (اول دوقلو)":"")+` | جفت دوقلوی زیر ۲۰۰: ${fa(tw)}`}});

R("0-4","فاصلهٔ اعداد اول","هر ستون فاصلهٔ یک عدد اول تا عدد اول بعدی است. ستون‌های قرمز رکورد تازهٔ فاصله‌اند و خط پلکانی پشت آن‌ها بزرگ‌ترین فاصلهٔ دیده‌شده تا این‌جاست.",t=>{const L=[],P=[],N=90,cnt=Math.min(N,Math.floor((t%16)*9)+1);let mx=0,rec=0,mp=[];
for(let k=0;k<cnt;k++){const g=PRS[k+1]-PRS[k],x=(k-N/2)*.19,isr=g>mx;if(isr){mx=g;rec++}wb(L,x,-3,0,.12,g*.38,.12,isr?"#ff6b81":"#7f6cf0",isr?1.6:1);mp.push([x+.06,-3+mx*.38,1.6])}
ln(L,mp,"#f0bc72",1.6);if(cnt>1)P.push([...mp[mp.length-1],"#f0bc72",6]);
return{l:L,p:P,c:`تا عدد اول ${fa(PRS[cnt-1])}: بزرگ‌ترین فاصله ${fa(mx)}، تعداد رکوردها ${fa(rec)}`}});

const spf=n=>{for(let p=2;p*p<=n;p++)if(n%p===0)return p;return n};
const ftree=n=>{const nd=[];let leaf=0;const rec=(v,d)=>{const id=nd.length,o={v,d,x:0,ch:[],pr:false};nd.push(o);const p=spf(v);if(p===v){o.x=leaf++;o.pr=true}else{const a=rec(p,d+1),b=rec(v/p,d+1);o.ch=[a,b];o.x=(nd[a].x+nd[b].x)/2}return id};rec(n,0);const fs=nd.filter(o=>o.pr).map(o=>o.v).sort((a,b)=>a-b);return{nd,leaf,fs}};
const treeScene=n=>{const T=ftree(n);return t=>{const L=[],P=[],dm=Math.floor(t*1.2)+1,pos=o=>[(o.x-(T.leaf-1)/2)*1.7,3.2-o.d*1.15,o.d%2?.9:-.9];
T.nd.forEach(o=>{if(o.d>dm)return;const p=pos(o);P.push([...p,o.pr?"#f0bc72":"#a99aff",o.pr?10:7]);o.ch.forEach(c=>{const q=T.nd[c];if(q.d<=dm)sg(L,p,pos(q),"#4a5a8c",1.4)})});
return{l:L,p:P,c:`${fa(n)} = ${T.fs.map(fa).join(" × ")}`}}};
CY("0-5",[360,84,1001,210].map(n=>["تجزیهٔ "+fa(n),"درخت تجزیه: هر عدد مرکب به کوچک‌ترین مقسوم‌علیه اولش و باقی‌مانده شکسته می‌شود تا فقط عدد اول (برگ‌های طلایی) بماند.",treeScene(n),"#f0bc72"]),9);

const LG=(()=>{const a=[0];for(let n=1;n<=21;n++)a[n]=a[n-1]+Math.log10(n);return a})();
const big=v=>v<1e9?Math.round(v).toLocaleString("en-US"):v.toExponential(2);
R("0-6","محاسبات اعداد بزرگ","ارتفاع نقطه‌ها لگاریتم عدد است: n² (سبز) آرام رشد می‌کند، 2ⁿ (آبی) تند و n! (طلایی) انفجاری. به همین دلیل اعداد بزرگ را با رقم‌هایشان مقایسه می‌کنیم.",t=>{const L=[],P=[],c=Math.min(20,Math.floor((t%14)*1.8)+2),X=n=>(n-10.5)*.85,lanes=[[-2.5,"#59d6a3",n=>Math.log10(n*n)],[0,"#51d5e8",n=>n*Math.log10(2)],[2.5,"#f0bc72",n=>LG[n]]];
grid(L,6,6,-3.2);lanes.forEach(([z,col,f])=>{let o=null;for(let n=1;n<=c;n++){const p=[X(n),-3.2+f(n)*.34,z];if(o)sg(L,o,p,col,1.6);P.push([...p,col,n===c?9:4]);if(n===c)sg(L,[p[0],-3.2,z],p,col,1);o=p}});
const fn=LG[c],digs=Math.floor(fn)+1;return{l:L,p:P,c:`n=${fa(c)}: n²=${fa(c*c)} ، 2ⁿ=${fa(big(2**c))} ، n! دارای ${fa(digs)} رقم است`}});

const FB=[1,1,2,3,5,8,13,21];
R("0-7","دنباله‌های عددی","دنبالهٔ فیبوناچی هر جمله را از جمع دو جملهٔ قبل می‌سازد. کره‌ها جمله‌ها هستند و مارپیچ طلایی از میانشان می‌گذرد؛ نسبت جمله‌های پیاپی به عدد طلایی (حدود ۱٫۶۱۸) نزدیک می‌شود.",t=>{const L=[],P=[],ph=1.618034,rr=th=>.18*Math.pow(ph,th/(Math.PI/2)),pt=th=>[rr(th)*Math.cos(th),-3+th*.3,rr(th)*Math.sin(th)];let o=pt(0),sh=[o[0],-3,o[2]];
for(let i=1;i<=140;i++){const th=i/140*3.5*Math.PI,q=pt(th);sg(L,o,q,"#a99aff",1.6);sg(L,[sh[0],-3.3,sh[2]],[q[0],-3.3,q[2]],"#1f2b46",1);sh=q;o=q}
const k=Math.floor(t*1.2)%8;for(let i=0;i<8;i++){const p=pt(i*Math.PI/2);sg(L,[0,p[1],0],p,"#25324f",1);P.push([...p,i===k?"#fff":"#f0bc72",i===k?11:5+i*.7])}
return{l:L,p:P,c:k>0?`F${fa(k+1)} = ${fa(FB[k])} ، نسبت ${fa(FB[k])}÷${fa(FB[k-1])} = ${f1(FB[k]/FB[k-1],3)}`:`F۱ = ${fa(1)}`}});

/* ---------- هوش مصنوعی ---------- */
const PER=(()=>{const r=rg(11),g=gs(r),pts=[];for(let i=0;i<30;i++){const y=i%2?1:-1;pts.push({p:[y*1.7+g()*.55,y*1.2+g()*.55,y*1+g()*.55],y})}
let w=[0,0,0],b=0;const H=[{w:[0,0,0],b:0}];for(let ep=0;ep<40;ep++){let ch=0;for(const q of pts){const s=w[0]*q.p[0]+w[1]*q.p[1]+w[2]*q.p[2]+b;if(q.y*s<=0){w=w.map((v,k)=>v+q.y*q.p[k]*.5);b+=q.y*.5;ch++;H.push({w:[...w],b})}}if(!ch)break}return{pts,H}})();
const perFn=t=>{const L=[],P=[],H=PER.H,T=H.length/3+4,k=Math.min(H.length-1,Math.floor((t%T)*3)),{w,b}=H[k],m=Math.hypot(...w);let bad=0;
PER.pts.forEach(q=>{const s=w[0]*q.p[0]+w[1]*q.p[1]+w[2]*q.p[2]+b,wr=m>0&&q.y*s<=0;if(m===0||wr)bad++;P.push([...q.p,wr||m===0?"#ff6b81":q.y>0?"#f0bc72":"#51d5e8",wr?10:6])});
if(m>0){const n=w.map(v=>v/m),d=-b/m,p0=n.map(v=>v*d);let u=[n[2],0,-n[0]];if(Math.hypot(...u)<.2)u=[0,n[2],-n[1]];const um=Math.hypot(...u);u=u.map(v=>v/um);const v=[n[1]*u[2]-n[2]*u[1],n[2]*u[0]-n[0]*u[2],n[0]*u[1]-n[1]*u[0]],E=3.6,pp=(a,c)=>p0.map((z,i)=>z+u[i]*a+v[i]*c);
for(let a=-E;a<=E+.01;a+=E/3){sg(L,pp(a,-E),pp(a,E),"#8a7fe0",1);sg(L,pp(-E,a),pp(E,a),"#8a7fe0",1)}}
return{l:L,p:P,c:`به‌روزرسانی ${fa(k)} از ${fa(H.length-1)} ، نقطه‌های اشتباه: ${fa(bad)}`}};
R("1-0","پرسپترون ساده","دو دسته نقطه (آبی و طلایی) در فضا هستند. پرسپترون یک صفحه می‌سازد و هر بار که نقطه‌ای را اشتباه دسته‌بندی کند (قرمز) صفحه را می‌چرخاند تا دو دسته از هم جدا شوند.",perFn);
TIA.H.perFn=perFn;

R("1-1","یادگیری یک تابع","سطح کم‌رنگ تابع واقعی است و سطح رنگی پیش‌بینی مدل. نقطه‌های سفید داده‌های آموزشی‌اند. با ادامهٔ آموزش، پیش‌بینی به تابع واقعی نزدیک و خطا کم می‌شود.",(()=>{const r=rg(9),pts=Array.from({length:22},()=>{const x=(r()-.5)*9,z=(r()-.5)*9;return[x,z,(r()-.5)*.35]}),f=(x,z)=>Math.sin(x*.9)*Math.cos(z*.9)*1.6;
return t=>{const T=t%14,e=1-Math.exp(-T/3.2),L=[...surf(16,10,f,()=>"#25324f"),...surf(16,10,(x,z)=>f(x,z)*e+(1-e)*(.2*x-.1*z),zv=>hm(.5+zv/4))],P=pts.map(q=>[q[0],f(q[0],q[1])+q[2],q[1],"#fff",5]);return{l:L,p:P,c:`خطای مدل حدود ${fa(Math.round((1-e)*100))}٪`}}})());

const GAf=(x,z)=>1.8*Math.exp(-((x-2.5)**2+(z+1.5)**2)/3)+1.3*Math.exp(-((x+2.5)**2+(z-2)**2)/2.5)+.9*Math.exp(-((x+1)**2+(z+3)**2)/2)+.1*Math.sin(x*2)*Math.cos(z*2);
const GA=(()=>{const r=rg(5);let pop=Array.from({length:24},()=>[(r()-.5)*9,(r()-.5)*9]);const G=[pop],cl=v=>Math.max(-5,Math.min(5,v));for(let g=0;g<30;g++){const el=[...pop].sort((a,b)=>GAf(b[0],b[1])-GAf(a[0],a[1])).slice(0,8),nx=[...el];while(nx.length<24){const a=el[Math.floor(r()*8)],b=el[Math.floor(r()*8)];nx.push([(a[0]+b[0])/2+(r()-.5)*.8,(a[1]+b[1])/2+(r()-.5)*.8])}pop=nx.map(p=>[cl(p[0]),cl(p[1])]);G.push(pop)}return G})();
R("1-2","الگوریتم ژنتیک","سطح، چشم‌انداز برازندگی است و بلندی‌ها جواب‌های بهترند. هر کره یک فرد جمعیت است. در هر نسل بهترین‌ها می‌مانند، با هم ترکیب می‌شوند و کمی جهش می‌کنند تا جمعیت بالای قله‌ها جمع شود.",t=>{const g=Math.min(30,Math.floor((t%(30/1.2+5))*1.2)),pop=GA[g],L=surf(20,10,GAf,zv=>hm(zv/2)).map(l=>{l[1]-=1;l[4]-=1;return l}),P=[];let bi=0,bf=-9;pop.forEach((p,i)=>{const f=GAf(p[0],p[1]);if(f>bf){bf=f;bi=i}});
pop.forEach((p,i)=>P.push([p[0],GAf(p[0],p[1])-1+.2,p[1],i===bi?"#f0bc72":"#ffffff",i===bi?11:5]));return{l:L,p:P,c:`نسل ${fa(g)}، بهترین برازندگی: ${f1(bf,2)}`}});

const MZ=["...........".slice(0,9),".####.##.","..#....#.",".#.##.#.#","...#..#..","##.#.###.","...#.....",".###.###.","........."];
const bfs=(g,s,e)=>{const n=g.length,pv=new Map,q=[s];pv.set(s.join(),null);while(q.length){const c=q.shift();if(c[0]===e[0]&&c[1]===e[1])break;for(const[d1,d2]of[[1,0],[-1,0],[0,1],[0,-1]]){const r=c[0]+d1,k=c[1]+d2;if(r<0||k<0||r>=n||k>=g[0].length||g[r][k]==="#"||pv.has([r,k].join()))continue;pv.set([r,k].join(),c);q.push([r,k])}}const p=[];let c=e;if(!pv.has(e.join()))return p;while(c){p.push(c);c=pv.get(c.join())}return p.reverse()};
const MP=bfs(MZ,[0,0],[8,8]);
R("1-3","عامل مسیریاب","عامل (کرهٔ سفید) در یک هزارتوی سه‌بعدی از خانهٔ شروع (آبی) به هدف (طلایی) می‌رود. دیوارها مکعب‌های بنفش‌اند و مسیر روشن کوتاه‌ترین راهی است که جست‌وجو پیدا کرده است.",t=>{const L=[],P=[],W=(r,c)=>[(c-4)*1.1,0,(r-4)*1.1];grid(L,4.95,9,0,"#16213a");
for(let r=0;r<9;r++)for(let c=0;c<9;c++)if(MZ[r][c]==="#"){const p=W(r,c);wb(L,p[0]-.5,0,p[2]-.5,1,.9,1,"#7f6cf0",1)}
const u=(t*2.2)%(MP.length+4),i=Math.min(Math.floor(u),MP.length-1),pts=MP.map(c=>{const p=W(c[0],c[1]);return[p[0],.35,p[2]]});
for(let k=1;k<MP.length;k++)sg(L,pts[k-1],pts[k],k<=i?"#fff0b0":"#3a4a6e",k<=i?2:1);
P.push([...W(0,0).map((v,k)=>k===1?.25:v),"#51d5e8",9],[...W(8,8).map((v,k)=>k===1?.25:v),"#f0bc72",12]);const a=pts[i],fr=u-Math.floor(u),b=pts[Math.min(i+1,MP.length-1)];
P.push([a[0]+(b[0]-a[0])*fr*(u<MP.length?1:0),.45,a[2]+(b[2]-a[2])*fr*(u<MP.length?1:0),"#ffffff",10]);return{l:L,p:P,c:`طول مسیر: ${fa(MP.length-1)} گام`}});

const QG=(()=>{const N=6,ob=new Set(["2,1","2,2","3,3","1,4"]),V=[],g=.9;let v=Array.from({length:N},()=>Array(N).fill(0));v[5][5]=1;V.push(v);for(let k=0;k<26;k++){const n=v.map(r=>[...r]);for(let r=0;r<N;r++)for(let c=0;c<N;c++){if(ob.has(r+","+c)||(r===5&&c===5))continue;let b=0;for(const[d1,d2]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=r+d1,k2=c+d2;const val=a<0||k2<0||a>=N||k2>=N||ob.has(a+","+k2)?v[r][c]:v[a][k2];b=Math.max(b,g*val)}n[r][c]=b}v=n;V.push(v)}
const F=V[V.length-1],path=[[0,0]];let c=[0,0];for(let s=0;s<20&&!(c[0]===5&&c[1]===5);s++){let best=null,bv=-1;for(const[d1,d2]of[[1,0],[0,1],[-1,0],[0,-1]]){const a=c[0]+d1,k2=c[1]+d2;if(a<0||k2<0||a>=N||k2>=N||ob.has(a+","+k2))continue;if(F[a][k2]>bv+1e-9){bv=F[a][k2];best=[a,k2]}}c=best;path.push(c)}return{V,ob,path}})();
R("1-4","نمایش Q-Learning","هر ستون ارزش یک خانه است: هرچه به هدف (طلایی) نزدیک‌تر باشد ارزشش بیشتر می‌شود. با هر دور یادگیری، ارزش هدف مثل موج به خانه‌های دور می‌رسد و عامل مسیر بهینه را پیدا می‌کند.",t=>{const L=[],P=[],k=Math.min(QG.V.length-1,Math.floor((t%(QG.V.length*.5+6))*2)),V=QG.V[k],W=(r,c)=>[(c-2.5)*1.3,(r-2.5)*1.3];grid(L,4.2,6,-3,"#16213a");
for(let r=0;r<6;r++)for(let c=0;c<6;c++){const[x,z]=W(r,c);if(QG.ob.has(r+","+c)){wb(L,x-.5,-3,z-.5,1,.5,1,"#3a2f4a",1);continue}const h=V[r][c]*3.4+.06;wb(L,x-.45,-3,z-.45,.9,h,.9,hm(V[r][c]),1)}
const u=(t*1.4)%(QG.path.length+3),i=Math.min(Math.floor(u),QG.path.length-1),a=QG.path[i],[x,z]=W(a[0],a[1]);P.push([x,-3+V[a[0]][a[1]]*3.4+.6,z,"#fff",10],[W(5,5)[0],-3+3.4+.7,W(5,5)[1],"#f0bc72",12]);return{l:L,p:P,c:`دور ${fa(k)} از به‌روزرسانی ارزش‌ها`}});

const DJ=(()=>{const N=11,r=rg(3),w=Array.from({length:N},()=>Array.from({length:N},()=>1+Math.floor(r()*4))),d=Array.from({length:N},()=>Array(N).fill(1e9)),pv={},done=new Set;w[0][0]=1;d[0][0]=0;for(let it=0;it<N*N;it++){let b=null,bv=1e9;for(let a=0;a<N;a++)for(let c=0;c<N;c++)if(!done.has(a*N+c)&&d[a][c]<bv){bv=d[a][c];b=[a,c]}if(!b)break;done.add(b[0]*N+b[1]);for(const[d1,d2]of[[1,0],[-1,0],[0,1],[0,-1]]){const a=b[0]+d1,c=b[1]+d2;if(a<0||c<0||a>=N||c>=N)continue;const nd=bv+w[a][c];if(nd<d[a][c]){d[a][c]=nd;pv[a*N+c]=b}}}
const path=[];let c=[N-1,N-1];while(c){path.push(c);c=pv[c[0]*N+c[1]]}return{N,w,d,path:path.reverse(),mx:d[N-1][N-1]}})();
R("1-5","جست‌وجوی مسیر","ارتفاع ستون‌ها هزینهٔ عبور از هر خانه است. جست‌وجو از گوشهٔ شروع مثل موج پخش می‌شود (رنگ‌ها فاصلهٔ طی‌شده‌اند) و در پایان ارزان‌ترین مسیر تا گوشهٔ مقابل با خط طلایی نشان داده می‌شود.",t=>{const L=[],P=[],N=DJ.N,D=(t*3.2)%(DJ.mx+14),W=(r,c)=>[(c-5)*.9,(r-5)*.9];grid(L,5,10,-3,"#141e36");
for(let r=0;r<N;r++)for(let c=0;c<N;c++){const[x,z]=W(r,c),h=.1+DJ.w[r][c]*.28,ok=DJ.d[r][c]<=D;wb(L,x-.34,-3,z-.34,.68,h,.68,ok?hm(DJ.d[r][c]/DJ.mx):"#202c48",1)}
if(D>=DJ.mx){const pts=DJ.path.map(c=>{const[x,z]=W(c[0],c[1]);return[x,-3+.1+DJ.w[c[0]][c[1]]*.28+.35,z]});ln(L,pts,"#ffe9a6",2.4);pts.forEach(p=>P.push([...p,"#f0bc72",5]))}
P.push([W(0,0)[0],-2.3,W(0,0)[1],"#51d5e8",10],[W(10,10)[0],-2.3,W(10,10)[1],"#f0bc72",12]);return{l:L,p:P,c:`فاصلهٔ جست‌وجو: ${fa(Math.min(Math.floor(D),DJ.mx))} از ${fa(DJ.mx)}`}});

const DCL=(()=>{const r=rg(21),ins=[],outs=[];for(let i=0;i<60;i++){const x=(r()-.5)*8;ins.push([x,.6*x+(r()+r()-1)*.8,(r()-.5)*3])}for(let i=0;i<7;i++){const x=(r()-.5)*8;outs.push([x,.6*x+(r()<.5?-1:1)*(3+r()*1.5),(r()-.5)*3])}
const fit=a=>{const n=a.length,mx=a.reduce((s,p)=>s+p[0],0)/n,my=a.reduce((s,p)=>s+p[1],0)/n;let c=0,v=0;a.forEach(p=>{c+=(p[0]-mx)*(p[1]-my);v+=(p[0]-mx)**2});const m=c/v;return[m,my-m*mx]};return{ins,outs,fi:fit(ins),fa:fit([...ins,...outs])}})();
R("1-6","آماده‌سازی داده","نقطه‌های پرت (قرمز) خط برازش را از مسیر درست منحرف می‌کنند. وقتی داده تمیز شود، پرت‌ها حذف می‌شوند و خط به الگوی واقعی داده برمی‌گردد.",t=>{const L=[],P=[],T=t%12,k=T<5?0:Math.min(1,(T-5)/2),pul=T>=3&&T<5?1+.4*Math.sin(t*12):1,m=DCL.fa[0]+(DCL.fi[0]-DCL.fa[0])*k,b=DCL.fa[1]+(DCL.fi[1]-DCL.fa[1])*k;
DCL.ins.forEach(p=>P.push([p[0],p[1],p[2],"#51d5e8",5]));if(k<1)DCL.outs.forEach(p=>P.push([p[0],p[1],p[2],"#ff6b81",8*pul*(1-k)+.01]));
sg(L,[-5,m*-5+b,0],[5,m*5+b,0],"#f0bc72",2);sg(L,[-5,-3.5,0],[5,-3.5,0],"#1f2b46",1);sg(L,[-5,-3.5,0],[-5,3.8,0],"#1f2b46",1);return{l:L,p:P,c:T<5?"داده با نقطه‌های پرت: شیب خط "+f1(m,2):"پس از پاک‌سازی: شیب خط "+f1(m,2)}});

const DS=(()=>{const r=rg(17),pts=[];for(let i=0;i<44;i++){const y=i%2;pts.push({x:(y?1.4:-1.4)+(r()+r()+r()-1.5)*1.4,y:(r()-.5)*6,z:(r()-.5)*6,c:y})}const err=th=>pts.filter(p=>(p.x<th?p.c===1:p.c===0)).length;let bt=0,be=99;const cur=[];for(let th=-4;th<=4.001;th+=.1){const e=err(th);cur.push([th,e]);if(e<be){be=e;bt=th}}return{pts,err,bt,be,cur}})();
R("1-7","درخت تصمیم ساده","یک «کنده‌ی تصمیم» فقط یک آستانه روی یک ویژگی (محور افقی) می‌گذارد. صفحهٔ بنفش آستانه‌ای است که جابه‌جا می‌شود، نقطه‌های قرمز اشتباه دسته‌بندی شده‌اند و منحنی کف نمودار خطا است؛ بهترین آستانه با خط طلایی علامت خورده.",t=>{const L=[],P=[],th=-4+8*((t*.14)%1),e=DS.err(th);
DS.pts.forEach(p=>{const bad=p.x<th?p.c===1:p.c===0;P.push([p.x,p.y*.6,p.z*.6,bad?"#ff6b81":p.c?"#f0bc72":"#51d5e8",bad?9:5])});
const pl=[[th,-3.2,-3.6],[th,-3.2,3.6],[th,3.2,3.6],[th,3.2,-3.6]];ln(L,pl,"#a99aff",1.6,true);
ln(L,DS.cur.map(c=>[c[0],-3.4+c[1]*.28,-4.6]),"#59d6a3",1.6);sg(L,[DS.bt,-3.4,-4.6],[DS.bt,3.4,-4.6],"#f0bc72",1.4);P.push([th,-3.4+e*.28,-4.6,"#fff",8]);return{l:L,p:P,c:`آستانه ${f1(th,1)}: ${fa(e)} خطا از ${fa(DS.pts.length)} نقطه | بهترین آستانه ${f1(DS.bt,1)} با ${fa(DS.be)} خطا`}});

const KM=(()=>{const r=rg(31),g=gs(r),C=[[-3,1,0],[3,-1.5,2],[0,2.8,-3]],pts=[];C.forEach(c=>{for(let i=0;i<30;i++)pts.push([c[0]+g()*.9,c[1]+g()*.9,c[2]+g()*.9])});let cen=[pts[3],pts[10],pts[22]].map(p=>[...p]);const H=[];for(let it=0;it<9;it++){const as=pts.map(p=>{let b=0,bd=1e9;cen.forEach((c,k)=>{const d=(p[0]-c[0])**2+(p[1]-c[1])**2+(p[2]-c[2])**2;if(d<bd){bd=d;b=k}});return b});H.push({cen:cen.map(c=>[...c]),as});cen=cen.map((c,k)=>{const m=pts.filter((p,i)=>as[i]===k);return m.length?[0,1,2].map(a=>m.reduce((s,p)=>s+p[a],0)/m.length):c})}return{pts,H}})();
R("1-8","خوشه‌بندی نقاط","الگوریتم k-means سه مرکز (کره‌های بزرگ) می‌گذارد، هر نقطه را به نزدیک‌ترین مرکز می‌دهد و بعد هر مرکز را به میانگین نقطه‌هایش می‌برد. با تکرار، مرکزها روی دسته‌های واقعی می‌نشینند.",t=>{const L=[],P=[],col=["#51d5e8","#f0bc72","#f27d8d"],k=Math.min(KM.H.length-1,Math.floor((t%(KM.H.length*1.3+4))/1.3)),h=KM.H[k];
KM.pts.forEach((p,i)=>{P.push([...p,col[h.as[i]],5]);sg(L,p,h.cen[h.as[i]],col[h.as[i]],.6)});for(let j=0;j<=k;j++)h&&KM.H[j].cen.forEach((c,q)=>{if(j>0)sg(L,KM.H[j-1].cen[q],c,"#ffffff",1.2)});h.cen.forEach((c,q)=>P.push([...c,col[q],15]));return{l:L,p:P,c:`تکرار ${fa(k+1)} از ${fa(KM.H.length)}`}});

R("1-9","ارزیابی دسته‌بندی","چپ: ماتریس درهم‌ریختگی با چهار ستون؛ درست‌مثبت (سبز)، درست‌منفی (آبی)، مثبت کاذب (قرمز) و منفی کاذب (کهربایی). راست: منحنی ROC که هرچه به گوشهٔ بالا-چپ نزدیک‌تر باشد مدل بهتر است.",t=>{const L=[],P=[],TP=42,FN=8,FP=11,TN=39,s=Math.min(1,(t%12)*.6),B=[[-7,-1.4,TP,"#59d6a3"],[-4.8,-1.4,FN,"#f0bc72"],[-7,.9,FP,"#ff6b81"],[-4.8,.9,TN,"#51d5e8"]];
B.forEach(([x,z,v,c])=>{wb(L,x,-3,z,1.7,v*.075*s+.02,1.7,c,1.2);P.push([x+.85,-3+v*.075*s+.3,z+.85,c,6])});
const O=[1,-3,0],roc=x=>1-Math.pow(1-x,4);sg(L,[1,-3,0],[7,-3,0],"#2a3858",1);sg(L,[1,-3,0],[1,3,0],"#2a3858",1);sg(L,[1,-3,0],[7,3,0],"#33426a",1);let o=null;for(let i=0;i<=30;i++){const x=i/30,p=[1+x*6,-3+roc(x)*6,0];if(o)sg(L,o,p,"#a99aff",2);o=p}
const u=(t*.15)%1,m=[1+u*6,-3+roc(u)*6,0];P.push([...m,"#fff",9]);const pr=TP/(TP+FP),rc=TP/(TP+FN),ac=(TP+TN)/(TP+TN+FP+FN);return{l:L,p:P,c:`دقت کل ${f1(ac*100,0)}٪ ، دقت مثبت‌ها ${f1(pr*100,0)}٪ ، بازیابی ${f1(rc*100,0)}٪`}});
})();

/* آزمایشگاه فیزیک (مدار گذرا)، فناوری و فضا */
(()=>{
const {TAU,fa,f1,rg,gs,sg,ln,ring,wb,hm,grid,surf,cap,R,CY}=TIA.H;

/* ---------- فیزیک ---------- */
R("2-4","مدار RC و RL گذرا","دو منحنی نمایی را می‌بینی: ولتاژ خازن (آبی) در مدار RC به‌تدریج بالا می‌رود و جریان (طلایی) فروکش می‌کند. در مدار RL هم جریان سلف مثل منحنی آبی بالا می‌رود. خط بنفش کف، زمان τ را نشان می‌دهد؛ در این لحظه حدود ۶۳٪ تغییر انجام شده است.",t=>{const L=[],P=[],tau=2,Tm=5*tau,T=(t%11)/11*Tm,X=s=>-5.2+s/Tm*11,vc=s=>1-Math.exp(-s/tau),ic=s=>Math.exp(-s/tau);grid(L,6.5,6,-3.2,"#141e36");
[[-1.6,"#51d5e8",vc],[1.6,"#f0bc72",ic]].forEach(([z,c,f])=>{let o=null;for(let i=0;i<=60;i++){const s=i/60*Tm,p=[X(s),-3+f(s)*4.4,z],on=s<=T;if(o)sg(L,o,p,on?c:"#25324f",on?2:1);o=p}const p=[X(T),-3+f(T)*4.4,z];P.push([...p,c,9]);sg(L,[p[0],-3,z],p,c,1)});
sg(L,[X(tau),-3,-2.4],[X(tau),-3,2.4],"#a99aff",1.6);
[-8.2,-7.3].forEach((x,i)=>ln(L,[[x,-1.4,-1.4],[x,-1.4,1.4],[x,1.4,1.4],[x,1.4,-1.4]],i?"#51d5e8":"#f0bc72",1.4,true));
const n=Math.round(vc(T)*9);for(let i=0;i<n;i++){const y=-1+(i%3)*1,z=-1+Math.floor(i/3)*1;P.push([-8.4,y,z,"#f0bc72",4],[-7.1,y,z,"#51d5e8",4])}
return{l:L,p:P,c:`ولتاژ خازن ${fa(Math.round(vc(T)*100))}٪ مقدار نهایی ، جریان ${fa(Math.round(ic(T)*100))}٪ مقدار اولیه`}});

/* ---------- فناوری ---------- */
const CT=["#a99aff","#59d6a3","#f0bc72","#cbd5ea","#6d7c98"];
const CODE=(()=>{const r=rg(3),lines=[];for(let i=0;i<14;i++){const ind=i===0||i===13?0:1+Math.floor(r()*2),tk=[],n=2+Math.floor(r()*3);for(let k=0;k<n;k++)tk.push([Math.floor(r()*5),2+Math.floor(r()*6)]);lines.push({ind,tk})}return lines})();
R("3-0","ویرایشگر متن کد","هر خط یک ردیف از نوار است. رنگ‌ها نوع هر تکه از کد را نشان می‌دهند (بنفش واژهٔ کلیدی، سبز رشته، کهربایی عدد، سفید نام و خاکستری توضیح). تورفتگی خط‌ها ساختار برنامه را می‌سازد و مکان‌نما هنگام تایپ جلو می‌رود.",t=>{const L=[],P=[],tot=CODE.reduce((s,l)=>s+l.tk.reduce((a,b)=>a+b[1],0),0),typed=Math.min(tot+8,(t%18)*9);let cnt=0,cur=null;
ln(L,[[-6.6,-3.6,-.3],[6.6,-3.6,-.3],[6.6,3.9,-.3],[-6.6,3.9,-.3]],"#2a3858",1.4,true);
CODE.forEach((ln0,i)=>{const y=3.3-i*.5;P.push([-6,y,0,"#3a4a6e",3]);let x=-5+ln0.ind*.9;ln0.tk.forEach(([ty,len])=>{const take=Math.max(0,Math.min(len,typed-cnt));if(take>0){wb(L,x,y-.08,-.08,take*.26,.16,.16,CT[ty],1.2);cur=[x+take*.26,y]}cnt+=len;x+=len*.26+.3})});
if(cur&&Math.floor(t*3)%2===0)sg(L,[cur[0]+.08,cur[1]-.25,0],[cur[0]+.08,cur[1]+.25,0],"#fff",2);
return{l:L,p:P,c:`${fa(Math.min(CODE.length,Math.ceil(typed/ (tot/CODE.length))))} خط از ${fa(CODE.length)} خط نوشته شده`}});

const SRT=(()=>{const r=rg(8),a=Array.from({length:18},(_,i)=>i+1);for(let i=17;i>0;i--){const j=Math.floor(r()*(i+1));[a[i],a[j]]=[a[j],a[i]]}const F=[{a:[...a],i:-1,j:-1,sw:false,c:0,n:0}];let c=0,n=0;for(let p=0;p<17;p++)for(let i=0;i<17-p;i++){c++;const s=a[i]>a[i+1];if(s){[a[i],a[i+1]]=[a[i+1],a[i]];n++}F.push({a:[...a],i,j:i+1,sw:s,c,n})}F.push({a:[...a],i:-1,j:-1,done:1,c,n});return F})();
R("3-1","مرتب‌سازی الگوریتمی","مرتب‌سازی حبابی: هر بار دو ستون کنار هم مقایسه می‌شوند (کرهٔ بالای آن‌ها) و اگر ترتیبشان غلط بود جابه‌جا می‌شوند (قرمز). بزرگ‌ترین ستون مثل حباب به انتها می‌رسد.",t=>{const L=[],P=[],F=SRT,k=Math.min(F.length-1,Math.floor((t%(F.length/16+4))*16)),f=F[k];grid(L,8.6,8,-3.2,"#141e36");
f.a.forEach((v,i)=>{const x=(i-8.5)*.9;wb(L,x-.3,-3,-.3,.6,v*.26,.6,f.done?"#59d6a3":hm(v/18),1.2);if(i===f.i||i===f.j)P.push([x,-3+v*.26+.5,0,f.sw?"#ff6b81":"#ffffff",9])});
return{l:L,p:P,c:`مقایسه‌ها ${fa(f.c)} ، جابه‌جایی‌ها ${fa(f.n)}`+(f.done?" ، مرتب شد":"")}});

R("3-2","مبدل مبناهای عددی","هشت مکعب هشت بیت‌اند. بیت روشن یعنی ۱ و ستون آن برابر وزنش (۱۲۸ تا ۱) بالا می‌آید. ستون طلایی سمت راست مجموع وزن‌ها یعنی همان عدد دهدهی است.",t=>{const L=[],P=[],c=Math.floor(t*1.6)%256,W=[128,64,32,16,8,4,2,1];grid(L,8.6,8,-3.2,"#141e36");
W.forEach((w,i)=>{const on=(c&w)>0,x=-7.4+i*1.5;if(on){wb(L,x-.5,-3,-.5,1,w*.021+.1,1,"#f0bc72",1.4);P.push([x,-3+w*.021+.4,0,"#f0bc72",6])}else wb(L,x-.2,-3,-.2,.4,.1,.4,"#3a4a6e",1)});
wb(L,6.2,-3,-.8,1.6,c*.0105+.05,1.6,"#51d5e8",1.6);P.push([7,-3+c*.0105+.5,0,"#51d5e8",7]);
return{l:L,p:P,c:`${fa(c)} = ${fa(c.toString(2).padStart(8,"0"))} (دودویی) = ${c.toString(16).toUpperCase().padStart(2,"0")} (شانزدهی)`}});

const JT=["root","o",[["name","s"],["age","n"],["skills","a",[["JS","s"],["Py","s"],["HTML","s"]]],["address","o",[["city","s"],["zip","n"]]],["active","b"]]];
const JN=(()=>{const nd=[];let leaf=0;const rec=(n,d)=>{const o={t:n[1],d,x:0,ch:[],id:nd.length};nd.push(o);if(n[2]){n[2].forEach(c=>o.ch.push(rec(c,d+1)));o.x=(nd[o.ch[0]].x+nd[o.ch[o.ch.length-1]].x)/2}else o.x=leaf++;return o.id};rec(JT,0);return{nd,leaf}})();
const JC={o:"#a99aff",a:"#51d5e8",s:"#59d6a3",n:"#f0bc72",b:"#f27d8d"};
R("3-3","خوانش و قالب‌بندی JSON","داده‌های JSON درخت‌اند: شیء (بنفش)، آرایه (آبی)، رشته (سبز)، عدد (کهربایی) و بولی (صورتی). اعتبارسنج از ریشه شروع می‌کند و گره‌ها را یکی‌یکی می‌خواند و سبز می‌کند.",t=>{const L=[],P=[],N=JN.nd.length,a=Math.floor((t%(N/2.2+3))*2.2),pos=o=>[(o.x-(JN.leaf-1)/2)*1.8,3.3-o.d*1.7,o.d%2?1:-1];
JN.nd.forEach(o=>{const p=pos(o);o.ch.forEach(c=>sg(L,p,pos(JN.nd[c]),c<=a?"#9ee8c4":"#33426a",c<=a?2:1));const ok=o.id<=a;P.push([...p,o.id===a?"#fff":ok?JC[o.t]:"#3a4a6e",o.id===a?12:ok?8:5])});
return{l:L,p:P,c:a>=N?"همهٔ گره‌ها خوانده شد: ساختار معتبر است":`خواندن گره ${fa(Math.min(a+1,N))} از ${fa(N)}`}});

R("3-4","رمزگذاری آموزشی سزار","دیسک رمز: حلقهٔ بیرونی حروف متن اصلی و حلقهٔ داخلی حروف رمزشده است. با چرخش حلقهٔ داخلی، هر حرف به‌اندازهٔ کلید جابه‌جا می‌شود. حرف A با کرهٔ طلایی علامت خورده است.",t=>{const L=[],P=[],s=(t*.45)%26,k=Math.round(s)%26,st=TAU/26;ring(L,4.3,"y","#2a3858",1,[0,.4,0]);ring(L,3.0,"y","#2a3858",1,[0,-.4,0]);ring(L,1.2,"y","#16213a",1,[0,-.4,0]);
for(let i=0;i<26;i++){const a=i*st,o=[4.3*Math.cos(a),.4,4.3*Math.sin(a)],b=-s*st+i*st,n=[3.0*Math.cos(b),-.4,3.0*Math.sin(b)];P.push([...o,i===0?"#f0bc72":"#51d5e8",i===0?10:5],[...n,i===0?"#ff9bd0":"#a99aff",i===0?9:5]);sg(L,[4.3*Math.cos(a),.4,4.3*Math.sin(a)],[3.0*Math.cos(a),-.4,3.0*Math.sin(a)],"#1f2b46",1)}
const A=[4.3,.4,0],B=[3.0*Math.cos(-s*st),-.4,3.0*Math.sin(-s*st)];sg(L,A,B,"#fff0b0",1.6);
return{l:L,p:P,c:`کلید ${fa(k)}: حرف ${String.fromCharCode(65)} به ${String.fromCharCode(65+k)} تبدیل می‌شود`}});

R("3-5","محاسبه‌گر مهندسی","سطح، قانون اهم I = V ÷ R را نشان می‌دهد. با بالا رفتن ولتاژ (محور افقی) جریان زیاد می‌شود و با بالا رفتن مقاومت (محور عمق) جریان کم می‌شود. کرهٔ طلایی یک نقطهٔ کاری مدار است.",t=>{const V=6+5*Math.sin(t*.5),Rr=5.5+3.5*Math.cos(t*.37),I=V/Rr,m=(v,r)=>[(v-6)*.85,-2.4+(v/r)*.55,(r-5.5)*.95],L=surf(16,1,()=>0,()=>"#000");L.length=0;
const g=(v,r)=>m(v,r),S=[];for(let i=0;i<=14;i++)for(let j=0;j<=14;j++){const v=1+i/14*10.9,r=2+j/14*8;if(i<14)sg(L,g(v,r),g(v+10.9/14,r),hm(v/r/6),1);if(j<14)sg(L,g(v,r),g(v,r+8/14),hm(v/r/6),1)}
const p=g(V,Rr);sg(L,[p[0],-2.4,p[2]],p,"#fff0b0",1.2);return{l:L,p:[[...p,"#f0bc72",10]],c:`V = ${f1(V)} ولت ، R = ${f1(Rr)} اهم ⟵ I = ${f1(I,2)} آمپر`}});

R("3-6","آزمایشگر عبارت منظم","این ماشین حالت، عبارت ab*c را می‌شناسد: یک a، چند b (یا هیچ) و یک c. کرهٔ سفید رشتهٔ abbbc را حرف‌به‌حرف می‌خواند و بین حالت‌ها می‌رود؛ اگر به حالت دو‌حلقه‌ای برسد، رشته پذیرفته می‌شود.",t=>{const L=[],P=[],T=t%12,k=Math.floor(T/1.4),f=(T/1.4)%1,S=[-5,0,5],ch="abbbc";
S.forEach((x,i)=>{ring(L,.8,"z",i===0?"#51d5e8":"#a99aff",1.4,[x,0,0]);if(i===2)ring(L,.6,"z","#59d6a3",1.4,[x,0,0])});sg(L,[-4.2,0,0],[-.8,0,0],"#4a5a8c",1.4);sg(L,[.8,0,0],[4.2,0,0],"#4a5a8c",1.4);ring(L,.9,"z","#4a5a8c",1.2,[0,1.75,0]);
for(let i=0;i<5;i++)P.push([(i-2)*1.2,-3,2.4,i<k?"#59d6a3":"#3a4a6e",i<k?8:6]);
let p=[-5,0,0];if(k===0)p=[-5+5*f,0,0];else if(k<4){const a=f*TAU;p=[.9*Math.sin(a),1.75-.9*Math.cos(a),0]}else if(k===4)p=[5*f,0,0];else p=[5,0,0];
P.push([...p,"#fff",11],[-5,0,0,"#51d5e8",5],[0,0,0,"#a99aff",5],[5,0,0,"#59d6a3",5]);
return{l:L,p:P,c:k>=5?"رشتهٔ abbbc پذیرفته شد":`در حال خواندن حرف «${ch[Math.min(k,4)]}»`}});

const EF={a:8.2,b:1.5,c:2.8,d:4.3,e:12.7,f:2.2,g:2.0,h:6.1,i:7.0,j:.15,k:.77,l:4.0,m:2.4,n:6.7,o:7.5,p:1.9,q:.1,r:6.0,s:6.3,t:9.1,u:2.8,v:.98,w:2.4,x:.15,y:2.0,z:.07};
R("3-7","ابزار شمارش متن","هر ستون فراوانی یک حرف در متن انگلیسی معمولی است. با شمارش حروف، الگوی زبان پیدا می‌شود: e، t و a بیشتر از بقیه می‌آیند. ستون‌ها در حال شمارش بالا می‌آیند.",t=>{const L=[],P=[],s=Math.min(1,(t%12)*.4);grid(L,8.8,8,-3,"#141e36");Object.keys(EF).forEach((c,i)=>{const x=(i-12.5)*.66,h=EF[c]*.36*Math.max(0,Math.min(1,s*1.6-i/40));wb(L,x-.22,-3,-.22,.44,h+.03,.44,hm(EF[c]/13),1.2);if(EF[c]>6)P.push([x,-3+h+.4,0,"#f0bc72",5])});
return{l:L,p:P,c:"پرتکرارترین حروف: e (حدود ۱۲٫۷٪) ، t (۹٫۱٪) ، a (۸٫۲٪)"}});

R("3-8","آزمایشگاه JavaScript","پشتهٔ فراخوانی: تابع بازگشتی factorial(5) پنج بار صدا زده می‌شود و هر فراخوانی یک جعبه روی پشته می‌گذارد، بعد از پایین‌ترین‌ها جواب‌ها برمی‌گردند و جعبه‌ها برداشته می‌شوند. حلقهٔ سمت راست صف رویدادها (event loop) است.",t=>{const L=[],P=[],T=t%14,e=Math.floor(T/1.1),n=e<5?e+1:e<10?10-e:0,V=[1,2,6,24,120];grid(L,6,6,-3.2,"#141e36");
for(let i=0;i<5;i++)wb(L,-5.2,-3.2+i*.2,-.8,3,.01,1.6,"#16213a",1);
for(let i=0;i<n;i++){const y=-3+i*.85,top=i===n-1;wb(L,-4.7,y,-.7,2.2,.7,1.4,hm(i/5),top?2:1);P.push([-3.6,y+.35,0,top?"#fff":"#3a4a6e",top?7:4])}
ring(L,1.9,"z","#2a3858",1,[4.6,0,0]);for(let i=0;i<8;i++){const a=t*.9+i*TAU/8;P.push([4.6+1.9*Math.cos(a),1.9*Math.sin(a),0,i%2?"#51d5e8":"#f0bc72",5])}
return{l:L,p:P,c:e<5?`factorial(${fa(5-e)}) فراخوانی شد`:e<10?`factorial(${fa(e-4)}) مقدار ${fa(V[e-5])} را برمی‌گرداند`:"پشته خالی شد؛ نتیجه: ۱۲۰"}});

R("3-9","ساختار صفحه وب","مدل جعبه‌ای CSS از چهار لایه ساخته شده: محتوا (آبی)، فاصلهٔ داخلی padding (سبز)، حاشیه border (زرد) و فاصلهٔ بیرونی margin (نارنجی). برای دیدن بهتر لایه‌ها از هم باز و بسته می‌شوند.",t=>{const L=[],P=[],D=[[9.2,6.4,"#f0bc72","margin"],[7.6,4.9,"#ffd76a","border"],[6.2,3.8,"#59d6a3","padding"],[4.6,2.7,"#51d5e8","content"]],e=.55+.45*Math.sin(t*.8),k=Math.floor(t*.5)%4,NM=["margin: فاصلهٔ بیرونی عنصر از اطراف","border: خط دور عنصر","padding: فاصلهٔ محتوا تا حاشیه","content: خود متن و تصویر"];
D.forEach(([w,d,c,n],i)=>{const y=-3+i*(.8+e*.9);wb(L,-w/2,y,-d/2,w,.12,d,c,i===k?2:1);if(i>0){const[pw,pd]=D[i-1],py=-3+(i-1)*(.8+e*.9);[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b])=>sg(L,[a*pw/2,py+.12,b*pd/2],[a*w/2,y,b*d/2],"#25324f",1))}if(i===k)[[-1,-1],[1,-1],[1,1],[-1,1]].forEach(([a,b])=>P.push([a*w/2,y+.06,b*d/2,c,7]))});
return{l:L,p:P,c:NM[3-k]}});

/* ---------- فضا ---------- */
const PL=[["عطارد",3.7,"#b9b2a7"],["زهره",8.87,"#e8c07a"],["زمین",9.81,"#5ab0ff"],["مریخ",3.71,"#e2735a"],["مشتری",24.79,"#d9a878"],["زحل",10.44,"#e6d29a"],["اورانوس",8.87,"#8fe0e6"],["نپتون",11.15,"#6f8cff"]];
R("4-3","وزن در سیارات","ارتفاع هر ستون شتاب گرانش سطح آن سیاره است. وزن یعنی همین شتاب ضرب در جرم؛ پس یک نفر ۷۰ کیلوگرمی روی مشتری بیش از دو برابر زمین وزن دارد و روی مریخ حدود ۳۸٪ آن. خط طلایی گرانش زمین است.",t=>{const L=[],P=[],k=Math.floor(t*.8)%8;grid(L,8,8,-3,"#141e36");sg(L,[-8,-3+9.81*.17,0],[8,-3+9.81*.17,0],"#f0bc72",1.2);
PL.forEach(([n,g,c],i)=>{const x=(i-3.5)*1.9,h=g*.17;wb(L,x-.4,-3,-.4,.8,h,.8,c,i===k?2:1);P.push([x,-3+h+.35,0,c,i===k?11:6])});const[n,g]=PL[k];
return{l:L,p:P,c:`روی ${n}: وزن آدم ۷۰ کیلوگرمی ${fa(Math.round(70*g))} نیوتن (معادل ${fa(Math.round(70*g/9.81))} کیلوگرم‌نیرو)`}});

const DS4=[["ماه",3.84e5],["خورشید",1.496e8],["نپتون",4.5e9],["پروکسیما قنطورس",4.0e13],["مرکز کهکشان راه شیری",2.5e17]];
const sci=v=>{const e=Math.floor(Math.log10(v));return`${fa((v/10**e).toFixed(1).replace(".","٫"))} × ۱۰^${fa(e)}`};
R("4-4","مقیاس فاصلهٔ فضایی","فاصله‌های فضا آن‌قدر متفاوت‌اند که باید لگاریتمی نشانشان داد. هر خط افقی کف ده برابر شدن فاصله است و ارتفاع هر ستون تعداد این ده‌برابرشدن‌ها را نشان می‌دهد؛ مرکز کهکشان ده‌ها میلیارد بار دورتر از ماه است.",t=>{const L=[],P=[],k=Math.floor(t*.6)%5;for(let e=5;e<=17;e++)sg(L,[-7,-3+(e-5)*.33,-1.4],[7,-3+(e-5)*.33,-1.4],"#16213a",1);
DS4.forEach(([n,v],i)=>{const x=(i-2)*2.9,h=(Math.log10(v)-5)*.33;wb(L,x-.4,-3,-.4,.8,h,.8,hm(i/4.5),i===k?2:1);P.push([x,-3+h+.4,0,i===k?"#fff":"#f0bc72",i===k?11:6])});
return{l:L,p:P,c:`${DS4[k][0]}: حدود ${sci(DS4[k][1])} کیلومتر`}});

const MN=[["آیو",4.217,1.769,"#f0d36b"],["اروپا",6.71,3.551,"#e8e2cf"],["گانیمد",10.7,7.155,"#b9a99a"],["کالیستو",18.83,16.689,"#8f7f76"]];
R("4-7","مقایسهٔ قمرها","چهار قمر بزرگ مشتری با دوره‌های واقعی‌شان می‌چرخند: آیو تندتر از همه و کالیستو کندتر از همه. آیو، اروپا و گانیمد با نسبت تقریبی ۱ به ۲ به ۴ هم‌طنین‌اند؛ شعاع مدارها برای دیده‌شدن کوچک شده است.",t=>{const L=[],P=[ [0,0,0,"#d9a878",26]],pos=[];MN.forEach(([n,a,T,c],i)=>{const r=a*.3,an=t*TAU/(T*.9)+i;ring(L,r,"y","#26324f",1);const p=[r*Math.cos(an),0,r*Math.sin(an)];pos.push(p);P.push([...p,c,7+i*.4])});sg(L,pos[0],pos[1],"#33426a",1);sg(L,pos[1],pos[2],"#33426a",1);
return{l:L,p:P,c:"دورهٔ چرخش (روز): آیو ۱٫۷۷ ، اروپا ۳٫۵۵ ، گانیمد ۷٫۱۵ ، کالیستو ۱۶٫۷"}});

R("4-8","مأموریت فضایی؛ محاسبهٔ زمان","مسیر هوهمان (Hohmann) از زمین به مریخ: فضاپیما در مداری بیضی‌شکل با کمترین سوخت می‌رود. باید طوری پرتاب شود که وقتی به مدار مریخ می‌رسد، مریخ هم همان‌جا باشد. سفر حدود ۲۵۹ روز طول می‌کشد.",t=>{const L=[],P=[],Re=3,Rm=4.56,a=(Re+Rm)/2,e=(Rm-Re)/(Rm+Re),d=(t%13)/13*340,Tt=259;ring(L,Re,"y","#2b4f9e",1.2);ring(L,Rm,"y","#7a3d33",1.2);
const el=nu=>{const r=a*(1-e*e)/(1+e*Math.cos(nu));return[r*Math.cos(nu),0,r*Math.sin(nu)]};let o=el(0);for(let i=1;i<=50;i++){const q=el(i/50*Math.PI);sg(L,o,q,"#51d5e8",1.2);o=q}
const th=d*TAU/365,mm=Math.PI-Tt*TAU/687+d*TAU/687,E=[Re*Math.cos(th),0,Re*Math.sin(th)],Ma=[Rm*Math.cos(mm),0,Rm*Math.sin(mm)];let S;if(d<Tt){const M=d/Tt*Math.PI;let En=M;for(let k=0;k<8;k++)En-=(En-e*Math.sin(En)-M)/(1-e*Math.cos(En));const nu=2*Math.atan2(Math.sqrt(1+e)*Math.sin(En/2),Math.sqrt(1-e)*Math.cos(En/2));S=el(nu)}else S=Ma;
P.push([0,0,0,"#ffd76a",20],[...E,"#5ab0ff",9],[...Ma,"#e2735a",8],[S[0],.3,S[2],"#fff",8]);return{l:L,p:P,c:d<Tt?`روز ${fa(Math.round(d))} سفر از ${fa(Tt)} روز`:"فضاپیما به مریخ رسید"}});

const AU=[["عطارد",.39,"#b9b2a7"],["زهره",.72,"#e8c07a"],["زمین",1,"#5ab0ff"],["مریخ",1.52,"#e2735a"],["مشتری",5.2,"#d9a878"],["زحل",9.58,"#e6d29a"],["اورانوس",19.2,"#8fe0e6"],["نپتون",30.1,"#6f8cff"]];
R("4-9","مبدل واحدهای نجومی","هر واحد نجومی فاصلهٔ متوسط زمین تا خورشید (حدود ۱۴۹٫۶ میلیون کیلومتر) است. فاصلهٔ سیاره‌ها برای دیده‌شدن با مقیاس ریشهٔ دوم کشیده شده است. پرتوی نور از خورشید می‌رود و می‌بینی در چند دقیقه به هر سیاره می‌رسد.",t=>{const L=[],P=[[-8,0,0,"#ffd76a",18]],X=au=>-8+Math.sqrt(au/30.1)*15.5,au=(t%16)/16*31;sg(L,[-8,0,0],[7.8,0,0],"#2a3858",1.2);
[1,2,5,10,20,30].forEach(v=>{sg(L,[X(v),-.5,0],[X(v),.5,0],"#4a5a8c",1.2)});AU.forEach(([n,v,c])=>{P.push([X(v),0,0,c,7]);sg(L,[X(v),0,0],[X(v),-1.4,0],"#25324f",1)});
P.push([X(au),0,0,"#fff6c8",9]);for(let i=0;i<8;i++)P.push([X(Math.max(0,au-i*.35)),0,0,"#fff6c8",4]);
const min=au*499/60;return{l:L,p:P,c:`پرتو نور پس از ${fa(Math.round(min))} دقیقه به ${f1(au)} واحد نجومی می‌رسد`+(min>=60?` (حدود ${f1(min/60)} ساعت)`:"")}});
})();

/* آزمایشگاه علم داده و زمین */
(()=>{
const {TAU,fa,f1,rg,gs,sg,ln,ring,wb,hm,grid,surf,cap,R,CY}=TIA.H;
const nrm=(x,m,s)=>Math.exp(-((x-m)**2)/(2*s*s))/(s*Math.sqrt(TAU));

/* ---------- علم داده ---------- */
const TB=(()=>{const r=rg(5);return Array.from({length:8},()=>Array.from({length:6},()=>1+r()*4))})();
R("5-0","تحلیلگر داده","جدول داده به صورت ستون‌های سه‌بعدی نشان داده شده: هر ردیف یک مورد و هر ردیف عمقی یک متغیر است. تحلیلگر ستون‌ها را یکی‌یکی بررسی می‌کند و میانگین هر متغیر را با یک خط طلایی نشان می‌دهد.",t=>{const L=[],P=[],k=Math.floor(t*.7)%6;grid(L,6.5,6,-3,"#141e36");let mean=0;
for(let c=0;c<6;c++)for(let r=0;r<8;r++){const v=TB[r][c],x=(r-3.5)*1.2,z=(c-2.5)*1.3;if(c===k)mean+=v/8;wb(L,x-.4,-3,z-.4,.8,v*.55,.8,c===k?"#f0bc72":hm(v/5)==="x"?"":"#4a5a8c",c===k?1.6:1)}
const z=(k-2.5)*1.3,y=-3+mean*.55;sg(L,[-5.4,y,z],[5.4,y,z],"#fff0b0",2);P.push([5.4,y,z,"#f0bc72",8]);return{l:L,p:P,c:`متغیر ${fa(k+1)}: میانگین ${f1(mean,2)}`}});

R("5-1","آمار توصیفی","منحنی ستونی یک توزیع نرمال است. خط طلایی میانگین، خط‌های آبی یک انحراف معیار و خط‌های بنفش دو انحراف معیار از میانگین‌اند. با تغییر میانگین و پراکندگی، شکل و جای این خط‌ها تغییر می‌کند.",t=>{const L=[],P=[],mu=1.2*Math.sin(t*.3),sd=1.1+.5*Math.sin(t*.55);grid(L,6.5,6,-3,"#141e36");
for(let i=0;i<27;i++){const x=-6+i*.46,h=nrm(x,mu,sd)*7;wb(L,x-.18,-3,-.3,.36,h+.02,.6,hm(h/3),1)}
[[mu,"#f0bc72",3],[mu-sd,"#51d5e8",2],[mu+sd,"#51d5e8",2],[mu-2*sd,"#a99aff",1.3],[mu+2*sd,"#a99aff",1.3]].forEach(([x,c,w])=>{sg(L,[x,-3,-1.6],[x,3.2,-1.6],c,w);sg(L,[x,-3,1.6],[x,3.2,1.6],c,w);sg(L,[x,3.2,-1.6],[x,3.2,1.6],c,w)});P.push([mu,-3+nrm(mu,mu,sd)*7+.4,0,"#f0bc72",9]);
return{l:L,p:P,c:`میانگین ${f1(mu,2)} ، انحراف معیار ${f1(sd,2)}`}});

const BC=[[3,5,2.2,4.4,3.1],[2,3.6,4.8,3.3,4.2],[4.5,2.2,3.5,2.8,5]];
R("5-2","نمودار میله‌ای","سه مجموعه داده (سه ردیف رنگی) در پنج دسته مقایسه شده‌اند. ارتفاع هر میله مقدار آن دسته است. میله‌ها یکی‌یکی بالا می‌آیند تا مقایسهٔ دسته‌ها و مجموعه‌ها آسان شود.",t=>{const L=[],P=[],T=t%10,col=["#51d5e8","#f0bc72","#f27d8d"];grid(L,6.6,6,-3,"#141e36");for(let y=1;y<=5;y++)sg(L,[-5.8,-3+y*.8,-3.5],[-5.8,-3+y*.8,3.5],"#1a2542",1);
BC.forEach((row,s)=>row.forEach((v,c)=>{const e=Math.max(0,Math.min(1,(T-.25*c-.5*s)/1.4)),h=v*.8*e;wb(L,(c-2)*2.1-.5,-3,(s-1)*2.1-.5,1,h+.02,1,col[s],1.2);if(e>0)P.push([(c-2)*2.1,-3+h+.35,(s-1)*2.1,col[s],5])}));return{l:L,p:P}});

const CR=(()=>{const r=rg(41),g=gs(r);return Array.from({length:70},()=>[g(),g(),(r()-.5)*4])})();
R("5-3","همبستگی پیرسون","ضریب همبستگی r نشان می‌دهد دو متغیر چقدر با هم تغییر می‌کنند. نقطه‌های سبز در جهت خط‌اند و قرمزها خلاف آن. وقتی r به ۱ یا ‎−۱ نزدیک است ابر نقطه‌ها به خط می‌چسبد و وقتی نزدیک ۰ است پخش می‌شود.",t=>{const L=[],P=[],r=Math.sin(t*.35);grid(L,5.5,5,-3.4,"#141e36");sg(L,[-4.5,-3.4,0],[4.5,-3.4,0],"#2a3858",1);
CR.forEach(p=>{const x=p[0]*1.3,y=(r*p[0]+Math.sqrt(1-r*r)*p[1])*1.3;P.push([x,y,p[2],x*y>=0?"#59d6a3":"#ff6b81",5])});sg(L,[-4.5,r*-4.5,0],[4.5,r*4.5,0],"#f0bc72",2);sg(L,[0,-3.4,0],[0,3.4,0],"#2a3858",1);
return{l:L,p:P,c:`r = ${f1(r,2)} `+(Math.abs(r)>.8?"(همبستگی قوی)":Math.abs(r)>.4?"(همبستگی متوسط)":"(همبستگی ضعیف)")}});

const FQ=[2,5,9,14,16,11,6,3],FN=FQ.reduce((a,b)=>a+b,0);
R("5-4","توزیع فراوانی","ستون‌ها فراوانی هر بازهٔ نمره‌اند و منحنی طلایی عقب، فراوانی تجمعی است که تا ۱۰۰٪ بالا می‌رود. نشانگر سفید نشان می‌دهد تا هر بازه چه درصدی از داده‌ها شمرده شده است.",t=>{const L=[],P=[],k=Math.floor((t%12)*.9)%8;grid(L,6,6,-3,"#141e36");let cum=0,o=null;
FQ.forEach((v,i)=>{cum+=v;const x=(i-3.5)*1.4;wb(L,x-.45,-3,-.45,.9,v*.28,.9,i<=k?hm(v/18):"#26324f",i===k?2:1);const p=[x,-3+cum/FN*4,2.2];if(o)sg(L,o,p,"#f0bc72",2);P.push([...p,i<=k?"#f0bc72":"#4a5a8c",i===k?9:5]);o=p;if(i===k){P.push([x,-3+v*.28+.4,0,"#fff",7]);L.push([x,-3,2.2,x,-3+cum/FN*4,2.2,"#8a7fe0",1])}});
let c2=0;for(let i=0;i<=k;i++)c2+=FQ[i];return{l:L,p:P,c:`تا بازهٔ ${fa(k+1)}: ${fa(c2)} از ${fa(FN)} مورد (${fa(Math.round(c2/FN*100))}٪)`}});

const RG=(()=>{const r=rg(61),pts=Array.from({length:34},()=>{const x=(r()-.5)*9;return[x,.7*x+.5+(r()+r()-1)*2.1,(r()-.5)*5]}),n=pts.length,mx=pts.reduce((s,p)=>s+p[0],0)/n,my=pts.reduce((s,p)=>s+p[1],0)/n;let c=0,v=0;pts.forEach(p=>{c+=(p[0]-mx)*(p[1]-my);v+=(p[0]-mx)**2});const m=c/v;return{pts,m,b:my-m*mx}})();
R("5-5","رگرسیون خطی","خط طلایی از میان نقطه‌ها عبور می‌کند. خط‌های سفید فاصلهٔ هر نقطه تا خط (باقی‌مانده) هستند. رگرسیون خطی را طوری می‌چرخاند که مجموع مربع این فاصله‌ها کمترین شود.",t=>{const L=[],P=[],T=t%12,k=Math.min(1,T/6),e=k*k*(3-2*k),m=-.6+(RG.m+.6)*e,b=3*(1-e)+RG.b*e;let sse=0;
RG.pts.forEach(p=>{const y=m*p[0]+b;sse+=(p[1]-y)**2;P.push([p[0],p[1],p[2],"#51d5e8",5]);sg(L,[p[0],p[1],p[2]],[p[0],y,p[2]],"#e6ecff",.8)});for(const z of[-2.5,0,2.5])sg(L,[-5,m*-5+b,z],[5,m*5+b,z],"#f0bc72",z?1:2.4);
return{l:L,p:P,c:`مجموع مربع خطاها: ${f1(sse,0)} | معادلهٔ خط: y = ${f1(m,2)}x + ${f1(b,2)}`}});

const GN=(()=>{const r=rg(77),g=()=>(r()+r()+r()+r()-2)*1.3;return{n:Array.from({length:380},()=>[g(),g(),g()]),u:Array.from({length:380},()=>[r()*3-1.5,r()*3-1.5,r()*3-1.5])}})();
R("5-6","تولید داده آزمایشی","با تولید داده می‌توان آزمایش کرد. چپ: داده‌های نرمال که اغلب نزدیک مرکز جمع می‌شوند. راست: داده‌های یکنواخت که در کل مکعب به‌طور مساوی پخش‌اند. نقطه‌ها یکی‌یکی تولید می‌شوند.",t=>{const L=[],P=[],n=Math.min(380,Math.floor((t%12)*55));wb(L,-6.2,-1.5,-1.5,3,3,3,"#2a3858",1);wb(L,3.2,-1.5,-1.5,3,3,3,"#2a3858",1);
for(let i=0;i<n;i++){const a=GN.n[i],b=GN.u[i];P.push([a[0]-4.7,a[1],a[2],"#51d5e8",3],[b[0]+4.7,b[1],b[2],"#f0bc72",3])}return{l:L,p:P,c:`${fa(n)} نقطه از هر نوع تولید شد`}});

const SC=(()=>{const r=rg(91),g=gs(r),C=[[-3,-1,-1],[2.5,1.5,-2],[0,2,2.5]];return C.map(c=>Array.from({length:22},()=>[c[0]+g()*.7,c[1]+g()*.7,c[2]+g()*.7]))})();
R("5-7","نمودار پراکندگی","سه متغیر روی سه محور و سه گروه با سه رنگ. سایه‌های کم‌رنگ روی کف و دیوار پشتی پیش‌بینی نقطه‌ها روی دو محور هستند که الگوی گروه‌ها را راحت‌تر نشان می‌دهند. هر چند ثانیه یک گروه برجسته می‌شود.",t=>{const L=[],P=[],g=Math.floor(t/3)%3,col=["#51d5e8","#f0bc72","#f27d8d"];sg(L,[-5,-3.2,-5],[5,-3.2,-5],"#2a3858",1.2);sg(L,[-5,-3.2,-5],[-5,3.5,-5],"#2a3858",1.2);sg(L,[-5,-3.2,-5],[-5,-3.2,5],"#2a3858",1.2);
for(let k=-4;k<=4;k+=2){sg(L,[k,-3.3,-5],[k,-3.1,-5],"#4a5a8c",1);sg(L,[-5,-3.3,k],[-5,-3.1,k],"#4a5a8c",1)}
SC.forEach((G,i)=>G.forEach(p=>{const on=i===g;P.push([...p,on?col[i]:"#3a4a6e",on?7:4],[p[0],-3.2,p[2],"#16213a",2],[p[0],p[1],-5,"#16213a",2]);if(on)sg(L,p,[p[0],-3.2,p[2]],col[i],.6)}));return{l:L,p:P,c:`گروه ${fa(g+1)} برجسته شده است`}});

R("5-8","مقایسهٔ دو مجموعه","دو توزیع نرمال در دو ردیف: مجموعهٔ A (آبی) و مجموعهٔ B (طلایی). خط‌های عمودی میانگین هر مجموعه‌اند. با حرکت میانگین B، فاصلهٔ دو مجموعه و میزان هم‌پوشانی آن‌ها تغییر می‌کند.",t=>{const L=[],P=[],mA=-1,sA=1,mB=1.2+2*Math.sin(t*.4),sB=1.5;grid(L,6.5,6,-3,"#141e36");
[[-1.8,mA,sA,"#51d5e8"],[1.8,mB,sB,"#f0bc72"]].forEach(([z,m,s,c])=>{let o=null;for(let i=0;i<=60;i++){const x=-6+i*.2,p=[x,-3+nrm(x,m,s)*6.5,z];if(o)sg(L,o,p,c,1.8);if(i%2===0)sg(L,[x,-3,z],p,c,.6);o=p}sg(L,[m,-3,z],[m,-3+nrm(m,m,s)*6.5+.3,z],"#fff",1.8);P.push([m,-3+nrm(m,m,s)*6.5+.5,z,c,9])});
return{l:L,p:P,c:`اختلاف میانگین‌ها: ${f1(Math.abs(mB-mA),2)}`}});

const MA=(()=>{const r=rg(5);return Array.from({length:60},(_,i)=>Math.sin(i*.19)*1.8+(r()-.5)*1.8)})();
R("5-9","میانگین متحرک","منحنی کهربایی داده‌های پرنوسان است. منحنی سبز پشت آن میانگین متحرک است که با پنجره‌ای لغزان نوسان‌های تصادفی را صاف می‌کند. هرچه پنجره بزرگ‌تر باشد، منحنی هموارتر ولی دیرتر است.",t=>{const L=[],P=[],W=[3,7,11,15],w=W[Math.floor(t/4)%4],X=i=>(i-29.5)*.27,pos=Math.floor((t%4)*15);let o=null,o2=null;
MA.forEach((v,i)=>{const p=[X(i),v*.9,-1.6];if(o)sg(L,o,p,"#f0bc72",1.4);P.push([...p,"#f0bc72",3.5]);o=p;if(i>=w-1){let s=0;for(let k=0;k<w;k++)s+=MA[i-k];const q=[X(i),s/w*.9,1.6];if(o2)sg(L,o2,q,"#59d6a3",2);o2=q}});
const i0=Math.max(w-1,pos);wb(L,X(i0-w+1),-3,-2.3,(w-1)*.27+.1,6,4.6,"#a99aff",1);return{l:L,p:P,c:`اندازهٔ پنجره: ${fa(w)}`}});

/* ---------- زمین ---------- */
R("6-3","مقیاس نقشه","چهار نقشه بالای هم‌اند: هر طبقه تصویر بزرگ‌ترِ بخشی از طبقهٔ پایین است. قاب طلایی ناحیه‌ای است که در طبقهٔ بالا بزرگ‌نمایی می‌شود. هرچه بالاتر برویم مقیاس بزرگ‌تر و جزئیات بیشتر است.",t=>{const L=[],P=[],S=["۱ : ۱٬۰۰۰٬۰۰۰","۱ : ۲۵۰٬۰۰۰","۱ : ۵۰٬۰۰۰","۱ : ۱۰٬۰۰۰"],q=[Math.floor(t/5)%4,Math.floor(t/3)%4,Math.floor(t/2)%4];let box=[-3,-3,6];const bx=[];
for(let k=0;k<4;k++){const y=-3.2+k*2.1,n=2+k*2;wb(L,-3,y,-3,6,.05,6,"#4a5a8c",1);for(let i=1;i<n;i++){const a=-3+6*i/n;sg(L,[a,y,-3],[a,y,3],"#1a2542",1);sg(L,[-3,y,a],[3,y,a],"#1a2542",1)}
bx.push(box);if(k<3){const s=box[2]/2,x0=box[0]+(q[k]%2)*s,z0=box[1]+Math.floor(q[k]/2)*s;ln(L,[[x0,y,z0],[x0+s,y,z0],[x0+s,y,z0+s],[x0,y,z0+s]],"#f0bc72",2,true);const y2=y+2.1;[[0,0],[1,0],[1,1],[0,1]].forEach(([a,b])=>sg(L,[x0+a*s,y,z0+b*s],[-3+a*6,y2,-3+b*6],"#33426a",1));box=[x0,z0,s]}}
return{l:L,p:P,c:"از پایین به بالا: "+S.join(" ، ")}});

R("6-4","محاسبهٔ بزرگی زلزله","کانون زلزله زیر زمین است و موج‌های P (آبی) و S (بنفش) در همهٔ جهت‌ها پخش می‌شوند و در سطح حلقه‌ای می‌سازند. هر واحد بزرگی تقریباً ۳۲ برابر انرژی دارد؛ مکعب‌های سمت راست حجم متناسب با انرژی دارند.",t=>{const L=[],P=[],yh=-2.4,Rp=(t%7)*1.25,Rs=Rp*.58;grid(L,6,6,0,"#16213a");P.push([0,yh,0,"#ff6b81",12],[0,0,0,"#fff",5]);
[[Rp,"#51d5e8"],[Rs,"#a99aff"]].forEach(([Rr,c])=>{for(let k=-5;k<=5;k++){const y=yh+Rr*k/5;if(y>0||Rr<.05)continue;const rr=Math.sqrt(Math.max(0,Rr*Rr-(y-yh)**2));if(rr>.05)ring(L,rr,"y",c,1,[0,y,0],36)}});
for(let M=3;M<=6;M++){const s=.05*Math.pow(3.1623,M-3),x=4.8+(M-3)*.9;wb(L,x,-3.5,-6.2+(M-3)*.6,s,s,s,hm((M-3)/3),1.4)}
return{l:L,p:P,c:"هر ۱ واحد افزایش بزرگی ≈ ۳۲ برابر انرژی و ۱۰ برابر دامنهٔ لرزه‌نگاشت"}});

R("6-5","چرخهٔ آب؛ مدل ساده","آب اقیانوس (چپ) با گرمای خورشید تبخیر می‌شود و بالا می‌رود، در ابر چگالیده می‌شود، روی کوه (راست) به صورت باران می‌بارد و از رودخانه دوباره به اقیانوس برمی‌گردد.",t=>{const L=[],P=[],st=Math.floor((t%12)/3),nm=["تبخیر","چگالش و تشکیل ابر","بارش","رواناب و بازگشت به اقیانوس"];
L.push(...surf(10,6,(x,z)=>.12*Math.sin(x*2+t*2)*Math.cos(z*2)-2.6,()=>"#2b4f9e").map(l=>{l[0]-=5;l[3]-=5;return l}));
for(let k=0;k<6;k++){const r=3.2*(1-k/6),y=-2.6+k*.6;ring(L,r,"y","#6b5a44",1,[5,y,0],28)}P.push([5,-.6,0,"#e8e2cf",5],[-6,3.4,-2,"#ffd76a",20]);
for(let k=0;k<44;k++){const u=(t*.14+k/44)%1;P.push([-6.5+u*6.2+Math.sin(k)*.5,-2.5+u*5.2,(k%7-3)*.55,"#9fd4ff",3])}for(let k=0;k<12;k++)P.push([-.6+Math.cos(k*1.7)*1.4,2.6+Math.sin(k*2.3)*.5,Math.sin(k*1.1)*1.2,"#d8e4ff",11]);
for(let k=0;k<30;k++){const u=(t*.4+k/30)%1;P.push([2.5+Math.sin(k*5)*1.2,2.5-u*4.8,Math.cos(k*3)*1.2,"#51a8ff",3.5])}
let o=[4.2,-.8,.3];for(let i=1;i<=14;i++){const f=i/14,q=[4.2-f*10.5,-.8-1.6*f,.3+Math.sin(f*5)*.6];sg(L,o,q,"#51a8ff",1.8);o=q}
return{l:L,p:P,c:"مرحله: "+nm[st]}});

const HI=(T,H)=>{const F=T*9/5+32,h=-42.379+2.04901523*F+10.14333127*H-.22475541*F*H-.00683783*F*F-.05481717*H*H+.00122874*F*F*H+.00085282*F*H*H-.00000199*F*F*H*H;return(h-32)*5/9};
const HMAX=HI(37,100),HMIN=HI(27,40);
R("6-6","شاخص دمایی","سطح، دمای احساسی را برای هر دما (محور افقی) و رطوبت (محور عمق) نشان می‌دهد. با افزایش رطوبت، عرق کمتر تبخیر می‌شود و هوا گرم‌تر احساس می‌شود. کرهٔ طلایی یک شرایط هوایی است.",t=>{const T=32+4.5*Math.sin(t*.4),H=70+28*Math.cos(t*.3),m=(T,H)=>[(T-32)*1.1,-3+(HI(T,H)-HMIN)/(HMAX-HMIN)*5.6,(H-70)*.14],L=[];
for(let i=0;i<=14;i++)for(let j=0;j<=14;j++){const T0=27+i/14*10,H0=40+j/14*60;if(i<14)sg(L,m(T0,H0),m(T0+10/14,H0),hm((HI(T0,H0)-HMIN)/(HMAX-HMIN)),1);if(j<14)sg(L,m(T0,H0),m(T0,H0+60/14),hm((HI(T0,H0)-HMIN)/(HMAX-HMIN)),1)}
const p=m(T,H);sg(L,[p[0],-3,p[2]],p,"#fff0b0",1.2);return{l:L,p:[[...p,"#f0bc72",10]],c:`دمای هوا ${f1(T)} و رطوبت ${fa(Math.round(H))}٪ ⟵ دمای احساسی ${f1(HI(T,H))} درجهٔ سانتی‌گراد`}});

R("6-7","عمق و فشار آب","هرچه غواص (کرهٔ سفید) پایین‌تر می‌رود، وزن ستون آب بالای سرش بیشتر می‌شود و فشار بیشتر است. طول فلش‌ها فشار آب را روی دیوارهٔ مخزن نشان می‌دهد؛ هر ۱۰ متر عمق تقریباً یک اتمسفر به فشار اضافه می‌کند.",t=>{const L=[],P=[],d=(t%10)/10*6,top=3,bot=-3;wb(L,-3,bot,-2,6,top-bot,4,"#33426a",1.2);L.push(...surf(10,6,(x,z)=>.06*Math.sin(x*3+t*2)*Math.cos(z*3)+top,()=>"#3a78d6"));
for(let k=0;k<=10;k++){const y=top-k*.6,dd=top-y,len=.4+dd*.55;sg(L,[3,y,0],[3+len,y,0],"#f0bc72",1.4);sg(L,[3+len,y,0],[3+len-.25,y+.12,0],"#f0bc72",1.4);sg(L,[3+len,y,0],[3+len-.25,y-.12,0],"#f0bc72",1.4);sg(L,[-3,y,0],[-3-len,y,0],"#51d5e8",1)}
sg(L,[3,top,0],[3+.4+6*.55,bot,0],"#f0bc72",1);P.push([0,top-d,0,"#fff",11]);const m=d*5,atm=1+m/10;return{l:L,p:P,c:`عمق ${fa(Math.round(m))} متر ⟵ فشار حدود ${f1(atm)} اتمسفر`}});

R("6-8","تبدیل ارتفاع و واحد","دو خط‌کش کنار هم: متر (چپ) و فوت (راست). خطوط افقی ارتفاع‌های برابر را به هم وصل می‌کنند. دماوند ۵۶۱۰ متر و اورست ۸۸۴۹ متر است. نشانگر بالا و پایین می‌رود و عدد برابر را به فوت تبدیل می‌کند.",t=>{const L=[],P=[],Y=h=>-3+h/9000*6.4,H=(1+Math.sin(t*.5))/2*8900;sg(L,[-2,Y(0),0],[-2,Y(9000),0],"#51d5e8",1.6);sg(L,[2,Y(0),0],[2,Y(9000),0],"#f0bc72",1.6);
for(let m=0;m<=9000;m+=1000){sg(L,[-2.3,Y(m),0],[-1.7,Y(m),0],"#51d5e8",1.2);sg(L,[-1.7,Y(m),0],[1.7,Y(m),0],"#16213a",1)}for(let f=0;f<=30000;f+=5000){const h=f*.3048;sg(L,[1.7,Y(h),0],[2.3,Y(h),0],"#f0bc72",1.2)}
[[-5.5,5610,"#59d6a3"],[5.5,8849,"#e8e2cf"]].forEach(([x,h,c])=>{for(let k=0;k<=4;k++){const y=Y(h*k/4);ring(L,2.1*(1-k/4)+.02,"y",c,1,[x,y*1,0],24)}P.push([x,Y(h)+.3,0,c,7])});
sg(L,[-2,Y(H),0],[2,Y(H),0],"#fff",2);P.push([-2,Y(H),0,"#51d5e8",8],[2,Y(H),0,"#f0bc72",8]);return{l:L,p:P,c:`${fa(Math.round(H))} متر = ${fa(Math.round(H/.3048))} فوت`}});

const sph=(L,r,c,cut,w=1,n=18)=>{const ok=p=>!cut||!(p[0]>0&&p[1]>0&&p[2]>0);for(let a=0;a<n;a++){const lo=a/n*TAU;let q=null;for(let i=0;i<=36;i++){const la=-Math.PI/2+i/36*Math.PI,p=[r*Math.cos(la)*Math.cos(lo),r*Math.sin(la),r*Math.cos(la)*Math.sin(lo)];if(q&&ok([(p[0]+q[0])/2,(p[1]+q[1])/2,(p[2]+q[2])/2]))sg(L,q,p,c,w);q=p}}
for(let b=-4;b<=4;b++){const la=b/5*Math.PI/2,rr=r*Math.cos(la);let q=null;for(let i=0;i<=40;i++){const lo=i/40*TAU,p=[rr*Math.cos(lo),r*Math.sin(la),rr*Math.sin(lo)];if(q&&ok([(p[0]+q[0])/2,(p[1]+q[1])/2,(p[2]+q[2])/2]))sg(L,q,p,c,w);q=p}}};
R("6-9","اطلس مفاهیم زمین","برش زمین: پوستهٔ نازک سبز، گوشتهٔ بزرگ تا حدود ۲۹۰۰ کیلومتر عمق، هستهٔ بیرونی مایع (نارنجی) و هستهٔ درونی جامد (طلایی). ضخامت پوسته برای دیده‌شدن بیش‌تر از واقعیت کشیده شده است.",t=>{const L=[],P=[],lay=[[3.6,"#59d6a3"],[3.3,"#4a5a8c"],[2.0,"#f0a35a"],[.7,"#f0bc72"]];lay.forEach(([r,c],i)=>sph(L,r,c,true,1,i<2?16:12));
const pl=(a,b)=>{lay.forEach(([r,c])=>{let q=null;for(let i=0;i<=16;i++){const th=i/16*Math.PI/2,p=a(r*Math.cos(th),r*Math.sin(th));if(q)sg(L,q,p,c,1.2);q=p}})};pl((u,v)=>[u,v,0]);pl((u,v)=>[0,u,v]);pl((u,v)=>[v,0,u]);
const k=Math.floor(t*.5)%4,NM=["پوسته: ۵ تا ۷۰ کیلومتر","گوشته: تا ۲۸۹۰ کیلومتر عمق","هستهٔ بیرونی مایع: حدود ۲۲۶۰ کیلومتر ضخامت","هستهٔ درونی جامد: شعاع حدود ۱۲۲۰ کیلومتر"];P.push([0,0,0,lay[k][1],8]);return{l:L,p:P,c:NM[k]}});
})();

/* دانشنامه: هر مدخل صحنهٔ مخصوص خودش را دارد */
(()=>{
const {TAU,fa,f1,rg,gs,sg,ln,ring,wb,hm,grid,surf,cap,R,CY,perFn}=Object.assign({},TIA.H);
const Z="\u200c",rf=(x,a,b)=>{const w=b-a;let u=(x-a)%(2*w);if(u<0)u+=2*w;return a+(u>w?2*w-u:u)};
const arrow=(L,a,b,c,w=1.6)=>{sg(L,a,b,c,w);const d=[b[0]-a[0],b[1]-a[1],b[2]-a[2]],m=Math.hypot(...d)||1,u=d.map(v=>v/m),n=[-u[1],u[0],0];[1,-1].forEach(s=>sg(L,b,[b[0]-u[0]*.3+n[0]*.14*s,b[1]-u[1]*.3+n[1]*.14*s,b[2]-u[2]*.3],c,w))};

/* 7-1 گاه‌شمار علم */
const EV=[[1687,"انتشار «اصول» نیوتن"],[1865,"معادلات ماکسول؛ یکپارچگی برق و مغناطیس"],[1905,"نسبیت خاص و اثر فوتوالکتریک"],[1953,"ساختار مارپیچ دوگانه"+Z+"ی DNA"],[2015,"نخستین آشکارسازی امواج گرانشی"]];
R("7-1","گاه"+Z+"شمار علم","پنج رویداد بزرگ علم روی یک محور زمان (قدیمی‌ترین سمت راست). هر ستون یک رویداد است و ارتفاع و رنگ آن برای تشخیص بهتر فرق دارد. خط طلایی، پیوستگی کشف‌ها را نشان می‌دهد و حلقهٔ موجی رویدادِ برجسته را علامت می‌زند.",t=>{const L=[],P=[],X=y=>8-(y-1660)/(2030-1660)*16,a=Math.floor(t*.45)%5;sg(L,[-8.6,-2.4,0],[8.6,-2.4,0],"#33426a",1.6);
for(let y=1700;y<=2000;y+=50){sg(L,[X(y),-2.4,-.3],[X(y),-2.6,.3],"#4a5a8c",1)}
let o=null;EV.forEach(([y,n],i)=>{const h=1.6+(i%2)*1.5+i*.15,p=[X(y),-2.4+h,0];sg(L,[p[0],-2.4,0],p,i===a?"#fff":"#4a5a8c",i===a?1.6:1);if(o)sg(L,o,p,"#f0bc72",1.6);P.push([...p,i===a?"#fff":hm(i/6),i===a?12:8]);o=p;if(i===a){const rr=((t*1.3)%1)*1.6+.2;ring(L,rr,"z","#a99aff",1.2,p)}});
return{l:L,p:P,c:`${fa(EV[a][0])}: ${EV[a][1]}`}});

/* 7-2 فرمول‌های ریاضی */
const sq=(L,P0,P1,Rf,col,y,h,unit)=>{const e=[P1[0]-P0[0],P1[1]-P0[1]],ln0=Math.hypot(...e);let n=[-e[1],e[0]];if(n[0]*(Rf[0]-P0[0])+n[1]*(Rf[1]-P0[1])>0)n=[-n[0],-n[1]];const c=[P0,P1,[P1[0]+n[0],P1[1]+n[1]],[P0[0]+n[0],P0[1]+n[1]]];
[y,y+h].forEach(yy=>ln(L,c.map(p=>[p[0],yy,p[1]]),col,1.4,true));c.forEach(p=>sg(L,[p[0],y,p[1]],[p[0],y+h,p[1]],col,1));const k=Math.round(ln0/unit);for(let i=1;i<k;i++){const f=i/k;sg(L,[c[0][0]+(c[1][0]-c[0][0])*f,y+h,c[0][1]+(c[1][1]-c[0][1])*f],[c[3][0]+(c[2][0]-c[3][0])*f,y+h,c[3][1]+(c[2][1]-c[3][1])*f],col,.6);sg(L,[c[0][0]+(c[3][0]-c[0][0])*f,y+h,c[0][1]+(c[3][1]-c[0][1])*f],[c[1][0]+(c[2][0]-c[1][0])*f,y+h,c[1][1]+(c[2][1]-c[1][1])*f],col,.6)}};
const pyth=t=>{const L=[],P=[],u=.62,T=[[0,0],[4,0],[0,3]].map(p=>[(p[0]-1.4)*u,(p[1]-.4)*u]);ln(L,T.map(p=>[p[0],-1.5,p[1]]),"#fff",2,true);
[[T[0],T[1],T[2],"#59d6a3"],[T[0],T[2],T[1],"#51d5e8"],[T[1],T[2],T[0],"#f0bc72"]].forEach(([a,b,c,col],i)=>sq(L,a,b,c,col,-1.5,.15+.5*Math.max(0,Math.sin(t*1.1-i*1.2)),u));return{l:L,p:P,c:"۳² + ۴² = ۹ + ۱۶ = ۲۵ = ۵²"}};
const circ=t=>{const L=[],P=[],th=t*.85,C=[-3.5,0,0],p=[C[0]+2*Math.cos(th),2*Math.sin(th),0];ring(L,2,"z","#33426a",1.2,C);sg(L,[-6.2,0,0],[7.5,0,0],"#2a3858",1);sg(L,C,p,"#f0bc72",2);sg(L,p,[p[0],0,0],"#51d5e8",1.4);sg(L,[C[0],0,0],[p[0],0,0],"#59d6a3",1.4);
let o=null;for(let s=0;s<=60;s++){const ph=th-s*.1;if(ph<0)break;const q=[-1.5+s*.1*1.5,2*Math.sin(ph),0];if(o)sg(L,o,q,"#a99aff",1.8);o=q}sg(L,p,[-1.5,p[1],0],"#26324f",1);P.push([...p,"#fff",9]);return{l:L,p:P,c:`sin θ = ${f1(Math.sin(th),2)} ، cos θ = ${f1(Math.cos(th),2)} ، sin²θ + cos²θ = ۱`}};
const quad=t=>{const L=[],P=[],h=-2.6*Math.cos(t*.39),f=x=>.22*(x-.5)**2+h;sg(L,[-6.5,0,0],[7,0,0],"#33426a",1.4);sg(L,[0,-3.5,0],[0,3.5,0],"#26324f",1);
for(const z of[-1.4,0,1.4]){let o=null;for(let i=0;i<=60;i++){const x=-6+i*.2,y=f(x);if(y>3.6){o=null;continue}const q=[x,y,z];if(o)sg(L,o,q,z?"#3a4a8c":"#a99aff",z?1:2);o=q}}
P.push([.5,h,0,"#51d5e8",8]);const D=-h/.22;let tx="بدون ریشهٔ حقیقی";if(D>=-.01&&D<=.03)tx="یک ریشه";else if(D>0){const r=Math.sqrt(D);P.push([.5+r,0,0,"#f0bc72",10],[.5-r,0,0,"#f0bc72",10]);tx="دو ریشه"}return{l:L,p:P,c:`Δ ${h<-.02?"> ۰":h>.02?"< ۰":"= ۰"} ⟵ ${tx}`}};
const eul=t=>{const L=[],P=[],th=t*.9;ring(L,2,"y","#33426a",1.2,[0,-3,0]);sg(L,[-3,-3,0],[3,-3,0],"#26324f",1);sg(L,[0,-3,-3],[0,-3,3],"#26324f",1);let o=null;for(let i=0;i<=Math.floor(th/.08);i++){const ph=i*.08,q=[2*Math.cos(ph),-3+ph*.3,2*Math.sin(ph)];if(o)sg(L,o,q,"#a99aff",2);o=q}
const p=[2*Math.cos(th),-3+th*.3,2*Math.sin(th)];sg(L,[0,-3,0],[p[0],-3,p[2]],"#51d5e8",1.2);sg(L,[p[0],-3,p[2]],p,"#26324f",1);P.push([...p,"#fff",9]);if(th>=Math.PI)P.push([-2,-3+Math.PI*.3,0,"#f0bc72",12]);return{l:L,p:P,c:`θ = ${f1(th/Math.PI,2)}π`+(th>=Math.PI?" ⟵ e^{iπ} = ‎−۱ (نقطهٔ طلایی)":"")}};
CY("7-2",[["فیثاغورس","مساحت مربع روی وتر برابر مجموع مساحت مربع‌های روی دو ضلع دیگر است. مربع‌ها به خانه‌های واحد تقسیم شده‌اند تا ۹ و ۱۶ و ۲۵ خانه را بشماری.",pyth,"#f0bc72"],["دایره","نقطهٔ چرخان روی دایرهٔ واحد، موج سینوس را رسم می‌کند: ارتفاع نقطه همان sin و فاصلهٔ افقی‌اش همان cos است.",circ,"#a99aff"],["معادله"+Z+"ی درجه ۲","ریشه‌های معادله جاهایی هستند که سهمی محور افقی را قطع می‌کند. با بالا و پایین رفتن سهمی، تعداد ریشه‌ها از دو به یک و سپس صفر می‌رسد.",quad,"#51d5e8"],["اویلر","فرمول اویلر e^{iθ} = cos θ + i sin θ یک مارپیچ می‌سازد که دور دایرهٔ واحد می‌چرخد و در θ = π به ‎−۱ می‌رسد.",eul,"#59d6a3"]],8);

/* 7-3 مفاهیم ریاضی */
const pcol=t=>{const L=[],P=[],sel=Math.floor(t*2.2)%30+1,D=[0];for(let n=1;n<=30;n++){let d=0;for(let k=1;k<=n;k++)if(n%k===0)d++;D[n]=d}grid(L,8,8,-3,"#141e36");
for(let n=1;n<=30;n++){const x=(n-15.5)*.5,pr=D[n]===2;wb(L,x-.18,-3,-.18,.36,D[n]*.45,.36,pr?"#f0bc72":"#7f6cf0",pr?1.8:1);if(pr)P.push([x,-3+D[n]*.45+.3,0,"#f0bc72",5])}P.push([(sel-15.5)*.5,-3+D[sel]*.45+.9,0,"#fff",8]);return{l:L,p:P,c:`عدد ${fa(sel)}: ${fa(D[sel])} مقسوم‌علیه`+(D[sel]===2?" ⟵ اول است":"")}};
const fmap=t=>{const L=[],P=[],a0=-3+((t%8)/8)*6,F=a=>a*a/3-1.5;sg(L,[-5,-3.2,0],[-5,3.2,0],"#4a5a8c",1.6);sg(L,[5,-3.2,0],[5,3.2,0],"#4a5a8c",1.6);
for(let k=0;k<=12;k++){const a=-3+k*.5,on=Math.abs(a-a0)<.26,z=Math.sin(k*1.7)*1.4;let o=null;for(let i=0;i<=14;i++){const f=i/14,q=[-5+f*10,a+(F(a)-a)*f,Math.sin(f*Math.PI)*z];if(o)sg(L,o,q,on?"#fff0b0":"#2a3858",on?2:1);o=q}P.push([-5,a,0,on?"#fff":"#51d5e8",on?9:5],[5,F(a),0,on?"#fff":"#f0bc72",on?9:5])}
return{l:L,p:P,c:`ورودی ${f1(a0)} ⟵ خروجی ${f1(F(a0))}  (f(x) = x² ÷ ۳ − ۱٫۵)`}};
const lim=t=>{const L=[],P=[],Xs=x=>(x-1)*1.5,Ys=y=>(y-2)*1.1,d=Math.max(.02,3*Math.exp(-(t%8)*.5));sg(L,[-6.5,-3.4,0],[6.5,-3.4,0],"#2a3858",1);sg(L,[-6.5,-3.4,0],[-6.5,3.4,0],"#2a3858",1);
let o=null;for(let x=-2;x<=4.01;x+=.1){if(Math.abs(x-1)<.06){o=null;continue}const q=[Xs(x),Ys(x+1),0];if(o)sg(L,o,q,"#a99aff",2);o=q}ring(L,.18,"z","#f0bc72",1.6,[0,0,0],20);
[1-d,1+d].forEach((x,i)=>{const p=[Xs(x),Ys(x+1),0];P.push([...p,i?"#59d6a3":"#ff9bd0",8]);sg(L,[p[0],-3.4,0],p,"#26324f",1);sg(L,p,[-6.5,p[1],0],"#26324f",1)});P.push([-6.5,0,0,"#f0bc72",9]);return{l:L,p:P,c:`وقتی x از دو طرف به ۱ نزدیک می‌شود (فاصله ${f1(d,2)}) ، f(x) به ۲ نزدیک می‌شود`}};
const der=t=>{const L=[],P=[],f=x=>.12*x**3-.7*x,df=x=>.36*x*x-.7,a=2.2*Math.sin(t*.4),h=Math.max(.04,2.2*Math.exp(-t*.55));sg(L,[-6,0,0],[6,0,0],"#2a3858",1);let o=null;for(let x=-4.6;x<=4.6;x+=.15){const q=[x,f(x),0];if(o)sg(L,o,q,"#a99aff",2);o=q}
const s=(f(a+h)-f(a))/h,fin=h<.12;sg(L,[a-3,f(a)-3*s,0],[a+3,f(a)+3*s,0],fin?"#f0bc72":"#51d5e8",fin?2.4:1.6);P.push([a,f(a),0,"#fff",9],[a+h,f(a+h),0,"#59d6a3",7]);return{l:L,p:P,c:fin?`شیب مماس در x=${f1(a,1)}: ${f1(df(a),2)}`:`شیب خط قاطع ${f1(s,2)} (با کم شدن h به مماس می‌رسد)`}};
CY("7-3",[["عدد اول","ارتفاع هر ستون تعداد مقسوم‌علیه‌هاست؛ عددی که دقیقاً دو مقسوم‌علیه دارد اول است و طلایی می‌شود.",pcol,"#f0bc72"],["تابع","هر ورودی در سمت راست فقط به یک خروجی در سمت چپ نگاشته می‌شود. کمان‌ها همین نگاشت‌اند و ورودی انتخاب‌شده سفید است.",fmap,"#51d5e8"],["حد","تابع در x = ۱ حفره دارد، اما وقتی x از چپ و راست به آن نزدیک می‌شود مقدار تابع به ۲ می‌رسد؛ این همان مفهوم حد است.",lim,"#59d6a3"],["مشتق","خط قاطع (آبی) هرچه دو نقطه‌اش نزدیک‌تر می‌شود به خط مماس (طلایی) می‌رسد و شیب مماس همان مشتق است.",der,"#a99aff"]],8);

/* 7-4 مفاهیم فیزیک */
const frc=t=>{const L=[],P=[],k=.15;sg(L,[-7,-1,-1.6],[8,-1,-1.6],"#26324f",1.2);sg(L,[-7,-1,1.6],[8,-1,1.6],"#26324f",1.2);
[[-1.6,1,2,.9,"#f27d8d"],[1.6,2,1,1.35,"#51d5e8"]].forEach(([z,m,a,s,c])=>{const x=-6+k*a*t*t*2.2;wb(L,x-s/2,-1,z-s/2,s,s,s,c,1.6);arrow(L,[x-2.6,-.4,z],[x-s/2-.1,-.4,z],"#ff6b81",2);arrow(L,[x,s-.7,z],[x+a*.9,s-.7,z],"#59d6a3",2);P.push([x,-.4+s/2,z,c,5])});
return{l:L,p:P,c:"نیروی یکسان (فلش قرمز): جسم سبک‌تر شتاب بیشتری می‌گیرد (فلش سبز بلندتر). F = m × a"}};
const pen=t=>{const L=[],P=[],Ll=3.4,th=.9*Math.cos(t*1.6),pv=[-2.5,3.2,0],b=[pv[0]+Ll*Math.sin(th),pv[1]-Ll*Math.cos(th),0],E=1-Math.cos(.9),pe=1-Math.cos(th),ke=E-pe;sg(L,pv,b,"#cbd5ea",1.6);P.push([...b,"#f0bc72",12],[...pv,"#6d7c98",6]);
for(let i=-10;i<=10;i++){const a=i/10*.9,q=[pv[0]+Ll*Math.sin(a),pv[1]-Ll*Math.cos(a),0];if(i>-10){const a0=(i-1)/10*.9;sg(L,[pv[0]+Ll*Math.sin(a0),pv[1]-Ll*Math.cos(a0),0],q,"#26324f",1)}}
wb(L,3.4,-3,-1.3,1.3,pe/E*3+.03,1,"#f0bc72",1.6);wb(L,5.2,-3,-1.3,1.3,Math.max(0,ke)/E*3+.03,1,"#51d5e8",1.6);wb(L,7,-3,-1.3,1,3,1,"#33426a",1);return{l:L,p:P,c:`انرژی پتانسیل (طلایی) ${fa(Math.round(pe/E*100))}٪ ، انرژی جنبشی (آبی) ${fa(Math.round(Math.max(0,ke)/E*100))}٪ ، مجموع ثابت (ستون خاکستری)`}};
const mom=t=>{const L=[],P=[],v=2.2,tc=(6-1.1)/v,x1=t<tc?-6+v*t:-1.1+(-v/3)*(t-tc),x2=t<tc?0:(2*v/3)*(t-tc),v1=t<tc?v:-v/3,v2=t<tc?0:2*v/3;sg(L,[-8,-.5,0],[8,-.5,0],"#26324f",1.2);
P.push([x1,0,0,"#51d5e8",12],[x2,0,0,"#f0bc72",17]);arrow(L,[x1,1.2,0],[x1+1*v1*.7,1.2,0],"#51d5e8",2);arrow(L,[x2,1.8,0],[x2+2*v2*.7,1.8,0],"#f0bc72",2);arrow(L,[-4,3.1,0],[-4+2.2*.7,3.1,0],"#fff",2);
return{l:L,p:P,c:`تکانهٔ کل ثابت است: ${f1(1*v1+2*v2,2)} (همان مقدار پیش از برخورد). جرم کوچک (آبی) ۱ و جرم بزرگ (طلایی) ۲ است`}};
const ENT=(()=>{const r=rg(23);return Array.from({length:70},()=>({p:[-4+r()*3.8,-1.7+r()*3.4,-1.7+r()*3.4],v:[(r()-.5)*3.4,(r()-.5)*3.4,(r()-.5)*3.4]}))})();
const ent=t=>{const L=[],P=[],s=Math.max(0,t-1.5);wb(L,-4,-1.8,-1.8,8,3.6,3.6,"#33426a",1.2);if(t<1.5)ln(L,[[0,-1.8,-1.8],[0,1.8,-1.8],[0,1.8,1.8],[0,-1.8,1.8]],"#f27d8d",1.8,true);let rt=0;
ENT.forEach(q=>{const x=s>0?rf(q.p[0]+q.v[0]*s,-4,4):q.p[0]+Math.sin(t*6+q.p[1])*.08,y=rf(q.p[1]+q.v[1]*s,-1.8,1.8),z=rf(q.p[2]+q.v[2]*s,-1.8,1.8);if(x>0)rt++;P.push([x,y,z,x>0?"#f0bc72":"#51d5e8",4])});return{l:L,p:P,c:t<1.5?"دیوار هنوز هست؛ همهٔ ذره‌ها سمت چپ‌اند":`${fa(rt)} از ${fa(ENT.length)} ذره به نیمهٔ راست رفته‌اند؛ سامانه به سمت حالت نامنظم‌تر می‌رود`}};
CY("7-4",[["نیرو","دو جعبه با نیروی برابر هل داده می‌شوند. چون جرم جعبهٔ آبی نصف است، شتابش دو برابر می‌شود: F = m × a.",frc,"#f27d8d"],["انرژی","در آونگ، انرژی بین پتانسیل و جنبشی جابه‌جا می‌شود اما مجموعشان ثابت می‌ماند؛ این همان پایستگی انرژی است.",pen,"#f0bc72"],["تکانه","در برخورد کشسان دو گوی، تکانهٔ هر گوی عوض می‌شود اما مجموع تکانه‌ها (فلش سفید) همان می‌ماند.",mom,"#51d5e8"],["آنتروپی","وقتی دیوار برداشته می‌شود، ذره‌ها در تمام فضا پخش می‌شوند و به حالت اولیه (همه در یک سمت) خودبه‌خود برنمی‌گردند؛ آنتروپی بیشتر می‌شود.",ent,"#a99aff"]],9);

/* 7-5 مبانی هوش مصنوعی */
const NL=[3,5,5,2],NX=[-6,-2,2,6],np=(l,k)=>[NX[l],(k-(NL[l]-1)/2)*1.2,Math.sin(k*2.1+l)*.7];
const nnet=t=>{const L=[],P=[],a=Math.floor(t*1.1)%5,f=(t*1.1)%1;for(let l=0;l<3;l++)for(let i=0;i<NL[l];i++)for(let j=0;j<NL[l+1];j++){const on=a>l;sg(L,np(l,i),np(l+1,j),on?"#5b6fd8":"#222d4a",1);if(a===l+1&&(i+j)%2===0){const p=np(l,i),q=np(l+1,j);P.push([p[0]+(q[0]-p[0])*f,p[1]+(q[1]-p[1])*f,p[2]+(q[2]-p[2])*f,"#fff0b0",3])}}
for(let l=0;l<4;l++)for(let k=0;k<NL[l];k++)P.push([...np(l,k),l<a?"#f0bc72":l===a?"#fff":"#6b5fc0",l<=a?9:7]);return{l:L,p:P,c:a<4?`سیگنال در لایهٔ ${fa(a+1)} از ${fa(4)} است`:"خروجی شبکه آماده شد"}};
const ovf=t=>{const L=[],P=[],r=rg(14),xs=Array.from({length:12},(_,i)=>-5.5+i),ys=xs.map(x=>2*Math.sin(x*.55)+(r()-.5)*2.2),good=x=>2*Math.sin(x*.55),over=x=>{const i=Math.max(0,Math.min(10,Math.floor(x+5.5))),u=(x-xs[i]),w=(1-Math.cos(Math.PI*u))/2;return ys[i]*(1-w)+ys[i+1]*w},m=.5+.5*Math.sin(t*.8);
sg(L,[-6.5,-3.4,0],[6.5,-3.4,0],"#2a3858",1);let o=null;for(let x=-5.5;x<=5.51;x+=.1){const q=[x,good(x)*(1-m)+over(x)*m,0];if(o)sg(L,o,q,m>.5?"#ff6b81":"#59d6a3",2);o=q}o=null;for(let x=-5.5;x<=5.51;x+=.1){const q=[x,good(x),-1.6];if(o)sg(L,o,q,"#26324f",1);o=q}
xs.forEach((x,i)=>P.push([x,ys[i],0,"#51d5e8",6]));for(let i=0;i<10;i++){const x=-5+i+.5;P.push([x,good(x)+(r()-.5)*2,0,"#fff",5])}return{l:L,p:P,c:m>.5?"مدل پیچیده: از همهٔ نقطه‌های آموزشی می‌گذرد اما روی داده‌های تازه (سفید) خطای بزرگ دارد":"مدل ساده: الگوی کلی را می‌گیرد و روی داده‌های تازه هم خوب عمل می‌کند"}};
const GD=(()=>{const f=(x,z)=>.15*x*x+.28*z*z,P=[[4.6,3.8]];for(let i=0;i<40;i++){const p=P[i];P.push([p[0]-.9*.3*p[0],p[1]-.9*.56*p[1]])}return{f,P}})();
const gdn=t=>{const L=surf(18,12,GD.f,z=>hm(z/6)),P=[],k=Math.min(40,Math.floor(t*5));let o=null;for(let i=0;i<=k;i++){const p=GD.P[i],q=[p[0],GD.f(p[0],p[1])+.05,p[1]];if(o)sg(L,o,q,"#f0bc72",2);o=q}P.push([...o,"#fff",10]);return{l:L,p:P,c:`گام ${fa(k)} ، مقدار تابع هزینه ${f1(GD.f(GD.P[k][0],GD.P[k][1]),2)}`}};
CY("7-5",[["یادگیری ماشین","الگوریتم از روی نمونه‌های دو دسته (آبی و طلایی) یاد می‌گیرد و صفحه‌ای می‌سازد که آن‌ها را جدا کند. نقطه‌های قرمز اشتباه‌های فعلی‌اند.",perFn,"#51d5e8"],["شبکهٔ عصبی","سیگنال از لایهٔ ورودی لایه‌به‌لایه جلو می‌رود و هر گره بعد از جمع ورودی‌های وزن‌دارش فعال (طلایی) می‌شود تا به خروجی برسد.",nnet,"#f0bc72"],["بیش"+Z+"برازش","منحنی قرمز از همهٔ نقطه‌های آموزشی می‌گذرد اما الگوی کلی (سبز) را از دست می‌دهد؛ این همان بیش‌برازش است.",ovf,"#59d6a3"],["گرادیان کاهشی","توپ در جهت شیب نزولِ سطح هزینه حرکت می‌کند و با گام‌های کوچک به پایین‌ترین نقطه می‌رسد؛ همین روش شبکه‌های عصبی را آموزش می‌دهد.",gdn,"#a99aff"]],8);

/* 7-6 واژه‌های اخترشناسی */
const au1=t=>{const L=[],P=[[0,0,0,"#ffd76a",20]],S=2.6;[[.39,"#b9b2a7"],[.72,"#e8c07a"],[1,"#5ab0ff"],[1.52,"#e2735a"]].forEach(([a,c],i)=>{ring(L,a*S,"y",i===2?"#4d7bff":"#26324f",i===2?1.8:1);const an=t*(1.6/Math.pow(a,1.5))+i*2,p=[a*S*Math.cos(an),0,a*S*Math.sin(an)];P.push([...p,c,i===2?9:6]);if(i===2)sg(L,[0,0,0],p,"#f0bc72",2)});return{l:L,p:P,c:"فاصلهٔ خورشید تا زمین (خط طلایی) ۱ واحد نجومی است؛ حدود ۱۴۹٫۶ میلیون کیلومتر"}};
const OB=[["ماه",1.28],["زمین",499],["مشتری",2450],["نپتون",15000],["پروکسیما قنطورس",1.34e8]],dur=s=>s<60?`${fa(Math.round(s))} ثانیه`:s<3600?`${fa(Math.round(s/60))} دقیقه`:s<86400?`${f1(s/3600)} ساعت`:s<3.15e7?`${fa(Math.round(s/86400))} روز`:`${f1(s/3.156e7,2)} سال`;
const ly=t=>{const L=[],P=[],X=s=>Math.log10(s)/8.3*15-7.5,ls=Math.min(8.2,t/7.5*8.3),cur=Math.pow(10,ls);sg(L,[-7.5,0,0],[7.5,0,0],"#2a3858",1.4);P.push([-7.5,0,0,"#ffd76a",16]);
OB.forEach(([n,s],i)=>{const on=cur>=s;sg(L,[X(s),0,0],[X(s),1+i*.5,0],on?"#f0bc72":"#26324f",1);P.push([X(s),1+i*.5,0,on?"#f0bc72":"#3a4a6e",on?8:6])});for(let i=0;i<12;i++)P.push([X(Math.max(1,cur/Math.pow(1.5,i))),0,0,"#fff6c8",5-i*.3]);
return{l:L,p:P,c:`نور پس از ${dur(cur)} رسیده‌است (محور لگاریتمی: ماه، زمین، مشتری، نپتون و نزدیک‌ترین ستاره)`}};
const par=t=>{const L=[],P=[[0,0,0,"#ffd76a",14]],S=[7,3,0],E=th=>[2*Math.cos(th),0,2*Math.sin(th)],th=t*.8,e=E(th),pr=q=>{const k=(11-q[0])/(S[0]-q[0]);return[11,q[1]+(S[1]-q[1])*k,q[2]+(S[2]-q[2])*k]};ring(L,2,"y","#2b4f9e",1.2);let o=null;for(let i=0;i<=40;i++){const q=pr(E(i/40*TAU));if(o)sg(L,o,q,"#26324f",1);o=q}
const p=pr(e);sg(L,e,S,"#f0bc72",1);sg(L,S,p,"#3a4a6e",1);P.push([...e,"#5ab0ff",8],[...S,"#fff6c8",10],[...p,"#f0bc72",8]);wb(L,10.9,-1,-2,.05,6,4,"#1a2542",1);return{l:L,p:P,c:"با گردش زمین، ستارهٔ نزدیک روی زمینهٔ دور کمی جابه‌جا دیده می‌شود. پارسک فاصله‌ای است که این جابه‌جایی آن یک ثانیهٔ قوسی باشد (حدود ۳٫۲۶ سال نوری)"}};
const ecc=t=>{const L=[],P=[],a=1.75,C=[[-5.2,-3],[.6,-3],[-5.2,3],[.6,3]];[0,.3,.6,.85].forEach((e,i)=>{const[cx,cz]=C[i];let o=null;for(let k=0;k<=60;k++){const nu=k/60*TAU,r=a*(1-e*e)/(1+e*Math.cos(nu)),q=[cx+r*Math.cos(nu),0,cz+r*Math.sin(nu)];if(o)sg(L,o,q,"#33426a",1.2);o=q}
const M=t*.9,Ea=(()=>{let E=M;for(let k=0;k<8;k++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));return E})(),nu=2*Math.atan2(Math.sqrt(1+e)*Math.sin(Ea/2),Math.sqrt(1-e)*Math.cos(Ea/2)),r=a*(1-e*e)/(1+e*Math.cos(nu));P.push([cx,0,cz,"#ffd76a",12],[cx+r*Math.cos(nu),0,cz+r*Math.sin(nu),"#5ab0ff",8])});return{l:L,p:P,c:"خروج از مرکز e = ۰ ، ۰٫۳ ، ۰٫۶ و ۰٫۸۵ (دایره تا بیضی کشیده). سیاره نزدیک خورشید تندتر حرکت می‌کند"}};
CY("7-6",[["واحد نجومی","هر واحد نجومی فاصلهٔ متوسط زمین تا خورشید است. مدار زمین (آبی) در مقیاس واحد است و مدارهای دیگر نسبت به آن سنجیده می‌شوند.",au1,"#5ab0ff"],["سال نوری","نور در یک سال مسافتی را می‌پیماید که سال نوری نام دارد. پرتو از خورشید می‌رود و به ترتیب به اجرام می‌رسد (مقیاس لگاریتمی).",ly,"#f0bc72"],["پارسک","اختلاف‌منظر ستاره‌ها: هرچه ستاره دورتر باشد جابه‌جایی ظاهری‌اش کمتر است و از همین راه فاصلهٔ ستاره‌ها اندازه‌گیری می‌شود.",par,"#59d6a3"],["خروج از مرکز","خروج از مرکز میزان کشیدگی بیضی مدار است: صفر یعنی دایره و نزدیک ۱ یعنی بیضی بسیار کشیده.",ecc,"#a99aff"]],8);

/* 7-7 فناوری‌های نو */
const blo=t=>{const L=[],P=[],r=3,th=1.1+.5*Math.sin(t*.5),ph=t*1.4,V=(th,ph)=>[r*Math.sin(th)*Math.cos(ph),r*Math.cos(th),r*Math.sin(th)*Math.sin(ph)];ring(L,r,"y","#33426a",1);ring(L,r,"x","#33426a",1);ring(L,r,"z","#33426a",1);sg(L,[0,-3.6,0],[0,3.6,0],"#2a3858",1);
let o=null;for(let i=40;i>=0;i--){const tt=t-i*.06,q=V(1.1+.5*Math.sin(tt*.5),tt*1.4);if(o)sg(L,o,q,"#a99aff",1.4);o=q}const p=V(th,ph);sg(L,[0,0,0],p,"#f0bc72",2.4);P.push([...p,"#fff",10],[0,r,0,"#59d6a3",8],[0,-r,0,"#f27d8d",8]);const p0=Math.cos(th/2)**2;return{l:L,p:P,c:`حالت کیوبیت: احتمال اندازه‌گیری صفر ${fa(Math.round(p0*100))}٪ و یک ${fa(Math.round((1-p0)*100))}٪ (قطب بالا = ۰ ، قطب پایین = ۱)`}};
const arm=t=>{const L=[],P=[],l1=2.8,l2=2.3,pose=tt=>{const ph=tt*.5,a=.7+.5*Math.sin(tt*.9),b=-1.1+.6*Math.sin(tt*.7+1),e=[l1*Math.cos(a),l1*Math.sin(a)],h=[e[0]+l2*Math.cos(a+b),e[1]+l2*Math.sin(a+b)],R=q=>[q[0]*Math.cos(ph),q[1]-2.4,q[0]*Math.sin(ph)];return[R([0,2.4]),R([e[0],e[1]+2.4]),R([h[0],h[1]+2.4])]};
grid(L,5,5,-2.4,"#141e36");ring(L,.8,"y","#4a5a8c",1.4,[0,-2.4,0]);let o=null;for(let i=50;i>=0;i--){const q=pose(t-i*.07)[2];if(o)sg(L,o,q,"#51d5e8",1.2);o=q}const[b0,j1,h]=pose(t);for(const d of[-.06,.06]){sg(L,[b0[0],b0[1]+d,b0[2]],[j1[0],j1[1]+d,j1[2]],"#cbd5ea",1.4);sg(L,[j1[0],j1[1]+d,j1[2]],[h[0],h[1]+d,h[2]],"#cbd5ea",1.4)}P.push([...b0,"#6d7c98",9],[...j1,"#f0bc72",9],[...h,"#fff",8]);return{l:L,p:P,c:"بازوی رباتیک با دو مفصل و یک پایهٔ چرخان؛ زاویهٔ مفصل‌ها موقعیت نوک (کرهٔ سفید) را تعیین می‌کند و مسیر آبی ردّ حرکت آن است"}};
const dna=t=>{const L=[],P=[],N=36,ph=t*.6,col=["#51d5e8","#f0bc72","#59d6a3","#ff9bd0"];let o1=null,o2=null;for(let i=0;i<=N;i++){const y=-3.6+i*.2,a=i*.55+ph,p1=[1.5*Math.cos(a),y,1.5*Math.sin(a)],p2=[1.5*Math.cos(a+Math.PI),y,1.5*Math.sin(a+Math.PI)];if(o1){sg(L,o1,p1,"#a99aff",2);sg(L,o2,p2,"#7fb8ff",2)}o1=p1;o2=p2;if(i%2===0){const m=[p1[0]/2,y,p1[2]/2];sg(L,p1,m,col[(i/2)%4],1.4);sg(L,p2,m,col[((i/2)+2)%4],1.4);P.push([...p1,"#a99aff",5],[...p2,"#7fb8ff",5])}}return{l:L,p:P,c:"دو رشتهٔ مارپیچ با پله‌های جفت‌باز (A با T و G با C). مهندسی ژنتیک روی همین رشته‌ها برش و ویرایش انجام می‌دهد"}};
const lat=t=>{const L=[],P=[],S=1.6,n=4,at=(i,j,k)=>{const ph=i*1.3+j*.9+k*.7,d=.16*Math.sin(t*3+ph);return[(i-1.5)*S+d,(j-1.5)*S+d*.6,(k-1.5)*S-d]};for(let i=0;i<n;i++)for(let j=0;j<n;j++)for(let k=0;k<n;k++){const p=at(i,j,k);P.push([...p,hm(j/4),5]);if(i<n-1)sg(L,p,at(i+1,j,k),"#33426a",1);if(j<n-1)sg(L,p,at(i,j+1,k),"#33426a",1);if(k<n-1)sg(L,p,at(i,j,k+1),"#33426a",1)}return{l:L,p:P,c:"در بلور، اتم‌ها در شبکه‌ای منظم قرار دارند و پیوندها آن‌ها را نگه می‌دارند؛ ارتعاش اتم‌ها گرما را منتقل می‌کند. مواد پیشرفته با تغییر همین چیدمان خواص تازه می‌گیرند"}};
CY("7-7",[["رایانش کوانتومی","کیوبیت برخلاف بیت می‌تواند ترکیبی از ۰ و ۱ باشد. حالت آن یک نقطه روی کرهٔ بلاخ است که با زمان می‌چرخد.",blo,"#a99aff"],["رباتیک","بازوی ربات با زاویهٔ مفصل‌ها و چرخش پایه به نقطه‌های مختلف فضا می‌رسد.",arm,"#51d5e8"],["زیست"+Z+"فناوری","مارپیچ دوگانهٔ DNA؛ پایهٔ مهندسی ژنتیک و تولید دارو و واکسن.",dna,"#59d6a3"],["مواد پیشرفته","ساختار بلوری یک ماده: اتم‌های لرزان در شبکهٔ منظم که خواص مکانیکی و الکتریکی ماده را می‌سازند.",lat,"#f0bc72"]],8);

/* 7-8 کشفیات مهم */
const grav=t=>{const f=(x,z)=>-2.8/(Math.hypot(x,z)+.9)+.3,L=surf(24,12,f,zv=>hm((zv+3)/3.4)),P=[[0,f(0,0)+.3,0,"#ffd76a",16]],a=t*.9,x=3.4*Math.cos(a),z=3.4*Math.sin(a);P.push([x,f(x,z)+.25,z,"#5ab0ff",8]);return{l:L,p:P,c:"جرم، فضازمان را خم می‌کند و سیاره در این خمیدگی می‌چرخد؛ گرانش در نسبیت عام همین است"}};
const BC=(()=>{const r=rg(5);return Array.from({length:256},(_,i)=>{const a=r()*TAU,d=Math.sqrt(r())*(1+Math.sqrt(i))*.27;return[Math.cos(a)*Math.min(d,4.6),(r()-.5)*.4,Math.sin(a)*Math.min(d,4.6)]})})();
const mic=t=>{const L=[],P=[],n=Math.min(256,Math.pow(2,Math.floor(t/1)));ring(L,5.2,"y","#4a5a8c",1.4,[0,-.5,0]);ring(L,5.2,"y","#2a3858",1,[0,.7,0]);for(let i=0;i<n;i++)P.push([BC[i][0],BC[i][1],BC[i][2],i%5?"#59d6a3":"#9ee8c4",5]);return{l:L,p:P,c:`${fa(n)} باکتری پس از ${fa(Math.floor(t))} نوبت تقسیم؛ با هر نوبت تعداد دو برابر می‌شود`}};
const gw=t=>{const L=[],P=[],tt=t%9,r=Math.max(.25,2.6*Math.pow(Math.max(0,1-tt/6),.25));let ph=0;for(let s=0;s<tt;s+=.04){const rr=Math.max(.25,2.6*Math.pow(Math.max(0,1-s/6),.25));ph+=1.5*Math.pow(2.6/rr,1.5)*.04}const A=tt<6?.25+.5*(tt/6)**2:.5*Math.exp(-(tt-6)*1.5),m=tt<6?r:0;
L.push(...surf(26,14,(x,z)=>{const d=Math.hypot(x,z);return A*Math.sin(d*2.4-2*ph)/(1+d*.4)-1.6},zv=>hm((zv+2.4)/1.6)));if(tt<6){P.push([m*Math.cos(ph),-1.2,m*Math.sin(ph),"#fff",10],[-m*Math.cos(ph),-1.2,-m*Math.sin(ph),"#f0bc72",10])}else P.push([0,-1.2,0,"#ff6b81",13]);return{l:L,p:P,c:tt<6?"دو سیاه‌چاله مارپیچ‌وار به هم نزدیک می‌شوند؛ موج‌ها هرچه نزدیک‌تر شوند تندتر و قوی‌تر می‌شوند":"ادغام انجام شد و موج‌های پایانی فروکش می‌کنند"}};
CY("7-8",[["گرانش عمومی","جرم، سطح فضازمان را مثل توپی روی پارچه خم می‌کند و سیاره در این گودی می‌چرخد.",grav,"#ffd76a"],["نظریه"+Z+"ی میکروب","پاستور و کخ نشان دادند میکروب‌ها بیماری می‌سازند و با تقسیم‌های پیاپی بسیار سریع زیاد می‌شوند. ظرف، یک پتری‌دیش است.",mic,"#59d6a3"],["DNA","شناخت ساختار مارپیچ دوگانه در سال ۱۹۵۳ زیست‌شناسی را متحول کرد.",dna,"#51d5e8"],["امواج گرانشی","ادغام دو سیاه‌چاله فضازمان را مثل موج می‌لرزاند؛ موجی که در سال ۲۰۱۵ برای اولین بار آشکار شد.",gw,"#a99aff"]],9);

/* 7-9 واژه‌نامه علمی */
const acc=t=>{const L=[],P=[],a=1.1,T=Math.min(t,6),n=Math.floor(T/.75);sg(L,[-7,-1,0],[7,-1,0],"#26324f",1.4);for(let k=0;k<=n;k++){const x=-6.5+.5*a*Math.pow(k*.75,2)*.6,v=a*k*.75;P.push([x,-1,0,"#51d5e8",5]);sg(L,[x,-1,0],[x,-1.4,0],"#4a5a8c",1);arrow(L,[x,.3+k*.01,0],[x+v*.5,.3,0],"#f0bc72",1.6)}return{l:L,p:P,c:"هر ۰٫۷۵ ثانیه موقعیت جسم ثبت شده است؛ فاصلهٔ بین نقطه‌ها بیشتر می‌شود چون سرعت (فلش طلایی) پیوسته زیاد می‌شود. شتاب یعنی تغییر سرعت در هر ثانیه"}};
const den=t=>{const L=[],P=[];wb(L,-6,-1.5,-1.5,3,3,3,"#33426a",1.2);wb(L,3,-1.5,-1.5,3,3,3,"#33426a",1.2);const r=rg(4);for(let i=0;i<60;i++){const p=[r(),r(),r()],q=[r(),r(),r()];if(i<12)P.push([-6+p[0]*3+Math.sin(t*3+i)*.1,-1.5+p[1]*3+Math.cos(t*2.6+i)*.1,-1.5+p[2]*3,"#51d5e8",6]);P.push([3+q[0]*3+Math.sin(t*3+i*2)*.1,-1.5+q[1]*3+Math.cos(t*2.6+i)*.1,-1.5+q[2]*3,"#f0bc72",6])}return{l:L,p:P,c:"دو جعبهٔ هم‌حجم: جعبهٔ راست ذره‌های بیشتری دارد؛ پس جرم بیشتر و چگالی بیشتری دارد. چگالی = جرم ÷ حجم"}};
const frq=t=>{const L=[],P=[],F=[1,2,4],col=["#51d5e8","#f0bc72","#f27d8d"];F.forEach((f,i)=>{const z=(i-1)*2.6;let o=null;for(let k=0;k<=120;k++){const x=-6.5+k*.108,q=[x,1.2*Math.sin(TAU*f*(k/120)*1-t*TAU*.25*f)+0,z];if(o)sg(L,o,q,col[i],1.6);o=q}sg(L,[-6.5,0,z],[6.5,0,z],"#1a2542",1)});for(let s=0;s<=4;s++)sg(L,[-6.5+s*3.25,-1.8,-4],[-6.5+s*3.25,-1.8,4],"#26324f",1);
return{l:L,p:P,c:"هر ردیف همان بازهٔ یک ثانیه است: ردیف‌های آبی، طلایی و قرمز به ترتیب ۱ و ۲ و ۴ هرتز دارند؛ بسامد یعنی تعداد نوسان در هر ثانیه"}};
CY("7-9",[["شتاب","شتاب یعنی تغییر سرعت در واحد زمان؛ جسم شتاب‌دار در بازه‌های برابر مسافت‌های بیشتر و بیشتری می‌پیماید.",acc,"#f0bc72"],["چگالی","چگالی نشان می‌دهد در هر حجم چقدر ماده فشرده شده است.",den,"#59d6a3"],["بسامد","بسامد تعداد نوسان در هر ثانیه است؛ موج‌هایی با بسامد بیشتر در همان زمان قله‌های بیشتری دارند.",frq,"#51d5e8"],["آنتروپی","اندازهٔ بی‌نظمی یک سامانه؛ ذره‌ها از حالت متمرکز به حالت پخش‌شده می‌روند و برعکسش به‌طور طبیعی رخ نمی‌دهد.",ent,"#a99aff"]],9);
})();

(()=>{
const {E,F,R,Bt,cv,loop,pt,g,L,en}=TIA;
const kep=(M,e)=>{let u=M;for(let i=0;i<9;i++)u-=(u-e*Math.sin(u)-M)/(1-e*Math.cos(u));return u};
E["2-0"]=h=>{h.innerHTML=`<div class="ctl">${F("v","سرعت (m/s)",40)}${F("a","زاویه (°)",45)}${F("y0","ارتفاع (m)",0)}${R("k","مقاومت هوا",0,100,25)}${Bt("go","پرتاب")}</div><div class="result" id="po"></div>`;
const W=1000,H=520,c=cv(h,W,H),x=c.getContext("2d");let A,B,i;
const sim=k=>{const a=g("a").value*Math.PI/180,v=+en(g("v").value)||0;let X=0,Y=+en(g("y0").value)||0,vx=v*Math.cos(a),vy=v*Math.sin(a),P=[[X,Y]],t=0;while((Y>=0||vy>0)&&t<2e4){const s=Math.hypot(vx,vy);vx-=k*s*vx*.01;vy-=(9.81+k*s*vy)*.01;X+=vx*.01;Y+=vy*.01;P.push([X,Y]);t++}return P};
const go=()=>{A=sim(0);B=sim(g("k").value/1e4);i=0;const m=P=>[P.at(-1)[0],Math.max(...P.map(q=>q[1])),P.length*.01];const a=m(A),b=m(B);g("po").innerHTML=`خلأ: برد ${L(+a[0].toFixed(1))} m · اوج ${a[1].toFixed(1)} m · پرواز ${a[2].toFixed(2)} s<br>با هوا: برد ${L(+b[0].toFixed(1))} m · اوج ${b[1].toFixed(1)} m · پرواز ${b[2].toFixed(2)} s`};
g("go").onclick=go;g("k").oninput=go;go();
loop(c,()=>{i+=2;x.fillStyle="#091321";x.fillRect(0,0,W,H);const mx=Math.max(1,...A.map(q=>q[0]),...B.map(q=>q[0])),my=Math.max(1,...A.map(q=>q[1])),s=Math.min((W-80)/mx,(H-60)/my),T=q=>[40+q[0]*s,H-30-q[1]*s];x.strokeStyle="#7184a4";x.beginPath();x.moveTo(0,H-30);x.lineTo(W,H-30);x.stroke();
[[A,"#6d7c98"],[B,"#a99aff"]].forEach(([P,co])=>{x.strokeStyle=co;x.lineWidth=2;x.setLineDash(co==="#6d7c98"?[6,6]:[]);x.beginPath();P.slice(0,i).forEach((q,j)=>{const t=T(q);j?x.lineTo(t[0],t[1]):x.moveTo(t[0],t[1])});x.stroke();const q=P[Math.min(i,P.length-1)],t=T(q);x.fillStyle=co;x.beginPath();x.arc(t[0],t[1],7,0,7);x.fill()});x.setLineDash([]);if(i>Math.max(A.length,B.length)+60)i=0})};
E["2-2"]=h=>{h.innerHTML=`<div class="ctl">${F("ra","نیم‌محور بزرگ (km)",8000)}${R("re","خروج از مرکز (٪)",0,90,30)}${R("rt","سرعت زمان",1,100,50)}</div><div class="result" id="ro"></div>`;
const W=1000,H=560,c=cv(h,W,H),x=c.getContext("2d"),MU=398600.4418,Re=6371;let M=0;
loop(c,dt=>{const a=Math.max(100,+en(g("ra").value)||8000),e=g("re").value/100,T=2*Math.PI*Math.sqrt(a**3/MU);M+=dt*10**(g("rt").value/20)*2*Math.PI/T;const s=Math.min(H/2-25,W/2-25)/(a*(1+e)),cx=W/2-a*e*s*0+0,cy=H/2;
const rp=a*(1-e);g("ro").innerHTML=`دوره: ${(T/60).toFixed(1)} دقیقه · تندی در حضیض: ${Math.sqrt(MU*(1+e)/rp).toFixed(2)} km/s · در اوج: ${Math.sqrt(MU*(1-e)/(a*(1+e))).toFixed(2)} km/s · ارتفاع حضیض: ${(rp-Re).toFixed(0)} km${rp<Re?" — <b>برخورد با زمین!</b>":""}`;
x.fillStyle="#050a14";x.fillRect(0,0,W,H);const ox=cx-a*e*s;x.strokeStyle="#a99aff55";x.beginPath();x.ellipse(ox,cy,a*s,a*Math.sqrt(1-e*e)*s,0,0,7);x.stroke();
x.fillStyle="#3f7fd9";x.shadowColor="#5ab0ff";x.shadowBlur=24;x.beginPath();x.arc(cx,cy,Math.max(3,Re*s),0,7);x.fill();x.shadowBlur=0;
const u=kep(M%(2*Math.PI),e),px=ox+a*Math.cos(u)*s,py=cy+a*Math.sqrt(1-e*e)*Math.sin(u)*s;x.strokeStyle="#f0bc7244";x.beginPath();x.moveTo(cx,cy);x.lineTo(px,py);x.stroke();x.fillStyle="#f0bc72";x.beginPath();x.arc(px,py,6,0,7);x.fill()})};
E["2-5"]=h=>{h.innerHTML=`<div class="ctl">${R("w1","بسامد چشمه ۱",2,20,8)}${R("w2","بسامد چشمه ۲",2,20,8)}${R("wd","فاصله چشمه‌ها",20,300,120)}</div><div class="result">دو چشمه موج: جاهای روشن تقویت و جاهای تیره خنثی‌سازی است؛ الگوی تداخل را ببین.</div>`;
const c=cv(h,1000,560),x=c.getContext("2d"),o=document.createElement("canvas");o.width=250;o.height=140;const ox=o.getContext("2d"),im=ox.createImageData(250,140);let t=0;x.imageSmoothingEnabled=true;
loop(c,dt=>{t+=dt;const d=g("wd").value/4,k1=g("w1").value*.012,k2=g("w2").value*.012,a=125-d/2,b=125+d/2;
for(let y=0;y<140;y++)for(let X=0;X<250;X++){const r1=Math.hypot(X-a,y-70),r2=Math.hypot(X-b,y-70),v=(Math.sin(k1*(r1-30*t))/Math.sqrt(r1+6)+Math.sin(k2*(r2-30*t))/Math.sqrt(r2+6))*1.4,i=(y*250+X)*4;im.data[i]=60+v*110;im.data[i+1]=70+v*70;im.data[i+2]=160+v*95;im.data[i+3]=255}
ox.putImageData(im,0,0);x.drawImage(o,0,0,1000,560);x.fillStyle="#f0bc72";[a,b].forEach(q=>{x.beginPath();x.arc(q*4,280,7,0,7);x.fill()})})};
E["1-8"]=h=>{h.innerHTML=`<div class="ctl">${R("kk","تعداد خوشه",2,6,3)}${Bt("kn","داده تازه")}${Bt("ks","یک گام","ghost")}</div><div class="result" id="ko">روی صفحه کلیک کن تا نقطه تازه اضافه شود.</div>`;
const W=1000,H=560,c=cv(h,W,H),x=c.getContext("2d"),col=["#a99aff","#59d6a3","#f0bc72","#f27d8d","#51d5e8","#c49aff"];let P,C,A=[],it=0,tm=0;
const init=()=>{const k=+g("kk").value;C=Array.from({length:k},()=>P[Math.random()*P.length|0].slice());A=[];it=0};
const gen=()=>{const cs=[[250,170],[700,190],[480,420],[820,440]];P=Array.from({length:240},(_,i)=>{const q=cs[i%4],r=()=>(Math.random()+Math.random()+Math.random()-1.5)*150;return[q[0]+r(),q[1]+r()]});init()};
const st=()=>{A=P.map(p=>{let b=0,m=1e18;C.forEach((q,i)=>{const d=(p[0]-q[0])**2+(p[1]-q[1])**2;if(d<m){m=d;b=i}});return b});C=C.map((q,i)=>{const m=P.filter((_,j)=>A[j]===i);return m.length?[m.reduce((s,p)=>s+p[0],0)/m.length,m.reduce((s,p)=>s+p[1],0)/m.length]:q});it++};
g("kn").onclick=gen;g("ks").onclick=st;g("kk").onchange=init;c.onpointerdown=e=>{P.push(pt(c,e))};gen();
loop(c,dt=>{tm+=dt;if(tm>.5){tm=0;st()}x.fillStyle="#091321";x.fillRect(0,0,W,H);P.forEach((p,i)=>{x.fillStyle=A[i]===undefined?"#6d7c98":col[A[i]];x.beginPath();x.arc(p[0],p[1],4,0,7);x.fill()});let J=0;C.forEach((q,i)=>{x.strokeStyle="#fff";x.lineWidth=3;x.fillStyle=col[i];x.beginPath();x.arc(q[0],q[1],11,0,7);x.fill();x.stroke()});P.forEach((p,i)=>{const q=C[A[i]];if(q)J+=(p[0]-q[0])**2+(p[1]-q[1])**2});g("ko").innerHTML=`تکرار ${it} · مجموع مربعات درون‌خوشه‌ای: ${L(Math.round(J))}<br><small>روی صفحه کلیک کن تا نقطه تازه اضافه شود.</small>`})};
E["1-4"]=h=>{h.innerHTML=`<div class="ctl">${R("qs","سرعت یادگیری",1,100,50)}${R("qe","اکتشاف ε (٪)",0,100,20)}${Bt("qr","شروع دوباره")}</div><div class="result" id="qo"></div>`;
const C=8,N=6,W=1000,H=560,c=cv(h,W,H),x=c.getContext("2d"),cs=Math.min(W/C,H/N),pits=[[3,1],[3,2],[5,3],[2,4],[6,1]],gl=[7,5],dx=[0,1,0,-1],dy=[-1,0,1,0],ix=(a,b)=>b*C+a;let Q,ag,ep,st;
const reset=()=>{Q=Array.from({length:C*N},()=>[0,0,0,0]);ag=[0,0];ep=0;st=0};
const sq=()=>{const s=ix(...ag),e=g("qe").value/100,mx=Math.max(...Q[s]),a=Math.random()<e?Math.random()*4|0:Q[s].indexOf(mx),nx=Math.min(C-1,Math.max(0,ag[0]+dx[a])),ny=Math.min(N-1,Math.max(0,ag[1]+dy[a]));let r=-.1,d=0;if(nx===gl[0]&&ny===gl[1]){r=10;d=1}else if(pits.some(p=>p[0]===nx&&p[1]===ny)){r=-10;d=1}
Q[s][a]+=.5*(r+(d?0:.9*Math.max(...Q[ix(nx,ny)]))-Q[s][a]);st++;if(d||st>150){ep++;st=0;ag=[0,0]}else ag=[nx,ny]};
g("qr").onclick=reset;reset();let ac=0;
loop(c,dt=>{ac+=dt*10**(g("qs").value/30);while(ac>=1){ac--;sq()}x.fillStyle="#091321";x.fillRect(0,0,W,H);const ox=(W-cs*C)/2,oy=(H-cs*N)/2;
for(let j=0;j<N;j++)for(let i=0;i<C;i++){const q=Q[ix(i,j)],m=Math.max(...q),pit=pits.some(p=>p[0]===i&&p[1]===j),go=i===gl[0]&&j===gl[1];x.fillStyle=pit?"#7a2f40":go?"#2f8a63":`rgba(100,120,255,${Math.max(.08,Math.min(.8,m/8))})`;x.fillRect(ox+i*cs+2,oy+j*cs+2,cs-4,cs-4);
if(!pit&&!go&&m!==0){const a=q.indexOf(m),cx=ox+i*cs+cs/2,cy=oy+j*cs+cs/2;x.fillStyle="#fff";x.beginPath();x.moveTo(cx+dx[a]*cs*.3,cy+dy[a]*cs*.3);x.lineTo(cx-dy[a]*cs*.14-dx[a]*cs*.1,cy+dx[a]*cs*.14-dy[a]*cs*.1);x.lineTo(cx+dy[a]*cs*.14-dx[a]*cs*.1,cy-dx[a]*cs*.14-dy[a]*cs*.1);x.fill()}}
x.fillStyle="#f0bc72";x.shadowColor="#f0bc72";x.shadowBlur=16;x.beginPath();x.arc(ox+ag[0]*cs+cs/2,oy+ag[1]*cs+cs/2,cs*.18,0,7);x.fill();x.shadowBlur=0;g("qo").innerHTML=`دوره‌های یادگیری: ${L(ep)} · فلش‌ها بهترین عمل کنونی‌اند؛ سبز مقصد و قرمز چاله است.`})};
E["5-5"]=h=>{h.innerHTML=`<div class="ctl">${R("rl","نرخ یادگیری",1,100,30)}${Bt("rn","داده تازه")}${Bt("rb","شروع دوباره","ghost")}</div><div class="result" id="ro"></div>`;
const W=1000,H=560,c=cv(h,W,H),x=c.getContext("2d");let P,w,b,n;const T=p=>[50+p[0]*90,H-40-p[1]*14];
const rs=()=>{w=0;b=0;n=0};const gen=()=>{P=Array.from({length:40},()=>{const X=Math.random()*10;return[X,2.2*X+3+(Math.random()-.5)*8]});rs()};
g("rn").onclick=gen;g("rb").onclick=rs;c.onpointerdown=e=>{const q=pt(c,e);P.push([(q[0]-50)/90,(H-40-q[1])/14])};gen();
loop(c,()=>{const lr=g("rl").value*3e-4,N=P.length;for(let i=0;i<5;i++){let gw=0,gb=0;P.forEach(p=>{const e=w*p[0]+b-p[1];gw+=2*e*p[0]/N;gb+=2*e/N});w-=lr*gw;b-=lr*gb;n++}
const mx=P.reduce((s,p)=>s+p[0],0)/N,my=P.reduce((s,p)=>s+p[1],0)/N,sw=P.reduce((s,p)=>s+(p[0]-mx)*(p[1]-my),0)/P.reduce((s,p)=>s+(p[0]-mx)**2,0),sb=my-sw*mx,loss=P.reduce((s,p)=>s+(w*p[0]+b-p[1])**2,0)/N;
x.fillStyle="#091321";x.fillRect(0,0,W,H);P.forEach(p=>{const t=T(p);x.fillStyle="#a99aff";x.beginPath();x.arc(t[0],t[1],5,0,7);x.fill()});
[[sw,sb,"#59d6a366",2],[w,b,"#f0bc72",3.5]].forEach(([m,q,co,lw])=>{x.strokeStyle=co;x.lineWidth=lw;x.beginPath();const a=T([0,q]),z=T([10,m*10+q]);x.moveTo(a[0],a[1]);x.lineTo(z[0],z[1]);x.stroke()});
g("ro").innerHTML=Number.isFinite(loss)?`گام ${L(n)} · w=${w.toFixed(3)} · b=${b.toFixed(3)} · خطای MSE=${loss.toFixed(3)}<br>خط سبز: جواب دقیق (w=${sw.toFixed(3)}, b=${sb.toFixed(3)}) · روی صفحه کلیک کن تا نقطه تازه بیفزایی`:"نرخ یادگیری زیاد است و روش واگرا شد؛ مقدار را کم کن."})};
const om=window.openModule;window.openModule=function(l,m){om(l,m);if(!E[l+"-"+m]&&document.getElementById("run")){const t=document.querySelector(".tool");let T;t.addEventListener("input",()=>{clearTimeout(T);T=setTimeout(()=>{const r=document.getElementById("run");r&&r.click()},400)});document.getElementById("run").click()}};
})();

(()=>{
const RM=matchMedia("(prefers-reduced-motion:reduce)").matches;
const bg=document.createElement("canvas");bg.id="stars";document.body.prepend(bg);const bx=bg.getContext("2d");let S=[],mx=0,my=0,sh=null;
const rs=()=>{bg.width=innerWidth;bg.height=innerHeight;S=Array.from({length:Math.min(220,innerWidth/6|0)},()=>({x:Math.random()*bg.width,y:Math.random()*bg.height,z:Math.random()*1.6+.3,p:Math.random()*6}))};rs();addEventListener("resize",rs);
addEventListener("pointermove",e=>{mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
const md=(v,w)=>((v%w)+w)%w;
const fx=t=>{bx.clearRect(0,0,bg.width,bg.height);for(const s of S){bx.fillStyle=`rgba(190,200,255,${.2+.5*(.5+.5*Math.sin(t/700+s.p))*s.z/1.9})`;bx.fillRect(md(s.x+mx*s.z*30+t*.004*s.z,bg.width),md(s.y+my*s.z*30,bg.height),s.z,s.z)}
if(!sh&&Math.random()<.003)sh={x:Math.random()*bg.width,y:Math.random()*bg.height*.4,l:0};
if(sh){sh.l+=.025;const a=sh.x-sh.l*520,b=sh.y+sh.l*260,g=bx.createLinearGradient(sh.x-sh.l*520,sh.y+sh.l*260,a+90,b-45);g.addColorStop(0,"#fff");g.addColorStop(1,"transparent");bx.strokeStyle=g;bx.lineWidth=1.5;bx.beginPath();bx.moveTo(a,b);bx.lineTo(a+90,b-45);bx.stroke();if(sh.l>1)sh=null}
requestAnimationFrame(fx)};if(!RM)requestAnimationFrame(fx);
const hero=document.querySelector(".hero");if(hero&&!RM){const c=document.createElement("canvas");c.className="heroFx";hero.prepend(c);const x=c.getContext("2d");let w,h,pm=null;const N=48,P=[];
const rz=()=>{w=c.width=hero.clientWidth;h=c.height=hero.clientHeight};rz();addEventListener("resize",rz);for(let i=0;i<N;i++)P.push({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5});
hero.onpointermove=e=>{const r=hero.getBoundingClientRect();pm=[e.clientX-r.left,e.clientY-r.top]};hero.onpointerleave=()=>pm=null;
const f=()=>{x.clearRect(0,0,w,h);P.forEach(p=>{p.x=md(p.x+p.vx,w);p.y=md(p.y+p.vy,h);if(pm){const dx=pm[0]-p.x,dy=pm[1]-p.y,d=Math.hypot(dx,dy);if(d<160){p.x+=dx*.012;p.y+=dy*.012}}});
for(let i=0;i<N;i++){for(let j=i+1;j<N;j++){const d=Math.hypot(P[i].x-P[j].x,P[i].y-P[j].y);if(d<110){x.strokeStyle=`rgba(150,140,255,${.28*(1-d/110)})`;x.beginPath();x.moveTo(P[i].x,P[i].y);x.lineTo(P[j].x,P[j].y);x.stroke()}}x.fillStyle="#b6abff";x.fillRect(P[i].x-1,P[i].y-1,2.4,2.4)}requestAnimationFrame(f)};f()}
[...document.querySelectorAll(".metric strong")].slice(0,2).forEach((e,i)=>{const T=[9,94][i],s=performance.now(),u=n=>{const p=Math.min(1,(n-s)/1500);e.textContent=digits(Math.round(T*(1-Math.pow(1-p,3)))).padStart(2,"۰");if(p<1)requestAnimationFrame(u)};requestAnimationFrame(u)});
document.addEventListener("pointermove",e=>{const l=e.target.closest&&e.target.closest(".lab");if(!l)return;const r=l.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;l.style.setProperty("--gx",px*100+"%");l.style.setProperty("--gy",py*100+"%");l.style.transform=`perspective(700px) rotateX(${(.5-py)*8}deg) rotateY(${(px-.5)*8}deg) translateY(-4px)`});
document.addEventListener("pointerout",e=>{const l=e.target.closest&&e.target.closest(".lab");if(l)l.style.transform=""});
})();
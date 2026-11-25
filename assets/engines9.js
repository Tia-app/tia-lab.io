(()=>{
const {E,F,Bt,cv,loop,pt,g}=TIA;
E["2-3"]=h=>{
const C=9,N=5,sx=100,sy=95,ox=100,oy=90,W=1000,H=520,n=C*N,nd=(r,c)=>r*C+c,xy=k=>[ox+k%C*sx,oy+Math.floor(k/C)*sy],ek=(a,b)=>a<b?a+"-"+b:b+"-"+a;
const tools=[["w","سیم"],["b","باتری"],["r","مقاومت"],["l","لامپ"],["s","کلید"],["a","آمپرسنج"],["v","ولت‌سنج"],["e","پاک‌کن"]],DV={b:6,r:10,l:10},PN=["مدار ساده","دو لامپ پشت‌سر هم","دو لامپ موازی","آزمایش قانون اهم"];
h.innerHTML=`<div class="ctl">${tools.map(([k,l],i)=>Bt("t_"+k,l,i?"ghost":"primary")).join("")}${F("val","مقدار انتخاب‌شده (V یا Ω)",6)}</div><div class="ctl">${PN.map((p,i)=>Bt("p"+i,p,"ghost")).join("")}${Bt("pc","پاک‌کردن همه","ghost")}</div><div class="result" id="co"></div>`;
const c=cv(h,W,H),x=c.getContext("2d");let ed={},vm=[],tool="w",sel=null,pend=null,cur={},V=new Float64Array(n),ph={},info="";
const put=(a,b,t)=>{const k=ek(a,b);ed[k]={t,a:Math.min(a,b),b:Math.max(a,b),v:DV[t]||0,fa:true,on:true};return k};
const gOf=e=>e.t==="w"||e.t==="a"?1e3:e.t==="s"?(e.on?1e3:1e-9):1/Math.max(1e-3,e.v);
const solve=()=>{const G=Array.from({length:n},()=>new Float64Array(n+1));let gnd=-1;const st=(a,b,q)=>{G[a][a]+=q;G[b][b]+=q;G[a][b]-=q;G[b][a]-=q};
for(const k in ed){const e=ed[k];if(e.t==="b"){const p=e.fa?e.a:e.b,m=e.fa?e.b:e.a;st(e.a,e.b,20);G[p][n]+=e.v*20;G[m][n]-=e.v*20;if(gnd<0)gnd=m}else st(e.a,e.b,gOf(e))}
vm.forEach(m=>st(m.a,m.b,1e-7));for(let i=0;i<n;i++)G[i][i]+=1e-9;V=new Float64Array(n);cur={};
if(gnd>=0){G[gnd].fill(0);G[gnd][gnd]=1;for(let i=0;i<n;i++){let p=i;for(let r=i+1;r<n;r++)if(Math.abs(G[r][i])>Math.abs(G[p][i]))p=r;[G[i],G[p]]=[G[p],G[i]];for(let r=0;r<n;r++)if(r!==i){const f=G[r][i]/G[i][i];if(f)for(let j=i;j<=n;j++)G[r][j]-=f*G[i][j]}}for(let i=0;i<n;i++)V[i]=G[i][n]/G[i][i]}
let ib=0,pw=0,bats=0;for(const k in ed){const e=ed[k];if(e.t==="b"){const p=e.fa?e.a:e.b,m=e.fa?e.b:e.a,I=(e.v-(V[p]-V[m]))*20;cur[k]=e.fa?-I:I;ib+=I;pw+=I*e.v;bats++}else cur[k]=(V[e.a]-V[e.b])*gOf(e)}
const rows=[];for(const k in ed){const e=ed[k],I=Math.abs(cur[k]),U=Math.abs(V[e.a]-V[e.b]);if(e.t==="r"||e.t==="l")rows.push(`${e.t==="r"?"مقاومت":"لامپ"} ${e.v} Ω: ولتاژ ${U.toFixed(2)} V ÷ جریان ${I.toFixed(3)} A = ${I>1e-6?(U/I).toFixed(2):"—"} Ω`);if(e.t==="a")rows.push(`آمپرسنج: ${I.toFixed(3)} A`)}
vm.forEach(m=>rows.push(`ولت‌سنج: ${Math.abs(V[m.a]-V[m.b]).toFixed(2)} V`));
info=!bats?"یک باتری بگذار و مدار را ببند. روی خط‌های کم‌رنگ بین نقطه‌ها کلیک کن تا قطعه بگذاری.":(ib/bats>8?"<b>اتصال کوتاه!</b> مسیر بدون مقاومت بین دو سر باتری هست و جریان خیلی زیاد می‌شود؛ در مدار واقعی سیم داغ می‌شود.<br>":"")+`جریان باتری: ${(ib/bats).toFixed(3)} A · توان مصرفی: ${pw.toFixed(2)} W<br>`+rows.join("<br>")+"<br><small>آمپرسنج را در مسیر مدار (پشت‌سر هم) و ولت‌سنج را دو سر قطعه (موازی) ببند.</small>";g("co").innerHTML=info};
const loopE=(r0,c0,r1,c1)=>{const o=[];for(let q=c0;q<c1;q++){o.push([nd(r0,q),nd(r0,q+1)]);o.push([nd(r1,q),nd(r1,q+1)])}for(let q=r0;q<r1;q++){o.push([nd(q,c0),nd(q+1,c0)]);o.push([nd(q,c1),nd(q+1,c1)])}return o};
const preset=i=>{ed={};vm=[];sel=null;const w=l=>l.forEach(([a,b])=>put(a,b,"w")),S=(a,b,t,f)=>{const k=put(a,b,t);if(f)Object.assign(ed[k],f)};
if(i<2||i===3){w(loopE(1,1,3,5));S(nd(2,1),nd(3,1),"b",{fa:true,v:i===3?9:6});S(nd(1,1),nd(1,2),"s");if(i===0){S(nd(1,3),nd(1,4),"l");S(nd(1,4),nd(1,5),"a");vm=[{a:nd(1,3),b:nd(1,4)}]}if(i===1){S(nd(1,2),nd(1,3),"l");S(nd(1,3),nd(1,4),"l");S(nd(1,4),nd(1,5),"a")}if(i===3){S(nd(1,3),nd(1,4),"r",{v:30});S(nd(1,4),nd(1,5),"a");vm=[{a:nd(1,3),b:nd(1,4)}]}}
if(i===2){w([[nd(1,1),nd(1,2)],[nd(1,2),nd(1,3)],[nd(1,3),nd(1,4)],[nd(1,4),nd(1,5)],[nd(3,1),nd(3,2)],[nd(3,2),nd(3,3)],[nd(3,3),nd(3,4)],[nd(3,4),nd(3,5)],[nd(1,1),nd(2,1)],[nd(2,3),nd(3,3)]]);S(nd(2,1),nd(3,1),"b",{fa:true});S(nd(1,3),nd(2,3),"l");S(nd(1,5),nd(2,5),"l");S(nd(2,5),nd(3,5),"a")}
solve()};
tools.forEach(([k])=>g("t_"+k).onclick=()=>{tool=k;pend=null;tools.forEach(([z])=>g("t_"+z).className="btn "+(z===k?"primary":"ghost"))});
PN.forEach((_,i)=>g("p"+i).onclick=()=>preset(i));g("pc").onclick=()=>{ed={};vm=[];sel=null;solve()};
g("val").oninput=()=>{const e=sel&&ed[sel];if(e&&DV[e.t]){e.v=Math.max(.1,Number(g("val").value)||0);solve()}};
const segD=(p,a,b)=>{const dx=b[0]-a[0],dy=b[1]-a[1],t=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy)));return Math.hypot(p[0]-a[0]-t*dx,p[1]-a[1]-t*dy)};
const nearEdge=p=>{let best=null,bd=18;for(let r=0;r<N;r++)for(let q=0;q<C;q++){if(q<C-1){const d=segD(p,xy(nd(r,q)),xy(nd(r,q+1)));if(d<bd){bd=d;best=[nd(r,q),nd(r,q+1)]}}if(r<N-1){const d=segD(p,xy(nd(r,q)),xy(nd(r+1,q)));if(d<bd){bd=d;best=[nd(r,q),nd(r+1,q)]}}}return best};
const nearNode=p=>{let best=-1,bd=20;for(let k=0;k<n;k++){const d=Math.hypot(p[0]-xy(k)[0],p[1]-xy(k)[1]);if(d<bd){bd=d;best=k}}return best};
const vmid=m=>{const a=xy(m.a),b=xy(m.b),mx=(a[0]+b[0])/2,my=(a[1]+b[1])/2,dx=b[0]-a[0],dy=b[1]-a[1],L=Math.hypot(dx,dy)||1,o=[-dy/L*60,dx/L*60];return[mx+o[0],my+o[1],mx+o[0]/2,my+o[1]/2]};
c.onpointerdown=e=>{const p=pt(c,e);
if(tool==="v"){const k=nearNode(p);if(k<0)return;if(pend===null)pend=k;else{if(pend!==k&&!vm.some(m=>m.a===pend&&m.b===k))vm.push({a:pend,b:k});pend=null;solve()}return}
if(tool==="e"){const i=vm.findIndex(m=>{const q=vmid(m);return Math.hypot(p[0]-q[0],p[1]-q[1])<22});if(i>=0){vm.splice(i,1);solve();return}const q=nearEdge(p);if(q){delete ed[ek(...q)];sel=null;solve()}return}
const q=nearEdge(p);if(!q)return;const k=ek(...q),ex=ed[k];
if(ex&&ex.t===tool){if(tool==="b")ex.fa=!ex.fa;else if(tool==="s")ex.on=!ex.on}else put(q[0],q[1],tool);
sel=k;const s=ed[k];if(DV[s.t])g("val").value=s.v;solve()};
loop(c,dt=>{x.fillStyle="#091321";x.fillRect(0,0,W,H);x.strokeStyle="#1a2540";x.lineWidth=1;x.setLineDash([3,6]);for(let r=0;r<N;r++)for(let q=0;q<C;q++){if(q<C-1){const a=xy(nd(r,q)),b=xy(nd(r,q+1));x.beginPath();x.moveTo(...a);x.lineTo(...b);x.stroke()}if(r<N-1){const a=xy(nd(r,q)),b=xy(nd(r+1,q));x.beginPath();x.moveTo(...a);x.lineTo(...b);x.stroke()}}x.setLineDash([]);
x.fillStyle="#2c3a5e";for(let k=0;k<n;k++){const p=xy(k);x.beginPath();x.arc(p[0],p[1],pend===k?7:3,0,7);if(pend===k)x.fillStyle="#f0bc72";x.fill();x.fillStyle="#2c3a5e"}
for(const k in ed){const e=ed[k],a=xy(e.a),b=xy(e.b),I=cur[k]||0,A=Math.abs(I),L=Math.hypot(b[0]-a[0],b[1]-a[1]),ang=Math.atan2(b[1]-a[1],b[0]-a[0]),al=Math.min(1,.25+A*.6);
x.strokeStyle=k===sel?"#ffffff":`rgba(240,188,114,${A>1e-4?al:.35})`;x.lineWidth=k===sel?5:4;x.beginPath();x.moveTo(...a);x.lineTo(...b);x.stroke();
if(A>1e-4){ph[k]=((ph[k]||0)+Math.min(150,10+A*110)*dt)%26;x.fillStyle="#51d5e8";for(let s=ph[k];s<L;s+=26){const t=I>=0?s:L-s;x.beginPath();x.arc(a[0]+(b[0]-a[0])*t/L,a[1]+(b[1]-a[1])*t/L,3,0,7);x.fill()}}
if(e.t==="w")continue;const m=[(a[0]+b[0])/2,(a[1]+b[1])/2];x.save();x.translate(...m);x.rotate(ang);x.fillStyle="#091321";x.fillRect(-34,-26,68,52);x.lineWidth=2.4;
if(e.t==="r"){x.strokeStyle="#a99aff";x.strokeRect(-26,-10,52,20)}
else if(e.t==="l"){const P=A*A*e.v,gl=Math.min(1,P/2);if(gl>.02){const gr=x.createRadialGradient(0,0,2,0,0,46);gr.addColorStop(0,`rgba(255,226,120,${gl})`);gr.addColorStop(1,"rgba(255,226,120,0)");x.fillStyle=gr;x.fillRect(-50,-50,100,100)}x.strokeStyle=gl>.05?"#ffe278":"#a99aff";x.beginPath();x.arc(0,0,17,0,7);x.moveTo(-12,-12);x.lineTo(12,12);x.moveTo(12,-12);x.lineTo(-12,12);x.stroke()}
else if(e.t==="b"){const s=e.fa?-1:1;x.strokeStyle="#59d6a3";x.beginPath();x.moveTo(s*7,-18);x.lineTo(s*7,18);x.stroke();x.strokeStyle="#9aa8c0";x.beginPath();x.moveTo(-s*7,-10);x.lineTo(-s*7,10);x.stroke();x.fillStyle="#59d6a3";x.font="bold 13px Arial";x.textAlign="center";x.fillText("+",s*18,-8)}
else if(e.t==="s"){x.strokeStyle="#f0bc72";x.beginPath();x.moveTo(-22,0);x.lineTo(e.on?22:14,e.on?0:-18);x.stroke();x.fillStyle="#f0bc72";x.fillRect(-24,-3,5,6);x.fillRect(19,-3,5,6)}
else if(e.t==="a"){x.strokeStyle="#51d5e8";x.beginPath();x.arc(0,0,18,0,7);x.stroke();x.fillStyle="#51d5e8";x.font="bold 16px Arial";x.textAlign="center";x.fillText("A",0,6)}
x.restore();x.font="12px Vazirmatn,Arial";x.textAlign="center";x.fillStyle="#9aa8c0";const tx=e.t==="b"?e.v+" V":e.t==="r"||e.t==="l"?e.v+" Ω":e.t==="a"?A.toFixed(2)+" A":"";if(tx)x.fillText(tx,m[0],m[1])}
vm.forEach(mv=>{const a=xy(mv.a),b=xy(mv.b),q=vmid(mv);x.strokeStyle="#ff9ad5";x.lineWidth=2;x.beginPath();x.moveTo(...a);x.quadraticCurveTo(q[2]*2-(a[0]+b[0])/2,q[3]*2-(a[1]+b[1])/2,...b);x.stroke();x.fillStyle="#091321";x.beginPath();x.arc(q[0],q[1],17,0,7);x.fill();x.stroke();x.fillStyle="#ff9ad5";x.font="bold 15px Arial";x.textAlign="center";x.fillText("V",q[0],q[1]+5);x.font="12px Vazirmatn,Arial";x.fillText(Math.abs(V[mv.a]-V[mv.b]).toFixed(2)+" V",q[0],q[1]+34)});
x.fillStyle="#6d7c98";x.font="12px Vazirmatn,Arial";x.textAlign="right";x.fillText(tool==="v"?"ولت‌سنج: دو نقطه‌ی مدار را به‌ترتیب انتخاب کن":"ابزار را انتخاب کن و روی خط بین دو نقطه کلیک کن",W-14,H-12)});
preset(0)};
})();

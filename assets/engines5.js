(()=>{
const {E,F,R,Bt,cv,loop,pt,g}=TIA;
const PF=(k,terr)=>{E[k]=h=>{
h.innerHTML=`<div class="ctl">${[["bfs","BFS"],["dij","دایکسترا"],["ast","A*"],["gre","حریصانه"]].map(([a,l])=>Bt("a_"+a,l,a==="ast"?"primary":"ghost")).join("")}${Bt("rw","دیوار تصادفی","ghost")}${terr?Bt("rt","زمین تصادفی","ghost"):""}${Bt("rc","پاک","ghost")}${R("sp","سرعت",1,100,70)}</div><div class="result" id="po"></div>`;
const C=30,N=16,cs=33,W=C*cs,H=N*cs,c=cv(h,W,H),x=c.getContext("2d"),S=2+8*C,G=27+8*C;
let wall=new Uint8Array(C*N),wt=new Uint8Array(C*N).fill(1),run=null,drag=-1,alg="ast";
const nb=i=>{const a=i%C,b=i/C|0,o=[];if(a>0)o.push(i-1);if(a<C-1)o.push(i+1);if(b>0)o.push(i-C);if(b<N-1)o.push(i+C);return o.filter(j=>!wall[j])};
const hh=i=>Math.abs(i%C-G%C)+Math.abs((i/C|0)-(G/C|0));
const solve=m=>{const gs=new Float64Array(C*N).fill(1e9),pr=new Int32Array(C*N).fill(-1),cl=[],op=[[S,0]],seen=new Uint8Array(C*N);let n=0;gs[S]=0;
while(op.length){let b=0;for(let i=1;i<op.length;i++)if(op[i][1]<op[b][1])b=i;const u=op.splice(b,1)[0][0];if(seen[u])continue;seen[u]=1;cl.push(u);if(u===G)break;
for(const v of nb(u)){const ng=gs[u]+(m==="bfs"?1:wt[v]);if(m==="gre"?(!seen[v]&&pr[v]<0):ng<gs[v]){gs[v]=ng;pr[v]=u;op.push([v,m==="bfs"?++n:m==="dij"?ng:m==="ast"?ng+hh(v):hh(v)])}}}
const p=[];if(seen[G])for(let u=G;u>=0;u=pr[u])p.push(u);p.reverse();return{cl,p,cost:p.reduce((s,q,i)=>i?s+wt[q]:0,0)}};
const go=m=>{if(m)alg=m;run={r:solve(alg),i:0};const nm={bfs:"BFS",dij:"دایکسترا",ast:"A*",gre:"حریصانه"};g("po").innerHTML=Object.keys(nm).map(a=>{const r=solve(a);return`${nm[a]}${a===alg?" ◀":""}: ${L(r.cl.length)} خانه بررسی · ${r.p.length?"هزینه مسیر "+r.cost:"مسیری نیست"}`}).join("<br>")+"<br><small>روی صفحه بکش تا دیوار بسازی یا برداری.</small>"};
const L=n=>n.toLocaleString("en-US");
["bfs","dij","ast","gre"].forEach(a=>g("a_"+a).onclick=()=>{["bfs","dij","ast","gre"].forEach(z=>g("a_"+z).className="btn "+(z===a?"primary":"ghost"));go(a)});
g("rw").onclick=()=>{wall=wall.map((_,i)=>i!==S&&i!==G&&Math.random()<.28?1:0);go()};if(terr)g("rt").onclick=()=>{wt=wt.map(()=>1+(Math.random()*5|0));go()};g("rc").onclick=()=>{wall.fill(0);wt.fill(1);go()};
const cell=e=>{const p=pt(c,e);return Math.floor(p[0]/cs)+Math.floor(p[1]/cs)*C};
c.onpointerdown=e=>{const i=cell(e);if(i===S||i===G)return;drag=wall[i]?0:1;wall[i]=drag;go();c.setPointerCapture(e.pointerId)};c.onpointerup=()=>drag=-1;
c.onpointermove=e=>{if(drag<0)return;const i=cell(e);if(i!==S&&i!==G&&wall[i]!==drag){wall[i]=drag;go()}};
go("ast");
loop(c,dt=>{run.i+=dt*20*10**(g("sp").value/30);const r=run.r,v=Math.floor(run.i),pv=Math.max(0,v-r.cl.length);x.fillStyle="#091321";x.fillRect(0,0,W,H);
for(let i=0;i<C*N;i++){const px=i%C*cs,py=(i/C|0)*cs;x.fillStyle=wall[i]?"#2c3858":`rgba(90,110,170,${terr?.08+wt[i]*.07:.1})`;x.fillRect(px+1,py+1,cs-2,cs-2);if(terr&&wt[i]>1&&!wall[i]){x.fillStyle="#6d7c98";x.font="11px Arial";x.textAlign="center";x.fillText(wt[i],px+cs/2,py+cs/2+4)}}
for(let i=0;i<Math.min(v,r.cl.length);i++){const u=r.cl[i];x.fillStyle="rgba(81,213,232,.45)";x.fillRect(u%C*cs+2,(u/C|0)*cs+2,cs-4,cs-4)}
if(v>r.cl.length)for(let i=0;i<Math.min(pv/2,r.p.length);i++){const u=r.p[i];x.fillStyle="#f0bc72";x.beginPath();x.arc(u%C*cs+cs/2,(u/C|0)*cs+cs/2,cs*.28,0,7);x.fill()}
[[S,"#59d6a3"],[G,"#f27d8d"]].forEach(([u,co])=>{x.fillStyle=co;x.shadowColor=co;x.shadowBlur=14;x.beginPath();x.arc(u%C*cs+cs/2,(u/C|0)*cs+cs/2,cs*.36,0,7);x.fill();x.shadowBlur=0})})}};
PF("1-3",false);PF("1-5",true);
E["3-8"]=h=>{const ex={"فیبوناچی":"const f=n=>n<2?n:f(n-1)+f(n-2);\nconsole.log(f(25));\nreturn [0,1,2,3,4,5].map(f)","اعداد اول":"const p=[];\nfor(let i=2;p.length<15;i++)if(p.every(q=>i%q))p.push(i);\nreturn p","آمار":"const a=[4,8,6,5,3,9,10];\nconst m=a.reduce((s,x)=>s+x)/a.length;\nreturn {mean:m,max:Math.max(...a)}"};
h.innerHTML=`<div class="ctl">${Object.keys(ex).map(k=>Bt("e_"+k,k,"ghost")).join("")}${Bt("jr","اجرا")}</div><div class="field"><label>کد JavaScript (می‌توانی return بنویسی؛ در محیط جدا اجرا می‌شود)</label><textarea id="jc" rows="9" dir="ltr">${ex["فیبوناچی"]}</textarea></div><div class="result mono" id="jo" style="white-space:pre-wrap"></div><div id="jh"></div>`;
const hist=[];Object.keys(ex).forEach(k=>g("e_"+k).onclick=()=>{g("jc").value=ex[k];run()});
const src=`onmessage=e=>{const o=[],c={log:(...a)=>o.push(a.map(q=>typeof q==="object"?JSON.stringify(q):String(q)).join(" "))};const t=performance.now();try{let f;try{f=new Function("console","return ("+e.data+"\\n)")}catch{f=new Function("console",e.data)}const r=f(c);postMessage({o,r:r===undefined?"":typeof r==="object"?JSON.stringify(r):String(r),t:performance.now()-t})}catch(er){postMessage({o,err:er.message,t:performance.now()-t})}}`;
const run=()=>{const w=new Worker(URL.createObjectURL(new Blob([src])));const kill=setTimeout(()=>{w.terminate();g("jo").textContent="زمان اجرا از ۲ ثانیه گذشت و متوقف شد."},2000);
w.onmessage=e=>{clearTimeout(kill);w.terminate();const d=e.data;g("jo").textContent=(d.o.length?d.o.join("\n")+"\n":"")+(d.err?"خطا: "+d.err:d.r?"← "+d.r:"")+`\n(${d.t.toFixed(2)} ms)`;hist.push(d.t);if(hist.length>12)hist.shift();const mx=Math.max(...hist,.01);g("jh").innerHTML=hist.map(t=>`<div class="bar"><i style="width:${t/mx*100}%"></i></div>`).join("")};w.postMessage(g("jc").value)};
g("jr").onclick=run;run()};
E["3-9"]=h=>{h.innerHTML=`<div class="ctl">${F("ht","عنوان صفحه","صفحه من")}${F("hb","متن اصلی","به آزمایشگاه تیا خوش آمدید")}${F("hc","رنگ تأکید","#7c6cf0")}${Bt("hd","دانلود HTML")}${Bt("hp","کپی کد","ghost")}</div><iframe id="hf" sandbox style="width:100%;height:280px;border:1px solid #263249;border-radius:10px;background:#fff"></iframe><pre class="result mono" id="hs" style="white-space:pre-wrap;max-height:260px;overflow:auto"></pre>`;
const esc=s=>s.replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c])),build=()=>{const t=esc(g("ht").value),b=esc(g("hb").value),col=/^#[0-9a-f]{3,8}$/i.test(g("hc").value)?g("hc").value:"#7c6cf0";return`<!DOCTYPE html>\n<html lang="fa" dir="rtl">\n<head>\n<meta charset="UTF-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>${t}</title>\n<meta name="description" content="${b.slice(0,150)}">\n<style>body{font-family:Tahoma,sans-serif;margin:0;background:#0d1220;color:#edf2ff}header{padding:48px 24px;background:${col}}main{max-width:720px;margin:auto;padding:24px;line-height:2}</style>\n</head>\n<body>\n<header><h1>${t}</h1></header>\n<main><p>${b}</p></main>\n</body>\n</html>`};
const r=()=>{const s=build();g("hf").srcdoc=s;g("hs").textContent=s};["ht","hb","hc"].forEach(i=>g(i).oninput=r);
g("hd").onclick=()=>{const a=document.createElement("a");a.href=URL.createObjectURL(new Blob([build()],{type:"text/html"}));a.download="page.html";a.click()};g("hp").onclick=()=>navigator.clipboard&&navigator.clipboard.writeText(build()).catch(()=>{});r()};
})();

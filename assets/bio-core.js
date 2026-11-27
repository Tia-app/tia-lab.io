(()=>{
const BIO=window.BIO={};
const css=`
.bio{display:grid;grid-template-columns:minmax(0,1.55fr) minmax(250px,1fr);gap:16px;align-items:start;margin-top:10px}
@media(max-width:920px){.bio{grid-template-columns:1fr}}
.bvis{min-width:0}
.binfo,.bcard{border:1px solid var(--line);background:linear-gradient(160deg,#ffffff0b,#ffffff04);border-radius:16px;padding:16px 18px}
.binfo{position:sticky;top:14px}
.binfo h3{margin:0 0 8px;font-size:17px;display:flex;align-items:center;gap:8px}
.binfo h3:before{content:"";width:10px;height:10px;border-radius:50%;background:var(--bc,#8be26e);box-shadow:0 0 12px var(--bc,#8be26e)}
.binfo p,.bcard p{margin:0 0 9px;font-size:13.5px;line-height:2;color:var(--text)}
.binfo .bk{font-size:12px;color:var(--muted);border-top:1px dashed var(--line);margin-top:10px;padding-top:9px;line-height:1.9}
.b3{position:relative;border-radius:16px;overflow:hidden;border:1px solid var(--line);background:radial-gradient(120% 90% at 50% 20%,#14203a,#050914);touch-action:none;cursor:grab}
.b3:active{cursor:grabbing}.b3 canvas{display:block;width:100%;height:100%}
.b3tip{position:absolute;pointer-events:none;background:#0b1224ee;color:#fff;border:1px solid #ffffff33;border-radius:8px;padding:4px 10px;font-size:12px;opacity:0;transition:opacity .15s;white-space:nowrap;transform:translate(-50%,-140%)}
.b3hint{position:absolute;bottom:8px;right:12px;left:12px;font-size:11.5px;color:#9fb0cf;text-align:center;pointer-events:none}
.b3off{padding:40px 20px;text-align:center;color:var(--muted);font-size:13px;line-height:2}
.btabs{display:flex;flex-wrap:wrap;gap:7px;margin:0 0 12px}
.btabs button,.bbtn{border:1px solid var(--line);background:#ffffff0a;color:var(--text);border-radius:10px;padding:8px 13px;font-size:12.5px;cursor:pointer;transition:.2s;font-family:inherit}
.btabs button:hover,.bbtn:hover{border-color:#8be26e;background:#8be26e1f}
.btabs button.on,.bbtn.on{border-color:#8be26e;background:#8be26e2e;color:#fff;box-shadow:0 0 0 1px #8be26e55 inset}
.bsvg{width:100%;height:auto;display:block;border-radius:16px;border:1px solid var(--line);background:radial-gradient(120% 90% at 50% 15%,#13203a,#060a16)}
.bsvg .hs{cursor:pointer;transition:filter .2s,opacity .2s}.bsvg .hs:hover{filter:brightness(1.35)}
.bsvg .hs.on{filter:brightness(1.5) drop-shadow(0 0 7px #fff8)}
.bsvg text{font-family:Vazirmatn,Arial,sans-serif}
.bctl{display:flex;flex-wrap:wrap;gap:14px;align-items:center;margin:12px 0}
.bctl label{font-size:12.5px;color:var(--muted);display:flex;align-items:center;gap:8px}
.bctl input[type=range]{width:160px;accent-color:#8be26e}
.bstat{display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:10px;margin:12px 0}
.bstat div{border:1px solid var(--line);border-radius:12px;padding:9px 12px;background:#ffffff06}
.bstat b{display:block;font-size:19px;color:#8be26e}.bstat small{font-size:11.5px;color:var(--muted)}
.bq{border:1px solid var(--line);border-radius:14px;padding:14px 16px;margin:0 0 12px;background:#ffffff06}
.bq h4{margin:0 0 10px;font-size:14.5px;line-height:1.9}
.bq .ops{display:grid;gap:7px}.bq .ops button{text-align:right}
.bq .ops button.ok{border-color:#59d6a3;background:#59d6a336}.bq .ops button.no{border-color:#ff6b81;background:#ff6b8130}
.bq .ex{font-size:12.5px;color:var(--muted);margin-top:9px;line-height:1.9;display:none}.bq.done .ex{display:block}
.bnote{font-size:12px;color:var(--muted);line-height:1.9;margin-top:8px}
table.bt2{width:100%;border-collapse:collapse;font-size:13px;margin:8px 0}
table.bt2 th,table.bt2 td{border:1px solid var(--line);padding:8px 10px;text-align:right;line-height:1.8}
table.bt2 th{background:#8be26e18}
body.light .b3,body.light .bsvg{background:radial-gradient(120% 90% at 50% 15%,#dbe7ff,#f3f6ff)}
body.light .b3tip{background:#fffffff2;color:#111;border-color:#0003}
`;
const st=document.createElement("style");st.textContent=css;document.head.appendChild(st);

/* چیدمان استاندارد: ستون تصویر + پنل توضیح */
BIO.layout=(h,tone)=>{
 h.innerHTML=`<div class="bio"><div class="bvis"></div><aside class="binfo" style="--bc:${tone||"#8be26e"}"><h3></h3><div class="bb"></div><div class="bk"></div></aside></div>`;
 const vis=h.querySelector(".bvis"),box=h.querySelector(".binfo"),t=box.querySelector("h3"),b=box.querySelector(".bb"),k=box.querySelector(".bk");
 const set=(title,html,note,c)=>{t.textContent=title;b.innerHTML=html;k.innerHTML=note||"";k.style.display=note?"":"none";box.style.setProperty("--bc",c||tone||"#8be26e")};
 return {vis,box,set};
};
BIO.tabs=(el,items,cb,first=0)=>{
 el.className="btabs";el.innerHTML=items.map((x,i)=>`<button data-i="${i}">${x}</button>`).join("");
 const f=i=>{[...el.children].forEach((c,j)=>c.classList.toggle("on",j===i));cb(i)};
 el.onclick=e=>{const b=e.target.closest("button");if(b)f(+b.dataset.i)};f(first);return f;
};
BIO.svgHS=(svg,cb)=>{ // کلیک روی بخش‌های دارای data-id
 const on=id=>{svg.querySelectorAll(".hs").forEach(n=>n.classList.toggle("on",n.dataset.id===id));cb(id)};
 svg.addEventListener("click",e=>{const n=e.target.closest(".hs");if(n)on(n.dataset.id)});return on;
};

/* صحنهٔ سه‌بعدی واقعی با three.js: چرخش، زوم، لمس، انتخاب بخش‌ها */
BIO.three=(vis,o={})=>{
 const T=window.THREE,wrap=document.createElement("div");wrap.className="b3";wrap.style.height=(o.h||480)+"px";vis.appendChild(wrap);
 let R;if(!T){wrap.innerHTML='<div class="b3off">نمایش سه‌بعدی به کتابخانهٔ three.js نیاز دارد که بارگیری نشد. اتصال اینترنت را بررسی کن و صفحه را دوباره باز کن.</div>';return null}
 try{R=new T.WebGLRenderer({antialias:true,alpha:true})}catch(e){wrap.innerHTML='<div class="b3off">مرورگر شما از WebGL پشتیبانی نمی‌کند یا غیرفعال است.</div>';return null}
 R.setPixelRatio(Math.min(2,devicePixelRatio||1));wrap.appendChild(R.domElement);
 const S=new T.Scene(),C=new T.PerspectiveCamera(o.fov||42,1,.1,300);
 S.add(new T.HemisphereLight(0xe6eeff,0x2a1c33,.85));
 const d1=new T.DirectionalLight(0xffffff,.95);d1.position.set(4,7,6);S.add(d1);
 const d2=new T.DirectionalLight(0x7fa4ff,.5);d2.position.set(-6,-3,-5);S.add(d2);
 const d3=new T.PointLight(0xffd9a8,.6,60);d3.position.set(0,2,8);S.add(d3);
 let yaw=o.yaw??.7,pit=o.pit??.2,rad=o.r||9,auto=o.auto!==false,drag=0;const tgt=new T.Vector3(...(o.target||[0,0,0])),ptr=new Map(),pick=[],tick=[];
 const tip=document.createElement("div");tip.className="b3tip";wrap.appendChild(tip);
 if(o.hint!==false){const hn=document.createElement("div");hn.className="b3hint";hn.textContent=o.hint||"بکش تا بچرخد · چرخ ماوس یا دو انگشت برای زوم · روی هر بخش کلیک کن · دو بار کلیک: چرخش خودکار";wrap.appendChild(hn)}
 const rc=new T.Raycaster(),mv=new T.Vector2();
 const hit=e=>{const r=wrap.getBoundingClientRect();mv.set((e.clientX-r.left)/r.width*2-1,-((e.clientY-r.top)/r.height)*2+1);rc.setFromCamera(mv,C);const h=rc.intersectObjects(pick.filter(m=>{for(let o=m;o;o=o.parent)if(!o.visible)return false;return true}),false);return h.length?h[0].object:null};
 const api={T,S,C,R,wrap,pick,tick,sel:null,onPick:null,
  reg(m,id,name){m.userData.id=id;m.userData.name=name;m.userData.base=m.material&&m.material.emissive?m.material.emissive.getHex():0;pick.push(m);return m},
  hl(id){api.sel=id;pick.forEach(m=>{if(!m.material||!m.material.emissive)return;const on=m.userData.id===id;m.material.emissive.setHex(on?0x335544:m.userData.base);if(m.material.emissiveIntensity!==undefined)m.material.emissiveIntensity=on?1:1})},
  look(x,y,z){tgt.set(x,y,z)},zoom(r){rad=r},spin(v){auto=v},view(y,p){yaw=y;pit=p}};
 const size=()=>{const w=wrap.clientWidth||600,h=wrap.clientHeight||400;R.setSize(w,h,false);C.aspect=w/h;C.updateProjectionMatrix()};
 size();if(window.ResizeObserver)new ResizeObserver(size).observe(wrap);else addEventListener("resize",size);
 let moved=0,pinch=0;
 wrap.addEventListener("pointerdown",e=>{wrap.setPointerCapture(e.pointerId);ptr.set(e.pointerId,[e.clientX,e.clientY]);moved=0;auto=false;if(ptr.size===2){const a=[...ptr.values()];pinch=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1])}});
 wrap.addEventListener("pointermove",e=>{
  if(ptr.has(e.pointerId)){const p=ptr.get(e.pointerId),dx=e.clientX-p[0],dy=e.clientY-p[1];moved+=Math.abs(dx)+Math.abs(dy);
   if(ptr.size===1){yaw-=dx*.008;pit=Math.max(-1.45,Math.min(1.45,pit+dy*.008))}
   ptr.set(e.pointerId,[e.clientX,e.clientY]);
   if(ptr.size===2){const a=[...ptr.values()],d=Math.hypot(a[0][0]-a[1][0],a[0][1]-a[1][1]);if(pinch)rad=Math.max(2,Math.min(40,rad*pinch/d));pinch=d}
  }else{const m=hit(e);if(m){const r=wrap.getBoundingClientRect();tip.textContent=m.userData.name;tip.style.left=(e.clientX-r.left)+"px";tip.style.top=(e.clientY-r.top)+"px";tip.style.opacity=1;wrap.style.cursor="pointer"}else{tip.style.opacity=0;wrap.style.cursor=""}}
 });
 const up=e=>{if(ptr.has(e.pointerId)){ptr.delete(e.pointerId);if(moved<6&&e.type==="pointerup"){const m=hit(e);if(m&&api.onPick)api.onPick(m.userData.id,m)}}};
 wrap.addEventListener("pointerup",up);wrap.addEventListener("pointercancel",up);
 wrap.addEventListener("wheel",e=>{e.preventDefault();rad=Math.max(2,Math.min(40,rad*(e.deltaY<0?.92:1.09)))},{passive:false});
 wrap.addEventListener("dblclick",()=>auto=true);
 let last=performance.now();
 const frame=n=>{if(!wrap.isConnected){try{R.dispose()}catch(e){}return}requestAnimationFrame(frame);if(!wrap.offsetParent||TIA.pause)return;
  const dt=Math.min(.05,(n-last)/1000);last=n;if(auto)yaw+=dt*.22;
  C.position.set(tgt.x+rad*Math.sin(yaw)*Math.cos(pit),tgt.y+rad*Math.sin(pit),tgt.z+rad*Math.cos(yaw)*Math.cos(pit));C.lookAt(tgt);
  for(const f of tick)f(dt,n/1000);R.render(S,C)};
 requestAnimationFrame(frame);
 return api;
};
/* ابزارهای هندسه */
BIO.mat=(c,o={})=>new THREE.MeshStandardMaterial(Object.assign({color:c,roughness:.55,metalness:.02},o));
BIO.tube=(pts,r,mat,seg=24,rs=8)=>{const T=THREE,cv=new T.CatmullRomCurve3(pts.map(p=>new T.Vector3(...p)));return new T.Mesh(new T.TubeGeometry(cv,seg,r,rs,false),mat)};
BIO.rnd=(s=7)=>()=>(s=(s*16807)%2147483647)/2147483647;

/* آزمونک چندگزینه‌ای */
BIO.quiz=(el,items,done)=>{
 let ok=0,ans=0;el.innerHTML=items.map((q,i)=>`<div class="bq" data-i="${i}"><h4>${i+1}) ${q[0]}</h4><div class="ops">${q[1].map((o,j)=>`<button class="bbtn" data-j="${j}">${o}</button>`).join("")}</div><div class="ex">${q[3]}</div></div>`).join("")+`<div class="result" id="bqs">به پرسش‌ها پاسخ بده؛ نتیجه همین‌جا نشان داده می‌شود.</div>`;
 el.onclick=e=>{const b=e.target.closest(".ops button");if(!b)return;const bq=b.closest(".bq");if(bq.classList.contains("done"))return;const q=items[+bq.dataset.i],j=+b.dataset.j;bq.classList.add("done");ans++;if(j===q[2]){ok++;b.classList.add("ok")}else{b.classList.add("no");bq.querySelectorAll("button")[q[2]].classList.add("ok")}
  el.querySelector("#bqs").innerHTML=`پاسخ‌داده‌شده: <b>${digits(ans)}</b> از ${digits(items.length)} · درست: <b>${digits(ok)}</b>`+(ans===items.length?`<br>${ok===items.length?"عالی! همه را درست زدی.":ok>=items.length*.7?"خیلی خوب؛ مرور چند مبحث دیگر کافی است.":"یک بار دیگر توضیح‌های همین بخش‌ها را بخوان و دوباره امتحان کن."}`:"");if(done&&ans===items.length)done(ok)};
};
})();

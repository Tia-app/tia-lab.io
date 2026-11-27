(()=>{
const {E,F,g}=TIA,old=E["7-0"];
E["7-0"]=h=>{
 let grp="all";
 h.innerHTML=`<div class="ctl">${F("sq","جست‌وجوی دانشمند یا مفهوم","")}</div><div class="btabs" id="sg"></div><div class="sci" id="scl"></div><h3 style="margin:22px 0 4px">دانشمندان و رویدادهای دیگر</h3><div id="oldk"></div>`;
 const ks=Object.keys(SCI);
 g("scl").innerHTML=ks.map(k=>{const s=SCI[k],lk=(s.l||[]).map(q=>`<button data-l="${q[0]}" data-m="${q[1]}">${q[2]} ←</button>`).join("");
  return`<article data-k="${k}" data-g="${s.g}" data-t="${s.n} ${s.en} ${s.f} ${s.b}"><header><img src="assets/people/${k}.svg" data-k="${k}" alt="${s.n}" loading="lazy"><div><h4>${s.n}</h4><small>${s.en}<br>${s.y}<br>${s.f}</small></div></header><p>${s.b}</p><details class="more"><summary>زندگی و کشف‌ها (بیشتر)</summary>${(s.d||[]).map(p=>`<p>${p}</p>`).join("")}<ul>${(s.k||[]).map(x=>`<li>${x}</li>`).join("")}</ul></details>${lk?`<div class="lk">${lk}</div>`:""}</article>`}).join("");
 g("scl").querySelectorAll("img[data-k]").forEach(im=>{im.onerror=()=>{if(!im.dataset.f){im.dataset.f=1;im.src=`assets/people/${im.dataset.k}.svg`}};tiaPhoto(im,im.dataset.k,ok=>{if(!ok)im.src=`assets/people/${im.dataset.k}.svg`})});
 g("scl").onclick=e=>{const b=e.target.closest("button[data-l]");if(b)openModule(+b.dataset.l,+b.dataset.m)};
 const flt=()=>{const v=g("sq").value.trim();g("scl").querySelectorAll("article").forEach(a=>a.style.display=(grp==="all"||a.dataset.g===grp)&&a.dataset.t.includes(v)?"":"none")};
 BIO.tabs(g("sg"),Object.values(SCI_GROUPS),i=>{grp=Object.keys(SCI_GROUPS)[i];flt()});
 g("sq").oninput=()=>{flt();const q=document.getElementById("kq");if(q){q.value=g("sq").value;q.dispatchEvent(new Event("input"))}};
 if(old)old(g("oldk"));
};
})();

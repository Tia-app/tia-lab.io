(()=>{
const {E,F,g}=TIA,old=E["7-0"];
E["7-0"]=h=>{
const ks=Object.keys(SCI);
h.innerHTML=`<div class="ctl">${F("sq","جست‌وجوی دانشمند یا مفهوم","")}</div><div class="sci" id="scl">${ks.map(k=>{const s=SCI[k];return`<article data-t="${s.n} ${s.f} ${s.b}"><header><img src="assets/people/${k}.jpg" data-k="${k}" alt="${s.n}"><div><h4>${s.n}</h4><small>${s.y}<br>${s.f}</small></div></header><p>${s.b}</p></article>`}).join("")}</div><h3 style="margin:22px 0 4px">دانشمندان و رویدادهای دیگر</h3><div id="oldk"></div>`;
h.querySelectorAll("img[data-k]").forEach(im=>{im.onerror=()=>{if(im.dataset.f)im.remove();else{im.dataset.f=1;im.src=`assets/people/${im.dataset.k}.svg`}}});
if(old)old(g("oldk"));
g("sq").oninput=()=>{const v=g("sq").value.trim();h.querySelectorAll("#scl article").forEach(a=>a.style.display=a.dataset.t.includes(v)?"":"none");const q=document.getElementById("kq");if(q){q.value=v;q.dispatchEvent(new Event("input"))}}};
})();

(()=>{
const {E,g,loop,cv}=TIA,B=BIO,FA=n=>String(n).replace(/\d/g,d=>"۰۱۲۳۴۵۶۷۸۹"[d]);
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));

/* ───────── ۸-۴ پتانسیل عمل ───────── */
E["8-4"]=h=>{
 const L=B.layout(h,"#f2c14e");
 L.vis.innerHTML='<div class="btabs" id="t4"></div><div id="v4"></div>';
 const v4=g("v4");
 const spike=()=>{
  v4.innerHTML='<div class="bctl"><label>شدت تحریک <input type="range" id="stim" min="0" max="20" value="10"></label><button class="bbtn" id="sfire">⚡ تحریک نورون</button><button class="bbtn" id="sdbl">دو تحریک پشت‌سرهم</button><label>سرعت <input type="range" id="sspd" min="1" max="10" value="4"></label></div>';
  const c=cv(v4,1000,520),x=c.getContext("2d");
  v4.insertAdjacentHTML("beforeend",'<div class="bstat"><div><b id="svm">−۷۰</b><small>پتانسیل غشا (mV)</small></div><div><b id="sph">استراحت</b><small>مرحله</small></div><div><b id="sna">۰٪</b><small>باز بودن کانال Na⁺</small></div><div><b id="sk">۰٪</b><small>باز بودن کانال K⁺</small></div></div>');
  let V=-65,m=.053,hh=.596,n=.318,t=0,I=0,Iend=0,pend=[];const hist=[];const ion=[];
  const AM=v=>Math.abs(v+40)<1e-6?1:.1*(v+40)/(1-Math.exp(-(v+40)/10)),BM=v=>4*Math.exp(-(v+65)/18),AH=v=>.07*Math.exp(-(v+65)/20),BH=v=>1/(1+Math.exp(-(v+35)/10)),AN=v=>Math.abs(v+55)<1e-6?.1:.01*(v+55)/(1-Math.exp(-(v+55)/10)),BN=v=>.125*Math.exp(-(v+65)/80);
  const step=dt=>{const Ina=120*m**3*hh*(V-50),Ik=36*n**4*(V+77),Il=.3*(V+54.4),Ii=(t<Iend?I:0);V+=dt*(Ii-Ina-Ik-Il);m+=dt*(AM(V)*(1-m)-BM(V)*m);hh+=dt*(AH(V)*(1-hh)-BH(V)*hh);n+=dt*(AN(V)*(1-n)-BN(V)*n);t+=dt;return [Ina,Ik]};
  const fire=(at=0)=>{I=+g("stim").value;Iend=t+1+at;if(at)Iend=t+1};
  g("sfire").onclick=()=>{I=+g("stim").value;Iend=t+1};
  g("sdbl").onclick=()=>{I=+g("stim").value;Iend=t+1;pend.push(t+4.5)};
  let acc=0,phase="";const PH={rest:["استراحت (پتانسیل آرامش)","<p>وقتی یاختهٔ عصبی تحریک نشده، اختلاف پتانسیل دو سوی غشا حدود <b>۷۰− میلی‌ولت</b> است؛ درون یاخته نسبت به بیرون بار منفی دارد. غشا نسبت به یون پتاسیم نفوذپذیری زیادی و نسبت به سدیم نفوذپذیری کمی دارد و <b>پمپ سدیم–پتاسیم</b> با مصرف انرژی (ATP) در هر بار ۳ سدیم را بیرون و ۲ پتاسیم را به درون می‌برد.</p><p>در حالت آرامش مقدار سدیم بیرون یاخته و مقدار پتاسیم درون یاخته بیشتر است.</p>"],dep:["دپلاریزاسیون","<p>با تحریک، کانال‌های دریچه‌دار سدیمی باز می‌شوند. نفوذپذیری غشا به سدیم زیاد می‌شود و یون‌های سدیم به فراوانی وارد یاخته می‌شوند. درون یاخته مثبت‌تر می‌شود و پتانسیل به حدود <b>۳۰+ میلی‌ولت</b> می‌رسد: این <b>پتانسیل عمل</b> است.</p>"],rep:["رپلاریزاسیون","<p>پس از زمان کوتاهی کانال‌های سدیمی بسته می‌شوند و کانال‌های دریچه‌دار پتاسیمی باز می‌شوند. یون‌های پتاسیم از یاخته خارج می‌شوند و پتانسیل غشا به حالت آرامش برمی‌گردد.</p>"],hyp:["بیش‌قطبش و دورهٔ تحریک‌ناپذیری","<p>پتانسیل برای مدت کوتاهی از حد آرامش هم پایین‌تر می‌رود. پمپ سدیم–پتاسیم و نفوذپذیری زیاد به پتاسیم، غلظت یون‌ها را به حالت اول برمی‌گردانند. در این مدت یاخته به‌سختی دوباره تحریک می‌شود.</p>"],sub:["تحریک ناکافی","<p>اگر تحریک به آستانه (حدود ۵۵− میلی‌ولت) نرسد، پتانسیل عمل ایجاد نمی‌شود. پتانسیل عمل «همه یا هیچ» است: قوی‌تر کردن تحریک، اندازهٔ آن را بزرگ‌تر نمی‌کند، فقط تعداد دفعات را بیشتر می‌کند.</p>"]};
  const setPh=p=>{if(p!==phase){phase=p;L.set(PH[p][0],PH[p][1],"هر محرکی که تعداد یون‌ها را در دو طرف غشا تغییر دهد، پیام عصبی ایجاد می‌کند. برای هر مرحله، کانال‌ها و یون‌ها را در سمت راست ببین.","#f2c14e")}};
  setPh("rest");
  loop(c,dt=>{
   const spd=+g("sspd").value;acc+=dt*spd;let fl=[0,0];while(acc>0){const q=Math.min(acc,.025);acc-=.025;fl=step(.025);if(pend.length&&t>=pend[0]){pend.shift();Iend=t+1}hist.push([t,V]);if(acc<0)break}
   while(hist.length&&hist[0][0]<t-22)hist.shift();
   const mm=m**3*hh,nn=n**4,Vd=V-5;
   let ph="rest";if(mm>.03&&Vd>-62)ph="dep";else if(nn>.08&&Vd>-71)ph="rep";else if(Vd<-71&&nn>.04)ph="hyp";else if(Vd>-69.5&&t<Iend+4&&mm<.03)ph="sub";
   last=Vd;if(ph!==phase)setPh(ph);
   g("svm").textContent=FA(Math.round(Vd)).replace("-","−");g("sph").textContent=PH[phase][0].split("(")[0].trim();g("sna").textContent=FA(Math.round(clamp(mm*100*4,0,100)))+"٪";g("sk").textContent=FA(Math.round(clamp(nn*100*2.6,0,100)))+"٪";
   x.fillStyle="#050a15";x.fillRect(0,0,1000,520);
   // نمودار
   const gx=50,gy=30,gw=520,gh=420,yv=v=>gy+gh-(v+90)/140*gh;
   x.strokeStyle="#ffffff18";x.lineWidth=1;x.font="12px Vazirmatn";x.fillStyle="#8fa3c9";x.textAlign="right";
   for(const v of[-80,-70,-55,-40,-20,0,20,40]){x.beginPath();x.setLineDash(v===-55?[6,5]:[]);x.moveTo(gx,yv(v));x.lineTo(gx+gw,yv(v));x.strokeStyle=v===-55?"#ff9a4d99":v===-70?"#59d6a355":"#ffffff14";x.stroke();x.fillText(v===-55?"آستانه −۵۵":v===-70?"آرامش −۷۰":FA(v).replace("-","−"),gx-6,yv(v)+4)}x.setLineDash([]);
   x.beginPath();hist.forEach((q,i)=>{const px=gx+(q[0]-(t-22))/22*gw,py=yv(q[1]-5);i?x.lineTo(px,py):x.moveTo(px,py)});x.strokeStyle="#ffd166";x.lineWidth=2.6;x.shadowColor="#ffd166";x.shadowBlur=10;x.stroke();x.shadowBlur=0;
   x.fillStyle="#9fb0cf";x.textAlign="center";x.fillText("زمان (میلی‌ثانیه) ←",gx+gw/2,gy+gh+30);x.save();x.translate(14,gy+gh/2);x.rotate(-Math.PI/2);x.fillText("پتانسیل غشا (mV)",0,0);x.restore();
   // غشا
   const mx=600,my=250;x.fillStyle="#0e2036";x.fillRect(mx,40,380,my-40-14);x.fillStyle="#1a1f3a";x.fillRect(mx,my+14,380,440-my-14+40);
   x.fillStyle="#9fb0cf";x.textAlign="right";x.fillText("بیرون یاخته",mx+372,60);x.fillText("درون یاخته",mx+372,my+300);
   x.fillStyle="#c9a24e";for(let i=0;i<19;i++){x.beginPath();x.arc(mx+10+i*20,my,9,0,7);x.fill();x.beginPath();x.arc(mx+10+i*20,my+12,9,0,7);x.fill()}
   const chan=(cx,open,col,lab)=>{x.fillStyle="#2a4f5e";x.fillRect(cx-22,my-20,16,42);x.fillRect(cx+6,my-20,16,42);x.fillStyle=open>.15?col+"55":"#11202a";x.fillRect(cx-6,my-18,12,38);if(open<.9){x.fillStyle=col;const gh2=(1-clamp(open,0,1))*17;x.fillRect(cx-6,my-18,12,gh2);x.fillRect(cx-6,my+20-gh2,12,gh2)}x.fillStyle=col;x.textAlign="center";x.fillText(lab,cx,my+44)};
   chan(mx+110,clamp(mm*4,0,1),"#ff6b6b","کانال Na⁺");chan(mx+260,clamp(nn*2.6,0,1),"#6ec6ff","کانال K⁺");
   // پمپ
   x.fillStyle="#6b4fa1";x.fillRect(mx+330,my-14,32,42);x.fillStyle="#fff";x.fillText("پمپ",mx+346,my+44);
   x.fillStyle="#ff6b6b";for(let i=0;i<7;i++){x.beginPath();x.arc(mx+30+i*52+(i%2)*14,80+(i*29)%110,7,0,7);x.fill()}for(let i=0;i<3;i++){x.beginPath();x.arc(mx+40+i*40,my+60+i*18,7,0,7);x.fill()}
   x.fillStyle="#6ec6ff";for(let i=0;i<8;i++){x.beginPath();x.arc(mx+30+i*44,my+100+(i*37)%110,7,0,7);x.fill()}
   const flN=clamp(mm*40,0,1),flK=clamp(nn*30,0,1);
   if(Math.random()<flN*.7)ion.push({k:0,x:mx+110+(Math.random()-.5)*14,y:my-60,vy:150});if(Math.random()<flK*.5)ion.push({k:1,x:mx+260+(Math.random()-.5)*14,y:my+30,vy:-150});
   for(let i=ion.length-1;i>=0;i--){const q=ion[i];q.y+=q.vy*dt*2;x.fillStyle=q.k?"#6ec6ff":"#ff6b6b";x.beginPath();x.arc(q.x,q.y,6,0,7);x.fill();if(q.y<40||q.y>my+200)ion.splice(i,1)}
   x.fillStyle="#ff6b6b";x.textAlign="left";x.fillText("● Na⁺",mx+10,500);x.fillStyle="#6ec6ff";x.fillText("● K⁺",mx+80,500);
   x.fillStyle=Vd>0?"#ff6b6b":"#6ec6ff";x.font="bold 16px Vazirmatn";x.textAlign="center";x.fillText(`درون یاخته ${Vd>0?"مثبت":"منفی"}: ${FA(Math.round(Vd)).replace("-","−")} mV`,mx+190,my+260)});
  let last=-70;function dtV(){return 1}
 };
 const cond=()=>{
  v4.innerHTML='<div class="bctl"><button class="bbtn on" id="cmy">غلاف میلین: روشن</button><button class="bbtn" id="cgo">⚡ تحریک از چپ</button><button class="bbtn" id="cmid">⚡ تحریک از وسط (پیام دو طرفه؟)</button></div>';
  const c=cv(v4,1000,300),x=c.getContext("2d");v4.insertAdjacentHTML("beforeend",'<div class="bstat"><div><b id="ct">—</b><small>زمان رسیدن به انتها</small></div><div><b id="cs">—</b><small>سرعت نسبی</small></div></div>');
  let my=true;const N=100,st=new Uint8Array(N),rf=new Float32Array(N);let tm=0,t0=-1,done=-1,acc=0;
  const isN=i=>!my||i%10===0||i===N-1;const reset=()=>{st.fill(0);rf.fill(0);tm=0;t0=-1;done=-1;g("ct").textContent="—";g("cs").textContent="—"};
  const start=i=>{reset();st[i]=1;rf[i]=1;t0=0};
  g("cmy").onclick=e=>{my=!my;e.target.textContent="غلاف میلین: "+(my?"روشن":"خاموش");e.target.classList.toggle("on",my);reset()};g("cgo").onclick=()=>start(0);g("cmid").onclick=()=>start(50);
  L.set("هدایت پیام در آسه",`<p>پیام عصبی مثل دومینو در طول یاخته جلو می‌رود: تحریک یک نقطه، نقطهٔ بعدی را تحریک می‌کند. در آسه‌های میلین‌دار فقط در <b>گره‌های رانویه</b> پتانسیل عمل ایجاد می‌شود و پیام از گره‌ای به گرهٔ دیگر می‌جهد.</p><p>پس از عبور پیام، هر ناحیه برای مدتی <b>تحریک‌ناپذیر</b> است؛ برای همین پیام به عقب برنمی‌گردد.</p>`,"از وسط تحریک کن: چرا در نورون واقعی پیام همیشه یک‌طرفه است؟ (چون تحریک از دارینه و جسم یاخته‌ای شروع می‌شود و دورهٔ تحریک‌ناپذیری مانع بازگشت است).","#f2c14e");
  loop(c,dt=>{acc+=dt;const per=my?.06:.04;while(acc>per){acc-=per;tm+=per;const ns=st.slice(),adv=my?10:1;for(let i=0;i<N;i++)if(st[i]===1&&rf[i]<2){rf[i]=2;ns[i]=2}
     for(let i=0;i<N;i++)if(st[i]===1){for(const d of[-1,1]){const j=i+d*(my?(i%10===0||d===1&&false?10:1):1);const jj=my?(isN(i)?i+d*10:i):i+d;if(jj>=0&&jj<N&&st[jj]===0&&rf[jj]===0){ns[jj]=1;rf[jj]=1}}}
     for(let i=0;i<N;i++)if(st[i]===2){ns[i]=3}
     st.set(ns);if(t0>=0&&done<0&&st[N-1]>0&&rf[N-1]>0){done=tm;g("ct").textContent=FA((my?4:60)*0+Math.round(done*1000)/10)+" واحد زمانی";g("cs").textContent=my?"سریع (جهشی)":"کند (پیوسته)"}}
   x.fillStyle="#050a15";x.fillRect(0,0,1000,300);const y=150;x.fillStyle="#3a3f58";x.fillRect(30,y-5,940,10);
   for(let i=0;i<N;i++){const px=30+i*9.4;if(my){const seg=Math.floor(i/10);if(i%10!==0){x.fillStyle="#f5efd2";x.fillRect(px,y-16,9.4,32)}else{x.fillStyle="#ff9f1c";x.fillRect(px,y-6,9.4,12)}}
    const s=st[i]===1;if(s){x.fillStyle="#ffe27a";x.shadowColor="#ffe27a";x.shadowBlur=18;x.beginPath();x.arc(px+4.7,y,9,0,7);x.fill();x.shadowBlur=0}else if(rf[i]>0){x.fillStyle="#ff6b6b33";x.beginPath();x.arc(px+4.7,y,5,0,7);x.fill()}}
   x.fillStyle="#9fb0cf";x.font="13px Vazirmatn";x.textAlign="center";x.fillText(my?"زرد: پتانسیل عمل · کرم‌رنگ: میلین · نارنجی: گرهٔ رانویه · قرمز کمرنگ: ناحیهٔ تحریک‌ناپذیر":"آسهٔ بدون میلین: پتانسیل عمل در همهٔ نقاط ایجاد می‌شود",500,40)});
 };
 B.tabs(g("t4"),["شبیه‌ساز پتانسیل عمل","هدایت در طول آسه"],i=>{i?cond():spike()});
};

/* ───────── ۸-۵ سیناپس ───────── */
E["8-5"]=h=>{
 const L=B.layout(h,"#ef476f");
 L.vis.innerHTML='<div class="bctl"><button class="bbtn on" id="sgo">▶ ارسال پیام عصبی</button><label>مقدار ناقل <input type="range" id="snt" min="10" max="70" value="40"></label><label>مسدودکنندهٔ گیرنده <input type="range" id="sbl" min="0" max="100" value="0"></label><button class="bbtn" id="sca">مسدود کردن Ca²⁺</button></div>';
 const c=cv(L.vis,1000,600),x=c.getContext("2d");L.vis.insertAdjacentHTML("beforeend",'<div class="bstat"><div><b id="sst">آماده</b><small>مرحله</small></div><div><b id="sbd">۰</b><small>گیرندهٔ اشغال‌شده</small></div><div><b id="svv">۰٪</b><small>تغییر پتانسیل پس‌سیناپسی</small></div></div>');
 const ST=[["نورون پیش‌سیناپسی","<p>پیام عصبی (پتانسیل عمل) در طول آسه به <b>انتهای آسه</b> می‌رسد. نورون‌ها با ارتباطی به نام <b>سیناپس</b> به هم وصل‌اند و بین آن‌ها فضای سیناپسی هست."],["ورود کلسیم","<p>رسیدن پیام کانال‌های دریچه‌دار کلسیمی را باز می‌کند و یون‌های Ca²⁺ وارد انتهای آسه می‌شوند."],["رهاسازی ناقل (اگزوسیتوز)","<p>ناقل‌های عصبی (نوروترانسمیتر) درون نورون ساخته و در وزیکول‌ها ذخیره می‌شوند. وزیکول‌ها در طول آسه حرکت می‌کنند و با ورود Ca²⁺ با غشا ادغام می‌شوند و ناقل را با <b>اگزوسیتوز</b> به فضای سیناپسی می‌ریزند."],["اتصال به گیرنده","<p>ناقل در فضای سیناپسی پخش می‌شود و به <b>گیرندهٔ پروتئینی</b> غشای نورون پس‌سیناپسی وصل می‌شود."],["باز شدن کانال‌ها","<p>اتصال ناقل باعث فعال شدن کانال‌ها می‌شود. نفوذپذیری غشای پس‌سیناپسی تغییر می‌کند (مثلاً Na⁺ وارد می‌شود) و پتانسیل الکتریکی آن تغییر می‌کند."],["پیام تازه","<p>اگر تغییر پتانسیل به آستانه برسد، در نورون پس‌سیناپسی پیام عصبی جدید ایجاد می‌شود. سپس ناقل تجزیه یا دوباره جذب می‌شود تا پیام تمام شود."]];
 let ph=-1,tm=0,play=false;const P=[],ves=[],rc=[],ca=[];const RX=[360,450,540,630,720];
 const mkRc=()=>{rc.length=0;RX.forEach(x0=>rc.push({x:x0,b:0,blk:0}))};
 const reset=()=>{P.length=0;ca.length=0;mkRc();ves.length=0;for(let i=0;i<7;i++)ves.push({x:300+i*62,y:145+(i%2)*22,r:19,f:0,rel:0});ph=-1;tm=0;g("sst").textContent="آماده";g("sbd").textContent="۰";g("svv").textContent="۰٪"};
 const setPh=p=>{ph=p;tm=0;g("sst").textContent=ST[p][0];L.set(ST[p][0],ST[p][1],"پیام عصبی از طریق انتهای آسه با یاخته‌های عصبی و دیگر یاخته‌ها در ارتباط است و پیام به یاختهٔ دیگر منتقل می‌شود.","#ef476f")};
 let blockCa=false;g("sca").onclick=e=>{blockCa=!blockCa;e.target.classList.toggle("on",blockCa);e.target.textContent=blockCa?"Ca²⁺ مسدود است":"مسدود کردن Ca²⁺"};
 g("sgo").onclick=()=>{reset();const bl=+g("sbl").value/100;rc.forEach((r,i)=>r.blk=Math.random()<bl?1:0);play=true;setPh(0)};
 L.set("سیناپس؛ پل بین نورون‌ها","<p>دکمهٔ «ارسال پیام عصبی» را بزن و مراحل انتقال پیام را ببین. با مقدار ناقل و مسدودکننده‌ها بازی کن: چه می‌شود اگر گیرنده‌ها بسته شوند یا کلسیم نتواند وارد شود؟</p>","نورون‌ها با ارتباطی به نام سیناپس به هم وصل‌اند.");
 reset();
 loop(c,dt=>{
  if(play){tm+=dt;const T=[1.1,1.3,1.5,2.4,1.6,2.2];if(tm>T[ph]){if(ph<5)setPh(ph+1);else{play=false}}
   if(ph===1&&!blockCa&&Math.random()<.4)ca.push({x:380+Math.random()*300,y:90,vy:90});
   if(ph===2){if(blockCa&&tm>.2){setPh(5);g("sst").textContent="ناقلی آزاد نشد";L.set("بدون کلسیم، بدون پیام","<p>کانال‌های کلسیمی مسدودند؛ وزیکول‌ها با غشا ادغام نمی‌شوند و ناقلی آزاد نمی‌شود. پیام در سیناپس متوقف می‌شود.</p>","","#ef476f");play=false}
    ves.forEach((v,i)=>{if(!v.rel&&i%1===0&&tm>.2+i*.1){v.f=Math.min(1,v.f+dt*1.2);v.y=145+(1-Math.min(v.f,1))*20+(i%2)*(1-v.f)*22+v.f*20;if(v.f>=1){v.rel=1;for(let k=0;k<+g("snt").value/7;k++)P.push({x:v.x+(Math.random()-.5)*20,y:222,vx:(Math.random()-.5)*40,vy:20+Math.random()*60,c:0})}}})}}
  for(const p of P){if(p.c)continue;p.x+=p.vx*dt+(Math.random()-.5)*60*dt;p.y+=p.vy*dt+(Math.random()-.5)*40*dt;p.vx+=(Math.random()-.5)*60*dt;if(p.x<250)p.vx=Math.abs(p.vx);if(p.x>800)p.vx=-Math.abs(p.vx);if(p.y>352){p.y=352;p.vy=-Math.abs(p.vy)*.6}if(p.y<224&&ph>=3)p.vy=Math.abs(p.vy);
   if(ph>=3&&p.y>330)rc.forEach(r=>{if(!r.b&&!r.blk&&Math.abs(p.x-r.x)<24){r.b=1;p.c=1;p.x=r.x;p.y=338}})}
  const nb=rc.filter(r=>r.b).length;if(play||ph>=3){g("sbd").textContent=FA(nb)+" از "+FA(rc.length);if(ph>=4)g("svv").textContent=FA(Math.round(nb/rc.length*(0.6+.4*+g("snt").value/70)*100))+"٪"}
  for(const q of ca){q.y+=q.vy*dt;}ca.splice(0,ca.length,...ca.filter(q=>q.y<175));
  const Nap=[];if(ph>=4&&play)for(const r of rc)if(r.b&&Math.random()<.18)Nap.push({x:r.x,y:352,vy:80});
  x.fillStyle="#050a15";x.fillRect(0,0,1000,600);
  // پیش‌سیناپسی
  x.fillStyle="#3b2a4e";x.beginPath();x.moveTo(150,0);x.lineTo(850,0);x.lineTo(850,70);x.quadraticCurveTo(840,215,720,225);x.lineTo(300,225);x.quadraticCurveTo(160,215,150,70);x.fill();
  x.fillStyle="#f2c14e";x.fillRect(430,0,150,60);x.globalAlpha=ph===0?.5+.5*Math.sin(tm*14):.25;x.fillStyle="#ffe27a";x.fillRect(430,0,150,60);x.globalAlpha=1;x.fillStyle="#fff";x.font="13px Vazirmatn";x.textAlign="center";x.fillText("آسه ← پیام عصبی",505,34);
  x.fillStyle="#9fb0cf";x.fillText("نورون پیش‌سیناپسی (انتهای آسه)",505,120);
  x.fillStyle="#5d4a7a";x.fillRect(240,222,500,8);
  [[380,"#9b6cff"],[620,"#9b6cff"]].forEach(([cx,cc])=>{x.fillStyle=ph===1?"#c9a6ff":"#6c4aa8";x.fillRect(cx-8,214,16,18)});x.fillStyle="#c9a6ff";x.font="11px Vazirmatn";x.fillText("کانال Ca²⁺",380,208);x.fillText("کانال Ca²⁺",620,208);
  ca.forEach(q=>{x.fillStyle="#c9a6ff";x.beginPath();x.arc(q.x,q.y+30,5,0,7);x.fill()});
  ves.forEach(v=>{if(v.rel){x.strokeStyle="#ffb703";x.beginPath();x.arc(v.x,224,6,Math.PI,0);x.stroke();return}x.fillStyle="#ffffff14";x.strokeStyle="#ffb703";x.lineWidth=2;x.beginPath();x.arc(v.x,v.y,v.r,0,7);x.fill();x.stroke();x.fillStyle="#ffb703";for(let k=0;k<5;k++){x.beginPath();x.arc(v.x-8+(k*7)%14,v.y-6+(k*5)%12,2.6,0,7);x.fill()}});
  // نورون پس‌سیناپسی
  x.fillStyle="#1f4a52";x.beginPath();x.moveTo(150,600);x.lineTo(850,600);x.lineTo(850,420);x.quadraticCurveTo(840,360,720,356);x.lineTo(300,356);x.quadraticCurveTo(160,360,150,420);x.fill();
  x.fillStyle="#5fd1c2";x.fillRect(240,352,500,8);x.fillStyle="#9fb0cf";x.fillText("نورون پس‌سیناپسی",505,520);
  rc.forEach(r=>{x.fillStyle=r.blk?"#ff6b81":r.b?"#7be0a5":"#2f8f83";x.fillRect(r.x-14,346,28,20);x.fillStyle=r.b?"#fff":"#bfeee8";x.beginPath();x.arc(r.x,342,5,Math.PI,0);x.fill();if(r.blk){x.strokeStyle="#fff";x.lineWidth=2;x.beginPath();x.moveTo(r.x-9,332);x.lineTo(r.x+9,348);x.moveTo(r.x+9,332);x.lineTo(r.x-9,348);x.stroke()}});
  Nap.forEach(q=>{});rc.forEach(r=>{if(r.b&&ph>=4){for(let k=0;k<2;k++){const yy=366+((performance.now()/6+k*40+r.x)%90);x.fillStyle="#ff6b6b";x.beginPath();x.arc(r.x+Math.sin(yy/9)*4,yy,5,0,7);x.fill()}}});
  P.forEach(p=>{x.fillStyle="#ffb703";x.beginPath();x.arc(p.x,p.y,4,0,7);x.fill()});
  x.fillStyle="#9fb0cf";x.textAlign="center";x.font="13px Vazirmatn";x.fillText("فضای سیناپسی",120,292);x.strokeStyle="#ffffff12";x.setLineDash([4,6]);x.beginPath();x.moveTo(150,292);x.lineTo(850,292);x.stroke();x.setLineDash([]);
  x.textAlign="left";x.fillStyle="#ffb703";x.fillText("● ناقل عصبی",20,580);x.fillStyle="#c9a6ff";x.fillText("● Ca²⁺",120,580);x.fillStyle="#ff6b6b";x.fillText("● Na⁺",190,580);
  const pv=nb/rc.length;x.fillStyle="#223";x.fillRect(880,380,22,200);x.fillStyle=pv>.55?"#7be0a5":"#5fd1c2";x.fillRect(880,580-200*pv*(0.6+.4*+g("snt").value/70),22,200*pv*(0.6+.4*+g("snt").value/70));x.strokeStyle="#ff9a4d";x.setLineDash([3,3]);x.beginPath();x.moveTo(874,470);x.lineTo(908,470);x.stroke();x.setLineDash([]);x.fillStyle="#9fb0cf";x.textAlign="center";x.fillText("پتانسیل",891,372);x.fillText("آستانه",891,462);
 });
};

/* ───────── ۸-۶ حافظه و تغییرپذیری مغز ───────── */
E["8-6"]=h=>{
 const L=B.layout(h,"#b69cff");
 L.vis.innerHTML='<div class="btabs" id="t6"></div><div id="v6"></div>';const v=g("v6");
 const WORDS=["درخت","کتاب","دریا","ستاره","مداد","پنجره","گربه","باران","چراغ","کوه","ماهی","ساعت","گل","نان","قطار","ابر","قلم","سیب","خورشید","کلید","میز","پرنده","شمع","چتر","ماه","دوچرخه","آینه","رودخانه","توپ","عینک"];
 const mem=()=>{
  v.innerHTML='<div class="bcard"><p>۸ کلمه نشان داده می‌شود. آن‌ها را به خاطر بسپار؛ بعد کلمه‌ها پنهان می‌شوند و باید هرچه یادت مانده را بنویسی.</p><div class="bctl"><label>مدت نمایش (ثانیه) <input type="range" id="mdur" min="4" max="20" value="8"></label><button class="bbtn on" id="mgo">شروع آزمون</button></div><div id="mw" style="font-size:24px;line-height:2.4;min-height:110px;text-align:center"></div><textarea id="mans" rows="3" placeholder="کلمه‌هایی را که یادت مانده با فاصله یا کاما بنویس…" style="width:100%;display:none;border-radius:10px;padding:10px;background:#ffffff0a;color:inherit;border:1px solid var(--line);font-family:inherit;font-size:14px"></textarea><div class="toolbuttons"><button class="btn primary" id="mchk" style="display:none">بررسی</button></div><div class="result" id="mres">آماده‌ای؟</div></div><div class="bcard" style="margin-top:12px"><p><b>منحنی فراموشی (مدل ساده):</b> با مرور، اطلاعات از حافظهٔ کوتاه‌مدت به بلندمدت می‌روند.</p><div class="bctl"><label>تعداد مرورها <input type="range" id="mrv" min="0" max="6" value="0"></label></div><canvas id="mcv" width="900" height="260" style="width:100%;border-radius:12px;background:#050a15"></canvas></div>';
  let W=[],tmr;const norm=s=>s.replace(/[\u200c‌]/g,"").trim();
  g("mgo").onclick=()=>{clearTimeout(tmr);W=[...WORDS].sort(()=>Math.random()-.5).slice(0,8);g("mans").style.display="none";g("mchk").style.display="none";g("mans").value="";g("mw").innerHTML=W.map(w=>`<span style="display:inline-block;margin:0 12px;padding:2px 12px;border:1px solid #b69cff66;border-radius:10px">${w}</span>`).join("");g("mres").textContent="ببین و به خاطر بسپار…";tmr=setTimeout(()=>{g("mw").innerHTML='<span style="color:#8fa3c9;font-size:15px">کلمه‌ها پنهان شد.</span>';g("mans").style.display="";g("mchk").style.display="";g("mres").textContent="هرچه یادت مانده را بنویس.";g("mans").focus()},+g("mdur").value*1000)};
  g("mchk").onclick=()=>{const a=g("mans").value.split(/[\s,،]+/).map(norm).filter(Boolean),ok=W.filter(w=>a.includes(w)).length;g("mres").innerHTML=`درست: <b>${FA(ok)}</b> از ۸ کلمه<br>${W.map(w=>a.includes(w)?`<span style="color:#59d6a3">${w}</span>`:`<span style="color:#ff6b81">${w}</span>`).join(" · ")}<br><small>حافظهٔ کوتاه‌مدت معمولاً حدود ۷ مورد را نگه می‌دارد. با مرور و ربط‌دادن مطالب، اطلاعات تثبیت و به حافظهٔ بلندمدت منتقل می‌شوند.</small>`};
  const cx=g("mcv").getContext("2d"),draw=()=>{const r=+g("mrv").value;cx.clearRect(0,0,900,260);cx.strokeStyle="#ffffff18";for(let i=0;i<=4;i++){cx.beginPath();cx.moveTo(50,20+i*50);cx.lineTo(880,20+i*50);cx.stroke()}cx.fillStyle="#8fa3c9";cx.font="12px Vazirmatn";cx.textAlign="right";for(let i=0;i<=4;i++)cx.fillText(FA(100-i*25)+"٪",44,24+i*50);cx.textAlign="center";cx.fillText("روزها ←",465,252);
   for(const [k,col] of[[0,"#ff6b81"],[r,"#7be0a5"]]){let S=1.2*Math.pow(2.3,k);cx.beginPath();for(let d=0;d<=30;d+=.3){const R=Math.exp(-d/S);const px=50+d/30*830,py=220-R*200;d?cx.lineTo(px,py):cx.moveTo(px,py)}cx.strokeStyle=col;cx.lineWidth=3;cx.stroke();if(!r)break}
   cx.fillStyle="#ff6b81";cx.textAlign="left";cx.fillText("بدون مرور",60,40);if(r){cx.fillStyle="#7be0a5";cx.fillText(`با ${FA(r)} بار مرور`,160,40)}};g("mrv").oninput=draw;draw();
  L.set("حافظه: کوتاه‌مدت و بلندمدت","<p>اطلاعات ابتدا به‌صورت <b>کوتاه‌مدت و موقتی</b> در مغز ذخیره می‌شوند؛ بعد از مدتی می‌توانند تثبیت شوند و به <b>حافظهٔ بلندمدت</b> تبدیل شوند. مغز می‌تواند این اطلاعات را دوباره فراخوانی کند و به یاد بیاورد.</p><p>داستان کشف: برای درمان یک بیمار مبتلا به صرع شدید، بخشی از مغز او (ناحیه‌ای شامل <b>هیپوکامپ</b>) برداشته شد. او وقایع اطرافش را فقط چند دقیقه به یاد می‌آورد و بعد فراموش می‌کرد، اما همهٔ خاطرات پیش از عمل را به‌خوبی به یاد داشت. نتیجه: آن بخش مسئول تبدیل حافظهٔ کوتاه‌مدت به بلندمدت است.</p>","هیپوکامپ بخشی از دستگاه کناره‌ای (لیمبیک) است که در شکل‌گیری حافظه و یادگیری نقش دارد.","#b69cff");
 };
 const plast=()=>{
  v.innerHTML='<div class="bctl"><label>تجربه و تمرین <input type="range" id="pex" min="0" max="100" value="20"></label></div><canvas id="pcv" width="1000" height="440" style="width:100%;border-radius:16px;background:#050a15;border:1px solid var(--line)"></canvas><div class="bstat"><div><b id="psy">—</b><small>تعداد سیناپس‌ها (نسبی)</small></div><div><b id="pth">—</b><small>ضخامت بخش خاکستری مخ (نسبی)</small></div></div>';
  const c=g("pcv"),x=c.getContext("2d"),R=B.rnd(21),pts=Array.from({length:22},()=>[60+R()*880,40+R()*360]),ed=[];for(let i=0;i<22;i++)for(let j=i+1;j<22;j++){const d=Math.hypot(pts[i][0]-pts[j][0],pts[i][1]-pts[j][1]);if(d<230)ed.push([i,j,R(),d])}
  const draw=()=>{const e=+g("pex").value/100;x.clearRect(0,0,1000,440);const vis=ed.filter(q=>q[2]<.14+e*.86);vis.forEach(q=>{x.strokeStyle=`rgba(190,160,255,${.25+.5*e})`;x.lineWidth=1+e*2;x.beginPath();x.moveTo(...pts[q[0]]);x.lineTo(...pts[q[1]]);x.stroke()});
   pts.forEach((p,i)=>{const k=1+e*.6;x.fillStyle="#ffd166";x.beginPath();x.arc(p[0],p[1],8*k,0,7);x.fill();const n=2+Math.floor(e*6);for(let a=0;a<n;a++){const an=a/n*6.28+i;x.strokeStyle="#ffd16688";x.lineWidth=1.4;x.beginPath();x.moveTo(p[0],p[1]);x.lineTo(p[0]+Math.cos(an)*(18+e*20),p[1]+Math.sin(an)*(18+e*20));x.stroke()}});
   g("psy").textContent=FA(vis.length*3)+" ("+FA(Math.round(vis.length/ed.length*100))+"٪)";g("pth").textContent=FA(Math.round(100+e*18))+"٪";};
  g("pex").oninput=draw;draw();
  L.set("مغز تغییر می‌کند","<p>مغز انسان از حدود ۱۰۰ میلیارد نورون ساخته شده است. مغز یک ماشین برنامه‌ریزی‌شده و غیرقابل‌تغییر نیست: تعداد ارتباطات بین نورون‌ها (سیناپس‌ها) در افراد مختلف و حتی در یک فرد در زمان‌های مختلف متغیر است.</p><p><b>آزمایش:</b> دو موش، یکی در قفس خالی و یکی در قفس پر از وسایل بازی. ضخامت بخش خاکستری مخ حیوانی که در قفس پر از اسباب‌بازی بود، بیشتر شد. نوار «تجربه و تمرین» را بالا ببر تا انشعابات و سیناپس‌ها را بیشتر ببینی.</p><p>مثال‌ها: زبان مادری، یادگیری رانندگی یا نقاشی.</p>","قابلیت تغییرپذیری مغز در بدو تولد و سال‌های اولیهٔ زندگی بسیار بالاست و با افزایش سن کاهش می‌یابد، اگرچه تا پایان عمر وجود دارد.","#b69cff");
 };
 const heal=()=>{
  v.innerHTML='<div class="bctl"><label>تمرین توان‌بخشی <input type="range" id="hex" min="0" max="100" value="0"></label></div><canvas id="hcv" width="1000" height="420" style="width:100%;border-radius:16px;background:#050a15;border:1px solid var(--line)"></canvas><div class="bstat"><div><b id="hrc">—</b><small>بازیابی نسبی عملکرد</small></div></div>';
  const c=g("hcv"),x=c.getContext("2d"),R=B.rnd(9),N=[];for(let i=0;i<30;i++)N.push([60+R()*880,40+R()*340,R()]);
  const dead=n=>n[0]>380&&n[0]<620&&n[1]>120&&n[1]<300;
  const draw=()=>{const e=+g("hex").value/100;x.clearRect(0,0,1000,420);x.fillStyle="#ff3b5c18";x.fillRect(380,120,240,180);x.strokeStyle="#ff3b5c88";x.setLineDash([6,5]);x.strokeRect(380,120,240,180);x.setLineDash([]);x.fillStyle="#ff8aa0";x.font="13px Vazirmatn";x.textAlign="center";x.fillText("ناحیهٔ آسیب‌دیده (مثلاً در سکتهٔ مغزی)",500,110);
   const alive=N.filter(n=>!dead(n)),died=N.filter(dead);
   for(const a of alive)for(const b of alive){if(a<b&&Math.hypot(a[0]-b[0],a[1]-b[1])<190&&(a[0]<380||a[0]>620||b[0]<380||b[0]>620)){x.strokeStyle="#b69cff44";x.beginPath();x.moveTo(a[0],a[1]);x.lineTo(b[0],b[1]);x.stroke()}}
   const left=alive.filter(n=>n[0]<=380),right=alive.filter(n=>n[0]>=620);left.forEach(a=>right.forEach(b=>{if(a[2]+b[2]<2*e&&Math.hypot(a[0]-b[0],a[1]-b[1])<420){x.strokeStyle=`rgba(123,224,165,${.3+.5*e})`;x.lineWidth=2;x.beginPath();x.moveTo(a[0],a[1]);x.quadraticCurveTo(500,50+a[2]*40,b[0],b[1]);x.stroke()}}));
   alive.forEach(n=>{x.fillStyle="#ffd166";x.beginPath();x.arc(n[0],n[1],7,0,7);x.fill()});died.forEach(n=>{x.fillStyle="#555e73";x.beginPath();x.arc(n[0],n[1],7,0,7);x.fill()});
   g("hrc").textContent=FA(Math.round(15+e*70))+"٪"};g("hex").oninput=draw;draw();
  L.set("ترمیم آسیب‌ها","<p>نورون‌ها یاخته‌های تمایزیافته‌ای هستند که دیگر تکثیر نمی‌شوند و جایگزین یاخته‌های ازدست‌رفته نمی‌شوند. با این حال قابلیت تغییرپذیری نقش مهمی در بهبود نسبی پس از آسیب‌های مغزی دارد.</p><p>مثال: در سکتهٔ مغزی ناحیه‌ای که حرکات دست چپ را کنترل می‌کند آسیب می‌بیند و دست فلج می‌شود. در توان‌بخشی توصیه می‌شود فرد تا حد امکان از دست چپ استفاده کند؛ نورون‌های سالم باقی‌مانده با ایجاد ارتباطات جدید به جبران می‌پردازند.</p>","نتیجه: مغز آسیب‌دیده یاخته‌های تازه نمی‌سازد، اما با افزایش انشعابات و سیناپس‌ها ترمیم نسبی انجام می‌دهد.","#b69cff");
 };
 const tips=()=>{
  const T=[["از درس خواندن لذت ببر","وقتی علاقه و هیجان مثبت دارید، بخش‌های دستگاه کناره‌ای (لیمبیک) فعال‌تر می‌شوند و حافظه بهتر ثبت می‌شود؛ مثل داستان فیلم که سال‌ها یادمان می‌ماند."],["جای مناسب انتخاب کن","تمرکز یعنی توجه نورون‌های قشر پیشانی روی یک موضوع؛ حواس‌پرتی اطلاعات را پیش از تبدیل به حافظهٔ بلندمدت قطع می‌کند."],["فقط چیزهای لازم را دم دست بگذار","هر بار که توجه عوض می‌شود، مغز باید دوباره تمرکز بگیرد و اطلاعات کوتاه‌مدت قبلی ممکن است از بین برود."],["کم‌کم و مرتب بخوان","مرور مکرر باعث تقویت سیناپس‌ها و تبدیل حافظهٔ کوتاه‌مدت به بلندمدت می‌شود (منحنی فراموشی را ببین)."],["مطالب بی‌ربط را به هم ربط بده","یادگیری یعنی ایجاد ارتباط‌های جدید بین نورون‌ها؛ هر چه مطالب بیشتر به هم مرتبط شوند، مسیرهای بازیابی بیشتر می‌شود."],["ورزش کن و خوب بخواب","ذهن شاداب بهتر یاد می‌گیرد؛ در خواب اطلاعات روزانه تثبیت می‌شوند (متن تکمیلی)."],["خلاصه بنویس یا برای کسی توضیح بده","فراخوانی فعالانهٔ اطلاعات و بیان آن‌ها با کلمات خودت، ارتباطات عصبی را مستحکم‌تر می‌کند."],["اگر نمی‌توانی، رهایش کن و بعداً برگرد","خستگی و بی‌حوصلگی توجه را کم می‌کند؛ تغییر موضوع به مغز فرصت می‌دهد و بازگشت دوباره، مرور محسوب می‌شود."]];
  v.innerHTML='<div class="bq" style="border-color:#b69cff55"><h4>فوت‌های کوزه‌گری درس خواندن؛ علت علمی هر کدام (پرسش ۵ پایان فصل)</h4><p class="bnote">روی هر مورد کلیک کن تا دلیل علمی‌اش را ببینی.</p></div>'+T.map((t,i)=>`<details class="bcard" style="margin-bottom:8px"><summary style="cursor:pointer;font-weight:700;font-size:14px">${FA(i+1)}. ${t[0]}</summary><p style="margin-top:8px">${t[1]}</p></details>`).join("");
  L.set("از علوم اعصاب برای درس خواندن","<p>مغز برای یادگیری نیاز دارد بین مطالب ارتباط برقرار کند. فوت‌های کتاب با سازوکارهای عصبی حافظه و یادگیری توضیح داده می‌شوند.</p>","","#b69cff");
 };
 B.tabs(g("t6"),["حافظه","تغییرپذیری مغز","ترمیم آسیب","فوت‌های درس خواندن"],i=>[mem,plast,heal,tips][i]());
};

/* ───────── ۸-۷ بیماری‌ها، اعتیاد و ایمنی ───────── */
E["8-7"]=h=>{
 const L=B.layout(h,"#ff6b81");
 L.vis.innerHTML='<div class="btabs" id="t7"></div><div id="v7"></div>';const v=g("v7");
 const ms=()=>{
  v.innerHTML='<div class="bctl"><label>تخریب میلین <input type="range" id="msd" min="0" max="100" value="0"></label><button class="bbtn" id="msg">⚡ ارسال پیام</button></div>';const c=cv(v,1000,300),x=c.getContext("2d");v.insertAdjacentHTML("beforeend",'<div class="bstat"><div><b id="msv">۱۰۰٪</b><small>سرعت نسبی هدایت</small></div><div><b id="msr">۱۰۰٪</b><small>احتمال رسیدن پیام</small></div></div>');
  let t=-1,lost=false;const R=B.rnd(3),dm=Array.from({length:12},()=>R());g("msg").onclick=()=>{t=0;lost=false};
  loop(c,dt=>{const d=+g("msd").value/100,sp=1-d*.85,rel=Math.max(0,1-Math.max(0,d-.3)*1.2);g("msv").textContent=FA(Math.round(sp*100))+"٪";g("msr").textContent=FA(Math.round(rel*100))+"٪";
   if(t>=0){if(t===0)lost=Math.random()>rel;t+=dt*sp*.55;if(t>1){t=-1}}
   x.fillStyle="#050a15";x.fillRect(0,0,1000,300);const y=150;x.fillStyle="#f2c14e";x.fillRect(40,y-6,920,12);
   dm.forEach((q,i)=>{const px=60+i*74,dead=q<d;x.fillStyle=dead?"#6b5a3a":"#f5efd2";const hh=dead?10+q*8:34;x.fillRect(px,y-hh,60,2*hh);if(dead){x.strokeStyle="#ff6b81";x.setLineDash([3,4]);x.strokeRect(px,y-hh,60,2*hh);x.setLineDash([])}});
   if(t>=0){const lim=lost?.55:1,k=Math.min(t,lim),px=40+k*920;x.fillStyle="#ffe27a";x.shadowColor="#ffe27a";x.shadowBlur=18;x.beginPath();x.arc(px,y,11,0,7);x.fill();x.shadowBlur=0;if(lost&&t>.55){x.fillStyle="#ff6b81";x.font="16px Vazirmatn";x.textAlign="center";x.fillText("پیام در مسیر از بین رفت ✕",500,60)}}
   x.fillStyle="#9fb0cf";x.font="13px Vazirmatn";x.textAlign="center";x.fillText("کرم‌رنگ: میلین سالم · قهوه‌ای: میلین تخریب‌شده",500,270)});
  L.set("ام‌اس (MS)","<p>اختلال عملکرد یاخته‌های پشتیبان هم می‌تواند سبب بیماری شود. در بیماری ام‌اس عملکرد گروهی از یاخته‌های پشتیبان سیستم عصبی مرکزی دچار نقصان می‌شود. نتیجه: غلاف میلین تخریب می‌شود و هدایت پیام کند و ناقص می‌شود.</p>","نوار تخریب را بالا ببر و چند بار پیام بفرست.","#ff6b81");
 };
 const nt=()=>{v.innerHTML=`<table class="bt2"><tr><th>علت</th><th>مثال‌ها (کتاب و متن تکمیلی)</th></tr><tr><td><b>مرگ تعدادی از نورون‌ها</b> در مغز یا نخاع</td><td>مثلاً سکتهٔ مغزی یا بیماری آلزایمر (برای فعالیت ۲ کتاب مثال‌های دیگر هم پیدا کن)</td></tr><tr><td><b>کم یا زیاد شدن ناقل‌های عصبی</b> (نوروترانسمیتر)</td><td>پارکینسون، اسکیزوفرنی؛ بسیاری از اختلالات خلقی و روانی مثل افسردگی هم با تغییر ناقل‌ها مرتبط‌اند</td></tr><tr><td><b>اختلال یاخته‌های پشتیبان</b></td><td>ام‌اس</td></tr></table><p class="bnote">با توجه به پیچیدگی سیستم عصبی، هرگونه ناهماهنگی در عملکرد نورون‌ها و حتی یاخته‌های پشتیبان سبب بروز بیماری می‌شود. در برخی بیماری‌ها توانایی‌های حسی و حرکتی مختل می‌شود و در برخی دیگر حالات خلقی و روانی تغییر می‌کند.</p>`;
  L.set("بیماری‌های دستگاه عصبی","<p>نورون‌ها با رهاسازی مواد شیمیایی ناقل (نوروترانسمیتر) پیام تبادل می‌کنند و بسیاری از اعمال بدن را کنترل می‌کنند. کم یا زیاد شدن مقدار این ناقل‌ها سبب بیماری می‌شود.</p>","فعالیت ۱ و ۲ کتاب: دو نمونه بیماری را که به دلیل تغییر ناقل‌ها یا مرگ نورون‌ها رخ می‌دهد پیدا کن و دربارهٔ آن‌ها بحث کنید.","#ff6b81")};
 const ad=()=>{
  v.innerHTML='<div class="bctl"><label>دفعات مصرف <input type="range" id="adu" min="0" max="8" value="0"></label></div><canvas id="adc" width="1000" height="340" style="width:100%;border-radius:16px;background:#050a15;border:1px solid var(--line)"></canvas><div class="bstat"><div><b id="ada">—</b><small>سطح پایهٔ حس خوب (نسبی)</small></div><div><b id="adb">—</b><small>اثر خوشایند مصرف (نسبی)</small></div></div>';
  const x=g("adc").getContext("2d"),draw=()=>{const k=+g("adu").value,base=100-k*7.5,peak=Math.max(base+25,150-k*4),crash=base-k*3;x.clearRect(0,0,1000,340);x.strokeStyle="#ffffff18";for(let i=0;i<5;i++){x.beginPath();x.moveTo(50,30+i*65);x.lineTo(960,30+i*65);x.stroke()}
   x.beginPath();for(let i=0;i<=500;i++){const t=i/500*10;let y=base;if(t>2&&t<2.5)y=base+(peak-base)*(t-2)/.5;else if(t>=2.5&&t<4.2)y=peak-(peak-crash)*(1-Math.exp(-(t-2.5)*1.1))/1;else if(t>=4.2)y=crash+(base-crash)*(1-Math.exp(-(t-4.2)*.4));const py=300-y*1.45;i?x.lineTo(50+i*1.82,py):x.moveTo(50,py)}x.strokeStyle="#ff6b81";x.lineWidth=3;x.stroke();
   x.setLineDash([5,5]);x.strokeStyle="#59d6a3";x.beginPath();x.moveTo(50,300-100*1.45);x.lineTo(960,300-100*1.45);x.stroke();x.setLineDash([]);x.fillStyle="#59d6a3";x.font="12px Vazirmatn";x.textAlign="left";x.fillText("سطح طبیعی",56,300-100*1.45-6);x.fillStyle="#9fb0cf";x.textAlign="center";x.fillText("زمان ←  (مصرف در ثانیهٔ ۲)",500,330);x.save();x.translate(18,170);x.rotate(-Math.PI/2);x.fillText("احساس پاداش و انگیزش (مدل مفهومی)",0,0);x.restore();
   g("ada").textContent=FA(Math.round(base))+"٪";g("adb").textContent=FA(Math.round(peak-base))+"٪"};g("adu").oninput=draw;draw();
  L.set("اعتیاد و وابستگی","<p>اعتیاد یا وابستگی به مواد شیمیایی خاص یکی از بیماری‌های مزمن سیستم عصبی است؛ فرد معتاد مجرم نیست، بیمار است و باید در پی درمان او بود.</p><p>اثرات خوشایند اما زودگذر موادی مثل <b>نیکوتین</b> افراد را به مصرف ترغیب می‌کند. این مواد مدارهای مغزی مرتبط با <b>پاداش، انگیزش و حافظه</b> را تغییر می‌دهند. پس از دفعات اندک فرد احساس وابستگی می‌کند و با ترک، علائم ناخوشایند جسمی و روحی دارد؛ در نتیجه مصرف مکرر ادامه می‌یابد.</p><p>مواد مخدر در انتقال پیام عصبی اختلال ایجاد می‌کنند: ضربان قلب را نامنظم، فشار خون را بالا و گوارش را مختل می‌کنند و باعث خستگی، درد مفاصل و ماهیچه‌ها و رفتارهای غیرطبیعی می‌شوند.</p>","هنوز روش مؤثر و قطعی برای درمان اعتیاد وجود ندارد؛ بهترین راه نخستین‌بار هم مصرف نکردن است. اگر کسی درگیر شده، کمک گرفتن از پزشک یا مشاور نشانهٔ شجاعت است.","#ff6b81");
 };
 const pr=()=>{
  v.innerHTML=`<svg class="bsvg" id="psv" viewBox="0 0 600 440"><g class="hs" data-id="skin"><ellipse cx="300" cy="225" rx="270" ry="205" fill="#d9a07f"/></g><g class="hs" data-id="bone"><ellipse cx="300" cy="225" rx="250" ry="185" fill="#efe6cf"/></g><g class="hs" data-id="mem"><ellipse cx="300" cy="225" rx="232" ry="167" fill="#c18a95"/></g><g class="hs" data-id="csf"><ellipse cx="300" cy="225" rx="216" ry="152" fill="#8fd3ff" opacity=".85"/></g><g class="hs" data-id="brain"><ellipse cx="300" cy="225" rx="196" ry="132" fill="url(#bgr)"/><path d="M180 200q30-30 60 0t60 0 60 0 60 0M190 250q30-26 60 0t60 0 60 0M220 160q40-18 80 0t60 4" fill="none" stroke="#9b4560" stroke-width="3" opacity=".7"/></g><defs><radialGradient id="bgr" cx=".4" cy=".35" r=".8"><stop offset="0" stop-color="#ffc2cc"/><stop offset="1" stop-color="#a94e6b"/></radialGradient></defs><text x="300" y="228" text-anchor="middle" fill="#3a1020" font-size="18" font-weight="700">مغز</text></svg>`;
  const I={skin:["پوست سر","لایهٔ بیرونی و اولین محافظ سر."],bone:["استخوان جمجمه","استخوان‌های جمجمه و ستون مهره‌ها مغز و نخاع را در برابر ضربه محافظت می‌کنند. کلاه ایمنی در برابر شکستن جمجمه کمک می‌کند."],mem:["پردهٔ مننژ","سه پرده از جنس بافت پیوندی، دور مغز و نخاع قرار دارند."],csf:["مایع مغزی–نخاعی","بین پرده‌ها قرار دارد، مثل یک بالشتک ضربه را کم می‌کند و مغز را شناور نگه می‌دارد."],brain:["بافت مغز","مغز با چهار سد محافظ (استخوان، پرده‌ها، مایع مغزی-نخاعی و سد خونی–مغزی) نسبت به بقیه اعضا بسیار محافظت‌شده است. یاخته‌های پوششی مویرگ‌های مغز نمی‌گذارند میکروب، سم و بسیاری از مواد عبور کنند."]};
  const on=B.svgHS(g("psv"),k=>L.set(I[k][0],`<p>${I[k][1]}</p>`,"آسیب دیدن دستگاه عصبی برخلاف بقیهٔ قسمت‌های بدن جبران‌ناپذیر است؛ از کلاه ایمنی و کمربند ایمنی استفاده کن.","#ff6b81"));on("brain");
 };
 B.tabs(g("t7"),["ام‌اس","علت بیماری‌ها","اعتیاد","محافظت از مغز"],i=>[ms,nt,ad,pr][i]());
};
})();

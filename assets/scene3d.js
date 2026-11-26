(()=>{
const S3={},TAU=Math.PI*2;let raf=0;
const mesh=(n,s,f)=>{const Z=[],L=[],X=i=>(i/n-.5)*s;for(let i=0;i<=n;i++){Z[i]=[];for(let j=0;j<=n;j++)Z[i][j]=f(X(i),X(j))}
for(let i=0;i<=n;i++)for(let j=0;j<=n;j++){const c=`hsl(${230+Z[i][j]*45} 85% 66%)`;if(i<n)L.push([X(i),Z[i][j],X(j),X(i+1),Z[i+1][j],X(j),c,1]);if(j<n)L.push([X(i),Z[i][j],X(j),X(i),Z[i][j+1],X(j+1),c,1])}return{l:L,p:[]}};
let ul=null;S3["0-1"]=()=>{if(!ul){ul={l:[],p:[]};for(let x=-30;x<=30;x++)for(let y=-30;y<=30;y++){const n=TM.nOf(x,y);if(TM.isP(n)){ul.l.push([x*.2,0,y*.2,x*.2,1.3,y*.2,"#7f6cf0",1.4]);ul.p.push([x*.2,1.3,y*.2,"#f0bc72",2])}}}return ul};
S3["0-8"]=t=>mesh(24,9,(x,z)=>{const r=Math.hypot(x,z);return Math.sin(r*1.4-t*2)*Math.exp(-r/4.5)*2.2});
S3["2-5"]=t=>mesh(32,11,(x,z)=>{const a=Math.hypot(x+1.8,z),b=Math.hypot(x-1.8,z);return(Math.sin(3*a-t*4)/(1+a*.5)+Math.sin(3*b-t*4)/(1+b*.5))*.9});
S3["0-9"]=t=>{const L=[],P=[],c=1.5,V=[];for(const a of[-1,1])for(const b of[-1,1])for(const d of[-1,1])V.push([a*c-4,b*c,d*c]);V.forEach((p,i)=>V.forEach((q,j)=>{if(j>i&&(Math.abs(p[0]-q[0])+Math.abs(p[1]-q[1])+Math.abs(p[2]-q[2])===2*c))L.push([...p,...q,"#51d5e8",1.6])}));
for(let k=0;k<7;k++){const y=-2+k*4/6,r=Math.sqrt(Math.max(0,4-y*y));for(let i=0;i<24;i++){const a=i/24*TAU,b=(i+1)/24*TAU;L.push([3+r*Math.cos(a),y,r*Math.sin(a),3+r*Math.cos(b),y,r*Math.sin(b),"#a99aff",1.2])}}
for(let m=0;m<8;m++){const a=m/8*Math.PI;for(let i=0;i<24;i++){const u=i/24*TAU,v=(i+1)/24*TAU;L.push([3+2*Math.cos(u)*Math.cos(a),2*Math.sin(u),2*Math.cos(u)*Math.sin(a),3+2*Math.cos(v)*Math.cos(a),2*Math.sin(v),2*Math.cos(v)*Math.sin(a),"#a99aff",1.2])}}return{l:L,p:P}};
S3["2-0"]=t=>{const L=[],P=[],pt=s=>[(s-.5)*12,6*s*(1-s)*1.8,(s-.5)*2.2];let o=pt(0);for(let i=1;i<=40;i++){const q=pt(i/40);L.push([...o,...q,"#a99aff",2.2]);L.push([o[0],0,o[2],q[0],0,q[2],"#3a4a6e",1.2]);o=q}
for(let i=-6;i<=6;i+=2){L.push([i,0,-3,i,0,3,"#1c2a44",1]);L.push([-6,0,i/2,6,0,i/2,"#1c2a44",1])}const b=pt((t*.22)%1);P.push([...b,"#f0bc72",9],[b[0],0,b[2],"#3a4a6e",5]);return{l:L,p:P}};
S3["2-1"]=t=>{const L=[],P=[],a=4,e=.55,inc=.5;const at=(M,i)=>{let E=M;for(let k=0;k<7;k++)E-=(E-e*Math.sin(E)-M)/(1-e*Math.cos(E));const x=a*(Math.cos(E)-e),z=a*Math.sqrt(1-e*e)*Math.sin(E);return[x,z*Math.sin(i),z*Math.cos(i)]};
for(const i of[inc,-.4]){let o=at(0,i);for(let k=1;k<=60;k++){const q=at(k/60*TAU,i);L.push([...o,...q,"#4a5a8c",1.2]);o=q}}P.push([-a*e,0,0,"#ffd76a",14],[...at(t*1.1,inc),"#5ab0ff",8],[...at(t*.7+2,-.4),"#e2735a",6]);return{l:L,p:P}};
const dip=(c1,c2)=>{let cache=null;return()=>{if(cache)return cache;const L=[],P=[],pole=(x)=>[x,0],B=(x,y)=>{let bx=0,by=0;[[1.3,1],[-1.3,-1]].forEach(([px,q])=>{const dx=x-px,dy=y,r2=dx*dx+dy*dy+.01,k=q/(r2*Math.sqrt(r2));bx+=k*dx;by+=k*dy});return[bx,by]};
for(let k=0;k<7;k++){const a0=(k+.5)/7*Math.PI*2;let x=1.3+.25*Math.cos(a0),y=.25*Math.sin(a0);const pts=[[x,y]];for(let i=0;i<260;i++){const[bx,by]=B(x,y),m=Math.hypot(bx,by);x+=bx/m*.06;y+=by/m*.06;pts.push([x,y]);if(Math.hypot(x+1.3,y)<.2||Math.abs(x)>9||Math.abs(y)>9)break}
for(let r=0;r<6;r++){const an=r/6*TAU,ca=Math.cos(an),sa=Math.sin(an);for(let i=1;i<pts.length;i++)L.push([pts[i-1][0],pts[i-1][1]*ca,pts[i-1][1]*sa,pts[i][0],pts[i][1]*ca,pts[i][1]*sa,k%2?c1:c2,1.2])}}
P.push([1.3,0,0,"#ff4d63",12],[-1.3,0,0,"#4d7bff",12]);return cache={l:L,p:P}}};
S3["2-6"]=dip("#d8d2ff","#9fb4ff");S3["2-7"]=dip("#ffb3a6","#8fe0e6");
S3["2-8"]=t=>{const L=[],P=[],h=th=>[2*Math.cos(th),th*.32-4,2*Math.sin(th)];let o=h(0);for(let i=1;i<=120;i++){const q=h(i/120*TAU*2.4);L.push([...o,...q,"#a99aff",2.2]);o=q}
for(let x=-3;x<=3;x+=1.5)for(let z=-3;z<=3;z+=1.5)L.push([x,-4.5,z,x,4.6,z,"#25324f",1]);const b=h((t*1.6)%(TAU*2.4));P.push([...b,"#ff6b81",9]);return{l:L,p:P}};
TIA.d3=(c,key)=>{cancelAnimationFrame(raf);const f=S3[key],x=c.getContext("2d");let yaw=.7,pit=.45,zm=1,dr=null,auto=true,t=0;if(!f)return;
c.onpointerdown=e=>{dr=[e.clientX,e.clientY];auto=false;c.setPointerCapture(e.pointerId)};c.onpointerup=()=>dr=null;c.onpointermove=e=>{if(dr){yaw+=(e.clientX-dr[0])*.008;pit=Math.max(-1.4,Math.min(1.4,pit+(e.clientY-dr[1])*.008));dr=[e.clientX,e.clientY]}};
c.addEventListener("wheel",e=>{e.preventDefault();zm=Math.max(.4,Math.min(3,zm*(e.deltaY<0?1.1:.91)))},{passive:false});c.ondblclick=()=>auto=true;
const pr=(X,Y,Z)=>{const a=X*Math.cos(yaw)-Z*Math.sin(yaw),b=X*Math.sin(yaw)+Z*Math.cos(yaw),y2=Y*Math.cos(pit)-b*Math.sin(pit),z2=Y*Math.sin(pit)+b*Math.cos(pit),k=520*zm/(14+z2);return[500+a*k,230-y2*k,z2,k]};
const fr=n=>{if(!c.isConnected)return;if(c.offsetParent){t+=.016;if(auto)yaw+=.006;const s=f(t),it=[];x.fillStyle="#070c18";x.fillRect(0,0,1000,460);
s.l.forEach(l=>{const a=pr(l[0],l[1],l[2]),b=pr(l[3],l[4],l[5]);it.push([(a[2]+b[2])/2,0,a,b,l[6],l[7]])});s.p.forEach(p=>{const a=pr(p[0],p[1],p[2]);it.push([a[2],1,a,null,p[3],p[4]])});it.sort((u,v)=>v[0]-u[0]);
for(const q of it){if(q[1]){x.fillStyle=q[4];x.shadowColor=q[4];x.shadowBlur=10;x.beginPath();x.arc(q[2][0],q[2][1],q[5]*q[2][3]/38,0,7);x.fill();x.shadowBlur=0}else{x.strokeStyle=q[4];x.lineWidth=q[5];x.beginPath();x.moveTo(q[2][0],q[2][1]);x.lineTo(q[3][0],q[3][1]);x.stroke()}}}raf=requestAnimationFrame(fr)};raf=requestAnimationFrame(fr)};
TIA.scn=k=>S3[k];TIA.reg=(k,f)=>{S3[k]=f};TIA.mesh=mesh;TIA.has3d=k=>!!S3[k];
})();

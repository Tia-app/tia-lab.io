(function(g){
const P=[];{const s=new Uint8Array(31700);for(let i=2;i<31700;i++)if(!s[i]){P.push(i);for(let j=i*i;j<31700;j+=i)s[j]=1}}
const isP=n=>{if(n<2)return false;for(const p of P){if(p*p>n)return true;if(n%p===0)return n===p}return true};
const mp=(b,e,m)=>{let r=1n;b%=m;while(e>0n){if(e&1n)r=r*b%m;b=b*b%m;e>>=1n}return r};
const BS=[2n,3n,5n,7n,11n,13n,17n,19n,23n,29n,31n,37n];
const bp=n=>{if(n<2n)return false;for(const p of BS){if(n===p)return true;if(n%p===0n)return false}let d=n-1n,s=0;while(!(d&1n)){d>>=1n;s++}
for(const a of BS){let x=mp(a,d,n);if(x===1n||x===n-1n)continue;let ok=false;for(let i=1;i<s;i++){x=x*x%n;if(x===n-1n){ok=true;break}}if(!ok)return false}return true};
const gcd=(a,b)=>{while(b){[a,b]=[b,a%b]}return a};
let it=0;
const rho=n=>{if(n%2n===0n)return 2n;for(let c=1n;;c++){let x=2n,y=2n,d=1n;const f=v=>(v*v+c)%n;while(d===1n){if(++it>3e6)throw Error("HARD");x=f(x);y=f(f(y));d=gcd(x>y?x-y:y-x,n)}if(d!==n)return d}};
const fr=(n,o)=>{if(n<2n)return;for(const p of [2n,3n,5n,7n,11n,13n,17n,19n,23n]){while(n%p===0n){o.push(p);n/=p}}if(n===1n)return;if(n<1000000n*1000000n&&n<(1n<<52n)){let m=Number(n);for(let p=29;p*p<=m;p+=2)while(m%p===0){o.push(BigInt(p));m/=p}if(m>1)o.push(BigInt(m));return}
if(bp(n)){o.push(n);return}const d=rho(n);fr(d,o);fr(n/d,o)};
const fac=n=>{it=0;const o=[];fr(n,o);return o.sort((a,b)=>a<b?-1:a>b?1:0)};
async function cnt(N,prog,stop){const r=Math.floor(Math.sqrt(N)),sp=[];{const s=new Uint8Array(r+2);for(let i=2;i<=r;i++)if(!s[i]){sp.push(i);for(let j=i*i;j<=r;j+=i)s[j]=1}}
let c=N>=2?1:0;const SZ=1<<20;for(let lo=3;lo<=N;lo+=2*SZ){const hi=Math.min(N,lo+2*SZ-2),m=((hi-lo)>>1)+1,b=new Uint8Array(m);
for(const p of sp){if(p===2)continue;if(p*p>hi)break;let s=Math.max(p*p,Math.ceil(lo/p)*p);if(s%2===0)s+=p;for(let j=(s-lo)>>1;j<m;j+=p)b[j]=1}
for(let i=0;i<m;i++)if(!b[i])c++;if(stop&&stop.v)return null;prog&&prog(Math.min(1,lo/N));await new Promise(r=>setTimeout(r))}return c}
const nOf=(x,y)=>{const k=Math.max(Math.abs(x),Math.abs(y));if(!k)return 1;const m=(2*k+1)**2;if(x===k&&y>-k)return m-8*k+(y+k);if(y===k)return m-6*k+(k-x);if(x===-k)return m-4*k+(k-y);return m-2*k+(x+k)};
const inv=n=>{if(n<2)return[0,0];const k=Math.ceil((Math.sqrt(n)-1)/2),t=(2*k+1)**2-n;if(t<=2*k)return[k-t,-k];if(t<=4*k)return[-k,t-3*k];if(t<=6*k)return[t-5*k,k];return[k,7*k-t]};
const compile=s=>{let t=s.toLowerCase().replace(/\^/g,"**").replace(/π/g,"pi");
if(!/^(?:[0-9x+\-*/().,\s]|asin|acos|atan|sinh|cosh|tanh|sin|cos|tan|exp|ln|log|sqrt|abs|floor|ceil|round|pi|e)*$/.test(t))throw Error("عبارت نامعتبر است");
t=t.replace(/(\d|\))\s*(?=[a-df-z(])/g,"$1*").replace(/\b(asin|acos|atan|sinh|cosh|tanh|sin|cos|tan|exp|sqrt|abs|floor|ceil|round)\b/g,"Math.$1").replace(/\bln\b/g,"Math.log").replace(/\blog\b/g,"Math.log10").replace(/\bpi\b/g,"Math.PI").replace(/\be\b/g,"Math.E");
return new Function("x","return "+t)};
const T={P,isP,bp,fac,cnt,nOf,inv,compile};
if(typeof module!=="undefined")module.exports=T;else g.TM=T})(this);

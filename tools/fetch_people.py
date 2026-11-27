"""دانلود عکس دانشمندان از ویکی‌پدیا و ذخیره در assets/people/<کلید>.jpg
اجرا (با اینترنت):  python tools/fetch_people.py
اگر عکسی دانلود نشود، سایت خودش از نسخهٔ آنلاین ویکی‌پدیا یا آواتار پیش‌فرض استفاده می‌کند."""
import json,os,re,urllib.request,urllib.parse
R=os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
t=open(os.path.join(R,"assets/people.js"),encoding="utf8").read()
S=json.loads(t.split("window.SCI=")[1].split(";\nwindow.SCI_GROUPS")[0])
H={"User-Agent":"TiaLab/1.0 (educational)"}
for k,v in S.items():
    try:
        u="https://en.wikipedia.org/api/rest_v1/page/summary/"+urllib.parse.quote(v["w"])
        j=json.load(urllib.request.urlopen(urllib.request.Request(u,headers=H),timeout=20))
        src=(j.get("originalimage") or j.get("thumbnail") or {}).get("source")
        th=j.get("thumbnail",{}).get("source")
        src=re.sub(r"/\d+px-","/400px-",th) if th else src
        if not src: print("بدون عکس:",k);continue
        open(os.path.join(R,"assets/people",k+".jpg"),"wb").write(urllib.request.urlopen(urllib.request.Request(src,headers=H),timeout=30).read())
        print("ok",k)
    except Exception as e: print("خطا",k,e)

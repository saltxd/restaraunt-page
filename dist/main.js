(()=>{"use strict";!function(){const e=document.createElement("div");e.id="content",document.body.appendChild(e);const t=document.createElement("div");t.id="menu",e.appendChild(t);const n=document.createElement("ul");t.appendChild(n);for(const e of["Appetizers","Salads","Sandwiches","Pizza","Entrees","Desserts"]){const t=document.createElement("li");t.textContent=e,n.appendChild(t)}const d=document.createElement("div");d.id="photos",e.appendChild(d);for(const e of["burger.jpg","pizza.jpg","salad.jpg"]){const t=document.createElement("img");t.src=`/Users/marley/repos/restaraunt-page/src/img/${e}`,d.appendChild(t)}const c=document.createElement("div");c.id="contactForm",e.appendChild(c);const a=document.createElement("form");a.action="/contact",a.method="post";const o=document.createElement("input");o.type="text",o.name="name",o.placeholder="Your Name",a.appendChild(o);const i=document.createElement("input");i.type="email",i.name="email",i.placeholder="Your Email",a.appendChild(i);const m=document.createElement("textarea");m.name="message",m.placeholder="Your Message",a.appendChild(m);const p=document.createElement("input");p.type="submit",p.value="Submit",a.appendChild(p),c.appendChild(a);const l=document.createElement("div");l.id="contact-tab",l.textContent="Contact";const r=document.createElement("div");r.id="menu-tab",r.textContent="Menu",t.appendChild(l),t.appendChild(r);const s=document.getElementById("content");l.addEventListener("click",(()=>{s.innerHTML="";const e=document.createElement("div");s.appendChild(e)})),r.addEventListener("click",(()=>{s.innerHTML="";const e=document.createElement("div");s.appendChild(e)}))}()})();
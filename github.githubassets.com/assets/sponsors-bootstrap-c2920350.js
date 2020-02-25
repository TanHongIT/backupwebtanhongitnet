self.System=self.System||(()=>{const t={},e={},s=t=>t.replace(/^.\/(\w+)-[a-f0-9]{8,}.js$/,"./$1.js"),n=window.customElements?Promise.resolve():new Promise((t,e)=>{const s=document.getElementById("js-conditional-compat");if(!(s instanceof HTMLScriptElement))return e(new Error("unable to load compat.js"));const n=setTimeout(()=>{e(new Error("timed out loading compat.js"))},1e4);s.onload=()=>{clearTimeout(n),t()},s.onerror=()=>{clearTimeout(n),e(new Error("network error loading compat.js"))},s.src=s.getAttribute("data-src")||"",s.removeAttribute("data-src")}),o={register(i,r){const a=s(`./${((document.currentScript||{}).src||"").split("?").shift().split("/").pop()}`),c={},l=r((t,e)=>e?c[t]=e:Object.assign(c,t),o),d=i.map((t,e)=>o.import(s(t)).then(l.setters[e]));d.unshift(n),t[a]=Promise.all(d).then(()=>(l.execute(),c)).catch(t=>{throw t.message=`evaluating module ${a}: ${t.message}`,t}),e[a]&&(e[a](t[a]),delete e[a])},import:s=>t[s]||(t[s]=new Promise((t,n)=>{const o=setTimeout(()=>{n(new Error(`could not resolve ${s}`))},1e4);e[s]=e=>{clearTimeout(o),t(e)}}))};return o})(),System.register(["./frameworks.js","./vendor.js"],(function(){"use strict";var t,e,s,n,o,i,r,a,c,l,d,p,u,h;return{setters:[function(p){t=p.g,e=p.d,s=p.q,n=p.a,o=p.az,i=p.a3,r=p.at,a=p.B,c=p.c,l=p.ar,d=p.k},function(t){p=t.o,u=t.a,h=t.f}],execute:function(){async function m({currentTarget:e}){const o=s(e,".js-sponsors-meet-team-selection-list");if(!o)return;await a();const i=n(o,"input[type=checkbox]",HTMLInputElement),r=i.filter(t=>t.checked).length,l=parseInt(t(o,"data-meet-the-team-limit"),10);for(const t of i)t.disabled=r===l&&!t.checked;const d=c(o,".js-sponsors-dashboard-profile-form",HTMLFormElement),p=s(d,".js-sponsors-meet-team-remaining"),u=l-r;p.textContent=`${u} remaining`,p.classList.toggle("text-red",u<1)}p("click",".js-refresh-featured-accounts",(function({currentTarget:n}){!async function(t){const n=await e(document,t);s(document,".js-featured-accounts").replaceWith(n)}(t(n,"data-url"))})),p("change",".js-waitlist-countries-select",({currentTarget:e})=>{if(!(e instanceof HTMLSelectElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:8");!function(e){const n=e.parentElement;if(!(n instanceof HTMLElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:37");const o=s(n,".js-waitlist-country-unsupported-warning"),i=e.selectedOptions[0].closest("optgroup");if(!(i instanceof HTMLOptGroupElement))return;const r=t(e,"data-supported-key");o.hidden=i.label===r}(e)}),p("change",".js-waitlist-fiscal-host-select",({currentTarget:t})=>{if(!(t instanceof HTMLSelectElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:13");!function(t){const e=s(document,".js-sponsors-other-fiscal-host-inputs");if(!(e instanceof HTMLDivElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:55");e.hidden="other"!==t.selectedOptions[0].value}(t)}),p("change",".js-sponsors-required-input-trigger",({currentTarget:t})=>{if(!(t instanceof HTMLInputElement||t instanceof HTMLSelectElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:18");if(""===t.value)return;const e=n(document,".js-sponsors-required-input-target");for(const s of e){if(!(s instanceof HTMLInputElement||s instanceof HTMLSelectElement))throw new Error("invariant: app/assets/modules/github/sponsors/waitlist.js:23");const e=s.getAttribute("data-sponsors-trigger-values");e&&(s.required=e.includes(t.value))}}),u(".js-loading-stripe-account-details",{add(e){!async function(t){const e=await i(t),n=r(document,await e.text());s(document,".js-stripe-onboarding-container").replaceWith(n)}(t(e,"data-url"))}}),p("change",".js-sponsors-dashboard-profile-form",m),p("reset",".js-sponsors-dashboard-profile-form",m),u(".js-sponsors-meet-team-reorder-list",(function(t){o.create(t,{animation:150,item:".js-sponsors-meet-team-item",handle:".js-sponsors-meet-team-reorder-handle",chosenClass:"is-dragging"})}));const f=Math.random,g=Math.cos,w=Math.sin,j=Math.PI,v=2*j;let E,b;const y=[],T=["#6a737d","#0366d6","#28a745","#ffd33d","#f66a0a","#6f42c1","#ea4aaa"];function L(){const t=Math.floor(Math.random()*T.length);return T[t]}const M=document.createElement("div");function x(t){this.frame=0,this.outer=document.createElement("div"),this.inner=document.createElement("div"),this.outer.appendChild(this.inner);const e=this.outer.style,s=this.inner.style;e.position="absolute",e.width=`${3+9*f()}px`,e.height=`${3+9*f()}px`,s.width="100%",s.height="100%",s.backgroundColor=t(),e.perspective="50px",e.transform=`rotate(${360*f()}deg)`,this.theta=360*f(),this.axis=`rotate3D(${g(360*f())},${g(360*f())},0,`,s.transform=`${this.axis}${this.theta}deg)`,this.dTheta=.4+(.7-.4)*f(),this.x=window.innerWidth*f(),this.y=-100,this.dx=w(.2*f()-.1),this.dy=.13+.18*f(),e.left=`${this.x}px`,e.top=`${this.y}px`,this.splineX=function(){const t=[.1,.9];let e=.8;const s=[0,1];for(;e;){let n,o,i,r,a,c=e*f();for(n=0,o=t.length,e=0;n<o;n+=2){if(r=t[n],a=t[n+1],i=a-r,c<e+i){const t=c+r-e;s.push(t),c=t;break}e+=i}const l=c-.1,d=c+.1;for(n=t.length-1;n>0;n-=2)o=n-1,r=t[o],a=t[n],r>=l&&r<d?a>d?t[o]=d:t.splice(o,2):r<l&&a>l&&(a<=d?t[n]=l:t.splice(n,0,l,d));for(n=0,o=t.length,e=0;n<o;n+=2)e+=t[n+1]-t[n]}return s.sort()}(),this.splineY=[];const n=this.splineX.length-1;for(let o=1;o<n;++o)this.splineY[o]=100*f();this.splineY[0]=this.splineY[n]=100*f(),this.update=function(t,n){this.frame+=n,this.x+=this.dx*n,this.y+=this.dy*n,this.theta+=this.dTheta*n;let o=this.frame%7777/7777,i=0,r=1;for(;o>=this.splineX[r];)i=r++;const a=(c=this.splineY[i],l=this.splineY[r],d=(o-this.splineX[i])/(this.splineX[r]-this.splineX[i]),(1-g(j*d))/2*(l-c)+c);var c,l,d;return o*=v,s.transform=`${this.axis}${this.theta}deg)`,e.left=`${this.x+a*g(o)}px`,e.top=`${this.y+a*w(o)}px`,this.y>t+100}}function $(e,n){const o=s(document,".js-sponsorship-billing-details"),i=new URL(t(o,"src"),window.location.origin),r=new URLSearchParams(i.search),a=r.get("return_to")||"",c=new URL(a,window.location.origin);let l=new URLSearchParams(window.location.search).get("tier_id");if(!l){l=new URLSearchParams(c.search).get("tier_id")}let d=new URLSearchParams(window.location.search).get("editing")||"";if(!d){d=new URLSearchParams(c.search).get("editing")||""}const p=new URLSearchParams;p.set("privacy_level",e),p.set("email_opt_in",n),p.set("tier_id",l||""),p.set("editing",d||"");const u=`${c.pathname}?${p.toString()}`,h=encodeURIComponent(u);r.set("return_to",c.toString()),o.setAttribute("src",`${i.pathname}?return_to=${h}`)}M.style.position="fixed",M.style.top="0",M.style.left="0",M.style.width="100%",M.style.height="0",M.style.overflow="visible",M.style.zIndex="9999",p("change",".js-sponsorship-privacy-level",(function(t){if(!(t.target instanceof HTMLInputElement))throw new Error("invariant: app/assets/modules/github/sponsorships/new.js:56");const e=t.target.value,n=s(document,".js-sponsorship-email-opt-in",HTMLInputElement).checked?"on":"off",o=s(document,".js-sponsorship-submit",HTMLButtonElement);o.disabled=!1,o.classList.remove("tooltipped","tooltipped-s","tooltipped-no-delay"),$(e,n)})),p("change",".js-sponsorship-email-opt-in",(function(t){if(!(t.target instanceof HTMLInputElement))throw new Error("invariant: app/assets/modules/github/sponsorships/new.js:70");const e=t.target.checked?"on":"off",o=n(document,".js-sponsorship-privacy-level",HTMLInputElement).find(t=>t.checked),i=o?o.value:"PUBLIC",r=s(document,".js-sponsorship-submit",HTMLButtonElement);r.disabled=!1,r.classList.remove("tooltipped","tooltipped-s","tooltipped-no-delay"),$(i,e)})),u(".js-show-confetti-party",(function(t){!function(t){const e=null==t?5e3:t;if(!b){if(!document.body)throw new Error("invariant: app/assets/modules/github/sponsorships/confetti.js:177");document.body.appendChild(M);const t=()=>{const e=new x(L);y.push(e),M.appendChild(e.outer),E=setTimeout(t,40*f())};let s;t();const n=t=>{const e=s?t-s:0;s=t;const o=window.innerHeight;for(let s=y.length-1;s>=0;--s)y[s].update(o,e)&&(M.removeChild(y[s].outer),y.splice(s,1));if(E||y.length)b=requestAnimationFrame(n);else{if(!document.body)throw new Error("invariant: app/assets/modules/github/sponsorships/confetti.js:207");document.body.removeChild(M),b=void 0}};setTimeout((function(){clearTimeout(E),E=null}),e),requestAnimationFrame(n)}}();const e=t.getAttribute("data-dismiss-url");if(e){const n=s(t,".js-data-dismiss-url-csrf",HTMLInputElement),o=l(e,n.value,{method:"POST"});d(o)}})),u(".js-tier-shared-parent auto-check.js-tier-pricing-check",t=>{const e=c(t,".js-tier-shared-parent"),n=s(e,".js-publish-tier-button",HTMLButtonElement);t.addEventListener("error",()=>n.disabled=!0),t.addEventListener("load",()=>n.disabled=!1),h(s(t,"input",HTMLInputElement),"input")}),p("change",'.js-sponsors-newsletter-tiers input[type="checkbox"]',(function(t){const e=c(t.currentTarget,".js-sponsors-newsletter-tiers"),n=s(e,".js-sponsors-newsletter-tiers-default"),o=s(e,".js-sponsors-newsletter-tiers-count"),i="0"===s(e,"[data-check-all-count]").textContent;n.hidden=!i,o.hidden=i})),u(".js-fetch-stripe-details",{add(s){!async function(t,s){const n=await e(document,s);t.replaceWith(n)}(s,t(s,"data-url"))}})}}}));
//# sourceMappingURL=sponsors-bootstrap-f4bfa617.js.map
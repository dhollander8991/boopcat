/* Qwik Service Worker */
const appBundles=[["q-06da3030.js",[4]],["q-075227a3.js",[4],["mQ7y5XEx60w"]],["q-0e919e14.js",[4,14],["nd8yk3KO22c"]],["q-12dd08d7.js",[4,14],["ceU05TscGYE","gBobRchkfhs"]],["q-17230eb3.js",[]],["q-1d4e3858.js",[]],["q-24f8c7b0.js",[4]],["q-37628f6e.js",[4]],["q-37858bed.js",[4]],["q-38961890.js",[4]],["q-51cd7fe8.js",[4,14],["hA9UPaY8sNQ","mYsiJcA4IBc","skxgNVWVOT8","uVE5iM9H73c"]],["q-5222dc77.js",[4,14],["AaAlzKH0KlQ","z1nvHyEppoI"]],["q-764dcfe9.js",[4],["xYL1qOwPyDI"]],["q-809d3274.js",[4]],["q-84e21e51.js",[4],["3sccYCDd1Z0","hO3b5j0m2ZI"]],["q-8868bcd1.js",[4],["3lb9EjxI5sA"]],["q-93200eca.js",[4],["9IgPNJsxq0g"]],["q-a9e35131.js",[4],["85uZgSaYN0o","MMwagSg0q0w","zGbxZxB0ChI"]],["q-c36e04bf.js",[4],["0RuWJF374SY"]],["q-c531f856.js",[4],["b0SQY3LG6ZU"]],["q-cb65d0d5.js",[4]],["q-cc90497b.js",[4],["GiJ02h11k2o"]],["q-d399a1d1.js",[4]],["q-e1e9373a.js",[4]],["q-e4006b4c.js",[4],["VkLNXphUh5s"]],["q-e970d756.js",[4]],["q-f3724516.js",[4]]];
const libraryBundleIds=[9];
const linkBundles=[[/^\/$/,[7,24,26,12]],[/^\/about\/?$/,[7,24,8,16]],[/^\/articles\/?$/,[7,24,6,21]],[/^\/blog\/?$/,[7,24,22,18]],[/^\/gallery\/?$/,[7,24,25,17]],[/^\/support\/?$/,[7,24,13,1]],[/^\/videos\/?$/,[7,24,20,19]]];
const m="QwikBuild",k=new Set,g=new Map,u=[],E=(e,n)=>n.filter(s=>!e.some(i=>s.endsWith(i[0]))),q=(e,n)=>!!n&&!v(e)&&!v(n),v=e=>{const n=e.headers.get("Cache-Control")||"";return n.includes("no-cache")||n.includes("max-age=0")},C=(e,n)=>e.some(s=>n.endsWith("/"+s[0])),U=(e,n)=>e.find(s=>s[0]===n),b=(e,n)=>n.map(s=>e[s]?e[s][0]:null),W=(e,n)=>n.map(s=>e.get(s)).filter(s=>s!=null),p=e=>{const n=new Map;for(const s of e){const i=s[2];if(i)for(const c of i)n.set(c,s[0])}return n},A=(e,n,s,i)=>new Promise((c,h)=>{const t=i.url,r=s.get(t);if(r)r.push([c,h]);else{const o=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d]of a)d(l.clone())}else c(l.clone())},f=l=>{const a=s.get(t);if(a){s.delete(t);for(const[d,L]of a)L(l)}else h(l)};s.set(t,[[c,h]]),e.match(t).then(l=>{if(q(i,l))o(l);else return n(i).then(async a=>{a.ok&&await e.put(t,a.clone()),o(a)})}).catch(l=>e.match(t).then(a=>{a?o(a):f(l)}))}}),y=(e,n,s,i,c,h=!1)=>{const t=()=>{for(;u.length>0&&g.size<6;){const o=u.shift(),f=new Request(o);k.has(o)?t():(k.add(o),A(n,s,g,f).finally(t))}},r=o=>{try{const f=U(e,o);if(f){const l=b(e,f[1]),a=new URL(o,i).href,d=u.indexOf(a);d>-1?h&&(u.splice(d,1),u.unshift(a)):h?u.unshift(a):u.push(a),l.forEach(r)}}catch(f){console.error(f)}};Array.isArray(c)&&c.forEach(r),t()},w=(e,n,s,i,c,h,t)=>{try{y(e,i,c,h,b(e,n))}catch(r){console.error(r)}for(const r of t)try{for(const o of s){const[f,l]=o;if(f.test(r)){y(e,i,c,h,b(e,l));break}}}catch(o){console.error(o)}},B=(e,n,s,i)=>{try{const c=i.href.split("/"),h=c[c.length-1];c[c.length-1]="";const t=new URL(c.join("/"));y(e,n,s,t,[h],!0)}catch(c){console.error(c)}},N=(e,n,s,i)=>{const c=e.fetch.bind(e),h=p(n);e.addEventListener("fetch",t=>{const r=t.request;if(r.method==="GET"){const o=new URL(r.url);C(n,o.pathname)&&t.respondWith(e.caches.open(m).then(f=>(B(n,f,c,o),A(f,c,g,r))))}}),e.addEventListener("message",async({data:t})=>{if(t.type==="qprefetch"&&typeof t.base=="string"){const r=await e.caches.open(m),o=new URL(t.base,e.origin);Array.isArray(t.links)&&w(n,s,i,r,c,o,t.links),Array.isArray(t.bundles)&&y(n,r,c,o,t.bundles),Array.isArray(t.symbols)&&y(n,r,c,o,W(h,t.symbols))}}),e.addEventListener("activate",async()=>{try{const t=await e.caches.open(m),o=(await t.keys()).map(l=>l.url),f=E(n,o);await Promise.all(f.map(l=>t.delete(l)))}catch(t){console.error(t)}})},x=()=>{typeof self<"u"&&typeof appBundles<"u"&&N(self,appBundles,libraryBundleIds,linkBundles)};x();addEventListener("install",()=>self.skipWaiting());addEventListener("activate",()=>self.clients.claim());

import{r as qe,s as Z,n as Y,y as _e,c as R,z as Ve}from"../chunks/scheduler.CmBPV69w.js";import{n as q,S as x,i as ee,e as P,s as I,H as te,c as N,a as L,f as O,A as le,d as c,l as b,g as B,h as _,t as T,b as D,j as J,p as F,u as ue,q as ce,o as H,B as ye,w as ne,x as ie,y as ae,z as re,C as fe,k as me}from"../chunks/index.C206BIJR.js";import{p as Fe,s as ze,a as Ge,t as He,b as pe,c as Re,n as Je,i as de}from"../chunks/functions.G5thaysK.js";import{b as se}from"../chunks/entry.dXm3oQN-.js";function W(i){return(i==null?void 0:i.length)!==void 0?i:Array.from(i)}function Ke(i,e){i.d(1),e.delete(i.key)}function Qe(i,e,l,t,n,s,a,r,f,o,m,d){let h=i.length,v=s.length,w=h;const k={};for(;w--;)k[i[w].key]=w;const E=[],S=new Map,u=new Map,g=[];for(w=v;w--;){const A=d(n,s,w),C=l(A);let p=a.get(C);p?g.push(()=>p.p(A,e)):(p=o(C,A),p.c()),S.set(C,E[w]=p),C in k&&u.set(C,Math.abs(w-k[C]))}const z=new Set,G=new Set;function K(A){q(A,1),A.m(r,m),a.set(A.key,A),m=A.first,v--}for(;h&&v;){const A=E[v-1],C=i[h-1],p=A.key,Q=C.key;A===C?(m=A.first,h--,v--):S.has(Q)?!a.has(p)||z.has(p)?K(A):G.has(Q)?h--:u.get(p)>u.get(Q)?(G.add(p),K(A)):(z.add(Q),h--):(f(C,a),h--)}for(;h--;){const A=i[h];S.has(A.key)||f(A,a)}for(;v;)K(E[v-1]);return qe(g),E}function ge(i,e,l){const t=i.slice();return t[1]=e[l],t}function be(i){let e,l=[],t=new Map,n=W(i[0].media.split(","));const s=a=>a[1];for(let a=0;a<n.length;a+=1){let r=ge(i,n,a),f=s(r);t.set(f,l[a]=ve(f,r))}return{c(){e=P("span");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=N(a,"SPAN",{class:!0});var r=L(e);for(let f=0;f<l.length;f+=1)l[f].l(r);r.forEach(c),this.h()},h(){b(e,"class","media")},m(a,r){B(a,e,r);for(let f=0;f<l.length;f+=1)l[f]&&l[f].m(e,null)},p(a,r){r&1&&(n=W(a[0].media.split(",")),l=Qe(l,r,s,1,a,n,t,e,Ke,ve,null,ge))},d(a){a&&c(e);for(let r=0;r<l.length;r+=1)l[r].d()}}}function ve(i,e){let l,t,n,s,a;return{key:i,first:null,c(){l=P("a"),t=P("img"),this.h()},l(r){l=N(r,"A",{href:!0,target:!0});var f=L(l);t=N(f,"IMG",{src:!0,alt:!0}),f.forEach(c),this.h()},h(){_e(t.src,n=se+"/assets/img_t/"+e[1]+".png")||b(t,"src",n),b(t,"alt",s=e[0].name+" media"),b(l,"href",a=se+"/assets/img/"+e[1]+".png"),b(l,"target","_blank"),this.first=l},m(r,f){B(r,l,f),_(l,t)},p(r,f){e=r,f&1&&!_e(t.src,n=se+"/assets/img_t/"+e[1]+".png")&&b(t,"src",n),f&1&&s!==(s=e[0].name+" media")&&b(t,"alt",s),f&1&&a!==(a=se+"/assets/img/"+e[1]+".png")&&b(l,"href",a)},d(r){r&&c(l)}}}function ke(i){let e,l,t=i[0].start+(i[0].end?`–${i[0].end}`:""),n,s;return{c(){e=P("span"),l=T("("),n=T(t),s=T(")"),this.h()},l(a){e=N(a,"SPAN",{class:!0});var r=L(e);l=D(r,"("),n=D(r,t),s=D(r,")"),r.forEach(c),this.h()},h(){b(e,"class","date")},m(a,r){B(a,e,r),_(e,l),_(e,n),_(e,s)},p(a,r){r&1&&t!==(t=a[0].start+(a[0].end?`–${a[0].end}`:""))&&J(n,t)},d(a){a&&c(e)}}}function we(i){let e,l=i[0].status+"",t,n;return{c(){e=P("span"),t=T(l),this.h()},l(s){e=N(s,"SPAN",{class:!0,title:!0});var a=L(e);t=D(a,l),a.forEach(c),this.h()},h(){b(e,"class","status"),b(e,"title",n=Ue(i[0].status))},m(s,a){B(s,e,a),_(e,t)},p(s,a){a&1&&l!==(l=s[0].status+"")&&J(t,l),a&1&&n!==(n=Ue(s[0].status))&&b(e,"title",n)},d(s){s&&c(e)}}}function $e(i){let e,l,t=V(i[0].author1,i[0].author1Url)+"",n,s,a=i[0].author2&&Se(i),r=i[0].author3&&Ee(i);return{c(){e=P("span"),l=new te(!1),n=F(),a&&a.c(),s=F(),r&&r.c(),this.h()},l(f){e=N(f,"SPAN",{class:!0});var o=L(e);l=le(o,!1),n=F(),a&&a.l(o),s=F(),r&&r.l(o),o.forEach(c),this.h()},h(){l.a=n,b(e,"class","author")},m(f,o){B(f,e,o),l.m(t,e),_(e,n),a&&a.m(e,null),_(e,s),r&&r.m(e,null)},p(f,o){o&1&&t!==(t=V(f[0].author1,f[0].author1Url)+"")&&l.p(t),f[0].author2?a?a.p(f,o):(a=Se(f),a.c(),a.m(e,s)):a&&(a.d(1),a=null),f[0].author3?r?r.p(f,o):(r=Ee(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null)},d(f){f&&c(e),a&&a.d(),r&&r.d()}}}function Se(i){let e,l,t=V(i[0].author2,i[0].author2Url)+"",n;return{c(){e=T(", "),l=new te(!1),n=F(),this.h()},l(s){e=D(s,", "),l=le(s,!1),n=F(),this.h()},h(){l.a=n},m(s,a){B(s,e,a),l.m(t,s,a),B(s,n,a)},p(s,a){a&1&&t!==(t=V(s[0].author2,s[0].author2Url)+"")&&l.p(t)},d(s){s&&(c(e),c(n),l.d())}}}function Ee(i){let e,l,t=V(i[0].author3,i[0].author3Url)+"",n;return{c(){e=T(", "),l=new te(!1),n=F(),this.h()},l(s){e=D(s,", "),l=le(s,!1),n=F(),this.h()},h(){l.a=n},m(s,a){B(s,e,a),l.m(t,s,a),B(s,n,a)},p(s,a){a&1&&t!==(t=V(s[0].author3,s[0].author3Url)+"")&&l.p(t)},d(s){s&&(c(e),c(n),l.d())}}}function je(i){let e,l,t,n=V(i[0].publisher,i[0].publisherUrl)+"",s;return{c(){e=P("span"),l=T("("),t=new te(!1),s=T(")"),this.h()},l(a){e=N(a,"SPAN",{class:!0});var r=L(e);l=D(r,"("),t=le(r,!1),s=D(r,")"),r.forEach(c),this.h()},h(){t.a=s,b(e,"class","publisher")},m(a,r){B(a,e,r),_(e,l),t.m(n,e),_(e,s)},p(a,r){r&1&&n!==(n=V(a[0].publisher,a[0].publisherUrl)+"")&&t.p(n)},d(a){a&&c(e)}}}function Pe(i){let e,l=i[0].description+"",t;return{c(){e=P("span"),t=T(l),this.h()},l(n){e=N(n,"SPAN",{class:!0});var s=L(e);t=D(s,l),s.forEach(c),this.h()},h(){b(e,"class","description")},m(n,s){B(n,e,s),_(e,t)},p(n,s){s&1&&l!==(l=n[0].description+"")&&J(t,l)},d(n){n&&c(e)}}}function We(i){let e,l,t,n,s=V(i[0].name,Ae(i[0].status,i[0].url))+"",a,r,f,o,m,d,h=i[0].media!=""&&be(i),v=i[0].start>0&&ke(i),w=i[0].status&&we(i),k=i[0].author1&&$e(i),E=i[0].publisher&&je(i),S=i[0].description&&Pe(i);return{c(){e=P("div"),h&&h.c(),l=I(),t=P("span"),n=new te(!1),r=I(),v&&v.c(),f=I(),w&&w.c(),o=I(),k&&k.c(),m=I(),E&&E.c(),d=I(),S&&S.c(),this.h()},l(u){e=N(u,"DIV",{class:!0});var g=L(e);h&&h.l(g),l=O(g),t=N(g,"SPAN",{class:!0});var z=L(t);n=le(z,!1),z.forEach(c),r=O(g),v&&v.l(g),f=O(g),w&&w.l(g),o=O(g),k&&k.l(g),m=O(g),E&&E.l(g),d=O(g),S&&S.l(g),g.forEach(c),this.h()},h(){n.a=null,b(t,"class",a="name"+Ne(i[0].status)),b(e,"class","item")},m(u,g){B(u,e,g),h&&h.m(e,null),_(e,l),_(e,t),n.m(s,t),_(e,r),v&&v.m(e,null),_(e,f),w&&w.m(e,null),_(e,o),k&&k.m(e,null),_(e,m),E&&E.m(e,null),_(e,d),S&&S.m(e,null)},p(u,[g]){u[0].media!=""?h?h.p(u,g):(h=be(u),h.c(),h.m(e,l)):h&&(h.d(1),h=null),g&1&&s!==(s=V(u[0].name,Ae(u[0].status,u[0].url))+"")&&n.p(s),g&1&&a!==(a="name"+Ne(u[0].status))&&b(t,"class",a),u[0].start>0?v?v.p(u,g):(v=ke(u),v.c(),v.m(e,f)):v&&(v.d(1),v=null),u[0].status?w?w.p(u,g):(w=we(u),w.c(),w.m(e,o)):w&&(w.d(1),w=null),u[0].author1?k?k.p(u,g):(k=$e(u),k.c(),k.m(e,m)):k&&(k.d(1),k=null),u[0].publisher?E?E.p(u,g):(E=je(u),E.c(),E.m(e,d)):E&&(E.d(1),E=null),u[0].description?S?S.p(u,g):(S=Pe(u),S.c(),S.m(e,null)):S&&(S.d(1),S=null)},i:Y,o:Y,d(u){u&&c(e),h&&h.d(),v&&v.d(),w&&w.d(),k&&k.d(),E&&E.d(),S&&S.d()}}}function Ne(i){if(i.includes("❌"))return" strike"}function Ae(i,e){return i.includes("❌")?"":e}function Ue(i){let e="";return i.includes("❌")?e="Project URL is not safe to visit":i.includes("😿")?e="Project is broken":i.includes("🗄")?e="Project archived":e="Project is live",e}function V(i,e,l=!0){return e?`<a href="${e.trim()}" ${l?'target="_blank"':""}>${i.trim()}</a>`:i.trim()}function Xe(i,e,l){let{item:t}=e;return i.$$set=n=>{"item"in n&&l(0,t=n.item)},[t]}class Ye extends x{constructor(e){super(),ee(this,e,Xe,We,Z,{item:0})}}function Be(i,e,l){const t=i.slice();return t[5]=e[l],t}function Ce(i){let e=i[0].name+"",l;return{c(){l=T(e)},l(t){l=D(t,e)},m(t,n){B(t,l,n)},p(t,n){n&1&&e!==(e=t[0].name+"")&&J(l,e)},d(t){t&&c(l)}}}function Le(i){let e,l;return e=new Ye({props:{item:i[5]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){ae(e,t,n),l=!0},p(t,n){const s={};n&2&&(s.item=t[5]),e.$set(s)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){re(e,t)}}}function Ze(i){let e,l,t,n,s=i[0].name&&Ce(i),a=W(i[1]),r=[];for(let o=0;o<a.length;o+=1)r[o]=Le(Be(i,a,o));const f=o=>H(r[o],1,1,()=>{r[o]=null});return{c(){e=P("section"),s&&s.c(),l=I(),t=P("div");for(let o=0;o<r.length;o+=1)r[o].c();this.h()},l(o){e=N(o,"SECTION",{});var m=L(e);s&&s.l(m),l=O(m),t=N(m,"DIV",{class:!0});var d=L(t);for(let h=0;h<r.length;h+=1)r[h].l(d);d.forEach(c),m.forEach(c),this.h()},h(){b(t,"class","content columns")},m(o,m){B(o,e,m),s&&s.m(e,null),_(e,l),_(e,t);for(let d=0;d<r.length;d+=1)r[d]&&r[d].m(t,null);n=!0},p(o,[m]){if(o[0].name?s?s.p(o,m):(s=Ce(o),s.c(),s.m(e,l)):s&&(s.d(1),s=null),m&2){a=W(o[1]);let d;for(d=0;d<a.length;d+=1){const h=Be(o,a,d);r[d]?(r[d].p(h,m),q(r[d],1)):(r[d]=Le(h),r[d].c(),q(r[d],1),r[d].m(t,null))}for(ue(),d=a.length;d<r.length;d+=1)f(d);ce()}},i(o){if(!n){for(let m=0;m<a.length;m+=1)q(r[m]);n=!0}},o(o){r=r.filter(Boolean);for(let m=0;m<r.length;m+=1)H(r[m]);n=!1},d(o){o&&c(e),s&&s.d(),ye(r,o)}}}function xe(i,e,l){let t,n,s,a;return R(i,Fe,r=>l(3,n=r)),R(i,ze,r=>l(0,s=r)),R(i,Ge,r=>l(1,a=r)),i.$$.update=()=>{i.$$.dirty&8&&l(2,t=n),i.$$.dirty&4&&console.log("projects has changed")},[s,a,t,n]}class et extends x{constructor(e){super(),ee(this,e,xe,Ze,Z,{})}}function Me(i){let e=i[3]>0?"↓":"↑",l;return{c(){l=T(e)},l(t){l=D(t,e)},m(t,n){B(t,l,n)},p(t,n){n&8&&e!==(e=t[3]>0?"↓":"↑")&&J(l,e)},d(t){t&&c(l)}}}function tt(i){let e,l=i[0].replace("-"," ")+"",t,n,s,a,r=i[2]==i[0]&&Me(i);return{c(){e=P("button"),t=T(l),n=I(),r&&r.c(),this.h()},l(f){e=N(f,"BUTTON",{class:!0,title:!0,"data-tag":!0});var o=L(e);t=D(o,l),n=O(o),r&&r.l(o),o.forEach(c),this.h()},h(){b(e,"class","tag"),b(e,"title",i[1]),b(e,"data-tag",i[0])},m(f,o){B(f,e,o),_(e,t),_(e,n),r&&r.m(e,null),s||(a=fe(e,"click",i[5]),s=!0)},p(f,[o]){o&1&&l!==(l=f[0].replace("-"," ")+"")&&J(t,l),f[2]==f[0]?r?r.p(f,o):(r=Me(f),r.c(),r.m(e,null)):r&&(r.d(1),r=null),o&2&&b(e,"title",f[1]),o&1&&b(e,"data-tag",f[0])},i:Y,o:Y,d(f){f&&c(e),r&&r.d(),s=!1,a()}}}function lt(i,e,l){let t,n,s;R(i,He,o=>l(2,t=o)),R(i,pe,o=>l(3,n=o)),R(i,Re,o=>l(4,s=o));let{val:a,note:r}=e;const f=o=>{window.location.hash=a,t==a&&Ve(pe,n*=-1,n),Fe.updateFilters(a,s,n)};return i.$$set=o=>{"val"in o&&l(0,a=o.val),"note"in o&&l(1,r=o.note)},[a,r,t,n,s,f]}class st extends x{constructor(e){super(),ee(this,e,lt,tt,Z,{val:0,note:1})}}function Te(i,e,l){const t=i.slice();return t[3]=e[l][0],t[4]=e[l][1],t}function De(i){let e,l;return e=new st({props:{val:i[3],note:i[4]}}),{c(){ne(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,n){ae(e,t,n),l=!0},p(t,n){const s={};n&1&&(s.val=t[3]),n&1&&(s.note=t[4]),e.$set(s)},i(t){l||(q(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){re(e,t)}}}function Ie(i){let e=de(i[3]),l,t,n=e&&De(i);return{c(){n&&n.c(),l=F()},l(s){n&&n.l(s),l=F()},m(s,a){n&&n.m(s,a),B(s,l,a),t=!0},p(s,a){a&1&&(e=de(s[3])),e?n?(n.p(s,a),a&1&&q(n,1)):(n=De(s),n.c(),q(n,1),n.m(l.parentNode,l)):n&&(ue(),H(n,1,1,()=>{n=null}),ce())},i(s){t||(q(n),t=!0)},o(s){H(n),t=!1},d(s){s&&c(l),n&&n.d(s)}}}function Oe(i){let e,l=i[0][i[1]]+"",t;return{c(){e=T("→ "),t=T(l)},l(n){e=D(n,"→ "),t=D(n,l)},m(n,s){B(n,e,s),B(n,t,s)},p(n,s){s&3&&l!==(l=n[0][n[1]]+"")&&J(t,l)},d(n){n&&(c(e),c(t))}}}function nt(i){let e,l,t,n,s,a="📄",r,f,o,m,d="🖼️",h,v,w,k,E,S,u=i[1].replace("-"," ")+"",g,z,G,K,A,C=W(Object.entries(i[0])),p=[];for(let $=0;$<C.length;$+=1)p[$]=Ie(Te(i,C,$));const Q=$=>H(p[$],1,1,()=>{p[$]=null});let M=i[1]&&Oe(i);return{c(){e=P("section"),l=P("span");for(let $=0;$<p.length;$+=1)p[$].c();t=I(),n=P("span"),s=P("label"),s.textContent=a,r=I(),f=P("input"),o=I(),m=P("label"),m.textContent=d,h=I(),v=P("input"),w=I(),k=P("div"),E=T("→ "),S=P("span"),g=T(u),z=I(),M&&M.c(),this.h()},l($){e=N($,"SECTION",{});var U=L(e);l=N(U,"SPAN",{class:!0});var j=L(l);for(let oe=0;oe<p.length;oe+=1)p[oe].l(j);j.forEach(c),t=O(U),n=N(U,"SPAN",{class:!0});var y=L(n);s=N(y,"LABEL",{for:!0,"data-svelte-h":!0}),me(s)!=="svelte-bnecjf"&&(s.textContent=a),r=O(y),f=N(y,"INPUT",{type:!0,id:!0}),o=O(y),m=N(y,"LABEL",{for:!0,"data-svelte-h":!0}),me(m)!=="svelte-19g6uxt"&&(m.textContent=d),h=O(y),v=N(y,"INPUT",{type:!0,id:!0}),y.forEach(c),w=O(U),k=N(U,"DIV",{class:!0});var X=L(k);E=D(X,"→ "),S=N(X,"SPAN",{});var he=L(S);g=D(he,u),he.forEach(c),z=O(X),M&&M.l(X),X.forEach(c),U.forEach(c),this.h()},h(){b(l,"class","tags"),b(s,"for","showDescriptionsBtn"),b(f,"type","checkbox"),b(f,"id","showDescriptionsBtn"),b(m,"for","showMediaBtn"),b(v,"type","checkbox"),b(v,"id","showMediaBtn"),b(n,"class","show"),b(k,"class","notes")},m($,U){B($,e,U),_(e,l);for(let j=0;j<p.length;j+=1)p[j]&&p[j].m(l,null);_(e,t),_(e,n),_(n,s),_(n,r),_(n,f),_(n,o),_(n,m),_(n,h),_(n,v),_(e,w),_(e,k),_(k,E),_(k,S),_(S,g),_(k,z),M&&M.m(k,null),G=!0,K||(A=[fe(f,"click",at),fe(v,"click",it)],K=!0)},p($,[U]){if(U&1){C=W(Object.entries($[0]));let j;for(j=0;j<C.length;j+=1){const y=Te($,C,j);p[j]?(p[j].p(y,U),q(p[j],1)):(p[j]=Ie(y),p[j].c(),q(p[j],1),p[j].m(l,null))}for(ue(),j=C.length;j<p.length;j+=1)Q(j);ce()}(!G||U&2)&&u!==(u=$[1].replace("-"," ")+"")&&J(g,u),$[1]?M?M.p($,U):(M=Oe($),M.c(),M.m(k,null)):M&&(M.d(1),M=null)},i($){if(!G){for(let U=0;U<C.length;U+=1)q(p[U]);G=!0}},o($){p=p.filter(Boolean);for(let U=0;U<p.length;U+=1)H(p[U]);G=!1},d($){$&&c(e),ye(p,$),M&&M.d(),K=!1,qe(A)}}}function it(){console.log("toggleMedia()"),document.querySelector(".content").classList.toggle("showMedia")}function at(){console.log("toggleDescriptions()"),document.querySelector(".content").classList.toggle("showDescriptions")}function rt(i,e,l){let t,n,s;return R(i,Je,a=>l(2,n=a)),R(i,He,a=>l(1,s=a)),i.$$.update=()=>{i.$$.dirty&4&&l(0,t=n)},[t,s,n]}class ot extends x{constructor(e){super(),ee(this,e,rt,nt,Z,{})}}function ft(i){let e,l,t,n;return e=new ot({}),t=new et({}),{c(){ne(e.$$.fragment),l=I(),ne(t.$$.fragment)},l(s){ie(e.$$.fragment,s),l=O(s),ie(t.$$.fragment,s)},m(s,a){ae(e,s,a),B(s,l,a),ae(t,s,a),n=!0},p:Y,i(s){n||(q(e.$$.fragment,s),q(t.$$.fragment,s),n=!0)},o(s){H(e.$$.fragment,s),H(t.$$.fragment,s),n=!1},d(s){s&&c(l),re(e,s),re(t,s)}}}class mt extends x{constructor(e){super(),ee(this,e,null,ft,Z,{})}}export{mt as component};

function S(l){let e=document.createElement("template");return e.innerHTML=l,e}function $(l){return document.importNode(l.content,!0)}function u(l,e){let t=l,s=0,n=e.length,a,i;for(;s<n;s++)for(a=e[s],t=t.firstChild,i=0;i<a;i++)t=t.nextSibling;return t}function le(l,e,t){if(l.replaceWith(e),t){let s=l.childNodes,n=s.length;for(;n--;)e.appendChild(s[0])}}function U(l,e){l.append(e)}function R(l,e){l.after(e)}function se(l,e){let t=l;if(e.nextSibling!==l)for(;t;){let s=t;if(t=t.nextSibling,s.remove(),s===e)break}}function b(l,e,t,s){l.addEventListener(e,t,s)}function ae(l,e,t){l.setAttribute(e,t)}function A(l,e,t){l.classList.toggle(e,t)}var K=Object,ze=Symbol,Qe=/\B([A-Z])/g;function pe(l){return l.replace(Qe,"-$1").toLowerCase()}var de=K.is,Ve=K.assign,ne=l=>typeof l=="function";var o,k=1<<0,y=1<<1,C=1<<2,H=1<<3,M=1<<4,I=1<<5,w,v,j,P=0,te=0,B=0;function ve(){P++}function _e(){if(P>1){P--;return}let l,e=!1;for(;j;){let t=j;for(j=o,te++;t;){let s=t.o;t.o=o,t.c&=~C;try{t.s()}catch(n){e||(l=n,e=!0)}t=s}}if(te=0,P--,e)throw l}function me(l){let e;if(v)if(e=l.j,!e||e.p!==v)e={d:0,c:0,l:o,g:l,e:v.b,h:o,p:v,i:o,m:o},v.b=e,l.j=e,v.c&M&&l.n(e);else if(e.c&y){e.c&=~y;let t=v.b,s=e.h,n=e.e;e!==t&&(s&&(s.e=n),n&&(n.h=s),t&&(t.h=e),e.h=o,e.e=t,v.b=e)}else e=o;try{return l.peek()}finally{e&&(e.d=l.d)}}function ee(l){if(l.c&=~k,l.c&H)throw l.a;return l.a}function ge(l){for(let e=l.b;e;e=e.e){let t=e.g.j;t&&(e.l=t),e.g.j=e,e.c|=y}}function be(l){let e=l.b,t;for(;e;){let s=e.e;e.c&y?(e.g.k(e),e.e=o):(t&&(t.h=e),e.h=o,e.e=t,t=e),e.g.j=e.l,e.l&&(e.l=o),e=s}l.b=t}function We(l){let e=this;be(e),v=l,_e(),e.c&=~k}var N=class{constructor(e){let t=this;t.d=0,t.a=e,t.j=o,t.f=o}n(e){let t=this;e.c&I||(e.c|=I,e.i=t.f,t.f&&(t.f.m=e),t.f=e)}k(e){let t=this,s=e.m,n=e.i;e.c&I&&(e.c&=~I,s&&(s.i=n,e.m=o),n&&(n.m=s,e.i=o),e===t.f&&(t.f=n))}subscribe(e){return p(()=>e(this.value))}set(e){return this.value=e}peek(){return this.a}get value(){return me(this)}set value(e){let t=this;if(e!==t.a){if(t.a=e,te>100)return;t.d++,B++,ve();try{for(let s=t.f;s;s=s.i)s.p.q()}finally{_e()}}}},q=class extends N{constructor(e){super(o),this.r=e,this.b=o,this.c=y,this.t=B-1}n(e){let t=this;if(!t.f){t.c|=y|M;for(let s=t.b;s;s=s.e)s.g.n(s)}super.n(e)}k(e){let t=this;if(super.k(e),!t.f){t.c&=~M;for(let s=t.b;s;s=s.e)s.g.k(s)}}q(){let e=this;if(!(e.c&(C|k))){e.c|=y|C;for(let t=e.f;t;t=t.i)t.p.q()}}peek(){let e=this;if(e.c&=~C,e.c&k)return e.a;if(e.c|=k,!(e.c&y)&&e.f||e.t===B)return ee(e);if(e.c&=~y,e.t=B,e.d>0){let a=e.b;for(;a&&a.g.d===a.d;){try{a.g.peek()}catch{}if(a.g.d!==a.d)break;a=a.e}if(!a)return ee(e)}let t=e.a,s=e.c,n=v;try{v=e,ge(e),e.a=e.r(),e.c&=~H,(s&H||e.a!==t||e.d===0)&&e.d++}catch(a){e.a=a,e.c|=H,e.d++}finally{be(e),v=n}return ee(e)}get value(){let e=this;return e.c&k?e.a:me(e)}set value(e){super.value=e}},Y=class{constructor(e){this.r=e,this.b=o,this.o=o,this.c=M}s(){let e=this;if(e.c&k)return;let t=e.u();try{e.r()}finally{t()}}u(){let e=this,t=v;return e.c|=k,ve(),v=e,ge(e),We.bind(e,t)}q(){let e=this;e.c&(C|k)||(e.c|=C,e.o=j,j=e)}v(){let e=this;for(let t=e.b;t;t=t.e)t.g.k(t);e.b=o}},G=class{constructor(e){let t=this;t.scopes=[],t.cleanups=[],t.parent=w,!e&&w&&w.scopes.push(t)}run(e){let t=w;try{return w=this,e()}finally{w=t}}clear(){let e=this,t=e.scopes,s=e.cleanups;for(let n of t)n.clear(),n.parent=o;for(let n of s)n();t.length=0,s.length=0}};function O(l){return new G(l)}function F(l){ne(l)&&w&&w.cleanups.push(l)}function E(l){return new N(l)}function z(l){return new q(l)}function p(l){let e=new Y(l),t=e.v.bind(e);return e.s(),F(t),t}var Ze=!1,Xe=1;var D=null,ye=ze(),J=class extends HTMLElement{$m=!1;$c=O(!0);$p={};$h=[];constructor(){super();let e=this,t=e.$p,s=e.constructor.$d;for(let n in s){let a=s[n];t[a]=E(ye)}}connectedCallback(){let e=this;if(!e.$m){e.$m=!0;let t=e.constructor.$c,s=e.constructor.$s,n=e.$c,a=e.$h,i=e.shadowRoot,f=!1;i||(i=e.attachShadow({mode:"open"}),f=!0);let h=D;try{if(D=e,n.run(()=>t(i,e)),document.adoptedStyleSheets)f&&(i.adoptedStyleSheets=s);else for(let d of s)U(i,d.cloneNode(!0));for(let d of a){let m=d();ne(m)&&n.cleanups.push(m)}a.length=0}finally{D=h}}}disconnectedCallback(){let e=this;e.$m&&(e.$c.clear(),e.shadowRoot.innerHTML="",e.$m=!1)}attributeChangedCallback(e,t,s){let n=this,a=n.constructor.$d;e in a&&(n.$p[a[e]].value=s===""?!0:s)}};function ie(l,e,t,s){let n=[],a=K.create(null);class i extends J{static observedAttributes=n;static $c=e;static $a=a;static $d=t;static $s=s}for(let f in t){let h=t[f],d=pe(f);a[d]=f,n.push(d),K.defineProperty(i.prototype,f,{get(){return this.$p[h].a},set(m){this.$p[h].value=m}})}return Ze&&(l="velvet-"+Xe++),l&&customElements.define(l,i),i}function Q(l,e){let t=document.createTextNode("");le(l,t),p(()=>t.data=e())}function V(l,e){let t=O(),s,n;p(()=>{let a=e();a!==s&&(n&&(t.clear(),Ee(l,n),n=null),s=a,a&&(n=t.run(()=>a(l))))})}function ke(l,e,t){let s=[];p(()=>{let n=t(),a=0,i=n.length,f=s.length;for(;a<i;a++)if(s[a]){let h=s[a][2];h.value=n[a]}else{let h=s[a-1],d=h?h[1]:l,m=E(n[a]),x=O(!0);s[a]=[x,x.run(()=>e(d,m,a)),m]}if(f>i){let h=s[a-1],d=h?h[1]:l,m=s[f-1][1];for(;a<f;a++)s[a][0].clear();Ee(d,m),s.length=i}}),F(()=>{for(let n=0,a=s.length;n<a;n++)s[n][0].clear()})}function Ee(l,e){se(l.nextSibling,e)}var tt=S("<header class=header> <h1>todos</h1> <input class=new-todo placeholder='What needs to be done?' autofocus /> </header> <!>"),lt=S("<section class=main> <input id=toggle-all class=toggle-all type=checkbox /> <label for=toggle-all>Mark all as complete</label> <ul class=todo-list> <!> </ul> <footer class=footer> <span class=todo-count> <strong><!></strong> <!> left </span> <ul class=filters> <li><a href=#/>All</a></li> <li><a href=#/active>Active</a></li> <li><a href=#/completed>Completed</a></li> </ul> <!> </footer> </section>"),st=S("<li> <div class=view> <input class=toggle type=checkbox /> <label> <!> </label> <button class=destroy></button> </div> <!> </li>"),at=S("<input class=edit />"),nt=S("<button class=clear-completed> Clear completed </button>");function it(l,e){let n="todos",a={all:r=>r,active:r=>r.filter(c=>!c.completed),completed:r=>r.filter(c=>c.completed)},i=E(JSON.parse(localStorage.getItem(n)||"[]")),f=E("all"),h=E(null),d=E(null),m=z(()=>a[f.value](i.value)),x=z(()=>a.active(i.value).length),we=r=>{i.value=i.value.map(c=>({...c,completed:r.target.checked}))},xe=()=>{i.value=i.value.filter(r=>!r.completed)},Se=r=>{r.which===13&&(i.value=i.value.concat({id:Date.now(),title:r.target.value,completed:!1}),r.target.value="")},$e=r=>{i.value=i.value.filter(c=>c.id!==r)},ce=r=>{i.value=i.value.map(c=>c.id!==r.id?c:{...c,...r})},Ae=(r,c)=>{ce({id:r,completed:c.target.checked})},Ce=r=>{r.which===13?r.target.blur():r.which===27&&(h.value=null,d.value=null)},Ne=r=>{ce({id:h.value,title:r.target.value}),h.value=null,d.value=null},oe=()=>{let r=window.location.hash.replace(/#\/?/,"");a[r]||(r="all"),f.value=r};window.addEventListener("hashchange",oe),oe(),p(()=>localStorage.setItem(n,JSON.stringify(i.value))),p(()=>{d.value&&setTimeout(()=>d.value.focus())});let W=$(tt),Re=u(W,[0,3]),Te=u(W,[2]),je=r=>{let c=$(lt),ue=u(c,[0,1]),Oe=u(c,[0,5,1]),Le=u(c,[0,7,1,1,0]),Ie=u(c,[0,7,1,3]),He=u(c,[0,7,3,1,0]),Pe=u(c,[0,7,3,3,0]),Be=u(c,[0,7,3,5,0]),De=u(c,[0,7,5]),Ke=u(c,[0]),Me=(Z,_)=>{let g=$(st),fe=u(g,[0,1,1]),Ye=u(g,[0,1,3,1]),Ge=u(g,[0,1,3]),Je=u(g,[0,1,5]),Ue=u(g,[0,3]),L=u(g,[0]),Fe=X=>{let he=$(at),T=u(he,[0]);return d.value=T,p(()=>T.value=_.value.title),b(T,"keydown",Ce),b(T,"blur",Ne),R(X,he),T};return p(()=>fe.checked=_.value.completed),b(fe,"change",X=>Ae(_.value.id,X)),Q(Ye,()=>_.value.title),b(Ge,"dblclick",()=>h.value=_.value.id),b(Je,"click",()=>$e(_.value.id)),V(Ue,()=>h.value===_.value.id?Fe:null),ae(L,"class","todo"),p(()=>A(L,"completed",_.value.completed)),p(()=>A(L,"editing",h.value===_.value.id)),R(Z,g),L},qe=Z=>{let _=$(nt),g=u(_,[0]);return b(g,"click",xe),R(Z,_),g};return p(()=>ue.checked=x.value===0),b(ue,"change",we),ke(Oe,Me,()=>m.value),Q(Le,()=>x.value),Q(Ie,()=>x.value===1?"item":"items"),p(()=>A(He,"selected",f.value==="all")),p(()=>A(Pe,"selected",f.value==="active")),p(()=>A(Be,"selected",f.value==="completed")),V(De,()=>i.value.length>x.value?qe:null),R(r,c),Ke};b(Re,"keydown",Se),V(Te,()=>i.value.length>0?je:null),U(l,W)}var re=ie("x-app",it,{},[]);re.prototype.attachShadow=function(){return this};var rt=new re;document.body.append(rt);
//# sourceMappingURL=app.js.map

function S(l){let e=document.createElement("template");return e.innerHTML=l,e}function $(l){return l.content.cloneNode(!0)}function u(l,e){let t=l,o=0,n=e.length,i,a;for(;o<n;o++)for(i=e[o],t=t.firstChild,a=0;a<i;a++)t=t.nextSibling;return t}function le(l,e,t){if(l.replaceWith(e),t){let o=l.childNodes,n=o.length;for(;n--;)e.appendChild(o[0])}}function J(l,e){l.append(e)}function R(l,e){l.after(e)}function oe(l,e){let t=l;if(e.nextSibling!==l)for(;t;){let o=t;if(t=t.nextSibling,o.remove(),o===e)break}}function m(l,e,t,o){l.addEventListener(e,t,o)}function ie(l,e,t){l.setAttribute(e,t)}function A(l,e,t){l.classList.toggle(e,t)}var D=Object,Fe=Symbol,Qe=/\B([A-Z])/g;function fe(l){return l.replace(Qe,"-$1").toLowerCase()}var he=D.is,Ve=D.assign,ne=l=>typeof l=="function";var c,y=1<<0,_=1<<1,C=1<<2,I=1<<3,K=1<<4,L=1<<5,w,g,z,H=0,te=0,P=0;function ge(){H++}function be(){if(H>1){H--;return}let l,e=!1;for(;z;){let t=z;for(z=c,te++;t;){let o=t.o;t.o=c,t.c&=~C;try{t.s()}catch(n){e||(l=n,e=!0)}t=o}}if(te=0,H--,e)throw l}function ve(l){let e;if(g)if(e=l.j,!e||e.p!==g)e={d:0,c:0,l:c,g:l,e:g.b,h:c,p:g,i:c,m:c},g.b=e,l.j=e,g.c&K&&l.n(e);else if(e.c&_){e.c&=~_;let t=g.b,o=e.h,n=e.e;e!==t&&(o&&(o.e=n),n&&(n.h=o),t&&(t.h=e),e.h=c,e.e=t,g.b=e)}else e=c;try{return l.peek()}finally{e&&(e.d=l.d)}}function ee(l){if(l.c&=~y,l.c&I)throw l.a;return l.a}function xe(l){for(let e=l.b;e;e=e.e){let t=e.g.j;t&&(e.l=t),e.g.j=e,e.c|=_}}function me(l){let e=l.b,t;for(;e;){let o=e.e;e.c&_?(e.g.k(e),e.e=c):(t&&(t.h=e),e.h=c,e.e=t,t=e),e.g.j=e.l,e.l&&(e.l=c),e=o}l.b=t}function We(l){let e=this;me(e),g=l,be(),e.c&=~y}var N=class{constructor(e){let t=this;t.d=0,t.a=e,t.j=c,t.f=c}n(e){let t=this;e.c&L||(e.c|=L,e.i=t.f,t.f&&(t.f.m=e),t.f=e)}k(e){let t=this,o=e.m,n=e.i;e.c&L&&(e.c&=~L,o&&(o.i=n,e.m=c),n&&(n.m=o,e.i=c),e===t.f&&(t.f=n))}subscribe(e){return f(()=>e(this.value))}set(e){return this.value=e}peek(){return this.a}get value(){return ve(this)}set value(e){let t=this;if(e!==t.a){if(t.a=e,te>100)return;t.d++,P++,ge();try{for(let o=t.f;o;o=o.i)o.p.q()}finally{be()}}}},M=class extends N{constructor(e){super(c),this.r=e,this.b=c,this.c=_,this.t=P-1}n(e){let t=this;if(!t.f){t.c|=_|K;for(let o=t.b;o;o=o.e)o.g.n(o)}super.n(e)}k(e){let t=this;if(super.k(e),!t.f){t.c&=~K;for(let o=t.b;o;o=o.e)o.g.k(o)}}q(){let e=this;if(!(e.c&(C|y))){e.c|=_|C;for(let t=e.f;t;t=t.i)t.p.q()}}peek(){let e=this;if(e.c&=~C,e.c&y)return e.a;if(e.c|=y,!(e.c&_)&&e.f||e.t===P)return ee(e);if(e.c&=~_,e.t=P,e.d>0){let i=e.b;for(;i&&i.g.d===i.d;){try{i.g.peek()}catch{}if(i.g.d!==i.d)break;i=i.e}if(!i)return ee(e)}let t=e.a,o=e.c,n=g;try{g=e,xe(e),e.a=e.r(),e.c&=~I,(o&I||e.a!==t||e.d===0)&&e.d++}catch(i){e.a=i,e.c|=I,e.d++}finally{me(e),g=n}return ee(e)}get value(){let e=this;return e.c&y?e.a:ve(e)}set value(e){super.value=e}},q=class{constructor(e){this.r=e,this.b=c,this.o=c,this.c=K}s(){let e=this;if(e.c&y)return;let t=e.u();try{e.r()}finally{t()}}u(){let e=this,t=g;return e.c|=y,ge(),g=e,xe(e),We.bind(e,t)}q(){let e=this;e.c&(C|y)||(e.c|=C,e.o=z,z=e)}v(){let e=this;for(let t=e.b;t;t=t.e)t.g.k(t);e.b=c}},Y=class{constructor(e){let t=this;t.scopes=[],t.cleanups=[],t.parent=w,!e&&w&&w.scopes.push(t)}run(e){let t=w;try{return w=this,e()}finally{w=t}}clear(){let e=this,t=e.scopes,o=e.cleanups;for(let n of t)n.clear(),n.parent=c;for(let n of o)n();t.length=0,o.length=0}};function O(l){return new Y(l)}function U(l){ne(l)&&w&&w.cleanups.push(l)}function k(l){return new N(l)}function F(l){return new M(l)}function f(l){let e=new q(l),t=e.v.bind(e);return e.s(),U(t),t}var Ze=!1,Xe=1;var B=null,_e=Fe(),G=class extends HTMLElement{$m=!1;$c=O(!0);$p={};$h=[];constructor(){super();let e=this,t=e.$p,o=e.constructor.$d;for(let n in o){let i=o[n];t[i]=k(_e)}}connectedCallback(){let e=this;if(!e.$m){e.$m=!0;let t=e.constructor.$c,o=e.constructor.$s,n=e.$c,i=e.$h,a=e.shadowRoot,p=!1;a||(a=e.attachShadow({mode:"open"}),p=!0);let d=B;try{if(B=e,n.run(()=>t(a,e)),document.adoptedStyleSheets)p&&(a.adoptedStyleSheets=o);else for(let h of o)J(a,h.cloneNode(!0));for(let h of i){let v=h();ne(v)&&n.cleanups.push(v)}i.length=0}finally{B=d}}}disconnectedCallback(){let e=this;e.$m&&(e.$c.clear(),e.shadowRoot.innerHTML="",e.$m=!1)}attributeChangedCallback(e,t,o){let n=this,i=n.constructor.$d;e in i&&(n[i[e]]=o===""?!0:o)}};function ae(l,e,t,o){let n=[],i=D.create(null);class a extends G{static observedAttributes=n;static $c=e;static $a=i;static $d=t;static $s=o}for(let p in t){let d=t[p],h=fe(p);i[h]=p,n.push(h),D.defineProperty(a.prototype,p,{get(){return this.$p[d].a},set(v){this.$p[d].value=v}})}return Ze&&(l="velvet-"+Xe++),l&&customElements.define(l,a),a}function se(l){if(!document.adoptedStyleSheets){let t=document.createElement("style");return t.textContent=l,t}let e=new CSSStyleSheet;return e.replaceSync(l),e}function Q(l,e){let t=document.createTextNode("");le(l,t),f(()=>t.data=e())}function V(l,e){let t=O(),o,n;f(()=>{let i=e();i!==o&&(n&&(t.clear(),ke(l,n),n=null),o=i,i&&(n=t.run(()=>i(l))))})}function ye(l,e,t){let o=[];f(()=>{let n=t(),i=0,a=n.length,p=o.length;for(;i<a;i++)if(o[i]){let d=o[i][2];d.value=n[i]}else{let d=o[i-1],h=d?d[1]:l,v=k(n[i]),E=O(!0);o[i]=[E,E.run(()=>e(h,v,i)),v]}if(p>a){let d=o[i-1],h=d?d[1]:l,v=o[p-1][1];for(;i<p;i++)o[i][0].clear();ke(h,v),o.length=a}}),U(()=>{for(let n of o)n[0].clear()})}function ke(l,e){oe(l.nextSibling,e)}var tt=S("<header class=header> <h1>todos</h1> <input class=new-todo placeholder='What needs to be done?' autofocus /> </header> <!>"),lt=S("<section class=main> <input id=toggle-all class=toggle-all type=checkbox /> <label for=toggle-all>Mark all as complete</label> <ul class=todo-list> <!> </ul> <footer class=footer> <span class=todo-count> <strong><!></strong> <!> left </span> <ul class=filters> <li><a href=#/>All</a></li> <li><a href=#/active>Active</a></li> <li><a href=#/completed>Completed</a></li> </ul> <!> </footer> </section>"),ot=S("<li> <div class=view> <input class=toggle type=checkbox /> <label> <!> </label> <button class=destroy></button> </div> <!> </li>"),it=S("<input class=edit />"),nt=S("<button class=clear-completed> Clear completed </button>"),at=se('button{margin:0;padding:0;border:0;background:none;font-size:100%;vertical-align:baseline;font-family:inherit;font-weight:inherit;color:inherit;appearance:none}.hidden{display:none}:host{display:block;background:#fff;margin:130px 0 40px;position:relative;box-shadow:0 2px 4px #0003,0 25px 50px #0000001a}input::placeholder{font-style:italic;font-weight:400;color:#0006}h1{position:absolute;top:-140px;width:100%;font-size:80px;font-weight:200;text-align:center;color:#b83f45;text-rendering:optimizeLegibility}.new-todo,.edit{position:relative;margin:0;width:100%;font-size:24px;font-family:inherit;font-weight:inherit;line-height:1.4em;color:inherit;padding:6px;border:1px solid #999;box-shadow:inset 0 -1px 5px #0003;box-sizing:border-box}.new-todo{padding:16px 16px 16px 60px;height:65px;border:none;background:rgba(0,0,0,.003);box-shadow:inset 0 -2px 1px #00000008}.main{position:relative;z-index:2;border-top:1px solid #e6e6e6}.toggle-all{width:1px;height:1px;border:none;opacity:0;position:absolute;right:100%;bottom:100%}.toggle-all+label{display:flex;align-items:center;justify-content:center;width:45px;height:65px;font-size:0;position:absolute;top:-65px;left:-0}.toggle-all+label:before{content:"\\276f";display:inline-block;font-size:22px;color:#949494;padding:10px 27px;transform:rotate(90deg)}.toggle-all:checked+label:before{color:#484848}.todo-list{margin:0;padding:0;list-style:none}.todo-list li{position:relative;font-size:24px;border-bottom:1px solid #ededed}.todo-list li:last-child{border-bottom:none}.todo-list li.editing{border-bottom:none;padding:0}.todo-list li.editing .edit{display:block;width:calc(100% - 43px);padding:12px 16px;margin:0 0 0 43px}.todo-list li.editing .view{display:none}.todo-list li .toggle{text-align:center;width:40px;height:auto;position:absolute;top:0;bottom:0;margin:auto 0;border:none;-webkit-appearance:none;appearance:none}.todo-list li .toggle{opacity:0}.todo-list li .toggle+label{background-image:url(./assets/checkbox.svg);background-repeat:no-repeat;background-position:center left}.todo-list li .toggle:checked+label{background-image:url(./assets/checkbox-checked.svg)}.todo-list li label{word-break:break-all;padding:15px 15px 15px 60px;display:block;line-height:1.2;transition:color .4s;font-weight:400;color:#484848}.todo-list li.completed label{color:#949494;text-decoration:line-through}.todo-list li .destroy{display:none;position:absolute;top:0;right:10px;bottom:0;width:40px;height:40px;margin:auto 0;font-size:30px;color:#949494;transition:color .2s ease-out}.todo-list li .destroy:hover,.todo-list li .destroy:focus{color:#c18585}.todo-list li .destroy:after{content:"\\d7";display:block;height:100%;line-height:1.1}.todo-list li:hover .destroy{display:block}.todo-list li .edit{display:none}.todo-list li.editing:last-child{margin-bottom:-1px}.footer{padding:10px 15px;height:20px;text-align:center;font-size:15px;border-top:1px solid #e6e6e6}.footer:before{content:"";position:absolute;right:0;bottom:0;left:0;height:50px;overflow:hidden;box-shadow:0 1px 1px #0003,0 8px 0 -3px #f6f6f6,0 9px 1px -3px #0003,0 16px 0 -6px #f6f6f6,0 17px 2px -6px #0003}.todo-count{float:left;text-align:left}.todo-count strong{font-weight:300}.filters{margin:0;padding:0;list-style:none;position:absolute;right:0;left:0}.filters li{display:inline}.filters li a{color:inherit;margin:3px;padding:3px 7px;text-decoration:none;border:1px solid transparent;border-radius:3px}.filters li a:hover{border-color:#db7676}.filters li a.selected{border-color:#ce4646}.clear-completed,html .clear-completed:active{float:right;position:relative;line-height:19px;text-decoration:none;cursor:pointer}.clear-completed:hover{text-decoration:underline}.info{margin:65px auto 0;color:#4d4d4d;font-size:11px;text-shadow:0 1px 0 rgba(255,255,255,.5);text-align:center}.info p{line-height:1}.info a{color:inherit;text-decoration:none;font-weight:400}.info a:hover{text-decoration:underline}@media screen and (-webkit-min-device-pixel-ratio: 0){.toggle-all,.todo-list li .toggle{background:none}.todo-list li .toggle{height:40px}}@media (max-width: 430px){.footer{height:50px}.filters{bottom:10px}}:focus,.toggle:focus+label,.toggle-all:focus+label{box-shadow:0 0 2px 2px #cf7d7d;outline:0}');function st(l,e){let n="todos",i={all:s=>s,active:s=>s.filter(r=>!r.completed),completed:s=>s.filter(r=>r.completed)},a=k(JSON.parse(localStorage.getItem(n)||"[]")),p=k("all"),d=k(null),h=k(null),v=F(()=>i[p.value](a.value)),E=F(()=>i.active(a.value).length),we=s=>{a.value=a.value.map(r=>({...r,completed:s.target.checked}))},Ee=()=>{a.value=a.value.filter(s=>!s.completed)},Se=s=>{s.which===13&&(a.value=a.value.concat({id:Date.now(),title:s.target.value,completed:!1}),s.target.value="")},$e=s=>{a.value=a.value.filter(r=>r.id!==s)},re=s=>{a.value=a.value.map(r=>r.id!==s.id?r:{...r,...s})},Ae=(s,r)=>{re({id:s,completed:r.target.checked})},Ce=s=>{s.which===13?s.target.blur():s.which===27&&(d.value=null,h.value=null)},Ne=s=>{re({id:d.value,title:s.target.value}),d.value=null,h.value=null},ce=()=>{let s=window.location.hash.replace(/#\/?/,"");i[s]||(s="all"),p.value=s};window.addEventListener("hashchange",ce),ce(),f(()=>localStorage.setItem(n,JSON.stringify(a.value))),f(()=>{h.value&&setTimeout(()=>h.value.focus())});let W=$(tt),Re=u(W,[0,3]),je=u(W,[2]),ze=s=>{let r=$(lt),ue=u(r,[0,1]),Oe=u(r,[0,5,1]),Te=u(r,[0,7,1,1,0]),Le=u(r,[0,7,1,3]),Ie=u(r,[0,7,3,1,0]),He=u(r,[0,7,3,3,0]),Pe=u(r,[0,7,3,5,0]),Be=u(r,[0,7,5]),De=u(r,[0]),Ke=(Z,b)=>{let x=$(ot),de=u(x,[0,1,1]),qe=u(x,[0,1,3,1]),Ye=u(x,[0,1,3]),Ge=u(x,[0,1,5]),Je=u(x,[0,3]),T=u(x,[0]),Ue=X=>{let pe=$(it),j=u(pe,[0]);return h.value=j,f(()=>j.value=b.value.title),m(j,"keydown",Ce),m(j,"blur",Ne),R(X,pe),j};return f(()=>de.checked=b.value.completed),m(de,"change",X=>Ae(b.value.id,X)),Q(qe,()=>b.value.title),m(Ye,"dblclick",()=>d.value=b.value.id),m(Ge,"click",()=>$e(b.value.id)),V(Je,()=>d.value===b.value.id?Ue:null),ie(T,"class","todo"),f(()=>A(T,"completed",b.value.completed)),f(()=>A(T,"editing",d.value===b.value.id)),R(Z,x),T},Me=Z=>{let b=$(nt),x=u(b,[0]);return m(x,"click",Ee),R(Z,b),x};return f(()=>ue.checked=E.value===0),m(ue,"change",we),ye(Oe,Ke,()=>v.value),Q(Te,()=>E.value),Q(Le,()=>E.value===1?"item":"items"),f(()=>A(Ie,"selected",p.value==="all")),f(()=>A(He,"selected",p.value==="active")),f(()=>A(Pe,"selected",p.value==="completed")),V(Be,()=>a.value.length>E.value?Me:null),R(s,r),De};m(Re,"keydown",Se),V(je,()=>a.value.length>0?ze:null),J(l,W)}var Ot=ae("x-app",st,{},[at]);export{Ot as default};
//# sourceMappingURL=app.js.map

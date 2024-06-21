import{k as Ne,n as Z,a1 as L,bd as Ae,be as Ke,U as H,o as Y,bf as Q,C as W,aj as Pe,z as _,bg as He,bh as Fe,y as Oe,A as R,s as m,w as g,bi as Ve,T as De,B as T,a9 as ie,aa as y,E as P,J as C,H as a,P as oe,at as I,am as xe,D,ac as ue,aL as Me,au as Le,av as We,K as w,N as de,O as ce,aY as Re,bj as pe,bk as K,L as X,aT as Ue,an as je,_ as U,M as ze,ai as J,af as qe,$ as fe,bl as Ge,p as Ye,Y as Je,V as Qe,bm as Xe,bn as Ze,v as et,aK as tt,F as at,aI as st,a0 as lt}from"../index.js";import{g as ot}from"./hookOfFlash.js";function ne(){if(!arguments.length)return[];var s=arguments[0];return Ne(s)?s:[s]}const ee=()=>Math.floor(Math.random()*1e4),nt=Z({valueKey:{type:String,default:"value"},modelValue:{type:[String,Number],default:""},debounce:{type:Number,default:300},placement:{type:L(String),values:["top","top-start","top-end","bottom","bottom-start","bottom-end"],default:"bottom-start"},fetchSuggestions:{type:L([Function,Array]),default:Ae},popperClass:{type:String,default:""},triggerOnFocus:{type:Boolean,default:!0},selectWhenUnmatched:{type:Boolean,default:!1},hideLoading:{type:Boolean,default:!1},label:{type:String},teleported:Ke.teleported,highlightFirstItem:{type:Boolean,default:!1},fitInputWidth:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},name:String}),rt={[H]:s=>Y(s),[Q]:s=>Y(s),[W]:s=>Y(s),focus:s=>s instanceof FocusEvent,blur:s=>s instanceof FocusEvent,clear:()=>!0,select:s=>Pe(s)},it=["aria-expanded","aria-owns"],ut={key:0},dt=["id","aria-selected","onClick"],ve="ElAutocomplete",ct=_({name:ve,inheritAttrs:!1}),pt=_({...ct,props:nt,emits:rt,setup(s,{expose:u,emit:l}){const o=s,e=He(),i=Fe(),p=Oe(),n=R("autocomplete"),d=m(),S=m(),$=m(),B=m();let x=!1,F=!1;const v=m([]),c=m(-1),E=m(""),f=m(!1),h=m(!1),N=m(!1),O=g(()=>n.b(String(ee()))),be=g(()=>i.style),k=g(()=>(v.value.length>0||N.value)&&f.value),te=g(()=>!o.hideLoading&&N.value),he=g(()=>d.value?Array.from(d.value.$el.querySelectorAll("input")):[]),ye=async()=>{await ze(),k.value&&(E.value=`${d.value.$el.offsetWidth}px`)},Ce=()=>{c.value=-1},ae=ot(async t=>{if(h.value)return;const r=b=>{N.value=!1,!h.value&&(J(b)?(v.value=b,c.value=o.highlightFirstItem?0:-1):qe(ve,"autocomplete suggestions must be an array"))};if(N.value=!0,J(o.fetchSuggestions))r(o.fetchSuggestions);else{const b=await o.fetchSuggestions(t,r);J(b)&&r(b)}},o.debounce),we=t=>{const r=!!t;if(l(Q,t),l(H,t),h.value=!1,f.value||(f.value=r),!o.triggerOnFocus&&!t){h.value=!0,v.value=[];return}ae(t)},_e=t=>{var r;p.value||(((r=t.target)==null?void 0:r.tagName)!=="INPUT"||he.value.includes(document.activeElement))&&(f.value=!0)},$e=t=>{l(W,t)},Ee=t=>{F?F=!1:(f.value=!0,l("focus",t),o.triggerOnFocus&&!x&&ae(String(o.modelValue)))},ke=t=>{setTimeout(()=>{var r;if((r=$.value)!=null&&r.isFocusInsideContent()){F=!0;return}f.value&&V(),l("blur",t)})},Te=()=>{f.value=!1,l(H,""),l("clear")},se=async()=>{k.value&&c.value>=0&&c.value<v.value.length?j(v.value[c.value]):o.selectWhenUnmatched&&(l("select",{value:o.modelValue}),v.value=[],c.value=-1)},Ie=t=>{k.value&&(t.preventDefault(),t.stopPropagation(),V())},V=()=>{f.value=!1},Se=()=>{var t;(t=d.value)==null||t.focus()},Be=()=>{var t;(t=d.value)==null||t.blur()},j=async t=>{l(Q,t[o.valueKey]),l(H,t[o.valueKey]),l("select",t),v.value=[],c.value=-1},z=t=>{if(!k.value||N.value)return;if(t<0){c.value=-1;return}t>=v.value.length&&(t=v.value.length-1);const r=S.value.querySelector(`.${n.be("suggestion","wrap")}`),A=r.querySelectorAll(`.${n.be("suggestion","list")} li`)[t],q=r.scrollTop,{offsetTop:le,scrollHeight:G}=A;le+G>q+r.clientHeight&&(r.scrollTop+=G),le<q&&(r.scrollTop-=G),c.value=t,d.value.ref.setAttribute("aria-activedescendant",`${O.value}-item-${c.value}`)};return Ve(B,()=>{k.value&&V()}),De(()=>{d.value.ref.setAttribute("role","textbox"),d.value.ref.setAttribute("aria-autocomplete","list"),d.value.ref.setAttribute("aria-controls","id"),d.value.ref.setAttribute("aria-activedescendant",`${O.value}-item-${c.value}`),x=d.value.ref.hasAttribute("readonly")}),u({highlightedIndex:c,activated:f,loading:N,inputRef:d,popperRef:$,suggestions:v,handleSelect:j,handleKeyEnter:se,focus:Se,blur:Be,close:V,highlight:z}),(t,r)=>(T(),ie(a(je),{ref_key:"popperRef",ref:$,visible:a(k),placement:t.placement,"fallback-placements":["bottom-start","top-start"],"popper-class":[a(n).e("popper"),t.popperClass],teleported:t.teleported,"gpu-acceleration":!1,pure:"","manual-mode":"",effect:"light",trigger:"click",transition:`${a(n).namespace.value}-zoom-in-top`,persistent:"",role:"listbox",onBeforeShow:ye,onHide:Ce},{content:y(()=>[P("div",{ref_key:"regionRef",ref:S,class:C([a(n).b("suggestion"),a(n).is("loading",a(te))]),style:oe({[t.fitInputWidth?"width":"minWidth"]:E.value,outline:"none"}),role:"region"},[I(a(xe),{id:a(O),tag:"ul","wrap-class":a(n).be("suggestion","wrap"),"view-class":a(n).be("suggestion","list"),role:"listbox"},{default:y(()=>[a(te)?(T(),D("li",ut,[I(a(ue),{class:C(a(n).is("loading"))},{default:y(()=>[I(a(Me))]),_:1},8,["class"])])):(T(!0),D(Le,{key:1},We(v.value,(b,A)=>(T(),D("li",{id:`${a(O)}-item-${A}`,key:A,class:C({highlighted:c.value===A}),role:"option","aria-selected":c.value===A,onClick:q=>j(b)},[w(t.$slots,"default",{item:b},()=>[de(ce(b[t.valueKey]),1)])],10,dt))),128))]),_:3},8,["id","wrap-class","view-class"])],6)]),default:y(()=>[P("div",{ref_key:"listboxRef",ref:B,class:C([a(n).b(),t.$attrs.class]),style:oe(a(be)),role:"combobox","aria-haspopup":"listbox","aria-expanded":a(k),"aria-owns":a(O)},[I(a(Re),pe({ref_key:"inputRef",ref:d},a(e),{clearable:t.clearable,disabled:a(p),name:t.name,"model-value":t.modelValue,onInput:we,onChange:$e,onFocus:Ee,onBlur:ke,onClear:Te,onKeydown:[r[0]||(r[0]=K(X(b=>z(c.value-1),["prevent"]),["up"])),r[1]||(r[1]=K(X(b=>z(c.value+1),["prevent"]),["down"])),K(se,["enter"]),K(V,["tab"]),K(Ie,["esc"])],onMousedown:_e}),Ue({_:2},[t.$slots.prepend?{name:"prepend",fn:y(()=>[w(t.$slots,"prepend")])}:void 0,t.$slots.append?{name:"append",fn:y(()=>[w(t.$slots,"append")])}:void 0,t.$slots.prefix?{name:"prefix",fn:y(()=>[w(t.$slots,"prefix")])}:void 0,t.$slots.suffix?{name:"suffix",fn:y(()=>[w(t.$slots,"suffix")])}:void 0]),1040,["clearable","disabled","name","model-value","onKeydown"])],14,it)]),_:3},8,["visible","placement","popper-class","teleported","transition"]))}});var ft=U(pt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/autocomplete/src/autocomplete.vue"]]);const Ft=fe(ft),re=s=>typeof Ye(s),vt=Z({accordion:Boolean,modelValue:{type:L([Array,String,Number]),default:()=>Ge([])}}),mt={[H]:re,[W]:re},me=Symbol("collapseContextKey"),gt=(s,u)=>{const l=m(ne(s.modelValue)),o=i=>{l.value=i;const p=s.accordion?l.value[0]:l.value;u(H,p),u(W,p)},e=i=>{if(s.accordion)o([l.value[0]===i?"":i]);else{const p=[...l.value],n=p.indexOf(i);n>-1?p.splice(n,1):p.push(i),o(p)}};return Je(()=>s.modelValue,()=>l.value=ne(s.modelValue),{deep:!0}),Qe(me,{activeNames:l,handleItemClick:e}),{activeNames:l,setActiveNames:o}},bt=()=>{const s=R("collapse");return{rootKls:g(()=>s.b())}},ht=_({name:"ElCollapse"}),yt=_({...ht,props:vt,emits:mt,setup(s,{expose:u,emit:l}){const o=s,{activeNames:e,setActiveNames:i}=gt(o,l),{rootKls:p}=bt();return u({activeNames:e,setActiveNames:i}),(n,d)=>(T(),D("div",{class:C(a(p)),role:"tablist","aria-multiselectable":"true"},[w(n.$slots,"default")],2))}});var Ct=U(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse.vue"]]);const wt=_({name:"ElCollapseTransition"}),_t=_({...wt,setup(s){const u=R("collapse-transition"),l=e=>{e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom},o={beforeEnter(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0},enter(e){e.dataset.oldOverflow=e.style.overflow,e.scrollHeight!==0?e.style.maxHeight=`${e.scrollHeight}px`:e.style.maxHeight=0,e.style.paddingTop=e.dataset.oldPaddingTop,e.style.paddingBottom=e.dataset.oldPaddingBottom,e.style.overflow="hidden"},afterEnter(e){e.style.maxHeight="",e.style.overflow=e.dataset.oldOverflow},enterCancelled(e){l(e)},beforeLeave(e){e.dataset||(e.dataset={}),e.dataset.oldPaddingTop=e.style.paddingTop,e.dataset.oldPaddingBottom=e.style.paddingBottom,e.dataset.oldOverflow=e.style.overflow,e.style.maxHeight=`${e.scrollHeight}px`,e.style.overflow="hidden"},leave(e){e.scrollHeight!==0&&(e.style.maxHeight=0,e.style.paddingTop=0,e.style.paddingBottom=0)},afterLeave(e){l(e)},leaveCancelled(e){l(e)}};return(e,i)=>(T(),ie(Ze,pe({name:a(u).b()},Xe(o)),{default:y(()=>[w(e.$slots,"default")]),_:3},16,["name"]))}});var M=U(_t,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse-transition/src/collapse-transition.vue"]]);M.install=s=>{s.component(M.name,M)};const $t=M,Et=Z({title:{type:String,default:""},name:{type:L([String,Number]),default:()=>ee()},disabled:Boolean}),kt=s=>{const u=et(me),l=m(!1),o=m(!1),e=m(ee()),i=g(()=>u==null?void 0:u.activeNames.value.includes(s.name));return{focusing:l,id:e,isActive:i,handleFocus:()=>{setTimeout(()=>{o.value?o.value=!1:l.value=!0},50)},handleHeaderClick:()=>{s.disabled||(u==null||u.handleItemClick(s.name),l.value=!1,o.value=!0)},handleEnterClick:()=>{u==null||u.handleItemClick(s.name)}}},Tt=(s,{focusing:u,isActive:l,id:o})=>{const e=R("collapse"),i=g(()=>[e.b("item"),e.is("active",a(l)),e.is("disabled",s.disabled)]),p=g(()=>[e.be("item","header"),e.is("active",a(l)),{focusing:a(u)&&!s.disabled}]),n=g(()=>[e.be("item","arrow"),e.is("active",a(l))]),d=g(()=>e.be("item","wrap")),S=g(()=>e.be("item","content")),$=g(()=>e.b(`content-${a(o)}`)),B=g(()=>e.b(`head-${a(o)}`));return{arrowKls:n,headKls:p,rootKls:i,itemWrapperKls:d,itemContentKls:S,scopedContentId:$,scopedHeadId:B}},It=["aria-expanded","aria-controls","aria-describedby"],St=["id","tabindex"],Bt=["id","aria-hidden","aria-labelledby"],Nt=_({name:"ElCollapseItem"}),At=_({...Nt,props:Et,setup(s,{expose:u}){const l=s,{focusing:o,id:e,isActive:i,handleFocus:p,handleHeaderClick:n,handleEnterClick:d}=kt(l),{arrowKls:S,headKls:$,rootKls:B,itemWrapperKls:x,itemContentKls:F,scopedContentId:v,scopedHeadId:c}=Tt(l,{focusing:o,isActive:i,id:e});return u({isActive:i}),(E,f)=>(T(),D("div",{class:C(a(B))},[P("div",{role:"tab","aria-expanded":a(i),"aria-controls":a(v),"aria-describedby":a(v)},[P("div",{id:a(c),class:C(a($)),role:"button",tabindex:E.disabled?-1:0,onClick:f[0]||(f[0]=(...h)=>a(n)&&a(n)(...h)),onKeypress:f[1]||(f[1]=K(X((...h)=>a(d)&&a(d)(...h),["stop","prevent"]),["space","enter"])),onFocus:f[2]||(f[2]=(...h)=>a(p)&&a(p)(...h)),onBlur:f[3]||(f[3]=h=>o.value=!1)},[w(E.$slots,"title",{},()=>[de(ce(E.title),1)]),I(a(ue),{class:C(a(S))},{default:y(()=>[I(a(tt))]),_:1},8,["class"])],42,St)],8,It),I(a($t),null,{default:y(()=>[at(P("div",{id:a(v),class:C(a(x)),role:"tabpanel","aria-hidden":!a(i),"aria-labelledby":a(c)},[P("div",{class:C(a(F))},[w(E.$slots,"default")],2)],10,Bt),[[st,a(i)]])]),_:3})],2))}});var ge=U(At,[["__file","/home/runner/work/element-plus/element-plus/packages/components/collapse/src/collapse-item.vue"]]);const Ot=fe(Ct,{CollapseItem:ge}),Vt=lt(ge);export{Ft as E,Vt as a,Ot as b};
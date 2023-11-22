var ge=Object.defineProperty,he=Object.defineProperties;var ve=Object.getOwnPropertyDescriptors;var I=Object.getOwnPropertySymbols;var ye=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable;var Q=(e,l,s)=>l in e?ge(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,P=(e,l)=>{for(var s in l||(l={}))ye.call(l,s)&&Q(e,s,l[s]);if(I)for(var s of I(l))be.call(l,s)&&Q(e,s,l[s]);return e},U=(e,l)=>he(e,ve(l));import{a as ke,E as N,r as b,b as $,o as xe,c as h,d as k,e as r,u as f,w as u,f as E,g as w,h as D,v as R,F as W,i as Y,j as J,k as m,l as Ce,m as d,n as we,p as B,q as Ne,t as G,s as Ve,x as Ee}from"./vendor.2cf56a29.js";const Te=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))x(a);new MutationObserver(a=>{for(const p of a)if(p.type==="childList")for(const v of p.addedNodes)v.tagName==="LINK"&&v.rel==="modulepreload"&&x(v)}).observe(document,{childList:!0,subtree:!0});function s(a){const p={};return a.integrity&&(p.integrity=a.integrity),a.referrerpolicy&&(p.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?p.credentials="include":a.crossorigin==="anonymous"?p.credentials="omit":p.credentials="same-origin",p}function x(a){if(a.ep)return;a.ep=!0;const p=s(a);fetch(a.href,p)}};Te();const T=ke.create({baseURL:"",timeout:5e4,withCredentials:!0});T.interceptors.request.use(e=>{const l=P({},e);let s={param:JSON.stringify(e.param||{})};return e.method==="get"?l.params=s:e.method==="post"&&(l.data=s),l},e=>(console.error(e),Promise.reject(e)));T.interceptors.response.use(e=>{const l=e.data;return l.state==="err"?(N({message:l.errmsg||"Error",type:"error",duration:5*1e3}),Promise.reject(new Error(l.value||"Error"))):l},e=>(console.log(`err${e}`),N({message:e.message,type:"error",duration:5*1e3}),Promise.reject(e)));function qe(e){return T({url:"/question/getQuestion",method:"get",param:e})}function Be(e){return T({url:"/question/saveQuestion",method:"post",param:e})}function Se(e){return T({url:"/question/delQuestion",method:"post",param:e})}function Le(e){return T({url:"/question/getClass",method:"get",param:e})}const Me={class:"el-container"},Ae={class:"el-aside"},Oe={class:"el-main"},He={class:"tools"},Pe=B("\u6DFB\u52A0\u8BD5\u9898"),$e=B("\u5173\u95ED"),Ke=B("\u5220\u9664"),je=B("\u4FDD\u5B58"),ze={key:0,class:"formEditor"},Fe={class:"list",style:{overflow:"auto"},"infinite-scroll-disabled":"noMore"},Ie=["innerHTML"],Qe={key:0,class:"tools"},Ue=B("\u7F16\u8F91"),De=["innerHTML"],Re={key:0,class:"tips"},We={key:1,class:"tips"},Ye={setup(e){const l=localStorage.getItem("secretKey"),s=b("");document.documentElement.clientWidth>500?document.getElementsByTagName("body")[0].className="aside-open":document.getElementsByTagName("body")[0].className="aside-close";const x=()=>{document.getElementsByTagName("body")[0].className==="aside-open"?document.getElementsByTagName("body")[0].className="aside-close":document.getElementsByTagName("body")[0].className="aside-open"},a=$([]),p=t=>{const o={};for(let g=0;g<t.length;g++){const c=t[g],C={label:c.label,code:c.code,children:[]};if(c.father){let y=o[c.father];y?y.children.push(C):o[c.father]={code:c.father,children:[C]},o[c.code]=C}else o[c.code]?o[c.code].label=c.label:o[c.code]=C,a.push(o[c.code])}},v=b([]);xe(async()=>{const t=await Le();console.log(t),v.value=t.list,p([{code:null,label:"\u5168\u90E8",father:"",sort:0},...t.list]),L()});const M={children:"children",label:"label"};let S=$([]);const V=b(!1),j=b(!1),A=b(0),O=b(null),L=async()=>{if(V.value)return;V.value=!0;const t=await qe({page:A.value++,count:20,class:O.value,search:s.value});console.log(t),V.value=!1,t.list.length>0?S.push(...t.list):j.value=!0},z=(t,o)=>{Array.isArray(t)||(t=[t]);for(let g=0;g<t.length;g++){o.push(t[g].code);const c=t[g].children;c.length>0&&z(c,o)}return o},X=async t=>{console.log(t),S.length=0;const o=z(t,[]);O.value=o[0]===null?null:o,V.value=!1,A.value=0,L()},_=b(!1),n=$({class:"",level:0,sort:"",question:"",answer:"",code:""}),H=b("add"),Z=()=>{H.value="add",_.value=!0,n.class="",n.level=0,n.sort="",n.question="",n.answer="",n.code=""},ee=t=>{H.value="update",_.value=!0,n.class=t.class,n.level=t.level,n.sort=t.sort,n.question=t.question,n.answer=t.answer,n.code=t.code},te=async()=>{console.log(n),(await Be(U(P({},n),{key:l}))).state==="ok"?(N({type:"success",message:"\u4FDD\u5B58\u6210\u529F"}),_.value=!1):N({type:"error",message:"\u4FDD\u5B58\u5931\u8D25"})},le=()=>{J.confirm("\u786E\u8BA4\u5220\u9664?","Warning",{confirmButtonText:"OK",cancelButtonText:"Cancel",type:"warning"}).then(async()=>{(await Se({code:n.code,key:l})).state==="ok"?(N({type:"success",message:"\u5220\u9664\u6210\u529F"}),_.value=!1):N({type:"error",message:"\u5220\u9664\u5931\u8D25"})})},oe=t=>{n.question=t},se=t=>{n.answer=t},ne=()=>{J.prompt("Please input your secretKey","Tip",{confirmButtonText:"OK",cancelButtonText:"Cancel"}).then(({value:t})=>{localStorage.setItem("secretKey",t),N({type:"success",message:"\u5BC6\u94A5\u8BBE\u7F6E\u6210\u529F"})})},ae=t=>{console.log(t,s.value),A.value=0,S.length=0,V.value=!1,O.value=null,L()};return(t,o)=>{const g=m("el-tree"),c=m("el-icon"),C=m("el-input"),y=m("el-button"),re=m("el-space"),F=m("TEditor"),q=m("el-form-item"),ie=m("el-option"),ce=m("el-select"),ue=m("el-rate"),de=m("el-form"),pe=m("el-collapse-item"),me=m("el-collapse"),fe=m("el-card"),_e=Ce("infinite-scroll");return d(),h("div",Me,[k("div",Ae,[k("div",{class:"header",onDblclick:ne},"\u9022\u8003\u5FC5\u8FC7",32),r(g,{data:f(a),props:M,onNodeClick:X,"highlight-current":!0},null,8,["data"])]),k("div",Oe,[k("div",{class:"sidebar-toggle",onClick:x},[r(c,{size:26,color:"#989494"},{default:u(()=>[r(f(we))]),_:1})]),k("div",He,[_.value?w("",!0):(d(),E(C,{key:0,modelValue:s.value,"onUpdate:modelValue":o[0]||(o[0]=i=>s.value=i),onInput:ae,placeholder:"\u8BF7\u641C\u7D22",style:{width:"300px"}},null,8,["modelValue"])),f(l)?(d(),E(re,{key:1,wrap:""},{default:u(()=>[_.value?(d(),E(y,{key:1,type:"primary",onClick:o[2]||(o[2]=i=>_.value=!1)},{default:u(()=>[$e]),_:1})):(d(),E(y,{key:0,type:"primary",onClick:o[1]||(o[1]=i=>Z())},{default:u(()=>[Pe]),_:1})),H.value==="update"&&_.value?(d(),E(y,{key:2,type:"primary",onClick:o[3]||(o[3]=i=>le())},{default:u(()=>[Ke]),_:1})):w("",!0),D(r(y,{type:"primary",onClick:te},{default:u(()=>[je]),_:1},512),[[R,_.value]])]),_:1})):w("",!0)]),_.value?(d(),h("div",ze,[r(de,{ref:"formRef",model:f(n)},{default:u(()=>[r(q,{label:"\u9898\u5E72"},{default:u(()=>[r(F,{ref:"editor",value:f(n).question,onContentchange:oe},null,8,["value"])]),_:1}),r(q,{label:"\u7B54\u6848"},{default:u(()=>[r(F,{ref:"editor",value:f(n).answer,onContentchange:se},null,8,["value"])]),_:1}),r(q,{label:"\u5206\u7C7B"},{default:u(()=>[r(ce,{modelValue:f(n).class,"onUpdate:modelValue":o[4]||(o[4]=i=>f(n).class=i),placeholder:"\u9009\u62E9\u5206\u7C7B"},{default:u(()=>[(d(!0),h(W,null,Y(v.value,i=>(d(),E(ie,{label:i.label,value:i.code,key:i.code},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1}),r(q,{label:"\u6743\u91CD"},{default:u(()=>[r(ue,{modelValue:f(n).level,"onUpdate:modelValue":o[5]||(o[5]=i=>f(n).level=i)},null,8,["modelValue"])]),_:1}),r(q,{label:"\u6392\u5E8F"},{default:u(()=>[r(C,{modelValue:f(n).sort,"onUpdate:modelValue":o[6]||(o[6]=i=>f(n).sort=i)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])])):w("",!0),D((d(),h("ul",Fe,[(d(!0),h(W,null,Y(f(S),i=>(d(),h("li",{key:i.level,class:"list-item"},[r(fe,{class:"box-card"},{default:u(()=>[k("span",{innerHTML:i.question},null,8,Ie),f(l)?(d(),h("div",Qe,[r(y,{type:"primary",onClick:tt=>ee(i)},{default:u(()=>[Ue]),_:2},1032,["onClick"])])):w("",!0),r(me,null,{default:u(()=>[r(pe,{title:"\u7B54\u6848",name:"1"},{default:u(()=>[k("span",{innerHTML:i.answer},null,8,De)]),_:2},1024)]),_:2},1024)]),_:2},1024)]))),128)),k("li",null,[V.value?(d(),h("p",Re,"Loading...")):w("",!0),j.value?(d(),h("p",We,"No more")):w("",!0)])])),[[_e,L],[R,!_.value]])])])}}};var Je=(e,l)=>{const s=e.__vccOpts||e;for(const[x,a]of l)s[x]=a;return s};const Ge={name:"TEditor",components:{Editor:Ne},props:{value:{type:String,default:""},disabled:{type:Boolean,default:!1},plugins:{type:[String,Array],default:"print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template code codesample table charmap hr pagebreak nonbreaking anchor insertdatetime advlist lists wordcount textpattern autosave "},toolbar:{type:[String,Array],default:"fullscreen undo redo restoredraft | cut copy paste pastetext | forecolor backcolor bold italic underline strikethrough link anchor | alignleft aligncenter alignright alignjustify outdent indent |                 styleselect formatselect fontselect fontsizeselect | bullist numlist | blockquote subscript superscript removeformat |                 table image media charmap hr pagebreak insertdatetime print preview | code selectall searchreplace visualblocks | indent2em lineheight formatpainter axupimgs"}},data(){return{init:{language_url:"/tinymce/langs/zh_CN.js",language:"zh_CN",skin_url:"/tinymce/skins/ui/oxide",plugins:this.plugins,toolbar:this.toolbar,fontsize_formats:"12px 14px 16px 18px 20px 22px 24px 28px 32px 36px 48px 56px 72px",font_formats:"\u5FAE\u8F6F\u96C5\u9ED1=Microsoft YaHei,Helvetica Neue,PingFang SC,sans-serif;\u82F9\u679C\u82F9\u65B9=PingFang SC,Microsoft YaHei,sans-serif;\u5B8B\u4F53=simsun,serif;\u4EFF\u5B8B\u4F53=FangSong,serif;\u9ED1\u4F53=SimHei,sans-serif;Arial=arial,helvetica,sans-serif;Arial Black=arial black,avant garde;Book Antiqua=book antiqua,palatino;",lineheight_formats:"0.5 0.8 1 1.2 1.5 1.75 2 2.5 3 4 5",height:400,placeholder:"\u5728\u8FD9\u91CC\u8F93\u5165\u6587\u5B57",branding:!1,resize:!1,elementpath:!1,content_style:"img {max-width:100%;}",content_css:"/tinymce/tinycontent.css",paste_data_images:!0,images_upload_handler:(e,l,s)=>{}},contentValue:this.value}},watch:{value(e){console.log(e),this.contentValue=e},contentValue(e){console.log(e,this.$data),this.$emit("contentchange",e)}},created(){console.log(this.value)},mounted(){G.init({})},updated(){},methods:{onClick(e){this.$emit("onClick",e,G)},clear(){this.contentValue=""}}},Xe={class:"tinymce-box"};function Ze(e,l,s,x,a,p){const v=m("Editor");return d(),h("div",Xe,[r(v,{modelValue:a.contentValue,"onUpdate:modelValue":l[0]||(l[0]=M=>a.contentValue=M),init:a.init,disabled:s.disabled,onOnClick:p.onClick},null,8,["modelValue","init","disabled","onOnClick"])])}var et=Je(Ge,[["render",Ze]]);const K=Ve(Ye);K.use(Ee);K.component("TEditor",et);K.mount("#app");

"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[914],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var i=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?i.createElement(m,l(l({ref:t},u),{},{components:n})):i.createElement(m,l({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7802:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var i=n(5773),r=n(808),a=(n(7378),n(5318)),l=["components"],o={id:"TitleData",title:"Interface: TitleData",sidebar_label:"TitleData",sidebar_position:0,custom_edit_url:null},c=void 0,s={unversionedId:"Documentation/interfaces/TitleData",id:"Documentation/interfaces/TitleData",isDocsHomePage:!1,title:"Interface: TitleData",description:"Properties",source:"@site/docs/Documentation/interfaces/TitleData.md",sourceDirName:"Documentation/interfaces",slug:"/Documentation/interfaces/TitleData",permalink:"/nintendo-switch-eshop/docs/Documentation/interfaces/TitleData",editUrl:null,tags:[],version:"current",lastUpdatedBy:"Jeroen Claassens",lastUpdatedAt:1636146232,formattedLastUpdatedAt:"11/5/2021",sidebarPosition:0,frontMatter:{id:"TitleData",title:"Interface: TitleData",sidebar_label:"TitleData",sidebar_position:0,custom_edit_url:null},sidebar:"sidebar",previous:{title:"QueriedGameUS",permalink:"/nintendo-switch-eshop/docs/Documentation/interfaces/QueriedGameUS"}},u=[{value:"Properties",id:"properties",children:[{value:"discount_price",id:"discount_price",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"regular_price",id:"regular_price",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"sales_status",id:"sales_status",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3},{value:"title_id",id:"title_id",children:[{value:"Defined in",id:"defined-in-3",children:[],level:4}],level:3}],level:2}],d={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"discount_price"},"discount","_","price"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("inlineCode",{parentName:"p"},"Optional")," ",(0,a.kt)("strong",{parentName:"p"},"discount","_","price"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PriceData")),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lmmfranco/nintendo-switch-eshop/blob/18d6330/src/lib/utils/interfaces.ts#L310"},"lib/utils/interfaces.ts:310")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"regular_price"},"regular","_","price"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"regular","_","price"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PriceData")),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lmmfranco/nintendo-switch-eshop/blob/18d6330/src/lib/utils/interfaces.ts#L309"},"lib/utils/interfaces.ts:309")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"sales_status"},"sales","_","status"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"sales","_","status"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"string")),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lmmfranco/nintendo-switch-eshop/blob/18d6330/src/lib/utils/interfaces.ts#L308"},"lib/utils/interfaces.ts:308")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"title_id"},"title","_","id"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"title","_","id"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"number")),(0,a.kt)("h4",{id:"defined-in-3"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/lmmfranco/nintendo-switch-eshop/blob/18d6330/src/lib/utils/interfaces.ts#L307"},"lib/utils/interfaces.ts:307")))}p.isMDXComponent=!0}}]);
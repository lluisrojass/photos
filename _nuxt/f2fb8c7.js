(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,n){"use strict";var r=n(69),o=n.n(r);n.d(e,"default",(function(){return o.a}))},102:function(t,e,n){"use strict";var r=n(70),o=n.n(r);n.d(e,"default",(function(){return o.a}))},103:function(t,e,n){"use strict";var r=n(72),o=n.n(r);n.d(e,"default",(function(){return o.a}))},104:function(t,e,n){"use strict";var r=n(73),o=n.n(r);n.d(e,"default",(function(){return o.a}))},105:function(t,e,n){"use strict";var r=n(74),o=n.n(r);n.d(e,"default",(function(){return o.a}))},106:function(t,e,n){"use strict";var r=n(75),o=n.n(r);n.d(e,"default",(function(){return o.a}))},107:function(t,e,n){"use strict";var r=n(76),o=n.n(r);n.d(e,"default",(function(){return o.a}))},108:function(t,e,n){"use strict";var r=n(102),o=n(6);var component=Object(o.a)({},(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.$style.row},[t._t("default")],2)}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.a=component.exports},138:function(t,e,n){"use strict";n(82);var r=n(20),o=n(71),l={mixins:[r.b,o.a],props:{size:{required:!1,type:Number,default:1,validator:function(t){return t>=1&&t<=6}}}},c=n(104),f=n(6);var component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("h"+t.$props.size,{tag:"component",class:["text",t.textSizeClass,t.textVariantClass,t.$style.heading]},[t._t("default")],2)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports},142:function(t){t.exports=JSON.parse('{"404":"404, Not Found","5xx":"An Error Occurred","reportABug":{"href":"https://github.com/lluisrojass/bw/issues/new","text":"Report a Bug"}}')},143:function(t){t.exports=JSON.parse('{"home":{"href":"/","text":"Home"},"about":{"href":"/about","text":"About"},"monthly":{"href":"/monthly","text":"Monthly Stream"}}')},146:function(t,e,n){"use strict";var r=n(38),o=n(77),l=n(20),c=n(56),f={components:{Link:o.a},props:{home:{type:Object,required:!0},about:{type:Object,required:!0},monthly:{type:Object,required:!0}},data:function(){return{TEXT_SIZES:l.a}},computed:{isAtHomePage:function(){return c.a.isHomePage(this.$route.fullPath)},isAtAboutPage:function(){return c.a.isAboutPage(this.$route.fullPath)},isAtMonthlyPage:function(){return c.a.isMonthlyPage(this.$route.fullPath)}}},d=n(106),v=n(6);var x=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Link",{class:t.$style.link,attrs:{to:t.$props.home.href,disabled:t.isAtHomePage,uppercase:!0,"text-size":t.TEXT_SIZES.SMALL}},[t._v(t._s(t.home.text))]),t._v(" "),n("Link",{class:t.$style.link,attrs:{to:t.monthly.href,disabled:t.isAtMonthlyPage,uppercase:!0,"text-size":t.TEXT_SIZES.SMALL}},[t._v(t._s(t.monthly.text))]),t._v(" "),n("Link",{class:t.$style.link,attrs:{to:t.about.href,disabled:t.isAtAboutPage,uppercase:!0,"text-size":t.TEXT_SIZES.SMALL}},[t._v(t._s(t.about.text))])],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null).exports,header=n(143),h={components:{Header:x,Region:r.b},data:function(){return{header:header,REGION_TYPES:r.a}}},y=n(107);var _=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("Region",{class:t.$style["header-container"],attrs:{type:t.REGION_TYPES.NO_VERTICAL_MARGIN}},[n("Header",t._b({},"Header",t.header,!1))],1),t._v(" "),n("Nuxt")],1)}),[],!1,(function(t){this.$style=y.default.locals||y.default}),null,null);e.a=_.exports},147:function(t,e,n){t.exports=n(148)},189:function(t,e,n){},190:function(t,e,n){},191:function(t,e,n){},20:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,o=n(9),l=(n(82),n(34),n(35),n(136),{SMALL:0,LARGE:1,MEDIUM:3,NONE:2}),c=(r={},Object(o.a)(r,l.SMALL,"text--small"),Object(o.a)(r,l.LARGE,"text--large"),Object(o.a)(r,l.MEDIUM,"text--medium"),r);e.b={props:{textSize:{type:Number,validator:function(t){return Object.values(l).includes(t)},required:!1,default:l.NONE}},data:function(t){return{textSizeClass:c[t.textSize]}}}},26:function(t,e,n){"use strict";var r=n(38),o=n(108),l=n(77),c=n(20),f=n(138),d=n(142),v={components:{Link:l.a,Region:r.b,Heading:f.a,Row:o.a},layout:"error",props:{error:{type:Object,required:!0}},data:function(){return{TEXT_SIZES:c.a,errorModel:d}}},x=n(105),h=n(6);var component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Region",[n("Row",{class:[t.$style.center,t.$style["vertical-space"]]},[404===t.error.statusCode?n("Heading",[t._v("\n      "+t._s(t.errorModel[404])+"\n    ")]):n("Heading",[t._v("\n      "+t._s(t.errorModel["5xx"])+"\n    ")])],1),t._v(" "),n("Row",{class:t.$style.center},[n("Link",{attrs:{uppercase:!0,"text-size":t.TEXT_SIZES.MEDIUM,to:t.errorModel.reportABug.href}},[t._v("\n      "+t._s(t.errorModel.reportABug.text)+"\n    ")])],1),t._v(" "),n("Row",{class:t.$style.center})],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.a=component.exports},38:function(t,e,n){"use strict";n.d(e,"a",(function(){return l}));var r,o=n(9),l=(n(82),n(34),n(35),n(136),{NO_VERTICAL_MARGIN:1,LAST:2,NONE:0}),c=(r={},Object(o.a)(r,l.NO_VERTICAL_MARGIN,"region--no-vertical-margin"),Object(o.a)(r,l.LAST,"region--last"),r),f={props:{type:{type:Number,validator:function(t){return Object.values(l).includes(t)},required:!1,default:l.NONE}},data:function(t){return{classStyle:c[t.type]}}},d=n(101),v=n(6);var component=Object(v.a)(f,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:[t.$style.region,t.$style[t.classStyle]]},[t._t("default")],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.b=component.exports},56:function(t,e,n){"use strict";var r=n(54),o=n(55),l=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"isAboutPage",value:function(e){return e===t.createAboutSlug()}},{key:"isHomePage",value:function(e){return e===t.createHomeSlug()}},{key:"isMonthlyPage",value:function(e){return e===t.createMonthlySlug()}},{key:"createMonthlySlug",value:function(){return"/monthly"}},{key:"createHomeSlug",value:function(){return"/"}},{key:"createAboutSlug",value:function(){return"/about"}},{key:"createAppPrefix",value:function(){return"/bw"}},{key:"createImageSlug",value:function(){return"/images"}},{key:"createImageDirPath",value:function(){return[t.createAppPrefix(),t.createImageSlug()].join("")}},{key:"createInternalImagePath",value:function(t){return["/image","/".concat(t)].join("")}}]),t}();e.a=l},69:function(t,e,n){t.exports={region:"region_1U3-K","region--no-vertical-margin":"region--no-vertical-margin_qpDcN","region--last":"region--last_13iWF"}},70:function(t,e,n){t.exports={row:"row_3KI6Z"}},71:function(t,e,n){"use strict";e.a={props:{uppercase:{type:Boolean,required:!1,default:!1},capitalize:{type:Boolean,required:!1,default:!1}},data:function(t){var e="";return t.uppercase?e="text--uppercase":t.capitalize&&(e="text--capitalize"),{textVariantClass:e}}}},72:function(t,e,n){t.exports={link:"link_1vvgQ","link--disabled":"link--disabled_2GvfQ","link--has-text":"link--has-text_3_Gn6"}},73:function(t,e,n){t.exports={heading:"heading_3t0uS"}},74:function(t,e,n){t.exports={center:"center_va63s","vertical-space":"vertical-space_2cLN0"}},75:function(t,e,n){t.exports={link:"link_Phcsb"}},76:function(t,e,n){t.exports={"header-container":"header-container_myzFJ"}},77:function(t,e,n){"use strict";var r=n(20),o=n(71),l={mixins:[r.b,o.a],props:{disabled:{type:Boolean,required:!1,default:!1},isForText:{type:Boolean,required:!1,default:!0},to:{type:String,required:!0}},data:function(t){return{isExternal:0===t.to.indexOf("http")}}},c=n(103),f=n(6);var component=Object(f.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.isExternal?"a":"NuxtLink",{tag:"component",class:["text",t.$style.link,t.textSizeClass,t.textVariantClass,t.$props.disabled?t.$style["link--disabled"]:"",t.$props.isForText?t.$style["link--has-text"]:""],attrs:{to:t.isExternal?void 0:t.to,href:t.isExternal?t.to:void 0,rel:t.isExternal?"noopener noreferrer nofollow":void 0,target:t.isExternal?"blank":void 0,tabIndex:t.$props.disabled?-1:0}},[t._t("default")],2)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.a=component.exports}},[[147,6,1,7]]]);
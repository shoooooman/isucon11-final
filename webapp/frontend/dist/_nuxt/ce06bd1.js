(window.webpackJsonp=window.webpackJsonp||[]).push([[4,3,10],{246:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({}),l=n(20),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"bg-white shadow-lg px-6 py-4"},[e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports},248:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(246),o=r.a.extend({name:"Accordion",components:{Card:l.default},data:function(){return{isOpen:!1}},methods:{toggle:function(){var e=this;this.isOpen?this.$emit("close",{done:function(){return e.isOpen=!e.isOpen}}):this.$emit("open",{done:function(){return e.isOpen=!e.isOpen}})}}}),c=n(20),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("Card",[n("div",{staticClass:"flex flex-col justify-between leading-normal"},[n("a",{staticClass:"p-4 block bg-white no-underline text-black",attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.toggle.apply(null,arguments)}}},[e._t("header"),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"p-2"},[e._t("default")],2),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:!e.isOpen,expression:"!isOpen"}],staticClass:"text-primary-500"},[e._v("▼ 詳細を見る")]),e._v(" "),n("span",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"text-primary-500"},[e._v("▲ 閉じる")])],2)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Card:n(246).default})},263:function(e,t,n){"use strict";n.r(t);var r=n(0),l=n(248),o=r.a.extend({name:"Announcement",components:{Accordion:l.default},props:{announcement:{type:Object,required:!0}},data:function(){return{}}}),c=n(20),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mt-7 flex-grow-0"},[n("Accordion",{on:{open:function(t){return e.$emit("open",t)},close:function(t){return e.$emit("close",t)}},scopedSlots:e._u([{key:"header",fn:function(){return[n("div",{staticClass:"text-2xl text-primary-500 flex items-center mb-1"},[n("span",{staticClass:"font-light mr-2"},[e._v("\n          "+e._s(e.announcement.courseName)+"\n        ")]),e._v(" "),n("span",{staticClass:"font-bold"},[e._v("\n          "+e._s(e.announcement.title)+"\n        ")])]),e._v(" "),n("div",{staticClass:"mb-4 flex items-center"},[n("fa-icon",{staticClass:"text-gray-500",attrs:{icon:["far","clock"],size:"sm"}}),e._v(" "),n("span",{staticClass:"text-gray-500 text-sm mr-2"},[e._v("\n          "+e._s(e.announcement.createdAt)+"\n        ")]),e._v(" "),e.announcement.unread?[n("span",{staticClass:"\n              pt-1\n              pl-2\n              pr-2\n              pb-1\n              text-xs text-white\n              rounded-sm\n              bg-primary-500\n            "},[e._v("未読")])]:e._e()],2)]},proxy:!0},{key:"default",fn:function(){return[n("p",{staticClass:"text-black text-base break-all mb-4"},[e._v("\n        "+e._s(e.announcement.message||"")+"\n      ")])]},proxy:!0}])})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Accordion:n(248).default})}}]);
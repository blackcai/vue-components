(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{445:function(n,e,t){"use strict";t.r(e);var c={name:"TestKey",data:function(){return{arr:[{name:"test1"},{name:"test2"},{name:"test3"}]}},methods:{changeClick:function(){console.log("changeClick"),this.$set(this.arr,[0],{name:"newTest"}),console.log(this.arr)},deleteClick:function(){this.arr.splice(1,1)},handleClick:function(n){console.log(n)}}},l=t(6),component=Object(l.a)(c,(function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",[t("el-button",{on:{click:n.changeClick}},[n._v("切换")]),n._v(" "),t("el-button",{on:{click:n.deleteClick}},[n._v("删除")]),n._v(" "),n._l(n.arr,(function(e,c){return t("div",{on:{click:function(t){return n.handleClick(e)}}},[n._v(n._s(e))])}))],2)}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{315:function(t,e,c){var content=c(334);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(21).default)("34288eab",content,!0,{sourceMap:!1})},318:function(t,e,c){var r=c(15);t.exports=function(t,e){if(!r(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},325:function(t,e,c){"use strict";var r=c(6),n=c(326)(6),o="findIndex",l=!0;o in[]&&Array(1)[o](function(){l=!1}),r(r.P+r.F*l,"Array",{findIndex:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}}),c(134)(o)},326:function(t,e,c){var r=c(45),n=c(133),o=c(46),l=c(37),d=c(327);t.exports=function(t,e){var c=1==t,h=2==t,f=3==t,v=4==t,_=6==t,P=5==t||_,y=e||d;return function(e,d,m){for(var x,k,S=o(e),w=n(S),C=r(d,m,3),A=l(w.length),N=0,O=c?y(e,A):h?y(e,0):void 0;A>N;N++)if((P||N in w)&&(k=C(x=w[N],N,S),t))if(c)O[N]=k;else if(k)switch(t){case 3:return!0;case 5:return x;case 6:return N;case 2:O.push(x)}else if(v)return!1;return _?-1:f||v?v:O}}},327:function(t,e,c){var r=c(328);t.exports=function(t,e){return new(r(t))(e)}},328:function(t,e,c){var r=c(15),n=c(181),o=c(2)("species");t.exports=function(t){var e;return n(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!n(e.prototype)||(e=void 0),r(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},329:function(t,e,c){"use strict";var strong=c(330),r=c(318);t.exports=c(331)("Set",function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}},{add:function(t){return strong.def(r(this,"Set"),t=0===t?0:t,t)}},strong)},330:function(t,e,c){"use strict";var r=c(9).f,n=c(90),o=c(177),l=c(45),d=c(175),h=c(176),f=c(132),v=c(182),_=c(136),P=c(7),y=c(174).fastKey,m=c(318),x=P?"_s":"size",k=function(t,e){var c,r=y(e);if("F"!==r)return t._i[r];for(c=t._f;c;c=c.n)if(c.k==e)return c};t.exports={getConstructor:function(t,e,c,f){var v=t(function(t,r){d(t,v,e,"_i"),t._t=e,t._i=n(null),t._f=void 0,t._l=void 0,t[x]=0,null!=r&&h(r,c,t[f],t)});return o(v.prototype,{clear:function(){for(var t=m(this,e),data=t._i,c=t._f;c;c=c.n)c.r=!0,c.p&&(c.p=c.p.n=void 0),delete data[c.i];t._f=t._l=void 0,t[x]=0},delete:function(t){var c=m(this,e),r=k(c,t);if(r){var n=r.n,o=r.p;delete c._i[r.i],r.r=!0,o&&(o.n=n),n&&(n.p=o),c._f==r&&(c._f=n),c._l==r&&(c._l=o),c[x]--}return!!r},forEach:function(t){m(this,e);for(var c,r=l(t,arguments.length>1?arguments[1]:void 0,3);c=c?c.n:this._f;)for(r(c.v,c.k,this);c&&c.r;)c=c.p},has:function(t){return!!k(m(this,e),t)}}),P&&r(v.prototype,"size",{get:function(){return m(this,e)[x]}}),v},def:function(t,e,c){var r,n,o=k(t,e);return o?o.v=c:(t._l=o={i:n=y(e,!0),k:e,v:c,p:r=t._l,n:void 0,r:!1},t._f||(t._f=o),r&&(r.n=o),t[x]++,"F"!==n&&(t._i[n]=o)),t},getEntry:k,setStrong:function(t,e,c){f(t,e,function(t,c){this._t=m(t,e),this._k=c,this._l=void 0},function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))},c?"entries":"values",!c,!0),_(e)}}},331:function(t,e,c){"use strict";var r=c(3),n=c(6),o=c(14),l=c(177),meta=c(174),d=c(176),h=c(175),f=c(15),v=c(8),_=c(178),P=c(60),y=c(137);t.exports=function(t,e,c,m,x,k){var S=r[t],w=S,C=x?"set":"add",A=w&&w.prototype,N={},O=function(t){var e=A[t];o(A,t,"delete"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!f(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof w&&(k||A.forEach&&!v(function(){(new w).entries().next()}))){var z=new w,U=z[C](k?{}:-0,1)!=z,T=v(function(){z.has(1)}),$=_(function(t){new w(t)}),V=!k&&v(function(){for(var t=new w,e=5;e--;)t[C](e,e);return!t.has(-0)});$||((w=e(function(e,c){h(e,w,t);var r=y(new S,e,w);return null!=c&&d(c,x,r[C],r),r})).prototype=A,A.constructor=w),(T||V)&&(O("delete"),O("has"),x&&O("get")),(V||U)&&O(C),k&&A.clear&&delete A.clear}else w=m.getConstructor(e,t,x,C),l(w.prototype,c),meta.NEED=!0;return P(w,t),N[t]=w,n(n.G+n.W+n.F*(w!=S),N),k||m.setStrong(w,t,x),w}},332:function(t,e,c){"use strict";var r=c(45),n=c(6),o=c(46),l=c(183),d=c(184),h=c(37),f=c(186),v=c(185);n(n.S+n.F*!c(178)(function(t){Array.from(t)}),"Array",{from:function(t){var e,c,n,_,P=o(t),y="function"==typeof this?this:Array,m=arguments.length,x=m>1?arguments[1]:void 0,k=void 0!==x,S=0,w=v(P);if(k&&(x=r(x,m>2?arguments[2]:void 0,2)),null==w||y==Array&&d(w))for(c=new y(e=h(P.length));e>S;S++)f(c,S,k?x(P[S],S):P[S]);else for(_=w.call(P),c=new y;!(n=_.next()).done;S++)f(c,S,k?l(_,x,[n.value,S],!0):n.value);return c.length=S,c}})},333:function(t,e,c){"use strict";var r=c(315);c.n(r).a},334:function(t,e,c){(t.exports=c(20)(!1)).push([t.i,"*{list-style:none;padding:0;border:0}#app{padding:50px}#app .title{padding:0 12px;line-height:1;font-size:18px;border-left:4px solid #50bfff;color:#666;margin:0 0 16px;font-weight:400}#app .example{margin-top:50px}#app .example .code-area{width:740px;height:300px;box-sizing:border-box;padding:20px;border:2px dashed #c00;font-size:14px;line-height:1.6}#app .specification{display:inline-block;vertical-align:top;width:480px}#app .specification .spec-list{background-color:#fff;border:1px solid #d8d8d8;padding:10px}#app .specification .spec-list .item{margin-top:5px}#app .specification .spec-list .item:first-child{margin-top:0}#app .specification .spec-list .item .name{background:#f3f6fb;padding:2px 8px;text-align:right;overflow:hidden}#app .specification .spec-list .item .name .el-input{float:left;width:150px}#app .specification .spec-list .item .name .icon{display:none;color:#929292;cursor:pointer}#app .specification .spec-list .item .name .icon:hover{color:#800}#app .specification .spec-list .item .name:hover .icon{display:inline-block}#app .specification .spec-list .item .values .el-tag{margin:8px 0 0 8px}#app .specification .spec-list .item .values .add-attr{display:inline-block;vertical-align:top;margin-top:4px}#app .specification .spec-list .item .values .add-attr .el-input{width:200px;margin:2px 0 0 4px}#app .specification .spec-list .add-spec{font-size:13px}#app .stock-table{width:740px;padding:0;border-collapse:separate;border-color:#dfe6ec;border-style:solid;border-width:1px 0 0 1px;background-color:#fff}#app .stock-table td,#app .stock-table th{padding:4px 10px;border-bottom:1px solid #dfe6ec;border-right:1px solid #dfe6ec}#app .stock-table th{line-height:30px;background-color:#eef1f6}#app .stock-table .link{cursor:pointer;color:#08e;font-size:13px;margin-left:6px}#app .stock-table .wh-foot{line-height:30px}#app .stock-table .wh-foot .label,#app .stock-table .wh-foot .set-list{display:inline-block;vertical-align:top}#app .stock-table .wh-foot .set-list{font-size:0}#app .stock-table .wh-foot .set-list .set-item{display:inline-block;vertical-align:top;margin-left:15px;font-size:13px;cursor:pointer;color:#08e}#app .stock-table .wh-foot .set-form{display:inline-block;margin-left:10px}#app .stock-table .wh-foot .set-form .el-input{display:inline-block;width:120px}#app .stock-table .wh-foot .set-form .set-btn{display:inline-block;padding:0 2px;font-size:15px;cursor:pointer}#app .stock-table .wh-foot .set-form .set-btn.blue{color:#08e}#app .stock-table .wh-foot .set-form .set-btn.red{color:#c00}#app .stock-table .wh-foot .right{float:right}#app .stock-table .wh-foot .text{font-size:13px}",""])},340:function(t,e,c){"use strict";c.r(e);c(59),c(325),c(179),c(180),c(22),c(16),c(329),c(131),c(332),c(89);var r=c(28);function n(t,e){for(var c in t){if(t.hasOwnProperty(c)!==e.hasOwnProperty(c))return!1;if(Object(r.a)(t[c])!==Object(r.a)(e[c]))return!1}for(var o in e){if(t.hasOwnProperty(o)!==e.hasOwnProperty(o))return!1;if(Object(r.a)(t[o])!==Object(r.a)(e[o]))return!1;if(t.hasOwnProperty(o))if(t[o]instanceof Array&&e[o]instanceof Array){if(n(!t[o],e[o]))return!1}else if(t[o]instanceof Object&&e[o]instanceof Object){if(n(!t[o],e[o]))return!1}else if(t[o]!==e[o])return!1}return!0}var o={name:"app",data:function(){return{specification:[{name:"颜色",value:["黑色","白色","蓝色"]}],childProductArray:[{childProductId:0,childProductSpec:{"颜色":"黑色"},childProductNo:"PRODUCTNO_0",childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0},{childProductId:0,childProductSpec:{"颜色":"白色"},childProductNo:"PRODUCTNO_1",childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0},{childProductId:0,childProductSpec:{"颜色":"蓝色"},childProductNo:"PRODUCTNO_2",childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0}],addValues:[],defaultProductNo:"PRODUCTNO_",isSetListShow:!0,batchValue:"",currentType:""}},computed:{stockSpecArr:function(){return this.childProductArray.map(function(t){return t.childProductSpec})}},methods:{addSpec:function(){this.specification.length<5&&this.specification.push({name:"",value:[]})},delSpec:function(t){this.specification.splice(t,1),this.handleSpecChange("del")},addSpecTag:function(t){var e=this.addValues[t]||"";if(e.trim()){var c=(e=e.trim()).split(/\s+/),r=this.specification[t].value.concat(c);r=Array.from(new Set(r)),this.$set(this.specification[t],"value",r),this.clearAddValues(t),this.handleSpecChange("add")}},delSpecTag:function(t,e){this.specification[t].value.splice(e,1),this.handleSpecChange("del")},clearAddValues:function(t){this.$set(this.addValues,t,"")},getSpecAttr:function(t,e){var c,r=this.specification[t].value;c=this.specification[t+1]&&this.specification[t+1].value.length?e/this.countSum(t+1):e;var i=Math.floor(c%r.length);return"NaN"!==i.toString()?r[i]:""},countSum:function(t){var e=1;return this.specification.forEach(function(c,r){r>=t&&c.value.length&&(e*=c.value.length)}),e},showTd:function(t,e){return!!this.specification[t]&&e%this.countSum(t+1)==0},handleSpecChange:function(option){var t=JSON.parse(JSON.stringify(this.childProductArray));"del"===option&&(this.childProductArray=[]);for(var i=0;i<this.countSum(0);i++)this.changeStock(option,i,t)},changeStock:function(option,t,e){var c={childProductId:0,childProductSpec:this.getChildProductSpec(t),childProductNo:this.defaultProductNo+t,childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0},r=c.childProductSpec;if("add"===option)-1===this.stockSpecArr.findIndex(function(t){return n(r,t)})&&this.$set(this.childProductArray,t,c);else if("del"===option){var o="";e.forEach(function(t){if(n(r,t.childProductSpec))return o=t,!1}),this.childProductArray.push(o||c)}},getChildProductSpec:function(t){var e=this,c={};return this.specification.forEach(function(r,n){c[r.name]=e.getSpecAttr(n,t)}),c},handleUserChange:function(t,e){if(e){var c=this.makeProductNoNotRepet(t);this.$set(this.childProductArray[t],"childProductNo",c)}else this.$set(this.childProductArray[t],"childProductNo","")},handleNo:function(t,e){var c,r=this.childProductArray[t].childProductNo;this.childProductArray.forEach(function(e,i){e.childProductNo===r&&i!==t&&(c=!0)}),c&&(this.$message({type:"warning",message:"不允许输入重复的商品编号"}),this.$set(this.childProductArray[t],"childProductNo",this.makeProductNoNotRepet(t)))},makeProductNoNotRepet:function(t){for(var e,i=t,c=!0;c;)e=this.defaultProductNo+i,c=this.isProductNoRepet(e),i++;return e},isProductNoRepet:function(t){return this.childProductArray.findIndex(function(e){return e.childProductNo===t})>-1},openBatch:function(t){this.currentType=t,this.isSetListShow=!1},setBatch:function(){var t=this;"string"!=typeof this.batchValue?(this.childProductArray.forEach(function(e){e.isUse&&(e[t.currentType]=t.batchValue)}),this.cancelBatch()):this.$message({type:"warning",message:"请输入正确的值"})},cancelBatch:function(){this.batchValue="",this.currentType="",this.isSetListShow=!0}}},l=(c(333),c(5)),component=Object(l.a)(o,function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{attrs:{id:"app"}},[c("div",{staticClass:"specification"},[c("div",{staticClass:"title"},[t._v("产品规格设置")]),t._v(" "),c("ul",{staticClass:"spec-list"},t._l(t.specification,function(e,r){return c("li",{key:r,staticClass:"item"},[c("div",{staticClass:"name"},[c("el-input",{attrs:{size:"small",placeholder:"输入产品规格"},model:{value:e.name,callback:function(c){t.$set(e,"name",c)},expression:"item.name"}}),t._v(" "),c("i",{staticClass:"icon el-icon-circle-close",on:{click:function(e){return t.delSpec(r)}}})],1),t._v(" "),c("div",{staticClass:"values"},[t._l(e.value,function(e,n){return c("span",{key:e,staticClass:"el-tag"},[c("span",{staticClass:"el-select__tags-text"},[t._v(t._s(e))]),t._v(" "),c("i",{staticClass:"el-tag__close el-icon-close",on:{click:function(e){return t.delSpecTag(r,n)}}})])}),t._v(" "),c("div",{staticClass:"add-attr"},[c("el-input",{attrs:{size:"small",placeholder:"多个产品属性以空格隔开"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSpecTag(r)}},model:{value:t.addValues[r],callback:function(e){t.$set(t.addValues,r,e)},expression:"addValues[index]"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-plus"},on:{click:function(e){return t.addSpecTag(r)}},slot:"append"})],1)],1)],2)])}),0),t._v(" "),c("div",{staticClass:"add-spec"},[c("el-button",{attrs:{size:"small",type:"info",disabled:t.specification.length>=5},on:{click:t.addSpec}},[t._v("添加规格项目")])],1)]),t._v(" "),c("div",{staticClass:"example"},[c("h4",{staticClass:"title"},[t._v("规格展示")]),t._v(" "),c("table",{staticClass:"stock-table"},[c("thead",[c("tr",t._l(t.specification,function(e,r){return c("th",{key:r},[t._v(t._s(e.name))])}),0)]),t._v(" "),c("tbody",t._l(t.countSum(0),function(e,r){return c("tr",{key:r},t._l(t.specification.length,function(e,n){return c("td",{key:e},[t._v("\n          "+t._s(t.getSpecAttr(n,r))+"\n        ")])}),0)}),0)])]),t._v(" "),c("div",{staticClass:"example"},[c("h4",{staticClass:"title"},[t._v("实战DEMO")]),t._v(" "),c("table",{staticClass:"stock-table",attrs:{cellspacing:"0",cellpadding:"0"}},[c("thead",[c("tr",[t._l(t.specification,function(e,r){return c("th",{key:r},[t._v("\n          "+t._s(e.name)+"\n        ")])}),t._v(" "),c("th",{staticStyle:{width:"160px"}},[t._v("规格编码")]),t._v(" "),c("th",[t._v("成本价（元）")]),t._v(" "),c("th",[t._v("库存")]),t._v(" "),c("th",[t._v("销售价（元）")]),t._v(" "),c("th",[t._v("是否启用")])],2)]),t._v(" "),t.specification[0]&&t.specification[0].value.length?c("tbody",[t._l(t.countSum(0),function(e,r){return c("tr",{key:r},[t._l(t.specification.length,function(e,n){return t.showTd(n,r)?c("td",{key:e,attrs:{rowspan:t.countSum(e)}},[t._v("\n          "+t._s(t.getSpecAttr(n,r))+"\n        ")]):t._e()}),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",disabled:!t.childProductArray[r].isUse,placeholder:"输入商品规格编号"},on:{blur:function(e){return t.handleNo(r)}},model:{value:t.childProductArray[r].childProductNo,callback:function(e){t.$set(t.childProductArray[r],"childProductNo",e)},expression:"childProductArray[index].childProductNo"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入成本价",disabled:!t.childProductArray[r].isUse},model:{value:t.childProductArray[r].childProductCost,callback:function(e){t.$set(t.childProductArray[r],"childProductCost",t._n(e))},expression:"childProductArray[index].childProductCost"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入库存",disabled:!t.childProductArray[r].isUse},model:{value:t.childProductArray[r].childProductStock,callback:function(e){t.$set(t.childProductArray[r],"childProductStock",t._n(e))},expression:"childProductArray[index].childProductStock"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"输入销售价",disabled:!t.childProductArray[r].isUse},model:{value:t.childProductArray[r].childProductPrice,callback:function(e){t.$set(t.childProductArray[r],"childProductPrice",t._n(e))},expression:"childProductArray[index].childProductPrice"}})],1),t._v(" "),c("td",[c("el-switch",{on:{change:function(e){t.handleUserChange(r,e)}},model:{value:t.childProductArray[r].isUse,callback:function(e){t.$set(t.childProductArray[r],"isUse",e)},expression:"childProductArray[index].isUse"}})],1)],2)}),t._v(" "),c("tr",[c("td",{staticClass:"wh-foot",attrs:{colspan:"8"}},[c("span",{staticClass:"label"},[t._v("批量设置：")]),t._v(" "),t.isSetListShow?c("ul",{staticClass:"set-list"},[c("li",{staticClass:"set-item",on:{click:function(e){return t.openBatch("childProductCost")}}},[t._v("成本价")]),t._v(" "),c("li",{staticClass:"set-item",on:{click:function(e){return t.openBatch("childProductStock")}}},[t._v("库存")]),t._v(" "),c("li",{staticClass:"set-item",on:{click:function(e){return t.openBatch("childProductPrice")}}},[t._v("销售价")])]):c("div",{staticClass:"set-form"},[c("el-input",{attrs:{size:"mini",placeholder:"输入要设置的数量"},model:{value:t.batchValue,callback:function(e){t.batchValue=t._n(e)},expression:"batchValue"}}),t._v(" "),c("i",{staticClass:"set-btn blue el-icon-check",on:{click:t.setBatch}}),t._v(" "),c("i",{staticClass:"set-btn red el-icon-close",on:{click:t.cancelBatch}})],1)])])],2):t._e()])]),t._v(" "),c("div",{staticClass:"example"},[c("h4",{staticClass:"title"},[t._v("数据格式")]),t._v(" "),c("textarea",{staticClass:"code-area",domProps:{value:JSON.stringify(t.childProductArray)}})])])},[],!1,null,null,null);e.default=component.exports}}]);
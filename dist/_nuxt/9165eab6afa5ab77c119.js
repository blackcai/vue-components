(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{334:function(t,e,c){var n=c(13);t.exports=function(t,e){if(!n(t)||t._t!==e)throw TypeError("Incompatible receiver, "+e+" required!");return t}},337:function(t,e,c){"use strict";var n=c(6),r=c(338)(6),o="findIndex",l=!0;o in[]&&Array(1)[o]((function(){l=!1})),n(n.P+n.F*l,"Array",{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(133)(o)},338:function(t,e,c){var n=c(43),r=c(132),o=c(44),l=c(36),d=c(339);t.exports=function(t,e){var c=1==t,h=2==t,f=3==t,v=4==t,_=6==t,y=5==t||_,S=e||d;return function(e,d,P){for(var m,k,A=o(e),x=r(A),C=n(d,P,3),w=l(x.length),N=0,O=c?S(e,w):h?S(e,0):void 0;w>N;N++)if((y||N in x)&&(k=C(m=x[N],N,A),t))if(c)O[N]=k;else if(k)switch(t){case 3:return!0;case 5:return m;case 6:return N;case 2:O.push(m)}else if(v)return!1;return _?-1:f||v?v:O}}},339:function(t,e,c){var n=c(340);t.exports=function(t,e){return new(n(t))(e)}},340:function(t,e,c){var n=c(13),r=c(184),o=c(2)("species");t.exports=function(t){var e;return r(t)&&("function"!=typeof(e=t.constructor)||e!==Array&&!r(e.prototype)||(e=void 0),n(e)&&null===(e=e[o])&&(e=void 0)),void 0===e?Array:e}},341:function(t,e,c){"use strict";var strong=c(342),n=c(334);t.exports=c(343)("Set",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{add:function(t){return strong.def(n(this,"Set"),t=0===t?0:t,t)}},strong)},342:function(t,e,c){"use strict";var n=c(11).f,r=c(127),o=c(180),l=c(43),d=c(178),h=c(179),f=c(131),v=c(185),_=c(134),y=c(7),S=c(177).fastKey,P=c(334),m=y?"_s":"size",k=function(t,e){var c,n=S(e);if("F"!==n)return t._i[n];for(c=t._f;c;c=c.n)if(c.k==e)return c};t.exports={getConstructor:function(t,e,c,f){var v=t((function(t,n){d(t,v,e,"_i"),t._t=e,t._i=r(null),t._f=void 0,t._l=void 0,t[m]=0,null!=n&&h(n,c,t[f],t)}));return o(v.prototype,{clear:function(){for(var t=P(this,e),data=t._i,c=t._f;c;c=c.n)c.r=!0,c.p&&(c.p=c.p.n=void 0),delete data[c.i];t._f=t._l=void 0,t[m]=0},delete:function(t){var c=P(this,e),n=k(c,t);if(n){var r=n.n,o=n.p;delete c._i[n.i],n.r=!0,o&&(o.n=r),r&&(r.p=o),c._f==n&&(c._f=r),c._l==n&&(c._l=o),c[m]--}return!!n},forEach:function(t){P(this,e);for(var c,n=l(t,arguments.length>1?arguments[1]:void 0,3);c=c?c.n:this._f;)for(n(c.v,c.k,this);c&&c.r;)c=c.p},has:function(t){return!!k(P(this,e),t)}}),y&&n(v.prototype,"size",{get:function(){return P(this,e)[m]}}),v},def:function(t,e,c){var n,r,o=k(t,e);return o?o.v=c:(t._l=o={i:r=S(e,!0),k:e,v:c,p:n=t._l,n:void 0,r:!1},t._f||(t._f=o),n&&(n.n=o),t[m]++,"F"!==r&&(t._i[r]=o)),t},getEntry:k,setStrong:function(t,e,c){f(t,e,(function(t,c){this._t=P(t,e),this._k=c,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?v(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,v(1))}),c?"entries":"values",!c,!0),_(e)}}},343:function(t,e,c){"use strict";var n=c(3),r=c(6),o=c(14),l=c(180),meta=c(177),d=c(179),h=c(178),f=c(13),v=c(12),_=c(181),y=c(57),S=c(176);t.exports=function(t,e,c,P,m,k){var A=n[t],x=A,C=m?"set":"add",w=x&&x.prototype,N={},O=function(t){var e=w[t];o(w,t,"delete"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"has"==t?function(a){return!(k&&!f(a))&&e.call(this,0===a?0:a)}:"get"==t?function(a){return k&&!f(a)?void 0:e.call(this,0===a?0:a)}:"add"==t?function(a){return e.call(this,0===a?0:a),this}:function(a,b){return e.call(this,0===a?0:a,b),this})};if("function"==typeof x&&(k||w.forEach&&!v((function(){(new x).entries().next()})))){var $=new x,U=$[C](k?{}:-0,1)!=$,z=v((function(){$.has(1)})),E=_((function(t){new x(t)})),T=!k&&v((function(){for(var t=new x,e=5;e--;)t[C](e,e);return!t.has(-0)}));E||((x=e((function(e,c){h(e,x,t);var n=S(new A,e,x);return null!=c&&d(c,m,n[C],n),n}))).prototype=w,w.constructor=x),(z||T)&&(O("delete"),O("has"),m&&O("get")),(T||U)&&O(C),k&&w.clear&&delete w.clear}else x=P.getConstructor(e,t,m,C),l(x.prototype,c),meta.NEED=!0;return y(x,t),N[t]=x,r(r.G+r.W+r.F*(x!=A),N),k||P.setStrong(x,t,m),x}},344:function(t,e,c){"use strict";var n=c(43),r=c(6),o=c(44),l=c(186),d=c(187),h=c(36),f=c(189),v=c(188);r(r.S+r.F*!c(181)((function(t){Array.from(t)})),"Array",{from:function(t){var e,c,r,_,y=o(t),S="function"==typeof this?this:Array,P=arguments.length,m=P>1?arguments[1]:void 0,k=void 0!==m,A=0,x=v(y);if(k&&(m=n(m,P>2?arguments[2]:void 0,2)),null==x||S==Array&&d(x))for(c=new S(e=h(y.length));e>A;A++)f(c,A,k?m(y[A],A):y[A]);else for(_=x.call(y),c=new S;!(r=_.next()).done;A++)f(c,A,k?l(_,m,[r.value,A],!0):r.value);return c.length=A,c}})},347:function(t,e,c){var content=c(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(18).default)("693bcad0",content,!0,{sourceMap:!1})},377:function(t,e,c){"use strict";var n=c(347);c.n(n).a},378:function(t,e,c){(t.exports=c(17)(!1)).push([t.i,".vue-sku .spec-line[data-v-f018e392]{position:relative}.vue-sku .spec-line .spec-deleted[data-v-f018e392]{position:absolute;right:0;top:0;display:none;cursor:pointer}.vue-sku .spec-line:hover .spec-deleted[data-v-f018e392]{display:inline}",""])},417:function(t,e,c){"use strict";c.r(e);c(337),c(182),c(183),c(20),c(15),c(341),c(130),c(344),c(128),c(86);var n=c(42);function r(t,e){for(var c in t){if(t.hasOwnProperty(c)!==e.hasOwnProperty(c))return!1;if(Object(n.a)(t[c])!==Object(n.a)(e[c]))return!1}for(var o in e){if(t.hasOwnProperty(o)!==e.hasOwnProperty(o))return!1;if(Object(n.a)(t[o])!==Object(n.a)(e[o]))return!1;if(t.hasOwnProperty(o))if(t[o]instanceof Array&&e[o]instanceof Array){if(r(!t[o],e[o]))return!1}else if(t[o]instanceof Object&&e[o]instanceof Object){if(r(!t[o],e[o]))return!1}else if(t[o]!==e[o])return!1}return!0}var o={name:"sku.v1.1",data:function(){return{specificationStatus:!1,specification:[],childProductArray:[],addValues:[],defaultProductNo:"PRODUCTNO_",isSetListShow:!0,batchValue:"",currentType:"",cacheSpecification:[]}},computed:{stockSpecArr:function(){return this.childProductArray.map((function(t){return t.childProductSpec}))},SKUNums:function(){var t=1;return this.specification.forEach((function(e,c){c>=0&&e.value&&e.value.length&&(t*=e.value.length)})),t}},created:function(){this.createData()},methods:{createData:function(){for(var t=["Color","Size"],e=["Black White Blue","s m xl"],i=0;i<2;i++)this.addSpec(),this.specification[i].name=t[i],this.addValues[i]=e[i],this.cacheSpecification[i].status=!1,this.cacheSpecification[i].name=t[i],this.addSpecTag(i)},addSpec:function(){this.specification.length<5&&(this.cacheSpecification.push({status:!0,name:""}),this.specification.push({name:"",value:[]}))},updateSpec:function(t){this.cacheSpecification[t].status=!0,this.cacheSpecification[t].name=this.specification[t].name},saveSpec:function(t){this.cacheSpecification[t].name.trim()?this.specification[t].name===this.cacheSpecification[t].name?this.cacheSpecification[t].status=!1:this.verifyRepeat(t)?this.$message.error("Duplicate name"):(this.specification[t].name=this.cacheSpecification[t].name,this.cacheSpecification[t].status=!1):this.$message.error("The name cannot be empty")},delSpec:function(t){this.specification.splice(t,1),this.handleSpecChange("del")},verifyRepeat:function(t){var e=this,c=!1;return this.specification.forEach((function(n,r){t!==r&&e.specification[r].name===e.cacheSpecification[t].name&&(c=!0)})),c},addSpecTag:function(t){var e=this.addValues[t]||"";if(e.trim()&&this.cacheSpecification[t].name.trim()){var c=(e=e.trim()).split(/\s+/),n=this.specification[t].value.concat(c);n=Array.from(new Set(n)),this.$set(this.specification[t],"value",n),this.clearAddValues(t),this.handleSpecChange("add"),this.specification[t].name=this.cacheSpecification[t].name,this.cacheSpecification[t].status=!1}else this.$message.error("specification can't be empty")},delSpecTag:function(t,e){this.specification[t].value.splice(e,1),this.handleSpecChange("del")},clearAddValues:function(t){this.$set(this.addValues,t,"")},getSpecAttr:function(t,e){var c,n=this.specification[t].value;c=this.specification[t+1]&&this.specification[t+1].value.length?e/this.countSum(t+1):e;var i=Math.floor(c%n.length);return"NaN"!==i.toString()?n[i]:""},countSum:function(t){var e=1;return this.specification.forEach((function(c,n){n>=t&&c.value.length&&(e*=c.value.length)})),e},showTd:function(t,e){return!!this.specification[t]&&e%this.countSum(t+1)==0},handleSpecChange:function(option){var t=JSON.parse(JSON.stringify(this.childProductArray));"del"===option&&(this.childProductArray=[]);for(var i=0;i<this.SKUNums;i++)this.changeStock(option,i,t)},changeStock:function(option,t,e){var c=this.getChildProductSpec(t);if("add"===option){var n=this.stockSpecArr.length;if(n){for(var i=0;i<n;i++)if(!r(c,this.stockSpecArr[i]))return void this.$set(this.childProductArray,t,this.creatChildProduct(t))}else this.$set(this.childProductArray,t,this.creatChildProduct(t))}else if("del"===option){for(var o="",l=e.length,d=0;d<l;d++)r(c,e[d].childProductSpec)&&(o=e[d]);this.childProductArray.push(o||this.creatChildProduct(t))}},creatChildProduct:function(t){return{childProductId:0,childProductSpec:this.getChildProductSpec(t),childProductNo:this.defaultProductNo+t,childProductStock:0,childProductPrice:0,childProductCost:0,isUse:!0}},getChildProductSpec:function(t){var e=this,c={};return this.specification.forEach((function(n,r){c[n.name]=e.getSpecAttr(r,t)})),c},handleUserChange:function(t,e){if(e){var c=this.makeProductNoNotRepet(t);this.$set(this.childProductArray[t],"childProductNo",c)}else this.$set(this.childProductArray[t],"childProductNo","")},handleNo:function(t){var e,c=this.childProductArray[t].childProductNo;this.childProductArray.forEach((function(n,i){n.childProductNo===c&&i!==t&&(e=!0)})),e&&(this.$message({type:"warning",message:"Duplicate item numbers are not allowed to be entered"}),this.$set(this.childProductArray[t],"childProductNo",this.makeProductNoNotRepet(t)))},makeProductNoNotRepet:function(t){for(var e,i=t,c=!0;c;)e=this.defaultProductNo+i,c=this.isProductNoRepet(e),i++;return e},isProductNoRepet:function(t){return this.childProductArray.findIndex((function(e){return e.childProductNo===t}))>-1},openBatch:function(t){this.currentType=t,this.isSetListShow=!1},setBatch:function(){var t=this;"string"!=typeof this.batchValue?(this.childProductArray.forEach((function(e){e.isUse&&(e[t.currentType]=t.batchValue)})),this.cancelBatch()):this.$message({type:"warning",message:"Please enter the correct value"})},cancelBatch:function(){this.batchValue="",this.currentType="",this.isSetListShow=!0}}},l=(c(377),c(5)),d={name:"sku2",components:{SkuWrap:Object(l.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"vue-sku"},[c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("Product Specification Setting")])]),t._v(" "),c("section",[t._l(t.specification,(function(e,n){return c("div",{key:n,staticClass:"spec-line"},[c("div",[t.cacheSpecification[n].status?t._e():c("span",[t._v(t._s(e.name))]),t._v(" "),t.cacheSpecification[n].status?c("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"Product Specifications"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.saveSpec(n)}},model:{value:t.cacheSpecification[n].name,callback:function(e){t.$set(t.cacheSpecification[n],"name",e)},expression:"cacheSpecification[index].name"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-check",type:"primary"},on:{click:function(e){return t.saveSpec(n)}},slot:"append"})],1):t._e(),t._v(" "),t.cacheSpecification[n].status?t._e():c("i",{staticClass:"icon el-icon-edit",on:{click:function(e){return t.updateSpec(n)}}})],1),t._v(" "),c("div",[t._l(e.value,(function(e,r){return c("el-tag",{key:r,attrs:{closable:""},on:{close:function(e){return t.delSpecTag(n,r)}}},[t._v(t._s(e))])})),t._v(" "),c("el-input",{staticStyle:{width:"200px"},attrs:{size:"small",placeholder:"Multiple Product Properties Are Separated By Spaces"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.addSpecTag(n)}},model:{value:t.addValues[n],callback:function(e){t.$set(t.addValues,n,e)},expression:"addValues[index]"}},[c("el-button",{attrs:{slot:"append",icon:"el-icon-check",type:"primary"},on:{click:function(e){return t.addSpecTag(n)}},slot:"append"})],1)],2),t._v(" "),c("i",{staticClass:"icon el-icon-circle-close spec-deleted",on:{click:function(e){return t.delSpec(n)}}}),t._v(" "),c("el-divider")],1)})),t._v(" "),c("div",{staticClass:"add-spec"},[c("el-button",{attrs:{size:"small",type:"primary",disabled:t.specification.length>=5},on:{click:t.addSpec}},[t._v("Add New Specification")])],1)],2)]),t._v(" "),c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("Specification Display")]),t._v(" "),c("el-button",{staticStyle:{float:"right",padding:"3px 0"},attrs:{type:"text"},on:{click:function(e){t.specificationStatus=!t.specificationStatus}}},[t._v(t._s(t.specificationStatus?"hide":"show"))])],1),t._v(" "),t.specificationStatus?c("section",[c("el-row",t._l(t.specification,(function(e,n){return c("el-col",{key:n,staticClass:"text item bold",attrs:{span:2}},[t._v(t._s(e.name))])})),1),t._v(" "),t._l(t.SKUNums,(function(e,n){return c("el-row",{key:n},t._l(t.specification.length,(function(e,r){return c("el-col",{key:e,staticClass:"text item",attrs:{span:2}},[t._v(t._s(t.getSpecAttr(r,n)))])})),1)}))],2):t._e()]),t._v(" "),c("el-card",[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("Specification Table")])]),t._v(" "),c("table",{staticClass:"el-table",attrs:{cellspacing:"0",cellpadding:"0"}},[c("thead",[c("tr",[t._l(t.specification,(function(e,n){return c("th",{key:n},[t._v("\n          "+t._s(e.name)+"\n        ")])})),t._v(" "),c("th",{staticStyle:{width:"160px"}},[t._v("Specification Number")]),t._v(" "),c("th",[t._v("Cost Price (Yuan)")]),t._v(" "),c("th",[t._v("Stock")]),t._v(" "),c("th",[t._v("Sale Price（Yuan）")]),t._v(" "),c("th",[t._v("Use")])],2)]),t._v(" "),t.specification[0]&&t.specification[0].value.length?c("tbody",[t._l(t.SKUNums,(function(e,n){return c("tr",{key:n},[t._l(t.specification.length,(function(e,r){return[t.showTd(r,n)?c("td",{key:e,attrs:{rowspan:t.countSum(e)}},[t._v("\n            "+t._s(t.getSpecAttr(r,n))+"\n          ")]):t._e()]})),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",disabled:!t.childProductArray[n].isUse,placeholder:"Product Specifications Number"},on:{blur:function(e){return t.handleNo(n)}},model:{value:t.childProductArray[n].childProductNo,callback:function(e){t.$set(t.childProductArray[n],"childProductNo",e)},expression:"childProductArray[index].childProductNo"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"Cost Price",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductCost,callback:function(e){t.$set(t.childProductArray[n],"childProductCost",t._n(e))},expression:"childProductArray[index].childProductCost"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"Stock",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductStock,callback:function(e){t.$set(t.childProductArray[n],"childProductStock",t._n(e))},expression:"childProductArray[index].childProductStock"}})],1),t._v(" "),c("td",[c("el-input",{attrs:{size:"small",type:"text",placeholder:"Sale Price",disabled:!t.childProductArray[n].isUse},model:{value:t.childProductArray[n].childProductPrice,callback:function(e){t.$set(t.childProductArray[n],"childProductPrice",t._n(e))},expression:"childProductArray[index].childProductPrice"}})],1),t._v(" "),c("td",[c("el-switch",{on:{change:function(e){t.handleUserChange(n,e)}},model:{value:t.childProductArray[n].isUse,callback:function(e){t.$set(t.childProductArray[n],"isUse",e)},expression:"childProductArray[index].isUse"}})],1)],2)})),t._v(" "),c("tr",[c("td",{staticClass:"wh-foot",attrs:{colspan:"8"}},[c("span",{staticClass:"label"},[t._v("Batch Settings：")]),t._v(" "),t.isSetListShow?[c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductCost")}}},[t._v("Cost Price")]),t._v(" "),c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductStock")}}},[t._v("Stock")]),t._v(" "),c("el-button",{attrs:{size:"mini"},on:{click:function(e){return t.openBatch("childProductPrice")}}},[t._v("Sale Price")])]:[c("el-input",{staticStyle:{width:"200px"},attrs:{size:"mini",placeholder:"Setting Price"},model:{value:t.batchValue,callback:function(e){t.batchValue=t._n(e)},expression:"batchValue"}}),t._v(" "),c("el-button",{attrs:{type:"primary",size:"mini"},on:{click:t.setBatch}},[c("i",{staticClass:"set-btn blue el-icon-check"})]),t._v(" "),c("el-button",{attrs:{type:"danger",size:"mini"},on:{click:t.cancelBatch}},[c("i",{staticClass:"set-btn blue el-icon-close"})])]],2)])],2):t._e()])]),t._v(" "),c("el-card",{staticClass:"box-card"},[c("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[c("span",[t._v("Data Form")])]),t._v(" "),c("section",t._l(t.childProductArray,(function(e,n){return c("div",{key:n},[t._v("\n        "+t._s(e)+"\n        "),c("el-divider")],1)})),0)])],1)}),[],!1,null,"f018e392",null).exports}},h=Object(l.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("sku-wrap")],1)}),[],!1,null,null,null);e.default=h.exports}}]);
webpackJsonp([1],{JA1j:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAMAAABg3Am1AAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGXRSTlMAzhLSW0IFDPDr4NiLbyC6tbSkhHdVPCYfXrAnOAAAAUdJREFUSMelltuywiAMRVMpBaT3i3X9/48eh4daBXUyZz/QwuwdSIAE+T8a204xQIhTa5uf7G32nODn7aumvgJmqe3u3G7rxQDX+iPdVmC6/jzUdwYqW+a3yVpx1rZAdyOsTdGvFUb3PtpHwk0+4BaI/Zv9iLnLR9wN8XWOEePkC5xhfPU3PO2X5whnzy1k68/8gGd0K1b5iZXqiDTX5reguVK//CV0fricWZfBd5ndDXMQPFSXE78Cf/QMW/rOdMfYQFKc+AxyTM+cVuTpTyaTIusk9PgmxdSIZIqcn9Zk06YtkitKfFnS5k3UUlAU+FIzPdqIlYKiwBdLfLSBXQqKAl92wqMFJ5miyBcHaoF6SWqn1WFVb5z6aKgPn/Z4qy+Q+opqk4A2zagTmTZVapOxOt1rC4q+ZOmLor7s6gu7/umgf5zo8QdTVyTZgyvynAAAAABJRU5ErkJggg=="},Sfn2:function(t,n,e){var a=e("hzhz");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);e("rjj0")("5f227b9f",a,!0)},aJN7:function(t,n,e){"use strict";var a=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])};return function(n,e){function a(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(a.prototype=e.prototype,new a)}}(),o=this&&this.__decorate||function(t,n,e,a){var o,r=arguments.length,i=r<3?n:null===a?a=Object.getOwnPropertyDescriptor(n,e):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(t,n,e,a);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(i=(r<3?o(i):r>3?o(n,e,i):o(n,e))||i);return r>3&&i&&Object.defineProperty(n,e,i),i},r=this&&this.__awaiter||function(t,n,e,a){return new(e||(e=Promise))(function(o,r){function i(t){try{l(a.next(t))}catch(t){r(t)}}function s(t){try{l(a.throw(t))}catch(t){r(t)}}function l(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(i,s)}l((a=a.apply(t,n||[])).next())})},i=this&&this.__generator||function(t,n){function e(t){return function(n){return a([t,n])}}function a(e){if(o)throw new TypeError("Generator is already executing.");for(;l;)try{if(o=1,r&&(i=r[2&e[0]?"return":e[0]?"throw":"next"])&&!(i=i.call(r,e[1])).done)return i;switch(r=0,i&&(e=[0,i.value]),e[0]){case 0:case 1:i=e;break;case 4:return l.label++,{value:e[1],done:!1};case 5:l.label++,r=e[1],e=[0];continue;case 7:e=l.ops.pop(),l.trys.pop();continue;default:if(i=l.trys,!(i=i.length>0&&i[i.length-1])&&(6===e[0]||2===e[0])){l=0;continue}if(3===e[0]&&(!i||e[1]>i[0]&&e[1]<i[3])){l.label=e[1];break}if(6===e[0]&&l.label<i[1]){l.label=i[1],i=e;break}if(i&&l.label<i[2]){l.label=i[2],l.ops.push(e);break}i[2]&&l.ops.pop(),l.trys.pop();continue}e=n.call(t,l)}catch(t){e=[6,t],r=0}finally{o=i=0}if(5&e[0])throw e[1];return{value:e[0]?e[1]:void 0,done:!0}}var o,r,i,s,l={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:e(0),throw:e(1),return:e(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s};Object.defineProperty(n,"__esModule",{value:!0});var s=e("c+8m"),l=e("/5sW"),c=e("VKSY"),p=e("6nHw"),h=e("pQ8k"),d=e("r84I"),u=e("CveJ"),v=function(t){function n(){var n=null!==t&&t.apply(this,arguments)||this;return n.currentContract={name:"",scripthash:""},n.inputContract="",n.contractList=[],n.openSelect=!1,n.invokeResult=new h.ContractResult,n}return a(n,t),n.prototype.mounted=function(){this.initContractList();var t=document.getElementById("invoke-json-code"),n=document.getElementById("invoke-result-code"),e={};e.lineNumbers=!0,e.mode="application/ld+json",e.dragDrop=!0,e.theme="monokai",e.matchBrackets=!0,e.autoCloseBrackets=!0,e.lineWrapping=!0;var a=sessionStorage.getItem("invoke-json-code");this.editor=CodeMirror.fromTextArea(t,e),this.editor.setValue(a||""),this.editor.setSize("auto","245px"),e.readOnly=!0,this.resultEditor=CodeMirror.fromTextArea(n,e),this.resultEditor.setSize("auto","219.5px"),this.opneToast=this.$refs.toast.isShow},n.prototype.initContractList=function(){return r(this,void 0,void 0,function(){var t;return i(this,function(n){switch(n.label){case 0:return t=this,[4,c.tools.wwwtool.getContractRemarkByAddress(p.LoginInfo.getCurrentAddress())];case 1:return t.contractList=n.sent(),this.contractList=this.contractList.map(function(t){return t.name=t.name.length>20?t.name.substr(0,20)+"...":t.name,t}),d.services.routerParam.invoke&&(this.currentContract.scripthash=d.services.routerParam.invoke.contract,this.currentContract.name=d.services.routerParam.invoke.name,d.services.routerParam.invoke=null),[2]}})})},n.prototype.changeContract=function(){for(var t=0,n=this.contractList;t<n.length;t++){var e=n[t];e.scripthash==this.inputContract&&(this.currentContract=e)}if(this.currentContract.scripthash!=this.inputContract){if(!/^[0-9a-fA-F]{40,40}$/.test(this.inputContract.replace("0x","")))return void this.opneToast("error","非法合约hash，请重新检查。",4e3);this.currentContract={name:"",scripthash:this.inputContract}}this.openSelect=!1,this.inputContract=""},n.prototype.testRun=function(){return r(this,void 0,void 0,function(){var t,n,e,a;return i(this,function(o){switch(o.label){case 0:return o.trys.push([0,2,,3]),t=this.paresInvokeJson(),[4,c.tools.wwwtool.rpc_getInvokescript(t)];case 1:return n=o.sent(),n&&(this.invokeResult=n,this.resultEditor.setValue(JSON.stringify(n)),e=this.resultEditor.lineCount(),this.resultEditor.autoFormatRange({line:0,ch:0},{line:e})),[3,3];case 2:return a=o.sent(),this.opneToast("error","请检查Json的格式",4e3),[3,3];case 3:return[2]}})})},n.prototype.invoking=function(){return r(this,void 0,void 0,function(){var t,n,e;return i(this,function(a){switch(a.label){case 0:return t=this.paresInvokeJson(),[4,c.tools.contract.buildInvokeTransData(t)];case 1:return n=a.sent(),[4,c.tools.wwwtool.setTxCallContract(p.LoginInfo.getCurrentAddress(),n.data.toHexString())];case 2:return e=a.sent(),e&&(this.opneToast("success","invoke 交易发送成功，等待区块确认",4e3),d.services.taskManager.addTask(u.TaskType.invoke,u.ConfirmType.tranfer,e.txid,{txid:e.txid})),[2]}})})},n.prototype.paresInvokeJson=function(){for(var t=this.editor.getValue(),n=JSON.parse(t),e=new ThinNeo.ScriptBuilder,a=n.length-1;a>=0;a--)e.EmitParamJson(n[a]);var o=Neo.Uint160.parse(this.currentContract.scripthash);return e.EmitAppCall(o),e.ToArray()},n.prototype.test=function(){return r(this,void 0,void 0,function(){var t,n,e,a,o;return i(this,function(r){switch(r.label){case 0:return t=Neo.Uint160.parse("0x17f26389efc8fe0d9f2116f8ea474202b8d78280"),n=new ThinNeo.ScriptBuilder,n.EmitParamJson(["(str)test",[]]),n.EmitAppCall(t),e=c.tools.contract.buildScript_random(t,"test",[]),[4,c.tools.contract.buildInvokeTransData_attributes(e)];case 1:return a=r.sent(),console.log(a),[4,c.tools.wwwtool.setTxCallContract(p.LoginInfo.getCurrentAddress(),a.toHexString())];case 2:return o=r.sent(),console.log(o),[2]}})})},n=o([s.default({components:{}})],n)}(l.default);n.default=v},ev4o:function(t,n,e){"use strict";function a(t){e("Sfn2")}Object.defineProperty(n,"__esModule",{value:!0});var o=e("aJN7"),r=e.n(o),i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",[a("div",{staticClass:"invoke-panel"},[a("div",{staticClass:"code-top"},[a("panel",[a("p-title",{attrs:{title:t.currentContract.name+"  "+t.currentContract.scripthash}},[a("v-btn",{on:{onclick:function(n){t.openSelect=!0}}},[t._v("更换合约")]),t._v(" "),a("a",{attrs:{href:"https://bbs.neldev.net/thread-146.htm",target:"_blank"}},[a("v-btn",{attrs:{type:"warn"}},[t._v("帮助")])],1)],1),t._v(" "),a("div",{staticClass:"code-content",attrs:{id:"code-content"}},[a("textarea",{attrs:{id:"invoke-json-code",rows:"25",cols:"20"}})])],1),t._v(" "),a("v-btn",{on:{onclick:t.invoking}},[t._v("调用交易")]),t._v(" "),a("v-btn",{on:{onclick:t.testRun}},[t._v("试运行")])],1),t._v(" "),a("div",{staticClass:"result-bottom"},[a("div",{staticClass:"result-left"},[a("p-title",{attrs:{title:"试运行结果"}}),t._v(" "),a("div",{staticClass:"panel-content"},[a("div",{staticClass:"panel-form"},[a("div",{staticClass:"form-lable"},[t._v("参数Script hash")]),t._v(" "),a("div",{staticClass:"form-content"},[a("input",{staticClass:"input",domProps:{value:t.invokeResult.script}})])]),t._v(" "),a("div",{staticClass:"panel-form"},[a("div",{staticClass:"form-lable"},[t._v("执行结果")]),t._v(" "),a("div",{staticClass:"form-content"},[a("input",{staticClass:"input",domProps:{value:t.invokeResult.state}})])]),t._v(" "),a("div",{staticClass:"panel-form"},[a("div",{staticClass:"form-lable"},[t._v("方法返回")]),t._v(" "),a("div",{staticClass:"form-content"},[a("input",{staticClass:"input",domProps:{value:JSON.stringify(t.invokeResult.stack)}})])]),t._v(" "),a("div",{staticClass:"panel-form"},[a("div",{staticClass:"form-lable"},[t._v("GAS消耗")]),t._v(" "),a("div",{staticClass:"form-content"},[a("input",{staticClass:"input",domProps:{value:t.invokeResult.gas_consumed}})])])])],1),t._v(" "),a("div",{staticClass:"result-right"},[a("p-title",{attrs:{title:"结果代码"}}),t._v(" "),t._m(0,!1,!1)],1)]),t._v(" "),t.openSelect?a("div",{staticClass:"changehash-dialog"},[a("div",{staticClass:"changhash-wrapper"},[a("p-title",{attrs:{title:"更换合约"}},[a("img",{attrs:{src:e("JA1j"),alt:""},on:{click:function(n){t.openSelect=!1}}})]),t._v(" "),a("div",{staticClass:"changehash-content"},[a("div",{staticClass:"change-box"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.inputContract,expression:"inputContract"}],staticClass:"change-select",on:{change:function(n){var e=Array.prototype.filter.call(n.target.options,function(t){return t.selected}).map(function(t){return"_value"in t?t._value:t.value});t.inputContract=n.target.multiple?e:e[0]}}},t._l(t.contractList,function(n){return a("option",{key:n.scripthash,domProps:{value:n.scripthash}},[t._v(t._s(n.name))])})),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputContract,expression:"inputContract"}],staticClass:"change-input",attrs:{type:"text",placeholder:"选择合约"},domProps:{value:t.inputContract},on:{input:function(n){n.target.composing||(t.inputContract=n.target.value)}}})]),t._v(" "),a("div",{staticClass:"changehash-btn"},[a("v-btn",{on:{onclick:t.changeContract}},[t._v("更换合约")])],1)])],1)]):t._e(),t._v(" "),a("v-toast",{ref:"toast"})],1)])},s=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content"},[e("textarea",{attrs:{id:"invoke-result-code"}})])}],l={render:i,staticRenderFns:s},c=l,p=e("VU/8"),h=a,d=p(r.a,c,!1,h,"data-v-64e7961e",null);n.default=d.exports},hzhz:function(t,n,e){n=t.exports=e("FZ+f")(!1),n.push([t.i,"\n.invoke-panel .code-top[data-v-64e7961e] {\n  margin-bottom: 30px;\n}\n.invoke-panel .code-top .code-content[data-v-64e7961e] {\n  height: 245px;\n  max-height: 245px;\n  overflow: auto;\n}\n.invoke-panel .code-top .panel-title[data-v-64e7961e] {\n  border-bottom: 1px solid #3d3d3d;\n  width: 100%;\n}\n.invoke-panel .code-top .panel-title .title[data-v-64e7961e] {\n  padding-left: 25px;\n  font-family: NotoSansHans-Regular;\n  font-size: 14px;\n  color: #b5b5b5;\n  display: inline-block;\n  line-height: 55px;\n}\n.invoke-panel .code-top .panel-title .btn-list[data-v-64e7961e] {\n  float: right;\n  margin-top: 0 !important;\n  margin-right: 25px;\n}\n.invoke-panel .code-top .v-btn[data-v-64e7961e] {\n  margin-right: 30px;\n}\n.invoke-panel .code-top .v-btn[data-v-64e7961e]:last-child {\n  margin-right: 0;\n}\n.invoke-panel .result-bottom[data-v-64e7961e] {\n  width: 100%;\n  height: 277px;\n  box-shadow: 0 2px 5px 0 #191919;\n  border-radius: 5px;\n  background: #292a30;\n  display: flex;\n}\n.invoke-panel .result-bottom .result-left[data-v-64e7961e],\n.invoke-panel .result-bottom .result-right[data-v-64e7961e] {\n  flex: 1;\n}\n.invoke-panel .result-bottom .result-left[data-v-64e7961e] {\n  border-right: 1px solid #3d3d3d;\n}\n.invoke-panel .result-bottom .panel-content[data-v-64e7961e] {\n  margin-left: 20px;\n  margin-right: 20px;\n  margin-top: 20px;\n  margin-bottom: 20px;\n}\n.invoke-panel .result-bottom .panel-content input[data-v-64e7961e] {\n  width: 100%;\n  background: #292a30;\n  border: 1px solid #b5b5b5;\n  box-shadow: 0 2px 4px 0 #023169;\n  border-radius: 3px 0px 3px 3px 3px;\n  height: 30px;\n  color: #fff;\n}\n.invoke-panel .panel-form[data-v-64e7961e] {\n  display: flex;\n}\n.invoke-panel .panel-form .form-lable[data-v-64e7961e] {\n  font-family: NotoSansHans-Regular;\n  font-size: 14px;\n  color: #ffffff;\n  width: 137px;\n  padding-bottom: 20px;\n}\n.invoke-panel .panel-form .form-content[data-v-64e7961e] {\n  width: 74%;\n  padding-bottom: 20px;\n}\n.invoke-panel .panel-form .form-content .input[data-v-64e7961e] {\n  background: #292a30;\n  border: 1px solid #ffffff;\n  box-shadow: 0 2px 4px 0 #023169;\n  border-radius: 3px 0px 3px 3px 3px;\n  width: 100%;\n}\n.invoke-panel .panel-form label[data-v-64e7961e] {\n  box-sizing: border-box;\n  display: inline-block;\n  padding: 0 10px;\n  margin-bottom: 10px;\n  text-align: center;\n  margin-right: 15px;\n  font-size: 14px;\n  color: #ffffff;\n  font-weight: 400;\n  border-radius: 3px;\n  position: relative;\n}\n.invoke-panel .panel-form label .select-img[data-v-64e7961e] {\n  display: inline-block;\n  width: 22px;\n  height: 22px;\n  margin-right: 6px;\n  vertical-align: middle;\n  border: 1px solid #fff;\n  border-radius: 50%;\n}\n.invoke-panel .panel-form label .select-img img[data-v-64e7961e] {\n  display: none;\n  width: 22px;\n  height: 22px;\n}\n.invoke-panel .panel-form label span[data-v-64e7961e] {\n  vertical-align: middle;\n}\n.invoke-panel .panel-form label input[data-v-64e7961e] {\n  visibility: hidden;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n}\n.invoke-panel .panel-form label[data-v-64e7961e]:last-child {\n  margin-right: 0;\n}\n.invoke-panel .panel-form label.checked-input .select-img[data-v-64e7961e] {\n  border: none;\n}\n.invoke-panel .panel-form label.checked-input .select-img img[data-v-64e7961e] {\n  display: block;\n}\n.invoke-panel .changehash-dialog[data-v-64e7961e] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.3);\n}\n.invoke-panel .changehash-dialog .changhash-wrapper[data-v-64e7961e] {\n  background: #292a30;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);\n  border-radius: 5px;\n  width: 500px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  -moz-transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  -o-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .panel-title[data-v-64e7961e] {\n  border-bottom: 3px solid #3d3d3d;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .btn-list img[data-v-64e7961e] {\n  width: 22px;\n  height: 22px;\n  margin-top: 5px;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content[data-v-64e7961e] {\n  text-align: center;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .change-box[data-v-64e7961e] {\n  width: 362px;\n  height: 30px;\n  margin: 0 auto;\n  margin-top: 30px;\n  background: #292a30;\n  border: 1px solid #ffffff;\n  border-radius: 3px 0px 3px 3px 3px;\n  position: relative;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .change-box .change-select[data-v-64e7961e] {\n  width: 100%;\n  height: 100%;\n  border: none;\n  background: none;\n  color: #fff;\n  outline: none;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .change-box .change-select option[data-v-64e7961e] {\n  background: #292a30;\n  color: #fff;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .change-box .change-input[data-v-64e7961e] {\n  width: 95%;\n  height: 100%;\n  border: none;\n  background: #292a30;\n  color: #fff;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 2;\n  outline: none;\n  text-indent: 20px;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .change-box .change-input[data-v-64e7961e]::placeholder {\n  color: #fff;\n}\n.invoke-panel .changehash-dialog .changhash-wrapper .changehash-content .changehash-btn[data-v-64e7961e] {\n  margin-top: 50px;\n  margin-bottom: 30px;\n}\n",""])},pQ8k:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=function(){function t(){}return t.prototype.pares=function(t){this.gas_consumed=t.gas_consumed,this.script=t.script,this.stack=t.stack,this.stackstr=JSON.stringify(this.stack),this.stack=t.stack},t}();n.ContractResult=a}});
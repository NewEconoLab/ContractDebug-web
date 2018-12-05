webpackJsonp([4],{

/***/ "+jyM":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Spinner.vue
var Spinner = __webpack_require__("8Qnm");
var Spinner_default = /*#__PURE__*/__webpack_require__.n(Spinner);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1d4a9de1","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Spinner.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner-wrap",class:_vm.isbig?'spinner-big':''},[_vm._m(0,false,false)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"spinner"},[_c('div',{staticClass:"spinner-container container1"},[_c('div',{staticClass:"circle1"}),_vm._v(" "),_c('div',{staticClass:"circle2"}),_vm._v(" "),_c('div',{staticClass:"circle3"}),_vm._v(" "),_c('div',{staticClass:"circle4"})]),_vm._v(" "),_c('div',{staticClass:"spinner-container container2"},[_c('div',{staticClass:"circle1"}),_vm._v(" "),_c('div',{staticClass:"circle2"}),_vm._v(" "),_c('div',{staticClass:"circle3"}),_vm._v(" "),_c('div',{staticClass:"circle4"})]),_vm._v(" "),_c('div',{staticClass:"spinner-container container3"},[_c('div',{staticClass:"circle1"}),_vm._v(" "),_c('div',{staticClass:"circle2"}),_vm._v(" "),_c('div',{staticClass:"circle3"}),_vm._v(" "),_c('div',{staticClass:"circle4"})])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Spinner = (esExports);
// CONCATENATED MODULE: ./src/components/Spinner.vue
function injectStyle (ssrContext) {
  __webpack_require__("7VBB")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1d4a9de1"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Spinner_default.a,
  components_Spinner,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Spinner = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "/f3N":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Valert = /** @class */ (function (_super) {
    __extends(Valert, _super);
    function Valert() {
        return _super.call(this) || this;
    }
    Valert.prototype.mounted = function () { };
    __decorate([
        vue_property_decorator_1.Prop({ default: "" }),
        __metadata("design:type", String)
    ], Valert.prototype, "title", void 0);
    Valert = __decorate([
        vue_class_component_1.default({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Valert);
    return Valert;
}(vue_1.default));
exports.default = Valert;


/***/ }),

/***/ "2v9N":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Selected.vue
var Selected = __webpack_require__("TaBq");
var Selected_default = /*#__PURE__*/__webpack_require__.n(Selected);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-cd4756de","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Selected.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"asset-select-box"},[_c('div',{staticClass:"btn dropdown-toggle select-nel",attrs:{"type":"button","id":"assets","data-toggle":"dropdown"}},[_c('div',{staticClass:"select-title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_vm._m(0,false,false)]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-nel",attrs:{"role":"menu","aria-labelledby":"assets"}},_vm._l((_vm.list),function(val,key){return _c('li',{key:key,class:_vm.selection==key?'active':'',attrs:{"role":"presentation"},on:{"click":function($event){_vm.switchVal(key)}}},[_c('a',{attrs:{"role":"menuitem","tabindex":"-1"}},[_vm._v(_vm._s(val))])])}))])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"select-caret"},[_c('span',{staticClass:"caret"})])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Selected = (esExports);
// CONCATENATED MODULE: ./src/components/Selected.vue
function injectStyle (ssrContext) {
  __webpack_require__("UOl0")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cd4756de"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Selected_default.a,
  components_Selected,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Selected = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "48oz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var DateTool = /** @class */ (function () {
    function DateTool() {
    }
    /**************************************时间格式化处理************************************/
    DateTool.dateFtt = function (fmt, date) {
        var o = {
            "M+": date.getMonth() + 1,
            "d+": date.getDate(),
            "h+": date.getHours(),
            "m+": date.getMinutes(),
            "s+": date.getSeconds(),
            "q+": Math.floor((date.getMonth() + 3) / 3),
            "S": date.getMilliseconds() //毫秒   
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    DateTool.getTime = function (date) {
        date = date.toString().length == 10 ? date * 1000 : date;
        var time = new Date(date);
        var language = localStorage.getItem("language");
        if (!language || language == 'en') {
            return new Date(time).toUTCString();
        }
        else {
            return this.dateFtt("yyyy/MM/dd hh:mm:ss", new Date(time));
        }
    };
    DateTool.currentTime = function (time) {
        if (time) {
            var num = this.getDate(time).getTime();
            return accDiv(num, 1000);
        }
        return parseInt(accDiv(new Date().getTime(), 1000).toString());
    };
    DateTool.getDate = function (time) {
        if (typeof time == "number") {
            time = (time.toString().length < 14) ? time * 1000 : time;
            return new Date(time);
        }
        else {
            return new Date(time);
        }
    };
    return DateTool;
}());
exports.default = DateTool;


/***/ }),

/***/ "50aY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var WWW = /** @class */ (function () {
    function WWW() {
    }
    WWW.makeRpcUrl = function (url, method) {
        var _params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            _params[_i - 2] = arguments[_i];
        }
        // if (url[ url.length - 1 ] != '/')
        //     url = url + "/";
        var urlout = url + "?jsonrpc=2.0&id=1&method=" + method + "&params=[";
        for (var i = 0; i < _params.length; i++) {
            urlout += JSON.stringify(_params[i]);
            if (i != _params.length - 1)
                urlout += ",";
        }
        urlout += "]";
        return urlout;
    };
    WWW.makeRpcPostBody = function (method) {
        var _params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            _params[_i - 1] = arguments[_i];
        }
        var body = {};
        body["jsonrpc"] = "2.0";
        body["id"] = 1;
        body["method"] = method;
        var params = [];
        for (var i = 0; i < _params.length; i++) {
            params.push(_params[i]);
        }
        body["params"] = params;
        return body;
    };
    WWW.api_getHeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getblockcount");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        height = parseInt(r[0]["blockcount"]) - 1;
                        return [2 /*return*/, height];
                }
            });
        });
    };
    WWW.api_getBlockInfo = function (index) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, time;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getblocktime", index);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        time = parseInt(r[0]["time"]);
                        return [2 /*return*/, time];
                }
            });
        });
    };
    WWW.api_getAllAssets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getallasset");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getUTXO = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getutxo", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getnep5Balance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getallnep5assetofaddress", address, 1);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getBalance = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getbalance", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.getUtxoBalance = function (address, asset) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.apicontract, "getUtxoBalance", address, asset);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r ? r[0]['balance'] : 0];
                }
            });
        });
    };
    WWW.claimGas = function (address, num) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.apicontract, "claimgas", address, num);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.hasClaimGas = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.apicontract, "hasclaimgas", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        if (r)
                            return [2 /*return*/, r[0]];
                        else
                            throw new Error("Request failure");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 获得nep5资产信息
     * @param asset 资产id
     */
    WWW.getNep5Asset = function (asset) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getnep5asset", asset);
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 跟地址获取nep资产id对应的余额
     * @param asset 资产id
     * @param address 地址
     */
    WWW.getnep5balanceofaddress = function (asset, address) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getnep5balanceofaddress", asset, address);
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_getAddressTxs = function (address, size, page) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getaddresstxs", address, size, page);
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.api_postRawTransaction = function (data) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("sendrawtransaction", data.toHexString());
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw json['error'];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WWW.api_getclaimgas = function (address, type) {
        return __awaiter(this, void 0, void 0, function () {
            var str, str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (type)
                            str = WWW.makeRpcUrl(WWW.api, "getclaimgas", address, type);
                        else
                            str = WWW.makeRpcUrl(WWW.api, "getclaimgas", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        if (r == undefined)
                            return [2 /*return*/, 0];
                        return [2 /*return*/, r[0]];
                }
            });
        });
    };
    WWW.api_getclaimtxhex = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getclaimtxhex", address);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        if (r == undefined)
                            return [2 /*return*/, ""];
                        return [2 /*return*/, r[0]["claimtxhex"]];
                }
            });
        });
    };
    WWW.rpc_getHeight = function () {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getblockcount");
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"];
                        height = parseInt(r) - 1;
                        return [2 /*return*/, height];
                }
            });
        });
    };
    WWW.rpc_getStorage = function (scripthash, key) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getstorage", scripthash.toHexString(), key.toHexString());
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"] == null)
                            return [2 /*return*/, null];
                        r = json["result"];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.rpc_getInvokescript = function (scripthash) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "invokescript", scripthash.toHexString());
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"] == null)
                            return [2 /*return*/, null];
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    WWW.getrawtransaction = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getrawtransaction", txid);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (!json["result"])
                            return [2 /*return*/, null];
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    //获取nep5的交易详情
    WWW.getnep5transferbytxid = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getnep5transferbytxid", txid);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (!json["result"])
                            return [2 /*return*/, null];
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 发送合约调用
     * @param scriptaddr 合约参数脚本
     */
    WWW.api_getcontractstate = function (scriptaddr) {
        return __awaiter(this, void 0, void 0, function () {
            var str, value, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.makeRpcUrl(WWW.api, "getcontractstate", scriptaddr);
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        value = _a.sent();
                        return [4 /*yield*/, value.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 两笔交易提交给服务器发送
     * @param data1 第一笔交易数据
     * @param data2 第二笔交易数据
     */
    WWW.rechargeandtransfer = function (data1, data2) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("rechargeandtransfer", data1.toHexString(), data2.toHexString());
                        return [4 /*yield*/, fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 查询合约调用状态
     * @param txid 交易id
     */
    WWW.getrechargeandtransfer = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getrechargeandtransfer", txid);
                        return [4 /*yield*/, fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 获得交易对应的notify
     * @param txid
     */
    WWW.getNotify = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getnotify", txid);
                        return [4 /*yield*/, fetch(WWW.api, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 查询交易的状态
     * @param txid
     */
    WWW.hastx = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("hastx", txid);
                        return [4 /*yield*/, fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     * 查询交易对应notify的方法名
     * @param txid
     */
    WWW.hascontract = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("hascontract", txid);
                        return [4 /*yield*/, fetch(WWW.apiaggr, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        r = json["result"][0];
                        return [2 /*return*/, r];
                }
            });
        });
    };
    /**
     *
     * @param hash
     * @param address
     * @param {string} type cs|avm|abi|map
     */
    WWW.getContractCodeByHash = function (hash, address) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getContractCodeByHash", address, hash);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WWW.getContractDeployInfoByHash = function (hash) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getContractDeployInfoByHash", hash);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**编译合约代码 */
    WWW.compileContractFile = function (address, code) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("compileContractFile", address, code);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WWW.storageContractFile = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody.apply(WWW, ["storageContractFile"].concat(params));
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 调用合约并提交
     * @param {string} address 地址
     * @param {string} txhex 交易体
     */
    WWW.setTxCallContract = function (address, txhex) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("txCallContract", address, txhex);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 用地址查询合约调用的交易记录
     * @param {string} address 地址
     */
    WWW.getTxCallContract = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getTxCallContract", address);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 用地址查询合约调用的交易记录
     * @param {string} address 地址
     */
    WWW.getDumpInfoByTxid = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getDumpInfoByTxid", txid);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"][0];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WWW.getContractRemarkByAddress = function (address) {
        return __awaiter(this, void 0, void 0, function () {
            var postdata, result, json, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postdata = WWW.makeRpcPostBody("getContractRemarkByAddress", address);
                        return [4 /*yield*/, fetch(WWW.apicontract, { "method": "post", "body": JSON.stringify(postdata) })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        json = _a.sent();
                        if (json["result"]) {
                            r = json["result"];
                            return [2 /*return*/, r];
                        }
                        else {
                            throw "not data";
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    WWW.readOssFile = function (name, filename, temp) {
        return __awaiter(this, void 0, void 0, function () {
            var str, result, text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        str = WWW.apioss + "/" + (temp ? "_temp" : "") + name + "." + filename;
                        return [4 /*yield*/, fetch(str, { "method": "get" })];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.text()];
                    case 2:
                        text = _a.sent();
                        return [2 /*return*/, text];
                }
            });
        });
    };
    WWW.api = "https://api.nel.group/api/testnet";
    WWW.apiaggr = "https://apiwallet.nel.group/api/testnet";
    // static apicontract: string = "http://121.43.170.160:1189/api/testnet";
    WWW.apicontract = "https://apidebug.nel.group/api/testnet";
    WWW.apioss = "https://online-debug-data.oss-cn-hangzhou.aliyuncs.com";
    return WWW;
}());
exports.WWW = WWW;


/***/ }),

/***/ "5LD5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var entity_1 = __webpack_require__("6nHw");
var StorageTool = /** @class */ (function () {
    function StorageTool() {
    }
    StorageTool.getLoginArr = function () {
        var message = sessionStorage.getItem("login-info-arr");
        var arr = message ? entity_1.LoginInfo.StringToArray(message) : [];
        return arr;
    };
    StorageTool.setLoginArr = function (value) {
        sessionStorage.setItem('login-info-arr', entity_1.LoginInfo.ArrayToString(value));
    };
    StorageTool.setStorage = function (key, value) {
        sessionStorage.setItem(key, value);
    };
    StorageTool.storageArrayPush = function (key, value) {
        var arr = sessionStorage.getItem(key);
        arr ? arr : arr = "[]";
        var obj = JSON.parse(arr);
        obj.push(value);
        sessionStorage.setItem(key, JSON.stringify(obj));
    };
    StorageTool.getStorage = function (key) {
        return sessionStorage.getItem(key);
    };
    StorageTool.delStorage = function (key) {
        sessionStorage.removeItem(key);
    };
    StorageTool.heightRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var oldheight, height;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        oldheight = StorageTool.getStorage("block-height");
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_getHeight()];
                    case 1:
                        height = _a.sent();
                        if (oldheight == undefined || oldheight == null || oldheight == "") {
                            StorageTool.setStorage("block-height", height.toString());
                        }
                        if (height - parseInt(oldheight) >= 2) {
                            StorageTool.utxosRefresh();
                            StorageTool.setStorage('block-height', height.toString());
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    StorageTool.utxosRefresh = function () {
        return __awaiter(this, void 0, void 0, function () {
            var assets;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.coinTool.getassets()];
                    case 1:
                        assets = _a.sent();
                        entity_1.UTXO.setAssets(assets);
                        return [2 /*return*/];
                }
            });
        });
    };
    return StorageTool;
}());
exports.StorageTool = StorageTool;
/**
 * @class localStorage工具类
 */
var LocalStoreTool = /** @class */ (function () {
    //初始化对象
    function LocalStoreTool(table) {
        this.table = table;
    }
    /**
     * 添加数据
     * @param key
     * @param value param[0]:value,param[1]:key
     */
    LocalStoreTool.prototype.put = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var value = param[0]; //第零位是value
        var item = this.getList();
        var obj = item ? item : {};
        if (param.length == 1) {
            obj[key] = value;
        }
        else {
            var index = param[1];
            if (obj[key]) {
                obj[key][index] = value;
            }
            else {
                obj[key] = {};
                obj[key][index] = value;
            }
        }
        localStorage.setItem(this.table, JSON.stringify(obj));
    };
    /**
     * 往key对应的对象里塞数据，如果有相同的值则，往数组中push
     * @param key
     * @param value
     */
    LocalStoreTool.prototype.push = function (key, value) {
        var item = this.getList();
        var list = item ? item : {};
        var arr = (list[key] ? list[key] : []);
        arr.push(value);
        list[key] = arr;
        localStorage.setItem(this.table, JSON.stringify(list));
    };
    /**
     * 查找数据
     * @param key
     */
    LocalStoreTool.prototype.select = function (key) {
        var item = LocalStoreTool.getTable(this.table);
        if (item) {
            return item[key];
        }
        return undefined;
    };
    /**
     * 根据下标删除对应缓存数组中的数据
     * @param key 主键
     * @param index 下标
     */
    LocalStoreTool.prototype.deleteByIndex = function (key, index) {
        var item = this.getList();
        if (item && item[key]) {
            var arr = [];
            arr = item[key];
            arr.splice(index, 1);
            console.log(arr);
            item[key] = arr;
            localStorage.setItem(this.table, JSON.stringify(item));
        }
    };
    /**
     * 删除数据
     * @param key key:param[0],要删除的列名
     * @param index index:param[1] 要删除的字段名
     */
    LocalStoreTool.prototype.delete = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var item = this.getList();
        var key = param[0];
        if (param.length == 1) {
            if (item && item[key]) {
                delete item[key];
                localStorage.setItem(this.table, JSON.stringify(item));
            }
        }
        else {
            var index = param[1];
            if (item && item[key] && item[key][index]) {
                delete item[key][index];
                localStorage.setItem(this.table, JSON.stringify(item));
            }
        }
    };
    /**
     * 更新数据(其实put就可以了直接覆盖掉已有的数据)
     * @param key
     * @param value
     */
    LocalStoreTool.prototype.update = function (key, value) {
        var item = LocalStoreTool.getTable(this.table);
        if (item && item[key]) {
            item[key] = value;
        }
    };
    LocalStoreTool.prototype.getList = function () {
        return LocalStoreTool.getTable(this.table);
    };
    /**
     * 获得整张表的数据
     * @param table
     */
    LocalStoreTool.getTable = function (table) {
        var item = localStorage.getItem(table);
        if (item) {
            var obj = JSON.parse(item);
            return obj;
        }
        return undefined;
    };
    return LocalStoreTool;
}());
exports.LocalStoreTool = LocalStoreTool;
/**
 * @class sessionStorage工具类
 */
var sessionStoreTool = /** @class */ (function () {
    //初始化对象
    function sessionStoreTool(table) {
        this.table = table;
    }
    /**
     * 添加数据
     * @param key
     * @param value param[0]:value,param[1]:key
     */
    sessionStoreTool.prototype.put = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var value = param[0]; //第零位是value
        var item = this.getList();
        var obj = item ? item : {};
        if (param.length == 1) {
            obj[key] = value;
        }
        else {
            var index = param[1];
            if (obj[key]) {
                obj[key][index] = value;
            }
            else {
                obj[key] = {};
                obj[key][index] = value;
            }
        }
        sessionStorage.setItem(this.table, JSON.stringify(obj));
    };
    /**
     * 往key对应的对象里塞数据，如果有相同的值则，往数组中push
     * @param key
     * @param value
     */
    sessionStoreTool.prototype.push = function (key, value) {
        var item = this.getList();
        var list = item ? item : {};
        var arr = (list[key] ? list[key] : []);
        arr.push(value);
        list[key] = arr;
        sessionStorage.setItem(this.table, JSON.stringify(list));
    };
    /**
     * 查找数据
     * @param key
     */
    sessionStoreTool.prototype.select = function (key) {
        var item = this.getList();
        if (item) {
            return item[key];
        }
        return undefined;
    };
    /**
     * 删除数据
     * @param key key:param[0],要删除的列名
     * @param index index:param[1] 要删除的字段名
     */
    sessionStoreTool.prototype.delete = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var item = this.getList();
        var key = param[0];
        if (param.length == 1) {
            if (item && item[key]) {
                delete item[key];
                sessionStorage.setItem(this.table, JSON.stringify(item));
            }
        }
        else {
            var index = param[1];
            if (item && item[key] && item[key][index]) {
                delete item[key][index];
                sessionStorage.setItem(this.table, JSON.stringify(item));
            }
        }
    };
    /**
     * 更新数据(其实put就可以了直接覆盖掉已有的数据)
     * @param key
     * @param value
     */
    sessionStoreTool.prototype.update = function (key, value) {
        var item = sessionStoreTool.getTable(this.table);
        if (item && item[key]) {
            item[key] = value;
        }
    };
    /**
     * 获得整张表的数据
     * @param table
     */
    sessionStoreTool.getTable = function (table) {
        var item = sessionStorage.getItem(table);
        if (item) {
            var obj = JSON.parse(item);
            return obj;
        }
        return undefined;
    };
    sessionStoreTool.prototype.getList = function () {
        return sessionStoreTool.getTable(this.table);
    };
    sessionStoreTool.prototype.setList = function (list) {
        sessionStorage.setItem(this.table, JSON.stringify(list));
    };
    return sessionStoreTool;
}());
exports.sessionStoreTool = sessionStoreTool;
var StaticStore = /** @class */ (function () {
    function StaticStore() {
    }
    StaticStore.setAsset = function (asset) {
        StaticStore.choiceAsset = asset;
    };
    StaticStore.choiceAsset = "";
    return StaticStore;
}());
exports.StaticStore = StaticStore;


/***/ }),

/***/ "5VpT":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/pages/app.vue
//
//
//
//
//
//

/* harmony default export */ var app = ({});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-8c6ab5d0","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/pages/app.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('router-view')}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var pages_app = (esExports);
// CONCATENATED MODULE: ./src/pages/app.vue
function injectStyle (ssrContext) {
  __webpack_require__("BKOO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8c6ab5d0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  app,
  pages_app,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_pages_app = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "620q":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HASH = {
    accountCGAS: Neo.Uint160.parse('5fd8c2aed0eec0fa103f6fba16748b453baf5b2e'),
    ID_CGAS: Neo.Uint160.parse('74f2dc36a68fdc4682034178eb2220729231db76'),
    DAPP_NNC: Neo.Uint160.parse("fc732edee1efdf968c23c20a9628eaa5a6ccb934"),
    baseContract: Neo.Uint160.parse("348387116c4a75e420663277d9c02049907128c7"),
    resolverHash: "6e2aea28af9c5febea0774759b1b76398e3167f1",
    ID_GAS: "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7",
    ID_NEO: "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b",
};


/***/ }),

/***/ "6Trz":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/hint.vue
var hint = __webpack_require__("lXdV");
var hint_default = /*#__PURE__*/__webpack_require__.n(hint);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-169189c9","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/hint.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hint-box"},[_c('div',{staticClass:"hint-msg"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_hint = (esExports);
// CONCATENATED MODULE: ./src/components/hint.vue
function injectStyle (ssrContext) {
  __webpack_require__("cF2q")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-169189c9"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  hint_default.a,
  components_hint,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_hint = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "6nHw":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var AuctionEntitys_1 = __webpack_require__("Wj+m");
var LoginType;
(function (LoginType) {
    LoginType[LoginType["wif"] = 0] = "wif";
    LoginType[LoginType["nep2"] = 1] = "nep2";
    LoginType[LoginType["nep6"] = 2] = "nep6";
    LoginType[LoginType["otcgo"] = 3] = "otcgo";
})(LoginType = exports.LoginType || (exports.LoginType = {}));
var alert = /** @class */ (function () {
    function alert() {
    }
    alert.show = function (title, inputType, btnText, call) {
        var _this = this;
        // let res = new Result()
        this.btn_confirm.classList.add("btn", "btn-nel", "btn-big");
        this.btn_confirm.textContent = btnText;
        this.input.type = inputType;
        this.title.innerText = title;
        this.alertError.textContent = "";
        this.alert.hidden = false;
        this.input.onkeydown = function (ev) {
            if (ev.keyCode == 13) {
                call(_this.input.value);
            }
        };
        this.btn_confirm.onclick = function () {
            call(_this.input.value);
        };
        this.btn_close.onclick = function () {
            _this.close();
            call(false);
        };
    };
    alert.close = function () {
        this.alert.hidden = true;
        this.input.textContent = "";
        this.input.value = "";
    };
    alert.error = function (msg) {
        this.alertError.textContent = msg;
    };
    alert.alert = document.getElementById("alertview");
    alert.title = document.getElementById("alert-title");
    alert.alertBox = document.getElementById("alert-box");
    alert.alertError = document.getElementById("alert-error");
    alert.btn_close = document.getElementById("alert-close");
    alert.input = document.getElementById("alert-input");
    alert.btn_confirm = document.getElementById("alert-confirm");
    return alert;
}());
exports.alert = alert;
var LoginInfo = /** @class */ (function () {
    function LoginInfo() {
    }
    LoginInfo.deblocking = function () {
        return __awaiter(this, void 0, void 0, function () {
            var msg_title, msg_btn, msg_error, language, promise;
            return __generator(this, function (_a) {
                msg_title = "";
                msg_btn = "";
                msg_error = "";
                language = localStorage.getItem("language");
                if (!language || language == 'en') {
                    msg_title = "Please enter your password ";
                    msg_btn = "Confirm";
                    msg_error = "Password error ";
                }
                else {
                    msg_title = "请输入您的密码 ";
                    msg_btn = "确认";
                    msg_error = "密码错误 ";
                }
                promise = new Promise(function (resolve, reject) {
                    if (!!LoginInfo.info) {
                        var current = LoginInfo.info;
                        resolve(current);
                    }
                    else {
                        var current_1 = JSON.parse(sessionStorage.getItem("login-info-arr"));
                        if (current_1.type == LoginType.wif) {
                            var res = importpack_1.tools.neotool.wifDecode(current_1.msg['wif']);
                            if (res.err) {
                                reject("WIF is error");
                            }
                            else {
                                LoginInfo.info = res.info;
                                resolve(LoginInfo.info);
                                return;
                            }
                        }
                        if (current_1.type == LoginType.nep2 || LoginType.nep6) {
                            alert.show(msg_title, "password", msg_btn, function (passsword) {
                                if (!passsword) {
                                    reject("签名中断");
                                }
                                else {
                                    var nep2 = current_1.msg[LoginInfo.getCurrentAddress()];
                                    importpack_1.tools.neotool.nep2ToWif(nep2, passsword)
                                        .then(function (res) {
                                        LoginInfo.info = res.info;
                                        alert.close();
                                        resolve(LoginInfo.info);
                                    })
                                        .catch(function (err) {
                                        alert.error(msg_error);
                                    });
                                }
                            });
                        }
                        if (current_1.type == LoginType.otcgo) {
                            alert.show(msg_title, "password", msg_btn, function (password) {
                                if (!password) {
                                    reject("签名中断");
                                }
                                else {
                                    var json = current_1.msg;
                                    var otcgo = new WalletOtcgo();
                                    otcgo.fromJsonStr(JSON.stringify(json));
                                    otcgo.otcgoDecrypt(password);
                                    var result = otcgo.doValidatePwd();
                                    if (result) {
                                        var info = new LoginInfo();
                                        info.address = otcgo.address;
                                        info.prikey = otcgo.prikey;
                                        info.pubkey = otcgo.pubkey;
                                        LoginInfo.info = info;
                                        alert.close();
                                        resolve(info);
                                    }
                                    else {
                                        alert.error(msg_error);
                                    }
                                }
                            });
                        }
                    }
                });
                return [2 /*return*/, promise];
            });
        });
    };
    LoginInfo.alert = function (call) {
        // btn btn-nel btn-big
        var alert = document.getElementById("alertview");
        var title = document.getElementById("alert-title");
        var alertBox = document.getElementById("alert-box");
        var close = document.getElementById("alert-close");
        var input = document.getElementById("alert-input");
        var btn = document.getElementById("alert-confirm");
        btn.classList.add("btn", "btn-nel", "btn-big");
        btn.textContent = "确认";
        input.type = "password";
        title.innerText = "请输入密码";
        alert.hidden = false;
        btn.onclick = function () {
            call(input.value);
        };
        close.onclick = function () {
            alert.hidden = true;
            input.value = "";
            return;
        };
    };
    LoginInfo.ArrayToString = function (array) {
        var obj = [];
        for (var i = 0; i < array.length; i++) {
            obj.push({});
            obj[i].pubkey = array[i].pubkey.toHexString();
            obj[i].prikey = array[i].prikey.toHexString();
            obj[i].address = array[i].address;
        }
        return JSON.stringify(obj);
    };
    LoginInfo.StringToArray = function (str) {
        var obj = JSON.parse(str);
        var arr = [];
        for (var i = 0; i < obj.length; i++) {
            arr.push(new LoginInfo());
            var str = obj[i].prikey;
            var str2 = obj[i].pubkey;
            arr[i].prikey = str.hexToBytes();
            arr[i].pubkey = str2.hexToBytes();
            arr[i].address = obj[i].address;
        }
        return arr;
    };
    LoginInfo.getCurrentLogin = function () {
        var address = LoginInfo.getCurrentAddress();
        var arr = importpack_1.tools.storagetool.getLoginArr();
        var n = arr.findIndex(function (info) { return info.address == address; });
        return arr[n];
    };
    LoginInfo.getCurrentAddress = function () {
        return importpack_1.tools.storagetool.getStorage("current-address");
    };
    LoginInfo.setCurrentAddress = function (str) {
        importpack_1.tools.storagetool.setStorage("current-address", str);
    };
    return LoginInfo;
}());
exports.LoginInfo = LoginInfo;
var BalanceInfo = /** @class */ (function () {
    function BalanceInfo() {
    }
    BalanceInfo.jsonToArray = function (json) {
        var arr = new Array();
        for (var i in json) {
            if (json.hasOwnProperty(i)) {
                var element = json[i];
                var balance = new BalanceInfo();
                balance.asset = element["asset"];
                balance.balance = element["balance"];
                balance.name = element["balance"];
                balance.names = element["names"];
                balance.type = element["type"];
                arr.push(balance);
            }
        }
        return arr;
    };
    BalanceInfo.getBalancesByArr = function (balances, nep5balances, height) {
        var balancearr = [];
        if (balances) {
            balances.map(function (item) {
                item.names = importpack_1.tools.coinTool.assetID2name[item.asset];
                var a = importpack_1.tools.storagetool.getStorage(item.asset);
                if (a) {
                    var obj = JSON.parse(a);
                    var h = obj["height"];
                    height - h > 1 ? importpack_1.tools.storagetool.delStorage(item.asset) : item.balance = obj["balance"]["balance"];
                }
            }); //将列表的余额资产名称赋值
            balancearr = balances; //塞入页面modual
        }
        if (nep5balances) {
            for (var index = 0; index < nep5balances.length; index++) {
                var nep5 = nep5balances[index];
                var nep5b = new BalanceInfo();
                var id = nep5.assetid.replace("0x", "");
                id = id.substring(0, 4) + '...' + id.substring(id.length - 4);
                nep5b.asset = nep5.assetid;
                nep5b.balance = nep5.balance;
                nep5b.names = nep5.symbol + "(" + id + ")";
                nep5b.type = "nep5";
                balancearr.push(nep5b);
            }
        }
        return balancearr;
    };
    BalanceInfo.setBalanceSotre = function (balance, height) {
        importpack_1.tools.storagetool.setStorage(balance.asset, JSON.stringify({ height: height, balance: balance }));
    };
    return BalanceInfo;
}());
exports.BalanceInfo = BalanceInfo;
var Nep5Balance = /** @class */ (function () {
    function Nep5Balance() {
    }
    return Nep5Balance;
}());
exports.Nep5Balance = Nep5Balance;
var Result = /** @class */ (function () {
    function Result() {
    }
    return Result;
}());
exports.Result = Result;
var AssetEnum;
(function (AssetEnum) {
    AssetEnum["NEO"] = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    AssetEnum["GAS"] = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
})(AssetEnum = exports.AssetEnum || (exports.AssetEnum = {}));
var NeoAsset = /** @class */ (function () {
    function NeoAsset() {
    }
    return NeoAsset;
}());
exports.NeoAsset = NeoAsset;
var OldUTXO = /** @class */ (function () {
    function OldUTXO(txid, n) {
        this.n = n;
        this.txid = txid;
        var oldBlock = new importpack_1.tools.sessionstoretool("block");
        this.height = oldBlock.select('height');
    }
    OldUTXO.oldutxosPush = function (olds) {
        var arr = this.getOldutxos();
        importpack_1.tools.storagetool.setStorage("old-utxos", JSON.stringify(arr.concat(olds)));
    };
    OldUTXO.setOldutxos = function (olds) {
        // let arr: OldUTXO[] = this.getOldutxos();
        importpack_1.tools.storagetool.setStorage("old-utxos", JSON.stringify(olds));
    };
    OldUTXO.getOldutxos = function () {
        var arr = new Array();
        var str = importpack_1.tools.storagetool.getStorage("old-utxos");
        if (str)
            arr = JSON.parse(str);
        return arr;
    };
    OldUTXO.prototype.compareUtxo = function (utxo) {
        return this.txid == utxo.txid && this.n == utxo.n;
    };
    return OldUTXO;
}());
exports.OldUTXO = OldUTXO;
var UTXO = /** @class */ (function () {
    function UTXO() {
    }
    UTXO.ArrayToString = function (utxos) {
        var str = "";
        var obj = [];
        for (var i = 0; i < utxos.length; i++) {
            obj.push({});
            obj[i].n = utxos[i].n;
            obj[i].addr = utxos[i].addr;
            obj[i].txid = utxos[i].txid;
            obj[i].asset = utxos[i].asset;
            obj[i].count = utxos[i].count.toString();
        }
        return obj;
    };
    UTXO.StringToArray = function (obj) {
        var utxos = new Array();
        for (var i = 0; i < obj.length; i++) {
            utxos.push(new UTXO);
            var str = obj[i].count;
            utxos[i].n = obj[i].n;
            utxos[i].addr = obj[i].addr;
            utxos[i].txid = obj[i].txid;
            utxos[i].asset = obj[i].asset;
            utxos[i].count = Neo.Fixed8.parse(str);
        }
        return utxos;
    };
    UTXO.setAssets = function (assets) {
        var obj = {};
        for (var asset in assets) {
            var arr = UTXO.ArrayToString(assets[asset]);
            obj[asset] = arr;
        }
        sessionStorage.setItem("current-assets-utxos", JSON.stringify(obj));
    };
    UTXO.getAssets = function () {
        var assets = null;
        var str = sessionStorage.getItem("current-assets-utxos");
        if (str !== null && str != undefined && str != '') {
            assets = JSON.parse(str);
            for (var asset in assets) {
                assets[asset] = UTXO.StringToArray(assets[asset]);
            }
        }
        return assets;
    };
    return UTXO;
}());
exports.UTXO = UTXO;
var Consts = /** @class */ (function () {
    function Consts() {
    }
    // static baseContract = "0x2172f8d5b17c2d45fa3ff58dee8e8a4c3f51ef72";0x954f285a93eed7b4aed9396a7806a5812f1a5950;0x537758fbe85505801faa7d7d7b75b37686ad7e2d;
    Consts.baseContract = Neo.Uint160.parse("348387116c4a75e420663277d9c02049907128c7");
    Consts.registerContract = Neo.Uint160.parse("d6a5e965f67b0c3e5bec1f04f028edb9cb9e3f7c");
    return Consts;
}());
exports.Consts = Consts;
var DomainInfo = /** @class */ (function () {
    function DomainInfo() {
    }
    return DomainInfo;
}());
exports.DomainInfo = DomainInfo;
/**
 * 竞拍合约域名
 * @param startBlockSelling 开始竞标高度
 * @param endBlock 拍卖结束
 * @param lastBlock 最后出价高度
 * @param maxPrice 最大出价
 * @param maxBuyer 最大出价者(地址)
 */
var SellDomainInfo = /** @class */ (function (_super) {
    __extends(SellDomainInfo, _super);
    function SellDomainInfo() {
        return _super.call(this) || this;
    }
    SellDomainInfo.prototype.copyDomainInfoToThis = function (info) {
        this.owner = info.owner;
        this.ttl = info.ttl;
        this.register = info.register;
        this.resolver = info.resolver;
    };
    return SellDomainInfo;
}(DomainInfo));
exports.SellDomainInfo = SellDomainInfo;
var RootDomainInfo = /** @class */ (function (_super) {
    __extends(RootDomainInfo, _super);
    function RootDomainInfo() {
        return _super.call(this) || this;
    }
    return RootDomainInfo;
}(DomainInfo));
exports.RootDomainInfo = RootDomainInfo;
var Transactionforaddr = /** @class */ (function () {
    function Transactionforaddr() {
    }
    return Transactionforaddr;
}());
exports.Transactionforaddr = Transactionforaddr;
var History = /** @class */ (function () {
    function History() {
    }
    History.setHistoryStore = function (history, height) {
        var arr = this.getHistoryStore();
        arr.push({ height: height, history: history });
        importpack_1.tools.storagetool.setStorage("history-txs", JSON.stringify(arr));
    };
    History.getHistoryStore = function () {
        var str = importpack_1.tools.storagetool.getStorage("history-txs");
        var arr = !!str ? JSON.parse(str) : [];
        return arr;
    };
    History.delHistoryStoreByHeight = function (height) {
        var arr = this.getHistoryStore();
        if (arr.length > 0) {
            var newarr_1 = [];
            arr.map(function (his) {
                var h = parseInt(his.height);
                if (height - h < 2) {
                    newarr_1.push(his);
                }
            });
            importpack_1.tools.storagetool.setStorage("history-txs", JSON.stringify(newarr_1));
        }
    };
    return History;
}());
exports.History = History;
var Claim = /** @class */ (function () {
    function Claim(json) {
        this.addr = json['addr'];
        this.asset = json['asset'];
        this.claimed = json['claimed'];
        this.createHeight = json['createHeight'];
        this.n = json['n'];
        this.txid = json['txid'];
        this.useHeight = json['useHeight'];
        this.used = json['used'];
        this.value = json['value'];
    }
    Claim.strToClaimArray = function (arr) {
        var claimarr = new Array();
        for (var i in arr) {
            if (arr.hasOwnProperty(i)) {
                claimarr.push(new Claim(arr[i]));
            }
        }
        return claimarr;
    };
    return Claim;
}());
exports.Claim = Claim;
var Domainmsg = /** @class */ (function () {
    function Domainmsg() {
    }
    return Domainmsg;
}());
exports.Domainmsg = Domainmsg;
var DomainStatus = /** @class */ (function () {
    function DomainStatus() {
    }
    DomainStatus.setStatus = function (domain) {
        var str = sessionStorage.getItem("domain-status");
        var arr = {};
        if (str) {
            arr = JSON.parse(str);
            var msg = arr[domain.domainname];
            msg ? msg : msg = new DomainStatus();
            domain.await_mapping ? msg["await_mapping"] = domain.await_mapping : "";
            domain.await_register ? msg["await_register"] = domain.await_register : "";
            domain.await_resolver ? msg["await_resolver"] = domain.await_resolver : "";
            domain.mapping ? msg["mapping"] = domain.mapping : "";
            domain.resolver ? msg["resolver"] = domain.resolver.replace("0x", "") : "";
            arr[domain.domainname] = msg;
        }
        else {
            arr[domain.domainname] = domain;
        }
        sessionStorage.setItem("domain-status", JSON.stringify(arr));
    };
    DomainStatus.getStatus = function () {
        var str = sessionStorage.getItem("domain-status");
        var obj = {};
        str ? obj = JSON.parse(sessionStorage.getItem("domain-status")) : {};
        return obj;
    };
    return DomainStatus;
}());
exports.DomainStatus = DomainStatus;
var WalletOtcgo = /** @class */ (function () {
    function WalletOtcgo() {
    }
    WalletOtcgo.prototype.fromJsonStr = function (str) {
        var json = JSON.parse(str);
        var otcgo = new WalletOtcgo();
        this.address = json["address"];
        this.publicKey = json["publicKey"];
        this.publicKeyCompressed = json["publicKeyCompressed"];
        this.privateKeyEncrypted = json["privateKeyEncrypted"];
    };
    WalletOtcgo.prototype.toJson = function () {
        var json = {};
        json['address'] = this.address;
        json['publicKey'] = this.publicKey;
        json['publicKeyCompressed'] = this.publicKeyCompressed;
        json["privateKeyEncrypted"] = this.privateKeyEncrypted;
        return json;
    };
    WalletOtcgo.prototype.otcgoDecrypt = function (pwd) {
        try {
            this.privatekey = CryptoJS.AES.decrypt(this.privateKeyEncrypted, pwd).toString(CryptoJS.enc.Utf8);
            this.prikey = this.privatekey.hexToBytes();
            this.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(this.prikey);
        }
        catch (error) {
            console.error(error);
        }
    };
    // 签名
    WalletOtcgo.prototype.doSign = function (prvkey, msg) {
        var sig = new KJUR.crypto.Signature({ 'alg': 'SHA256withECDSA' });
        sig.initSign({
            'ecprvhex': prvkey,
            'eccurvename': 'secp256r1'
        });
        sig.updateString(msg);
        return sig.sign();
    };
    WalletOtcgo.prototype.doVerify = function (pubkey, msg, sigval) {
        var sig = new KJUR.crypto.Signature({
            'alg': 'SHA256withECDSA',
            'prov': 'cryptojs/jsrsa'
        });
        sig.initVerifyByPublicKey({
            'ecpubhex': pubkey,
            'eccurvename': 'secp256r1'
        });
        sig.updateString(msg);
        return sig.verify(sigval);
    };
    WalletOtcgo.prototype.doValidatePwd = function () {
        if (this.prikey.length === 0)
            return false;
        var msg = 'aaa';
        var sigval = this.doSign(this.privatekey, msg);
        return this.doVerify(this.publicKey, msg, sigval);
    };
    return WalletOtcgo;
}());
exports.WalletOtcgo = WalletOtcgo;
var MyAuction = /** @class */ (function () {
    function MyAuction() {
        this.id = "";
        this.auctionSpentTime = "";
        this.auctionState = "";
        this.expire = false;
        this.blockindex = "";
        this.maxBuyer = "";
        this.maxPrice = "";
        this.owner = "";
        this.endedState = 0;
        this.endTime = 0;
        this.startAuctionTime = 0;
        this.startTimeStr = "";
    }
    MyAuction.prototype.initAuciton = function (auction) {
        this.domain = auction.domain;
        this.startTimeStr = importpack_1.tools.timetool.getTime(auction.startTime.blocktime);
        this.maxBuyer = auction.maxBuyer;
        this.maxPrice = auction.maxPrice + "";
        // this.owner = auction.addwholist
        switch (auction.auctionState) {
            // case AuctionState.open: this.domainstate = DomainState.fixed   break;
            case AuctionEntitys_1.AuctionState.fixed:
                this.domainstate = DomainState.fixed;
                break;
            case AuctionEntitys_1.AuctionState.random:
                this.domainstate = DomainState.random;
                break;
            case AuctionEntitys_1.AuctionState.end:
                this.domainstate = DomainState.open; //end
                break;
            case AuctionEntitys_1.AuctionState.expire:
                this.domainstate = DomainState.open;
                break;
            case AuctionEntitys_1.AuctionState.pass:
                this.domainstate = DomainState.open; //end
                break;
            case AuctionEntitys_1.AuctionState.watting:
                this.domainstate = DomainState.end1; //watting
                break;
            default:
                break;
        }
    };
    MyAuction.prototype.initSelling = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.id = info.id.toString();
                this.domain = info.domain;
                this.endBlock = parseInt(info.endBlock.toString());
                this.maxBuyer = ThinNeo.Helper.GetAddressFromScriptHash(info.maxBuyer);
                this.maxPrice = info.maxPrice.toString();
                this.owner = info.owner ? ThinNeo.Helper.GetAddressFromScriptHash(info.owner) : "";
                return [2 /*return*/];
            });
        });
    };
    return MyAuction;
}());
exports.MyAuction = MyAuction;
var DataType = /** @class */ (function () {
    function DataType() {
    }
    DataType.Array = 'Array';
    DataType.ByteArray = 'ByteArray';
    DataType.Integer = 'Integer';
    DataType.Boolean = 'Boolean';
    DataType.String = 'String';
    return DataType;
}());
exports.DataType = DataType;
var ResultItem = /** @class */ (function () {
    function ResultItem() {
    }
    ResultItem.FromJson = function (type, value) {
        var item = new ResultItem();
        if (type === DataType.Array) {
            item.subItem = []; //new ResultItem[(value as Array<any>).length];
            for (var i = 0; i < value.length; i++) {
                var subjson = value[i];
                var subtype = subjson["type"];
                item.subItem.push(ResultItem.FromJson(subtype, subjson["value"]));
            }
        }
        else if (type === DataType.ByteArray) {
            item.data = value.hexToBytes();
        }
        else if (type === DataType.Integer) {
            item.data = Neo.BigInteger.parse(value).toUint8Array();
        }
        else if (type === DataType.Boolean) {
            if (value != 0)
                item.data = new Uint8Array(0x01);
            else
                item.data = new Uint8Array(0x00);
        }
        else if (type === DataType.String) {
            item.data = ThinNeo.Helper.String2Bytes(value);
        }
        else {
            console.log("not support type:" + type);
        }
        return item;
    };
    ResultItem.prototype.AsHexString = function () {
        return (this.data).toHexString();
    };
    ResultItem.prototype.AsHashString = function () {
        return "0x" + this.data.reverse().toHexString();
    };
    ResultItem.prototype.AsString = function () {
        return ThinNeo.Helper.Bytes2String(this.data);
    };
    ResultItem.prototype.AsHash160 = function () {
        if (this.data.length === 0)
            return null;
        return new Neo.Uint160(this.data.buffer);
    };
    ResultItem.prototype.AsHash256 = function () {
        if (this.data.length === 0)
            return null;
        return new Neo.Uint256(this.data.buffer);
    };
    ResultItem.prototype.AsBoolean = function () {
        if (this.data.length === 0 || this.data[0] === 0)
            return false;
        return true;
    };
    ResultItem.prototype.AsInteger = function () {
        return new Neo.BigInteger(this.data);
    };
    return ResultItem;
}());
exports.ResultItem = ResultItem;
var NNSResult = /** @class */ (function () {
    function NNSResult() {
    }
    return NNSResult;
}());
exports.NNSResult = NNSResult;
var PageUtil = /** @class */ (function () {
    /**
     *
     * @param total 总记录数
     * @param pageSize 每页条数
     */
    function PageUtil(total, pageSize) {
        this._currentPage = 1;
        this._totalCount = total;
        this._pageSize = pageSize;
        this._totalPage = total % pageSize == 0 ? total / pageSize : Math.ceil((total / pageSize));
    }
    ;
    Object.defineProperty(PageUtil.prototype, "currentPage", {
        /**
         * currentPage 返回当前页码
         */
        get: function () {
            this._totalPage = this.totalCount % this.pageSize == 0 ? this.totalCount / this.pageSize : Math.ceil((this.totalCount / this.pageSize));
            return this._currentPage;
        },
        /**
         *
         */
        set: function (currentPage) {
            this._currentPage = currentPage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageUtil.prototype, "pageSize", {
        /**
         * pageSize 每页条数
         */
        get: function () {
            return this._pageSize;
        },
        /**
         * set count
         */
        set: function (pageSize) {
            this._pageSize = pageSize;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageUtil.prototype, "totalCount", {
        /**
         * pageSize 每页条数
         */
        get: function () {
            return this._totalCount;
        },
        /**
         * set count
         */
        set: function (totalCount) {
            this._totalCount = totalCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageUtil.prototype, "totalPage", {
        /**
     * pageSize 总页数
     */
        get: function () {
            this._totalPage = this._totalCount % this._pageSize == 0 ? this._totalCount / this._pageSize : Math.ceil(this._totalCount / this._pageSize);
            return this._totalPage;
        },
        enumerable: true,
        configurable: true
    });
    return PageUtil;
}());
exports.PageUtil = PageUtil;
var Process = /** @class */ (function () {
    function Process(start) {
        this.timearr = [];
        this.startTime = typeof start == "string" ? new Date(start).getTime() : start;
        this.date = importpack_1.tools.timetool.dateFtt("yyyy/MM/dd", new Date(this.startTime));
        this.time = importpack_1.tools.timetool.dateFtt("hh:mm:ss", new Date(this.startTime));
        this.width = 0;
        this.state = "";
        for (var i = 1; i <= 5; i++) {
            var element = { msg: "", date: "", time: "" };
            switch (i) {
                case 1:
                    element.msg = "1";
                    break;
                case 3:
                    element.msg = "2";
                    break;
                case 5:
                    element.msg = "3";
                    break;
                default:
                    break;
            }
            var time = this.startTime + 300000 * i;
            var date = importpack_1.tools.timetool.dateFtt("yyyy/MM/dd", new Date(time));
            var times = importpack_1.tools.timetool.dateFtt("hh:mm:ss", new Date(time));
            element.date = date;
            element.time = times;
            this.timearr.push(element);
        }
    }
    return Process;
}());
exports.Process = Process;
/**
 * @param open 开标或者重新开标
 * @param fixed 确定期
 * @param random 随机期
 * @param end 结束
 */
var DomainState;
(function (DomainState) {
    DomainState[DomainState["open"] = 0] = "open";
    DomainState[DomainState["fixed"] = 1] = "fixed";
    DomainState[DomainState["random"] = 2] = "random";
    DomainState[DomainState["end1"] = 3] = "end1";
    DomainState[DomainState["end2"] = 4] = "end2";
    DomainState[DomainState["expire"] = 5] = "expire";
    DomainState[DomainState["pass"] = 6] = "pass";
})(DomainState = exports.DomainState || (exports.DomainState = {}));


/***/ }),

/***/ "7VBB":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "8Qnm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Spinner = /** @class */ (function (_super) {
    __extends(Spinner, _super);
    function Spinner() {
        return _super.call(this) || this;
    }
    Spinner.prototype.mounted = function () { };
    __decorate([
        vue_property_decorator_1.Prop({ default: true }),
        __metadata("design:type", Boolean)
    ], Spinner.prototype, "isbig", void 0);
    Spinner = __decorate([
        vue_property_decorator_1.Component({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Spinner);
    return Spinner;
}(vue_property_decorator_1.Vue));
exports.default = Spinner;


/***/ }),

/***/ "8b2S":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/PFoot.vue
var PFoot = __webpack_require__("JmAn");
var PFoot_default = /*#__PURE__*/__webpack_require__.n(PFoot);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-dd90f406","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/PFoot.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel-foot"},[_c('div',{staticClass:"title"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"btn-list"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_PFoot = (esExports);
// CONCATENATED MODULE: ./src/components/PFoot.vue
function injectStyle (ssrContext) {
  __webpack_require__("X+9c")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-dd90f406"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PFoot_default.a,
  components_PFoot,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_PFoot = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "9vCx":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuctionEntitys_1 = __webpack_require__("Wj+m");
var storagetool_1 = __webpack_require__("5LD5");
var AuctionStore = /** @class */ (function () {
    function AuctionStore(table) {
        this.tablename = table;
        this.session = new storagetool_1.sessionStoreTool(table);
    }
    /**
     * 更新缓存队列
     * @param data
     * @param address
     */
    AuctionStore.prototype.setSotre = function (data, address) {
        var list = this.session.getList();
        list = list ? list : {};
        for (var index = 0; index < data.length; index++) {
            var auction = data[index];
            if (auction.auctionState != AuctionEntitys_1.AuctionState.pass) {
                if (auction.addwholist) {
                    for (var i = 0; i < auction.addwholist.length; i++) {
                        var who = auction.addwholist[i];
                        if (who.address == address) {
                            auction.addWho = who;
                        }
                    }
                }
                list[auction.auctionId] = auction;
            }
            else {
                delete list[auction.auctionId];
            }
        }
        this.session.setList(list);
    };
    /**
     *
     * 从缓存中获得域名列表
     */
    AuctionStore.prototype.getSotre = function () {
        var list = this.session.getList();
        var auctions = [];
        for (var key in list) {
            if (list.hasOwnProperty(key)) {
                var auction = list[key];
                // if (auction[ "auctionState" ] != AuctionState.watting)
                auctions.push(auction);
            }
        }
        return auctions;
    };
    /**
     * 往域名列表中塞值
     * @param auction 域名信息
     */
    AuctionStore.prototype.push = function (auction) {
        var list = this.session.getList();
        list[auction.auctionId] = auction;
        this.session.setList(list);
    };
    /**
     * 查询对应id 的竞标信息
     * @param id
     */
    AuctionStore.prototype.queryStore = function (id) {
        return this.session.select(id);
    };
    return AuctionStore;
}());
exports.AuctionStore = AuctionStore;


/***/ }),

/***/ "A4Hv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "AU0D":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/toast.vue
var toast = __webpack_require__("vcAA");
var toast_default = /*#__PURE__*/__webpack_require__.n(toast);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-34d787b3","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/toast.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.isshow)?_c('div',{staticClass:"comp-toast"},[_c('div',{staticClass:"img-box"},[(_vm.type == 'error')?_c('img',{attrs:{"src":__webpack_require__("lJF1"),"alt":""}}):_vm._e(),_vm._v(" "),(_vm.type == 'success')?_c('img',{attrs:{"src":__webpack_require__("wtuE"),"alt":""}}):_vm._e()]),_vm._v(" "),_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.msg))])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_toast = (esExports);
// CONCATENATED MODULE: ./src/components/toast.vue
function injectStyle (ssrContext) {
  __webpack_require__("S2Vl")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  toast_default.a,
  components_toast,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_toast = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "BBIN":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var Valert = /** @class */ (function (_super) {
    __extends(Valert, _super);
    function Valert() {
        return _super.call(this) || this;
    }
    Valert.prototype.mounted = function () { };
    Valert = __decorate([
        vue_class_component_1.default({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Valert);
    return Valert;
}(vue_1.default));
exports.default = Valert;


/***/ }),

/***/ "BKOO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "CveJ":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var TaskFunction = /** @class */ (function () {
    function TaskFunction() {
    }
    return TaskFunction;
}());
exports.TaskFunction = TaskFunction;
var Task = /** @class */ (function () {
    function Task(taskType, type, txid, messgae) {
        var oldBlock = new importpack_1.tools.sessionstoretool("block");
        this.height = oldBlock.select('height');
        this.type = type;
        this.taskType = taskType;
        this.confirm = 0;
        this.txid = txid;
        this.state = TaskState.watting;
        this.message = messgae;
        this.startTime = new Date().getTime();
    }
    Task.prototype.toString = function () {
        return JSON.stringify(this);
    };
    return Task;
}());
exports.Task = Task;
var TaskView = /** @class */ (function (_super) {
    __extends(TaskView, _super);
    function TaskView(task) {
        var _this = this;
        var href = "https://scan.nel.group/test/";
        _this = _super.call(this, task.taskType, task.type, task.txid, task.message) || this;
        _this.state = task.state;
        _this.txidhref = href + "transaction/" + task.txid;
        _this.simpleTxid =
            [task.txid.substring(0, 6),
                task.txid.substring(task.txid.length - 6)]
                .join("...");
        return _this;
    }
    return TaskView;
}(Task));
exports.TaskView = TaskView;
/**
 * 任务状态
 */
var TaskState;
(function (TaskState) {
    TaskState[TaskState["watting"] = 0] = "watting";
    TaskState[TaskState["success"] = 1] = "success";
    TaskState[TaskState["fail"] = 2] = "fail";
})(TaskState = exports.TaskState || (exports.TaskState = {}));
/**
 * 任务类型
 */
var TaskType;
(function (TaskType) {
    TaskType[TaskType["tranfer"] = 0] = "tranfer";
    TaskType[TaskType["invoke"] = 1] = "invoke";
    TaskType[TaskType["deploy"] = 2] = "deploy";
})(TaskType = exports.TaskType || (exports.TaskType = {}));
/**
 * 确认的操作类型
 */
var ConfirmType;
(function (ConfirmType) {
    ConfirmType[ConfirmType["tranfer"] = 0] = "tranfer";
    ConfirmType[ConfirmType["contract"] = 1] = "contract";
    ConfirmType[ConfirmType["recharge"] = 2] = "recharge";
})(ConfirmType = exports.ConfirmType || (exports.ConfirmType = {}));


/***/ }),

/***/ "D078":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var Spinner_vue_1 = __webpack_require__("+jyM");
var Notify = /** @class */ (function (_super) {
    __extends(Notify, _super);
    function Notify() {
        var _this = _super.call(this) || this;
        _this.show = false;
        _this.msg = "";
        return _this;
    }
    Notify.prototype.open = function (msg) {
        this.msg = msg;
        this.show = true;
    };
    Notify.prototype.close = function () {
        this.msg = "";
        this.show = false;
    };
    Notify.prototype.mounted = function () { };
    Notify = __decorate([
        vue_class_component_1.default({
            components: {
                "spinner-wrap": Spinner_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], Notify);
    return Notify;
}(vue_1.default));
exports.default = Notify;


/***/ }),

/***/ "ECX6":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoAQMAAAC2MCouAAAABlBMVEUAAAD///+l2Z/dAAAAAXRSTlMAQObYZgAAAB1JREFUCNdjwAOYD5BGfiaNtCGN5MdOMp/HTuIAAC4LNiXJY989AAAAAElFTkSuQmCC"

/***/ }),

/***/ "Gc41":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var VLink_vue_1 = __webpack_require__("N5E8");
var vue_class_component_1 = __webpack_require__("c+8m");
var vue_1 = __webpack_require__("/5sW");
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loginshow = false;
        _this.currentLanguage = localStorage.getItem("language") == "cn" ? "中文" : "English";
        return _this;
    }
    Main.prototype.mounted = function () {
        if (this.$root["currentRoute"] == "") {
            this.$root["currentRoute"] = "#login";
        }
        if (this.$root["currentRoute"] == "#login") {
            document.body.classList.add("login-body");
            this.loginshow = false;
        }
        else {
            document.body.classList.remove("login-body");
            this.loginshow = true;
        }
    };
    Main.prototype.cutLanguage = function (lang) {
        switch (lang) {
            case 1:
                this.currentLanguage = "English";
                localStorage.setItem("language", "en");
                this.$i18n.locale = "en";
                break;
            case 2:
                this.currentLanguage = "中文";
                localStorage.setItem("language", "cn");
                this.$i18n.locale = "cn";
                break;
            default:
                break;
        }
    };
    Main = __decorate([
        vue_class_component_1.default({
            components: {
                VLink: VLink_vue_1.default
            }
        })
    ], Main);
    return Main;
}(vue_1.default));
exports.default = Main;


/***/ }),

/***/ "Gieu":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Valert.vue
var Valert = __webpack_require__("shbj");
var Valert_default = /*#__PURE__*/__webpack_require__.n(Valert);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-d8a19e9e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Valert.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"alert-box"},[_c('div',{staticClass:"alert-warp"},[_c('div',{staticClass:"alert-title"},[_vm._v(_vm._s(_vm.$t('nns.alerttitle')))]),_vm._v(" "),_c('div',{staticClass:"alert-content"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"alert-close",on:{"click":function($event){_vm.closemudloe()}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Valert = (esExports);
// CONCATENATED MODULE: ./src/components/Valert.vue
function injectStyle (ssrContext) {
  __webpack_require__("cou+")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-d8a19e9e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Valert_default.a,
  components_Valert,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Valert = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "HOkF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var entity_1 = __webpack_require__("6nHw");
var StorageMap_1 = __webpack_require__("slXE");
var importpack_1 = __webpack_require__("VKSY");
var index_1 = __webpack_require__("r84I");
var TaskBar = /** @class */ (function (_super) {
    __extends(TaskBar, _super);
    function TaskBar() {
        var _this = _super.call(this) || this;
        _this.balance = Neo.Fixed8.Zero;
        _this.blockheight = 0;
        _this.showHistory = false;
        _this.claimState = "3010";
        _this.currentAddress = entity_1.LoginInfo.getCurrentAddress();
        _this.showaddr = [
            _this.currentAddress.substring(0, 4),
            _this.currentAddress.substring(_this.currentAddress.length - 4)
        ].join("...");
        _this.href = "https://scan.nel.group/test/address/" + _this.currentAddress;
        _this.taskList = [];
        _this.taskNumber = sessionStorage.getItem("newTaskNumber")
            ? parseInt(sessionStorage.getItem("newTaskNumber"))
            : 0;
        return _this;
    }
    TaskBar.prototype.mounted = function () {
        this.getHeight();
        // TaskFunction.heightRefresh = this.getHeight;
        this.getBalance();
        this.initClaimState();
        this.taskList = index_1.services.taskManager.showTaskList();
        console.log(this.taskList);
    };
    TaskBar.prototype.getHeight = function () {
        this.blockheight = StorageMap_1.default.blockheight.select("height");
    };
    TaskBar.prototype.getBalance = function () {
        return __awaiter(this, void 0, void 0, function () {
            var balance;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.getUtxoBalance(this.currentAddress, importpack_1.tools.coinTool.id_GAS)];
                    case 1:
                        balance = _a.sent();
                        this.balance = Neo.Fixed8.fromNumber(balance);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskBar.prototype.claimGas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var openToast, result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        openToast = this.$refs["toast"]["openToast"];
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, importpack_1.tools.wwwtool.claimGas(this.currentAddress, 500)];
                    case 2:
                        result = _a.sent();
                        if (result ? result[0] : false) {
                            this.claimState = result[0]["code"];
                            openToast("success", "请求发送成功", 4000);
                        }
                        else {
                            openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        openToast("error", "gas不足领取失败，请在论坛留言索取。", 4000);
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    TaskBar.prototype.initClaimState = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, importpack_1.tools.wwwtool.hasClaimGas(this.currentAddress)];
                    case 1:
                        result = _a.sent();
                        this.claimState = result["code"];
                        console.log(this.claimState);
                        return [3 /*break*/, 3];
                    case 2:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    TaskBar.prototype.taskHistory = function () {
        // this.clearTimer();
        this.taskList = index_1.services.taskManager.showTaskList();
    };
    TaskBar.prototype.timer = function (item) {
        var _this = this;
        if (item.timer) {
            clearInterval(item.timer);
        }
        var pendingText = "";
        var seconds = "" + (new Date().getTime() - item["startTime"]) / 1000;
        pendingText = "(" + parseInt(seconds) + "s)";
        this.$set(item, "pendingText", pendingText);
        var timer = setInterval(function () {
            if (item.state != 0) {
                clearInterval(timer);
            }
            var seconds = "" + (new Date().getTime() - item["startTime"]) / 1000;
            pendingText = "(" + parseInt(seconds) + "s)";
            _this.$set(item, "pendingText", pendingText);
        }, 1000);
        item.timer = timer;
    };
    TaskBar.prototype.clearTimer = function () {
        this.taskList.forEach(function (v) {
            // if (v.timer) {
            //   clearInterval(v.timer);
            //   v.timer = null;
            // }
        });
    };
    TaskBar = __decorate([
        vue_class_component_1.default({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], TaskBar);
    return TaskBar;
}(vue_1.default));
exports.default = TaskBar;


/***/ }),

/***/ "HWxh":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var entity_1 = __webpack_require__("6nHw");
var cointool_1 = __webpack_require__("pLPz");
var transaction_1 = __webpack_require__("qU1S");
var hash_1 = __webpack_require__("620q");
var Contract = /** @class */ (function () {
    function Contract() {
    }
    /**
     * @method buildScript 构建script
     * @param appCall 合约地址
     * @param method 方法名
     * @param param 参数
     */
    Contract.buildScript = function (appCall, method, param) {
        var sb = new ThinNeo.ScriptBuilder();
        sb.EmitParamJson(param); //第二个参数是个数组
        sb.EmitPushString(method);
        sb.EmitAppCall(appCall);
        return sb.ToArray();
    };
    /**
     * @method buildScript 构建script
     * @param appCall 合约地址
     * @param method 方法名
     * @param param 参数
     */
    Contract.buildScript_random = function (appCall, method, param) {
        var sb = new ThinNeo.ScriptBuilder();
        //生成随机数
        var random_uint8 = Neo.Cryptography.RandomNumberGenerator.getRandomValues(new Uint8Array(32));
        var random_int = Neo.BigInteger.fromUint8Array(random_uint8);
        //塞入随机数
        sb.EmitPushNumber(random_int);
        sb.Emit(ThinNeo.OpCode.DROP);
        sb.EmitParamJson(param); //第二个参数是个数组
        sb.EmitPushString(method);
        sb.EmitAppCall(appCall);
        return sb.ToArray();
    };
    Contract.buildInvokeTransData_attributes = function (script) {
        return __awaiter(this, void 0, void 0, function () {
            var addr, tran, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        tran = new ThinNeo.Transaction();
                        //合约类型
                        tran.inputs = [];
                        tran.outputs = [];
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        tran.attributes = new Array(1);
                        tran.attributes[0] = new ThinNeo.Attribute();
                        tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
                        tran.attributes[0].data = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(addr);
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        return [4 /*yield*/, cointool_1.CoinTool.signData(tran)];
                    case 1:
                        data = _a.sent();
                        return [2 /*return*/, data];
                }
            });
        });
    };
    /**
     * invokeTrans 调用合约，允许转账
     * @param param[0]:script
     * @param param[1]:address
     * @param param[2]:assetid
     * @param param[3]:count
     */
    Contract.buildInvokeTransData = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var address, script, have, addr, assetid, count, utxos, tranmsg, tran, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = entity_1.LoginInfo.getCurrentAddress();
                        script = param[0];
                        have = param.length > 1;
                        addr = have ? param[1] : address;
                        assetid = have ? param[2] : importpack_1.tools.coinTool.id_GAS;
                        count = have ? param[3] : Neo.Fixed8.Zero;
                        return [4 /*yield*/, importpack_1.tools.coinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        tranmsg = importpack_1.tools.coinTool.makeTran(utxos, addr, assetid, count);
                        tran = tranmsg.info['tran'];
                        //Parameter inversion 
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        tran.extdata.gas = Neo.Fixed8.fromNumber(1.0);
                        return [4 /*yield*/, cointool_1.CoinTool.signData(tran)];
                    case 2:
                        data = _a.sent();
                        return [2 /*return*/, { data: data, tranmsg: tranmsg }];
                }
            });
        });
    };
    Contract.contractInvokeScript = function (appCall, method) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        data = this.buildScript(appCall, method, param);
                        return [4 /*yield*/, importpack_1.tools.wwwtool.rpc_getInvokescript(data)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * invokeTrans 方式调用合约塞入attributes
     * @param script 合约的script
     */
    Contract.contractInvokeTrans_attributes = function (script) {
        return __awaiter(this, void 0, void 0, function () {
            var utxos, gass, addr, tran, feeres, data, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, cointool_1.CoinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        gass = utxos[importpack_1.tools.coinTool.id_GAS];
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        tran = new ThinNeo.Transaction();
                        //合约类型
                        tran.inputs = [];
                        tran.outputs = [];
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        tran.attributes = new Array(1);
                        tran.attributes[0] = new ThinNeo.Attribute();
                        tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
                        tran.attributes[0].data = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(addr);
                        if (gass) {
                            feeres = importpack_1.tools.coinTool.creatInuptAndOutup(gass, Neo.Fixed8.parse("0.00000001"));
                            tran.inputs = feeres.inputs.map(function (input) {
                                input.hash = input.hash.reverse();
                                return input;
                            });
                            tran.outputs = feeres.outputs;
                        }
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        return [4 /*yield*/, cointool_1.CoinTool.signData(tran)];
                    case 2:
                        data = _a.sent();
                        console.log("===========================交易体 data");
                        console.log(data.toHexString());
                        res = new entity_1.Result();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        res.err = !result["sendrawtransactionresult"];
                        res.info = result["txid"];
                        if (!res.err) {
                            if (feeres && feeres.oldutxo) {
                                entity_1.OldUTXO.oldutxosPush(feeres.oldutxo);
                            }
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * invokeTrans 调用合约，允许转账
     * @param param[0]:script
     * @param param[1]:address
     * @param param[2]:assetid
     * @param param[3]:count
     */
    Contract.contractInvokeTrans = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        return __awaiter(this, void 0, void 0, function () {
            var address, script, have, addr, assetid, count, utxos, tranmsg, tran, data, height, result, olds, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = entity_1.LoginInfo.getCurrentAddress();
                        script = param[0];
                        have = param.length > 1;
                        addr = have ? param[1] : address;
                        assetid = have ? param[2] : importpack_1.tools.coinTool.id_GAS;
                        count = have ? param[3] : Neo.Fixed8.Zero;
                        return [4 /*yield*/, importpack_1.tools.coinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        tranmsg = importpack_1.tools.coinTool.makeTran(utxos, addr, assetid, count);
                        tran = tranmsg.info['tran'];
                        //Parameter inversion 
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        tran.extdata.gas = Neo.Fixed8.Zero;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 6, , 7]);
                        return [4 /*yield*/, cointool_1.CoinTool.signData(tran)];
                    case 3:
                        data = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_getHeight()];
                    case 4:
                        height = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 5:
                        result = _a.sent();
                        if (result["sendrawtransactionresult"]) {
                            olds = tranmsg.info['oldarr'];
                            olds.map(function (old) { return old.height = height; });
                            entity_1.OldUTXO.oldutxosPush(olds);
                            return [2 /*return*/, result["txid"]];
                        }
                        else {
                            throw "Transaction send failure";
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        error_1 = _a.sent();
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    Contract.deployContract = function (description, email, author, version, name, num, script, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var sb, assets, gass, consume, tran, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitPushString(description);
                        sb.EmitPushString(email);
                        sb.EmitPushString(author);
                        sb.EmitPushString(version);
                        sb.EmitPushString(name);
                        sb.EmitPushNumber(num);
                        sb.EmitPushBytes("05".hexToBytes());
                        sb.EmitPushBytes("0710".hexToBytes());
                        sb.EmitPushBytes(script);
                        sb.EmitSysCall("Neo.Contract.Create");
                        return [4 /*yield*/, importpack_1.tools.coinTool.getassets()];
                    case 1:
                        assets = _a.sent();
                        gass = assets[hash_1.HASH.ID_GAS];
                        consume = Neo.Fixed8.fromNumber(amount);
                        tran = new transaction_1.Transaction();
                        tran.setScript(sb.ToArray(), consume);
                        tran.creatInuptAndOutup(gass, consume);
                        tran.version = 1;
                        return [4 /*yield*/, tran.signData()];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 获得notify通知出去的名称
     * @param txid 交易id
     */
    Contract.getNotifyNames = function (txid) {
        return __awaiter(this, void 0, void 0, function () {
            var res, notifications, methodnames, index, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.getNotify(txid)];
                    case 1:
                        res = _a.sent();
                        notifications = res["notifications"];
                        methodnames = [];
                        for (index = 0; index < notifications.length; index++) {
                            value = notifications[index].state.value[0].value;
                            methodnames.push(ThinNeo.Helper.Bytes2String(value.hexToBytes()));
                        }
                        return [2 /*return*/, methodnames];
                }
            });
        });
    };
    return Contract;
}());
exports.default = Contract;


/***/ }),

/***/ "I0Fu":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var cn_1 = __webpack_require__("wOXa");
var en_1 = __webpack_require__("pKg8");
var vue_i18n_1 = __webpack_require__("TXmL");
vue_1.default.use(vue_i18n_1.default);
var language = localStorage.getItem("language");
if (!language) {
    var lang = navigator.language; //常规浏览器语言和IE浏览器    
    lang = lang.substr(0, 2); //截取lang前2位字符
    console.log(lang);
    language = (lang == 'zh' ? 'cn' : 'en');
    localStorage.setItem('language', language);
}
/*---------使用语言包-----------*/
exports.default = new vue_i18n_1.default({
    locale: language,
    messages: {
        'cn': cn_1.default,
        'en': en_1.default // 英文语言包
    },
});


/***/ }),

/***/ "JhKW":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Panel.vue
var Panel = __webpack_require__("BBIN");
var Panel_default = /*#__PURE__*/__webpack_require__.n(Panel);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-b95cbd0e","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Panel.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel"},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Panel = (esExports);
// CONCATENATED MODULE: ./src/components/Panel.vue
function injectStyle (ssrContext) {
  __webpack_require__("giXj")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-b95cbd0e"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Panel_default.a,
  components_Panel,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Panel = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "JmAn":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Valert = /** @class */ (function (_super) {
    __extends(Valert, _super);
    function Valert() {
        return _super.call(this) || this;
    }
    Valert.prototype.mounted = function () { };
    __decorate([
        vue_property_decorator_1.Prop({ default: "" }),
        __metadata("design:type", String)
    ], Valert.prototype, "title", void 0);
    Valert = __decorate([
        vue_class_component_1.default({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Valert);
    return Valert;
}(vue_1.default));
exports.default = Valert;


/***/ }),

/***/ "JsLz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskStore = /** @class */ (function () {
    function TaskStore() {
        this.tableName = "task-store-manager";
    }
    TaskStore.prototype.getTaskList = function () {
        var listStr = sessionStorage.getItem(this.tableName);
        var list = [];
        if (listStr) {
            list = JSON.parse(listStr);
        }
        return list;
    };
    TaskStore.prototype.pushTask = function (task) {
        var list = this.getTaskList();
        list.push(task);
        sessionStorage.setItem(this.tableName, JSON.stringify(list));
    };
    TaskStore.prototype.setTasklist = function (tasks) {
        sessionStorage.setItem(this.tableName, JSON.stringify(tasks));
    };
    return TaskStore;
}());
exports.TaskStore = TaskStore;


/***/ }),

/***/ "K8oD":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "LJj6":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_router_1 = __webpack_require__("/ocq");
var wallet_vue_1 = __webpack_require__("PPZq");
vue_1.default.use(vue_router_1.default);
var Login = function (resolve) { return __webpack_require__.e/* require */(0).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Luci")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe); };
var Deploy = function (resolve) { return __webpack_require__.e/* require */(2).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("Do0Z")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe); };
var Debug = function (resolve) { return __webpack_require__.e/* require */(3).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("qfqf")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe); };
var Invoke = function (resolve) { return __webpack_require__.e/* require */(1).then(function() { var __WEBPACK_AMD_REQUIRE_ARRAY__ = [__webpack_require__("ev4o")]; ((resolve).apply(null, __WEBPACK_AMD_REQUIRE_ARRAY__));}.bind(this)).catch(__webpack_require__.oe); };
exports.default = new vue_router_1.default({
    mode: 'hash',
    routes: [
        { path: '/', redirect: '/login' },
        {
            path: '/login', component: Login, name: "login"
        },
        {
            path: '/', component: wallet_vue_1.default, name: "index",
            children: [
                { path: 'deploy', component: Deploy, name: 'deploy' },
                { path: 'debug', component: Debug, name: 'debug' },
                { path: 'invoke', component: Invoke, name: 'invoke' },
            ]
        },
        { path: '*', redirect: '/login' },
    ]
});


/***/ }),

/***/ "N5E8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// CONCATENATED MODULE: ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/VLink.vue
//
//
//
//
//
//

/* harmony default export */ var VLink = ({
  props: {
    href: {
      type: String,
      required: true
    }
  },
  computed: {
    isActive() {
      return this.href === this.$root.currentRoute;
    }
  },
  methods: {
    go(event) {
      event.preventDefault();
      this.$root.currentRoute = this.href;
      window.history.pushState(null, this.href, window.location.pathname + this.href);
    }
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-179656f6","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/VLink.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('a',{class:{ active: _vm.isActive },attrs:{"href":_vm.href},on:{"click":_vm.go}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_VLink = (esExports);
// CONCATENATED MODULE: ./src/components/VLink.vue
function injectStyle (ssrContext) {
  __webpack_require__("NLED")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-179656f6"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  VLink,
  components_VLink,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_VLink = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "NLED":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "OrGm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var hint_vue_1 = __webpack_require__("6Trz");
var Selected_vue_1 = __webpack_require__("2v9N");
var Spinner_vue_1 = __webpack_require__("+jyM");
var toast_vue_1 = __webpack_require__("AU0D");
var Valert_vue_1 = __webpack_require__("Gieu");
var VLink_vue_1 = __webpack_require__("N5E8");
var Notify_vue_1 = __webpack_require__("QSGr");
var Panel_vue_1 = __webpack_require__("JhKW");
var PTitle_vue_1 = __webpack_require__("YcwQ");
var PFoot_vue_1 = __webpack_require__("8b2S");
var Button_vue_1 = __webpack_require__("qkow");
exports.default = {
    install: function (Vue) {
        Vue.component('v-hint', hint_vue_1.default);
        Vue.component('v-selected', Selected_vue_1.default);
        Vue.component('spinner-wrap', Spinner_vue_1.default);
        Vue.component('v-toast', toast_vue_1.default);
        Vue.component('v-alert', Valert_vue_1.default);
        Vue.component('v-link', VLink_vue_1.default);
        Vue.component("v-notify", Notify_vue_1.default);
        Vue.component("panel", Panel_vue_1.default);
        Vue.component("p-title", PTitle_vue_1.default);
        Vue.component("p-foot", PFoot_vue_1.default);
        Vue.component("v-btn", Button_vue_1.default);
    }
};


/***/ }),

/***/ "PMwo":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
var neotools = /** @class */ (function () {
    function neotools() {
    }
    /**
     * verifyAddress
     * @param addr
     */
    neotools.verifyAddress = function (addr) {
        var verify = /^[a-zA-Z0-9]{34,34}$/;
        var res = verify.test(addr) ? neotools.verifyPublicKey(addr) : verify.test(addr);
        return res;
    };
    /**
     * verifyPublicKey 验证地址
     * @param publicKey 公钥
     */
    neotools.verifyPublicKey = function (publicKey) {
        var array = Neo.Cryptography.Base58.decode(publicKey);
        var check = array.subarray(21, 21 + 4); //
        var checkdata = array.subarray(0, 21); //
        var hashd = Neo.Cryptography.Sha256.computeHash(checkdata); //
        hashd = Neo.Cryptography.Sha256.computeHash(hashd); //
        var hashd = hashd.slice(0, 4); //    
        var checked = new Uint8Array(hashd); //
        var error = false;
        for (var i = 0; i < 4; i++) {
            if (checked[i] != check[i]) {
                error = true;
                break;
            }
        }
        return !error;
    };
    /**
     * wifDecode wif解码
     * @param wif wif私钥
     */
    neotools.wifDecode = function (wif) {
        var result = new entity_1.Result();
        var login = new entity_1.LoginInfo();
        try {
            login.prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        try {
            login.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(login.prikey);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        try {
            login.address = ThinNeo.Helper.GetAddressFromPublicKey(login.pubkey);
        }
        catch (e) {
            result.err = true;
            result.info = e.message;
            return result;
        }
        result.info = login;
        return result;
    };
    /**
     * nep2FromWif
     */
    neotools.nep2FromWif = function (wif, password) {
        var prikey;
        var pubkey;
        var address;
        var res = new entity_1.Result();
        try {
            prikey = ThinNeo.Helper.GetPrivateKeyFromWIF(wif);
            var n = 16384;
            var r = 8;
            var p = 8;
            ThinNeo.Helper.GetNep2FromPrivateKey(prikey, password, n, r, p, function (info, result) {
                res.err = false;
                res.info.nep2 = result;
                pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(prikey);
                var hexstr = pubkey.toHexString();
                address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                res.info.address = address;
                return res;
            });
        }
        catch (e) {
            res.err = true;
            res.info = e.message;
            return res;
        }
    };
    /**
     * nep2TOWif
     */
    neotools.nep2ToWif = function (nep2, password) {
        return __awaiter(this, void 0, void 0, function () {
            var res, login, promise;
            return __generator(this, function (_a) {
                res = new entity_1.Result();
                login = new entity_1.LoginInfo();
                promise = new Promise(function (resolve, reject) {
                    var n = 16384;
                    var r = 8;
                    var p = 8;
                    ThinNeo.Helper.GetPrivateKeyFromNep2(nep2, password, n, r, p, function (info, result) {
                        if ("nep2 hash not match." == result)
                            reject(result);
                        login.prikey = result;
                        res.info = {};
                        if (login.prikey != null) {
                            login.pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(login.prikey);
                            login.address = ThinNeo.Helper.GetAddressFromPublicKey(login.pubkey);
                            res.err = false;
                            res.info = login;
                            resolve(res);
                        }
                        else {
                            res.err = true;
                            reject(res);
                        }
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    /**
     * nep6Load
     */
    neotools.nep6Load = function (wallet, password) {
        return __awaiter(this, void 0, void 0, function () {
            var istart, res, arr, keyindex, account, result, error_1, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 9, , 10]);
                        istart = 0;
                        res = new entity_1.Result();
                        arr = {};
                        if (!wallet.accounts) return [3 /*break*/, 7];
                        keyindex = 0;
                        _a.label = 1;
                    case 1:
                        if (!(keyindex < wallet.accounts.length)) return [3 /*break*/, 6];
                        account = wallet.accounts[keyindex];
                        if (account.nep2key == null) {
                            return [3 /*break*/, 5];
                        }
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, neotools.getPriKeyfromAccount(wallet.scrypt, password, account)];
                    case 3:
                        result = _a.sent();
                        // console.log("getpkformacc:" + result);
                        arr[account.address] = (result.info);
                        return [2 /*return*/, arr];
                    case 4:
                        error_1 = _a.sent();
                        throw error_1;
                    case 5:
                        keyindex++;
                        return [3 /*break*/, 1];
                    case 6: return [3 /*break*/, 8];
                    case 7: throw console.error("The account cannot be empty");
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        e_1 = _a.sent();
                        throw e_1.result;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * getPriKeyform
     */
    neotools.getPriKeyfromAccount = function (scrypt, password, account) {
        return __awaiter(this, void 0, void 0, function () {
            var res, promise;
            return __generator(this, function (_a) {
                res = new entity_1.Result();
                promise = new Promise(function (resolve, reject) {
                    account.getPrivateKey(scrypt, password, function (info, result) {
                        if (info == "finish") {
                            var pubkey = ThinNeo.Helper.GetPublicKeyFromPrivateKey(result);
                            var address = ThinNeo.Helper.GetAddressFromPublicKey(pubkey);
                            // var wif = ThinNeo.Helper.GetWifFromPrivateKey(result as Uint8Array);
                            // var hexkey = (result as Uint8Array).toHexString();
                            // console.log(info + "|" + address + " wif=" + wif);
                            res.err = false;
                            res.info = { pubkey: pubkey, address: address, prikey: result };
                            resolve(res);
                        }
                        else {
                            // info2.textContent += info + "|" + result;
                            reject({ err: true, result: result });
                        }
                    });
                });
                return [2 /*return*/, promise];
            });
        });
    };
    return neotools;
}());
exports.neotools = neotools;


/***/ }),

/***/ "PPZq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./src/layouts/wallet.ts
var wallet = __webpack_require__("YRcM");
var wallet_default = /*#__PURE__*/__webpack_require__.n(wallet);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-0f951bba","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/wallet.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('main-layout',{attrs:{"id":"wallet"}},[_c('taskbar-layout'),_vm._v(" "),_c('div',{staticClass:"wallet-content"},[_c('router-view')],1)],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_wallet = (esExports);
// CONCATENATED MODULE: ./src/layouts/wallet.vue
function injectStyle (ssrContext) {
  __webpack_require__("p9Y5")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */
/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  wallet_default.a,
  layouts_wallet,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_layouts_wallet = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "QSGr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Notify.vue
var Notify = __webpack_require__("D078");
var Notify_default = /*#__PURE__*/__webpack_require__.n(Notify);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-28693b97","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Notify.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.show)?_c('div',{staticClass:"alert-box"},[_c('div',{staticClass:"alert-warp"},[_c('div',{staticClass:"alert-title"},[_vm._v(_vm._s(_vm.msg))]),_vm._v(" "),_c('div',{staticClass:"alert-content"},[_vm._t("default")],2),_vm._v(" "),_c('div',{staticClass:"alert-close",on:{"click":function($event){_vm.close()}}},[_c('span',{attrs:{"aria-hidden":"true"}},[_vm._v("×")])])])]):_vm._e()}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Notify = (esExports);
// CONCATENATED MODULE: ./src/components/Notify.vue
function injectStyle (ssrContext) {
  __webpack_require__("olDd")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-28693b97"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Notify_default.a,
  components_Notify,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Notify = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "R2WG":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAMAAAC7IEhfAAAAV1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////+ORg7oAAAAHHRSTlMA26VTBDcMmopC8+bQtqqYH/bw3siuoJGEgEsJ3wAL+AAAANBJREFUOMvVk8sSgyAMRTE8rOC7tfXB/39nxcbShZjMdOXdaIYz3Ask4lJSEjJrM5DqnJOZR2XyjLv5H90ojibltpxrY3S+/SbcVcjnik9RuJBTpTdcOSTTW0LwjWVwh0MwOOtY6uB9CNp1xcTSrKXlgj3XumQfhns9M/PCu4X5hH5QZFOg6r/J2LgdfkGYSqdGoS9hXoadfPjyfHpqj7q3gkcCOZGAZIM503ruJOYkSTqnyL/ulBp6ylEvJEcu6UgQO6ASTHISDI2umlpxEb0B21wgeB5VK4AAAAAASUVORK5CYII="

/***/ }),

/***/ "S2Vl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "TaBq":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Selected = /** @class */ (function (_super) {
    __extends(Selected, _super);
    function Selected() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.title = "";
        _this.selection = "";
        return _this;
    }
    Selected.prototype.mounted = function () {
        this.selection = Object.keys(this.list)[0];
        this.switchVal(this.selection);
    };
    Selected.prototype.switchVal = function (key) {
        this.selection = key;
        this.title = this.list[key];
        this.$emit("selected", this.selection);
    };
    __decorate([
        vue_property_decorator_1.Prop(),
        __metadata("design:type", Object)
    ], Selected.prototype, "list", void 0);
    Selected = __decorate([
        vue_property_decorator_1.Component
    ], Selected);
    return Selected;
}(vue_1.default));
exports.default = Selected;


/***/ }),

/***/ "Tww3":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = __webpack_require__("VYSC");
var TaskEntitys_1 = __webpack_require__("CveJ");
var importpack_1 = __webpack_require__("VKSY");
var TaskService = /** @class */ (function () {
    function TaskService() {
    }
    TaskService.prototype.addTask = function (type, confirm, txid, message) {
        var task = new TaskEntitys_1.Task(type, confirm, txid, message);
        index_1.store.taskStore.pushTask(task);
    };
    TaskService.prototype.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, ress, tasklist;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = index_1.store.taskStore.getTaskList();
                        return [4 /*yield*/, this.getResult(list)];
                    case 1:
                        ress = _a.sent();
                        tasklist = this.forConfirm(list, function (task) {
                            var result = ress[task.txid]; //获取通知数组
                            if (result.issucces) {
                                task.state = TaskEntitys_1.TaskState.success;
                            }
                            task.confirm++;
                            return task;
                        });
                        index_1.store.taskStore.setTasklist(tasklist);
                        return [2 /*return*/];
                }
            });
        });
    };
    TaskService.prototype.showTaskList = function () {
        var tasklist = index_1.store.taskStore.getTaskList();
        var viewlist = [];
        for (var _i = 0, tasklist_1 = tasklist; _i < tasklist_1.length; _i++) {
            var task = tasklist_1[_i];
            viewlist.push(new TaskEntitys_1.TaskView(task));
        }
        var list = viewlist.sort(function (a, b) {
            return a.startTime > b.startTime ? -1 : 1;
        });
        return list;
    };
    /**
     * 循环得到任务返回的结果
     * @param {Task} tasks 任务类
     */
    TaskService.prototype.getResult = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            var ress, index, element, _a, _b, _c, _d, _e, _f, _g, _h, _j;
            return __generator(this, function (_k) {
                switch (_k.label) {
                    case 0:
                        ress = {};
                        index = 0;
                        _k.label = 1;
                    case 1:
                        if (!(index < tasks.length)) return [3 /*break*/, 13];
                        element = tasks[index];
                        if (!(element.state == TaskEntitys_1.TaskState.watting)) return [3 /*break*/, 11];
                        _a = element.type;
                        switch (_a) {
                            case TaskEntitys_1.ConfirmType.tranfer: return [3 /*break*/, 2];
                            case TaskEntitys_1.ConfirmType.contract: return [3 /*break*/, 4];
                            case TaskEntitys_1.ConfirmType.recharge: return [3 /*break*/, 6];
                        }
                        return [3 /*break*/, 8];
                    case 2:
                        _b = ress;
                        _c = element.txid;
                        return [4 /*yield*/, importpack_1.tools.wwwtool.hastx(element.txid)];
                    case 3:
                        _b[_c] = _k.sent();
                        return [3 /*break*/, 10];
                    case 4:
                        _d = ress;
                        _e = element.txid;
                        return [4 /*yield*/, importpack_1.tools.wwwtool.hascontract(element.txid)];
                    case 5:
                        _d[_e] = _k.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        _f = ress;
                        _g = element.txid;
                        return [4 /*yield*/, importpack_1.tools.wwwtool.getrechargeandtransfer(element.txid)];
                    case 7:
                        _f[_g] = _k.sent();
                        return [3 /*break*/, 10];
                    case 8:
                        _h = ress;
                        _j = element.txid;
                        return [4 /*yield*/, importpack_1.tools.wwwtool.hastx(element.txid)];
                    case 9:
                        _h[_j] = _k.sent();
                        return [3 /*break*/, 10];
                    case 10: return [3 /*break*/, 12];
                    case 11:
                        ress[element.txid] = undefined;
                        _k.label = 12;
                    case 12:
                        index++;
                        return [3 /*break*/, 1];
                    case 13: return [2 /*return*/, ress];
                }
            });
        });
    };
    /**
     * 类似 js 数组的 map方法
     * @param tasks Task数组
     * @param call 回调方法
     */
    TaskService.prototype.forConfirm = function (tasks, call) {
        var taskarr = [];
        for (var index = 0; index < tasks.length; index++) {
            var tasknew = void 0;
            var task = tasks[index];
            if (task.state == TaskEntitys_1.TaskState.watting) {
                tasknew = call(task);
            }
            else {
                tasknew = task;
            }
            taskarr.push(tasknew);
        }
        return taskarr;
    };
    return TaskService;
}());
exports.TaskService = TaskService;


/***/ }),

/***/ "UOl0":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "VKSY":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var cointool_1 = __webpack_require__("pLPz");
var neotools_1 = __webpack_require__("PMwo");
var nnstool_1 = __webpack_require__("ar5l");
var storagetool_1 = __webpack_require__("5LD5");
var wwwtool_1 = __webpack_require__("50aY");
var timetool_1 = __webpack_require__("48oz");
var contract_1 = __webpack_require__("HWxh");
var tools;
(function (tools) {
    tools.coinTool = cointool_1.CoinTool; //构造交易，UTXO排序
    tools.neotool = neotools_1.neotools; //NEO的算法工具类
    tools.nnstool = nnstool_1.NNSTool; //nns域名处理工具类
    tools.storagetool = storagetool_1.StorageTool; //sessionStory
    tools.wwwtool = wwwtool_1.WWW; //api请求工具类
    tools.timetool = timetool_1.default; //时间工具类
    tools.contract = contract_1.default; //智能合约调用方法封装
    tools.localstoretool = storagetool_1.LocalStoreTool;
    tools.sessionstoretool = storagetool_1.sessionStoreTool;
})(tools = exports.tools || (exports.tools = {}));


/***/ }),

/***/ "VYSC":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var AuctionStore_1 = __webpack_require__("9vCx");
var UtxoStore_1 = __webpack_require__("gAj9");
var TaskStore_1 = __webpack_require__("JsLz");
var store;
(function (store) {
    store.auction_neo = new AuctionStore_1.AuctionStore("AUCTION_LIST_NEO");
    store.auction_test = new AuctionStore_1.AuctionStore("AUCTION_LIST_TEST");
    store.utxo = UtxoStore_1.Utxo;
    store.markutxo = UtxoStore_1.MarkUtxo;
    store.taskStore = new TaskStore_1.TaskStore();
})(store = exports.store || (exports.store = {}));


/***/ }),

/***/ "Wj+m":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var entity_1 = __webpack_require__("6nHw");
var importpack_1 = __webpack_require__("VKSY");
/**
 * 区块时间类
 */
var BlockTime = /** @class */ (function () {
    function BlockTime() {
    }
    return BlockTime;
}());
exports.BlockTime = BlockTime;
/**
 * 加价地址类
 */
var AuctionAddress = /** @class */ (function () {
    function AuctionAddress(addres, totalValue) {
        this.address = addres;
        this.totalValue = totalValue;
    }
    return AuctionAddress;
}());
exports.AuctionAddress = AuctionAddress;
/**
 * 竞拍类
 */
var Auction = /** @class */ (function () {
    function Auction() {
    }
    Auction.prototype.parse = function (json, address) {
        if (typeof json == 'string') { }
        if (typeof json == 'object') {
            this.auctionId = json["auctionId"];
            this.fulldomain = json["fulldomain"];
            this.domain = json["domain"];
            this.parenthash = json["parenthash"];
            this.domainTTL = json["domainTTL"];
            this.auctionState = json["auctionState"];
            this.startTime = json["startTime"];
            this.startAddress = json["startAddress"];
            this.maxBuyer = json["maxBuyer"];
            this.maxPrice = json["maxPrice"];
            this.endTime = json["endTime"];
            this.endAddress = json["endAddress"];
            this.lastTime = json["lastTime"];
            this.addwholist = json["addwholist"];
            if (this.addwholist) {
                this.addWho = this.addwholist.find(function (addWho) {
                    return addWho.address == address;
                });
                this.addWho = this.addWho ? this.addWho : new AuctionAddress(address, 0);
            }
        }
    };
    Auction.prototype.formAuctionInfo = function (auction) {
        this.auctionId = auction.id.toString();
        this.maxBuyer = ThinNeo.Helper.GetAddressFromScriptHash(auction.maxBuyer);
        this.maxPrice = accDiv(auction.maxPrice.toString(), 10000000);
        this.fulldomain = auction.domain;
        this.addWho = new AuctionAddress(entity_1.LoginInfo.getCurrentAddress(), 0);
    };
    return Auction;
}());
exports.Auction = Auction;
/**
 * 竞拍状态枚举类
 */
var AuctionState;
(function (AuctionState) {
    AuctionState["watting"] = "0001";
    AuctionState["open"] = "0101";
    AuctionState["fixed"] = "0201";
    AuctionState["random"] = "0301";
    AuctionState["end"] = "0401";
    AuctionState["pass"] = "0501";
    AuctionState["expire"] = "0601";
})(AuctionState = exports.AuctionState || (exports.AuctionState = {}));
/**
 * 竞拍列表显示类
 */
var AuctionView = /** @class */ (function () {
    //传入Auction初始化域名显示对象
    function AuctionView(auction) {
        var currentAddress = entity_1.LoginInfo.getCurrentAddress();
        if (!auction.addwholist) {
            this.addwho = new AuctionAddress(currentAddress, 0);
        }
        else {
            for (var index = 0; index < auction.addwholist.length; index++) {
                var addrwho = auction.addwholist[index];
                if (addrwho.address == currentAddress) {
                    this.addwho = addrwho;
                }
            }
            this.addwho = this.addwho ? this.addwho : new AuctionAddress(currentAddress, 0);
        }
        this.id = auction.auctionId;
        this.domain = auction.fulldomain;
        this.maxBuyer = auction.maxBuyer;
        this.maxPrice = auction.maxPrice ? auction.maxPrice : 0;
        this.startTime = auction.startTime;
        this.endTime = auction.endTime;
        this.lastTime = auction.lastTime;
        this.startTimeStr = importpack_1.tools.timetool.getTime(auction.startTime.blocktime);
        this.state = auction.auctionState;
        // if (this.state == AuctionState.open){  this.state = AuctionState.fixed;      }
        if (this.state == AuctionState.end || this.state == AuctionState.expire) {
            this.state = AuctionState.end;
            if (auction.maxBuyer == this.addwho.address) {
                this.btnState = this.addwho.getdomainTime ? auctionBtnState.receivedname : auctionBtnState.getdomain;
            }
            else {
                this.btnState = this.addwho.accountTime ? auctionBtnState.receivedsgas : auctionBtnState.recoversgas;
            }
        }
        else {
            this.btnState = auctionBtnState.bid;
        }
    }
    return AuctionView;
}());
exports.AuctionView = AuctionView;
/**
 * 加价详情显示类
 */
var AuctionInfoView = /** @class */ (function (_super) {
    __extends(AuctionInfoView, _super);
    function AuctionInfoView(auction) {
        return _super.call(this, auction) || this;
    }
    return AuctionInfoView;
}(AuctionView));
exports.AuctionInfoView = AuctionInfoView;
/**
 * 按钮状态 状态 ENUM
 */
var auctionBtnState;
(function (auctionBtnState) {
    auctionBtnState[auctionBtnState["bid"] = 0] = "bid";
    auctionBtnState[auctionBtnState["getdomain"] = 1] = "getdomain";
    auctionBtnState[auctionBtnState["recoversgas"] = 2] = "recoversgas";
    auctionBtnState[auctionBtnState["receivedsgas"] = 3] = "receivedsgas";
    auctionBtnState[auctionBtnState["receivedname"] = 4] = "receivedname";
})(auctionBtnState = exports.auctionBtnState || (exports.auctionBtnState = {}));
/**
 * 时间轴类
 */
var Process = /** @class */ (function () {
    function Process(start, day) {
        this.timearr = [];
        this.startTime = typeof start == "string" ? importpack_1.tools.timetool.currentTime(start) : start;
        var startdate = importpack_1.tools.timetool.getDate(this.startTime);
        this.date = importpack_1.tools.timetool.dateFtt("yyyy/MM/dd", startdate);
        this.time = importpack_1.tools.timetool.dateFtt("hh:mm:ss", startdate);
        this.width = 0;
        for (var i = 1; i <= 5; i++) {
            var element = { msg: "", date: "", time: "" };
            switch (i) {
                case 1:
                    element.msg = "1";
                    break;
                case 3:
                    element.msg = "2";
                    break;
                case 5:
                    element.msg = "3";
                    break;
                default:
                    break;
            }
            var time = this.startTime + day * i;
            var date = importpack_1.tools.timetool.dateFtt("yyyy/MM/dd", importpack_1.tools.timetool.getDate(time));
            var times = importpack_1.tools.timetool.dateFtt("hh:mm:ss", importpack_1.tools.timetool.getDate(time));
            element.date = date;
            element.time = times;
            this.timearr.push(element);
        }
    }
    return Process;
}());
exports.Process = Process;


/***/ }),

/***/ "X+9c":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "XDGF":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TABLE_CONFIG = {
    utxoMark: 'NELWALLET_O3_SESSION_UTXO_MARK',
    taskList: 'NELWALLET_O3_SESSION_TASK_LIST',
    blockCount: 'NELWALLET_O3_SESSION_BLOCK_HEIGHT',
    auctionList: 'NELWALLET_O3_SESSION_AUCTION_LIST'
};


/***/ }),

/***/ "XfB5":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 任务管理器
 */
var TaskManager = /** @class */ (function () {
    function TaskManager() {
    }
    /**
     * 更新方法
     */
    TaskManager.update = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    /**
     * 类似 js 数组的 map方法
     * @param tasks Task数组
     * @param call 回调方法
     */
    TaskManager.forConfirm = function (tasks, call) {
        // let taskarr: Task[] = [];
        // for (let index = 0; index < tasks.length; index++)
        // {
        //     let tasknew: Task;
        //     const task = tasks[ index ];
        //     if (task.state == TaskState.watting)
        //     {
        //         tasknew = call(task);
        //     } else
        //     {
        //         tasknew = task;
        //     }
        //     taskarr.push(tasknew);
        // }
        // return taskarr;
    };
    /**
     * 循环得到任务返回的结果
     * @param tasks 任务类
     */
    TaskManager.getResult = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TaskManager.addTask = function (task) {
        // this.taskStore.push(task.txid, task);
        // TaskFunction.newTaskNumber();
    };
    /**
     * 交易确认
     * @param tasks
     */
    TaskManager.confirm_claimGas = function (tasks) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    TaskManager.TableName = "task-manager";
    TaskManager.functionList = [];
    return TaskManager;
}());
exports.TaskManager = TaskManager;


/***/ }),

/***/ "YRcM":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var Main_vue_1 = __webpack_require__("l7Tq");
var taskbar_vue_1 = __webpack_require__("dLc9");
var VLink_vue_1 = __webpack_require__("N5E8");
var FeatureComponent = /** @class */ (function (_super) {
    __extends(FeatureComponent, _super);
    function FeatureComponent() {
        var _this = _super.call(this) || this;
        _this.blockheight = 0;
        _this.showHistory = false;
        _this.taskList = [];
        _this.taskNumber = sessionStorage.getItem("newTaskNumber") ? parseInt(sessionStorage.getItem("newTaskNumber")) : 0;
        return _this;
    }
    FeatureComponent.prototype.mounted = function () {
        if (this.$router.currentRoute.fullPath.length <= 1) {
            this.$router.push("login");
        }
        var arr = sessionStorage.getItem("login-info-arr");
        if (!arr || arr.length == 0) {
            this.$router.push("login");
        }
    };
    FeatureComponent.prototype.isActive = function (page) {
        return this.$router.currentRoute.fullPath.includes(page);
    };
    FeatureComponent = __decorate([
        vue_class_component_1.default({
            components: {
                VLink: VLink_vue_1.default,
                MainLayout: Main_vue_1.default,
                TaskbarLayout: taskbar_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}(vue_1.default));
exports.default = FeatureComponent;


/***/ }),

/***/ "YcwQ":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/PTitle.vue
var PTitle = __webpack_require__("/f3N");
var PTitle_default = /*#__PURE__*/__webpack_require__.n(PTitle);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-1b5c2044","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/PTitle.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"panel-title"},[_c('div',{staticClass:"title"},[_vm._v("\n    "+_vm._s(_vm.title)+"\n  ")]),_vm._v(" "),_c('div',{staticClass:"btn-list"},[_vm._t("default")],2)])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_PTitle = (esExports);
// CONCATENATED MODULE: ./src/components/PTitle.vue
function injectStyle (ssrContext) {
  __webpack_require__("bkAO")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1b5c2044"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  PTitle_default.a,
  components_PTitle,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_PTitle = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "ZJcu":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "ar5l":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var entity_1 = __webpack_require__("6nHw");
/**
 * @name NEONameServiceTool
 * @method initRootDomain_初始化根域名信息
 */
var NNSTool = /** @class */ (function () {
    function NNSTool() {
        Neo.Cryptography.RandomNumberGenerator.startCollectors();
    }
    /**
     * @method 初始化根域名信息
     */
    NNSTool.initRootDomain = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var rootInfo, scriptaddress, domain;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        rootInfo = new entity_1.RootDomainInfo();
                        rootInfo.roothash = NNSTool.nameHash(root);
                        rootInfo.rootname = root;
                        scriptaddress = entity_1.Consts.baseContract;
                        return [4 /*yield*/, NNSTool.getOwnerInfo(rootInfo.roothash, scriptaddress)];
                    case 1:
                        domain = _a.sent();
                        rootInfo.owner = domain.owner;
                        rootInfo.register = domain.register;
                        rootInfo.resolver = domain.resolver;
                        rootInfo.ttl = domain.ttl;
                        return [2 /*return*/, rootInfo];
                }
            });
        });
    };
    NNSTool.getRootInfo = function (root) {
        return __awaiter(this, void 0, void 0, function () {
            var info, info;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(root == "test")) return [3 /*break*/, 3];
                        if (!!this.ROOT_TEST) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.initRootDomain(root)];
                    case 1:
                        info = _a.sent();
                        this.ROOT_TEST = info;
                        _a.label = 2;
                    case 2: return [2 /*return*/, this.ROOT_TEST];
                    case 3:
                        if (!(root == "neo")) return [3 /*break*/, 6];
                        if (!!this.ROOT_NEO) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.initRootDomain(root)];
                    case 4:
                        info = _a.sent();
                        this.ROOT_NEO = info;
                        _a.label = 5;
                    case 5: return [2 /*return*/, this.ROOT_NEO];
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 查询域名信息
     * @param doamin 域名字符串
     */
    NNSTool.queryDomainInfo = function (doamin) {
        return __awaiter(this, void 0, void 0, function () {
            var domainarr, nnshash, doamininfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        domainarr = doamin.split('.');
                        nnshash = NNSTool.nameHashArray(domainarr);
                        return [4 /*yield*/, NNSTool.getOwnerInfo(nnshash, entity_1.Consts.baseContract)];
                    case 1:
                        doamininfo = _a.sent();
                        // let info = await NNSTool.getNameInfo(nnshash)
                        // var owner = doamininfo.owner.toHexString();
                        // return address;
                        return [2 /*return*/, doamininfo];
                }
            });
        });
    };
    /**
     * 先到先得——注册域名
     * @param doamin 域名字符串
     */
    NNSTool.registerDomain = function (doamin) {
        return __awaiter(this, void 0, void 0, function () {
            var nnshash, address, sb, scriptaddress, random_uint8, random_int, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        nnshash = NNSTool.nameHash(NNSTool.ROOT_TEST.rootname);
                        address = entity_1.LoginInfo.getCurrentAddress();
                        sb = new ThinNeo.ScriptBuilder();
                        scriptaddress = NNSTool.ROOT_TEST.register;
                        random_uint8 = Neo.Cryptography.RandomNumberGenerator.getRandomValues(new Uint8Array(32));
                        random_int = Neo.BigInteger.fromUint8Array(random_uint8);
                        //塞入随机数
                        sb.EmitPushNumber(random_int);
                        sb.Emit(ThinNeo.OpCode.DROP);
                        sb.EmitParamJson(["(addr)" + address, "(hex256)" + nnshash.toString(), "(str)" + doamin]); //第二个参数是个数组
                        sb.EmitPushString("requestSubDomain");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.contract.contractInvokeTrans_attributes(data)];
                    case 1:
                        res = _a.sent();
                        if (!res.err) {
                            // WWW.setnnsinfo(address,doamin,);
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * @method 返回根域名名称
     */
    NNSTool.getRootName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var name, sb, scriptaddress, data, result, state, stack, bs;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        name = "";
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson(JSON.parse("[]"));
                        sb.EmitPushString("rootName");
                        scriptaddress = entity_1.Consts.baseContract;
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result.state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stack = result.stack;
                            //find name 他的type 有可能是string 或者ByteArray
                            if (stack[0].type == "Array") {
                                // info2.textContent += "name=" + stack[0].value + "\n";
                                length = stack[0].lenght;
                            }
                            else if (stack[0].type == "ByteArray") {
                                bs = stack[0].value.hexToBytes();
                                name = ThinNeo.Helper.Bytes2String(bs);
                            }
                            return [2 /*return*/, name];
                        }
                        catch (e) {
                            return [2 /*return*/, e.message];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 返回根域名hash
     */
    NNSTool.getRootNameHash = function () {
        return __awaiter(this, void 0, void 0, function () {
            var nameHash, sb, scriptaddress, data, result, state, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson(JSON.parse("[]"));
                        sb.EmitPushString("rootNameHash");
                        scriptaddress = entity_1.Consts.baseContract;
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result["state"];
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            stack = result["stack"];
                            //find name 他的type 有可能是string 或者ByteArray
                            if (stack[0].type == "ByteArray") {
                                nameHash = stack[0]["value"].hexToBytes();
                            }
                            return [2 /*return*/, nameHash];
                        }
                        catch (e) {
                            return [2 /*return*/, e.message];
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    //返回域名详情
    NNSTool.getOwnerInfo = function (domain, scriptaddress) {
        return __awaiter(this, void 0, void 0, function () {
            var info, data, result, state, rest, stackarr, stack;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        info = new entity_1.DomainInfo();
                        data = importpack_1.tools.contract.buildScript(scriptaddress, "getOwnerInfo", ["(hex256)" + domain.toString()]);
                        return [4 /*yield*/, importpack_1.tools.wwwtool.rpc_getInvokescript(data)];
                    case 1:
                        result = _a.sent();
                        try {
                            state = result.state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                // info2.textContent += "Succ\n";
                            }
                            rest = new entity_1.NNSResult();
                            rest.textInfo = result;
                            stackarr = result["stack"];
                            stack = entity_1.ResultItem.FromJson(entity_1.DataType.Array, stackarr).subItem[0].subItem;
                            if (stackarr[0].type == "Array") {
                                info.owner = stack[0].AsHash160();
                                info.register = stack[1].AsHash160();
                                info.resolver = stack[2].AsHash160();
                                info.ttl = stack[3].AsInteger().toString();
                            }
                        }
                        catch (e) {
                            console.error(e);
                        }
                        return [2 /*return*/, info];
                }
            });
        });
    };
    /**
     * 域名转让
     * @param domain
     * @param newOwner
     */
    NNSTool.setOwner = function (domain, newOwner) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, hashstr, ownerHash, ownerHashStr, arr, nnshash, scriptaddress, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(entity_1.LoginInfo.getCurrentAddress());
                        hashstr = hash.reverse().toHexString();
                        ownerHash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(newOwner);
                        ownerHashStr = ownerHash.reverse().toHexString();
                        arr = domain.split(".");
                        nnshash = importpack_1.tools.nnstool.nameHashArray(arr);
                        scriptaddress = entity_1.Consts.baseContract;
                        data = importpack_1.tools.contract.buildScript_random(scriptaddress, "owner_SetOwner", [
                            "(hex160)" + hashstr,
                            "(hex256)" + nnshash.toString(),
                            "(hex160)" + ownerHashStr
                        ]);
                        return [4 /*yield*/, importpack_1.tools.contract.contractInvokeTrans_attributes(data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 生成解析器
     * @param protocol
     * @param nnshash
     * @param scriptaddress
     */
    NNSTool.setResolve = function (domain, resolverhash) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, hashstr, arr, nnshash, resolvestr, scriptaddress, sb, random_uint8, random_int, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(entity_1.LoginInfo.getCurrentAddress());
                        hashstr = hash.reverse().toHexString();
                        arr = domain.split(".");
                        nnshash = importpack_1.tools.nnstool.nameHashArray(arr);
                        resolvestr = resolverhash.reverse().toHexString();
                        scriptaddress = entity_1.Consts.baseContract;
                        sb = new ThinNeo.ScriptBuilder();
                        random_uint8 = Neo.Cryptography.RandomNumberGenerator.getRandomValues(new Uint8Array(32));
                        random_int = Neo.BigInteger.fromUint8Array(random_uint8);
                        //塞入随机数
                        sb.EmitPushNumber(random_int);
                        sb.Emit(ThinNeo.OpCode.DROP);
                        sb.EmitParamJson([
                            "(hex160)" + hashstr,
                            "(hex256)" + nnshash.toString(),
                            "(hex160)" + resolvestr
                        ]); //第二个参数是个数组
                        sb.EmitPushString("owner_SetResolver");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.contract.contractInvokeTrans_attributes(data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * 设置解析器映射地址
     * @param domain 域名
     * @param str 映射内容
     * @param resolve 解析器
     */
    NNSTool.setResolveData = function (domain, str, resolve) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, hashstr, arr, nnshash, scriptaddress, sb, random_uint8, random_int, data, res;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hash = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(entity_1.LoginInfo.getCurrentAddress());
                        hashstr = hash.reverse().toHexString();
                        arr = domain.split(".");
                        nnshash = importpack_1.tools.nnstool.nameHashArray(arr);
                        scriptaddress = resolve.hexToBytes();
                        sb = new ThinNeo.ScriptBuilder();
                        random_uint8 = Neo.Cryptography.RandomNumberGenerator.getRandomValues(new Uint8Array(32));
                        random_int = Neo.BigInteger.fromUint8Array(random_uint8);
                        //塞入随机数
                        sb.EmitPushNumber(random_int);
                        sb.Emit(ThinNeo.OpCode.DROP);
                        sb.EmitParamJson([
                            "(hex160)" + hashstr,
                            "(hex256)" + nnshash.toString(),
                            "(str)",
                            "(str)addr",
                            "(str)" + str
                        ]);
                        sb.EmitPushString("setResolverData");
                        sb.EmitAppCall(scriptaddress.reverse());
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.contract.contractInvokeTrans_attributes(data)];
                    case 1:
                        res = _a.sent();
                        return [2 /*return*/, res];
                }
            });
        });
    };
    NNSTool.resolveData = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var scriptaddress, arr, nnshash, nnshashstr, sb, data, res, addr, state, stack, value;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scriptaddress = entity_1.Consts.baseContract;
                        arr = domain.split(".");
                        nnshash = NNSTool.nameHashArray(arr);
                        nnshashstr = nnshash;
                        sb = new ThinNeo.ScriptBuilder();
                        sb.EmitParamJson([
                            "(str)addr",
                            "(hex256)" + nnshashstr,
                            "(str)" + ""
                        ]);
                        sb.EmitPushString("resolve");
                        sb.EmitAppCall(scriptaddress);
                        data = sb.ToArray();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.rpc_getInvokescript(data)];
                    case 1:
                        res = _a.sent();
                        addr = "";
                        try {
                            state = res.state;
                            // info2.textContent = "";
                            if (state.includes("HALT, BREAK")) {
                                stack = res.stack;
                                //find name 他的type 有可能是string 或者ByteArray
                                if (stack[0].type == "ByteArray") {
                                    if (stack[0].value != "00") {
                                        value = stack[0].value.hexToBytes();
                                        addr = ThinNeo.Helper.Bytes2String(value);
                                    }
                                }
                            }
                        }
                        catch (e) {
                            console.log(e);
                        }
                        return [2 /*return*/, addr];
                }
            });
        });
    };
    //解析域名完整模式
    NNSTool.resolveFull = function (protocol, nameArray) {
        return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
            return [2 /*return*/];
        }); });
    };
    /**
     * 域名转hash
     * #region 域名转hash算法
     * 域名转hash算法
     * aaa.bb.test =>{"test","bb","aa"}
     * @param domain 域名
     */
    NNSTool.nameHash = function (domain) {
        var domain_bytes = ThinNeo.Helper.String2Bytes(domain);
        var hashd = Neo.Cryptography.Sha256.computeHash(domain_bytes);
        return new Neo.Uint256(hashd);
    };
    /**
     * 子域名转hash
     * @param roothash  根域名hash
     * @param subdomain 子域名
     */
    NNSTool.nameHashSub = function (roothash, subdomain) {
        var bs = ThinNeo.Helper.String2Bytes(subdomain);
        if (bs.length == 0)
            return roothash;
        var domain = Neo.Cryptography.Sha256.computeHash(bs);
        var domain_bytes = new Uint8Array(domain);
        var domainUint8arry = domain_bytes.concat(new Uint8Array(roothash.bits.buffer));
        var sub = Neo.Cryptography.Sha256.computeHash(domainUint8arry);
        return new Neo.Uint256(sub);
    };
    /**
     * 返回一组域名的最终hash
     * @param domainarray 域名倒叙的数组
     */
    NNSTool.nameHashArray = function (domainarray) {
        domainarray.reverse();
        var hash = NNSTool.nameHash(domainarray[0]);
        for (var i = 1; i < domainarray.length; i++) {
            hash = NNSTool.nameHashSub(hash, domainarray[i]);
        }
        return hash;
    };
    NNSTool.verifyDomain = function (domain) {
        //check domain valid
        var reg = /^(.+\.)(test|TEST|neo|NEO[a-z][a-z])$/;
        if (!reg.test(domain)) {
            return false;
        }
        else {
            return true;
        }
    };
    NNSTool.verifyAddr = function (addr) {
        var reg = /^[a-zA-Z0-9]{34,34}$/;
        if (!reg.test(addr)) {
            return false;
        }
        else {
            return true;
        }
    };
    NNSTool.verifyNeoDomain = function (domain) {
        //check domain valid
        var reg = /^(.+\.)(neo|Neo)$/;
        if (!reg.test(domain)) {
            return false;
        }
        else {
            return true;
        }
    };
    NNSTool.setDomainStatus = function () {
    };
    NNSTool.initStatus = function () {
        NNSTool.domainStatus = entity_1.DomainStatus.getStatus();
    };
    return NNSTool;
}());
exports.NNSTool = NNSTool;


/***/ }),

/***/ "bkAO":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cF2q":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "cou+":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dLc9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layouts/taskbar.vue
var taskbar = __webpack_require__("HOkF");
var taskbar_default = /*#__PURE__*/__webpack_require__.n(taskbar);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-016ac0bb","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/taskbar.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"navbar navbar-wallet"},[_c('div',{staticClass:"blockheight"},[_c('div',{staticClass:"main"},[_c('div',{staticClass:"balance"},[_c('span',{staticClass:"asset"},[_vm._v("GAS")]),_vm._v(" "),_c('span',{staticClass:"amount"},[_vm._v(_vm._s(_vm.balance.toString()))]),_vm._v(" "),(_vm.claimState==='3010')?_c('v-btn',{on:{"onclick":_vm.claimGas}},[_vm._v("索取500 GAS")]):(_vm.claimState==='3011')?_c('v-btn',{attrs:{"type":'disable'}},[_vm._v("排队中")]):(_vm.claimState==='3012')?_c('v-btn',{attrs:{"type":'disable'}},[_vm._v("已发放 GAS")]):_c('v-btn',{attrs:{"type":'disable'}},[_vm._v("Gas不足")]),_vm._v(" "),_c('v-hint',[_c('div',{staticClass:"hint-img"},[_c('img',{attrs:{"src":__webpack_require__("dqMZ"),"alt":""}})]),_vm._v(" "),_c('div',{staticClass:"hint-content"},[_c('p',[_vm._v("每个钱包每日可索取一次500gas，需要更多请在论坛留言索取。")])])])],1),_vm._v(" "),_c('div',{staticClass:"task-btn"},[_c('span',{staticClass:"task-tab"},[_c('img',{attrs:{"src":__webpack_require__("R2WG"),"alt":""}}),_vm._v("\n          "+_vm._s(_vm.$t('transfer.title2')+"：")+"\n          "),_c('a',{attrs:{"href":_vm.href,"target":"_blank"}},[_vm._v(_vm._s(_vm.showaddr))])]),_vm._v(" "),_c('span',{staticClass:"task-tab"},[_c('img',{attrs:{"src":__webpack_require__("ECX6"),"alt":""}}),_vm._v("\n          "+_vm._s([_vm.$t('navbar.blockheight'),_vm.blockheight].join("："))+"\n        ")]),_vm._v(" "),_c('v-btn',{on:{"onclick":function($event){_vm.showHistory=true}}},[_vm._v("操作记录")])],1),_vm._v(" "),_c('div',{staticClass:"tranhistory-box"},[(_vm.showHistory)?_c('div',{staticClass:"tranhistory-wrap"},[_c('div',{staticClass:"tranhistory-listbox"},[_c('div',{staticClass:"tranhistory-title"},[_c('div',{staticClass:"tranhistory-close",on:{"click":function($event){_vm.showHistory=!_vm.showHistory}}},[_c('img',{attrs:{"src":__webpack_require__("fgqV"),"alt":""}})]),_vm._v(" "),_c('span',[_vm._v(_vm._s(_vm.$t('operation.title')))]),_vm._v(" "),_c('div',{staticClass:"tranhistory-tips"},[_vm._v(_vm._s(_vm.$t('operation.tips')))])]),_vm._v(" "),_c('div',{staticClass:"tranhistory-list"},_vm._l((_vm.taskList),function(task){return _c('div',{key:task.txid,staticClass:"th-onelist"},[_c('div',[_c('div',{staticClass:"th-type"},[_c('div',{staticClass:"th-typename"},[_vm._v(_vm._s(_vm.$t('operation.transfer')))]),_vm._v(" "),_vm._m(0,true,false)]),_vm._v(" "),_c('div',{staticClass:"th-block-txid"},[_c('span',{staticClass:"th-txid",staticStyle:{"padding-right":"10px"}},[_vm._v("\n                      "+_vm._s(_vm.$t('operation.txid'))+"\n                      "),_c('a',{staticClass:"green-text",attrs:{"target":"_blank"}},[_vm._v(_vm._s(task.simpleTxid))])]),_vm._v(" "),_vm._m(1,true,false)])]),_vm._v(" "),(task.state==1)?_c('div',{staticClass:"btn-right"},[_c('v-btn',[_vm._v("test")])],1):_vm._e()])})),_vm._v(" "),(_vm.taskList.length == 0)?_c('div',{staticClass:"notask"},[_vm._v(_vm._s(_vm.$t('operation.nodata')))]):_vm._e()])]):_vm._e()])])]),_vm._v(" "),_c('v-toast',{ref:"toast"})],1)}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"th-other"},[_c('div',{staticClass:"th-number"},[_c('span',[_vm._v("test")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"th-state"},[_c('span',[_vm._v("状态：")]),_vm._v(" "),_c('span',{staticClass:"green-text"},[_vm._v("成功")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_taskbar = (esExports);
// CONCATENATED MODULE: ./src/layouts/taskbar.vue
function injectStyle (ssrContext) {
  __webpack_require__("A4Hv")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-016ac0bb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  taskbar_default.a,
  layouts_taskbar,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_layouts_taskbar = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "dqMZ":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAflBMVEUAAAAbduUbd+Ucd+UcduYcd+UbducceecfeOoffOgbd+YcduYbduYbduX////5/P72+v5Mk+tFj+plo+0pf+by9/1Sl+s4h+gje+bh7fva6frK3/nA2fiwz/aix/SAs/BAjeno8fzX5/qz0fapy/Wcw/N/svBzq+9bnOwzhOfJk/7vAAAADXRSTlMA2ezHvoFUPzEh8/ryKD27+QAAAOtJREFUKM+Fk+mSwiAQhEEhkrg0IYdZb3e93/8FLRWGI1X6/QlDFzMD02GEkoJXFRdSsZyCa4IXiVROdcK0DNpsojMmM9LmesTcqSWd+21sR2ffmX294WgArK2v++rTBW2N/91pCdO4jWfP3KVc9u3zs8HG34gx5Yvc3ycser+jmNQpA4xfSiYycY+1XwpXkljUtdVUtMo0c6OgSsWmN22IftK0K1yjiCcNLbDSESK5SottLEqmoqhrhlhU9HxjuHt4h93tI7GIR6a7GrgEq6TDPgA4h2FnNtni70A2GRmsCwb7ZM3vpv74OzwAZ0kg+dZauW8AAAAASUVORK5CYII="

/***/ }),

/***/ "fgqV":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAWtJREFUWAntWFsOwjAMG5wGzs9xgG+4xXAmKpXQhaTxBggqRVNXx/b6WtVh+Jdf7IFxHDdrf/ec5lYbAfCAd0c8d7ptqfpdSzRFe74AsEGcEFIuiP08mtMiGogrQopo26MHwA4h5qQsahL8Yq7W8o1aI5Hek2mNNIExA2jcNKLKLJ2TScjkqr55GBjEDI4HU7qSEcjkah9mXQnJ3vVydd9zyj636LY1mVeCpskI1uyZaKNH2IOJ6obwlgGrLSSSBbeMtN5ldVL5DUNlQZjzMyUaTVYmUZ1OJy9XuEfn6TzoSfoqjOo9GdbPGeKGOTnf1QfQ981Dy4jVtsr08BjwYBYxGxGOYClmewR7crrMZoQyuS6zDAEGR9Msk5jJNZmlE4KVxkkjaoxLmjtN0DClX3VrdCdqB456WAsJcnl0RkhZ5T8Knfrf7bo8OiBJgJTznKMjy8IRTfv6rZABaF+BFSDx+Q5Nov0/VX8P3ADlEi1to8Kl3wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "gAj9":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = __webpack_require__("XDGF");
var MarkUtxo = /** @class */ (function () {
    function MarkUtxo(txid, n) {
        this.txid = txid;
        this.n = n;
    }
    /**
     * 塞入标记
     * @param utxos 标记
     */
    MarkUtxo.setMark = function (utxos) {
        var session = this.getMark();
        // tslint:disable-next-line:prefer-for-of
        for (var index = 0; index < utxos.length; index++) {
            var utxo = utxos[index];
            if (session[utxo.txid]) {
                session[utxo.txid].push(utxo.n);
            }
            else {
                session[utxo.txid] = new Array();
                session[utxo.txid].push(utxo.n);
            }
        }
        sessionStorage.setItem(config_1.TABLE_CONFIG.utxoMark, JSON.stringify(session));
    };
    /**
     * getMark 获得被标记的utxo
     */
    MarkUtxo.getMark = function () {
        var sessionstr = sessionStorage.getItem(config_1.TABLE_CONFIG.utxoMark);
        var markutxo = sessionstr ? JSON.parse(sessionstr) : {};
        return markutxo;
    };
    return MarkUtxo;
}());
exports.MarkUtxo = MarkUtxo;
var Utxo = /** @class */ (function () {
    function Utxo() {
    }
    return Utxo;
}());
exports.Utxo = Utxo;


/***/ }),

/***/ "giXj":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "l7Tq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/layouts/Main.vue
var Main = __webpack_require__("Gc41");
var Main_default = /*#__PURE__*/__webpack_require__.n(Main);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-7a9b6dd4","hasScoped":false,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/layouts/Main.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('nav',{staticClass:"main navbar navbar-nel navbar-fixed-top"},[_c('div',{staticClass:"navbar-header"},[_c('button',{staticClass:"navbar-toggle collapsed",attrs:{"type":"button","data-toggle":"collapse","data-target":"#navbar","aria-expanded":"false","aria-controls":"navbar"}},[_c('span',{staticClass:"sr-only"},[_vm._v(_vm._s(_vm.$t('navbar.toggle')))]),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"}),_vm._v(" "),_c('span',{staticClass:"icon-bar"})])]),_vm._v(" "),_c('div',{staticClass:"navbar-collapse collapse",attrs:{"id":"navbar"}},[_c('div',{staticClass:"logo"}),_vm._v(" "),_c('ul',{staticClass:"nav navbar-nav navbar-left"},[_c('li',[_c('router-link',{attrs:{"to":"deploy"}},[_vm._v("合约部署")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"invoke"}},[_vm._v("调用合约")])],1),_vm._v(" "),_c('li',[_c('router-link',{attrs:{"to":"debug"}},[_vm._v("合约调试")])],1),_vm._v(" "),_vm._m(0,false,false),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"https://scan.nel.group/test","target":"_blank"}},[_vm._v(_vm._s(_vm.$t('navbar.explorer')))])])]),_vm._v(" "),_c('ul',{staticClass:"nav navbar-nav navbar-right"},[_c('li',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown","role":"button","aria-haspopup":"true","aria-expanded":"false"}},[_c('span',{staticClass:"text",attrs:{"id":"network"}},[_vm._v(_vm._s(_vm.$t('navbar.testnet')))]),_vm._v(" "),_c('span',{staticClass:"caret"})]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-nel"},[_c('li',{staticClass:"active",attrs:{"id":"testnet-btn"}},[_c('a',{attrs:{"id":"testa"}},[_vm._v(_vm._s(_vm.$t('navbar.testnet')))])]),_vm._v(" "),_c('li',{attrs:{"id":"mainnet-btn"}},[_c('a',{attrs:{"target":"_blank","href":"https://wallet.nel.group","id":"maina"}},[_vm._v(_vm._s(_vm.$t('navbar.mainnet')))])])])]),_vm._v(" "),(_vm.loginshow)?_c('li',[_c('router-link',{attrs:{"to":"login"}},[_vm._v(_vm._s(_vm.$t('navbar.logout')))])],1):_vm._e()]),_vm._v(" "),_c('ul',{staticClass:"nav navbar-nav navbar-right"},[_c('li',{staticClass:"dropdown"},[_c('a',{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown","role":"button","aria-haspopup":"true","aria-expanded":"false"}},[_c('span',{staticClass:"text"},[_vm._v(_vm._s(_vm.currentLanguage))]),_vm._v(" "),_c('span',{staticClass:"caret"})]),_vm._v(" "),_c('ul',{staticClass:"dropdown-menu dropdown-nel"},[_c('li',{class:_vm.currentLanguage=='English'?'active':'',attrs:{"id":"testnet-btn"}},[_c('a',{on:{"click":function($event){_vm.cutLanguage(1)}}},[_vm._v("English")])]),_vm._v(" "),_c('li',{class:_vm.currentLanguage!='English'?'active':'',attrs:{"id":"mainnet-btn"}},[_c('a',{on:{"click":function($event){_vm.cutLanguage(2)}}},[_vm._v("中文")])])])])])])]),_vm._v(" "),_c('div',{staticClass:"main-content"},[_vm._t("default")],2)])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('li',[_c('a',{attrs:{"href":"https://bbs.neldev.net/","target":"_blank"}},[_vm._v("NEL开发者论坛")])])}]
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var layouts_Main = (esExports);
// CONCATENATED MODULE: ./src/layouts/Main.vue
function injectStyle (ssrContext) {
  __webpack_require__("K8oD")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Main_default.a,
  layouts_Main,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_layouts_Main = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "lJF1":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABuRJREFUaAXdW32IVFUUv+fO566uoOk/oW0Q+RVpYUIGyUKEf1Raiwl9ic6uG/jxh1mgmbEYkWTSH8qC686sSBGoaKUVJsFikAlJaVF+gkb0h0ZSurvzsfNOv/vWN3N35s3Mzs7c50z3n3veufeec3733HvfuffdR8JQ4o6OyUkr1WKxmEssZgri6SxoEgnRJJjHQ22ciW6h7F/QVwXRBdQ5L1l+H1i06DQtW5Y2YRr0Vy/FOzru43RqOQleLACUhRiTfDRCJ9AJKelAIBg+RF1dt6pl5ZgM0pUzMyVXRRbDkxvgucf1smrQRDTALA5KkttD0egvlcqsCHA8ElksBG9lwXMrNaRUexiKGUFHpJ/eDu6OnSlVv1D5mABzW1tzgq1dAPp0IcGm+DA4LaToCsngFuru/qdcPWUDTrSvXMoW78X8HFeusqrWJ/rT5xOtwe7eU+XIleVUBtjNALv/joNVRjPfbQ1xH2x6uRwMo/Iwr1sXig/ejApLvFSOcK/qYmF7PzSteRN1dlqldJYEzOtWTokPiM/QowtKCbuT5UTiixDLFygWu1nMjqJDmjs7g/UAVgHEq+upBFmfwOaimIoWJn6/0lXrntW9aYP+48o2nZdLFxzS8baVaxFU7MxtUA/PiNBeCfX0fuRmqyvgwfb2FuL0cQD2uzWqdR5AxRGgtLi9svIA85o1d8UHB37DrJhS68CK2of3dNgXmJ0bnOTN4US8/726B6t6Au/phJV8J7dTRng4GYk8YhGfwlDO64jchvXwDHBpGZDz9Nh7xBy11EbAMFg5a5bwP/uc3V9Dhw8L6xxmj6GEiNCHaGwrxC9xVGQ8nFy16qF0OvWjU2AkDwZFaMeHghobbfE8MCASG9YLkUwaUaeEAiDOGXxznK1lZuimOfW6Ma23BdOkSRmwtjEArngmkzqEsNh6w9FhA+ZIpIks0eowjeVDQ/mi3Xj5tSriIOxcyqtXq2Ml7CyRUsSt6IkGRZtM7DJ03XjVtgHrUmMqGbcdagPGYvV8tZW4ykul8tkunZBfqXKOZQ1jlLx/vw/DfGHlIkchwQ2cWyeMQlT5VXihwipTx47Ng8ubyhcwhhbptGAru2W1afC8SJiyExRWaYm0t/vcRCKLT6ezXGOURdajmMNyujENboL1IazTbnWrzWOaAcDWjGrLLSZPX5V1ulib6pVZCjA1V0/gKCTpC5dOj6JpxVWY7pGYzN4sWI61OkiddsoN5kxigkSs6S3glBY367RBoI5ohVVi3xhyGF7k+rzVaS90K6wq0ur3RJmjRB/GOu2Um8zxeVZi74RPkx6mpBZe6rQHJmC9uok5zH97oCujgpPZwEOnMxUMEgor5jC+vHuZBgez2nQ6yzVHASuGtDhnTkO+5PTp03Y8reJoRXuZFFY/XHw2G86bV8+XLorkNhyMqrOXS5fMK9Q0YP6e8QcbqS/Rj/2SbYJWapDky94CVVBU/wZloE/Szt7reDxrEF9tiIZ3cSj/l31Mi7F9RN268cSyiROF/4knbVVD3xwX4sYNT9TigsjnSpENmPy8j1PiLeOa/X4R3PimkJMn26rk/PkiuXmTEF4c5PkC+5RSFWmJ8O69FzGsv1O0yURTp2bAKj0KuOIZT0Tfhru7L9s6HWVS8g6HNpXztWuCtXevohXPdMLqnMGGxWs4YZ0mXBD5Gcv1Aw7PRC5nap9aPjX7qUXZT4LOhKKxh3EPBC8ie7VW2XBSV5JwnHnAef4/5CTkknAsZi9YCk/Gww44fPn/Gt4eXkYdZp3m8O7RcKz3Gd18e9HSGcLPa+D+bIQ/orB+HuDJ/hDJtbkW5wFWK7Yk6sitWE/PKqoiSSsoGr2aa3ceYFUh2BPbR1Jsz61cL88AuwWXWg662esKWFUMTb13o7rs5daopnlSfAyw7xaysSBgdY0v1Nj0Iib+r4Ua1xyf6GS4oamtmF15q3Ru5dtXhb/EVeHZuWU19azANoolw5uhwpYV9LDTRE380LjxC2p5eMNr0fC05pZSYBWmkh52gKs7jAlc62NLZK4POGV3Ksfrcwi614ejvbtGa8OoATsCk+2R5RZzN4ITT8+zHf3ZnK4L6VvW0NPTl+WVpkoO6VwR6pWF4ORB9C42s94n6LUwvfaEGxpnlQtWWVu2h3WIKvaGpztNbzgcnXhjfCUFfvKIxX5weOXmFQFWytQuK9nW1op7Iq/h6bFyDShVHwYO4l7gIR8FPgju2fNTqfqlyisGrCuIv7rifh6i5diIIWDnOWM9GMSwxa12PgFvHggwHSp1y123oRRdVcC6MvXrQHKAWyxBc0b8isc8AfXG4R+khPr0AQMUuKs4/ziPj/MXpPCdNPkr3n+RGniwgZPl9gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "lXdV":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_property_decorator_1 = __webpack_require__("EOM2");
// import { LoginInfo } from "../tools/entity";
var Hint = /** @class */ (function (_super) {
    __extends(Hint, _super);
    //   @Prop({ default: true })
    function Hint() {
        return _super.call(this) || this;
    }
    Hint = __decorate([
        vue_property_decorator_1.Component({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Hint);
    return Hint;
}(vue_1.default));
exports.default = Hint;


/***/ }),

/***/ "olDd":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "p9Y5":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "pKg8":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    language: {
        name: 'English'
    },
    navbar: {
        explorer: 'Explorer',
        wallet: 'Wallet',
        mainnet: 'MainNet',
        testnet: "TestNet",
        logout: "logout",
        blockheight: "Block Height",
        toggle: "Toggle navigation"
    },
    btn: {
        confirm: "Confirm",
        confirming: "Confirming",
        reset: "Reset",
        close: "Close",
        transfer: "Transfer",
        switch: "Switch",
        claim: "Claim",
        claiming: "Claiming",
        cancel: "Cancel",
        openauction: "Start Auction",
        openingauction: "Opening Auction",
        bid: "Place bid",
        getdomain: "Claim domain",
        recoversgas: "Reclaim CGAS",
        gettingdomain: "Claiming domain",
        recoveringsgas: "Reclaiming CGAS",
        receivedsgas: "Reclaimed",
        receivednns: "Claimed",
        newbid: "Join Auction",
        viewmore: "View more",
        edit: "Edit",
        renewal: "Renew",
        renewaling: "Renewing",
        setOwner: "Set owner",
        settingOwner: "Setting owner",
        exchange: "Exchange",
        exchanging: "Exchanging",
        withdraw: "Withdraw",
        topup: "Top up",
        getGas: "Request Gas",
        gettingGas: "Requesting Gas"
    },
    toast: {
        msg1: "Loading ...",
        msg2: "Authentication passed...",
        msg3: "Login failed. Please check your password or file",
        msg4: "Please enter the correct string"
    },
    login: {
        login: "Login",
        title: "Login your wallet",
        selectplaceholder: "Select keystore file.",
        selectbtn: "Select",
        passwordholder: "Enter password.",
        loginbtn: "Login",
        cutlinemsg: "or you can",
        wifmsg: "Import key from WIF String",
        nep2msg: "Import key from Nep2 String"
    },
    wif: {
        title: "WIF Private Key",
        wifplaceholder: "Enter your private key.",
        back: "Back"
    },
    nep2: {
        title: "Nep2",
        placeholder: "Enter your Nep2.",
        password: "Enter password."
    },
    generate: {
        generate: "Generate",
        title: "Generate a new wallet",
        name: "Name your wallet",
        password: "Enter password",
        passwordagain: "Confirm password",
        nameempty: "Wallet name cannot be empty.",
        namepass: "Verification pass.",
        pwderrmsg1: "Please enter a password of at least eight characters",
        pwderrmsg2: "Use at least one character and one number",
        pwderrmsg3: "Please enter the same password as above.",
        createmsg: "Your keystore file has been created.",
        downloadmsg: "You can click the ‘download’ button to save your keystore file!",
        download: "Download",
        msg: "Do not lose it!",
        msg2: "It can’t be reclaimed if you lose it."
    },
    balance: {
        balance: "Balance",
        title1: "NEO Balance",
        title2: "Key Address",
        title3: "GAS available to claim",
        title4: "Asset",
        title5: "Choose address",
        title6: "Select Nep6 File",
        msg1: "Sending NEO to account address…",
        msg2: "Waiting for confirmation of transfer…",
        msg3: "Claiming GAS…",
        msg4: "Your GAS claim is successful!",
        tips: "You can click this button to request 10 GAS. It can only be clicked once in 24 hours. ",
        errmsg1: "Operation failed! And You can try it again later!",
        errmsg2: "Insufficient inventory! And You can try it again later!",
        errmsg3: "Data exception！And You can try it again later!",
        successmsg: "Successful operation！Please wait for a moment."
    },
    transfer: {
        transfer: "Transfer",
        title1: "Asset",
        title2: "Address",
        title3: "Amount",
        title4: "History",
        msg1: "Your address is incorrect.",
        send: "Send",
        from: "from",
        to: "to",
        details: "Details",
        placeholder: "Please enter an address or domain name",
        msg2: "Your transaction has been sent, please check it later",
        msg3: "Transaction failure",
        msg4: "-_-!!!You don't have enough change, you have to wait for the block height to change before you can make the next transaction.",
        msg5: "available",
        waiting: "Waiting for transaction confirmation",
        errdomain: "This domain hasn't been mapped to any address",
        timeMsg: "Expiry date: ",
        netfee: "Network fee",
        sysfee: "System fee"
    },
    nns: {
        nns: "NNS",
        title1: "Register Neo Name",
        placeholder1: "enter a name",
        register: "Register",
        title2: "My Neo Name",
        msg1: "The testing has ended. Thanks for your participation. ",
        msg2: 'You will be rewarded with 50 NNCs on Mainnet for the first time you map your wallet address to an ending in ".test"  name successfully.',
        msg3: "Register your domain name and collect the reward.",
        err1: "The domain name has been registered.",
        text1: "Address resolver",
        text2: "Address mapping",
        text3: "Expiration Time",
        text4: "Expiration",
        waiting: "Try to refresh the page after the NEO block height is updated.",
        edit: "Edit",
        alerttitle: "Edit information",
        alerttitle1: "Neo Name",
        alerttitle2: "Adrress Resolver",
        alerttitle3: "Adrress Mapping",
        alertmessage1: "It is the official address resolver , you have to confirm this address resolver first to map your address.",
        alertmessage2: "Please enter the correct format of the address.",
    },
    setting: {
        settings: "Settings",
        title1: "My Wallet Address",
        title2: "My WIF",
        title3: "My Wallet file",
        msg1: "This information is very important . It may cause your loss if you lose it . ",
        msg2: "Save your keystore file and make copies of your wallet address and your WIF . Don't lose them .",
        msg3: "Set the password ",
        msg4: "Enter your password",
        msg5: "Create a wallet",
        btn1: "Visible",
        btn2: "Create",
        btn3: "download"
    },
    nnsneo: {
        auction: "Neo Name Auction",
        myneoname: "Domain Management",
        bonus: "Bonus",
        tutorial: "Tutorial"
    },
    auction: {
        title1: "Neo Name Auction",
        title2: "My Auction",
        title3: "Auction Information",
        title4: "Raise my bid",
        title5: "Timeline",
        title6: "Claim domain",
        title7: "Reclaim CGAS",
        entername: "type a name",
        checkavailable: "This name is available.",
        checkbeing: 'This domain is currently under auction. Click "Join Auction" to bid for it.',
        checkformat: "Domain names must be English characters or numbers, and can only be 6 to 32 characters in length",
        checkbuyer: "This name is unavailable.",
        sendingmsg: "We are currently opening the auction. Please wait.",
        searchmsg: "Search by domain",
        status: "Status",
        lastauctionprice: "Highest bid price",
        currentbidder: "Current bidder",
        opentime: "Bid openting time",
        fixedperiod: "Auction period",
        randomperiod: "Overtime bidding",
        ended: "Ended",
        me: "Me",
        other: "Other people",
        buyer: "Buyer",
        hammerprice: "Hammer price",
        acutiontitle: "Auction",
        domain: "Domain",
        highest: "Highest bid price",
        raisebid: "Raise my bid",
        enterbid: "Enter a raise",
        yourbidmsg: "Your cumulative bid",
        mybidmsg: "My cumulative bid ",
        mywillbid: "My cumulative bid will be",
        price: "Price: ",
        tips1: "Tip: The minimum bid increment is 0.1 CGAS. If your bid is lower than the current highest bid, your raise will be unsuccessful.",
        isAvailable: "is available",
        errmsg5: "Only",
        errmsg1: "Only",
        errmsg2: "CGAS is available.",
        errmsg4: "Please enter the right format.",
        errmsg6: "Your bid raise must not be less than 10% of the current highest bid price",
        nobalance: "You have insufficient CGAS left in your auction account. Please top it up.",
        goback: "Go back",
        waitmsg1: "Waiting for confirmation",
        waitmsg2: "Your raise will be confirmed after a new block is generated. Please wait.",
        getdomaintips: "Tip: After successfully claiming your domain, you can modify its settings in Domain Management.",
        waitgetdomain: "Your operation will be confirmed after the new block is generated. Please wait patiently...",
        fee: "Fee",
        remainingsgas: "Remaining CGAS",
        timetips1: "Tips : If nobody bids on the last day of the auction period, the auction period end time will be the end of the auction.",
        timetips2: "Tip: Once the auction moves into the overtime bidding, it may end at any time",
        timetips3: "Tips : The auction may end at any point during the overtime bidding, so it’s better to bid as early as possible.",
        bidstarttimemsg: "Bid start time",
        endtimemsg: "Auction period end time",
        randomtimemsg: "Overtime bidding start time",
        maxtimemsg: "Maximum end time of overtime bidding",
        tipsmsg1: "Tips: Before participating in an auction, you need to know the following:",
        tipsmsg2: "The asset used for auctions is CGAS. You will need CGAS in your Auction Account to place a bid.",
        tipsmsg3: 'GAS can be exchanged for CGAS at the rate of 1:1 using the CGAS Exchange page. Once you have CGAS in your wallet, you can use top-up function below to deposit CGAS into your Auction Account.',
        titleaccount: "Your Auction Account",
        withdraw: "Withdraw",
        topup: "Top up",
        from: "From: ",
        to: "To",
        topupamount: "Amount",
        withdrawamount: "Amount",
        amount: "Amount",
        asset: "Asset",
        errmsg3: "is available.",
        tipsmsg4: "Tips: When you are using Gas to recharge, before being recharged into your Auction Account, GAS will be automatically switched to CGAS. The entire process takes two blocks of confirmation time. Please wait patiently. ",
        yourbalance: "Your Balance",
        waiting: "Waiting",
        successwithdraw: "Your withdrawal request has been successfully submitted.",
        successwithdraw2: "CGAS will be refunded to your address in the next block !",
        successtop: "Successesfully toped up",
        successtopup: "Your top-up request has been successfully submitted. ",
        successtopup2: " CGAS will be in your auction account after 2 blocks are confirmed !",
        successtopup3: " CGAS will be deposited into your Auction Account in the next block.",
        failtopup: "Top up failed ! And your Gas has been exchanged into CGAS",
        fail: "Operation failed !",
        auctionopen: "Auction Opened",
        domainname: "Domain name",
        successbid: "Raise succesful!",
        failbid: "Raise failed!",
        failbid2: "Its auction has ended. Your raise is not executed.",
        successbid1: "Your bid of ",
        successbid2: " CGAS has been sent to the blockchain for confirmation.",
        successgetdomain: "Domain acquired",
        failgetdomain: "Please click again to acquire domain",
        tips: "Tips: ",
        statustips: "The auction period is the first stage of the auction and its duration is 3 days, during which all bids are valid. An overtime bidding of up to 2 days will be triggered when someone bids on the last day of the auction period. Otherwise the auction ends at the end of the auction period.",
        statustips2: "The overtime bidding is the second stage of the auction. Its maximum duration is 2 days. During this period, any bid may trigger the end of the bidding of this domain and the bid will be invalid. The latter one bids, the more likely it triggers the end of the bidding. So it's advised to place a bid as early as possible to avoid missing this domain. ",
        teststatustips: "The auction period is the first stage of the auction and its duration is 15 minutes, during which all bids are valid. An overtime bidding of up to 10 minutes will be triggered when someone bids on the last day of the auction period. Otherwise the auction ends at the end of the auction period.",
        teststatustips2: "The overtime bidding is the second stage of the auction. Its maximum duration is 10 minutes. During this period, any bid may trigger the end of the bidding of this domain and the bid will be invalid. The latter one bids, the more likely it triggers the end of the bidding. So it's advised to place a bid as early as possible to avoid missing this domain.",
        toptips: "Tips: When the system prompts you have successfully submited your CGAS top up transaction. It will be confirmed and added to your Auction Account in the next block. Please be patient.",
        withdrawtips: "Tips: When the system prompts you have successfully submited your CGAS withdrawal transaction. It will be confirmed and added to your wallet in the next block. Please be patient.",
        getall: "Max",
        nodata: "No related data was found."
    },
    exchange: {
        title: "CGAS Exchange",
        tosgas: "Exchange Gas for CGAS",
        togas: "Exchange CGAS for Gas",
        tips: "Tips：CGAS is a NEP5 token，which is bound with NEO’s GAS at the ratio of 1:1 and they can be converted with each other freely. The exchange needs to be confirmed after one block. Please be patient. ",
        spend: "Amount you will spend : ",
        receive: "Amount you will receive : ",
        warnmsg: "Insufficient balance.",
        waittitle: "Waiting for transaction records",
        balance: "Balance",
        amount: "Amount"
    },
    myneoname: {
        title: "My Neo Name",
        resolver: "Address Resolver",
        mapping: "Address Mapping",
        time: "Expiration Time",
        expiring: "Expiring soon",
        edittitle: "Edit information",
        neoname: "Neo Name",
        owner: "Owner Address",
        notconfigure: "not configured",
        expired: "Expired",
        tips: "Tips : Address mapping can only be performed after the address resolver is confirmed by you. "
    },
    bonus: {
        title: "Bouns History",
        mydividend: "My dividends: ",
        distribution: "Distribution pool snapshot: ",
        mytotal: "My total NNC holdings: ",
        snapshot: "Snapshot time:"
    },
    tutorial: {},
    operation: {
        welcome: "Welcome!",
        title: "Operation record",
        tips: "These records will be erased when you log out or close the page.",
        waiting: "Confirmation pending...",
        txid: "TXID:",
        transfer: "Transfer to",
        openauction: "Start Auction",
        raisebid: "Raise bid",
        exchange: "CGAS exchange",
        topup: "Top up",
        withdraw: "Withdraw",
        requestgas: "Request Gas",
        editdomain: "Edit domain",
        addrmapping: "Address mapping:",
        addrresolver: "Address resolver:",
        renew: "Renewal expiration time",
        getdomain: "Claim domain",
        recover: "Reclaim CGAS",
        gasclaim: "Gas claim",
        nodata: "There is no data",
        fail: "Operation failed",
        waitinggas: "Waiting for system confirmation",
        sentok: "System sent"
    },
    notify: {
        utxo: "Your UTXO is too scattered, which may cause the CGAS conversion to fail (GAS will also be lost). Please transfer some GAS( the amount shall be no less than your conversion amount) to your own address first and then convert GAS into CGAS after the transfer operation is confirmed.",
        fee: "Note: When there is enough GAS in your wallet, we will automatically add a fee to ensure your operation will be confirmed fast. "
    }
};


/***/ }),

/***/ "pLPz":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var importpack_1 = __webpack_require__("VKSY");
var entity_1 = __webpack_require__("6nHw");
var CoinTool = /** @class */ (function () {
    function CoinTool() {
    }
    /**
     * @method 初始化资产
     */
    CoinTool.initAllAsset = function () {
        return __awaiter(this, void 0, void 0, function () {
            var allassets, a, asset, names, id, name, i;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.api_getAllAssets()];
                    case 1:
                        allassets = _a.sent();
                        for (a in allassets) {
                            asset = allassets[a];
                            names = asset.name;
                            id = asset.id;
                            name = "";
                            if (id == CoinTool.id_GAS) {
                                name = "GAS";
                            }
                            else if (id == CoinTool.id_NEO) {
                                name = "NEO";
                            }
                            else if (id == CoinTool.id_SGAS.toString()) {
                                name = "CGAS";
                            }
                            else {
                                for (i in names) {
                                    name = names[i].name;
                                    if (names[i].lang == "en")
                                        break;
                                }
                            }
                            CoinTool.assetID2name[id] = name;
                            CoinTool.name2assetID[name] = id;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @method 获得可用的utxo
     * @returns 筛选排序后的utxo
     */
    CoinTool.getassets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var height, utxos, olds, olds2, n, old, findutxo, i_1, utxo, assets, i, item, asset, utxo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.api_getHeight()];
                    case 1:
                        height = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_getUTXO(importpack_1.tools.storagetool.getStorage("current-address"))];
                    case 2:
                        utxos = _a.sent();
                        olds = entity_1.OldUTXO.getOldutxos();
                        olds2 = new Array();
                        for (n = 0; n < olds.length; n++) {
                            old = olds[n];
                            findutxo = false;
                            for (i_1 = 0; i_1 < utxos.length; i_1++) {
                                utxo = utxos[i_1];
                                if (utxo.txid == old.txid) {
                                    console.log(old);
                                    console.log(utxo);
                                    console.log(height - old.height);
                                }
                                if (utxo.txid == old.txid && old.n == utxo.n && height - old.height < 3) {
                                    findutxo = true;
                                    utxos.splice(i_1, 1);
                                }
                            }
                            if (findutxo) {
                                olds2.push(old);
                            }
                        }
                        entity_1.OldUTXO.setOldutxos(olds2);
                        assets = {};
                        for (i in utxos) {
                            item = utxos[i];
                            asset = item.asset;
                            if (assets[asset] == undefined || assets[asset] == null) {
                                assets[asset] = [];
                            }
                            utxo = new entity_1.UTXO();
                            utxo.addr = item.addr;
                            utxo.asset = item.asset;
                            utxo.n = item.n;
                            utxo.txid = item.txid;
                            utxo.count = Neo.Fixed8.parse(item.value);
                            assets[asset].push(utxo);
                        }
                        // }
                        return [2 /*return*/, assets];
                }
            });
        });
    };
    /**
     * @method 创建交易对象 ThinNeo.Transaction
     * @param utxos utxo列表
     * @param targetaddr 对方地址
     * @param assetid 资产id
     * @param sendcount 金额
     */
    CoinTool.makeTran = function (utxos, targetaddr, assetid, sendcount) {
        var res = new entity_1.Result();
        var us = utxos[assetid];
        var gasutxos = utxos[importpack_1.tools.coinTool.id_GAS];
        if (us == undefined) {
            throw new Error("no enough money.");
        }
        var tran = new ThinNeo.Transaction();
        tran.type = ThinNeo.TransactionType.ContractTransaction;
        tran.version = 0; //0 or 1
        tran.extdata = null;
        tran.attributes = [];
        utxos[assetid].sort(function (a, b) {
            return b.count.compareTo(a.count);
        });
        var old = [];
        tran.outputs = [];
        tran.inputs = [];
        var fee = Neo.Fixed8.parse('0.00000001');
        var sumcount = Neo.Fixed8.Zero; //初始化
        for (var i = 0; i < gasutxos.length; i++) {
            sumcount.add(gasutxos[i].count);
        }
        if (importpack_1.tools.coinTool.id_GAS == assetid) {
            // let addcount = sendcount.add(fee);
            var tranRes = this.creatInuptAndOutup(gasutxos, sendcount, targetaddr);
            tran.inputs = tranRes.inputs;
            tran.outputs = tranRes.outputs;
            if (tran.outputs && tran.outputs.length > 1) {
                tran.outputs[1].value = tran.outputs[1].value.subtract(fee);
            }
        }
        else {
            // 创建 fee的输入输出
            var feeRes = this.creatInuptAndOutup(gasutxos, fee);
            tran.inputs = tran.inputs.concat(feeRes.inputs);
            tran.outputs = tran.outputs.concat(feeRes.outputs);
            //构造原本想要交易的输入输出
            var tranRes = this.creatInuptAndOutup(us, sendcount, targetaddr);
            tran.inputs = tran.inputs.concat(tranRes.inputs);
            tran.outputs = tran.outputs.concat(tranRes.outputs);
        }
        if (tran.witnesses == null)
            tran.witnesses = [];
        for (var i in tran.inputs) {
            var input = tran.inputs[i];
            old.push(new entity_1.OldUTXO(input.hash.reverse().toHexString(), input.index));
        }
        res.err = false;
        res.info = { "tran": tran, "oldarr": old };
        return res;
    };
    /**
     * 创建一个交易中的输入和输出
     * @param utxos 资产的utxo
     * @param sendcount 输出总数
     * @param target 对方地址
     * @returns res:{ inputs: ThinNeo.TransactionInput[], outputs: ThinNeo.TransactionOutput[] }
     */
    CoinTool.creatInuptAndOutup = function (utxos, sendcount, target) {
        var count = Neo.Fixed8.Zero;
        var res = {};
        res["inputs"] = [];
        res["outputs"] = [];
        res["oldutxo"] = [];
        var scraddr = "";
        var assetId;
        for (var i = 0; i < utxos.length; i++) {
            var input = new ThinNeo.TransactionInput();
            input.hash = utxos[i].txid.hexToBytes();
            input.index = utxos[i].n;
            input["_addr"] = utxos[i].addr; //利用js的隨意性，臨時傳個值
            res.inputs.push(input); //将utxo塞入input
            count = count.add(utxos[i].count); //添加至count中
            scraddr = utxos[i].addr;
            assetId = utxos[i].asset.hexToBytes().reverse();
            var old = new entity_1.OldUTXO(utxos[i].txid, utxos[i].n);
            res.oldutxo.push(old);
            if (count.compareTo(sendcount) > 0) {
                break; //如果足够则跳出循环
            }
        }
        if (count.compareTo(sendcount) >= 0) {
            //输出
            if (target) {
                if (sendcount.compareTo(Neo.Fixed8.Zero) > 0) {
                    var output = new ThinNeo.TransactionOutput();
                    output.assetId = assetId;
                    output.value = sendcount;
                    output.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(target);
                    res.outputs.push(output);
                }
            }
            var change = count.subtract(sendcount); //应该找零的值
            if (change.compareTo(Neo.Fixed8.Zero) > 0) {
                var outputchange = new ThinNeo.TransactionOutput();
                outputchange.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(scraddr);
                outputchange.value = change;
                outputchange.assetId = assetId;
                res.outputs.push(outputchange);
            }
            return res;
        }
        else {
            throw "You don't have enough utxo;";
        }
    };
    /**
     * 构造并发送交易
     * @param {ThinNeo.Transaction} tran
     * @param {string} randomStr
     */
    CoinTool.signData = function (tran) {
        return __awaiter(this, void 0, void 0, function () {
            var current, addr, msg, pubkey, prekey, signdata, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, entity_1.LoginInfo.deblocking()];
                    case 1:
                        current = _a.sent();
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        msg = tran.GetMessage().clone();
                        pubkey = current.pubkey.clone();
                        prekey = current.prikey.clone();
                        signdata = ThinNeo.Helper.Sign(msg, prekey);
                        tran.AddWitness(signdata, pubkey, addr);
                        data = tran.GetRawData();
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw "Signature interrupt";
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * utxo转账方法
     * @param targetaddr 转入的地址
     * @param asset 资产
     * @param count 金额
     */
    CoinTool.rawTransaction = function (targetaddr, asset, count) {
        return __awaiter(this, void 0, void 0, function () {
            var arr, add, n, _count, utxos, tranres, tran, txid, data, res, height, result, olds, error_2, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        arr = importpack_1.tools.storagetool.getLoginArr();
                        add = importpack_1.tools.storagetool.getStorage("current-address");
                        n = arr.findIndex(function (login) { return login.address == add; });
                        _count = Neo.Fixed8.parse(count + "");
                        return [4 /*yield*/, CoinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 9, , 10]);
                        tranres = CoinTool.makeTran(utxos, targetaddr, asset, _count);
                        tran = tranres.info['tran'];
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        txid = tran.GetHash().clone().reverse().toHexString();
                        data = void 0;
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 7, , 8]);
                        return [4 /*yield*/, this.signData(tran)];
                    case 4:
                        data = _a.sent();
                        res = new entity_1.Result();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_getHeight()];
                    case 5:
                        height = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 6:
                        result = _a.sent();
                        if (result["sendrawtransactionresult"]) {
                            res.err = !result;
                            res.info = result['txid'];
                            olds = tranres.info['oldarr'];
                            olds.map(function (old) { return old.height = height; });
                            entity_1.OldUTXO.oldutxosPush(olds);
                        }
                        return [2 /*return*/, res];
                    case 7:
                        error_2 = _a.sent();
                        console.log(error_2);
                        throw error_2;
                    case 8: return [3 /*break*/, 10];
                    case 9:
                        error_3 = _a.sent();
                        console.log("error  input");
                        throw error_3;
                    case 10: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 从api中得到claim的交易体发送 Claim交易
     */
    CoinTool.claimgas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var claimtxhex, tran, buf, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.api_getclaimtxhex(entity_1.LoginInfo.getCurrentAddress())];
                    case 1:
                        claimtxhex = _a.sent();
                        tran = new ThinNeo.Transaction();
                        buf = claimtxhex.hexToBytes();
                        tran.Deserialize(new Neo.IO.BinaryReader(new Neo.IO.MemoryStream(buf.buffer, 0, buf.byteLength)));
                        return [4 /*yield*/, this.signData(tran)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * 自己构造 claim交易
     */
    CoinTool.claimGas = function () {
        return __awaiter(this, void 0, void 0, function () {
            var address, claimsstr, claims, sum, tran, i, claim, input, output, data, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        address = entity_1.LoginInfo.getCurrentAddress();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_getclaimgas(address, 0)];
                    case 1:
                        claimsstr = _a.sent();
                        claims = claimsstr["claims"];
                        sum = claimsstr["gas"].toFixed(8);
                        tran = new ThinNeo.Transaction();
                        //交易类型为合约交易
                        tran.type = ThinNeo.TransactionType.ClaimTransaction;
                        tran.version = 0; //0 or 1
                        tran.extdata = new ThinNeo.ClaimTransData(); //JSON.parse(JSON.stringify(claims));
                        tran.extdata.claims = [];
                        tran.attributes = [];
                        tran.inputs = [];
                        for (i in claims) {
                            claim = claims[i];
                            input = new ThinNeo.TransactionInput();
                            input.hash = (claim.txid).hexToBytes().reverse();
                            input.index = claim.n;
                            input["_addr"] = claim.addr;
                            tran.extdata.claims.push(input);
                        }
                        output = new ThinNeo.TransactionOutput();
                        output.assetId = (CoinTool.id_GAS).hexToBytes().reverse();
                        output.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(address);
                        output.value = Neo.Fixed8.parse(sum);
                        tran.outputs = [];
                        tran.outputs.push(output);
                        return [4 /*yield*/, this.signData(tran)];
                    case 2:
                        data = _a.sent();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        result['amount'] = sum;
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /**
     * invokeTrans 方式调用合约塞入attributes
     * @param script 合约的script
     */
    CoinTool.contractInvokeTrans_attributes = function (script) {
        return __awaiter(this, void 0, void 0, function () {
            var addr, utxos, gass, tran, feeres, data, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        return [4 /*yield*/, CoinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        gass = utxos[importpack_1.tools.coinTool.id_GAS];
                        tran = new ThinNeo.Transaction();
                        //合约类型
                        tran.inputs = [];
                        tran.outputs = [];
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        tran.attributes = new Array(1);
                        tran.attributes[0] = new ThinNeo.Attribute();
                        tran.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
                        tran.attributes[0].data = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(addr);
                        feeres = importpack_1.tools.coinTool.creatInuptAndOutup(gass, Neo.Fixed8.parse("0.00000001"));
                        tran.inputs = feeres.inputs.map(function (input) {
                            input.hash = input.hash.reverse();
                            return input;
                        });
                        tran.outputs = feeres.outputs;
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        return [4 /*yield*/, this.signData(tran)];
                    case 2:
                        data = _a.sent();
                        res = new entity_1.Result();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        res.err = !result["sendrawtransactionresult"];
                        res.info = result["txid"];
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * invokeTrans 方式调用合约塞入attributes
     * @param script 合约的script
     */
    CoinTool.contractInvokeTrans = function (script) {
        return __awaiter(this, void 0, void 0, function () {
            var addr, assetid, utxos, tranmsg, tran, data, res, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        assetid = CoinTool.id_GAS;
                        return [4 /*yield*/, CoinTool.getassets()];
                    case 1:
                        utxos = _a.sent();
                        tranmsg = CoinTool.makeTran(utxos, addr, assetid, Neo.Fixed8.Zero);
                        tran = tranmsg.info['tran'];
                        tran.type = ThinNeo.TransactionType.InvocationTransaction;
                        tran.extdata = new ThinNeo.InvokeTransData();
                        //塞入脚本
                        tran.extdata.script = script;
                        // (tran.extdata as ThinNeo.InvokeTransData).gas = Neo.Fixed8.fromNumber(1.0);
                        if (tran.witnesses == null)
                            tran.witnesses = [];
                        return [4 /*yield*/, this.signData(tran)];
                    case 2:
                        data = _a.sent();
                        res = new entity_1.Result();
                        return [4 /*yield*/, importpack_1.tools.wwwtool.api_postRawTransaction(data)];
                    case 3:
                        result = _a.sent();
                        res.err = !result;
                        res.info = "成功";
                        return [2 /*return*/, res];
                }
            });
        });
    };
    /**
     * nep5转账
     * @param address 自己的地址
     * @param tatgeraddr 转账的地址
     * @param asset nep5资产id
     * @param amount 转账数额
     */
    CoinTool.nep5Transaction = function (address, tatgeraddr, asset, amount) {
        return __awaiter(this, void 0, void 0, function () {
            var res, decimals, intv, sb, scriptaddress, random_uint8, random_int, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, importpack_1.tools.wwwtool.getNep5Asset(asset)];
                    case 1:
                        res = _a.sent();
                        decimals = res["decimals"];
                        intv = amount.toFixed(decimals).replace(".", "");
                        sb = new ThinNeo.ScriptBuilder();
                        scriptaddress = asset.hexToBytes().reverse();
                        random_uint8 = Neo.Cryptography.RandomNumberGenerator.getRandomValues(new Uint8Array(32));
                        random_int = Neo.BigInteger.fromUint8Array(random_uint8);
                        //塞入随机数
                        sb.EmitPushNumber(random_int);
                        sb.Emit(ThinNeo.OpCode.DROP);
                        //塞值
                        sb.EmitParamJson(["(address)" + address, "(address)" + tatgeraddr, "(integer)" + intv]); //第二个参数是个数组
                        sb.EmitPushString("transfer");
                        sb.EmitAppCall(scriptaddress);
                        return [4 /*yield*/, importpack_1.tools.contract.contractInvokeTrans_attributes(sb.ToArray())];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    CoinTool.id_GAS = "0x602c79718b16e442de58778e148d0b1084e3b2dffd5de6b7b16cee7969282de7";
    CoinTool.id_NEO = "0xc56f33fc6ecfcd0c225c4ab356fee59390af8560be0e930faebe74a6daff7c9b";
    CoinTool.id_SGAS = Neo.Uint160.parse('74f2dc36a68fdc4682034178eb2220729231db76');
    CoinTool.dapp_nnc = Neo.Uint160.parse("fc732edee1efdf968c23c20a9628eaa5a6ccb934");
    CoinTool.assetID2name = {};
    CoinTool.name2assetID = {};
    return CoinTool;
}());
exports.CoinTool = CoinTool;


/***/ }),

/***/ "qU1S":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var UtxoStore_1 = __webpack_require__("gAj9");
var entity_1 = __webpack_require__("6nHw");
/**
 * 继承 NEO-TS SDK - Transaction类
 */
var Transaction = /** @class */ (function (_super) {
    __extends(Transaction, _super);
    function Transaction(type) {
        var _this = _super.call(this) || this;
        _this.marks = [];
        _this.type = type ? type : ThinNeo.TransactionType.ContractTransaction;
        _this.version = 0; // 0 or 1
        _this.extdata = null;
        _this.witnesses = [];
        _this.attributes = [];
        _this.inputs = [];
        _this.outputs = [];
        return _this;
    }
    /**
     * setScript 往交易中塞入脚本 修改交易类型为 InvokeTransaction
     */
    Transaction.prototype.setScript = function (script, gas) {
        this.type = ThinNeo.TransactionType.InvocationTransaction;
        this.extdata = new ThinNeo.InvokeTransData();
        this.extdata.script = script;
        if (gas) {
            this.extdata.gas = gas;
        }
        this.attributes = new Array(1);
        this.attributes[0] = new ThinNeo.Attribute();
        this.attributes[0].usage = ThinNeo.TransactionAttributeUsage.Script;
        this.attributes[0].data = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(entity_1.LoginInfo.getCurrentAddress());
    };
    /**
     * 创建一个交易中的输入和输出 将使用过的utxo 放入 marks
     * @param utxos 资产的utxo
     * @param sendcount 输出总数
     * @param target 对方地址
     */
    Transaction.prototype.creatInuptAndOutup = function (utxos, sendcount, target) {
        var count = Neo.Fixed8.Zero;
        var scraddr = "";
        var assetId = utxos[0].asset.hexToBytes().reverse();
        // 循环utxo 塞入 input
        for (var _i = 0, utxos_1 = utxos; _i < utxos_1.length; _i++) {
            var utxo = utxos_1[_i];
            var input = new ThinNeo.TransactionInput();
            input.hash = utxo.txid.hexToBytes().reverse();
            input.index = utxo.n;
            input.addr = utxo.addr;
            count = count.add(utxo.count);
            scraddr = utxo.addr;
            this.inputs.push(input);
            this.marks.push(new UtxoStore_1.MarkUtxo(utxo.txid, utxo.n));
            if (count.compareTo(sendcount) > 0) {
                break;
            }
        }
        if (count.compareTo(sendcount) >= 0) {
            if (target) {
                if (sendcount.compareTo(Neo.Fixed8.Zero) > 0) {
                    var output = new ThinNeo.TransactionOutput();
                    output.assetId = assetId;
                    output.value = sendcount;
                    output.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(target);
                    this.outputs.push(output);
                }
            }
            var change = count.subtract(sendcount); // 应该找零的值
            if (change.compareTo(Neo.Fixed8.Zero) > 0) {
                var outputchange = new ThinNeo.TransactionOutput();
                outputchange.toAddress = ThinNeo.Helper.GetPublicKeyScriptHash_FromAddress(scraddr);
                outputchange.value = change;
                outputchange.assetId = assetId;
                this.outputs.push(outputchange);
            }
        }
        else {
            throw new Error("You don't have enough utxo;");
        }
    };
    /**
     * 构造并发送交易
     * @param {ThinNeo.Transaction} tran
     * @param {string} randomStr
     */
    Transaction.prototype.signData = function () {
        return __awaiter(this, void 0, void 0, function () {
            var current, addr, msg, pubkey, prekey, signdata, data, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, entity_1.LoginInfo.deblocking()];
                    case 1:
                        current = _a.sent();
                        addr = entity_1.LoginInfo.getCurrentAddress();
                        msg = this.GetMessage().clone();
                        pubkey = current.pubkey.clone();
                        prekey = current.prikey.clone();
                        signdata = ThinNeo.Helper.Sign(msg, prekey);
                        this.AddWitness(signdata, pubkey, addr);
                        data = this.GetRawData();
                        return [2 /*return*/, data];
                    case 2:
                        error_1 = _a.sent();
                        throw "Signature interrupt";
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    return Transaction;
}(ThinNeo.Transaction));
exports.Transaction = Transaction;


/***/ }),

/***/ "qkow":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/ts-loader!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/components/Button.vue
var Button = __webpack_require__("yjCE");
var Button_default = /*#__PURE__*/__webpack_require__.n(Button);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/template-compiler?{"id":"data-v-6f467166","hasScoped":true,"transformToRequire":{"video":"src","source":"src","img":"src","image":"xlink:href"},"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/components/Button.vue
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"v-btn",class:_vm.type,on:{"click":_vm.btnClick}},[_vm._t("default")],2)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ var components_Button = (esExports);
// CONCATENATED MODULE: ./src/components/Button.vue
function injectStyle (ssrContext) {
  __webpack_require__("ZJcu")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6f467166"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  Button_default.a,
  components_Button,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ var src_components_Button = __webpack_exports__["default"] = (Component.exports);


/***/ }),

/***/ "r84I":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TaskService_1 = __webpack_require__("Tww3");
var services;
(function (services) {
    services.taskManager = new TaskService_1.TaskService();
})(services = exports.services || (exports.services = {}));


/***/ }),

/***/ "shbj":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var Spinner_vue_1 = __webpack_require__("+jyM");
var Valert = /** @class */ (function (_super) {
    __extends(Valert, _super);
    function Valert() {
        var _this = _super.call(this) || this;
        _this.show = false;
        return _this;
    }
    Valert.prototype.closemudloe = function () {
        this.show = false;
    };
    Valert.prototype.mounted = function () { };
    Valert = __decorate([
        vue_class_component_1.default({
            components: {
                "spinner-wrap": Spinner_vue_1.default
            }
        }),
        __metadata("design:paramtypes", [])
    ], Valert);
    return Valert;
}(vue_1.default));
exports.default = Valert;


/***/ }),

/***/ "slXE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var storagetool_1 = __webpack_require__("5LD5");
var Store = /** @class */ (function () {
    function Store() {
    }
    Store.blockheight = new storagetool_1.sessionStoreTool("block");
    Store.auctionInfo = new storagetool_1.sessionStoreTool("auctionInfo");
    Store.session_open = new storagetool_1.sessionStoreTool("auction-openSession");
    return Store;
}());
exports.default = Store;


/***/ }),

/***/ "vcAA":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.msg = "";
        _this.type = "";
        _this.isshow = false;
        return _this;
    }
    /**
     * @method 显示弹框
     * @param type 类型('success','error','')空则不显示
     * @param msg 显示内容
     * @param time 停留时间(单位:毫秒)5秒=5000
     */
    Toast.prototype.isShow = function (type, msg, time) {
        var _this = this;
        this.isshow = true;
        this.type = type;
        this.msg = msg;
        setTimeout(function () {
            _this.isshow = false;
            _this.type = "";
            _this.msg = "";
        }, time);
    };
    __decorate([
        vue_property_decorator_1.Watch("opneToast"),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [String, String, Number]),
        __metadata("design:returntype", void 0)
    ], Toast.prototype, "isShow", null);
    Toast = __decorate([
        vue_property_decorator_1.Component
    ], Toast);
    return Toast;
}(vue_1.default));
exports.default = Toast;


/***/ }),

/***/ "wOXa":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    language: {
        name: '中文'
    },
    navbar: {
        explorer: '浏览器',
        wallet: '钱包',
        mainnet: '主网',
        testnet: "测试网",
        logout: "退出",
        blockheight: "高度",
        toggle: "切换导航"
    },
    btn: {
        confirm: "提交",
        confirming: "提交中",
        reset: "重置",
        close: "关闭",
        transfer: "转账",
        switch: "切换",
        claim: "提取",
        claiming: "提取中",
        cancel: "取消",
        openauction: "开标",
        openingauction: "正在开标",
        bid: "竞标",
        getdomain: "领取域名",
        recoversgas: "领回竞拍金",
        gettingdomain: "域名领取中...",
        recoveringsgas: "竞拍金领回中...",
        receivedsgas: "已退回余额",
        receivednns: "已领取域名",
        newbid: "参加竞拍",
        viewmore: "查看更多",
        edit: "编辑",
        renewal: "续约",
        renewaling: "续约中",
        setOwner: "设置所有者",
        settingOwner: "设置所有者...",
        exchange: "兑换",
        exchanging: "兑换中",
        withdraw: "提取",
        topup: "充值",
        getGas: "索取Gas",
        gettingGas: "Gas领取中"
    },
    toast: {
        msg1: "登陆中...",
        msg2: "登陆成功...",
        msg3: "登陆失败，请重新尝试",
        msg4: "请输入正确的字符串"
    },
    login: {
        login: "登陆",
        title: "登陆你的钱包",
        selectplaceholder: "选择密钥存储库文件",
        selectbtn: "选择",
        passwordholder: "输入密码",
        loginbtn: "登陆",
        cutlinemsg: "或者",
        wifmsg: "从WIF字符串导入密钥",
        nep2msg: "从nep2字符串导入密钥"
    },
    wif: {
        title: "WIF 密钥",
        wifplaceholder: "输入您的密钥",
        back: "返回"
    },
    nep2: {
        title: "Nep2",
        placeholder: "输入您的Nep2",
        password: "输入密码"
    },
    generate: {
        generate: "新建",
        title: "创建一个新的钱包",
        name: "您的钱包名",
        password: "输入密码",
        passwordagain: "重复密码",
        nameempty: "钱包名不能为空",
        namepass: "验证通过",
        pwderrmsg1: "请输入至少8个字符的密码",
        pwderrmsg2: "至少使用一个字符和一个数字",
        pwderrmsg3: "请输入与上面相同的密码",
        createmsg: "您的密钥库文件已经创建。",
        downloadmsg: "你可以点击“下载”按钮来保存你的密钥库文件！",
        download: "下载",
        msg: "不要丢失它!",
        msg2: "如果你失去了它，它是无法恢复的。"
    },
    balance: {
        balance: "资产",
        title1: "NEO 资产余额",
        title2: "当前地址",
        title3: "可提取的GAS",
        title4: "资产",
        title5: "选择地址",
        title6: "选择 NEP6 钱包文件",
        msg1: "向自己的地址进行转账…",
        msg2: "等待交易确认…",
        msg3: "提取 GAS 中…",
        msg4: "Gas提取成功!",
        tips: "您可以通过点击此按钮来获取10Gas, 该按钮每24小时只能点击一次。",
        errmsg1: "操作失败！请您稍后再进行尝试！",
        errmsg2: "库存不足！请您稍后再进行尝试！",
        errmsg3: "数据异常！请您稍后再进行尝试！",
        successmsg: "操作成功！正在领取中，请稍等。"
    },
    transfer: {
        transfer: "转账",
        title1: "资产",
        title2: "地址",
        title3: "金额",
        title4: "历史记录",
        msg1: "您的地址不正确",
        send: "发送",
        from: "来自",
        to: "发往",
        details: "详情",
        placeholder: "请输入地址或域名",
        msg2: "您的交易已发送，请稍后查验",
        msg3: "交易失败",
        msg4: "您没有足够的utxo进行交易，请等待高度变化后再尝试下笔交易",
        msg5: "可用",
        waiting: "等待交易确认",
        errdomain: "该域名尚未映射地址",
        timeMsg: "有效期至: ",
        netfee: "网络费",
        sysfee: "系统费"
    },
    nns: {
        nns: "NNS",
        title1: "注册NEO域名",
        placeholder1: "输入名称",
        register: "注册",
        title2: "我的NEO域名",
        msg1: "活动已结束，谢谢大家的参与。",
        msg2: '我们将会在NNS在主网上线后的一个月内给予你主网钱包50NNC的奖励！',
        msg3: "注册你的域名并收集奖励。",
        err1: "当前域名已经被注册。",
        text1: "地址解析器",
        text2: "地址映射",
        text3: "域名到期时间",
        text4: "已到期",
        waiting: "等待NEO区块高度更新后，尝试刷新页面",
        edit: "编辑",
        alerttitle: "编辑信息",
        alerttitle1: "注册Neo域名",
        alerttitle2: "地址解析器",
        alerttitle3: "地址映射",
        alertmessage1: "这是官方地址解析器，你必须先确认此地址解析器才能映射你的地址。",
        alertmessage2: "请输入正确格式的地址",
    },
    setting: {
        settings: "设置",
        title1: "我的钱包地址",
        title2: "我的私钥",
        title3: "我的钱包文件",
        msg1: "这些信息非常重要。如果你失去了它，它可能会导致你的损失。",
        msg2: "保存您的密钥库文件并复制您的钱包地址和您的WIF。不要失去他们。",
        msg3: "设置密码 ",
        msg4: "输入你的密码",
        msg5: "创建钱包",
        btn1: "查看",
        btn2: "创建",
        btn3: "下载"
    },
    nnsneo: {
        auction: "域名竞拍",
        myneoname: "我的域名管理",
        bonus: "我的分红",
        tutorial: "竞拍教程"
    },
    auction: {
        title1: "域名竞拍",
        title2: "我的竞拍",
        title3: "竞拍信息",
        title4: "我的加价",
        title5: "竞拍进度",
        title6: "领取域名",
        title7: "领回竞拍金",
        entername: "请输入您想要的域名",
        checkavailable: "此域名可以进行竞拍。",
        checkbeing: "此域名正在进行竞拍。",
        checkformat: "域名长度需要在6～32个字节之间，只能是字母和数字。",
        checkbuyer: "此域名已经被其他人竞拍了。",
        sendingmsg: "正在发送交易，请耐心等待...",
        searchmsg: "按域名搜索",
        status: "状态",
        lastauctionprice: "当前最高价",
        currentbidder: "当前竞标人",
        opentime: "开标时间",
        fixedperiod: "确定期",
        randomperiod: "随机期",
        ended: "已结束",
        me: "我",
        other: "他人",
        buyer: "中标人",
        hammerprice: "成交价",
        acutiontitle: "竞拍",
        domain: "域名",
        highest: "当前最高价",
        raisebid: "加价",
        enterbid: "请输入您的价格",
        yourbidmsg: "您的累积竞价",
        mybidmsg: "我的累积竞价 ",
        mywillbid: "我的累积竞价将会是 ",
        price: "竞拍价: ",
        tips1: "注意 : 每次加价的最小值为 0.1 CGAS. 当您的累积竞价小于当前最高价时，该次出价不成功。",
        isAvailable: "可用",
        errmsg5: "您当前的账户仅拥有",
        errmsg1: "您当前的竞拍账户仅拥有",
        errmsg2: "CGAS.",
        errmsg4: "请输入正确的格式。",
        errmsg6: "您的出价低于最高出价的百分之十",
        nobalance: "余额不足，请充值",
        goback: "返回",
        waitmsg1: "未确认",
        waitmsg2: "您的加价将会在新区块生成之后被确认，请耐心等待...",
        getdomaintips: "注意 : 当您成功领取域名后，您可以在“我的域名管理”中进行编辑。",
        waitgetdomain: "您的操作将会在新区块生成之后被确认，请耐心等待...",
        fee: "手续费 ",
        remainingsgas: "可以领回的竞拍金 ",
        timetips1: "注意 : 如果确定期最后一天无人竞拍, 则确定期结束时间为该次竞拍的结束时间。",
        timetips2: "注意 : 竞拍即将进入随机期, 在随机期竞拍结束时间是不确定的，请尽早出价。",
        timetips3: "注意 : 在随机期竞拍结束时间是不确定的，请尽早出价。",
        bidstarttimemsg: "开标时间",
        endtimemsg: "确定期结束时间",
        randomtimemsg: "随机期开始时间",
        maxtimemsg: "随机期最大结束时间",
        tipsmsg1: "注意：竞拍开始之前，你需要知道2件事:",
        tipsmsg2: "竞拍所使用的资产是CGAS，并且您需要将CGAS充值进您的“竞拍账户”才能使用。",
        tipsmsg3: 'CGAS需要在“CGAS兑换”页面中用Gas1:1兑换获得, 然后使用“竞拍账户”中的充值功能，将CGAS充值进您的竞拍账户',
        titleaccount: "您的竞拍账户",
        withdraw: "提取",
        topup: "充值",
        from: "充值源: ",
        to: "提取到",
        topupamount: "充值金额",
        withdrawamount: "提取金额",
        amount: "金额",
        asset: "资产",
        errmsg3: "是可用的",
        tipsmsg4: "注意：当你在使用Gas进行充值时，充值进你的“拍卖账户”之前，他会自动转换成CGAS，整个过程需要两个区块的确认时间，请耐心等待...",
        yourbalance: "您的钱包账户",
        waiting: "等待",
        successwithdraw: "提取成功",
        successtop: "充值成功",
        successtopup: "充值成功!您的 ",
        successtopup2: " 个CGAS将会在2个区块被确认后进入您的竞拍账户!",
        successtopup3: " 个CGAS将会在1个区块被确认后进入您的竞拍账户!",
        successwithdraw2: " 个CGAS将会在1个区块后退回到您的地址!",
        failtopup: "充值失败 !你的Gas被转换成了CGAS",
        fail: "操作失败 !",
        auctionopen: "开标",
        domainname: "域名",
        successbid: "加价成功",
        failbid: "加价失败",
        failbid2: "此域名竞拍结束，本次加价未执行",
        successbid1: "您加价了 ",
        successbid2: " CGAS ，请等待区块确认。",
        successgetdomain: "域名领取成功",
        failgetdomain: "域名领取失败",
        tips: "注意: ",
        statustips: "确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
        statustips2: "随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。 ",
        teststatustips: "确定期为竞拍第一阶段，时长为3天，此期间所有的出价都有效。当确定期最后一天有人出价时将触发最大时长为2天的随机期。否则竞拍即在确定期结束。",
        teststatustips2: "随机期为竞拍第二阶段，最大时长为2天，此期间任意一个出价都有可能触发该域名竞拍的结束从而出价无效，越靠后的出价触发结束的可能性越大，因此请尽早出价以免错失该域名。 ",
        toptips: "注意: 当系统提示您充值成功之后，仍需要一个区块的时间来确认这笔操作，请耐心等待。",
        withdrawtips: "注意: 当系统提示您提取成功之后，仍需要一个区块的时间来确认这笔操作，请耐心等待。",
        getall: "全部",
        nodata: "没有查询到相关数据"
    },
    exchange: {
        title: "CGAS兑换",
        tosgas: "兑换CGAS",
        togas: "兑换Gas",
        tips: "注意 : CGAS是一种NEP5资产，与NEO的GAS按照1：1比例绑定，它们之间可自由兑换。兑换需要一个区块的确认时间，请耐心等待。",
        spend: "我将花费 : ",
        receive: "我将获得 : ",
        warnmsg: "余额不足",
        waittitle: "交易记录",
        balance: "余额",
        amount: "金额"
    },
    myneoname: {
        title: "我的域名管理",
        resolver: "地址解析器",
        mapping: "地址映射",
        time: "域名到期时间",
        owner: "所有者地址",
        expiring: "即将过期",
        edittitle: "编辑信息",
        neoname: "域名",
        notconfigure: "未配置",
        expired: "已过期",
        tips: "注意 : 您需要在成功确认地址解析器之后，才能进行地址映射。"
    },
    bonus: {
        title: "分红记录",
        mydividend: "我的分红 ：",
        distribution: "奖金池快照 ：",
        mytotal: "我持有的NNC总量 ：",
        snapshot: "快照时间 ："
    },
    operation: {
        welcome: "欢迎!",
        title: "操作记录",
        tips: "注意：这些记录将会在您登出或关闭网页时清空。",
        waiting: "等待区块确认...",
        txid: "交易ID:",
        transfer: "转出",
        openauction: "开标",
        raisebid: "加价",
        exchange: "CGAS兑换",
        topup: "充值",
        withdraw: "提取",
        requestgas: "索取Gas",
        editdomain: "域名编辑",
        addrmapping: "地址映射:",
        addrresolver: "确认地址解析器: ",
        renew: "续约",
        getdomain: "领取域名",
        recover: "领回CGAS",
        gasclaim: "Gas提取",
        nodata: "没有数据",
        fail: "操作失败",
        waitinggas: "等待系统发送",
        sentok: "系统已发送"
    },
    notify: {
        utxo: "您的UTXO过于分散，将可能造成CGAS兑换失败（GAS也会损失），请先对自己的地址执行一次不小于兑换金额的转账，待转账操作生效后再行兑换",
        fee: "注意：当您的钱包有足够的Gas时，我们会自动添加一笔 0.00000001 Gas 的手续费，确保交易快速确认"
    }
};


/***/ }),

/***/ "wtuE":
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAyNCAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4NCiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDQ5ICg1MTAwMikgLSBodHRwOi8vd3d3LmJvaGVtaWFuY29kaW5nLmNvbS9za2V0Y2ggLS0+DQogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+DQogICAgPGRlZnM+PC9kZWZzPg0KICAgIDxnIGlkPSJiYWxhbmNlNC10ZXN0bmV0IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4NCiAgICAgICAgPGcgaWQ9IummlumhtS10cmFuc2Zlci1pbnB1dCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTkyMi4wMDAwMDAsIC0zNzguMDAwMDAwKSI+DQogICAgICAgICAgICA8ZyBpZD0iR3JvdXAtMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTAwLjAwMDAwMCwgMjI2LjAwMDAwMCkiPg0KICAgICAgICAgICAgICAgIDxnIGlkPSLmiZPli74iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDgyMi4wMDAwMDAsIDE1Mi4wMDAwMDApIj4NCiAgICAgICAgICAgICAgICAgICAgPHBhdGggZD0iTTI0LDEyLjE0ODE0ODEgQzI0LDUuMzcyNDQ0NDQgMTguNjI3NTU1NiwwIDExLjg1MTg1MTksMCBDNS4zNzI0NDQ0NCwwIDAsNS4zNzI0NDQ0NCAwLDEyLjE0ODE0ODEgQzAsMTguNjI3NTU1NiA1LjM3MjQ0NDQ0LDI0IDExLjg1MTg1MTksMjQgQzE4LjYyNzU1NTYsMjQgMjQsMTguNjI3NTU1NiAyNCwxMi4xNDgxNDgxIFoiIGlkPSJGaWxsLSIgZmlsbD0iIzJEREU0RiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPSJNNi4yNDQ5NTE3MywxMi44NDYzNTA0IEM1Ljg1NjI5Mzc1LDEyLjQ0NjI2NzIgNS44MDk5NDA0OCwxMS43NTgyNjA2IDYuMTMyMDI0OTksMTEuMzIyMzU4MiBMNS42NTA2MzE3NSwxMS45NzM4NjU3IEM1Ljk3NjkyMjAyLDExLjUzMjI3MTMgNi41OTc0OTM2MiwxMS40NDU3MjQzIDcuMDQxMjU0NzcsMTEuNzg0MDE2NiBMOC44OTAxMDY5NywxMy4xOTM0NTE2IEM5LjMzMTgzNjU5LDEzLjUzMDE5NTIgMTAuMDM3NTcyNSwxMy41MTUxMTkgMTAuNDY1NjkwNiwxMy4xNjAzNzU5IEwxNy4wMDQ3NzQ2LDcuNzQyMDIzMTIgQzE3LjQzMzIxNTgsNy4zODcwMTIzMiAxOC4wOTc4NjA3LDcuNDEwOTI2MjQgMTguNDgwNzQ0NCw3Ljc4NzAzMTc1IEwxNy43ODA1MzYsNy4wOTkyMTkxOSBDMTguMTY3MjUwNCw3LjQ3OTA4NzU4IDE4LjE2Nzg2NTQsOC4wOTMyOTg5OSAxNy43NjEzMzQsOC40OTEyMzk2OSBMMTAuNDA5MDgxOSwxNS42ODgxMjUzIEMxMC4wMTE3NjI1LDE2LjA3NzA0ODYgOS4zNzc4NjM2OSwxNi4wNzEzNTk0IDguOTg1OTQzOTUsMTUuNjY3OTE4NSBMNi4yNDQ5NTE3MywxMi44NDYzNTA0IFoiIGlkPSJGaWxsLSIgZmlsbD0iI0ZGRkZGRiI+PC9wYXRoPg0KICAgICAgICAgICAgICAgIDwvZz4NCiAgICAgICAgICAgIDwvZz4NCiAgICAgICAgPC9nPg0KICAgIDwvZz4NCjwvc3ZnPg=="

/***/ }),

/***/ "x35b":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var importpack_1 = __webpack_require__("VKSY");
var taskmanager_1 = __webpack_require__("XfB5");
var index_1 = __webpack_require__("OrGm");
var TaskEntitys_1 = __webpack_require__("CveJ");
var app_vue_1 = __webpack_require__("5VpT");
var router_1 = __webpack_require__("LJj6");
var I18n_1 = __webpack_require__("I0Fu");
vue_1.default.use(index_1.default);
// const notFound = () => import('./pages/404.vue');
vue_1.default.config.productionTip = false;
new vue_1.default({
    el: '#app',
    i18n: I18n_1.default,
    render: function (h) { return h(app_vue_1.default); },
    router: router_1.default,
    components: index_1.default
});
//初始化鼠标随机方法
Neo.Cryptography.RandomNumberGenerator.startCollectors();
//初始化根域名
importpack_1.tools.nnstool.initRootDomain("neo");
importpack_1.tools.nnstool.initRootDomain("test");
// console.log(tools.nnstool.root_neo.register.toString());
setInterval(function () {
    var oldBlock = new importpack_1.tools.sessionstoretool("block");
    importpack_1.tools.wwwtool.api_getHeight()
        .then(function (data) {
        var oldHeight = oldBlock.select("height");
        if (oldHeight) {
            if (data > oldHeight) {
                oldBlock.put("height", data);
                /**
                 * 高度变化放在最开始高度变化就启动高度刷新
                 */
                if (TaskEntitys_1.TaskFunction.heightRefresh) {
                    TaskEntitys_1.TaskFunction.heightRefresh();
                }
                taskmanager_1.TaskManager.update();
            }
        }
        else {
            oldBlock.put("height", data);
        }
    });
}, 15000);


/***/ }),

/***/ "yjCE":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = __webpack_require__("/5sW");
var vue_class_component_1 = __webpack_require__("c+8m");
var vue_property_decorator_1 = __webpack_require__("EOM2");
var Valert = /** @class */ (function (_super) {
    __extends(Valert, _super);
    function Valert() {
        return _super.call(this) || this;
    }
    Valert.prototype.mounted = function () { };
    Valert.prototype.btnClick = function () {
        this.$emit("onclick");
    };
    __decorate([
        vue_property_decorator_1.Prop({ default: "primary" }),
        __metadata("design:type", String)
    ], Valert.prototype, "type", void 0);
    Valert = __decorate([
        vue_class_component_1.default({
            components: {}
        }),
        __metadata("design:paramtypes", [])
    ], Valert);
    return Valert;
}(vue_1.default));
exports.default = Valert;


/***/ })

},["x35b"]);
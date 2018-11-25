webpackJsonp([2],{

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AplicativosPageModule", function() { return AplicativosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__aplicativo__ = __webpack_require__(686);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AplicativosPageModule = (function () {
    function AplicativosPageModule() {
    }
    AplicativosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__aplicativo__["a" /* AplicativosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__aplicativo__["a" /* AplicativosPage */]),
            ],
        })
    ], AplicativosPageModule);
    return AplicativosPageModule;
}());

//# sourceMappingURL=aplicativo.module.js.map

/***/ }),

/***/ 686:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AplicativosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_domain_aplicativo_service__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_pessoa_service__ = __webpack_require__(349);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CategoriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AplicativosPage = (function () {
    function AplicativosPage(navCtrl, navParams, aplicativoService, loadingCtrl, pessoaService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.aplicativoService = aplicativoService;
        this.loadingCtrl = loadingCtrl;
        this.pessoaService = pessoaService;
        this.itens = [];
        this.page = 0;
    }
    AplicativosPage.prototype.ionViewDidLoad = function () {
        this.loadData();
    };
    AplicativosPage.prototype.loadData = function () {
        var _this = this;
        var loader = this.presentLoading();
        this.aplicativoService.findPageByPessoa(this.page, 10)
            .subscribe(function (response) {
            var start = _this.itens.length;
            _this.itens = _this.itens.concat(response['content']);
            var end = _this.itens.length - 1;
            loader.dismiss();
        }, function (error) {
            loader.dismiss();
        });
    };
    AplicativosPage.prototype.presentLoading = function () {
        var loader = this.loadingCtrl.create({
            content: "Aguarde..."
        });
        loader.present();
        return loader;
    };
    AplicativosPage.prototype.showProdutos = function (aplicativo_id) {
        this.navCtrl.push('ProdutosPage', { aplicativo_id: aplicativo_id });
    };
    AplicativosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-aplicativos',template:/*ion-inline-start:"/Users/pedrodias/Projetos/mabmobi-frontend/src/pages/aplicativos/aplicativo.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Aplicativos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <ion-list>\n    <button ion-item *ngFor="let item of itens">\n      <h2> {{ item.nome }} </h2>\n    </button>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrodias/Projetos/mabmobi-frontend/src/pages/aplicativos/aplicativo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__services_domain_aplicativo_service__["a" /* AplicativoService */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular_components_loading_loading_controller__["a" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_pessoa_service__["a" /* PessoaService */]])
    ], AplicativosPage);
    return AplicativosPage;
}());

//# sourceMappingURL=aplicativo.js.map

/***/ })

});
//# sourceMappingURL=2.js.map
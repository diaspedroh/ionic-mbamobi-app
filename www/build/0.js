webpackJsonp([0],{

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(688);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__ = __webpack_require__(685);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    SignupPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__["a" /* CidadeService */],
                __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__["a" /* EstadoService */]
            ]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CidadeService = (function () {
    function CidadeService(http) {
        this.http = http;
    }
    CidadeService.prototype.findAll = function (estado_id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados/" + estado_id + "/cidades");
    };
    CidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], CidadeService);
    return CidadeService;
}());

//# sourceMappingURL=cidade.service.js.map

/***/ }),

/***/ 685:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EstadoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config_api_config__ = __webpack_require__(61);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EstadoService = (function () {
    function EstadoService(http) {
        this.http = http;
    }
    EstadoService.prototype.findAll = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__config_api_config__["a" /* API_CONFIG */].baseUrl + "/estados");
    };
    EstadoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], EstadoService);
    return EstadoService;
}());

//# sourceMappingURL=estado.service.js.map

/***/ }),

/***/ 688:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_domain_pessoa_service__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SignupPage = (function () {
    function SignupPage(navCtrl, navParams, formBuilder, cidadeService, estadoService, pessoaService, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.cidadeService = cidadeService;
        this.estadoService = estadoService;
        this.pessoaService = pessoaService;
        this.alertCtrl = alertCtrl;
        this.formGroup = this.formBuilder.group({
            nome: ['Joaquim', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(5), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(120)]],
            email: ['joaquim@gmail.com', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].email]],
            tipo: ['1', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cpf: ['06134596280', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(11), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(11)]],
            rg: ['9999999', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)]],
            senha: ['123', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            logradouro: ['Rua Via', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            numero: ['25', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            complemento: ['Apto 3', []],
            bairro: ['Copacabana', []],
            cep: ['10828333', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone1: ['977261827', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            telefone2: ['', []],
            telefone3: ['', []],
            estadoId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]],
            cidadeId: [null, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]]
        });
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.estadoService.findAll()
            .subscribe(function (response) {
            _this.estados = response;
            _this.formGroup.controls.estadoId.setValue(_this.estados[0].id);
            _this.updateCidades();
        }, function (error) { });
    };
    SignupPage.prototype.updateCidades = function () {
        var _this = this;
        var estado_id = this.formGroup.value.estadoId;
        this.cidadeService.findAll(estado_id)
            .subscribe(function (response) {
            _this.cidades = response;
            _this.formGroup.controls.cidadeId.setValue(null);
        }, function (error) { });
    };
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        this.pessoaService.insert(this.formGroup.value)
            .subscribe(function (response) {
            _this.showInsertOk();
        }, function (error) { });
    };
    SignupPage.prototype.showInsertOk = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Sucesso!',
            message: 'Cadastro efetuado com sucesso',
            enableBackdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.navCtrl.pop();
                    }
                }
            ]
        });
        alert.present();
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/pedrodias/Projetos/mabmobi-frontend/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="formGroup" (ngSubmit)="signupUser(); $event.preventDefault()">\n    <ion-item>\n      <ion-label stacked>Nome*</ion-label>\n      <ion-input formControlName="nome" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.nome.dirty && formGroup.controls.nome.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Email*</ion-label>\n      <ion-input formControlName="email" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.email.dirty && formGroup.controls.email.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>CPF</ion-label>\n      <ion-input formControlName="cpf" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.cpf.dirty && formGroup.controls.cpf.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>RG</ion-label>\n      <ion-input formControlName="rg" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.rg.dirty && formGroup.controls.rg.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Senha*</ion-label>\n      <ion-input formControlName="senha" type="password"></ion-input>\n    </ion-item> \n    <p class="danger" *ngIf="formGroup.controls.senha.dirty && formGroup.controls.senha.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Logradouro*</ion-label>\n      <ion-input formControlName="logradouro" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.logradouro.dirty && formGroup.controls.logradouro.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Número*</ion-label>\n      <ion-input formControlName="numero" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.numero.dirty && formGroup.controls.numero.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Complemento</ion-label>\n      <ion-input formControlName="complemento" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Bairro</ion-label>\n      <ion-input formControlName="bairro" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>CEP*</ion-label>\n      <ion-input formControlName="cep" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.cep.dirty && formGroup.controls.cep.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Telefone 1*</ion-label>\n      <ion-input formControlName="telefone1" type="text"></ion-input>\n    </ion-item>\n    <p class="danger" *ngIf="formGroup.controls.telefone1.dirty && formGroup.controls.telefone1.errors" margin-left>Valor inválido</p>\n    <ion-item>\n      <ion-label stacked>Telefone 2</ion-label>\n      <ion-input formControlName="telefone2" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Telefone 3</ion-label>\n      <ion-input formControlName="telefone3" type="text"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Estado*</ion-label>\n      <ion-select formControlName="estadoId" (ionChange)="updateCidades()">\n        <ion-option *ngFor="let estado of estados; first as f" [value]="estado.id" [selected]="f">{{estado.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>Cidade*</ion-label>\n      <ion-select formControlName="cidadeId">\n        <ion-option *ngFor="let cidade of cidades" [value]="cidade.id">{{cidade.nome}}</ion-option>\n      </ion-select>\n    </ion-item>\n    <button ion-button block type="submit" [disabled]="formGroup.invalid">Criar conta</button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"/Users/pedrodias/Projetos/mabmobi-frontend/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__services_domain_cidade_service__["a" /* CidadeService */],
            __WEBPACK_IMPORTED_MODULE_4__services_domain_estado_service__["a" /* EstadoService */],
            __WEBPACK_IMPORTED_MODULE_5__services_domain_pessoa_service__["a" /* PessoaService */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular_components_alert_alert_controller__["a" /* AlertController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
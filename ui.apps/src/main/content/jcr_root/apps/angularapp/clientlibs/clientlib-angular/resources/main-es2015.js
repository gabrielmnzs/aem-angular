(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clock/clock.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/clock/clock.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"clock-container\">\n  <p class=\"hour\">{{ date | date: \"shortTime\" }}</p>\n  <p class=\"date\">{{ date | date: \"fullDate\" }}</p>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer-container\">\n  <div class=\"left-container\">\n    <p>\n      Essa janela do navegador é usada para manter sua sessão de autenticação\n      ativa. Deixe-a aberta em segundo plano e abra uma nova janela para\n      continuar a navegar.\n    </p>\n  </div>\n  <div class=\"right-container\">\n    <div class=\"time-session\">\n      <p class=\"time-session__label\">Application refresh in</p>\n      <div class=\"time-session__timer\">\n        <p class=\"seconds-number\">{{ timer }}</p>\n        <p class=\"seconds-label\">seconds</p>\n      </div>\n    </div>\n    <button class=\"btn-keep-browsing\" (click)=\"keepBrowsing()\">Continuar Navegando</button>\n    <button class=\"btn-logout\" (click)=\"logout()\">Logout</button>\n  </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header-container\">\r\n  <ng-container>\r\n    <img [src]=\"image.src\" />  \r\n  </ng-container>\r\n  <app-clock></app-clock>\r\n  <app-weather></app-weather>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"title\">{{ title }}</h1>\r\n<p class=\"subtitle\">{{ subtitle }}</p>\r\n<form class=\"form-signin\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <h2 class=\"form-signin__heading\">{{ formTitle }}</h2>\r\n  <input\r\n    class=\"form-control form-signin__input\"\r\n    type=\"text\"\r\n    formControlName=\"username\"\r\n    [placeholder]=\"userPlaceholder\"\r\n    [ngClass]=\"{ invalid: submitted && username.errors }\"\r\n    required\r\n    autofocus\r\n  />\r\n  <input\r\n    class=\"form-control form-signin__input\"\r\n    type=\"password\"\r\n    formControlName=\"password\"\r\n    [placeholder]=\"passwordPlaceholder\"\r\n    [ngClass]=\"{ invalid: submitted && password.errors }\"\r\n    required\r\n  />\r\n  <div class=\"form-signin__error-message\">\r\n    <p\r\n      *ngIf=\"\r\n        invalidCredentials ||\r\n        (submitted && (username.errors || password.errors))\r\n      \"\r\n    >\r\n      Ops, usuário ou senha inválidos.<br />\r\n      Tente novamente!\r\n    </p>\r\n  </div>\r\n  <button class=\"form-signin__button\">{{ buttonName }}</button>\r\n</form>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-container\">\n    <p class=\"text-highlight\">Our mission is</p>\n    <p class=\"text-simple\">Nossa missão é</p>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<aem-page class=\"structure-page\" [attr.data-cq-page-path]=\"path\" [cqPath]=\"path\" [cqItems]=\"items\" [cqItemsOrder]=\"itemsOrder\"></aem-page>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text/text.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/text/text.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [innerHTML]=\"content\" [ngClass]=\"className\">\r\n  {{ text }}\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"weather-container\">\n  <p class=\"local\">{{ location }}</p>\n  <div class=\"temperature-container\">\n    <img class=\"icon\" [src]=\"icon\" alt=\"\">\n    <p class=\"temperature\">{{ temperature }}°</p>\n  </div>  \n</div>\n");

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AemPageMatcher, AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AemPageMatcher", function() { return AemPageMatcher; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");





function AemPageMatcher(url) {
    if (url.length) {
        return {
            consumed: url,
            posParams: {
                path: url[url.length - 1],
            },
        };
    }
}
const routes = [
    {
        matcher: AemPageMatcher,
        component: _components_page_page_component__WEBPACK_IMPORTED_MODULE_4__["PageComponent"],
        resolve: {
            path: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"],
        },
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
        providers: [
            _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageDataResolver"],
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["AemPageRouteReuseStrategy"],
            },
        ],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");




let AppComponent = class AppComponent {
    constructor() {
        this.updateData = (pageModel) => {
            this.path = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].PATH_PROP];
            this.items = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_PROP];
            this.itemsOrder = pageModel[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["Constants"].ITEMS_ORDER_PROP];
        };
        _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].initialize().then(this.updateData);
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "#spa-root",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_import_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/import-components */ "./src/app/components/import-components.ts");
/* harmony import */ var _components_model_manager_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/model-manager.service */ "./src/app/components/model-manager.service.ts");
/* harmony import */ var _components_page_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/page/page.component */ "./src/app/components/page/page.component.ts");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/title/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/button/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/image/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/download/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/list/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
/* harmony import */ var _components_text_text_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/text/text.component */ "./src/app/components/text/text.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/clock/clock.component */ "./src/app/components/clock/clock.component.ts");
/* harmony import */ var _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/weather/weather.component */ "./src/app/components/weather/weather.component.ts");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _components_main_main_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/main/main.component */ "./src/app/components/main/main.component.ts");
































Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_29___default.a);
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_2__["SpaAngularEditableComponentsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["AemAngularCoreWcmComponentsTabsV1"],
            _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_13__["AemAngularCoreWcmComponentsTitleV2"],
            _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_14__["AemAngularCoreWcmComponentsBreadCrumbV2"],
            _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_15__["AemAngularCoreWcmComponentsNavigationV1"],
            _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_16__["AemAngularCoreWcmComponentsButtonV1"],
            _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_17__["AemAngularCoreWcmComponentsImageV2"],
            _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_18__["AemAngularCoreWcmComponentsDownloadV1"],
            _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_19__["AemAngularCoreWcmComponentsListV2"],
            _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_21__["AemAngularCoreWcmComponentsAccordionV1"],
            _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_20__["AemAngularCoreWcmComponentsSeparatorV1"],
            _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_22__["AemAngularCoreWcmComponentsLanguageNavigationV1"],
        ],
        providers: [
            _components_model_manager_service__WEBPACK_IMPORTED_MODULE_10__["ModelManagerService"],
            { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"], useValue: "/" },
            { provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["LOCALE_ID"], useValue: 'pt-br' },
        ],
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"],
            _components_text_text_component__WEBPACK_IMPORTED_MODULE_23__["TextComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
            _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_25__["ClockComponent"],
            _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_26__["WeatherComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_30__["MainComponent"],
        ],
        entryComponents: [
            _components_page_page_component__WEBPACK_IMPORTED_MODULE_11__["PageComponent"],
            _components_text_text_component__WEBPACK_IMPORTED_MODULE_23__["TextComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_24__["LoginComponent"],
            _components_clock_clock_component__WEBPACK_IMPORTED_MODULE_25__["ClockComponent"],
            _components_weather_weather_component__WEBPACK_IMPORTED_MODULE_26__["WeatherComponent"],
            _components_header_header_component__WEBPACK_IMPORTED_MODULE_27__["HeaderComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_28__["FooterComponent"],
            _components_main_main_component__WEBPACK_IMPORTED_MODULE_30__["MainComponent"]
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
    })
], AppModule);



/***/ }),

/***/ "./src/app/auth/services/authentication.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/auth/services/authentication.service.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-storage.service */ "./src/app/auth/services/local-storage.service.ts");




const URL_API = 'http://localhost:3000/logins';
let AuthenticationService = class AuthenticationService {
    constructor(localStorageService, http) {
        this.localStorageService = localStorageService;
        this.http = http;
    }
    setUser(user) {
        this.localStorageService.set('user', user);
    }
    authenticate(login, password) {
        const params = {
            login,
            password,
        };
        return this.http.get(`${URL_API}`, { params });
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthenticationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root",
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/auth/services/local-storage.service.ts":
/*!********************************************************!*\
  !*** ./src/app/auth/services/local-storage.service.ts ***!
  \********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let LocalStorageService = class LocalStorageService {
    constructor() { }
    set(key, object) {
        localStorage.setItem(key, JSON.stringify(object));
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    delete(key) {
        localStorage.removeItem(key);
    }
    deleteAll() {
        localStorage.clear();
    }
};
LocalStorageService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], LocalStorageService);



/***/ }),

/***/ "./src/app/components/clock/clock.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/clock/clock.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".clock-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n.clock-container > p {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  line-height: 1;\n  margin: 0;\n}\n.clock-container .hour {\n  font-weight: 700;\n  font-size: 144px;\n}\n.clock-container .date {\n  font-weight: 400;\n  font-size: 14px;\n  margin: -10px 0 0 0;\n}\n@media (max-width: 1200px) {\n  .clock-container .hour {\n    font-weight: 700;\n    font-size: 108px;\n  }\n}\n@media (max-width: 800px) {\n  .clock-container {\n    display: none;\n  }\n\n  div:has(div.clock-container) {\n    display: none;\n  }\n}\n@media screen and (max-height: 620px) {\n  .clock-container .hour {\n    font-weight: 700;\n    font-size: 80px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbG9jay9DOlxcVXNlcnNcXGdhYnJpZWwubWVuZXplc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhclxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsb2NrXFxjbG9jay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jbG9jay9jbG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ0NGO0FEQ0U7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNDSjtBREVFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKO0FER0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0RKO0FES0E7RUFFSTtJQUNFLGdCQUFBO0lBQ0EsZ0JBQUE7RUNISjtBQUNGO0FET0E7RUFDRTtJQUNFLGFBQUE7RUNMRjs7RURRQTtJQUNFLGFBQUE7RUNMRjtBQUNGO0FEUUE7RUFFSTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQ1BKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nsb2NrL2Nsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNsb2NrLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuXHJcbiAgPiBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcblxyXG4gIC5ob3VyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE0NHB4O1xyXG4gIH1cclxuXHJcbiAgLmRhdGUge1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbjogLTEwcHggMCAwIDA7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XHJcbiAgLmNsb2NrLWNvbnRhaW5lciB7XHJcbiAgICAuaG91ciB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTA4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuY2xvY2stY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICBkaXY6aGFzKGRpdi5jbG9jay1jb250YWluZXIpIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjIwcHgpIHtcclxuICAuY2xvY2stY29udGFpbmVyIHtcclxuICAgIC5ob3VyIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuY2xvY2stY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4uY2xvY2stY29udGFpbmVyID4gcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIG1hcmdpbjogMDtcbn1cbi5jbG9jay1jb250YWluZXIgLmhvdXIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE0NHB4O1xufVxuLmNsb2NrLWNvbnRhaW5lciAuZGF0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAtMTBweCAwIDAgMDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuY2xvY2stY29udGFpbmVyIC5ob3VyIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMTA4cHg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA4MDBweCkge1xuICAuY2xvY2stY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgZGl2OmhhcyhkaXYuY2xvY2stY29udGFpbmVyKSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDYyMHB4KSB7XG4gIC5jbG9jay1jb250YWluZXIgLmhvdXIge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiA4MHB4O1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/components/clock/clock.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/clock/clock.component.ts ***!
  \*****************************************************/
/*! exports provided: ClockComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClockComponent", function() { return ClockComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let ClockComponent = class ClockComponent {
    constructor() { }
    ngOnInit() {
        this.subscription = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["timer"])(0, 1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(() => new Date()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])())
            .subscribe((time) => {
            this.date = time;
        });
    }
};
ClockComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-clock",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./clock.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/clock/clock.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./clock.component.scss */ "./src/app/components/clock/clock.component.scss")).default]
    })
], ClockComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/clock")(ClockComponent);


/***/ }),

/***/ "./src/app/components/container/container.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/container/container.component.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("angularapp/components/spa")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMContainerComponent"]);


/***/ }),

/***/ "./src/app/components/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".footer-container {\n  height: 100px;\n  display: flex;\n  flex-direction: row;\n  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);\n  color: #ffffff;\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n}\n.footer-container .left-container,\n.footer-container .right-container {\n  width: 50%;\n}\n.footer-container .left-container {\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 35px;\n  border-right: 1px solid #ffffff;\n}\n.footer-container .left-container > p {\n  width: 500px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: right;\n}\n.footer-container .right-container {\n  display: flex;\n  justify-content: flex-end;\n}\n.footer-container .right-container .time-session {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n.footer-container .right-container .time-session__label {\n  width: 100px;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 21px;\n  text-align: right;\n}\n.footer-container .right-container .time-session__timer {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 0 34px;\n  line-height: 1;\n}\n.footer-container .right-container .time-session__timer > p {\n  margin: 0;\n}\n.footer-container .right-container .time-session__timer .seconds-number {\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 48px;\n  text-align: center;\n  color: #ffffff;\n}\n.footer-container .right-container .btn-keep-browsing,\n.footer-container .right-container .btn-logout {\n  width: 131px;\n  border: 0;\n  font-family: \"Poppins\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  cursor: pointer;\n  transition: filter 0.2s;\n}\n.footer-container .right-container .btn-keep-browsing:hover,\n.footer-container .right-container .btn-logout:hover {\n  filter: brightness(0.9);\n}\n.footer-container .right-container .btn-keep-browsing {\n  color: #c13216;\n  background: #ffffff;\n}\n.footer-container .right-container .btn-logout {\n  color: #ffffff;\n  background: linear-gradient(90.16deg, #33383d 0%, #1c1d20 100%);\n}\n@media screen and (max-width: 768px) {\n  .footer-container .left-container {\n    display: none;\n  }\n  .footer-container .right-container {\n    width: 100%;\n    flex-direction: row-reverse;\n  }\n  .footer-container .right-container .btn-keep-browsing {\n    width: 100%;\n  }\n  .footer-container .right-container .time-session {\n    display: none;\n  }\n}\n@media screen and (max-height: 620px) {\n  .footer-container {\n    height: 75px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxnYWJyaWVsLm1lbmV6ZXNcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXJcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLCtEQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNDRjtBRENFOztFQUVFLFVBQUE7QUNDSjtBREVFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNBTjtBRElFO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FDRko7QURJSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FDRk47QURJTTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FES007RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNIUjtBREtRO0VBQ0UsU0FBQTtBQ0hWO0FETVE7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FDSlY7QURTSTs7RUFFRSxZQUFBO0VBQ0EsU0FBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBRUEsZUFBQTtFQUNBLHVCQUFBO0FDVE47QURXTTs7RUFDRSx1QkFBQTtBQ1JSO0FEWUk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNWTjtBRGFJO0VBQ0UsY0FBQTtFQUNBLCtEQUFBO0FDWE47QURnQkE7RUFFSTtJQUNFLGFBQUE7RUNkSjtFRGlCRTtJQUNFLFdBQUE7SUFDQSwyQkFBQTtFQ2ZKO0VEaUJJO0lBQ0UsV0FBQTtFQ2ZOO0VEa0JJO0lBQ0UsYUFBQTtFQ2hCTjtBQUNGO0FEcUJBO0VBQ0U7SUFDRSxZQUFBO0VDbkJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwLjE2ZGVnLCAjMzMzODNkIDAlLCAjMWMxZDIwIDEwMCUpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC5sZWZ0LWNvbnRhaW5lcixcclxuICAucmlnaHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgfVxyXG5cclxuICAubGVmdC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ZmZmZmZjtcclxuXHJcbiAgICA+IHAge1xyXG4gICAgICB3aWR0aDogNTAwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcblxyXG4gICAgLnRpbWUtc2Vzc2lvbiB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICZfX2xhYmVsIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjFweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJl9fdGltZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMzRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuXHJcbiAgICAgICAgPiBwIHtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zZWNvbmRzLW51bWJlciB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1rZWVwLWJyb3dzaW5nLFxyXG4gICAgLmJ0bi1sb2dvdXQge1xyXG4gICAgICB3aWR0aDogMTMxcHg7XHJcbiAgICAgIGJvcmRlcjogMDtcclxuXHJcbiAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xyXG5cclxuICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWtlZXAtYnJvd3Npbmcge1xyXG4gICAgICBjb2xvcjogI2MxMzIxNjtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIH1cclxuXHJcbiAgICAuYnRuLWxvZ291dCB7XHJcbiAgICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTAuMTZkZWcsICMzMzM4M2QgMCUsICMxYzFkMjAgMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgIC5sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9O1xyXG5cclxuICAgIC5yaWdodC1jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG5cclxuICAgICAgLmJ0bi1rZWVwLWJyb3dzaW5nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnRpbWUtc2Vzc2lvbiB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfSAgICBcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA2MjBweCkge1xyXG4gIC5mb290ZXItY29udGFpbmVyIHtcclxuICAgIGhlaWdodDogNzVweDtcclxuICB9XHJcbn1cclxuIiwiLmZvb3Rlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTAuMTZkZWcsICMzMzM4M2QgMCUsICMxYzFkMjAgMTAwJSk7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1jb250YWluZXIsXG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5mb290ZXItY29udGFpbmVyIC5sZWZ0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmZmZmZmY7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAubGVmdC1jb250YWluZXIgPiBwIHtcbiAgd2lkdGg6IDUwMHB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLnRpbWUtc2Vzc2lvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLnRpbWUtc2Vzc2lvbl9fbGFiZWwge1xuICB3aWR0aDogMTAwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLnRpbWUtc2Vzc2lvbl9fdGltZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAzNHB4O1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLnRpbWUtc2Vzc2lvbl9fdGltZXIgPiBwIHtcbiAgbWFyZ2luOiAwO1xufVxuLmZvb3Rlci1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciAudGltZS1zZXNzaW9uX190aW1lciAuc2Vjb25kcy1udW1iZXIge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZmZmZmZmO1xufVxuLmZvb3Rlci1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciAuYnRuLWtlZXAtYnJvd3NpbmcsXG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIC5idG4tbG9nb3V0IHtcbiAgd2lkdGg6IDEzMXB4O1xuICBib3JkZXI6IDA7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDEycHg7XG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogZmlsdGVyIDAuMnM7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIC5idG4ta2VlcC1icm93c2luZzpob3Zlcixcbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLmJ0bi1sb2dvdXQ6aG92ZXIge1xuICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcbn1cbi5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIgLmJ0bi1rZWVwLWJyb3dzaW5nIHtcbiAgY29sb3I6ICNjMTMyMTY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG59XG4uZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIC5idG4tbG9nb3V0IHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MC4xNmRlZywgIzMzMzgzZCAwJSwgIzFjMWQyMCAxMDAlKTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIgLmxlZnQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5mb290ZXItY29udGFpbmVyIC5yaWdodC1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuICAuZm9vdGVyLWNvbnRhaW5lciAucmlnaHQtY29udGFpbmVyIC5idG4ta2VlcC1icm93c2luZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmZvb3Rlci1jb250YWluZXIgLnJpZ2h0LWNvbnRhaW5lciAudGltZS1zZXNzaW9uIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNjIwcHgpIHtcbiAgLmZvb3Rlci1jb250YWluZXIge1xuICAgIGhlaWdodDogNzVweDtcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_auth_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth/services/local-storage.service */ "./src/app/auth/services/local-storage.service.ts");







let FooterComponent = class FooterComponent {
    constructor(changeDetector, router, localStorageService) {
        this.changeDetector = changeDetector;
        this.router = router;
        this.localStorageService = localStorageService;
        this.startAt = 180;
        this.reset = false;
    }
    ngOnInit() {
        this.startTimer();
    }
    keepBrowsing() {
        this.reset = true;
        this.stopTimer();
        this.startTimer();
    }
    logout() {
        this.stopTimer();
        this.router.navigate(["/content/angularapp/us/en/login.html"]);
    }
    // Timer
    startTimer() {
        const time = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(1000);
        this.timer = this.startAt;
        this.changeDetector.detectChanges();
        this.subscription = time
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(this.startAt), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((v) => this.startAt - (v + 1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => {
            if (!this.reset) {
                this.stopTimer();
                this.localStorageService.deleteAll();
                this.router.navigate(["/content/angularapp/us/en/login.html"]);
            }
        }))
            .subscribe((value) => {
            this.reset = false;
            this.timer = value;
            this.changeDetector.detectChanges();
        });
    }
    stopTimer() {
        this.subscription.unsubscribe();
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_auth_services_local_storage_service__WEBPACK_IMPORTED_MODULE_6__["LocalStorageService"] }
];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-footer",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/footer/footer.component.scss")).default]
    })
], FooterComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/footer")(FooterComponent);


/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".header-container {\n  width: 100%;\n  height: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvQzpcXFVzZXJzXFxnYWJyaWVsLm1lbmV6ZXNcXERvY3VtZW50c1xcQUVNXFxQcm9qZXRvc1xcYWVtLWFuZ3VsYXJcXHVpLmZyb250ZW5kL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXItY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNjBweDtcclxufSIsIi5oZWFkZXItY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjYwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() { }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], HeaderComponent.prototype, "image", void 0);
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-header",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")).default]
    })
], HeaderComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/header")(HeaderComponent);


/***/ }),

/***/ "./src/app/components/import-components.ts":
/*!*************************************************!*\
  !*** ./src/app/components/import-components.ts ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/container.component */ "./src/app/components/container/container.component.ts");
/* harmony import */ var _responsive_grid_responsive_grid_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./responsive-grid/responsive-grid.component */ "./src/app/components/responsive-grid/responsive-grid.component.ts");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/title/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-title-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/breadcrumb/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-breadcrumb-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/button/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-button-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/image/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-image-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/download/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-download-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/list/v2 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-list-v2.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/authoring/separator/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-separator-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/accordion/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-accordion-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/tabs/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-tabs-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @adobe/aem-core-components-angular-base/layout/language-navigation/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-layout-language-navigation-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/containers/container/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-container-v1.js");
/* harmony import */ var _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @adobe/aem-core-components-angular-spa/core */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-core.js");
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
















/**
 * Normal MapTo - maps angular components to aem models
 */
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/navigation')(_adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_layout_navigation_v1__WEBPACK_IMPORTED_MODULE_5__["NavigationV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/separator')(_adobe_aem_core_components_angular_base_authoring_separator_v1__WEBPACK_IMPORTED_MODULE_10__["SeparatorV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/container')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], { isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/experiencefragment')(_adobe_aem_core_components_angular_spa_containers_container_v1__WEBPACK_IMPORTED_MODULE_14__["ContainerV1Component"], { isEmpty: _adobe_aem_core_components_angular_spa_core__WEBPACK_IMPORTED_MODULE_15__["ContainerIsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/download')(_adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_download_v1__WEBPACK_IMPORTED_MODULE_8__["DownloadV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/languagenavigation')(_adobe_aem_core_components_angular_base_layout_language_navigation_v1__WEBPACK_IMPORTED_MODULE_13__["LanguageNavigationV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/list')(_adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_list_v2__WEBPACK_IMPORTED_MODULE_9__["ListV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/breadcrumb')(_adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_layout_breadcrumb_v2__WEBPACK_IMPORTED_MODULE_4__["BreadCrumbV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/button')(_adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_button_v1__WEBPACK_IMPORTED_MODULE_6__["ButtonV1IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/image')(_adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_image_v2__WEBPACK_IMPORTED_MODULE_7__["ImageV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/title')(_adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2Component"], { isEmpty: _adobe_aem_core_components_angular_base_authoring_title_v2__WEBPACK_IMPORTED_MODULE_3__["TitleV2IsEmptyFn"] });
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/accordion')(_adobe_aem_core_components_angular_spa_containers_accordion_v1__WEBPACK_IMPORTED_MODULE_11__["AccordionV1Component"]);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])('angularapp/components/tabs')(_adobe_aem_core_components_angular_spa_containers_tabs_v1__WEBPACK_IMPORTED_MODULE_12__["TabsV1Component"]);
/**
 * Demonstrating lazy loading external modules and components.
 * Loading the following components with LazyMapTo - so they are loaded only when we need them!
 */
const TeaserV1Component = () => __webpack_require__.e(/*! import() | adobe-aem-core-components-angular-base-authoring-teaser-v1 */ "adobe-aem-core-components-angular-base-authoring-teaser-v1").then(__webpack_require__.bind(null, /*! @adobe/aem-core-components-angular-base/authoring/teaser/v1 */ "./node_modules/@adobe/aem-core-components-angular-base/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-base-authoring-teaser-v1.js")).then(Module => Module.TeaserV1Component);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/teaser')(TeaserV1Component);
const CarouselV1Component = () => __webpack_require__.e(/*! import() | adobe-aem-core-components-angular-spa-containers-carousel-v1 */ "adobe-aem-core-components-angular-spa-containers-carousel-v1").then(__webpack_require__.bind(null, /*! @adobe/aem-core-components-angular-spa/containers/carousel/v1 */ "./node_modules/@adobe/aem-core-components-angular-spa/__ivy_ngcc__/fesm2015/adobe-aem-core-components-angular-spa-containers-carousel-v1.js")).then(Module => Module.CarouselV1Component);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/carousel')(CarouselV1Component);
/**
 * Demonstrates lazy loading an internal component.
 */
/**
 * Default Edit configuration for the Text component that interact with the Core Text component and sub-types
 */
const TextEditConfig = {
    emptyLabel: 'Text',
    isEmpty: cqModel => !cqModel || !cqModel.text || cqModel.text.trim().length < 1
};
const LazyTextModule = () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./text/text.component */ "./src/app/components/text/text.component.ts")).then(Module => Module.TextComponent);
Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["LazyMapTo"])('angularapp/components/text')(LazyTextModule, TextEditConfig);


/***/ }),

/***/ "./src/app/components/login/login.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 60px;\n  line-height: 76px;\n  color: #e0e0e0;\n  margin-bottom: 0;\n}\n\n.subtitle {\n  margin-bottom: 135px;\n  width: 300px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  color: #e0e0e0;\n}\n\n.form-signin {\n  display: flex;\n  flex-direction: column;\n  max-width: 379px;\n}\n\n.form-signin__heading {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 30px;\n  line-height: 38px;\n  color: #e0e0e0;\n  margin: 0;\n}\n\n.form-signin__input {\n  height: 60px;\n  margin-top: 32px;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 20px;\n  background: transparent;\n  border: 1px solid #ffffff;\n  box-sizing: border-box;\n  border-radius: 50px;\n  color: #e0e0e0;\n  padding-left: 20px;\n}\n\n.form-signin .invalid {\n  border-color: #e9b425;\n}\n\n.form-signin__error-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 40px;\n  margin-top: 28px;\n}\n\n.form-signin__error-message > p {\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 20px;\n  text-align: center;\n  color: #e9b425;\n}\n\n.form-signin__button {\n  height: 67px;\n  background: linear-gradient(90deg, #ff2d04 0%, #c13216 100%);\n  box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);\n  border-radius: 50px;\n  border: 0;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 18px;\n  line-height: 23px;\n  color: #ffffff;\n  margin-top: 47px;\n  cursor: pointer;\n  transition: filter 0.2s;\n}\n\n.form-signin__button:hover {\n  filter: brightness(0.9);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9DOlxcVXNlcnNcXGdhYnJpZWwubWVuZXplc1xcRG9jdW1lbnRzXFxBRU1cXFByb2pldG9zXFxhZW0tYW5ndWxhclxcdWkuZnJvbnRlbmQvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURDRTtFQUNFLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UscUJBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FDRko7O0FESUk7RUFDRSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNGTjs7QURNRTtFQUNFLFlBQUE7RUFDQSw0REFBQTtFQUNBLGtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FDSko7O0FETUk7RUFDRSx1QkFBQTtBQ0pOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDYwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMzVweDtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgY29sb3I6ICNlMGUwZTA7XHJcbn1cclxuXHJcbi5mb3JtLXNpZ25pbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1heC13aWR0aDogMzc5cHg7XHJcblxyXG4gICZfX2hlYWRpbmcge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgJl9faW5wdXQge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMzJweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmZmZmY7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGNvbG9yOiAjZTBlMGUwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLmludmFsaWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTliNDI1O1xyXG4gIH1cclxuXHJcbiAgJl9fZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuXHJcbiAgICA+IHAge1xyXG4gICAgICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICNlOWI0MjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19idXR0b24ge1xyXG4gICAgaGVpZ2h0OiA2N3B4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmYyZDA0IDAlLCAjYzEzMjE2IDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjNweDtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgbWFyZ2luLXRvcDogNDdweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGZpbHRlciAwLjJzO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBmaWx0ZXI6IGJyaWdodG5lc3MoMC45KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcclxufVxyXG4iLCIudGl0bGUge1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDc2cHg7XG4gIGNvbG9yOiAjZTBlMGUwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uc3VidGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiAxMzVweDtcbiAgd2lkdGg6IDMwMHB4O1xuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjZTBlMGUwO1xufVxuXG4uZm9ybS1zaWduaW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXgtd2lkdGg6IDM3OXB4O1xufVxuLmZvcm0tc2lnbmluX19oZWFkaW5nIHtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzOHB4O1xuICBjb2xvcjogI2UwZTBlMDtcbiAgbWFyZ2luOiAwO1xufVxuLmZvcm0tc2lnbmluX19pbnB1dCB7XG4gIGhlaWdodDogNjBweDtcbiAgbWFyZ2luLXRvcDogMzJweDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmZmZmZjtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgY29sb3I6ICNlMGUwZTA7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbn1cbi5mb3JtLXNpZ25pbiAuaW52YWxpZCB7XG4gIGJvcmRlci1jb2xvcjogI2U5YjQyNTtcbn1cbi5mb3JtLXNpZ25pbl9fZXJyb3ItbWVzc2FnZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDQwcHg7XG4gIG1hcmdpbi10b3A6IDI4cHg7XG59XG4uZm9ybS1zaWduaW5fX2Vycm9yLW1lc3NhZ2UgPiBwIHtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZTliNDI1O1xufVxuLmZvcm0tc2lnbmluX19idXR0b24ge1xuICBoZWlnaHQ6IDY3cHg7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmMmQwNCAwJSwgI2MxMzIxNiAxMDAlKTtcbiAgYm94LXNoYWRvdzogaW5zZXQgNXB4IDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4xNSk7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMDtcbiAgZm9udC1mYW1pbHk6IFwiTWFyayBQcm9cIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAyM3B4O1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgbWFyZ2luLXRvcDogNDdweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBmaWx0ZXIgMC4ycztcbn1cbi5mb3JtLXNpZ25pbl9fYnV0dG9uOmhvdmVyIHtcbiAgZmlsdGVyOiBicmlnaHRuZXNzKDAuOSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth/services/authentication.service */ "./src/app/auth/services/authentication.service.ts");






let LoginComponent = class LoginComponent {
    constructor(formBuilder, router, authenticationService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.title = "Welcome";
        this.subtitle = "Text your message here";
        this.formTitle = "Login";
        this.userPlaceholder = "User";
        this.passwordPlaceholder = "Password";
        this.buttonName = "Sign in";
        this.submitted = false;
        this.usernamePattern = "^[A-Za-z.]+$";
        this.passwordPattern = "^[0-9]*$";
    }
    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.usernamePattern)],
            ],
            password: [
                "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(this.passwordPattern)],
            ],
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            console.log("form invalido");
            return;
        }
        this.authenticate(this.loginForm.value.username, this.loginForm.value.password).subscribe((response) => {
            this.user = response[0];
            if (this.user) {
                this.authenticationService.setUser(this.user);
                this.invalidCredentials = false;
                this.router.navigate(["content/angularapp/us/en/home.html"]); // refatorar
            }
            else {
                console.log("invalido");
                this.invalidCredentials = true;
            }
        });
    }
    get username() {
        return this.loginForm.get("username");
    }
    get password() {
        return this.loginForm.get("password");
    }
    authenticate(login, password) {
        return this.authenticationService.authenticate(login, password);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_auth_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "subtitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "formTitle", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "userPlaceholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "passwordPlaceholder", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], LoginComponent.prototype, "buttonName", void 0);
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-login",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/components/login/login.component.scss")).default]
    })
], LoginComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/login")(LoginComponent);


/***/ }),

/***/ "./src/app/components/main/main.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/main/main.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let MainComponent = class MainComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-main',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/main/main.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main.component.scss */ "./src/app/components/main/main.component.scss")).default]
    })
], MainComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/main")(MainComponent);


/***/ }),

/***/ "./src/app/components/model-manager.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/model-manager.service.ts ***!
  \*****************************************************/
/*! exports provided: ModelManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelManagerService", function() { return ModelManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-spa-page-model-manager */ "./node_modules/@adobe/aem-spa-page-model-manager/dist/aem-spa-page-model-manager.js");
/* harmony import */ var _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");



let ModelManagerService = class ModelManagerService {
    getData(cfg) {
        return _adobe_aem_spa_page_model_manager__WEBPACK_IMPORTED_MODULE_1__["ModelManager"].getData(cfg);
    }
};
ModelManagerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], ModelManagerService);



/***/ }),

/***/ "./src/app/components/page/page.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/page/page.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZS9wYWdlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/page/page.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/page/page.component.ts ***!
  \***************************************************/
/*! exports provided: PageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageComponent", function() { return PageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _model_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../model-manager.service */ "./src/app/components/model-manager.service.ts");





let PageComponent = class PageComponent {
    constructor(route, modelManagerService) {
        this.route = route;
        this.modelManagerService = modelManagerService;
        this.modelManagerService
            .getData({ path: this.route.snapshot.data.path })
            .then((data) => {
            this.path = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].PATH_PROP];
            this.items = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_PROP];
            this.itemsOrder = data[_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["Constants"].ITEMS_ORDER_PROP];
        });
    }
};
PageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _model_manager_service__WEBPACK_IMPORTED_MODULE_4__["ModelManagerService"] }
];
PageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-main",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/page/page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./page.component.css */ "./src/app/components/page/page.component.css")).default]
    })
], PageComponent);



/***/ }),

/***/ "./src/app/components/responsive-grid/responsive-grid.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/responsive-grid/responsive-grid.component.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["MapTo"])("wcm/foundation/components/responsivegrid")(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_0__["AEMResponsiveGridComponent"]);


/***/ }),

/***/ "./src/app/components/text/text.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/text/text.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".text-header {\r\n  font-family: \"Inconsolata\";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 24px;\r\n  line-height: 25px;\r\n  letter-spacing: -0.08em;\r\n  text-transform: uppercase;\r\n\r\n  color: #333333;\r\n}\r\n\r\n.title {\r\n  font-family: \"Space Mono\";\r\n  font-style: normal;\r\n  font-weight: 700;\r\n  font-size: 64px;\r\n  line-height: 95px;\r\n  letter-spacing: -0.035em;\r\n\r\n  color: #333333;\r\n\r\n  margin-bottom: 36px;\r\n}\r\n\r\n.subtitle {\r\n  font-family: \"Space Mono\";\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  font-size: 20px;\r\n  line-height: 36px;\r\n  letter-spacing: -0.035em;\r\n\r\n  color: #4f4f4f;\r\n\r\n  margin-bottom: 64px;\r\n}\r\n\r\n.text-footer {\r\n  font-family: \"Montserrat\";\r\n  font-style: normal;\r\n  font-weight: 500;\r\n  font-size: 14px;\r\n  line-height: 17px;\r\n\r\n  text-align: center;\r\n  color: #bdbdbd;\r\n}\r\n\r\n@media (max-width: 770px) {\r\n  .title {\r\n    font-size: 54px;\r\n    line-height: 71px; \r\n  \r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .subtitle {\r\n    font-size: 20px;\r\n    line-height: 27px; \r\n  \r\n    margin-bottom: 66px;\r\n  }\r\n}\r\n\r\n@media (max-width: 500px) {\r\n  .title {\r\n    font-size: 42px;\r\n    line-height: 61px; \r\n  \r\n    margin-top: 30px;\r\n    margin-bottom: 30px;\r\n  }\r\n\r\n  .subtitle {\r\n    font-size: 18px;\r\n    line-height: 27px; \r\n  \r\n    margin-bottom: 36px;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsdUJBQXVCO0VBQ3ZCLHlCQUF5Qjs7RUFFekIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCOztFQUV4QixjQUFjOztFQUVkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsd0JBQXdCOztFQUV4QixjQUFjOztFQUVkLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixpQkFBaUI7O0VBRWpCLGtCQUFrQjtFQUNsQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCOztJQUVqQixtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjs7SUFFakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGVBQWU7SUFDZixpQkFBaUI7O0lBRWpCLG1CQUFtQjtFQUNyQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZXh0L3RleHQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0LWhlYWRlciB7XHJcbiAgZm9udC1mYW1pbHk6IFwiSW5jb25zb2xhdGFcIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjA4ZW07XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgY29sb3I6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiU3BhY2UgTW9ub1wiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogNjRweDtcclxuICBsaW5lLWhlaWdodDogOTVweDtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuMDM1ZW07XHJcblxyXG4gIGNvbG9yOiAjMzMzMzMzO1xyXG5cclxuICBtYXJnaW4tYm90dG9tOiAzNnB4O1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNwYWNlIE1vbm9cIjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjAzNWVtO1xyXG5cclxuICBjb2xvcjogIzRmNGY0ZjtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcclxufVxyXG5cclxuLnRleHQtZm9vdGVyIHtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNiZGJkYmQ7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NzBweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzFweDsgXHJcbiAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4OyBcclxuICBcclxuICAgIG1hcmdpbi1ib3R0b206IDY2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcclxuICAudGl0bGUge1xyXG4gICAgZm9udC1zaXplOiA0MnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDYxcHg7IFxyXG4gIFxyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7IFxyXG4gIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogMzZweDtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/text/text.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/text/text.component.ts ***!
  \***************************************************/
/*! exports provided: TextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextComponent", function() { return TextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



let TextComponent = class TextComponent {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
        this.editAttribute = true;
    }
    get content() {
        return this.richText
            ? this.sanitizer.bypassSecurityTrustHtml(this.text)
            : this.text;
    }
};
TextComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "richText", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "text", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TextComponent.prototype, "itemName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("innerHtml")
], TextComponent.prototype, "content", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])("attr.data-rte-editelement")
], TextComponent.prototype, "editAttribute", void 0);
TextComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-text",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./text.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/text/text.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./text.component.css */ "./src/app/components/text/text.component.css")).default]
    })
], TextComponent);



/***/ }),

/***/ "./src/app/components/weather/weather.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/weather/weather.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".weather-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-family: \"Mark Pro\";\n  font-style: normal;\n  color: #222222;\n  margin: 0;\n}\n.weather-container .local {\n  font-weight: 400;\n  font-size: 14px;\n}\n.weather-container .temperature-container {\n  display: flex;\n  flex-direction: row;\n}\n.weather-container .temperature-container > .icon {\n  width: 40px;\n  height: 40px;\n  margin-right: 10px;\n}\n.weather-container .temperature-container > .temperature {\n  font-weight: 700;\n  font-size: 48px;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL0M6XFxVc2Vyc1xcZ2FicmllbC5tZW5lemVzXFxEb2N1bWVudHNcXEFFTVxcUHJvamV0b3NcXGFlbS1hbmd1bGFyXFx1aS5mcm9udGVuZC9zcmNcXGFwcFxcY29tcG9uZW50c1xcd2VhdGhlclxcd2VhdGhlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtBQ0FGO0FERUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FDREo7QURHSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNETjtBRElJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtBQ0ZOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy93ZWF0aGVyL3dlYXRoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2VhdGhlci1jb250YWluZXIge1xyXG4gIC8vbWluLXdpZHRoOiAxNTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJNYXJrIFByb1wiO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBjb2xvcjogIzIyMjIyMjtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIC5sb2NhbCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgICA+IC5pY29uIHtcclxuICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG5cclxuICAgID4gLnRlbXBlcmF0dXJlIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi53ZWF0aGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBcIk1hcmsgUHJvXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgY29sb3I6ICMyMjIyMjI7XG4gIG1hcmdpbjogMDtcbn1cbi53ZWF0aGVyLWNvbnRhaW5lciAubG9jYWwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4ud2VhdGhlci1jb250YWluZXIgLnRlbXBlcmF0dXJlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ud2VhdGhlci1jb250YWluZXIgLnRlbXBlcmF0dXJlLWNvbnRhaW5lciA+IC5pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuLndlYXRoZXItY29udGFpbmVyIC50ZW1wZXJhdHVyZS1jb250YWluZXIgPiAudGVtcGVyYXR1cmUge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIG1hcmdpbjogMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/weather/weather.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/weather/weather.component.ts ***!
  \*********************************************************/
/*! exports provided: WeatherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherComponent", function() { return WeatherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @adobe/aem-angular-editable-components */ "./node_modules/@adobe/aem-angular-editable-components/__ivy_ngcc__/fesm2015/adobe-aem-angular-editable-components.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/weather.service */ "./src/app/services/weather.service.ts");




let WeatherComponent = class WeatherComponent {
    constructor(weatherService) {
        this.weatherService = weatherService;
        this.location = "";
        this.icon = "";
        this.temperature = "";
    }
    ngOnInit() {
        this.weatherService.getLocalWeather().subscribe((data) => {
            this.location = `${data.location.name}, ${data.location.region}`;
            this.temperature = data.current.temp_c;
            this.icon = data.current.condition.icon;
        });
    }
};
WeatherComponent.ctorParameters = () => [
    { type: src_app_services_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] }
];
WeatherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: "app-weather",
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./weather.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/weather/weather.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./weather.component.scss */ "./src/app/components/weather/weather.component.scss")).default]
    })
], WeatherComponent);

Object(_adobe_aem_angular_editable_components__WEBPACK_IMPORTED_MODULE_1__["MapTo"])("angularapp/components/weather")(WeatherComponent);


/***/ }),

/***/ "./src/app/services/weather.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/*! exports provided: WeatherService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function() { return WeatherService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../auth/services/local-storage.service */ "./src/app/auth/services/local-storage.service.ts");




let WeatherService = class WeatherService {
    constructor(http, localStorageService) {
        this.http = http;
        this.localStorageService = localStorageService;
        this.weartherApiUrl = "http://api.weatherapi.com/v1";
        this.apiKey = "003875452ea74cc99b9204437220305";
    }
    getLocalWeather() {
        var _a;
        const coordinates = (_a = this.localStorageService.get("user")) === null || _a === void 0 ? void 0 : _a.local;
        const city = "vila velha";
        return this.http.get(`${this.weartherApiUrl}/current.json?key=${this.apiKey}&q=${coordinates !== null && coordinates !== void 0 ? coordinates : city}`);
    }
};
WeatherService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: _auth_services_local_storage_service__WEBPACK_IMPORTED_MODULE_3__["LocalStorageService"] }
];
WeatherService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], WeatherService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2018 Adobe Systems Incorporated
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/
const environment = {
    appRoot: "/content/angularapp/us/en/login.html",
    production: false,
    publicUrl: '/etc.clientlibs/angularapp/clientlibs/clientlib-angular/resources',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
else {
    // In development mode, redirect from "/" to app root
    if (location.pathname === "/" && _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot) {
        location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].appRoot;
    }
}
const initialStateScriptTag = document.getElementById("__AEM_STATE__");
if (!!initialStateScriptTag) {
    try {
        const initialState = JSON.parse(initialStateScriptTag.innerHTML);
        // @ts-ignore
        window.initialModel = initialState.rootModel;
        initialStateScriptTag.remove();
    }
    catch (err) {
        console.warn("failed to hydrate app", err);
    }
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\gabriel.menezes\Documents\AEM\Projetos\aem-angular\ui.frontend\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
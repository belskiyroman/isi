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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-drawer-container autosize>\n  <mat-toolbar color=\"primary\">\n    <button type=\"button\" mat-button (click)=\"carForm.open()\" autofocus>\n      Add a car\n    </button>\n  </mat-toolbar>\n\n  <mat-drawer [opened]=\"carForm.isOpen\" mode=\"side\" position=\"end\">\n    <app-car-form></app-car-form>\n  </mat-drawer>\n\n  <app-car-list></app-car-list>\n</mat-drawer-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/car-form-base/car-form-base.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/car-form-base/car-form-base.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\">\n  <div>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Full name\" formControlName=\"fullName\">\n      <mat-error *ngIf=\"formGroup.controls['fullName'].hasError('required')\">\n        Name is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n  </div>\n  <div>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Vehicle ID\" formControlName=\"vehicleID\">\n      <mat-error *ngIf=\"formGroup.controls['vehicleID'].hasError('required')\">\n        Vehicle ID is <strong>required</strong>\n      </mat-error>\n    </mat-form-field>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/car-form-detail/car-form-detail.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/car-form-detail/car-form-detail.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"formGroup\">\n  <div class=\"row\">\n    <div class=\"col\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Model\" formControlName=\"model\">\n        <mat-error *ngIf=\"formGroup.controls['model'].hasError('required')\">\n          Model is <strong>required</strong>\n        </mat-error>\n      </mat-form-field>\n    </div>\n    <div class=\"col\">\n      <mat-form-field class=\"full-width\">\n        <input matInput placeholder=\"Year\" formControlName=\"year\">\n        <mat-error *ngIf=\"formGroup.controls['year'].hasError('required')\">\n          Year is <strong>required</strong>\n        </mat-error>\n        <mat-error *ngIf=\"formGroup.controls['year'].hasError('min')\">\n          A car must not be older than 20 years\n        </mat-error>\n        <mat-error\n          *ngIf=\"formGroup.controls['year'].hasError('maxLength')\n              || formGroup.controls['year'].hasError('max')\n        \">\n          The year is an incorrect value\n        </mat-error>\n      </mat-form-field>\n    </div>\n  </div>\n\n  <mat-form-field class=\"full-width\">\n    <mat-label>Type</mat-label>\n    <mat-select formControlName=\"type\">\n      <mat-option *ngFor=\"let type of carTypes\" [value]=\"type.value\">{{type.title}}</mat-option>\n    </mat-select>\n    <mat-error *ngIf=\"formGroup.controls['type'].hasError('required')\">\n      Type is <strong>required</strong>\n    </mat-error>\n  </mat-form-field>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/car-form/car-form.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/car-form/car-form.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"carForm\" (ngSubmit)=\"onSubmit()\">\n  <mat-tab-group mat-stretch-tabs>\n    <mat-tab label=\"General\">\n      <div class=\"tab-content\">\n        <app-car-form-base [formGroup]=\"baseInfo\"></app-car-form-base>\n        <mat-error [ngClass]=\"{visible: isTrySubmit && detailInfo.invalid && detailInfo.touched}\">\n          You must complete both tabs.\n        </mat-error>\n      </div>\n    </mat-tab>\n\n    <mat-tab label=\"Detail\">\n      <div class=\"tab-content\">\n        <app-car-form-detail [carTypes]=\"types\" [formGroup]=\"detailInfo\"></app-car-form-detail>\n        <mat-error [ngClass]=\"{visible: isTrySubmit && baseInfo.invalid && baseInfo.touched}\">\n          You must complete both tabs.\n        </mat-error>\n      </div>\n    </mat-tab>\n  </mat-tab-group>\n\n  <div class=\"control\">\n    <button mat-raised-button color=\"primary\" type=\"submit\">Submit</button>\n    <button mat-raised-button color=\"warn\" type=\"button\" (click)=\"onClose()\">Close</button>\n  </div>\n</form>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/car-list/car-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/car-list/car-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"empty-list\" *ngIf=\"!(cars$ | async).length\">\n  <h2>no cars...</h2>\n</div>\n\n<mat-card class=\"card\" matRipple *ngFor=\"let car of cars$ | async; trackBy: trackByCar\" (click)=\"edit(car)\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"header-image\"></div>\n    <mat-card-title>{{car.model}}</mat-card-title>\n    <mat-card-subtitle>{{car.fullName}}</mat-card-subtitle>\n    <button mat-button (click)=\"edit(car)\">edit</button>\n  </mat-card-header>\n  <mat-card-content>\n    <mat-list class=\"list\" role=\"list\">\n      <mat-list-item role=\"listitem\"><b>Model:</b>&nbsp;{{car.model}}</mat-list-item>\n      <mat-list-item role=\"listitem\"><b>Year:</b>&nbsp;{{car.year}}</mat-list-item>\n      <mat-list-item role=\"listitem\"><b>Type:</b>&nbsp;{{car.typeName}}</mat-list-item>\n      <mat-list-item role=\"listitem\"><b>vehicleID:</b>&nbsp;{{car.vehicleID}}</mat-list-item>\n    </mat-list>\n  </mat-card-content>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-drawer-container {\n  height: 100%;\n  min-height: 100vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxza2l5cm9tYW4vcHJvamVjdHMvaXNpLXRlc3Qvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxpQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWRyYXdlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG5tYXQtZHJhd2VyIHt9XG4iLCJtYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLWhlaWdodDogMTAwdmg7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_drawer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/drawer.service */ "./src/app/services/drawer.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(carForm) {
        this.carForm = carForm;
        this.title = 'isi-test';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_drawer_service__WEBPACK_IMPORTED_MODULE_2__["DrawerService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store */ "./src/app/store/index.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/car-form/car-form.component */ "./src/app/components/car-form/car-form.component.ts");
/* harmony import */ var _components_car_form_base_car_form_base_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/car-form-base/car-form-base.component */ "./src/app/components/car-form-base/car-form-base.component.ts");
/* harmony import */ var _components_car_form_detail_car_form_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/car-form-detail/car-form-detail.component */ "./src/app/components/car-form-detail/car-form-detail.component.ts");
/* harmony import */ var _components_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/car-list/car-list.component */ "./src/app/components/car-list/car-list.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _components_car_form_car_form_component__WEBPACK_IMPORTED_MODULE_10__["CarFormComponent"],
                _components_car_form_base_car_form_base_component__WEBPACK_IMPORTED_MODULE_11__["CarFormBaseComponent"],
                _components_car_form_detail_car_form_detail_component__WEBPACK_IMPORTED_MODULE_12__["CarFormDetailComponent"],
                _components_car_list_car_list_component__WEBPACK_IMPORTED_MODULE_13__["CarListComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_7__["StoreModule"].forRoot(_store__WEBPACK_IMPORTED_MODULE_8__["reducers"]),
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatRadioModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/car-form-base/car-form-base.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/car-form-base/car-form-base.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxza2l5cm9tYW4vcHJvamVjdHMvaXNpLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtLWJhc2UvY2FyLWZvcm0tYmFzZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9jYXItZm9ybS1iYXNlL2Nhci1mb3JtLWJhc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtLWJhc2UvY2FyLWZvcm0tYmFzZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG4iLCIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/car-form-base/car-form-base.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/car-form-base/car-form-base.component.ts ***!
  \*********************************************************************/
/*! exports provided: CarFormBaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormBaseComponent", function() { return CarFormBaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CarFormBaseComponent = /** @class */ (function () {
    function CarFormBaseComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CarFormBaseComponent.prototype, "formGroup", void 0);
    CarFormBaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-form-base',
            template: __webpack_require__(/*! raw-loader!./car-form-base.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/car-form-base/car-form-base.component.html"),
            styles: [__webpack_require__(/*! ./car-form-base.component.scss */ "./src/app/components/car-form-base/car-form-base.component.scss")]
        })
    ], CarFormBaseComponent);
    return CarFormBaseComponent;
}());



/***/ }),

/***/ "./src/app/components/car-form-detail/car-form-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/components/car-form-detail/car-form-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".full-width {\n  width: 100%;\n}\n\n.row {\n  display: flex;\n  flex-direction: row;\n}\n\n.col {\n  flex: 1;\n  margin-right: 20px;\n}\n\n.col:last-child {\n  margin-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxza2l5cm9tYW4vcHJvamVjdHMvaXNpLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtLWRldGFpbC9jYXItZm9ybS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2FyLWZvcm0tZGV0YWlsL2Nhci1mb3JtLWRldGFpbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtLWRldGFpbC9jYXItZm9ybS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cblxuLmNvbCB7XG4gIGZsZXg6IDE7XG4gIG1hcmdpbi1yaWdodDogMjBweDtcbn1cblxuLmNvbDpsYXN0LWNoaWxkIHtcbiAgbWFyZ2luLXJpZ2h0OiAwO1xufVxuIiwiLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5jb2wge1xuICBmbGV4OiAxO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5cbi5jb2w6bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1yaWdodDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/car-form-detail/car-form-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/car-form-detail/car-form-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: CarFormDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormDetailComponent", function() { return CarFormDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var CarFormDetailComponent = /** @class */ (function () {
    function CarFormDetailComponent() {
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"])
    ], CarFormDetailComponent.prototype, "formGroup", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], CarFormDetailComponent.prototype, "carTypes", void 0);
    CarFormDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-form-detail',
            template: __webpack_require__(/*! raw-loader!./car-form-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/car-form-detail/car-form-detail.component.html"),
            styles: [__webpack_require__(/*! ./car-form-detail.component.scss */ "./src/app/components/car-form-detail/car-form-detail.component.scss")]
        })
    ], CarFormDetailComponent);
    return CarFormDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/car-form/car-form.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/car-form/car-form.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  min-width: 420px;\n}\n\n.tab-content {\n  padding: 20px;\n}\n\n.control {\n  padding: 20px;\n}\n\n.control > *:not(:last-child) {\n  margin-right: 20px;\n}\n\nmat-error {\n  opacity: 0;\n}\n\n.visible {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxza2l5cm9tYW4vcHJvamVjdHMvaXNpLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtL2Nhci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtL2Nhci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7QUNDRjs7QURDRTtFQUNFLGtCQUFBO0FDQ0o7O0FER0E7RUFDRSxVQUFBO0FDQUY7O0FER0E7RUFDRSxVQUFBO0FDQUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhci1mb3JtL2Nhci1mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZm9ybSB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgcGFkZGluZzogMjBweDtcblxuICAmID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIH1cbn1cblxubWF0LWVycm9yIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnZpc2libGUge1xuICBvcGFjaXR5OiAxO1xufVxuIiwiZm9ybSB7XG4gIG1pbi13aWR0aDogNDIwcHg7XG59XG5cbi50YWItY29udGVudCB7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5jb250cm9sIHtcbiAgcGFkZGluZzogMjBweDtcbn1cbi5jb250cm9sID4gKjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xufVxuXG5tYXQtZXJyb3Ige1xuICBvcGFjaXR5OiAwO1xufVxuXG4udmlzaWJsZSB7XG4gIG9wYWNpdHk6IDE7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/car-form/car-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/car-form/car-form.component.ts ***!
  \***********************************************************/
/*! exports provided: CarFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarFormComponent", function() { return CarFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../constants/enums */ "./src/app/constants/enums.ts");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _models_car_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/car.model */ "./src/app/models/car.model.ts");
/* harmony import */ var _services_drawer_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/drawer.service */ "./src/app/services/drawer.service.ts");







var CarFormComponent = /** @class */ (function () {
    function CarFormComponent(fb, carRepository, drawerService) {
        var _this = this;
        this.fb = fb;
        this.carRepository = carRepository;
        this.drawerService = drawerService;
        this.isTrySubmit = false;
        this.types = [
            { title: 'Sedan', value: _constants_enums__WEBPACK_IMPORTED_MODULE_3__["CarType"].Sedan },
            { title: 'Minivan', value: _constants_enums__WEBPACK_IMPORTED_MODULE_3__["CarType"].Minivan },
            { title: 'Bus', value: _constants_enums__WEBPACK_IMPORTED_MODULE_3__["CarType"].Bus },
        ];
        this.baseInfo = this.fb.group({
            fullName: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            vehicleID: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
        this.detailInfo = this.fb.group({
            model: [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            type: [_constants_enums__WEBPACK_IMPORTED_MODULE_3__["CarType"].Sedan, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            year: [null, [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(new Date().getFullYear()),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(new Date().getFullYear() - 20),
                ]],
        });
        this.carForm = this.fb.group({
            baseInfo: this.baseInfo,
            detailInfo: this.detailInfo,
        });
        this.carRepository
            .onEdit(function (car) {
            _this.editCar = car;
            _this.baseInfo.setValue({
                fullName: car.fullName,
                vehicleID: car.vehicleID,
            });
            _this.detailInfo.setValue({
                model: car.model,
                year: car.year,
                type: car.type,
            });
        });
    }
    CarFormComponent.prototype.onSubmit = function () {
        this.isTrySubmit = true;
        if (!this.carForm.valid) {
            return this.carForm.markAllAsTouched();
        }
        if (this.editCar) {
            this.updateCar();
        }
        else {
            this.addCar();
        }
        this.onClose();
    };
    CarFormComponent.prototype.addCar = function () {
        var carModel = new _models_car_model__WEBPACK_IMPORTED_MODULE_5__["CarModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.baseInfo.value, this.detailInfo.value));
        this.carRepository.add(carModel);
    };
    CarFormComponent.prototype.updateCar = function () {
        var carModel = new _models_car_model__WEBPACK_IMPORTED_MODULE_5__["CarModel"](tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.editCar.id }, this.baseInfo.value, this.detailInfo.value));
        this.carRepository.update(carModel);
    };
    CarFormComponent.prototype.onClose = function () {
        this.isTrySubmit = false;
        this.carForm.reset();
        this.drawerService.close();
    };
    CarFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-form',
            template: __webpack_require__(/*! raw-loader!./car-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/car-form/car-form.component.html"),
            styles: [__webpack_require__(/*! ./car-form.component.scss */ "./src/app/components/car-form/car-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_car_service__WEBPACK_IMPORTED_MODULE_4__["CarService"],
            _services_drawer_service__WEBPACK_IMPORTED_MODULE_6__["DrawerService"]])
    ], CarFormComponent);
    return CarFormComponent;
}());



/***/ }),

/***/ "./src/app/components/car-list/car-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/car-list/car-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.card {\n  margin: 20px;\n  min-width: 200px;\n  min-height: 200px;\n}\n\n.header-image {\n  background-image: url(\"/assets/avatar.gif\");\n  background-size: cover;\n}\n\nmat-card-header {\n  display: flex;\n}\n\n.mat-card-header-text {\n  flex-grow: 1;\n}\n\n.list mat-list-item {\n  height: 28px;\n}\n\n.empty-list {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #666;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9iZWxza2l5cm9tYW4vcHJvamVjdHMvaXNpLXRlc3Qvc3JjL2FwcC9jb21wb25lbnRzL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSwyQ0FBQTtFQUNBLHNCQUFBO0FDQ0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Nhci1saXN0L2Nhci1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9hdmF0YXIuZ2lmJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbm1hdC1jYXJkLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYXQtY2FyZC1oZWFkZXItdGV4dCB7XG4gIGZsZXgtZ3JvdzogMTtcbn1cblxuLmxpc3QgbWF0LWxpc3QtaXRlbSB7XG4gIGhlaWdodDogMjhweDtcbn1cblxuLmVtcHR5LWxpc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGNvbG9yOiAjNjY2O1xufVxuIiwiOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbi5jYXJkIHtcbiAgbWFyZ2luOiAyMHB4O1xuICBtaW4td2lkdGg6IDIwMHB4O1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmhlYWRlci1pbWFnZSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvYXZhdGFyLmdpZlwiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxubWF0LWNhcmQtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm1hdC1jYXJkLWhlYWRlci10ZXh0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubGlzdCBtYXQtbGlzdC1pdGVtIHtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uZW1wdHktbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59Il19 */"

/***/ }),

/***/ "./src/app/components/car-list/car-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/car-list/car-list.component.ts ***!
  \***********************************************************/
/*! exports provided: CarListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListComponent", function() { return CarListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_car_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/car.service */ "./src/app/services/car.service.ts");
/* harmony import */ var _services_drawer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/drawer.service */ "./src/app/services/drawer.service.ts");




var CarListComponent = /** @class */ (function () {
    function CarListComponent(carRepository, carDrawerService) {
        this.carRepository = carRepository;
        this.carDrawerService = carDrawerService;
        this.cars$ = this.carRepository.getAll();
    }
    CarListComponent.prototype.trackByCar = function (_, item) {
        return item.id;
    };
    CarListComponent.prototype.edit = function (car) {
        this.carDrawerService.open();
        this.carRepository.edit(car.id);
    };
    CarListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-car-list',
            template: __webpack_require__(/*! raw-loader!./car-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/car-list/car-list.component.html"),
            styles: [__webpack_require__(/*! ./car-list.component.scss */ "./src/app/components/car-list/car-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_car_service__WEBPACK_IMPORTED_MODULE_2__["CarService"],
            _services_drawer_service__WEBPACK_IMPORTED_MODULE_3__["DrawerService"]])
    ], CarListComponent);
    return CarListComponent;
}());



/***/ }),

/***/ "./src/app/constants/enums.ts":
/*!************************************!*\
  !*** ./src/app/constants/enums.ts ***!
  \************************************/
/*! exports provided: CarType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarType", function() { return CarType; });
var CarType;
(function (CarType) {
    CarType[CarType["Minivan"] = 0] = "Minivan";
    CarType[CarType["Sedan"] = 1] = "Sedan";
    CarType[CarType["Bus"] = 2] = "Bus";
})(CarType || (CarType = {}));


/***/ }),

/***/ "./src/app/models/car.model.ts":
/*!*************************************!*\
  !*** ./src/app/models/car.model.ts ***!
  \*************************************/
/*! exports provided: CarModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarModel", function() { return CarModel; });
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid/v1 */ "./node_modules/uuid/v1.js");
/* harmony import */ var uuid_v1__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(uuid_v1__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/enums */ "./src/app/constants/enums.ts");


var CarModel = /** @class */ (function () {
    function CarModel(input) {
        this.id = input.id || uuid_v1__WEBPACK_IMPORTED_MODULE_0__();
        this.fullName = input.fullName;
        this.vehicleID = input.vehicleID;
        this.model = input.model;
        this.year = input.year;
        this.type = input.type;
    }
    Object.defineProperty(CarModel.prototype, "typeName", {
        get: function () {
            return _constants_enums__WEBPACK_IMPORTED_MODULE_1__["CarType"][this.type];
        },
        enumerable: true,
        configurable: true
    });
    CarModel.prototype.serialize = function () {
        return {
            id: this.id,
            fullName: this.fullName,
            vehicleID: this.vehicleID,
            model: this.model,
            year: this.year,
            type: this.type,
        };
    };
    return CarModel;
}());



/***/ }),

/***/ "./src/app/services/car.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/car.service.ts ***!
  \*****************************************/
/*! exports provided: CarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarService", function() { return CarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _store_car_car_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/car/car.actions */ "./src/app/store/car/car.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models_car_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/car.model */ "./src/app/models/car.model.ts");







var CarService = /** @class */ (function () {
    function CarService(store) {
        this.store = store;
        this.editCar$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cars$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('cars', 'carList'));
    }
    CarService.prototype.getAll = function () {
        return this.cars$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (cars) { return cars.map(function (item) { return new _models_car_model__WEBPACK_IMPORTED_MODULE_6__["CarModel"](item); }); }));
    };
    CarService.prototype.getById = function (id) {
        return this.cars$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (cars) { return cars.find(function (item) { return item.id === id; }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (item) { return new _models_car_model__WEBPACK_IMPORTED_MODULE_6__["CarModel"](item); }));
    };
    CarService.prototype.add = function (model) {
        this.store.dispatch(Object(_store_car_car_actions__WEBPACK_IMPORTED_MODULE_4__["addCar"])({ payload: model.serialize() }));
    };
    CarService.prototype.update = function (model) {
        this.store.dispatch(Object(_store_car_car_actions__WEBPACK_IMPORTED_MODULE_4__["updateCar"])({ payload: model.serialize() }));
    };
    CarService.prototype.edit = function (id) {
        var _this = this;
        this.getById(id).subscribe(function (car) { return _this.editCar$.next(car); });
    };
    CarService.prototype.onEdit = function (handler) {
        return this.editCar$.subscribe(handler);
    };
    CarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "./src/app/services/drawer.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/drawer.service.ts ***!
  \********************************************/
/*! exports provided: DrawerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawerService", function() { return DrawerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DrawerService = /** @class */ (function () {
    function DrawerService() {
        this._isOpen = false;
    }
    Object.defineProperty(DrawerService.prototype, "isOpen", {
        get: function () {
            return this._isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DrawerService.prototype.open = function () {
        this._isOpen = true;
    };
    DrawerService.prototype.close = function () {
        this._isOpen = false;
    };
    DrawerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DrawerService);
    return DrawerService;
}());



/***/ }),

/***/ "./src/app/store/car/car.actions.ts":
/*!******************************************!*\
  !*** ./src/app/store/car/car.actions.ts ***!
  \******************************************/
/*! exports provided: addCar, updateCar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCar", function() { return addCar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCar", function() { return updateCar; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var addCar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Car] Add Cars', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateCar = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Car] Update Cars', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/store/car/car.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/store/car/car.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, carReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "carReducer", function() { return carReducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _car_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./car.actions */ "./src/app/store/car/car.actions.ts");



var initialState = {
    carList: [],
};
var carReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_car_actions__WEBPACK_IMPORTED_MODULE_2__["addCar"], function (state, _a) {
    var car = _a.payload;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { carList: state.carList.concat([car]) }));
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_car_actions__WEBPACK_IMPORTED_MODULE_2__["updateCar"], function (state, _a) {
    var car = _a.payload;
    return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { carList: state.carList.map(function (item) { return item.id === car.id ? car : item; }) }));
}));


/***/ }),

/***/ "./src/app/store/index.ts":
/*!********************************!*\
  !*** ./src/app/store/index.ts ***!
  \********************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _car_car_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car/car.reducer */ "./src/app/store/car/car.reducer.ts");

var reducers = {
    cars: _car_car_reducer__WEBPACK_IMPORTED_MODULE_0__["carReducer"],
};


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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/belskiyroman/projects/isi-test/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map
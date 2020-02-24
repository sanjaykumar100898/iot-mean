(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_Sensor_create_Sensor_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Sensor-create/Sensor-create.component */ "./src/app/components/Sensor-create/Sensor-create.component.ts");
/* harmony import */ var _components_Sensor_list_Sensor_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/Sensor-list/Sensor-list.component */ "./src/app/components/Sensor-list/Sensor-list.component.ts");
/* harmony import */ var _components_Sensor_edit_Sensor_edit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sensor-edit/Sensor-edit.component */ "./src/app/components/Sensor-edit/Sensor-edit.component.ts");






var routes = [
    { path: '', pathMatch: 'full', redirectTo: 'create-Sensor' },
    { path: 'create-Sensor', component: _components_Sensor_create_Sensor_create_component__WEBPACK_IMPORTED_MODULE_3__["SensorCreateComponent"] },
    { path: 'edit-Sensor/:id', component: _components_Sensor_edit_Sensor_edit_component__WEBPACK_IMPORTED_MODULE_5__["SensorEditComponent"] },
    { path: 'Sensor-list', component: _components_Sensor_list_Sensor_list_component__WEBPACK_IMPORTED_MODULE_4__["SensorListComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu-spacer {\n  flex: 1 1 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVudS1zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm\">\n  <h4 class=\"my-0 mr-md-auto font-weight-normal\">IoT DEVICE MANAGEMENT SYSTEM </h4>\n  <nav class=\"my-2 my-md-0 mr-md-3\">\n    <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/Sensor-list\">View Sensors</a>\n  </nav>\n  <a class=\"btn btn-outline-primary\" routerLinkActive=\"active\" routerLink=\"/create-Sensor\">Add Sensor</a>\n</div>\n\n<router-outlet></router-outlet>\n"

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


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'mean-stack-crud-app';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_Sensor_create_Sensor_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Sensor-create/Sensor-create.component */ "./src/app/components/Sensor-create/Sensor-create.component.ts");
/* harmony import */ var _components_Sensor_list_Sensor_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Sensor-list/Sensor-list.component */ "./src/app/components/Sensor-list/Sensor-list.component.ts");
/* harmony import */ var _components_Sensor_edit_Sensor_edit_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Sensor-edit/Sensor-edit.component */ "./src/app/components/Sensor-edit/Sensor-edit.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./service/api.service */ "./src/app/service/api.service.ts");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_Sensor_create_Sensor_create_component__WEBPACK_IMPORTED_MODULE_5__["SensorCreateComponent"],
                _components_Sensor_list_Sensor_list_component__WEBPACK_IMPORTED_MODULE_6__["SensorListComponent"],
                _components_Sensor_edit_Sensor_edit_component__WEBPACK_IMPORTED_MODULE_7__["SensorEditComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"]
            ],
            providers: [_service_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/Sensor-create/Sensor-create.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/Sensor-create/Sensor-create.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2Vuc29yLWNyZWF0ZS9TZW5zb3ItY3JlYXRlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/Sensor-create/Sensor-create.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/Sensor-create/Sensor-create.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-center\">\n  <div class=\"col-md-4 register-Sensor\">\n    <!-- form card register -->\n    <div class=\"card-body\">\n      <form [formGroup]=\"SensorForm\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-group\">\n          <label for=\"inputName\">Sensor_name</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_name\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_name.errors?.required\">\n            name is required.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputName\">Sensor_id</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_id\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_id.errors?.required\">\n            Enter your id.\n          </div>\n         \n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputName\">Sensor_unit</label>\n          <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n            formControlName=\"Sensor_unit\">\n            <option value=\"\">Choose...</option>\n            <option *ngFor=\"let SensorProfile of SensorProfile\" value=\"{{SensorProfile}}\">{{SensorProfile}}\n            </option>\n          </select>\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_unit.errors?.required\">\n            Choose unit.\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <label for=\"inputName\">Sensor_value</label>\n          <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_value\">\n          <!-- error -->\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_value.errors?.required\">\n            Enter value.\n          </div>\n          <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_value.errors?.pattern\">\n            Enter Numbers Only\n          </div>\n        </div>\n\n        <div class=\"form-group\">\n          <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Register</button>\n        </div>\n      </form>\n\n    </div>\n  </div><!-- form card register -->\n</div>\n"

/***/ }),

/***/ "./src/app/components/Sensor-create/Sensor-create.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/Sensor-create/Sensor-create.component.ts ***!
  \*********************************************************************/
/*! exports provided: SensorCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorCreateComponent", function() { return SensorCreateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SensorCreateComponent = /** @class */ (function () {
    function SensorCreateComponent(fb, router, ngZone, apiService) {
        this.fb = fb;
        this.router = router;
        this.ngZone = ngZone;
        this.apiService = apiService;
        this.submitted = false;
        this.SensorProfile = ['cfs', 'kelvin', 'Pa', 'Degree-Celsius'];
        this.mainForm();
    }
    SensorCreateComponent.prototype.ngOnInit = function () { };
    SensorCreateComponent.prototype.mainForm = function () {
        this.SensorForm = this.fb.group({
            Sensor_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    // Choose designation with select dropdown
    SensorCreateComponent.prototype.updateProfile = function (e) {
        this.SensorForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(SensorCreateComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.SensorForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SensorCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.SensorForm.valid) {
            return false;
        }
        else {
            this.apiService.createSensor(this.SensorForm.value).subscribe(function (res) {
                console.log('successfully added!');
                _this.ngZone.run(function () { return _this.router.navigateByUrl('/Sensor-list'); });
            }, function (error) {
                console.log(error);
            });
        }
    };
    SensorCreateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-Sensor-create',
            template: __webpack_require__(/*! ./Sensor-create.component.html */ "./src/app/components/Sensor-create/Sensor-create.component.html"),
            styles: [__webpack_require__(/*! ./Sensor-create.component.css */ "./src/app/components/Sensor-create/Sensor-create.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SensorCreateComponent);
    return SensorCreateComponent;
}());



/***/ }),

/***/ "./src/app/components/Sensor-edit/Sensor-edit.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/Sensor-edit/Sensor-edit.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2Vuc29yLWVkaXQvU2Vuc29yLWVkaXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Sensor-edit/Sensor-edit.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/Sensor-edit/Sensor-edit.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <div class=\"row justify-content-center\">\n   <div class=\"col-md-4 register-Sensor\">\n     <!-- form card register -->\n     <div class=\"card card-outline-secondary\">\n       <div class=\"card-header\">\n         <h3 class=\"mb-0\">Edit Sensor</h3>\n       </div>\n       <div class=\"card-body\">\n         <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n           <div class=\"form-group\">\n             <label for=\"inputName\">Sensor_name</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_name\">\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_name.errors?.required\">\n               Name is required.\n             </div>\n           </div>\n           <div class=\"form-group\">\n             <label for=\"inputName\">Sensor_id</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_id\">\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_id.errors?.required\">\n               Enter your id\n             </div>\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_id.errors?.pattern\">\n               Enter valid id.\n             </div>\n           </div>\n\n           <div class=\"form-group\">\n             <label for=\"inputName\">Sensor_unit</label>\n             <select class=\"custom-select form-control\" (change)=\"updateProfile($event.target.value)\"\n               formControlName=\"Sensor_unit\">\n               <option value=\"\">Choose...</option>\n               <option *ngFor=\"let SensorProfile of SensorProfile\" value=\"{{SensorProfile}}\">{{SensorProfile}}\n               </option>\n             </select>\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_unit.errors?.required\">\n               Choose designation.\n             </div>\n           </div>\n\n           <div class=\"form-group\">\n             <label for=\"inputName\">Sensor_value</label>\n             <input class=\"form-control\" type=\"text\" formControlName=\"Sensor_value\">\n             <!-- error -->\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_value.errors?.required\">\n               Enter your phone number.\n             </div>\n             <div class=\"invalid-feedback\" *ngIf=\"submitted && myForm.Sensor_value.errors?.pattern\">\n               Enter Numbers Only\n             </div>\n           </div>\n\n           <div class=\"form-group\">\n             <button class=\"btn btn-success btn-lg btn-block\" type=\"submit\">Update</button>\n           </div>\n         </form>\n       </div>\n     </div><!-- form  -->\n   </div>\n </div>\n"

/***/ }),

/***/ "./src/app/components/Sensor-edit/Sensor-edit.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Sensor-edit/Sensor-edit.component.ts ***!
  \*****************************************************************/
/*! exports provided: SensorEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorEditComponent", function() { return SensorEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var SensorEditComponent = /** @class */ (function () {
    function SensorEditComponent(fb, actRoute, apiService, router) {
        this.fb = fb;
        this.actRoute = actRoute;
        this.apiService = apiService;
        this.router = router;
        this.submitted = false;
        this.SensorProfile = ['cfs', 'kelvin', 'Pa', 'Degree-Celsius'];
    }
    SensorEditComponent.prototype.ngOnInit = function () {
        this.updateSensor();
        var id = this.actRoute.snapshot.paramMap.get('id');
        this.getSensor(id);
        this.editForm = this.fb.group({
            Sensor_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    // Choose options with select-dropdown
    SensorEditComponent.prototype.updateProfile = function (e) {
        this.editForm.get('designation').setValue(e, {
            onlySelf: true
        });
    };
    Object.defineProperty(SensorEditComponent.prototype, "myForm", {
        // Getter to access form control
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    SensorEditComponent.prototype.getSensor = function (id) {
        var _this = this;
        this.apiService.getSensor(id).subscribe(function (data) {
            _this.editForm.setValue({
                Sensor_name: data['Sensor_name'],
                Sensor_id: data['Sensor_id'],
                Sensor_unit: data['Sensor_unit'],
                Sensor_value: data['Sensor_value'],
            });
        });
    };
    SensorEditComponent.prototype.updateSensor = function () {
        this.editForm = this.fb.group({
            Sensor_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_unit: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            Sensor_value: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    SensorEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        if (!this.editForm.valid) {
            return false;
        }
        else {
            if (window.confirm('Are you sure?')) {
                var id = this.actRoute.snapshot.paramMap.get('id');
                this.apiService.updateSensor(id, this.editForm.value)
                    .subscribe(function (res) {
                    _this.router.navigateByUrl('/Sensors-list');
                    console.log('Content updated successfully!');
                }, function (error) {
                    console.log(error);
                });
            }
        }
    };
    SensorEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Sensor-edit',
            template: __webpack_require__(/*! ./Sensor-edit.component.html */ "./src/app/components/Sensor-edit/Sensor-edit.component.html"),
            styles: [__webpack_require__(/*! ./Sensor-edit.component.css */ "./src/app/components/Sensor-edit/Sensor-edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _service_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SensorEditComponent);
    return SensorEditComponent;
}());



/***/ }),

/***/ "./src/app/components/Sensor-list/Sensor-list.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/Sensor-list/Sensor-list.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvU2Vuc29yLWxpc3QvU2Vuc29yLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/Sensor-list/Sensor-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/Sensor-list/Sensor-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!-- No data message -->\n  <p *ngIf=\"Sensor.length <= 0\" class=\"no-data text-center\">There is no Sensor added yet!</p>\n\n  <!-- Sensor list -->\n  <table class=\"table table-bordered\" *ngIf=\"Sensor.length > 0\">\n    <thead class=\"table-success\">\n      <tr>\n        <th scope=\"col\"> ID</th>\n        <th scope=\"col\">Sensor_name</th>\n        <th scope=\"col\">Sensor_id</th>\n        <th scope=\"col\">Sensor_unit</th>\n        <th scope=\"col\">Sensor_value</th>\n        <th scope=\"col center\">Update</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let Sensor of Sensor; let i = index\">\n        <th scope=\"row\">{{Sensor._id}}</th>\n        <td>{{Sensor.Sensor_name}}</td>\n        <td>{{Sensor.Sensor_id}}</td>\n        <td>{{Sensor.Sensor_unit}}</td>\n        <td>{{Sensor.Sensor_value}}</td>\n        <td class=\"text-center edit-block\">\n          <span class=\"edit\" [routerLink]=\"['/edit-Sensor/', Sensor._id]\">\n            <button type=\"button\" class=\"btn btn-success btn-sm\">Edit</button>\n          </span>\n          <span class=\"delete\" (click)=\"removeSensor(Sensor, i)\">\n            <button type=\"button\" class=\"btn btn-danger btn-sm\">Delete</button>\n          </span>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/components/Sensor-list/Sensor-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/Sensor-list/Sensor-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SensorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SensorListComponent", function() { return SensorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/api.service */ "./src/app/service/api.service.ts");



var SensorListComponent = /** @class */ (function () {
    function SensorListComponent(apiService) {
        this.apiService = apiService;
        this.Sensor = [];
        this.readSensor();
    }
    SensorListComponent.prototype.ngOnInit = function () { };
    SensorListComponent.prototype.readSensor = function () {
        var _this = this;
        this.apiService.getSensors().subscribe(function (data) {
            _this.Sensor = data;
        });
    };
    SensorListComponent.prototype.removeSensor = function (Sensor, index) {
        var _this = this;
        if (window.confirm('Are you sure?')) {
            this.apiService.deleteSensor(Sensor._id).subscribe(function (data) {
                _this.Sensor.splice(index, 1);
            });
        }
    };
    SensorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-Sensor-list',
            template: __webpack_require__(/*! ./Sensor-list.component.html */ "./src/app/components/Sensor-list/Sensor-list.component.html"),
            styles: [__webpack_require__(/*! ./Sensor-list.component.css */ "./src/app/components/Sensor-list/Sensor-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_api_service__WEBPACK_IMPORTED_MODULE_2__["ApiService"]])
    ], SensorListComponent);
    return SensorListComponent;
}());



/***/ }),

/***/ "./src/app/service/api.service.ts":
/*!****************************************!*\
  !*** ./src/app/service/api.service.ts ***!
  \****************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
        this.baseUri = 'http://localhost:4000/api';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
    }
    // Create
    ApiService.prototype.createSensor = function (data) {
        var url = this.baseUri + "/create";
        return this.http.post(url, data)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Get Sensor
    ApiService.prototype.getSensor = function (id) {
        var url = this.baseUri + "/read/" + id;
        return this.http.get(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            return res || {};
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Update Sensor
    ApiService.prototype.updateSensor = function (id, data) {
        var url = this.baseUri + "/update/" + id;
        return this.http.put(url, data, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Delete Sensor
    ApiService.prototype.deleteSensor = function (id) {
        var url = this.baseUri + "/delete/" + id;
        return this.http.delete(url, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorMgmt));
    };
    // Error handling 
    ApiService.prototype.errorMgmt = function (error) {
        var errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = "Error Code: " + error.status + "\nMessage: " + error.message;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(errorMessage);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());



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

module.exports = __webpack_require__(/*! C:\Users\Praveen\Desktop\mean-stack-angular-7-crud-app-example-2 master\mean-stack-angular-7-crud-app-example-master\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
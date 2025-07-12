"use strict";
(self["webpackChunkchs_document_extract"] = self["webpackChunkchs_document_extract"] || []).push([["main"],{

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);



const routes = [];
class AppRoutingModule {
  static #_ = this.ɵfac = function AppRoutingModule_Factory(t) {
    return new (t || AppRoutingModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
    type: AppRoutingModule
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes, {
      useHash: true
    }), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./document-tracking/document-tracking.component */ 5568);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/document-extract.service */ 3402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component-version/component-version.component */ 7209);
/* harmony import */ var _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patient-selection/patient-selection.component */ 1575);
/* harmony import */ var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-list/document-list.component */ 6098);
/* harmony import */ var _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-configuration/system-configuration.component */ 1400);












function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Initializing application...");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function () {
  return [];
};
class AppComponent {
  constructor(activatedRoute, mPage, documentService) {
    this.activatedRoute = activatedRoute;
    this.mPage = mPage;
    this.documentService = documentService;
    this.loading = true;
    this.configLoaded = false;
    this.configData = null;
    this.showBackToTop = false;
    this.patientInfo = null;
  }
  ngOnInit() {
    // Grab any parameters in the URL (Used in Cerner Components)
    this.activatedRoute.queryParams.subscribe(params => {
      this.mPage.personId = params['personId'] ? parseInt(params['personId']) : this.mPage.personId;
      this.mPage.encntrId = params['encounterId'] ? parseInt(params['encounterId']) : this.mPage.encntrId;
      this.mPage.prsnlId = params['userId'] ? parseInt(params['userId']) : this.mPage.prsnlId;
    });
    // Perform MPage Initialization
    setTimeout(e => {
      this.mPage.setMaxInstances(4, true, 'ORG', false);
      // Wait for service to be ready before loading configuration
      this.waitForServiceReady();
    }, 0);
    // Setup back to top functionality
    this.setupBackToTop();
  }
  waitForServiceReady() {
    var _this = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      while (!_this.mPage.serviceReady) {
        // Polling loop to wait for MPage service initialization
        // Service readiness is required before making API calls to Cerner
        yield new Promise(resolve => setTimeout(resolve, 1000));
      }
      // MPage service is now ready for API interactions
      console.log('MPage service is ready, loading configuration...');
      // Load configuration data
      _this.loadConfiguration();
    })();
  }
  loadConfiguration() {
    this.documentService.getConfigData().subscribe({
      next: configData => {
        console.log('Configuration loaded successfully:', configData);
        this.configData = configData;
        this.configLoaded = true;
        this.loading = false;
      },
      error: error => {
        console.error('Failed to load configuration:', error);
        this.loading = false;
        // Continue without configuration for now
      }
    });
  }
  /**
   * Setup back to top functionality
   */
  setupBackToTop() {
    window.addEventListener('scroll', () => {
      this.showBackToTop = window.pageYOffset > 400;
    });
  }
  /**
   * Scroll to top of the page
   */
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  /**
   * Handle patient selection from patient-selection component
   * @param patientInfo The selected patient information
   */
  onPatientSelected(patientInfo) {
    this.patientInfo = patientInfo;
  }
  /**
   * Handle download request from document-list component
   * @param downloadData The download request data
   */
  onDownloadRequest(downloadData) {
    // Pass the download request to the document tracking component
    if (this.documentTrackingComponent) {
      this.documentTrackingComponent.handleDownloadRequest(downloadData);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_9__.mPageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_2__.DocumentExtractService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_1__.DocumentTrackingComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.documentTrackingComponent = _t.first);
      }
    },
    decls: 15,
    vars: 12,
    consts: [[1, "app-container"], ["id", "applink", "href", "#", 2, "display", "none"], ["class", "loading-overlay", 4, "ngIf"], [1, "main-content"], [3, "configLoaded", "patientSelected"], [3, "documents", "loading", "patientInfo", "downloadRequest"], [3, "currentPatient", "downloadRequest"], [3, "configData"], ["title", "Back to top", 1, "back-to-top", 3, "click"], [1, "back-to-top-icon"], [1, "loading-overlay"], [1, "loading-content"], [1, "loading-spinner"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "a", 1)(2, "app-component-version");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "CHS Document Extract");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AppComponent_div_5_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 3)(7, "app-patient-selection", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("patientSelected", function AppComponent_Template_app_patient_selection_patientSelected_7_listener($event) {
          return ctx.onPatientSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "app-document-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("downloadRequest", function AppComponent_Template_app_document_list_downloadRequest_8_listener($event) {
          return ctx.onDownloadRequest($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "app-document-tracking", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("downloadRequest", function AppComponent_Template_app_document_tracking_downloadRequest_9_listener($event) {
          return ctx.onDownloadRequest($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "app-system-configuration", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AppComponent_Template_div_click_11_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](13, "\u2191");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "mpage-log-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("configLoaded", ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("documents", (ctx.patientInfo == null ? null : ctx.patientInfo.documents) || _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c0))("loading", ctx.loading)("patientInfo", ctx.patientInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("currentPatient", ctx.patientInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("configData", ctx.configData);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("visible", ctx.showBackToTop);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_9__.mPageLogComponent, _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_3__.ComponentVersionComponent, _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_4__.PatientSelectionComponent, _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_5__.DocumentListComponent, _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_1__.DocumentTrackingComponent, _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__.SystemConfigurationComponent],
    styles: [".app-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  position: relative;\n}\n.app-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 30px;\n  font-size: 28px;\n  font-weight: 600;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.main-content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin-bottom: 30px;\n}\n.main-content.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.main-content[_ngcontent-%COMP%]   app-patient-selection[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%]   app-document-list[_ngcontent-%COMP%], .main-content[_ngcontent-%COMP%]   app-document-tracking[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .app-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .app-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  .main-content[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 40px;\n  height: 40px;\n  background-color: #1890ff;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  background-color: #40a9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.back-to-top[_ngcontent-%COMP%]   .back-to-top-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7QUFDRjtBQUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMENBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7QUFBRjtBQUVFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBQUo7QUFFSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQkFBQTtBQUFOO0FBR0k7RUFDRSxTQUFBO0VBQ0EsZUFBQTtBQUROOztBQU1BO0VBQ0U7SUFBSyx1QkFBQTtFQUZMO0VBR0E7SUFBTyx5QkFBQTtFQUFQO0FBQ0Y7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFBSjtBQUdFOzs7RUFHRSxXQUFBO0FBREo7O0FBTUE7RUFDRTtJQUNFLGFBQUE7RUFIRjtFQUtFO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0VBSEo7RUFPQTtJQUNFLFNBQUE7RUFMRjtBQUNGO0FBU0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFQRjtBQVNFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0FBUEo7QUFVRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVJKO0FBV0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFUSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzY2NjtcblxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDdiZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICYubG9hZGluZyB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgYXBwLXBhdGllbnQtc2VsZWN0aW9uLFxuICBhcHAtZG9jdW1lbnQtbGlzdCxcbiAgYXBwLWRvY3VtZW50LXRyYWNraW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cblxuICAubWFpbi1jb250ZW50IHtcbiAgICBnYXA6IDE2cHg7XG4gIH1cbn1cblxuLy8gQmFjayB0byBUb3AgQnV0dG9uXG4uYmFjay10by10b3Age1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjRweDtcbiAgcmlnaHQ6IDI0cHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxODkwZmY7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBvcGFjaXR5OiAwO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTUpO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0MGE5ZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xuICAgIGJveC1zaGFkb3c6IDAgNHB4IDEycHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB9XG5cbiAgJi52aXNpYmxlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIH1cblxuICAuYmFjay10by10b3AtaWNvbiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule),
/* harmony export */   CUSTOM_DATE_FORMATS: () => (/* binding */ CUSTOM_DATE_FORMATS),
/* harmony export */   configFactory: () => (/* binding */ configFactory)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material-luxon-adapter */ 9640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-version/component-version.component */ 7209);
/* harmony import */ var _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-selection/patient-selection.component */ 1575);
/* harmony import */ var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-list/document-list.component */ 6098);
/* harmony import */ var _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-tracking/document-tracking.component */ 5568);
/* harmony import */ var _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-configuration/system-configuration.component */ 1400);
/* harmony import */ var _system_configuration_nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-configuration/nested-object-viewer.component */ 3942);
/* harmony import */ var _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extract-download/extract-download.component */ 8706);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/locales/en */ 2060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ 4860);






















(0,_angular_common__WEBPACK_IMPORTED_MODULE_9__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_10__["default"]);
const configFactory = configService => {
  return () => configService.loadConfig();
};
// Custom date formats
const CUSTOM_DATE_FORMATS = {
  parse: {
    dateInput: ['dd-MMM-yyyy']
  },
  display: {
    dateInput: 'dd-MMM-yyyy',
    dateTimeLabel: 'dd-MMM-yyyy HH:mm',
    monthYearLabel: 'MMM yyyy',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM yyyy'
  }
};
class AppModule {
  static #_ = this.ɵfac = function AppModule_Factory(t) {
    return new (t || AppModule)();
  };
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.APP_INITIALIZER,
      useFactory: configFactory,
      deps: [_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.ConfigService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ErrorHandler,
      useClass: _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandlerService
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.DateAdapter,
      useClass: _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_14__.LuxonDateAdapter,
      deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_LOCALE]
    },
    //    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_13__.MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS
    }, {
      provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_15__.NZ_I18N,
      useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_15__.en_US
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_14__.MatLuxonDateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule
    //    MatMomentDateModule
    ]
  });
}


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__.ComponentVersionComponent, _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_3__.PatientSelectionComponent, _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__.DocumentListComponent, _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_5__.DocumentTrackingComponent, _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__.SystemConfigurationComponent, _system_configuration_nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_7__.NestedObjectViewerComponent, _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_8__.ExtractDownloadComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_12__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_18__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_14__.MatLuxonDateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_19__.HttpClientModule
    //    MatMomentDateModule
    ]
  });
})();

/***/ }),

/***/ 7209:
/*!******************************************************************!*\
  !*** ./src/app/component-version/component-version.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ComponentVersionComponent: () => (/* binding */ ComponentVersionComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ComponentVersionComponent {
  constructor() {
    this.currentApplicationVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.appVersion;
    this.packageVersion = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.packageVersion;
    this.gitBranch = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.gitBranch;
  }
  static #_ = this.ɵfac = function ComponentVersionComponent_Factory(t) {
    return new (t || ComponentVersionComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ComponentVersionComponent,
    selectors: [["app-component-version"]],
    decls: 1,
    vars: 1,
    template: function ComponentVersionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](0);
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.currentApplicationVersion);
      }
    },
    styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 6098:
/*!**********************************************************!*\
  !*** ./src/app/document-list/document-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentListComponent: () => (/* binding */ DocumentListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);



function DocumentListComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7)(1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_4_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.selectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Select All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r7.deselectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Deselect All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_4_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.downloadSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.allSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.selectedDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r0.selectedDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Download Selected (", ctx_r0.selectedDocuments.length, ") ");
  }
}
function DocumentListComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading documents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DocumentListComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No documents found for this patient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DocumentListComponent_div_7_tr_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_tr_19_Template_tr_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const document_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r11.toggleDocumentSelection(document_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 14)(2, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_tr_19_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function DocumentListComponent_div_7_tr_19_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
      const document_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r14.toggleDocumentSelection(document_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "td", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const document_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", document_r10.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", document_r10.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.contentTypeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 9, document_r10.documentDate, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.documentSize);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.mediaType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r10.appCtx);
  }
}
function DocumentListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13)(1, "table")(2, "thead")(3, "tr")(4, "th", 14)(5, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentListComponent_div_7_Template_input_change_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.allSelected ? ctx_r15.deselectAll() : ctx_r15.selectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Document Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Content Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Date Created");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Media Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, DocumentListComponent_div_7_tr_19_Template, 16, 12, "tr", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r3.allSelected)("indeterminate", ctx_r3.someSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.documents);
  }
}
function DocumentListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r4.selectedDocuments.length, " document(s) selected");
  }
}
class DocumentListComponent {
  constructor() {
    this.documents = [];
    this.loading = false;
    this.patientInfo = null;
    this.documentSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.downloadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    this.selectedDocuments = [];
  }
  ngOnInit() {}
  /**
   * Toggles selection of a document
   * @param document The document to toggle
   */
  toggleDocumentSelection(document) {
    console.log('[DocumentListComponent] toggleDocumentSelection() - Toggling document:', document);
    const index = this.selectedDocuments.findIndex(doc => doc.id === document.id);
    if (index > -1) {
      // Remove from selection
      console.log('[DocumentListComponent] toggleDocumentSelection() - Removing document from selection');
      this.selectedDocuments.splice(index, 1);
      document.selected = false;
    } else {
      // Add to selection
      console.log('[DocumentListComponent] toggleDocumentSelection() - Adding document to selection');
      this.selectedDocuments.push(document);
      document.selected = true;
    }
    console.log('[DocumentListComponent] toggleDocumentSelection() - Updated selected documents:', this.selectedDocuments);
    this.documentSelectionChange.emit(this.selectedDocuments);
  }
  /**
   * Selects all documents
   */
  selectAll() {
    console.log('[DocumentListComponent] selectAll() - Selecting all documents, count:', this.documents.length);
    this.documents.forEach(doc => {
      doc.selected = true;
    });
    this.selectedDocuments = [...this.documents];
    console.log('[DocumentListComponent] selectAll() - All documents selected:', this.selectedDocuments);
    this.documentSelectionChange.emit(this.selectedDocuments);
  }
  /**
   * Deselects all documents
   */
  deselectAll() {
    console.log('[DocumentListComponent] deselectAll() - Deselecting all documents');
    this.documents.forEach(doc => {
      doc.selected = false;
    });
    this.selectedDocuments = [];
    console.log('[DocumentListComponent] deselectAll() - All documents deselected');
    this.documentSelectionChange.emit(this.selectedDocuments);
  }
  /**
   * Initiates download of selected documents
   */
  downloadSelected() {
    console.log('[DocumentListComponent] downloadSelected() - Starting download for selected documents');
    console.log('[DocumentListComponent] downloadSelected() - Selected documents count:', this.selectedDocuments.length);
    console.log('[DocumentListComponent] downloadSelected() - Patient info:', this.patientInfo);
    if (this.selectedDocuments.length > 0 && this.patientInfo) {
      const dmsMediaInstanceRequests = this.selectedDocuments.map(doc => ({
        mediaInstanceId: parseInt(doc.id)
      }));
      console.log('[DocumentListComponent] downloadSelected() - Created download requests:', dmsMediaInstanceRequests);
      const downloadData = {
        personId: this.patientInfo.personId,
        encntrId: this.patientInfo.encntrId,
        dmsMediaInstanceRequests: dmsMediaInstanceRequests
      };
      console.log('[DocumentListComponent] downloadSelected() - Emitting download request:', downloadData);
      this.downloadRequest.emit(downloadData);
    } else {
      console.warn('[DocumentListComponent] downloadSelected() - No documents selected or patient info missing');
    }
  }
  /**
   * Checks if all documents are selected
   */
  get allSelected() {
    return this.documents.length > 0 && this.selectedDocuments.length === this.documents.length;
  }
  /**
   * Checks if some documents are selected
   */
  get someSelected() {
    return this.selectedDocuments.length > 0 && this.selectedDocuments.length < this.documents.length;
  }
  static #_ = this.ɵfac = function DocumentListComponent_Factory(t) {
    return new (t || DocumentListComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: DocumentListComponent,
    selectors: [["app-document-list"]],
    inputs: {
      documents: "documents",
      loading: "loading",
      patientInfo: "patientInfo"
    },
    outputs: {
      documentSelectionChange: "documentSelectionChange",
      downloadRequest: "downloadRequest"
    },
    decls: 9,
    vars: 5,
    consts: [[1, "document-list-container"], [1, "list-header"], ["class", "header-actions", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "no-documents", 4, "ngIf"], ["class", "documents-table", 4, "ngIf"], ["class", "selection-summary", 4, "ngIf"], [1, "header-actions"], [1, "btn", "btn-outline", 3, "disabled", "click"], [1, "btn", "btn-primary", 3, "disabled", "click"], [1, "loading-container"], [1, "loading-spinner"], [1, "no-documents"], [1, "documents-table"], [1, "checkbox-column"], ["type", "checkbox", 3, "checked", "indeterminate", "change"], [3, "selected", "click", 4, "ngFor", "ngForOf"], [3, "click"], ["type", "checkbox", 3, "checked", "click", "change"], [1, "document-name"], [1, "document-type"], [1, "document-date"], [1, "document-size"], [1, "media-type"], [1, "app-context"], [1, "selection-summary"]],
    template: function DocumentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Patient Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DocumentListComponent_div_4_Template, 7, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentListComponent_div_5_Template, 4, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentListComponent_div_6_Template, 3, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListComponent_div_7_Template, 20, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentListComponent_div_8_Template, 3, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.documents.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.documents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDocuments.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".document-list-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.list-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #007bff;\n  border: 1px solid #007bff;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #007bff;\n  color: white;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 40px;\n  color: #666;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 16px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-documents[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  font-size: 16px;\n}\n\n.documents-table[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-bottom: 2px solid #e9ecef;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #495057;\n  font-size: 14px;\n  border-bottom: 1px solid #dee2e6;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.checkbox-column[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f1f3f4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 16px 12px;\n  font-size: 14px;\n  color: #333;\n  vertical-align: middle;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.checkbox-column[_ngcontent-%COMP%] {\n  width: 50px;\n  text-align: center;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.checkbox-column[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  cursor: pointer;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.document-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #007bff;\n  max-width: 300px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.document-type[_ngcontent-%COMP%] {\n  color: #666;\n  text-transform: capitalize;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.document-date[_ngcontent-%COMP%] {\n  color: #666;\n  white-space: nowrap;\n}\n.documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td.document-size[_ngcontent-%COMP%] {\n  color: #666;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.selection-summary[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background-color: #e3f2fd;\n  border: 1px solid #bbdefb;\n  border-radius: 6px;\n  color: #1976d2;\n  font-size: 14px;\n  font-weight: 500;\n}\n.selection-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media (max-width: 768px) {\n  .document-list-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .documents-table[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 600px;\n  }\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 12px 8px;\n    font-size: 13px;\n  }\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n    max-width: 200px;\n  }\n}\n@media (max-width: 480px) {\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n    min-width: 500px;\n  }\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 8px 6px;\n    font-size: 12px;\n  }\n  .documents-table[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n    max-width: 150px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFNBQUE7QUFDRjtBQUNFO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUVFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0FBQUo7QUFFSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFBTjtBQUVNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBQVI7QUFHTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQURSO0FBR1E7RUFDRSx5QkFBQTtBQURWO0FBS007RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUhSO0FBS1E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFIVjs7QUFVQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtBQVBGO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVVFO0VBQ0UsU0FBQTtFQUNBLGVBQUE7QUFSSjs7QUFZQTtFQUNFO0lBQUssdUJBQUE7RUFSTDtFQVNBO0lBQU8seUJBQUE7RUFOUDtBQUNGO0FBUUE7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQU5GOztBQVNBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFORjtBQVFFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBTko7QUFRSTtFQUNFLHlCQUFBO0VBQ0EsZ0NBQUE7QUFOTjtBQVFNO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtBQU5SO0FBUVE7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7QUFOVjtBQVNRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBUFY7QUFhTTtFQUNFLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLHNDQUFBO0FBWFI7QUFhUTtFQUNFLHlCQUFBO0FBWFY7QUFjUTtFQUNFLHlCQUFBO0FBWlY7QUFlUTtFQUNFLG1CQUFBO0FBYlY7QUFnQlE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7QUFkVjtBQWdCVTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtBQWRaO0FBZ0JZO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBZGQ7QUFrQlU7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQWhCWjtBQW1CVTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtBQWpCWjtBQW9CVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtBQWxCWjtBQXFCVTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FBbkJaOztBQTJCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBeEJGO0FBMEJFO0VBQ0UsU0FBQTtBQXhCSjs7QUE2QkE7RUFDRTtJQUNFLGFBQUE7RUExQkY7RUE2QkE7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0VBM0JGO0VBNkJFO0lBQ0UsdUJBQUE7RUEzQko7RUErQkE7SUFDRSxnQkFBQTtFQTdCRjtFQStCRTtJQUNFLGdCQUFBO0VBN0JKO0VBK0JJO0lBQ0UsaUJBQUE7SUFDQSxlQUFBO0VBN0JOO0VBZ0NJO0lBQ0UsZ0JBQUE7RUE5Qk47QUFDRjtBQW1DQTtFQUNFO0lBQ0UsZ0JBQUE7RUFqQ0Y7RUFtQ0U7SUFDRSxnQkFBQTtJQUNBLGVBQUE7RUFqQ0o7RUFvQ0U7SUFDRSxnQkFBQTtFQWxDSjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWxpc3QtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5saXN0LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBnYXA6IDE2cHg7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmJ0biB7XG4gICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cblxuICAgICAgJi5idG4tcHJpbWFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICYuYnRuLW91dGxpbmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDQwcHg7XG4gIGNvbG9yOiAjNjY2O1xuXG4gIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgIHdpZHRoOiA0MHB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgIGJvcmRlci10b3A6IDRweCBzb2xpZCAjMDA3YmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gIH1cblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLm5vLWRvY3VtZW50cyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmRvY3VtZW50cy10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICB0YWJsZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcblxuICAgIHRoZWFkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2U5ZWNlZjtcblxuICAgICAgdGgge1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDEycHg7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xuXG4gICAgICAgICYuY2hlY2tib3gtY29sdW1uIHtcbiAgICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0Ym9keSB7XG4gICAgICB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgdGQge1xuICAgICAgICAgIHBhZGRpbmc6IDE2cHggMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICAgICYuY2hlY2tib3gtY29sdW1uIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0ge1xuICAgICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kb2N1bWVudC1uYW1lIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMzAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZG9jdW1lbnQtZGF0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJi5kb2N1bWVudC1zaXplIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uc2VsZWN0aW9uLXN1bW1hcnkge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNiYmRlZmI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICMxOTc2ZDI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICBwIHtcbiAgICBtYXJnaW46IDA7XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZG9jdW1lbnQtbGlzdC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAubGlzdC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG5cbiAgICAuaGVhZGVyLWFjdGlvbnMge1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuICB9XG5cbiAgLmRvY3VtZW50cy10YWJsZSB7XG4gICAgb3ZlcmZsb3cteDogYXV0bztcblxuICAgIHRhYmxlIHtcbiAgICAgIG1pbi13aWR0aDogNjAwcHg7XG5cbiAgICAgIHRoLCB0ZCB7XG4gICAgICAgIHBhZGRpbmc6IDEycHggOHB4O1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICB9XG5cbiAgICAgIC5kb2N1bWVudC1uYW1lIHtcbiAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5kb2N1bWVudHMtdGFibGUgdGFibGUge1xuICAgIG1pbi13aWR0aDogNTAwcHg7XG5cbiAgICB0aCwgdGQge1xuICAgICAgcGFkZGluZzogOHB4IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuZG9jdW1lbnQtbmFtZSB7XG4gICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgIH1cbiAgfVxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 5568:
/*!******************************************************************!*\
  !*** ./src/app/document-tracking/document-tracking.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentTrackingComponent: () => (/* binding */ DocumentTrackingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/document-extract.service */ 3402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../extract-download/extract-download.component */ 8706);





function DocumentTrackingComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.getCurrentDownloadStatus());
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r0.getDownloadProgress(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r0.getDownloadProgress(), "% Complete");
  }
}
function DocumentTrackingComponent_div_5_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.documentName);
  }
}
function DocumentTrackingComponent_div_5_div_4_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r7.documentType);
  }
}
function DocumentTrackingComponent_div_5_div_4_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 25)(1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", item_r7.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", item_r7.progress || 0, "%");
  }
}
function DocumentTrackingComponent_div_5_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentTrackingComponent_div_5_div_4_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentTrackingComponent_div_5_div_4_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DocumentTrackingComponent_div_5_div_4_div_9_Template, 5, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx_r6.getStatusClass(item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r7.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Document ID: ", item_r7.documentId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r7.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.getStatusText(item_r7.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r7.status === "downloading");
  }
}
function DocumentTrackingComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Active Downloads");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DocumentTrackingComponent_div_5_div_4_Template, 10, 7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.downloadQueue);
  }
}
function DocumentTrackingComponent_div_6_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r15.documentName);
  }
}
function DocumentTrackingComponent_div_6_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r15.documentType);
  }
}
function DocumentTrackingComponent_div_6_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("File: ", item_r15.filename, "");
  }
}
function DocumentTrackingComponent_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 32)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentTrackingComponent_div_6_div_7_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentTrackingComponent_div_6_div_7_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentTrackingComponent_div_6_div_7_div_7_Template, 2, 1, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 34)(11, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r15 = ctx.$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Document ID: ", item_r15.documentId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r15.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r14.getStatusText(item_r15.status));
  }
}
function DocumentTrackingComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 29)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Completed Downloads");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_6_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r22.clearCompleted());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Clear All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentTrackingComponent_div_6_div_7_Template, 13, 5, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.completedDownloads);
  }
}
function DocumentTrackingComponent_div_7_div_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.documentName);
  }
}
function DocumentTrackingComponent_div_7_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.documentType);
  }
}
function DocumentTrackingComponent_div_7_div_7_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](item_r25.error);
  }
}
function DocumentTrackingComponent_div_7_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, DocumentTrackingComponent_div_7_div_7_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentTrackingComponent_div_7_div_7_div_6_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DocumentTrackingComponent_div_7_div_7_div_9_Template, 2, 1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_7_div_7_Template_button_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r33);
      const item_r25 = restoredCtx.$implicit;
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r32.retryDownload(item_r25));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r25.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Document ID: ", item_r25.documentId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r25.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r24.getStatusText(item_r25.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", item_r25.error);
  }
}
function DocumentTrackingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 29)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Failed Downloads");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_7_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r34.clearFailed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Clear All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentTrackingComponent_div_7_div_7_Template, 12, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r3.failedDownloads);
  }
}
function DocumentTrackingComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 42)(1, "app-extract-download", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("extractComplete", function DocumentTrackingComponent_div_8_Template_app_extract_download_extractComplete_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r36.handleExtractComplete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("personId", ctx_r4.currentPatient.personId)("encntrId", ctx_r4.currentPatient.encntrId)("downloadedFiles", ctx_r4.downloadedFiles);
  }
}
function DocumentTrackingComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 44)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No download activity to track.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Select documents from the document list to start downloading.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class DocumentTrackingComponent {
  constructor(documentService) {
    this.documentService = documentService;
    this.currentPatient = null;
    this.downloadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.downloadQueue = [];
    this.completedDownloads = [];
    this.failedDownloads = [];
    this.isDownloading = false;
    this.downloadedFiles = [];
    this.showExtractComponent = false;
  }
  ngOnInit() {
    console.log('[DocumentTrackingComponent] ngOnInit() - Component initialized');
  }
  /**
   * Handles download request from parent component
   * @param downloadData The download request data
   */
  handleDownloadRequest(downloadData) {
    console.log('[DocumentTrackingComponent] handleDownloadRequest() - Received download request:', downloadData);
    this.startDownload(downloadData.personId, downloadData.encntrId, downloadData.dmsMediaInstanceRequests);
  }
  /**
   * Clears all download state to start fresh
   */
  clearDownloadState() {
    console.log('[DocumentTrackingComponent] clearDownloadState() - Clearing all download state');
    this.downloadQueue = [];
    this.completedDownloads = [];
    this.failedDownloads = [];
    this.downloadedFiles = [];
    this.showExtractComponent = false;
  }
  /**
   * Starts the download process for selected documents
   * @param personId The patient's person ID
   * @param encntrId The patient's encounter ID
   * @param dmsMediaInstanceRequests Array of document media instance requests to download
   */
  startDownload(personId, encntrId, dmsMediaInstanceRequests) {
    console.log('[DocumentTrackingComponent] startDownload() - Starting download process with parameters:', {
      personId,
      encntrId,
      requestCount: dmsMediaInstanceRequests.length,
      requests: dmsMediaInstanceRequests
    });
    if (dmsMediaInstanceRequests.length === 0) {
      console.warn('[DocumentTrackingComponent] startDownload() - No download requests provided');
      return;
    }
    // Clear previous download state
    this.clearDownloadState();
    this.isDownloading = true;
    console.log('[DocumentTrackingComponent] startDownload() - Set isDownloading to true');
    // Initialize download queue
    this.downloadQueue = dmsMediaInstanceRequests.map(request => ({
      documentId: request.mediaInstanceId.toString(),
      status: 'pending'
    }));
    console.log('[DocumentTrackingComponent] startDownload() - Initialized download queue:', this.downloadQueue);
    // Start the sequential download process
    console.log('[DocumentTrackingComponent] startDownload() - Calling document service for sequential download');
    this.documentService.downloadDocumentsSequentially(personId, encntrId, dmsMediaInstanceRequests).subscribe({
      next: response => {
        console.log('[DocumentTrackingComponent] startDownload() - Received sequential download response:', response);
        this.handleSequentialDownloadResponse(response);
      },
      error: error => {
        console.error('[DocumentTrackingComponent] startDownload() - Sequential download error:', error);
        this.handleDownloadError(error);
      }
    });
  }
  /**
   * Handles sequential download response with progress updates
   * @param response The sequential download response from the service
   */
  handleSequentialDownloadResponse(response) {
    console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Processing sequential download response:', response);
    const {
      progress,
      isComplete,
      allResults
    } = response;
    // Update progress for current download
    if (progress.current) {
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Processing current download:', progress.current);
      const queueItem = this.downloadQueue.find(item => item.documentId === progress.current.mediaInstanceId.toString());
      if (queueItem) {
        console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Found queue item for current download:', queueItem);
        queueItem.status = 'downloading';
        queueItem.progress = 50; // Indicate download in progress
      }
    }
    // Process completed results
    allResults.forEach((result, index) => {
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Processing result:', result);
      const queueItem = this.downloadQueue.find(item => item.documentId === result.mediaInstanceId.toString());
      if (queueItem) {
        console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Found queue item for result:', queueItem);
        // Update queue item with result details
        queueItem.filename = result.filename;
        queueItem.documentName = result.documentName;
        queueItem.documentType = result.documentType;
        if (result.status === 1) {
          // Download successful
          console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Download successful for:', result.mediaInstanceId);
          queueItem.status = 'completed';
          queueItem.progress = 100;
          this.moveToCompleted(queueItem);
          // Add to downloaded files for extract
          if (result.fullpath && result.filename) {
            const downloadedFile = {
              filename: result.filename,
              fullpath: result.fullpath,
              documentName: result.documentName,
              documentType: result.documentType,
              mediaInstanceId: result.mediaInstanceId
            };
            // Check if this file is already in the downloaded files list to prevent duplicates
            const existingFile = this.downloadedFiles.find(file => file.mediaInstanceId === result.mediaInstanceId);
            if (!existingFile) {
              this.downloadedFiles.push(downloadedFile);
              console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Added to downloaded files:', downloadedFile);
            } else {
              console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - File already exists in downloaded files, skipping:', result.mediaInstanceId);
            }
          }
        } else {
          // Download failed
          console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Download failed for:', result.mediaInstanceId, 'Error:', result.message);
          queueItem.status = 'failed';
          queueItem.error = result.message;
          this.moveToFailed(queueItem);
        }
      } else {
        console.warn('[DocumentTrackingComponent] handleSequentialDownloadResponse() - No queue item found for mediaInstanceId:', result.mediaInstanceId);
      }
    });
    // Check if all downloads are complete
    if (isComplete) {
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - All downloads completed. Progress:', progress);
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Setting isDownloading to false and clearing queue');
      this.isDownloading = false;
      this.downloadQueue = [];
      // Show extract component if we have downloaded files
      if (this.downloadedFiles.length > 0) {
        console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Showing extract component with', this.downloadedFiles.length, 'files');
        this.showExtractComponent = true;
      }
      // Log final summary
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Download Summary:', {
        total: progress.total,
        completed: progress.completed,
        failed: progress.failed,
        successRate: progress.total > 0 ? (progress.completed / progress.total * 100).toFixed(1) + '%' : '0%',
        downloadedFilesCount: this.downloadedFiles.length
      });
    }
  }
  /**
   * Handles extract completion
   * @param extractResponse The extract response
   */
  handleExtractComplete(extractResponse) {
    console.log('[DocumentTrackingComponent] handleExtractComplete() - Extract completed:', extractResponse);
    // Handle extract completion - could show success message or reset state
  }
  /**
   * Handles successful download response
   * @param response The download response from the service
   */
  handleDownloadResponse(response) {
    console.log('[DocumentTrackingComponent] handleDownloadResponse() - Processing download response:', response);
    // Process each download result
    response.downloadResults.forEach((result, index) => {
      console.log('[DocumentTrackingComponent] handleDownloadResponse() - Processing result:', result);
      // Find corresponding item in download queue
      const queueItem = this.downloadQueue.find(item => item.documentId === result.mediaInstanceId.toString());
      if (queueItem) {
        console.log('[DocumentTrackingComponent] handleDownloadResponse() - Found queue item:', queueItem);
        if (result.status === 1) {
          // Download successful
          console.log('[DocumentTrackingComponent] handleDownloadResponse() - Download successful for:', result.mediaInstanceId);
          queueItem.status = 'completed';
          queueItem.progress = 100;
          this.moveToCompleted(queueItem);
        } else {
          // Download failed
          console.log('[DocumentTrackingComponent] handleDownloadResponse() - Download failed for:', result.mediaInstanceId, 'Error:', result.message);
          queueItem.status = 'failed';
          queueItem.error = result.message;
          this.moveToFailed(queueItem);
        }
      } else {
        console.warn('[DocumentTrackingComponent] handleDownloadResponse() - No queue item found for mediaInstanceId:', result.mediaInstanceId);
      }
    });
    // Clear download queue after processing
    console.log('[DocumentTrackingComponent] handleDownloadResponse() - Clearing download queue and setting isDownloading to false');
    this.isDownloading = false;
    this.downloadQueue = [];
  }
  /**
   * Handles download errors
   * @param error The error from the download service
   */
  handleDownloadError(error) {
    console.error('[DocumentTrackingComponent] handleDownloadError() - Download error:', error);
    // Mark all pending items as failed
    console.log('[DocumentTrackingComponent] handleDownloadError() - Marking all pending items as failed');
    this.downloadQueue.forEach(item => {
      if (item.status === 'pending' || item.status === 'downloading') {
        console.log('[DocumentTrackingComponent] handleDownloadError() - Marking item as failed:', item);
        item.status = 'failed';
        item.error = 'Download failed';
        this.moveToFailed(item);
      }
    });
    console.log('[DocumentTrackingComponent] handleDownloadError() - Setting isDownloading to false and clearing queue');
    this.isDownloading = false;
    this.downloadQueue = [];
  }
  /**
   * Moves a completed download to the completed list
   * @param item The completed download item
   */
  moveToCompleted(item) {
    console.log('[DocumentTrackingComponent] moveToCompleted() - Moving item to completed list:', item);
    // Check if this item is already in the completed list to prevent duplicates
    const existingItem = this.completedDownloads.find(completed => completed.documentId === item.documentId);
    if (existingItem) {
      console.log('[DocumentTrackingComponent] moveToCompleted() - Item already exists in completed list, skipping:', item.documentId);
      return;
    }
    this.completedDownloads.push(item);
    console.log('[DocumentTrackingComponent] moveToCompleted() - Completed downloads count:', this.completedDownloads.length);
  }
  /**
   * Moves a failed download to the failed list
   * @param item The failed download item
   */
  moveToFailed(item) {
    console.log('[DocumentTrackingComponent] moveToFailed() - Moving item to failed list:', item);
    // Check if this item is already in the failed list to prevent duplicates
    const existingItem = this.failedDownloads.find(failed => failed.documentId === item.documentId);
    if (existingItem) {
      console.log('[DocumentTrackingComponent] moveToFailed() - Item already exists in failed list, skipping:', item.documentId);
      return;
    }
    this.failedDownloads.push(item);
    console.log('[DocumentTrackingComponent] moveToFailed() - Failed downloads count:', this.failedDownloads.length);
  }
  /**
   * Retries a failed download
   * @param item The failed download item to retry
   */
  retryDownload(item) {
    console.log('[DocumentTrackingComponent] retryDownload() - Retrying download for item:', item);
    if (!this.currentPatient) {
      console.error('[DocumentTrackingComponent] retryDownload() - No current patient available for retry');
      return;
    }
    // Remove from failed list
    const index = this.failedDownloads.findIndex(failed => failed.documentId === item.documentId);
    if (index > -1) {
      console.log('[DocumentTrackingComponent] retryDownload() - Removing item from failed list');
      this.failedDownloads.splice(index, 1);
    }
    // Add to download queue
    console.log('[DocumentTrackingComponent] retryDownload() - Adding item to download queue');
    this.downloadQueue.push({
      documentId: item.documentId,
      status: 'pending'
    });
    // Create download request for this single item
    const retryRequest = {
      mediaInstanceId: parseInt(item.documentId)
    };
    console.log('[DocumentTrackingComponent] retryDownload() - Created retry request:', retryRequest);
    // Start sequential download for this single item using current patient context
    console.log('[DocumentTrackingComponent] retryDownload() - Starting sequential download with current patient context');
    this.startDownload(this.currentPatient.personId, this.currentPatient.encntrId, [retryRequest]);
  }
  /**
   * Clears completed downloads
   */
  clearCompleted() {
    this.completedDownloads = [];
  }
  /**
   * Clears failed downloads
   */
  clearFailed() {
    this.failedDownloads = [];
  }
  /**
   * Gets the status text for display
   * @param status The download status
   * @returns Status text
   */
  getStatusText(status) {
    switch (status) {
      case 'pending':
        return 'Pending';
      case 'downloading':
        return 'Downloading';
      case 'completed':
        return 'Completed';
      case 'failed':
        return 'Failed';
      default:
        return 'Unknown';
    }
  }
  /**
   * Gets the status class for styling
   * @param status The download status
   * @returns CSS class name
   */
  getStatusClass(status) {
    switch (status) {
      case 'pending':
        return 'status-pending';
      case 'downloading':
        return 'status-downloading';
      case 'completed':
        return 'status-completed';
      case 'failed':
        return 'status-failed';
      default:
        return 'status-unknown';
    }
  }
  /**
   * Gets the current download progress percentage
   * @returns Progress percentage as a number
   */
  getDownloadProgress() {
    if (this.downloadQueue.length === 0) return 0;
    const totalItems = this.downloadQueue.length;
    const completedItems = this.downloadQueue.filter(item => item.status === 'completed').length;
    const failedItems = this.downloadQueue.filter(item => item.status === 'failed').length;
    return Math.round((completedItems + failedItems) / totalItems * 100);
  }
  /**
   * Gets the current download status text
   * @returns Status text for display
   */
  getCurrentDownloadStatus() {
    if (!this.isDownloading) return 'No downloads in progress';
    const totalItems = this.downloadQueue.length;
    const completedItems = this.downloadQueue.filter(item => item.status === 'completed').length;
    const failedItems = this.downloadQueue.filter(item => item.status === 'failed').length;
    const downloadingItems = this.downloadQueue.filter(item => item.status === 'downloading').length;
    const pendingItems = this.downloadQueue.filter(item => item.status === 'pending').length;
    if (downloadingItems > 0) {
      const downloadingItem = this.downloadQueue.find(item => item.status === 'downloading');
      return `Downloading: ${downloadingItem?.documentName || 'Document'} (${completedItems + failedItems + 1}/${totalItems})`;
    }
    return `Processing: ${completedItems + failedItems}/${totalItems} completed`;
  }
  static #_ = this.ɵfac = function DocumentTrackingComponent_Factory(t) {
    return new (t || DocumentTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__.DocumentExtractService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: DocumentTrackingComponent,
    selectors: [["app-document-tracking"]],
    inputs: {
      currentPatient: "currentPatient"
    },
    outputs: {
      downloadRequest: "downloadRequest"
    },
    decls: 10,
    vars: 6,
    consts: [[1, "document-tracking-container"], [1, "tracking-header"], ["class", "progress-overview", 4, "ngIf"], ["class", "tracking-section", 4, "ngIf"], ["class", "extract-section", 4, "ngIf"], ["class", "no-activity", 4, "ngIf"], [1, "progress-overview"], [1, "progress-info"], [1, "progress-status"], [1, "progress-bar-overall"], [1, "progress-fill-overall"], [1, "progress-text-overall"], [1, "tracking-section"], [1, "download-list"], ["class", "download-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "download-item"], [1, "download-info"], [1, "document-details"], ["class", "document-name", 4, "ngIf"], [1, "document-id"], ["class", "document-type", 4, "ngIf"], [1, "status"], ["class", "progress-container", 4, "ngIf"], [1, "document-name"], [1, "document-type"], [1, "progress-container"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "section-header"], [1, "btn", "btn-outline", 3, "click"], ["class", "download-item status-completed", 4, "ngFor", "ngForOf"], [1, "download-item", "status-completed"], ["class", "filename", 4, "ngIf"], [1, "completion-indicator"], [1, "checkmark"], [1, "filename"], ["class", "download-item status-failed", 4, "ngFor", "ngForOf"], [1, "download-item", "status-failed"], ["class", "error-message", 4, "ngIf"], [1, "btn", "btn-retry", 3, "click"], [1, "error-message"], [1, "extract-section"], [3, "personId", "encntrId", "downloadedFiles", "extractComplete"], [1, "no-activity"]],
    template: function DocumentTrackingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Document Download Tracking");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, DocumentTrackingComponent_div_4_Template, 8, 4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, DocumentTrackingComponent_div_5_Template, 5, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, DocumentTrackingComponent_div_6_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, DocumentTrackingComponent_div_7_Template, 8, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, DocumentTrackingComponent_div_8_Template, 2, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, DocumentTrackingComponent_div_9_Template, 5, 0, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isDownloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.downloadQueue.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.completedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.failedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showExtractComponent && ctx.currentPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.downloadQueue.length === 0 && ctx.completedDownloads.length === 0 && ctx.failedDownloads.length === 0 && !ctx.showExtractComponent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_1__.ExtractDownloadComponent],
    styles: [".document-tracking-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.tracking-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.tracking-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.progress-overview[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 20px;\n  border: 1px solid #e9ecef;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-overall[_ngcontent-%COMP%] {\n  height: 12px;\n  background-color: #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-overall[_ngcontent-%COMP%]   .progress-fill-overall[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n  transition: width 0.3s ease;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-text-overall[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  text-align: center;\n}\n\n.tracking-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.tracking-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  border-left: 4px solid transparent;\n  transition: all 0.2s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-left-color: #ffc107;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-downloading[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-left-color: #17a2b8;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-completed[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-left-color: #28a745;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-left-color: #dc3545;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-id[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  font-family: monospace;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc3545;\n  margin-top: 4px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 120px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #007bff;\n  transition: width 0.3s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  min-width: 40px;\n  text-align: right;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .completion-indicator[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 18px;\n  font-weight: bold;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background-color: #007bff;\n  color: white;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  color: white;\n}\n\n.no-activity[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.no-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #999;\n}\n\n@media (max-width: 768px) {\n  .document-tracking-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tracking-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%] {\n    padding: 12px;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-id[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n    font-size: 12px;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtdHJhY2tpbmcvZG9jdW1lbnQtdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSwyQkFBQTtBQUZSO0FBTUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSk47O0FBU0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7QUFORjtBQVFFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsU0FBQTtBQVBOOztBQWFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFWSjtBQVlJO0VBQ0UsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQVhOO0FBY0k7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBWk47QUFlSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFiTjtBQWdCSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFkTjtBQWlCSTtFQUNFLE9BQUE7QUFmTjtBQWlCTTtFQUNFLGtCQUFBO0FBZlI7QUFpQlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFmVjtBQWtCUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhCVjtBQW1CUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFqQlY7QUFvQlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBbEJWO0FBc0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXBCUjtBQXVCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXlCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQXlCTTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkJSO0FBeUJRO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUF2QlY7QUEyQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXpCUjtBQThCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE1QlI7QUFnQ0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUE5Qk47QUFnQ007RUFDRSx5QkFBQTtBQTlCUjs7QUFvQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpDRjtBQW1DRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBakNKO0FBbUNJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBakNOOztBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFuQ0Y7QUFxQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFuQ0o7QUFxQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBbkNOOztBQXlDQTtFQUNFO0lBQ0UsYUFBQTtFQXRDRjtFQXlDQTtJQUNFLGFBQUE7RUF2Q0Y7RUF5Q0U7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFQXZDSjtFQXlDSTtJQUNFLG9CQUFBO0VBdkNOO0VBNENBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFNBQUE7RUExQ0Y7RUE0Q0U7SUFDRSxlQUFBO0VBMUNKO0VBNkNFO0lBQ0Usb0JBQUE7RUEzQ0o7QUFDRjtBQStDQTtFQUNFO0lBQ0UsYUFBQTtFQTdDRjtFQWdESTtJQUNFLGVBQUE7RUE5Q047RUFpREk7SUFDRSxlQUFBO0VBL0NOO0VBb0RJO0lBQ0UsZUFBQTtFQWxETjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LXRyYWNraW5nLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi50cmFja2luZy1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuXG4gIGgzIHtcbiAgICBtYXJnaW46IDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLnByb2dyZXNzLW92ZXJ2aWV3IHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gIC5wcm9ncmVzcy1pbmZvIHtcbiAgICAucHJvZ3Jlc3Mtc3RhdHVzIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWJhci1vdmVyYWxsIHtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAucHJvZ3Jlc3MtZmlsbC1vdmVyYWxsIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMwMDU2YjMpO1xuICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLXRleHQtb3ZlcmFsbCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gIH1cbn1cblxuLnRyYWNraW5nLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMCAwIDE2cHggMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgfVxufVxuXG4uZG93bmxvYWQtbGlzdCB7XG4gIC5kb3dubG9hZC1pdGVtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtcGVuZGluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmM2NkO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICNmZmMxMDc7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtZG93bmxvYWRpbmcge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2QxZWNmMTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTdhMmI4O1xuICAgIH1cblxuICAgICYuc3RhdHVzLWNvbXBsZXRlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtZmFpbGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjMzU0NTtcbiAgICB9XG5cbiAgICAuZG93bmxvYWQtaW5mbyB7XG4gICAgICBmbGV4OiAxO1xuXG4gICAgICAuZG9jdW1lbnQtZGV0YWlscyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAuZG9jdW1lbnQtbmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRvY3VtZW50LWlkIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZG9jdW1lbnQtdHlwZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5maWxlbmFtZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN0YXR1cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogMTJweDtcbiAgICAgIG1pbi13aWR0aDogMTIwcHg7XG5cbiAgICAgIC5wcm9ncmVzcy1iYXIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBoZWlnaHQ6IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIC5wcm9ncmVzcy1maWxsIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjNzIGVhc2U7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnByb2dyZXNzLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBtaW4td2lkdGg6IDQwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5jb21wbGV0aW9uLWluZGljYXRvciB7XG4gICAgICAuY2hlY2ttYXJrIHtcbiAgICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmJ0bi1yZXRyeSB7XG4gICAgICBwYWRkaW5nOiA2cHggMTJweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiA4cHggMTZweDtcbiAgYm9yZGVyOiBub25lO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICYuYnRuLW91dGxpbmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM2Yzc1N2Q7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2Yzc1N2Q7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuICB9XG59XG5cbi5uby1hY3Rpdml0eSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNDBweDtcbiAgY29sb3I6ICM2NjY7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICBwIHtcbiAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICBmb250LXNpemU6IDE2cHg7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjOTk5O1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5kb2N1bWVudC10cmFja2luZy1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAudHJhY2tpbmctc2VjdGlvbiB7XG4gICAgcGFkZGluZzogMTZweDtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICBnYXA6IDEycHg7XG5cbiAgICAgIC5idG4ge1xuICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZG93bmxvYWQtbGlzdCAuZG93bmxvYWQtaXRlbSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDEycHg7XG5cbiAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuYnRuLXJldHJ5IHtcbiAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRvd25sb2FkLWxpc3QgLmRvd25sb2FkLWl0ZW0ge1xuICAgIHBhZGRpbmc6IDEycHg7XG5cbiAgICAuZG93bmxvYWQtaW5mbyB7XG4gICAgICAuZG9jdW1lbnQtaWQge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIC5zdGF0dXMge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gICAgICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 8706:
/*!****************************************************************!*\
  !*** ./src/app/extract-download/extract-download.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExtractDownloadComponent: () => (/* binding */ ExtractDownloadComponent)
/* harmony export */ });
/* harmony import */ var _Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/document-extract.service */ 3402);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);





function ExtractDownloadComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u2717");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\uD83D\uDCC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstyleProp"]("width", ctx_r4.extractProgress, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx_r4.extractProgress, "%");
  }
}
function ExtractDownloadComponent_div_18_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Metadata File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r9.extractResult.metadataFile, " ");
  }
}
function ExtractDownloadComponent_div_18_div_6_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Files Included:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r10.extractResult.extractInfo == null ? null : ctx_r10.extractResult.extractInfo.fileCount, " documents ");
  }
}
function ExtractDownloadComponent_div_18_div_6_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r11.extractResult.message, " ");
  }
}
function ExtractDownloadComponent_div_18_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 28)(1, "div", 29)(2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Zip File:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ExtractDownloadComponent_div_18_div_6_div_5_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ExtractDownloadComponent_div_18_div_6_div_6_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, ExtractDownloadComponent_div_18_div_6_div_7_Template, 4, 1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r8.extractResult.zipFileName || "extracted_documents.zip", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.extractResult.metadataFile);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.extractResult.extractInfo == null ? null : ctx_r8.extractResult.extractInfo.fileCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r8.extractResult.message);
  }
}
function ExtractDownloadComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Extract Complete");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Your document extract has been created successfully.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ExtractDownloadComponent_div_18_div_6_Template, 8, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExtractDownloadComponent_div_18_Template_button_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r12.downloadZipFile());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.extractResult);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r5.getDownloadButtonText(), " ");
  }
}
function ExtractDownloadComponent_div_19_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 34)(1, "div", 28)(2, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 36)(5, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
  }
  if (rf & 2) {
    const file_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r15.documentName || file_r15.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r15.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](file_r15.filename);
  }
}
function ExtractDownloadComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 31)(1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ExtractDownloadComponent_div_19_div_4_Template, 9, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Files to Extract (", ctx_r6.downloadedFiles.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r6.downloadedFiles)("ngForTrackBy", ctx_r6.trackByFilename);
  }
}
function ExtractDownloadComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 39)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "No downloaded files available for extract.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Complete document downloads first to enable extract functionality.");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
class ExtractDownloadComponent {
  constructor(documentService) {
    this.documentService = documentService;
    this.personId = 0;
    this.encntrId = 0;
    this.downloadedFiles = [];
    this.extractComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.isExtracting = false;
    this.extractProgress = 0;
    this.extractStatus = '';
    this.extractResult = null;
  }
  ngOnInit() {
    console.log('[ExtractDownloadComponent] ngOnInit() - Component initialized with:', {
      personId: this.personId,
      encntrId: this.encntrId,
      downloadedFilesCount: this.downloadedFiles.length
    });
  }
  /**
   * TrackBy function for ngFor optimization
   * @param index The index of the item
   * @param file The file object
   * @returns The filename as the track key
   */
  trackByFilename(index, file) {
    return file.filename;
  }
  /**
   * Starts the extract process to create metadata file and zip archive
   */
  startExtract() {
    console.log('[ExtractDownloadComponent] startExtract() - Starting extract process');
    if (this.downloadedFiles.length === 0) {
      console.warn('[ExtractDownloadComponent] startExtract() - No downloaded files available for extract');
      return;
    }
    this.isExtracting = true;
    this.extractProgress = 0;
    this.extractStatus = 'Preparing extract request...';
    this.extractResult = null;
    console.log('[ExtractDownloadComponent] startExtract() - Creating extract request with files:', this.downloadedFiles);
    // Create the extract request
    const extractRequest = {
      personId: this.personId,
      encntrId: this.encntrId,
      downloadedFiles: this.downloadedFiles
    };
    this.extractStatus = 'Sending extract request to server...';
    this.extractProgress = 25;
    this.documentService.createExtract(extractRequest).subscribe({
      next: response => {
        console.log('[ExtractDownloadComponent] startExtract() - Received extract response:', response);
        this.handleExtractResponse(response);
      },
      error: error => {
        console.error('[ExtractDownloadComponent] startExtract() - Extract error:', error);
        this.handleExtractError(error);
      }
    });
  }
  /**
   * Handles successful extract response
   * @param response The extract response from the service
   */
  handleExtractResponse(response) {
    console.log('[ExtractDownloadComponent] handleExtractResponse() - Processing extract response:', response);
    this.extractProgress = 100;
    this.extractStatus = response.success ? 'Extract completed successfully!' : 'Extract failed';
    this.extractResult = response;
    this.isExtracting = false;
    if (response.success) {
      console.log('[ExtractDownloadComponent] handleExtractResponse() - Extract successful, emitting result');
      this.extractComplete.emit(response);
    }
  }
  /**
   * Handles extract errors
   * @param error The error from the extract service
   */
  handleExtractError(error) {
    console.error('[ExtractDownloadComponent] handleExtractError() - Extract error:', error);
    this.extractProgress = 0;
    this.extractStatus = 'Extract failed';
    this.extractResult = {
      success: false,
      message: error.message || 'Extract process failed'
    };
    this.isExtracting = false;
  }
  /**
   * Downloads the created zip file with authentication
   */
  downloadZipFile() {
    var _this = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.extractResult?.zipFileUrl) {
        console.log('[ExtractDownloadComponent] downloadZipFile() - Downloading zip file with authentication:', _this.extractResult.zipFileUrl);
        try {
          // Create an XMLHttpRequest to handle the authenticated download
          const xhr = new XMLHttpRequest();
          // Use MPAGES_SVC_AUTH to add authentication headers
          if (window.external?.MPAGES_SVC_AUTH) {
            console.log('[ExtractDownloadComponent] downloadZipFile() - Using MPAGES_SVC_AUTH for authentication');
            yield window.external.MPAGES_SVC_AUTH(xhr);
          } else if (window.chrome?.webview?.hostObjects?.EdgeSVCAuth) {
            // Fallback for Edge implementation
            console.log('[ExtractDownloadComponent] downloadZipFile() - Using EdgeSVCAuth for authentication');
            const authResult = yield window.chrome.webview.hostObjects.EdgeSVCAuth();
            xhr.setRequestHeader("HNAM-Authorization", authResult);
          } else {
            console.warn('[ExtractDownloadComponent] downloadZipFile() - No authentication method available, proceeding without auth');
          }
          // Set up the request
          xhr.open('GET', _this.extractResult.zipFileUrl, true);
          xhr.responseType = 'blob';
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('[ExtractDownloadComponent] downloadZipFile() - Download successful, creating blob download');
              // Create blob from response
              const blob = new Blob([xhr.response], {
                type: 'application/zip'
              });
              // Create download link
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              // Use the descriptive filename from the extract response
              const downloadFilename = _this.extractResult?.zipFileName || 'extracted_documents.zip';
              console.log('[ExtractDownloadComponent] downloadZipFile() - Using filename for download:', downloadFilename);
              link.download = downloadFilename;
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              // Clean up the blob URL
              window.URL.revokeObjectURL(url);
            } else {
              console.error('[ExtractDownloadComponent] downloadZipFile() - Download failed with status:', xhr.status);
              alert('Download failed. Please try again.');
            }
          };
          xhr.onerror = () => {
            console.error('[ExtractDownloadComponent] downloadZipFile() - Download error occurred');
            alert('Download failed. Please try again.');
          };
          // Send the request
          xhr.send();
        } catch (error) {
          console.error('[ExtractDownloadComponent] downloadZipFile() - Error during authenticated download:', error);
          // Fallback to direct link if authentication fails
          console.log('[ExtractDownloadComponent] downloadZipFile() - Falling back to direct link download');
          const link = document.createElement('a');
          link.href = _this.extractResult.zipFileUrl;
          const downloadFilename = _this.extractResult?.zipFileName || 'extracted_documents.zip';
          link.download = downloadFilename;
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      }
    })();
  }
  /**
   * Gets the extract button text based on current state
   * @returns Button text
   */
  getExtractButtonText() {
    if (this.isExtracting) {
      return 'Creating Extract...';
    }
    return 'Create Extract';
  }
  /**
   * Gets the extract status text for display
   * @returns Status text
   */
  getExtractStatusText() {
    if (this.isExtracting) {
      return `${this.extractStatus} (${this.extractProgress}%)`;
    }
    if (this.extractResult) {
      return this.extractResult.success ? 'Extract completed successfully!' : 'Extract failed';
    }
    return 'Ready to create extract';
  }
  /**
   * Gets the CSS class for the extract status
   * @returns CSS class name
   */
  getExtractStatusClass() {
    if (this.isExtracting) {
      return 'status-extracting';
    }
    if (this.extractResult) {
      return this.extractResult.success ? 'status-success' : 'status-failed';
    }
    return 'status-ready';
  }
  /**
   * Checks if the extract button should be disabled
   * @returns True if button should be disabled
   */
  isExtractButtonDisabled() {
    return this.isExtracting || this.downloadedFiles.length === 0;
  }
  /**
   * Checks if the download button should be shown
   * @returns True if download button should be shown
   */
  shouldShowDownloadButton() {
    return this.extractResult?.success === true && !!this.extractResult.zipFileUrl;
  }
  /**
   * Gets the download button text with filename
   * @returns Download button text
   */
  getDownloadButtonText() {
    if (this.extractResult?.zipFileName) {
      return `📥 Download ${this.extractResult.zipFileName}`;
    }
    return '📥 Download Zip File';
  }
  static #_ = this.ɵfac = function ExtractDownloadComponent_Factory(t) {
    return new (t || ExtractDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_1__.DocumentExtractService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: ExtractDownloadComponent,
    selectors: [["app-extract-download"]],
    inputs: {
      personId: "personId",
      encntrId: "encntrId",
      downloadedFiles: "downloadedFiles"
    },
    outputs: {
      extractComplete: "extractComplete"
    },
    decls: 21,
    vars: 13,
    consts: [[1, "extract-download-container"], [1, "extract-header"], [1, "extract-description"], [1, "extract-status"], [1, "status-icon"], ["class", "spinner", 4, "ngIf"], ["class", "success-icon", 4, "ngIf"], ["class", "error-icon", 4, "ngIf"], ["class", "ready-icon", 4, "ngIf"], [1, "status-text"], ["class", "progress-container", 4, "ngIf"], [1, "extract-actions"], [1, "btn", "btn-primary", 3, "disabled", "click"], ["class", "download-section", 4, "ngIf"], ["class", "file-summary", 4, "ngIf"], ["class", "no-files", 4, "ngIf"], [1, "spinner"], [1, "success-icon"], [1, "error-icon"], [1, "ready-icon"], [1, "progress-container"], [1, "progress-bar"], [1, "progress-fill"], [1, "progress-text"], [1, "download-section"], [1, "download-info"], ["class", "file-info", 4, "ngIf"], [1, "btn", "btn-success", 3, "click"], [1, "file-info"], [1, "file-detail"], ["class", "file-detail", 4, "ngIf"], [1, "file-summary"], [1, "file-list"], ["class", "file-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "file-item"], [1, "file-name"], [1, "file-details"], [1, "file-type"], [1, "file-path"], [1, "no-files"]],
    template: function ExtractDownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Document Extract & Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " Create a metadata file and zip archive from downloaded documents. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, ExtractDownloadComponent_span_8_Template, 2, 0, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, ExtractDownloadComponent_span_9_Template, 2, 0, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, ExtractDownloadComponent_span_10_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, ExtractDownloadComponent_span_11_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, ExtractDownloadComponent_div_14_Template, 5, 3, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11)(16, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ExtractDownloadComponent_Template_button_click_16_listener() {
          return ctx.startExtract();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, ExtractDownloadComponent_div_18_Template, 9, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, ExtractDownloadComponent_div_19_Template, 5, 3, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, ExtractDownloadComponent_div_20_Template, 5, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassMap"](ctx.getExtractStatusClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isExtracting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isExtracting && (ctx.extractResult == null ? null : ctx.extractResult.success));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isExtracting && ctx.extractResult && !ctx.extractResult.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isExtracting && !ctx.extractResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getExtractStatusText(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isExtracting);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.isExtractButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.getExtractButtonText(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.shouldShowDownloadButton());
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.downloadedFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.downloadedFiles.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".extract-download-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.extract-header[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  text-align: center;\n}\n.extract-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.extract-header[_ngcontent-%COMP%]   .extract-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n\n.extract-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  border-left: 4px solid transparent;\n}\n.extract-status.status-ready[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-left-color: #6c757d;\n}\n.extract-status.status-extracting[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-left-color: #17a2b8;\n}\n.extract-status.status-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-left-color: #28a745;\n}\n.extract-status.status-failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-left-color: #dc3545;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .ready-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.extract-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: #333;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.progress-container[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n  transition: width 0.3s ease;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #666;\n}\n\n.extract-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 24px;\n}\n\n.download-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 8px;\n  padding: 20px;\n  margin-bottom: 24px;\n  text-align: center;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  text-align: left;\n  background: white;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-detail[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-detail[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.file-summary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.file-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #666;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-type[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-path[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #999;\n}\n\n.no-files[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-files[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.no-files[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #999;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n\n@media (max-width: 768px) {\n  .extract-download-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .extract-status[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n  .file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n@media (max-width: 480px) {\n  .extract-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 8px 16px;\n    font-size: 13px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXh0cmFjdC1kb3dubG9hZC9leHRyYWN0LWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBSEo7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBT0k7RUFDRSxrQ0FBQTtBQUxOO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFTSTtFQUNFLGNBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtBQVJOO0FBWUU7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVko7O0FBY0E7RUFDRTtJQUFPLHVCQUFBO0VBVlA7RUFXQTtJQUFLLHlCQUFBO0VBUkw7QUFDRjtBQVVBO0VBQ0UsbUJBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNFLFlBQUE7RUFDQSxvREFBQTtFQUNBLDJCQUFBO0FBUk47QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVhGO0FBYUU7RUFDRSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYTjtBQWNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpOO0FBZUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWVNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWJSO0FBZVE7RUFDRSxnQkFBQTtBQWJWOztBQW9CQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQWpCRjtBQW1CRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWpCSjtBQXFCSTtFQUNFLGFBQUE7RUFDQSxnQ0FBQTtFQUNBLHNDQUFBO0FBbkJOO0FBcUJNO0VBQ0UsbUJBQUE7QUFuQlI7QUFzQk07RUFDRSx5QkFBQTtBQXBCUjtBQXdCUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQXRCVjtBQXlCUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUF2QlY7QUF5QlU7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQXZCWjtBQTBCVTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQXhCWjs7QUFnQ0E7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0FBN0JGO0FBK0JFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBN0JKO0FBK0JJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQTdCTjs7QUFrQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUEvQkY7QUFpQ0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUEvQko7QUFrQ0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFoQ0o7QUFrQ0k7RUFDRSx5QkFBQTtBQWhDTjtBQW9DRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQWxDSjtBQW9DSTtFQUNFLHlCQUFBO0FBbENOOztBQXdDQTtFQUNFO0lBQ0UsYUFBQTtFQXJDRjtFQXdDQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBdENGO0VBeUNBO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBdkNGO0FBQ0Y7QUEwQ0E7RUFDRTtJQUNFLGVBQUE7RUF4Q0Y7RUEyQ0E7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUF6Q0Y7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi5leHRyYWN0LWRvd25sb2FkLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5leHRyYWN0LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAuZXh0cmFjdC1kZXNjcmlwdGlvbiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjNjY2O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxufVxuXG4uZXh0cmFjdC1zdGF0dXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEycHg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcblxuICAmLnN0YXR1cy1yZWFkeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzZjNzU3ZDtcbiAgfVxuXG4gICYuc3RhdHVzLWV4dHJhY3Rpbmcge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMWVjZjE7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxN2EyYjg7XG4gIH1cblxuICAmLnN0YXR1cy1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMjhhNzQ1O1xuICB9XG5cbiAgJi5zdGF0dXMtZmFpbGVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhkN2RhO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMzNTQ1O1xuICB9XG5cbiAgLnN0YXR1cy1pY29uIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgXG4gICAgLnNwaW5uZXIge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG4gICAgXG4gICAgLnN1Y2Nlc3MtaWNvbiB7XG4gICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICB9XG4gICAgXG4gICAgLmVycm9yLWljb24ge1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuICAgIFxuICAgIC5yZWFkeS1pY29uIHtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIH1cbiAgfVxuXG4gIC5zdGF0dXMtdGV4dCB7XG4gICAgZmxleDogMTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICB9XG59XG5cbkBrZXlmcmFtZXMgc3BpbiB7XG4gIGZyb20geyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICB0byB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cbn1cblxuLnByb2dyZXNzLWNvbnRhaW5lciB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgLnByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMwMDU2YjMpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9ncmVzcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG5cbi5leHRyYWN0LWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5kb3dubG9hZC1zZWN0aW9uIHtcbiAgYmFja2dyb3VuZDogI2Y4ZjlmYTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmRvd25sb2FkLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5maWxlLWluZm8ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgICAgIC5maWxlLWRldGFpbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmZpbGUtc3VtbWFyeSB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBoNCB7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmZpbGUtbGlzdCB7XG4gICAgLmZpbGUtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICB9XG5cbiAgICAgIC5maWxlLWluZm8ge1xuICAgICAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgICAuZmlsZS10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmlsZS1wYXRoIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5vLWZpbGVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICB9XG59XG5cbi5idG4ge1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB9XG4gIH1cblxuICAmLmJ0bi1zdWNjZXNzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzFlN2UzNDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuZXh0cmFjdC1kb3dubG9hZC1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuZXh0cmFjdC1zdGF0dXMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGdhcDogOHB4O1xuICB9XG5cbiAgLmZpbGUtc3VtbWFyeSAuZmlsZS1saXN0IC5maWxlLWl0ZW0gLmZpbGUtaW5mbyAuZmlsZS1kZXRhaWxzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogNHB4O1xuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuZXh0cmFjdC1oZWFkZXIgaDMge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgfVxuXG4gIC5idG4ge1xuICAgIHBhZGRpbmc6IDhweCAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgfVxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
  });
}


/***/ }),

/***/ 1575:
/*!******************************************************************!*\
  !*** ./src/app/patient-selection/patient-selection.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PatientSelectionComponent: () => (/* binding */ PatientSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/document-extract.service */ 3402);
/* harmony import */ var _services_cerner_action_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/cerner-action.service */ 7420);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);







function PatientSelectionComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 14)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Loading configuration...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PatientSelectionComponent_div_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "FIN is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PatientSelectionComponent_div_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "FIN must be at least 1 character");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PatientSelectionComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, PatientSelectionComponent_div_10_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PatientSelectionComponent_div_10_span_2_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    let tmp_0_0;
    let tmp_1_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_0_0 = ctx_r1.patientForm.get("fin")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors["required"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", (tmp_1_0 = ctx_r1.patientForm.get("fin")) == null ? null : tmp_1_0.errors == null ? null : tmp_1_0.errors["minlength"]);
  }
}
function PatientSelectionComponent_span_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Searching...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PatientSelectionComponent_span_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Search Patients");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}
function PatientSelectionComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
  }
}
function PatientSelectionComponent_div_18_div_4_span_30_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const patient_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Discharge: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, patient_r10.dischDtTm, "MM/dd/yyyy"), "");
  }
}
function PatientSelectionComponent_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientSelectionComponent_div_18_div_4_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14);
      const patient_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r13.selectPatient(patient_r10));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 22)(5, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 27)(15, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 32)(24, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, PatientSelectionComponent_div_18_div_4_span_30_Template, 3, 4, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "\u2192");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const patient_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](patient_r10.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("FIN: ", patient_r10.fin, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("MRN: ", patient_r10.mrn, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("DOB: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](11, 12, patient_r10.dateOfBirth, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Sex: ", patient_r10.sex, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Facility: ", patient_r10.facility, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Unit: ", patient_r10.unit, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Type: ", patient_r10.encntrType, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Service: ", patient_r10.medService, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Registration: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](26, 15, patient_r10.regDtTm, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Arrival: ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 18, patient_r10.arrivalDtTm, "MM/dd/yyyy"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", patient_r10.dischDtTm.getTime() > 0);
  }
}
function PatientSelectionComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 16)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Select a Patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PatientSelectionComponent_div_18_div_4_Template, 33, 21, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r5.patientSearchResults);
  }
}
function PatientSelectionComponent_div_19_div_67_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Discharge Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](5, 1, ctx_r15.patientInfo.dischDtTm, "MM/dd/yyyy"));
  }
}
function PatientSelectionComponent_div_19_div_73_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 41)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "No documents found for this patient");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
}
function PatientSelectionComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 38)(2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Patient Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientSelectionComponent_div_19_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.openChart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " Open Chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 40)(9, "div", 41)(10, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "FIN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 41)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 41)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "MRN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 41)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Date of Birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](29, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 41)(31, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Sex:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 41)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Facility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 41)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 41)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Encounter Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 41)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Medical Service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 41)(56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Registration Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](60, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 41)(62, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Arrival Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](64, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](66, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](67, PatientSelectionComponent_div_19_div_67_Template, 6, 4, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 41)(69, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70, "Documents Found:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](73, PatientSelectionComponent_div_19_div_73_Template, 5, 0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.mrn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](29, 15, ctx_r6.patientInfo.dateOfBirth, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.sex);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.facility);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.encntrType);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.medService);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](60, 18, ctx_r6.patientInfo.regDtTm, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](66, 21, ctx_r6.patientInfo.arrivalDtTm, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.patientInfo.dischDtTm.getTime() > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("", ctx_r6.patientInfo.documents.length, " ", ctx_r6.patientInfo.documents.length === 1 ? "document" : "documents", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r6.patientInfo.documents.length === 0);
  }
}
class PatientSelectionComponent {
  constructor(fb, documentService, cernerActionService) {
    this.fb = fb;
    this.documentService = documentService;
    this.cernerActionService = cernerActionService;
    this.configLoaded = false;
    this.patientSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
    this.loading = false;
    this.patientInfo = null;
    this.patientSearchResults = [];
    this.showPatientSelection = false;
    this.errorMessage = '';
    this.patientForm = this.fb.group({
      fin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(1)]]
    });
  }
  ngOnInit() {}
  /**
   * Handles form submission to search for patients
   */
  onSubmit() {
    if (this.patientForm.valid) {
      this.loading = true;
      this.errorMessage = '';
      this.patientInfo = null;
      this.showPatientSelection = false;
      const fin = this.patientForm.get('fin')?.value;
      this.documentService.searchPatients(fin).subscribe({
        next: patients => {
          this.patientSearchResults = patients;
          this.showPatientSelection = patients.length > 0;
          this.loading = false;
          if (patients.length === 0) {
            this.errorMessage = 'No patients found with the provided FIN.';
          }
        },
        error: error => {
          this.errorMessage = 'Error searching for patients. Please try again.';
          this.loading = false;
          console.error('Error searching for patients:', error);
        }
      });
    }
  }
  /**
   * Selects a patient and loads their documents
   * @param patient The selected patient
   */
  selectPatient(patient) {
    this.loading = true;
    this.errorMessage = '';
    this.showPatientSelection = false;
    this.documentService.getPatientDocuments(patient.encntrId).subscribe({
      next: patientInfo => {
        this.patientInfo = patientInfo;
        this.loading = false;
        // Emit the patient information to parent component
        this.patientSelected.emit(patientInfo);
      },
      error: error => {
        this.errorMessage = 'Error retrieving patient documents. Please try again.';
        this.loading = false;
        console.error('Error fetching patient documents:', error);
      }
    });
  }
  /**
   * Resets the form and clears patient data
   */
  resetForm() {
    this.patientForm.reset();
    this.patientInfo = null;
    this.patientSearchResults = [];
    this.showPatientSelection = false;
    this.errorMessage = '';
  }
  /**
   * Opens the patient chart using Cerner actions
   */
  openChart() {
    if (this.patientInfo) {
      this.cernerActionService.openChart(this.patientInfo.personId, this.patientInfo.encntrId);
    }
  }
  static #_ = this.ɵfac = function PatientSelectionComponent_Factory(t) {
    return new (t || PatientSelectionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__.DocumentExtractService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_cerner_action_service__WEBPACK_IMPORTED_MODULE_1__.CernerActionService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
    type: PatientSelectionComponent,
    selectors: [["app-patient-selection"]],
    inputs: {
      configLoaded: "configLoaded"
    },
    outputs: {
      patientSelected: "patientSelected"
    },
    decls: 20,
    vars: 15,
    consts: [[1, "patient-selection-container"], [1, "form-section"], ["class", "config-status", 4, "ngIf"], [1, "patient-form", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "fin"], ["id", "fin", "type", "text", "formControlName", "fin", "placeholder", "Enter patient FIN", 1, "form-input", 3, "disabled"], ["class", "error-message", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["class", "patient-search-results", 4, "ngIf"], ["class", "patient-info", 4, "ngIf"], [1, "config-status"], [1, "error-message"], [1, "patient-search-results"], [1, "patient-list"], ["class", "patient-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "patient-item", 3, "click"], [1, "patient-info"], [1, "patient-name"], [1, "patient-details"], [1, "fin"], [1, "mrn"], [1, "dob"], [1, "sex"], [1, "encounter-details"], [1, "facility"], [1, "unit"], [1, "encntr-type"], [1, "med-service"], [1, "date-details"], [1, "reg-date"], [1, "arrival-date"], ["class", "discharge-date", 4, "ngIf"], [1, "select-indicator"], [1, "discharge-date"], [1, "patient-info-header"], ["type", "button", "title", "Open patient chart in PowerChart", 1, "btn", "btn-primary", "open-chart-btn", 3, "click"], [1, "info-grid"], [1, "info-item"], ["class", "info-item", 4, "ngIf"], [1, "no-documents"]],
    template: function PatientSelectionComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Patient Document Lookup");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PatientSelectionComponent_div_4_Template, 3, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngSubmit", function PatientSelectionComponent_Template_form_ngSubmit_5_listener() {
          return ctx.onSubmit();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Patient FIN (Financial Identification Number)");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PatientSelectionComponent_div_10_Template, 3, 2, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, PatientSelectionComponent_span_13_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, PatientSelectionComponent_span_14_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientSelectionComponent_Template_button_click_15_listener() {
          return ctx.resetForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, " Reset ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](17, PatientSelectionComponent_div_17_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PatientSelectionComponent_div_18_Template, 5, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PatientSelectionComponent_div_19_Template, 74, 24, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        let tmp_3_0;
        let tmp_5_0;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("disabled", !ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.patientForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("error", ((tmp_3_0 = ctx.patientForm.get("fin")) == null ? null : tmp_3_0.invalid) && ((tmp_3_0 = ctx.patientForm.get("fin")) == null ? null : tmp_3_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx.patientForm.get("fin")) == null ? null : tmp_5_0.invalid) && ((tmp_5_0 = ctx.patientForm.get("fin")) == null ? null : tmp_5_0.touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.patientForm.invalid || ctx.loading || !ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showPatientSelection && ctx.patientSearchResults.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.patientInfo);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DatePipe],
    styles: [".patient-selection-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 24px 0;\n  color: #333;\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.config-status[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #666;\n  font-size: 16px;\n}\n\n.patient-form.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 500;\n  color: #555;\n  font-size: 14px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 16px;\n  border: 2px solid #e1e5e9;\n  border-radius: 6px;\n  font-size: 16px;\n  transition: border-color 0.2s ease;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #dc3545;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 24px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 12px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 120px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #545b62;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 14px;\n}\n\n.patient-info[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 20px;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 20px;\n  font-weight: 600;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 16px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 16px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  font-size: 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #333;\n  font-weight: 500;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span.no-documents[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-style: italic;\n}\n\n.patient-search-results[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  padding: 24px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  margin-bottom: 20px;\n}\n.patient-search-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 20px 0;\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border: 1px solid #e1e5e9;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #007bff;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 16px;\n  margin-bottom: 4px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 14px;\n  color: #666;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .fin[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .mrn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%] {\n  color: #888;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .sex[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #555;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .facility[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .encntr-type[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .med-service[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #777;\n  flex-wrap: wrap;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .reg-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .arrival-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .discharge-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .select-indicator[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  .patient-selection-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-section[_ngcontent-%COMP%], .patient-info[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGF0aWVudC1zZWxlY3Rpb24vcGF0aWVudC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBSFI7QUFNTTtFQUNFLHFCQUFBO0FBSlI7QUFPTTtFQUNFLFdBQUE7QUFMUjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBVUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFSTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQVZKO0FBWUk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBVk47QUFZTTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtBQVZSO0FBYU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFYUjtBQWFRO0VBQ0UseUJBQUE7QUFYVjtBQWVNO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBYlI7QUFlUTtFQUNFLHlCQUFBO0FBYlY7O0FBb0JBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBakJGOztBQW9CQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0Esd0NBQUE7QUFqQkY7QUFtQkU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBakJKO0FBbUJJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFqQk47QUFvQkk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFsQk47QUFvQk07RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7QUFsQlI7QUFxQk07RUFDRSxlQUFBO0FBbkJSO0FBd0JFO0VBQ0UsYUFBQTtFQUNBLDJEQUFBO0VBQ0EsU0FBQTtBQXRCSjtBQXdCSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUF0Qk47QUF3Qk07RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQXRCUjtBQXlCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUF2QlI7QUF5QlE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUF2QlY7O0FBOEJBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBM0JGO0FBNkJFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0JKO0FBK0JJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBN0JOO0FBK0JNO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQTdCUjtBQWdDTTtFQUNFLGdCQUFBO0FBOUJSO0FBaUNNO0VBQ0UsT0FBQTtBQS9CUjtBQWlDUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQS9CVjtBQWtDMEI7RUFDaEIsYUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhDVjtBQWtDVTtFQUNFLGdCQUFBO0FBaENaO0FBbUNVO0VBQ0UsZ0JBQUE7QUFqQ1o7QUFvQ1U7RUFDRSxXQUFBO0FBbENaO0FBcUNVO0VBQ0UsV0FBQTtBQW5DWjtBQXVDUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFyQ1Y7QUF1Q1U7RUFDRSxnQkFBQTtBQXJDWjtBQXdDVTtFQUNFLFdBQUE7QUF0Q1o7QUF5Q1U7RUFDRSxXQUFBO0FBdkNaO0FBMENVO0VBQ0UsV0FBQTtBQXhDWjtBQTRDUTtFQUNFLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBMUNWO0FBNENVO0VBQ0UsV0FBQTtBQTFDWjtBQTZDVTtFQUNFLFdBQUE7QUEzQ1o7QUE4Q1U7RUFDRSxXQUFBO0FBNUNaO0FBaURNO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQS9DUjs7QUFzREE7RUFDRTtJQUNFLGFBQUE7RUFuREY7RUFzREE7O0lBRUUsYUFBQTtFQXBERjtFQXVEQTtJQUNFLHNCQUFBO0VBckRGO0VBdURFO0lBQ0UsV0FBQTtFQXJESjtFQXlEQTtJQUNFLDBCQUFBO0VBdkRGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucGF0aWVudC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBoMiB7XG4gICAgbWFyZ2luOiAwIDAgMjRweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5jb25maWctc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGF0aWVudC1mb3JtIHtcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZm9ybS1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkICNlMWU1ZTk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOmZvY3VzIHtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgICAgIH1cblxuICAgICAgJi5lcnJvciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogI2RjMzU0NTtcbiAgICAgIH1cblxuICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgIH1cblxuICAgICAgJjpkaXNhYmxlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVycm9yLW1lc3NhZ2Uge1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgfVxuICB9XG5cbiAgLmZvcm0tYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcblxuICAgIC5idG4ge1xuICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgfVxuXG4gICAgICAmLmJ0bi1wcmltYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgJi5idG4tc2Vjb25kYXJ5IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NDViNjI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmVycm9yLW1lc3NhZ2Uge1xuICBtYXJnaW4tdG9wOiAxNnB4O1xuICBwYWRkaW5nOiAxMnB4IDE2cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWM2Y2I7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnBhdGllbnQtaW5mbyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcblxuICAucGF0aWVudC1pbmZvLWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5vcGVuLWNoYXJ0LWJ0biB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCA0cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgyMDBweCwgMWZyKSk7XG4gICAgZ2FwOiAxNnB4O1xuXG4gICAgLmluZm8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIGdhcDogNHB4O1xuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgICAgIH1cblxuICAgICAgc3BhbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG5cbiAgICAgICAgJi5uby1kb2N1bWVudHMge1xuICAgICAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4ucGF0aWVudC1zZWFyY2gtcmVzdWx0cyB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgcGFkZGluZzogMjRweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgMjBweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnBhdGllbnQtbGlzdCB7XG4gICAgLnBhdGllbnQtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTFlNWU5O1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgICB9XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC5wYXRpZW50LWluZm8ge1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5wYXRpZW50LW5hbWUge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5wYXRpZW50LWRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgLmZpbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tcm4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZG9iIHtcbiAgICAgICAgICAgIGNvbG9yOiAjODg4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5zZXgge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVuY291bnRlci1kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgY29sb3I6ICM1NTU7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcblxuICAgICAgICAgIC5mYWNpbGl0eSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC51bml0IHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5lbmNudHItdHlwZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAubWVkLXNlcnZpY2Uge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmRhdGUtZGV0YWlscyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIGNvbG9yOiAjNzc3O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgIC5yZWctZGF0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYXJyaXZhbC1kYXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kaXNjaGFyZ2UtZGF0ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlbGVjdC1pbmRpY2F0b3Ige1xuICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAucGF0aWVudC1zZWxlY3Rpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmZvcm0tc2VjdGlvbixcbiAgLnBhdGllbnQtaW5mbyB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC5wYXRpZW50LWZvcm0gLmZvcm0tYWN0aW9ucyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBcbiAgICAuYnRuIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gIC5wYXRpZW50LWluZm8gLmluZm8tZ3JpZCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
  });
}


/***/ }),

/***/ 7420:
/*!***************************************************!*\
  !*** ./src/app/services/cerner-action.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CernerActionService: () => (/* binding */ CernerActionService)
/* harmony export */ });
/* harmony import */ var _Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);



class CernerActionService {
  constructor(mPage) {
    this.mPage = mPage;
  }
  /**
   * Opens a patient chart using the APPLINK command
   * @param personId The person ID of the patient
   * @param encntrId The encounter ID (optional)
   */
  openChart(personId, encntrId) {
    const el = document.getElementById('applink');
    if (!el) {
      console.warn('Element with id "applink" not found');
      return;
    }
    if (personId !== undefined && encntrId !== undefined) {
      // @ts-ignore
      el.href = 'javascript:APPLINK(0,"Powerchart.exe","/PERSONID=' + personId + ' /ENCNTRID=' + encntrId + '")';
    } else if (personId !== undefined) {
      // @ts-ignore
      el.href = 'javascript:APPLINK(0,"Powerchart.exe","/PERSONID=' + personId + '")';
    } else {
      console.warn('personId is required for OPENCHART action');
      return;
    }
    // Execute chart opening action via APPLINK
    el.click();
  }
  /**
   * Handles Cerner actions such as OPENCHART, VIEWORDER, APPT_VIEW, and APPT_HX_VIEW.
   * @param action The Cerner action to perform
   * @param data The data required for the action
   */
  CernerAction(action, data) {
    var _this = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Process Cerner action with provided data
      const el = document.getElementById('applink');
      if (data.encntrId || data.personId || data.orderId) {
        switch (action) {
          case 'OPENCHART':
            _this.openChart(data.personId, data.encntrId);
            break;
          case 'VIEWORDER':
            try {
              yield _this.viewOrderAsync(data);
            } catch (error) {
              _this.mPage.putLog('VIEWORDER error: ' + error);
            }
            break;
          case 'APPT_VIEW':
            try {
              yield _this.viewAppointmentAsync(data, 'APPT_VIEW');
            } catch (error) {
              _this.mPage.putLog('APPT_VIEW error: ' + error);
            }
            break;
          case 'APPT_HX_VIEW':
            try {
              yield _this.viewAppointmentAsync(data, 'APPT_HX_VIEW');
            } catch (error) {
              _this.mPage.putLog('APPT_HX_VIEW error: ' + error);
            }
            break;
          case 'MODIFY_ORDER':
            try {
              yield _this.modifyOrderAsync(data);
            } catch (error) {
              _this.mPage.putLog('MODIFY_ORDER error: ' + error);
            }
            break;
          default:
            alert('The action ' + action + ' has not been defined.');
            break;
        }
      } else {
        // Handle actions that don't require patient context (encntrId or personId)
        switch (action) {
          case 'URL':
            // @ts-ignore
            el.href = 'javascript:APPLINK(100,"' + data + '", "");';
            // @ts-ignore
            el.click();
            break;
          default:
            alert('The action ' + action + ' has not been defined.');
            break;
        }
      }
    })();
  }
  /**
   * Opens the Order Info Viewer for a specific order using DiscernObjectFactory
   * @param data Object containing orderId, personId, and encntrId
   */
  viewOrderAsync(data) {
    var _this2 = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!data.orderId) {
          throw new Error('orderId is required for VIEWORDER action');
        }
        const orderInfoViewer = yield window.external.DiscernObjectFactory("PVVIEWERMPAGE");
        yield orderInfoViewer.LaunchOrderInfoViewer(data.orderId, 1);
      } catch (error) {
        _this2.mPage.putLog('VIEWORDER failed: ' + error);
        throw error;
      }
    })();
  }
  /**
   * Opens the Appointment Viewer or Appointment History Viewer using DiscernObjectFactory
   * @param data Object containing schEventId and scheduleId
   * @param actionType 'APPT_VIEW' or 'APPT_HX_VIEW'
   */
  viewAppointmentAsync(data, actionType) {
    var _this3 = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const eventId = parseFloat(data.schEventId);
        const scheduleId = parseFloat(data.scheduleId);
        if (!(eventId > 0)) {
          throw new Error('schEventId is required and must be > 0 for ' + actionType);
        }
        const schedulingActions = yield window.external.DiscernObjectFactory('PEXSCHEDULINGACTIONS');
        if (actionType === 'APPT_VIEW') {
          schedulingActions.ShowView(eventId, scheduleId);
          _this3.mPage.putLog('APPT_VIEW: ShowView called for eventId=' + eventId + ', scheduleId=' + scheduleId);
        } else if (actionType === 'APPT_HX_VIEW') {
          schedulingActions.ShowHistoryView(eventId, scheduleId);
          _this3.mPage.putLog('APPT_HX_VIEW: ShowHistoryView called for eventId=' + eventId + ', scheduleId=' + scheduleId);
        }
      } catch (error) {
        _this3.mPage.putLog(actionType + ' failed: ' + error);
        throw error;
      }
    })();
  }
  /**
   * Opens the Modal Order Entry Window to modify an existing order using MPAGES_EVENT
   * @param data Object containing orderId, personId, and encntrId
   */
  modifyOrderAsync(data) {
    var _this4 = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (!data.orderId) {
          throw new Error('orderId is required for MODIFY_ORDER action');
        }
        if (!data.personId) {
          throw new Error('personId is required for MODIFY_ORDER action');
        }
        const personId = data.personId;
        const encntrId = data.encntrId;
        const orderId = data.orderId;
        const orderLst = `{MODIFY|${orderId}}`;
        const customizeFlags = data.enablePowerPlans ? 24 : 0;
        const tabLst = '{2|127}{3|127}';
        const defaultDisplay = data.defaultDisplay || 32;
        const silentSignFlag = data.silentSign ? 1 : 0;
        const parameters = `${personId}|${encntrId}|${orderLst}|${customizeFlags}|${tabLst}|${defaultDisplay}|${silentSignFlag}`;
        const mpagesEventCall = `MPAGES_EVENT("ORDERS","${parameters}")`;
        _this4.mPage.putLog('MODIFY_ORDER: Executing MPAGES_EVENT with parameters: ' + parameters);
        const el = document.getElementById('applink');
        if (el) {
          // @ts-ignore
          el.href = 'javascript:' + mpagesEventCall;
          // @ts-ignore
          el.click();
        } else {
          throw new Error('Element with id "applink" not found');
        }
        _this4.mPage.putLog('MODIFY_ORDER: MPAGES_EVENT executed successfully');
      } catch (error) {
        _this4.mPage.putLog('MODIFY_ORDER failed: ' + error);
        throw error;
      }
    })();
  }
  static #_ = this.ɵfac = function CernerActionService_Factory(t) {
    return new (t || CernerActionService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_2__.mPageService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: CernerActionService,
    factory: CernerActionService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 3402:
/*!******************************************************!*\
  !*** ./src/app/services/document-extract.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DocumentExtractService: () => (/* binding */ DocumentExtractService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);



class DocumentExtractService {
  constructor(customService) {
    this.customService = customService;
    this.configData = null;
  }
  /**
   * Loads configuration data from the service
   * @returns Observable of ConfigData
   */
  getConfigData() {
    console.log('[DocumentExtractService] getConfigData() - Starting configuration data load');
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'configData',
            parameters: {
              requestType: 'getConfigData',
              requestData: {}
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: 0,
        encntrId: 0
      }], () => {
        try {
          console.log('[DocumentExtractService] getConfigData() - Service call completed, retrieving data');
          const raw = this.customService.get('configData');
          if (!raw) {
            console.error('[DocumentExtractService] getConfigData() - No configuration data received');
            observer.error('No configuration data received');
            return;
          }
          console.log('[DocumentExtractService] getConfigData() - Configuration data received:', raw);
          this.configData = raw;
          observer.next(raw);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] getConfigData() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Searches for patients by FIN
   * @param fin The patient's FIN (Financial Identification Number)
   * @returns Observable of PatientSearchResult array
   */
  searchPatients(fin) {
    console.log('[DocumentExtractService] searchPatients() - Starting patient search for FIN:', fin);
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'patientSearch',
            parameters: {
              requestType: 'searchPatients',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  fin: fin
                }
              })
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: 0,
        encntrId: 0
      }], () => {
        try {
          console.log('[DocumentExtractService] searchPatients() - Service call completed, retrieving data');
          const raw = this.customService.get('patientSearch');
          if (!raw) {
            console.error('[DocumentExtractService] searchPatients() - No patient search results received');
            observer.error('No patient search results received');
            return;
          }
          console.log('[DocumentExtractService] searchPatients() - Raw response received:', raw);
          // Map the raw response to PatientSearchResult array
          const patients = this.mapToPatientSearchResults(raw);
          console.log('[DocumentExtractService] searchPatients() - Mapped patients:', patients);
          observer.next(patients);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] searchPatients() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Searches for patient documents by Encounter ID
   * @param encntrId The patient's Encounter ID
   * @returns Observable of PatientInfo with documents
   */
  getPatientDocuments(encntrId) {
    console.log('[DocumentExtractService] getPatientDocuments() - Starting document retrieval for encounter ID:', encntrId);
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'patientDocuments',
            parameters: {
              requestType: 'getPatientDocuments',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  encntrId: encntrId
                }
              })
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: 0,
        encntrId: 0
      }], () => {
        try {
          console.log('[DocumentExtractService] getPatientDocuments() - Service call completed, retrieving data');
          const raw = this.customService.get('patientDocuments');
          if (!raw) {
            console.error('[DocumentExtractService] getPatientDocuments() - No response from document service');
            observer.error('No response from document service');
            return;
          }
          console.log('[DocumentExtractService] getPatientDocuments() - Raw response received:', raw);
          // Map the raw response to PatientInfo structure
          const patientInfo = this.mapToPatientInfo(raw);
          console.log('[DocumentExtractService] getPatientDocuments() - Mapped patient info:', patientInfo);
          observer.next(patientInfo);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] getPatientDocuments() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Initiates document download for selected documents
   * @param personId The patient's person ID
   * @param encntrId The patient's encounter ID
   * @param dmsMediaInstanceRequests Array of document media instance requests to download
   * @returns Observable of download status
   */
  downloadDocuments(personId, encntrId, dmsMediaInstanceRequests) {
    console.log('[DocumentExtractService] downloadDocuments() - Starting download for:', {
      personId,
      encntrId,
      requestCount: dmsMediaInstanceRequests.length,
      requests: dmsMediaInstanceRequests
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'downloadDocuments',
            parameters: {
              requestType: 'downloadDocuments',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  personId: personId,
                  encntrId: encntrId,
                  dmsMediaInstanceIds: dmsMediaInstanceRequests
                }
              })
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: personId,
        encntrId: encntrId
      }], () => {
        try {
          console.log('[DocumentExtractService] downloadDocuments() - Service call completed, retrieving data');
          const raw = this.customService.get('downloadDocuments');
          if (!raw) {
            console.error('[DocumentExtractService] downloadDocuments() - No response from download service');
            observer.error('No response from download service');
            return;
          }
          console.log('[DocumentExtractService] downloadDocuments() - Raw response received:', raw);
          // Parse the response to get download results
          const downloadResponse = this.parseDownloadResponse(raw);
          console.log('[DocumentExtractService] downloadDocuments() - Parsed download response:', downloadResponse);
          observer.next(downloadResponse);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] downloadDocuments() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Processes a single document download request sequentially.
   * @param personId The patient's person ID.
   * @param encntrId The patient's encounter ID.
   * @param dmsMediaInstanceRequest The single document media instance request to download.
   * @returns Observable of SequentialDownloadResponse.
   */
  downloadSingleDocument(personId, encntrId, dmsMediaInstanceRequest) {
    console.log('[DocumentExtractService] downloadSingleDocument() - Starting sequential download for single document:', dmsMediaInstanceRequest);
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: `downloadSingleDocument_${dmsMediaInstanceRequest.mediaInstanceId}`,
            parameters: {
              requestType: 'downloadSingleDocument',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  personId: personId,
                  encntrId: encntrId,
                  dmsMediaInstanceId: dmsMediaInstanceRequest.mediaInstanceId
                }
              })
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: personId,
        encntrId: encntrId
      }], () => {
        try {
          console.log('[DocumentExtractService] downloadSingleDocument() - Service call completed, retrieving data');
          const raw = this.customService.get(`downloadSingleDocument_${dmsMediaInstanceRequest.mediaInstanceId}`);
          if (!raw) {
            console.error('[DocumentExtractService] downloadSingleDocument() - No response from download service for single document');
            observer.error('No response from download service for single document');
            return;
          }
          console.log('[DocumentExtractService] downloadSingleDocument() - Raw response received:', raw);
          const downloadResult = this.parseDownloadSingleDocumentResponse(raw);
          console.log('[DocumentExtractService] downloadSingleDocument() - Parsed single document result:', downloadResult);
          const progress = {
            total: 1,
            completed: 1,
            failed: 0,
            current: dmsMediaInstanceRequest,
            results: [downloadResult]
          };
          const isComplete = true;
          const allResults = [downloadResult];
          observer.next({
            progress,
            isComplete,
            allResults
          });
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] downloadSingleDocument() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Downloads documents sequentially, one at a time, with progress tracking.
   * @param personId The patient's person ID.
   * @param encntrId The patient's encounter ID.
   * @param dmsMediaInstanceRequests Array of document media instance requests to download.
   * @returns Observable of SequentialDownloadResponse with progress updates.
   */
  downloadDocumentsSequentially(personId, encntrId, dmsMediaInstanceRequests) {
    console.log('[DocumentExtractService] downloadDocumentsSequentially() - Starting sequential download for:', {
      personId,
      encntrId,
      requestCount: dmsMediaInstanceRequests.length,
      requests: dmsMediaInstanceRequests
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      const total = dmsMediaInstanceRequests.length;
      let completed = 0;
      let failed = 0;
      const allResults = [];
      let currentIndex = 0;
      const processNext = () => {
        if (currentIndex >= total) {
          console.log('[DocumentExtractService] downloadDocumentsSequentially() - All downloads completed');
          const progress = {
            total,
            completed,
            failed,
            current: null,
            results: allResults
          };
          observer.next({
            progress,
            isComplete: true,
            allResults
          });
          observer.complete();
          return;
        }
        const currentRequest = dmsMediaInstanceRequests[currentIndex];
        console.log('[DocumentExtractService] downloadDocumentsSequentially() - Processing download', currentIndex + 1, 'of', total, ':', currentRequest);
        const progress = {
          total,
          completed,
          failed,
          current: currentRequest,
          results: allResults
        };
        observer.next({
          progress,
          isComplete: false,
          allResults
        });
        this.downloadSingleDocument(personId, encntrId, currentRequest).subscribe({
          next: response => {
            console.log('[DocumentExtractService] downloadDocumentsSequentially() - Single document download completed:', response);
            const result = response.allResults[0];
            allResults.push(result);
            if (result.status === 1) {
              completed++;
              console.log('[DocumentExtractService] downloadDocumentsSequentially() - Download successful for mediaInstanceId:', result.mediaInstanceId);
            } else {
              failed++;
              console.log('[DocumentExtractService] downloadDocumentsSequentially() - Download failed for mediaInstanceId:', result.mediaInstanceId, 'Error:', result.message);
            }
            currentIndex++;
            processNext();
          },
          error: error => {
            console.error('[DocumentExtractService] downloadDocumentsSequentially() - Error downloading single document:', error);
            failed++;
            currentIndex++;
            processNext();
          }
        });
      };
      processNext();
    });
  }
  /**
   * Creates an extract (metadata file and zip archive) from downloaded files
   * @param extractRequest The extract request containing person info and downloaded files
   * @returns Observable of ExtractResponse
   */
  createExtract(extractRequest) {
    console.log('[DocumentExtractService] createExtract() - Starting extract creation:', {
      personId: extractRequest.personId,
      encntrId: extractRequest.encntrId,
      fileCount: extractRequest.downloadedFiles.length
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'createExtract',
            parameters: {
              requestType: 'createExtract',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  personId: extractRequest.personId,
                  encntrId: extractRequest.encntrId,
                  downloadedFiles: extractRequest.downloadedFiles
                }
              })
            }
          }],
          clearPatientSource: true
        }
      }, [{
        personId: extractRequest.personId,
        encntrId: extractRequest.encntrId
      }], () => {
        try {
          console.log('[DocumentExtractService] createExtract() - Service call completed, retrieving data');
          const raw = this.customService.get('createExtract');
          if (!raw) {
            console.error('[DocumentExtractService] createExtract() - No response from extract service');
            observer.error('No response from extract service');
            return;
          }
          console.log('[DocumentExtractService] createExtract() - Raw response received:', raw);
          const extractResponse = this.parseExtractResponse(raw);
          console.log('[DocumentExtractService] createExtract() - Parsed extract response:', extractResponse);
          observer.next(extractResponse);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] createExtract() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Maps raw service response to PatientSearchResult array
   * @param raw Raw response from the service
   * @returns PatientSearchResult array
   */
  mapToPatientSearchResults(raw) {
    console.log('[DocumentExtractService] mapToPatientSearchResults() - Starting mapping of raw data:', raw);
    // Map the qual array from the response to PatientSearchResult objects
    if (raw.qual && Array.isArray(raw.qual)) {
      const results = raw.qual.map(patient => ({
        fin: patient.fin || '',
        name: patient.nameFullFormatted || '',
        dateOfBirth: patient.dob ? this.parseDate(patient.dob) : new Date(),
        encntrId: patient.encntrId || 0,
        personId: patient.personId || 0,
        mrn: patient.mrn || '',
        facility: patient.facility || '',
        unit: patient.unit || '',
        encntrType: patient.encntrType || '',
        medService: patient.medService || '',
        regDtTm: patient.regDtTm ? new Date(patient.regDtTm) : new Date(),
        arrivalDtTm: patient.arrivalDtTm ? new Date(patient.arrivalDtTm) : new Date(),
        dischDtTm: patient.dischDtTm ? new Date(patient.dischDtTm) : new Date(),
        sex: patient.sex || '',
        selected: false
      }));
      console.log('[DocumentExtractService] mapToPatientSearchResults() - Mapped results:', results);
      return results;
    }
    console.warn('[DocumentExtractService] mapToPatientSearchResults() - No qual array found in raw data');
    return [];
  }
  /**
   * Parses date strings in format "DD-MMM-YYYY" to Date object
   * @param dateStr Date string in format "DD-MMM-YYYY"
   * @returns Date object
   */
  parseDate(dateStr) {
    console.log('[DocumentExtractService] parseDate() - Parsing date string:', dateStr);
    if (!dateStr || dateStr === '0000-00-00T00:00:00.000+00:00') {
      console.log('[DocumentExtractService] parseDate() - Using default date for invalid date string');
      return new Date();
    }
    // Handle the "DD-MMM-YYYY" format from the sample
    const months = {
      'JAN': 0,
      'FEB': 1,
      'MAR': 2,
      'APR': 3,
      'MAY': 4,
      'JUN': 5,
      'JUL': 6,
      'AUG': 7,
      'SEP': 8,
      'OCT': 9,
      'NOV': 10,
      'DEC': 11
    };
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const day = parseInt(parts[0]);
      const month = months[parts[1]];
      const year = parseInt(parts[2]);
      if (!isNaN(day) && month !== undefined && !isNaN(year)) {
        const result = new Date(year, month, day);
        console.log('[DocumentExtractService] parseDate() - Successfully parsed date:', result);
        return result;
      }
    }
    // Fallback to standard Date parsing
    console.log('[DocumentExtractService] parseDate() - Using fallback date parsing');
    return new Date(dateStr);
  }
  /**
   * Maps raw service response to PatientInfo structure
   * @param raw Raw response from the service
   * @returns PatientInfo object
   */
  mapToPatientInfo(raw) {
    console.log('[DocumentExtractService] mapToPatientInfo() - Starting mapping of raw data:', raw);
    // Extract patient information from the first qual entry
    const patientQual = raw.qual && raw.qual.length > 0 ? raw.qual[0] : {};
    console.log('[DocumentExtractService] mapToPatientInfo() - Patient qual data:', patientQual);
    // Map documents from dmsQual array
    const documents = patientQual.dmsQual ? patientQual.dmsQual.map(doc => ({
      id: doc.dmsMediaInstanceId?.toString() || '',
      documentName: doc.name || '',
      documentType: doc.contentTypeDisplay || '',
      documentDate: doc.createdDtTm ? new Date(doc.createdDtTm) : new Date(),
      documentSize: this.formatFileSize(doc.contentSize || 0),
      selected: false,
      contentTypeKey: doc.contentTypeKey || '',
      contentTypeDisplay: doc.contentTypeDisplay || '',
      contentTypeDescription: doc.contentTypeDescription || '',
      identifier: doc.identifier || '',
      contentUid: doc.contentUid || '',
      mediaType: doc.mediaType || '',
      appCtx: doc.appCtx || '',
      mediaObjectIdentifier: doc.mediaObjectIdentifier || '',
      parentEntityName: doc.parentEntityName || '',
      parentEntityId: doc.parentEntityId || 0
    })) : [];
    console.log('[DocumentExtractService] mapToPatientInfo() - Mapped documents:', documents);
    const result = {
      fin: patientQual.fin || '',
      name: patientQual.nameFullFormatted || '',
      dateOfBirth: patientQual.dob ? this.parseDate(patientQual.dob) : new Date(),
      documents: documents,
      personId: patientQual.personId || 0,
      encntrId: patientQual.encntrId || 0,
      facility: patientQual.facility || '',
      unit: patientQual.unit || '',
      encntrType: patientQual.encntrType || '',
      medService: patientQual.medService || '',
      regDtTm: patientQual.regDtTm ? new Date(patientQual.regDtTm) : new Date(),
      arrivalDtTm: patientQual.arrivalDtTm ? new Date(patientQual.arrivalDtTm) : new Date(),
      dischDtTm: patientQual.dischDtTm ? new Date(patientQual.dischDtTm) : new Date(),
      sex: patientQual.sex || '',
      mrn: patientQual.mrn || ''
    };
    console.log('[DocumentExtractService] mapToPatientInfo() - Final mapped result:', result);
    return result;
  }
  /**
   * Formats file size in bytes to human readable format
   * @param bytes File size in bytes
   * @returns Formatted file size string
   */
  formatFileSize(bytes) {
    console.log('[DocumentExtractService] formatFileSize() - Formatting bytes:', bytes);
    if (bytes === 0) {
      console.log('[DocumentExtractService] formatFileSize() - Returning 0 Bytes');
      return '0 Bytes';
    }
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const result = parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    console.log('[DocumentExtractService] formatFileSize() - Formatted result:', result);
    return result;
  }
  /**
   * Parses the download response from the service
   * @param raw Raw response from the service
   * @returns DownloadDocumentsResponse object
   */
  parseDownloadResponse(raw) {
    console.log('[DocumentExtractService] parseDownloadResponse() - Starting parsing of raw response:', raw);
    if (raw.downloadDocuments_reply && raw.downloadDocuments_reply.downloadResults) {
      const results = {
        downloadResults: raw.downloadDocuments_reply.downloadResults.map(result => ({
          mediaInstanceId: result.mediaInstanceId || 0,
          documentType: result.documentType || '',
          filename: result.filename || '',
          status: result.status || 0,
          fullpath: result.fullpath || '',
          message: result.message || '',
          documentName: result.documentName || '',
          contentType: result.contentType || ''
        }))
      };
      console.log('[DocumentExtractService] parseDownloadResponse() - Parsed results:', results);
      return results;
    }
    // Return empty response if structure is not as expected
    console.warn('[DocumentExtractService] parseDownloadResponse() - No downloadDocuments_reply or downloadResults found in raw data');
    return {
      downloadResults: []
    };
  }
  /**
   * Parses the response for a single document download request.
   * @param raw Raw response from the service.
   * @returns A single DownloadResult.
   */
  parseDownloadSingleDocumentResponse(raw) {
    console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Starting parsing of raw response:', raw);
    // Check for the new response structure with qual array
    if (raw.qual && raw.qual.length > 0 && raw.qual[0].dmsQual && raw.qual[0].dmsQual.length > 0) {
      const dmsItem = raw.qual[0].dmsQual[0];
      console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Found dmsQual item:', dmsItem);
      // Check if download was successful based on downloadedInd
      const isSuccess = dmsItem.downloadedInd === 1;
      console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Download success status:', isSuccess);
      // Parse the download response if available
      let downloadResponse = null;
      if (dmsItem.downloadResponse) {
        try {
          downloadResponse = JSON.parse(dmsItem.downloadResponse);
          console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Parsed download response:', downloadResponse);
        } catch (error) {
          console.warn('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Failed to parse download response:', error);
        }
      }
      const result = {
        mediaInstanceId: dmsItem.dmsMediaInstanceId || 0,
        documentType: dmsItem.contentTypeDisplay || '',
        filename: dmsItem.filename || dmsItem.name || '',
        status: isSuccess ? 1 : 0,
        fullpath: downloadResponse?.CAMM_DOWNLOAD_RESPONSE?.FULLPATH || '',
        message: downloadResponse?.CAMM_DOWNLOAD_RESPONSE?.MESSAGE || (isSuccess ? 'Download successful' : 'Download failed'),
        documentName: dmsItem.name || '',
        contentType: dmsItem.contentTypeKey || ''
      };
      console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Parsed result:', result);
      return result;
    }
    // Fallback to old response structure
    if (raw.downloadSingleDocument_reply && raw.downloadSingleDocument_reply.downloadResult) {
      const result = {
        mediaInstanceId: raw.downloadSingleDocument_reply.downloadResult.mediaInstanceId || 0,
        documentType: raw.downloadSingleDocument_reply.downloadResult.documentType || '',
        filename: raw.downloadSingleDocument_reply.downloadResult.filename || '',
        status: raw.downloadSingleDocument_reply.downloadResult.status || 0,
        fullpath: raw.downloadSingleDocument_reply.downloadResult.fullpath || '',
        message: raw.downloadSingleDocument_reply.downloadResult.message || '',
        documentName: raw.downloadSingleDocument_reply.downloadResult.documentName || '',
        contentType: raw.downloadSingleDocument_reply.downloadResult.contentType || ''
      };
      console.log('[DocumentExtractService] parseDownloadSingleDocumentResponse() - Parsed fallback result:', result);
      return result;
    }
    console.warn('[DocumentExtractService] parseDownloadSingleDocumentResponse() - No valid response structure found in raw data');
    return {
      mediaInstanceId: 0,
      documentType: '',
      filename: '',
      status: 0,
      fullpath: '',
      message: 'No response data found',
      documentName: '',
      contentType: ''
    };
  }
  /**
   * Parses the extract response from the service
   * @param raw Raw response from the service
   * @returns ExtractResponse object
   */
  parseExtractResponse(raw) {
    console.log('[DocumentExtractService] parseExtractResponse() - Starting parsing of raw response:', raw);
    // Check for the new response structure with extractInfo and qual
    if (raw.extractInfo && raw.qual && raw.qual.length > 0) {
      const extractInfo = raw.extractInfo;
      const qual = raw.qual[0];
      const isSuccess = raw.reply && raw.reply.statusData && raw.reply.statusData.status === 'S';
      const result = {
        success: isSuccess,
        zipFileUrl: extractInfo.downloadUrl || '',
        zipFileName: extractInfo.zipFilename || 'extracted_documents.zip',
        message: raw.reply?.text || (isSuccess ? 'Extract completed successfully' : 'Extract failed'),
        metadataFile: extractInfo.metadataFilename || '',
        zipCammIdentifier: extractInfo.zipCammIdentifier || qual.zipCammIdentifier || '',
        downloadUrl: extractInfo.downloadUrl || '',
        extractInfo: {
          zipFilename: extractInfo.zipFilename || 'extracted_documents.zip',
          metadataFilename: extractInfo.metadataFilename || '',
          fileCount: extractInfo.fileCount || 0,
          zipCammIdentifier: extractInfo.zipCammIdentifier || qual.zipCammIdentifier || '',
          downloadUrl: extractInfo.downloadUrl || ''
        }
      };
      console.log('[DocumentExtractService] parseExtractResponse() - Parsed extract result:', result);
      return result;
    }
    // Check for the new response structure with extract information
    if (raw.createExtract_reply) {
      const reply = raw.createExtract_reply;
      const result = {
        success: reply.success === true || reply.success === 1,
        zipFileUrl: reply.zipFileUrl || '',
        zipFileName: reply.zipFileName || 'extracted_documents.zip',
        message: reply.message || 'Extract completed',
        metadataFile: reply.metadataFile || '',
        zipCammIdentifier: reply.zipCammIdentifier || '',
        downloadUrl: reply.downloadUrl || '',
        extractInfo: {
          zipFilename: reply.zipFileName || 'extracted_documents.zip',
          metadataFilename: reply.metadataFile || '',
          fileCount: reply.fileCount || 0,
          zipCammIdentifier: reply.zipCammIdentifier || '',
          downloadUrl: reply.downloadUrl || ''
        }
      };
      console.log('[DocumentExtractService] parseExtractResponse() - Parsed extract result:', result);
      return result;
    }
    // Fallback to status-based response
    if (raw.reply && raw.reply.statusData) {
      const isSuccess = raw.reply.statusData.status === 'S';
      const result = {
        success: isSuccess,
        zipFileUrl: raw.zipFileUrl || '',
        zipFileName: raw.zipFileName || 'extracted_documents.zip',
        message: raw.reply.text || (isSuccess ? 'Extract completed successfully' : 'Extract failed'),
        metadataFile: raw.metadataFile || '',
        zipCammIdentifier: raw.zipCammIdentifier || '',
        downloadUrl: raw.downloadUrl || '',
        extractInfo: {
          zipFilename: raw.zipFileName || 'extracted_documents.zip',
          metadataFilename: raw.metadataFile || '',
          fileCount: raw.fileCount || 0,
          zipCammIdentifier: raw.zipCammIdentifier || '',
          downloadUrl: raw.downloadUrl || ''
        }
      };
      console.log('[DocumentExtractService] parseExtractResponse() - Parsed fallback result:', result);
      return result;
    }
    console.warn('[DocumentExtractService] parseExtractResponse() - No valid response structure found in raw data');
    return {
      success: false,
      message: 'No response data found',
      zipFileName: 'extracted_documents.zip'
    };
  }
  /**
   * Gets the loaded configuration data
   * @returns ConfigData or null if not loaded
   */
  getLoadedConfigData() {
    return this.configData;
  }
  static #_ = this.ɵfac = function DocumentExtractService_Factory(t) {
    return new (t || DocumentExtractService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_2__.CustomService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: DocumentExtractService,
    factory: DocumentExtractService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 3942:
/*!************************************************************************!*\
  !*** ./src/app/system-configuration/nested-object-viewer.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NestedObjectViewerComponent: () => (/* binding */ NestedObjectViewerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 6575);


function NestedObjectViewerComponent_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r2.getArrayLength(ctx_r2.data[key_r1]), " items] ");
  }
}
function NestedObjectViewerComponent_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r3.getObjectKeys(ctx_r3.data[key_r1]).length, " keys] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r13.getDisplayValue(ctx_r13.data[key_r1][subKey_r12]), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r17.getArrayLength(ctx_r17.data[key_r1][subKey_r12]), "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r18.getObjectKeys(ctx_r18.data[key_r1][subKey_r12]).length, "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_2_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r14.getValueType(ctx_r14.data[key_r1][subKey_r12]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isArray(ctx_r14.data[key_r1][subKey_r12]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r14.isObject(ctx_r14.data[key_r1][subKey_r12]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subKey_r12 = ctx.$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", subKey_r12, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r11.isExpandable(ctx_r11.data[key_r1][subKey_r12]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.isExpandable(ctx_r11.data[key_r1][subKey_r12]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_Template, 6, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.getObjectKeys(ctx_r7.data[key_r1]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r30.getDisplayValue(item_r28), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r33.getArrayLength(item_r28), "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" [", ctx_r34.getObjectKeys(item_r28).length, "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_2_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_3_Template, 2, 1, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r31.getValueType(item_r28), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isArray(item_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r31.isObject(item_r28));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    const i_r29 = ctx.index;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", i_r29, "]:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r27.isExpandable(item_r28));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r27.isExpandable(item_r28));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_Template, 6, 3, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.data[key_r1]);
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32)(1, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r9.getDisplayValue(ctx_r9.data[key_r1]), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nested-object-viewer", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx_r10.data[key_r1])("path", ctx_r10.getFullPath(key_r1))("expandedSections", ctx_r10.expandedSections)("onTogglePath", ctx_r10.onTogglePath);
  }
}
function NestedObjectViewerComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_4_Template, 3, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_5_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isObject(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isArray(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isExpandable(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.isExpandable(ctx_r4.data[key_r1]));
  }
}
function NestedObjectViewerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NestedObjectViewerComponent_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r43);
      const key_r1 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r42.togglePath(ctx_r42.getFullPath(key_r1)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4)(3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, NestedObjectViewerComponent_div_1_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NestedObjectViewerComponent_div_1_span_10_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, NestedObjectViewerComponent_div_1_div_11_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("expanded", ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)) ? "\u25BC" : "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.formatKey(key_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("(", ctx_r0.getValueType(ctx_r0.data[key_r1]), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isArray(ctx_r0.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isObject(ctx_r0.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)));
  }
}
class NestedObjectViewerComponent {
  constructor() {
    this.data = null;
    this.path = '';
    this.expandedSections = new Set();
    this.onTogglePath = () => {};
    this.Array = Array;
    this.JSON = JSON;
  }
  /**
   * Gets the type of a value for display purposes
   */
  getValueType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object') return 'object';
    return typeof value;
  }
  /**
   * Checks if a value is expandable (object or array)
   */
  isExpandable(value) {
    return value !== null && value !== undefined && (typeof value === 'object' || Array.isArray(value));
  }
  /**
   * Gets the display value for a primitive type
   */
  getDisplayValue(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'number') return value.toString();
    return JSON.stringify(value);
  }
  /**
   * Gets the object keys for iteration
   */
  getObjectKeys(obj) {
    if (!obj || typeof obj !== 'object') return [];
    return Object.keys(obj);
  }
  /**
   * Gets the array length for display
   */
  getArrayLength(arr) {
    return Array.isArray(arr) ? arr.length : 0;
  }
  /**
   * Checks if a value is an object (not array)
   */
  isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
  /**
   * Checks if a value is an array
   */
  isArray(value) {
    return Array.isArray(value);
  }
  /**
   * Formats a key for display
   */
  formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  }
  /**
   * Gets the full path for a nested key
   */
  getFullPath(key) {
    return this.path ? `${this.path}.${key}` : key;
  }
  /**
   * Checks if a path is expanded
   */
  isPathExpanded(path) {
    return this.expandedSections.has(path);
  }
  /**
   * Toggles a path's expanded state
   */
  togglePath(path) {
    this.onTogglePath(path);
  }
  static #_ = this.ɵfac = function NestedObjectViewerComponent_Factory(t) {
    return new (t || NestedObjectViewerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
    type: NestedObjectViewerComponent,
    selectors: [["app-nested-object-viewer"]],
    inputs: {
      data: "data",
      path: "path",
      expandedSections: "expandedSections",
      onTogglePath: "onTogglePath"
    },
    decls: 2,
    vars: 1,
    consts: [[1, "nested-object-viewer"], ["class", "nested-item", 4, "ngFor", "ngForOf"], [1, "nested-item"], [1, "section-header", 3, "click"], [1, "section-info"], [1, "expand-icon"], [1, "section-key"], [1, "section-type"], ["class", "section-count", 4, "ngIf"], ["class", "section-content", 4, "ngIf"], [1, "section-count"], [1, "section-content"], [1, "content-wrapper"], ["class", "object-content", 4, "ngIf"], ["class", "array-content", 4, "ngIf"], ["class", "primitive-content", 4, "ngIf"], ["class", "nested-content", 4, "ngIf"], [1, "object-content"], ["class", "sub-item", 4, "ngFor", "ngForOf"], [1, "sub-item"], [1, "sub-key"], [1, "sub-value"], ["class", "primitive-value", 4, "ngIf"], ["class", "expandable-value", 4, "ngIf"], [1, "primitive-value"], [1, "expandable-value"], [4, "ngIf"], [1, "array-content"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"], [1, "array-index"], [1, "array-value"], [1, "primitive-content"], [1, "nested-content"], [3, "data", "path", "expandedSections", "onTogglePath"]],
    template: function NestedObjectViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_Template, 12, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getObjectKeys(ctx.data));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, NestedObjectViewerComponent],
    styles: [".nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header.expanded[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #007bff;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-key[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 13px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-type[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 11px;\n  font-style: italic;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 11px;\n  font-weight: 500;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-left: 16px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 4px 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  min-width: 60px;\n  font-size: 12px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 12px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%] {\n  padding: 4px 0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 12px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .nested-content[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-left: 8px;\n  border-left: 2px solid #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lzdGVtLWNvbmZpZ3VyYXRpb24vbmVzdGVkLW9iamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRU07RUFDRSx5QkFBQTtBQUFSO0FBR007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBRFI7QUFJTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFGVjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhWO0FBTVE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlY7QUFPUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMVjtBQVVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBUk47QUFhVTs7OztFQUVFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBVFo7QUFXWTs7OztFQUNFLG1CQUFBO0FBTmQ7QUFTWTs7Ozs7Ozs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURkO0FBSVk7Ozs7Ozs7O0VBRUUsT0FBQTtBQUlkO0FBRmM7Ozs7Ozs7O0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQVdoQjtBQVJjOzs7Ozs7OztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQmhCO0FBWFE7RUFDRSxjQUFBO0FBYVY7QUFYVTtFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFhWjtBQVRRO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsOEJBQUE7QUFXViIsInNvdXJjZXNDb250ZW50IjpbIi5uZXN0ZWQtb2JqZWN0LXZpZXdlciB7XG4gIC5uZXN0ZWQtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogOHB4IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U5ZWNlZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICY6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgfVxuXG4gICAgICAmLmV4cGFuZGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgfVxuXG4gICAgICAuc2VjdGlvbi1pbmZvIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLmV4cGFuZC1pY29uIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWtleSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbi10eXBlIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24tY291bnQge1xuICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tY29udGVudCB7XG4gICAgICBtYXJnaW4tdG9wOiA0cHg7XG4gICAgICBtYXJnaW4tbGVmdDogMTZweDtcblxuICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIC5vYmplY3QtY29udGVudCxcbiAgICAgICAgLmFycmF5LWNvbnRlbnQge1xuICAgICAgICAgIC5zdWItaXRlbSxcbiAgICAgICAgICAuYXJyYXktaXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgICBwYWRkaW5nOiA0cHggMDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjFmM2Y0O1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3ViLWtleSxcbiAgICAgICAgICAgIC5hcnJheS1pbmRleCB7XG4gICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDYwcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Yi12YWx1ZSxcbiAgICAgICAgICAgIC5hcnJheS12YWx1ZSB7XG4gICAgICAgICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgICAgICAgLnByaW1pdGl2ZS12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAuZXhwYW5kYWJsZS12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucHJpbWl0aXZlLWNvbnRlbnQge1xuICAgICAgICAgIHBhZGRpbmc6IDRweCAwO1xuXG4gICAgICAgICAgLnByaW1pdGl2ZS12YWx1ZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm5lc3RlZC1jb250ZW50IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjZTllY2VmO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 1400:
/*!************************************************************************!*\
  !*** ./src/app/system-configuration/system-configuration.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SystemConfigurationComponent: () => (/* binding */ SystemConfigurationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nested-object-viewer.component */ 3942);



function SystemConfigurationComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9)(3, "div", 10)(4, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Configuration Size:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 10)(9, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Top Level Keys:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 13)(14, "div", 14)(15, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Configuration Structure");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 15)(18, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemConfigurationComponent_div_8_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r2.expandedSections.clear());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Collapse All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function SystemConfigurationComponent_div_8_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r4.expandAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " Expand All ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "app-nested-object-viewer", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", ctx_r0.JSON.stringify(ctx_r0.configData).length, " characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getObjectKeys(ctx_r0.configData).length);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r0.configData)("path", "")("expandedSections", ctx_r0.expandedSections)("onTogglePath", ctx_r0.togglePath.bind(ctx_r0));
  }
}
function SystemConfigurationComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20)(2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "\u2699\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "No Configuration Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Configuration data will appear here once loaded from the service.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
}
class SystemConfigurationComponent {
  constructor() {
    this.configData = null;
    this.loading = false;
    this.error = null;
    this.expandedSections = new Set();
    this.Array = Array; // Make Array available in template
    this.JSON = JSON; // Make JSON available in template
  }

  ngOnInit() {}
  /**
   * Toggles the expanded state of a section
   * @param sectionKey The key of the section to toggle
   */
  toggleSection(sectionKey) {
    this.togglePath(sectionKey);
  }
  /**
   * Checks if a section is expanded
   * @param sectionKey The key of the section to check
   * @returns True if the section is expanded
   */
  isSectionExpanded(sectionKey) {
    return this.isPathExpanded(sectionKey);
  }
  /**
   * Gets the type of a value for display purposes
   * @param value The value to check
   * @returns The type string
   */
  getValueType(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (Array.isArray(value)) return 'array';
    if (typeof value === 'object') return 'object';
    return typeof value;
  }
  /**
   * Checks if a value is expandable (object or array)
   * @param value The value to check
   * @returns True if the value is expandable
   */
  isExpandable(value) {
    return value !== null && value !== undefined && (typeof value === 'object' || Array.isArray(value));
  }
  /**
   * Gets the display value for a primitive type
   * @param value The value to format
   * @returns Formatted string
   */
  getDisplayValue(value) {
    if (value === null) return 'null';
    if (value === undefined) return 'undefined';
    if (typeof value === 'string') return `"${value}"`;
    if (typeof value === 'boolean') return value.toString();
    if (typeof value === 'number') return value.toString();
    return JSON.stringify(value);
  }
  /**
   * Gets the object keys for iteration
   * @param obj The object to get keys from
   * @returns Array of keys
   */
  getObjectKeys(obj) {
    if (!obj || typeof obj !== 'object') return [];
    return Object.keys(obj);
  }
  /**
   * Gets the array length for display
   * @param arr The array to check
   * @returns The length of the array
   */
  getArrayLength(arr) {
    return Array.isArray(arr) ? arr.length : 0;
  }
  /**
   * Formats a key for display
   * @param key The key to format
   * @returns Formatted key string
   */
  formatKey(key) {
    return key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()).trim();
  }
  /**
   * Checks if a value is an object (not array)
   * @param value The value to check
   * @returns True if the value is an object
   */
  isObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
  }
  /**
   * Checks if a value is an array
   * @param value The value to check
   * @returns True if the value is an array
   */
  isArray(value) {
    return Array.isArray(value);
  }
  /**
   * Expands all sections
   */
  expandAll() {
    if (this.configData) {
      this.expandedSections.clear();
      this.expandAllRecursive(this.configData, '');
    }
  }
  /**
   * Recursively expands all nested objects and arrays
   * @param obj The object to expand
   * @param path The current path for generating unique keys
   */
  expandAllRecursive(obj, path) {
    if (!obj || typeof obj !== 'object') return;
    const keys = this.getObjectKeys(obj);
    keys.forEach(key => {
      const fullPath = path ? `${path}.${key}` : key;
      this.expandedSections.add(fullPath);
      // Recursively expand nested objects and arrays
      if (this.isExpandable(obj[key])) {
        this.expandAllRecursive(obj[key], fullPath);
      }
    });
  }
  /**
   * Gets a nested value by path
   * @param obj The root object
   * @param path The dot-separated path
   * @returns The value at the path
   */
  getValueByPath(obj, path) {
    if (!path) return obj;
    return path.split('.').reduce((current, key) => current?.[key], obj);
  }
  /**
   * Checks if a path is expanded
   * @param path The path to check
   * @returns True if the path is expanded
   */
  isPathExpanded(path) {
    return this.expandedSections.has(path);
  }
  /**
   * Toggles a path's expanded state
   * @param path The path to toggle
   */
  togglePath(path) {
    if (this.expandedSections.has(path)) {
      this.expandedSections.delete(path);
    } else {
      this.expandedSections.add(path);
    }
  }
  static #_ = this.ɵfac = function SystemConfigurationComponent_Factory(t) {
    return new (t || SystemConfigurationComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: SystemConfigurationComponent,
    selectors: [["app-system-configuration"]],
    inputs: {
      configData: "configData"
    },
    decls: 10,
    vars: 5,
    consts: [[1, "system-configuration-container"], [1, "config-header"], [1, "config-status"], [1, "status-indicator"], [1, "status-text"], ["class", "config-content", 4, "ngIf"], ["class", "no-config", 4, "ngIf"], [1, "config-content"], [1, "config-overview"], [1, "overview-stats"], [1, "stat-item"], [1, "stat-label"], [1, "stat-value"], [1, "json-viewer"], [1, "viewer-header"], [1, "viewer-controls"], [1, "btn", "btn-outline", 3, "click"], [1, "json-content"], [3, "data", "path", "expandedSections", "onTogglePath"], [1, "no-config"], [1, "no-config-content"], [1, "no-config-icon"]],
    template: function SystemConfigurationComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "System Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, SystemConfigurationComponent_div_8_Template, 24, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, SystemConfigurationComponent_div_9_Template, 8, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("loaded", ctx.configData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.configData ? "Configuration Loaded" : "No Configuration");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.configData);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.configData);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_0__.NestedObjectViewerComponent],
    styles: [".system-configuration-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 20px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.config-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 24px;\n  padding-bottom: 16px;\n  border-bottom: 2px solid #e1e5e9;\n}\n.config-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 24px;\n  font-weight: 600;\n}\n.config-header[_ngcontent-%COMP%]   .config-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.config-header[_ngcontent-%COMP%]   .config-status[_ngcontent-%COMP%]   .status-indicator[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background-color: #dc3545;\n  transition: background-color 0.3s ease;\n}\n.config-header[_ngcontent-%COMP%]   .config-status[_ngcontent-%COMP%]   .status-indicator.loaded[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n.config-header[_ngcontent-%COMP%]   .config-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  font-weight: 500;\n}\n\n.config-content[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}\n\n.config-overview[_ngcontent-%COMP%] {\n  padding: 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.config-overview[_ngcontent-%COMP%]   .overview-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n}\n.config-overview[_ngcontent-%COMP%]   .overview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.config-overview[_ngcontent-%COMP%]   .overview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.config-overview[_ngcontent-%COMP%]   .overview-stats[_ngcontent-%COMP%]   .stat-item[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n}\n\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px 20px;\n  background-color: #f8f9fa;\n  border-bottom: 1px solid #e9ecef;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%]   .viewer-controls[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%]   .viewer-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: 1px solid #007bff;\n  border-radius: 4px;\n  background-color: transparent;\n  color: #007bff;\n  font-size: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%]   .viewer-controls[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  color: white;\n}\n.json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%]   .viewer-controls[_ngcontent-%COMP%]   .btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #007bff;\n  color: white;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header.expanded[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #007bff;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex: 1;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-key[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-type[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  font-style: italic;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 12px;\n  font-weight: 500;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  margin-left: 20px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 8px 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child, .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  min-width: 80px;\n  font-size: 13px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 13px;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 13px;\n  font-weight: 500;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%] {\n  padding: 8px 0;\n}\n.json-viewer[_ngcontent-%COMP%]   .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 13px;\n}\n\n.no-config[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 20px;\n}\n.no-config[_ngcontent-%COMP%]   .no-config-content[_ngcontent-%COMP%]   .no-config-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.no-config[_ngcontent-%COMP%]   .no-config-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 18px;\n  font-weight: 600;\n}\n.no-config[_ngcontent-%COMP%]   .no-config-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 14px;\n}\n\n@media (max-width: 768px) {\n  .system-configuration-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .config-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .config-overview[_ngcontent-%COMP%]   .overview-stats[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .json-viewer[_ngcontent-%COMP%]   .viewer-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 12px;\n  }\n  .json-content[_ngcontent-%COMP%]   .json-section[_ngcontent-%COMP%]   .json-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n    margin-left: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lzdGVtLWNvbmZpZ3VyYXRpb24vc3lzdGVtLWNvbmZpZ3VyYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdDQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7QUFFRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0NBQUE7QUFBTjtBQUVNO0VBQ0UseUJBQUE7QUFBUjtBQUlJO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQUZOOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBSkY7QUFNRTtFQUNFLGFBQUE7RUFDQSxTQUFBO0FBSko7QUFNSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFFBQUE7QUFKTjtBQU1NO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFPTTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFMUjs7QUFZRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGdDQUFBO0FBVEo7QUFXSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBVE47QUFZSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FBVk47QUFZTTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFWUjtBQVlRO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBVlY7QUFjVTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQVpaO0FBbUJFO0VBQ0UsYUFBQTtBQWpCSjtBQW9CTTtFQUNFLGtCQUFBO0FBbEJSO0FBb0JRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFsQlY7QUFvQlU7RUFDRSx5QkFBQTtBQWxCWjtBQXFCVTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFuQlo7QUFzQlU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtBQXBCWjtBQXNCWTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFwQmQ7QUF1Qlk7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBckJkO0FBd0JZO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQXRCZDtBQXlCWTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUF2QmQ7QUE0QlE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUExQlY7QUErQmM7Ozs7RUFFRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxnQ0FBQTtBQTNCaEI7QUE2QmdCOzs7O0VBQ0UsbUJBQUE7QUF4QmxCO0FBMkJnQjs7Ozs7Ozs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQW5CbEI7QUFzQmdCOzs7Ozs7OztFQUVFLE9BQUE7QUFkbEI7QUFnQmtCOzs7Ozs7OztFQUNFLFdBQUE7RUFDQSxxQ0FBQTtFQUNBLGVBQUE7QUFQcEI7QUFVa0I7Ozs7Ozs7O0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQURwQjtBQU9ZO0VBQ0UsY0FBQTtBQUxkO0FBT2M7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0FBTGhCOztBQWVBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQVpGO0FBZUk7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QUFiTjtBQWdCSTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWROO0FBaUJJO0VBQ0UsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBZk47O0FBcUJBO0VBQ0U7SUFDRSxhQUFBO0VBbEJGO0VBcUJBO0lBQ0Usc0JBQUE7SUFDQSx1QkFBQTtJQUNBLFNBQUE7RUFuQkY7RUFzQkE7SUFDRSxzQkFBQTtJQUNBLFNBQUE7RUFwQkY7RUF1QkE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsU0FBQTtFQXJCRjtFQXdCQTtJQUNFLGlCQUFBO0VBdEJGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuc3lzdGVtLWNvbmZpZ3VyYXRpb24tY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xuICBmb250LWZhbWlseTogJ1NlZ29lIFVJJywgVGFob21hLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XG59XG5cbi5jb25maWctaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNlMWU1ZTk7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzMzMztcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgfVxuXG4gIC5jb25maWctc3RhdHVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuc3RhdHVzLWluZGljYXRvciB7XG4gICAgICB3aWR0aDogMTJweDtcbiAgICAgIGhlaWdodDogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkYzM1NDU7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAgICAgJi5sb2FkZWQge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zdGF0dXMtdGV4dCB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgfVxuICB9XG59XG5cbi5jb25maWctY29udGVudCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLmNvbmZpZy1vdmVydmlldyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gIC5vdmVydmlldy1zdGF0cyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDMycHg7XG5cbiAgICAuc3RhdC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiA0cHg7XG5cbiAgICAgIC5zdGF0LWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgfVxuXG4gICAgICAuc3RhdC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5qc29uLXZpZXdlciB7XG4gIC52aWV3ZXItaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDE2cHggMjBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuXG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC52aWV3ZXItY29udHJvbHMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGdhcDogOHB4O1xuXG4gICAgICAuYnRuIHtcbiAgICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdiZmY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYnRuLW91dGxpbmUge1xuICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuanNvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAyMHB4O1xuXG4gICAgLmpzb24tc2VjdGlvbiB7XG4gICAgICAuanNvbi1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEycHggMTZweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuc2VjdGlvbi1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAxMnB4O1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgLmV4cGFuZC1pY29uIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlY3Rpb24ta2V5IHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlY3Rpb24tdHlwZSB7XG4gICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlY3Rpb24tY291bnQge1xuICAgICAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcblxuICAgICAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAgICAgLm9iamVjdC1jb250ZW50LFxuICAgICAgICAgICAgLmFycmF5LWNvbnRlbnQge1xuICAgICAgICAgICAgICAuc3ViLWl0ZW0sXG4gICAgICAgICAgICAgIC5hcnJheS1pdGVtIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcblxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC5zdWIta2V5LFxuICAgICAgICAgICAgICAgIC5hcnJheS1pbmRleCB7XG4gICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDgwcHg7XG4gICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnN1Yi12YWx1ZSxcbiAgICAgICAgICAgICAgICAuYXJyYXktdmFsdWUge1xuICAgICAgICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgICAgICAgLnByaW1pdGl2ZS12YWx1ZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgbW9ub3NwYWNlO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIC5leHBhbmRhYmxlLXZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDdiZmY7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnByaW1pdGl2ZS1jb250ZW50IHtcbiAgICAgICAgICAgICAgcGFkZGluZzogOHB4IDA7XG5cbiAgICAgICAgICAgICAgLnByaW1pdGl2ZS12YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5vLWNvbmZpZyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNjBweCAyMHB4O1xuXG4gIC5uby1jb25maWctY29udGVudCB7XG4gICAgLm5vLWNvbmZpZy1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgfVxuXG4gICAgaDQge1xuICAgICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuXG4gICAgcCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogIzY2NjtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cblxuLy8gUmVzcG9uc2l2ZSBkZXNpZ25cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAuc3lzdGVtLWNvbmZpZ3VyYXRpb24tY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmNvbmZpZy1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiAxMnB4O1xuICB9XG5cbiAgLmNvbmZpZy1vdmVydmlldyAub3ZlcnZpZXctc3RhdHMge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmpzb24tdmlld2VyIC52aWV3ZXItaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGdhcDogMTJweDtcbiAgfVxuXG4gIC5qc29uLWNvbnRlbnQgLmpzb24tc2VjdGlvbiAuanNvbi1pdGVtIC5zZWN0aW9uLWNvbnRlbnQge1xuICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICB9XG59ICJdLCJzb3VyY2VSb290IjoiIn0= */"]
  });
}


/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var _app_version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../app/version */ 6804);

const environment = {
  appVersion: _app_version__WEBPACK_IMPORTED_MODULE_0__.buildVersion,
  packageVersion: _app_version__WEBPACK_IMPORTED_MODULE_0__.packageVersion,
  gitBranch: _app_version__WEBPACK_IMPORTED_MODULE_0__.gitBranch,
  production: false
};

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);


_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 6804:
/*!****************************!*\
  !*** ./src/app/version.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildVersion: () => (/* binding */ buildVersion),
/* harmony export */   gitBranch: () => (/* binding */ gitBranch),
/* harmony export */   packageVersion: () => (/* binding */ packageVersion)
/* harmony export */ });
// Auto-generated build version file
// Generated on: 2025-07-12T03:14:23.459Z
const buildVersion = 'v0.0.54-master';
const packageVersion = '0.0.54';
const gitBranch = 'master';

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
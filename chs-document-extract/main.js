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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/document-extract.service */ 3402);
/* harmony import */ var _services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/progress-stepper.service */ 6906);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component-version/component-version.component */ 7209);
/* harmony import */ var _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./patient-selection/patient-selection.component */ 1575);
/* harmony import */ var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./document-list/document-list.component */ 6098);
/* harmony import */ var _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-configuration/system-configuration.component */ 1400);
/* harmony import */ var _shared_progress_stepper_progress_stepper_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/progress-stepper/progress-stepper.component */ 6640);














function AppComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 12)(1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Initializing application...");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
  }
}
const _c0 = function () {
  return [];
};
class AppComponent {
  constructor(activatedRoute, mPage, documentService, progressStepper) {
    this.activatedRoute = activatedRoute;
    this.mPage = mPage;
    this.documentService = documentService;
    this.progressStepper = progressStepper;
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
    // Update progress - patient selection step based on URL params
    if (this.mPage.personId) {
      this.progressStepper.updateStep('patient', 'completed', undefined, {
        personId: this.mPage.personId
      });
      this.progressStepper.updateStep('discovery', 'active');
    }
    this.documentService.getConfigData().subscribe({
      next: configData => {
        console.log('Configuration loaded successfully:', configData);
        this.configData = configData;
        this.configLoaded = true;
        this.loading = false;
        // Only update discovery step if we have a patient selected
        // Configuration loading just enables the ability to discover documents
        if (this.mPage.personId) {
          this.progressStepper.updateStep('discovery', 'completed');
        }
      },
      error: error => {
        console.error('Failed to load configuration:', error);
        this.loading = false;
        // Only mark discovery as error if we have a patient
        if (this.mPage.personId) {
          this.progressStepper.updateStep('discovery', 'error');
        }
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
    // Update progress stepper
    this.progressStepper.updateStep('patient', 'completed', undefined, {
      personId: patientInfo.personId,
      patientName: patientInfo.patientName
    });
    this.progressStepper.updateStepDescription('patient', `${patientInfo.patientName}`);
    // Update discovery step based on documents
    if (patientInfo.documents && patientInfo.documents.length > 0) {
      this.progressStepper.updateStep('discovery', 'completed', undefined, {
        count: patientInfo.documents.length
      });
      this.progressStepper.updateStepDescription('discovery', `${patientInfo.documents.length} documents found`);
    } else {
      this.progressStepper.updateStep('discovery', 'active');
    }
  }
  /**
   * Handle download request from document-list component
   * @param downloadData The download request data
   */
  onDownloadRequest(downloadData) {
    const totalCount = (downloadData.dmsMediaInstanceRequests?.length || 0) + (downloadData.cpdiDocumentRequests?.length || 0);
    this.progressStepper.updateStep('download', 'active', undefined, {
      count: totalCount
    });
    this.progressStepper.updateStepDescription('download', `Downloading ${totalCount} files...`);
    if (this.documentTrackingComponent) {
      this.documentTrackingComponent.handleDownloadRequest(downloadData);
    }
  }
  static #_ = this.ɵfac = function AppComponent_Factory(t) {
    return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_11__.mPageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_2__.DocumentExtractService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_3__.ProgressStepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
    type: AppComponent,
    selectors: [["app-root"]],
    viewQuery: function AppComponent_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_1__.DocumentTrackingComponent, 5);
      }
      if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.documentTrackingComponent = _t.first);
      }
    },
    decls: 18,
    vars: 12,
    consts: [[1, "app-container"], ["id", "applink", "href", "#", 2, "display", "none"], ["class", "loading-overlay", 4, "ngIf"], [1, "main-content"], [1, "content-layout"], [1, "content-area"], [3, "configLoaded", "patientSelected"], [3, "documents", "loading", "patientInfo", "downloadRequest"], [3, "currentPatient", "downloadRequest"], [3, "configData"], ["title", "Back to top", 1, "back-to-top", 3, "click"], [1, "back-to-top-icon"], [1, "loading-overlay"], [1, "loading-content"], [1, "loading-spinner"]],
    template: function AppComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "a", 1)(2, "app-component-version");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "CHS Document Extract");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, AppComponent_div_5_Template, 5, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 3)(7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "app-progress-stepper");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 5)(10, "app-patient-selection", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("patientSelected", function AppComponent_Template_app_patient_selection_patientSelected_10_listener($event) {
          return ctx.onPatientSelected($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "app-document-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("downloadRequest", function AppComponent_Template_app_document_list_downloadRequest_11_listener($event) {
          return ctx.onDownloadRequest($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "app-document-tracking", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("downloadRequest", function AppComponent_Template_app_document_tracking_downloadRequest_12_listener($event) {
          return ctx.onDownloadRequest($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "app-system-configuration", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AppComponent_Template_div_click_14_listener() {
          return ctx.scrollToTop();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "\u2191");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](17, "mpage-log-component");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("configLoaded", ctx.configLoaded);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("documents", (ctx.patientInfo == null ? null : ctx.patientInfo.documents) || _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](11, _c0))("loading", ctx.loading)("patientInfo", ctx.patientInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("currentPatient", ctx.patientInfo);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("configData", ctx.configData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassProp"]("visible", ctx.showBackToTop);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_11__.mPageLogComponent, _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_4__.ComponentVersionComponent, _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_5__.PatientSelectionComponent, _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_6__.DocumentListComponent, _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_1__.DocumentTrackingComponent, _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_7__.SystemConfigurationComponent, _shared_progress_stepper_progress_stepper_component__WEBPACK_IMPORTED_MODULE_8__.ProgressStepperComponent],
    styles: [".app-container[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: 0 auto;\n  padding: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n  position: relative;\n  min-height: 100vh;\n}\n.app-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #333;\n  margin-bottom: 12px;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.loading-overlay[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(255, 255, 255, 0.9);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1000;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #666;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 4px solid #f3f3f3;\n  border-top: 4px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin: 0 auto 20px;\n}\n.loading-overlay[_ngcontent-%COMP%]   .loading-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.main-content[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.main-content.loading[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n\n.content-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 24px;\n  align-items: stretch;\n  min-height: 100vh;\n}\n\n.content-area[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.content-area[_ngcontent-%COMP%]   app-patient-selection[_ngcontent-%COMP%], .content-area[_ngcontent-%COMP%]   app-document-list[_ngcontent-%COMP%], .content-area[_ngcontent-%COMP%]   app-document-tracking[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 768px) {\n  .app-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .app-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 20px;\n  }\n  .content-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 16px;\n  }\n  .content-area[_ngcontent-%COMP%] {\n    gap: 16px;\n  }\n}\n.back-to-top[_ngcontent-%COMP%] {\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n  width: 40px;\n  height: 40px;\n  background-color: #1890ff;\n  color: white;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  opacity: 0;\n  visibility: hidden;\n  transition: all 0.3s ease;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n}\n.back-to-top[_ngcontent-%COMP%]:hover {\n  background-color: #40a9ff;\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.back-to-top.visible[_ngcontent-%COMP%] {\n  opacity: 1;\n  visibility: visible;\n}\n.back-to-top[_ngcontent-%COMP%]   .back-to-top-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUdBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwwQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQUFGO0FBRUU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQ0FBQTtFQUNBLG1CQUFBO0FBQU47QUFHSTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBRE47O0FBTUE7RUFDRTtJQUFLLHVCQUFBO0VBRkw7RUFHQTtJQUFPLHlCQUFBO0VBQVA7QUFDRjtBQUVBO0VBQ0UsbUJBQUE7QUFBRjtBQUVFO0VBQ0UsWUFBQTtFQUNBLG9CQUFBO0FBQUo7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUFERjs7QUFJQTtFQUNFLE9BQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsUUFBQTtBQURGO0FBR0U7OztFQUdFLFdBQUE7QUFESjs7QUFNQTtFQUNFO0lBQ0UsYUFBQTtFQUhGO0VBS0U7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFISjtFQU9BO0lBQ0Usc0JBQUE7SUFDQSxTQUFBO0VBTEY7RUFRQTtJQUNFLFNBQUE7RUFORjtBQUNGO0FBVUE7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EseUNBQUE7QUFSRjtBQVVFO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlDQUFBO0FBUko7QUFXRTtFQUNFLFVBQUE7RUFDQSxtQkFBQTtBQVRKO0FBWUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFWSiIsInNvdXJjZXNDb250ZW50IjpbIi5hcHAtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcblxuICBoMSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cbn1cblxuLmxvYWRpbmctb3ZlcmxheSB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5sb2FkaW5nLWNvbnRlbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogIzY2NjtcblxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXI6IDRweCBzb2xpZCAjZjNmM2YzO1xuICAgICAgYm9yZGVyLXRvcDogNHB4IHNvbGlkICMwMDdiZmY7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xuICAgICAgbWFyZ2luOiAwIGF1dG8gMjBweDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICB9XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubWFpbi1jb250ZW50IHtcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcblxuICAmLmxvYWRpbmcge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgfVxufVxuXG4uY29udGVudC1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDI0cHg7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmNvbnRlbnQtYXJlYSB7XG4gIGZsZXg6IDE7XG4gIG1pbi13aWR0aDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiA2cHg7XG5cbiAgYXBwLXBhdGllbnQtc2VsZWN0aW9uLFxuICBhcHAtZG9jdW1lbnQtbGlzdCxcbiAgYXBwLWRvY3VtZW50LXRyYWNraW5nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5hcHAtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG4gIH1cblxuICAuY29udGVudC1sYXlvdXQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNnB4O1xuICB9XG5cbiAgLmNvbnRlbnQtYXJlYSB7XG4gICAgZ2FwOiAxNnB4O1xuICB9XG59XG5cbi8vIEJhY2sgdG8gVG9wIEJ1dHRvblxuLmJhY2stdG8tdG9wIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDI0cHg7XG4gIHJpZ2h0OiAyNHB4O1xuICB3aWR0aDogNDBweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg5MGZmO1xuICBjb2xvcjogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3BhY2l0eTogMDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICB6LWluZGV4OiAxMDAwO1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjE1KTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDBhOWZmO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnB4KTtcbiAgICBib3gtc2hhZG93OiAwIDRweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgfVxuXG4gICYudmlzaWJsZSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICB9XG5cbiAgLmJhY2stdG8tdG9wLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 4987);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material-luxon-adapter */ 9640);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/core */ 5309);
/* harmony import */ var _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./component-version/component-version.component */ 7209);
/* harmony import */ var _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patient-selection/patient-selection.component */ 1575);
/* harmony import */ var _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./document-list/document-list.component */ 6098);
/* harmony import */ var _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./document-tracking/document-tracking.component */ 5568);
/* harmony import */ var _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-configuration/system-configuration.component */ 1400);
/* harmony import */ var _system_configuration_nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./system-configuration/nested-object-viewer.component */ 3942);
/* harmony import */ var _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./extract-download/extract-download.component */ 8706);
/* harmony import */ var _shared_progress_stepper_progress_stepper_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/progress-stepper/progress-stepper.component */ 6640);
/* harmony import */ var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng-zorro-antd/i18n */ 4336);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/locales/en */ 2060);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ 4860);























(0,_angular_common__WEBPACK_IMPORTED_MODULE_10__.registerLocaleData)(_angular_common_locales_en__WEBPACK_IMPORTED_MODULE_11__["default"]);
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
  static #_2 = this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({
    type: AppModule,
    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
  });
  static #_3 = this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({
    providers: [{
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.APP_INITIALIZER,
      useFactory: configFactory,
      deps: [_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.ConfigService],
      multi: true
    }, {
      provide: _angular_core__WEBPACK_IMPORTED_MODULE_12__.ErrorHandler,
      useClass: _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.ErrorHandlerService
    }, {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.DateAdapter,
      useClass: _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_15__.LuxonDateAdapter,
      deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_LOCALE]
    },
    //    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'outline' } },
    {
      provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_14__.MAT_DATE_FORMATS,
      useValue: CUSTOM_DATE_FORMATS
    }, {
      provide: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__.NZ_I18N,
      useValue: ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_16__.en_US
    }],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_15__.MatLuxonDateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule
    //    MatMomentDateModule
    ]
  });
}


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_version_component_version_component__WEBPACK_IMPORTED_MODULE_2__.ComponentVersionComponent, _patient_selection_patient_selection_component__WEBPACK_IMPORTED_MODULE_3__.PatientSelectionComponent, _document_list_document_list_component__WEBPACK_IMPORTED_MODULE_4__.DocumentListComponent, _document_tracking_document_tracking_component__WEBPACK_IMPORTED_MODULE_5__.DocumentTrackingComponent, _system_configuration_system_configuration_component__WEBPACK_IMPORTED_MODULE_6__.SystemConfigurationComponent, _system_configuration_nested_object_viewer_component__WEBPACK_IMPORTED_MODULE_7__.NestedObjectViewerComponent, _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_8__.ExtractDownloadComponent, _shared_progress_stepper_progress_stepper_component__WEBPACK_IMPORTED_MODULE_9__.ProgressStepperComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.ClinicalOfficeMpageModule, _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_13__.MaterialModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_19__.ReactiveFormsModule, _angular_material_luxon_adapter__WEBPACK_IMPORTED_MODULE_15__.MatLuxonDateModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule
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



function DocumentListComponent_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r0.documents.length, " found");
  }
}
function DocumentListComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.selectedDocuments.length, " selected ");
  }
}
function DocumentListComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11)(1, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r6.selectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r8.deselectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "None");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_7_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r9.downloadSelected());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.allSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selectedDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r2.selectedDocuments.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" \uD83D\uDCE5 Download (", ctx_r2.selectedDocuments.length, ") ");
  }
}
function DocumentListComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading documents...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DocumentListComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "No documents found for this patient.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}
function DocumentListComponent_div_10_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_10_div_13_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const document_r11 = restoredCtx.$implicit;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r12.toggleDocumentSelection(document_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19)(2, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DocumentListComponent_div_10_div_13_Template_input_click_2_listener($event) {
      return $event.stopPropagation();
    })("change", function DocumentListComponent_div_10_div_13_Template_input_change_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);
      const document_r11 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r15.toggleDocumentSelection(document_r11));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 22)(6, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const document_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("selected", document_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", document_r11.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", document_r11.documentName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r11.documentName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](document_r11.contentTypeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](10, 8, document_r11.documentDate, "MM/dd/yy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", document_r11.documentSize, " ");
  }
}
function DocumentListComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function DocumentListComponent_div_10_Template_input_change_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r16.allSelected ? ctx_r16.deselectAll() : ctx_r16.selectAll());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Size");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, DocumentListComponent_div_10_div_13_Template, 13, 11, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r5.allSelected)("indeterminate", ctx_r5.someSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.documents);
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
      const dmsDocuments = this.selectedDocuments.filter(doc => doc.sourceType === 'dms');
      const cpdiDocuments = this.selectedDocuments.filter(doc => doc.sourceType === 'cpdi');
      const dmsMediaInstanceRequests = dmsDocuments.map(doc => ({
        mediaInstanceId: parseInt(doc.id)
      }));
      const cpdiDocumentRequests = cpdiDocuments.map(doc => ({
        eventId: parseInt(doc.id),
        blobHandle: doc.contentUid
      }));
      console.log('[DocumentListComponent] downloadSelected() - Created DMS requests:', dmsMediaInstanceRequests);
      console.log('[DocumentListComponent] downloadSelected() - Created CPDI requests:', cpdiDocumentRequests);
      const downloadData = {
        personId: this.patientInfo.personId,
        encntrId: this.patientInfo.encntrId,
        dmsMediaInstanceRequests: dmsMediaInstanceRequests,
        cpdiDocumentRequests: cpdiDocumentRequests
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
    decls: 11,
    vars: 6,
    consts: [[1, "document-list-container"], [1, "list-header"], [1, "header-info"], ["class", "doc-count", 4, "ngIf"], ["class", "selection-count", 4, "ngIf"], ["class", "header-actions", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "no-documents", 4, "ngIf"], ["class", "documents-grid", 4, "ngIf"], [1, "doc-count"], [1, "selection-count"], [1, "header-actions"], [1, "btn", "btn-sm", "btn-outline", 3, "disabled", "click"], [1, "btn", "btn-sm", "btn-primary", 3, "disabled", "click"], [1, "loading-container"], [1, "loading-spinner"], [1, "no-documents"], [1, "documents-grid"], [1, "grid-header"], [1, "col-select"], ["type", "checkbox", 3, "checked", "indeterminate", "change"], [1, "col-name"], [1, "col-type"], [1, "col-date"], [1, "col-size"], [1, "grid-body"], ["class", "doc-row", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "doc-row", 3, "click"], ["type", "checkbox", 3, "checked", "click", "change"], [1, "col-name", 3, "title"], [1, "type-badge"]],
    template: function DocumentListComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Documents");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DocumentListComponent_span_5_Template, 2, 1, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DocumentListComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, DocumentListComponent_div_7_Template, 7, 4, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DocumentListComponent_div_8_Template, 4, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DocumentListComponent_div_9_Template, 3, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DocumentListComponent_div_10_Template, 14, 3, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedDocuments.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.documents.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.documents.length === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.documents.length > 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.DatePipe],
    styles: [".document-list-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.list-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n  gap: 12px;\n}\n.list-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.list-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.list-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .doc-count[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  background: #f1f3f4;\n  padding: 2px 6px;\n  border-radius: 3px;\n}\n.list-header[_ngcontent-%COMP%]   .header-info[_ngcontent-%COMP%]   .selection-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 12px;\n  background: #e3f2fd;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-shrink: 0;\n}\n\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 20px;\n  color: #666;\n  gap: 8px;\n}\n.loading-container[_ngcontent-%COMP%]   .loading-spinner[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n  border: 2px solid #f3f3f3;\n  border-top: 2px solid #007bff;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n.no-documents[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #666;\n  font-size: 13px;\n  background: #f8f9fa;\n  border-radius: 4px;\n}\n\n.documents-grid[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n  margin: 0 -4px;\n}\n.documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 3fr 120px 90px 80px;\n  gap: 12px;\n  background-color: #f8f9fa;\n  padding: 8px 12px;\n  border-bottom: 1px solid #e9ecef;\n  font-size: 12px;\n  font-weight: 600;\n  color: #495057;\n}\n.documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .col-select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .col-select[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.documents-grid[_ngcontent-%COMP%]   .grid-body[_ngcontent-%COMP%] {\n  max-height: 400px;\n  overflow-y: auto;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 40px 3fr 120px 90px 80px;\n  gap: 12px;\n  padding: 8px 12px;\n  border-bottom: 1px solid #f1f3f4;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n  align-items: center;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row.selected[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-select[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-select[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 14px;\n  height: 14px;\n  cursor: pointer;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 13px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-type[_ngcontent-%COMP%]   .type-badge[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 3px;\n  font-size: 10px;\n  font-weight: 500;\n  color: #495057;\n  white-space: nowrap;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  white-space: nowrap;\n}\n.documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-size[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 12px;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 6px 10px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  white-space: nowrap;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 4px 8px;\n  font-size: 11px;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #007bff;\n  border: 1px solid #007bff;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #007bff;\n  color: white;\n}\n\n@media (max-width: 768px) {\n  .list-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 8px;\n  }\n  .list-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .documents-grid[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  .documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%], .documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%] {\n    grid-template-columns: 30px 2fr 80px 70px 60px;\n    gap: 8px;\n    font-size: 11px;\n  }\n}\n@media (max-width: 480px) {\n  .documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%], .documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%] {\n    grid-template-columns: 30px 1fr 60px;\n    gap: 6px;\n  }\n  .documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%], .documents-grid[_ngcontent-%COMP%]   .grid-header[_ngcontent-%COMP%]   .col-size[_ngcontent-%COMP%], .documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-date[_ngcontent-%COMP%], .documents-grid[_ngcontent-%COMP%]   .doc-row[_ngcontent-%COMP%]   .col-size[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header-info[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtbGlzdC9kb2N1bWVudC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FBQ0o7QUFDSTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ047QUFFSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBQU47QUFHSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxjQUFBO0FBSEo7O0FBT0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtBQUpGO0FBTUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBSko7QUFPRTtFQUNFLFNBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDRTtJQUFLLHVCQUFBO0VBTEw7RUFNQTtJQUFPLHlCQUFBO0VBSFA7QUFDRjtBQUtBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFIRjtBQUtFO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsU0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFISjtBQUtJO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFITjtBQUtNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBSFI7QUFRRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFOSjtBQVNFO0VBQ0UsYUFBQTtFQUNBLCtDQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQVBKO0FBU0k7RUFDRSx5QkFBQTtBQVBOO0FBVUk7RUFDRSx5QkFBQTtBQVJOO0FBV0k7RUFDRSxtQkFBQTtBQVROO0FBWUk7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUFWTjtBQVlNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBVlI7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFaTjtBQWdCTTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtBQWRSO0FBa0JJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQWhCTjtBQW1CSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQWpCTjs7QUF1QkE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBcEJGO0FBc0JFO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBcEJKO0FBdUJFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBckJKO0FBd0JFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBdEJKO0FBd0JJO0VBQ0UseUJBQUE7QUF0Qk47QUEwQkU7RUFDRSw2QkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQXhCSjtBQTBCSTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXhCTjs7QUE4QkE7RUFDRTtJQUNFLHNCQUFBO0lBQ0Esb0JBQUE7SUFDQSxRQUFBO0VBM0JGO0VBNkJFO0lBQ0UsdUJBQUE7RUEzQko7RUErQkE7SUFDRSxTQUFBO0VBN0JGO0VBK0JFOztJQUVFLDhDQUFBO0lBQ0EsUUFBQTtJQUNBLGVBQUE7RUE3Qko7QUFDRjtBQWlDQTtFQUVJOztJQUVFLG9DQUFBO0lBQ0EsUUFBQTtFQWhDSjtFQWtDSTs7OztJQUVFLGFBQUE7RUE5Qk47RUFtQ0E7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtFQWpDRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LWxpc3QtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4ubGlzdC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbiAgZ2FwOiAxMnB4O1xuXG4gIC5oZWFkZXItaW5mbyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTJweDtcbiAgICBcbiAgICBoMyB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBjb2xvcjogIzMzMztcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgfVxuICAgIFxuICAgIC5kb2MtY291bnQge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBiYWNrZ3JvdW5kOiAjZjFmM2Y0O1xuICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICB9XG4gICAgXG4gICAgLnNlbGVjdGlvbi1jb3VudCB7XG4gICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XG4gICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gIH1cblxuICAuaGVhZGVyLWFjdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiA2cHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cbn1cblxuLmxvYWRpbmctY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGNvbG9yOiAjNjY2O1xuICBnYXA6IDhweDtcblxuICAubG9hZGluZy1zcGlubmVyIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgIzAwN2JmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgfVxuXG4gIHAge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxuICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4ubm8tZG9jdW1lbnRzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbi5kb2N1bWVudHMtZ3JpZCB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgbWFyZ2luOiAwIC00cHg7IC8vIEFsbG93IHRhYmxlIHRvIGV4dGVuZCBzbGlnaHRseSBiZXlvbmQgY29udGFpbmVyXG5cbiAgLmdyaWQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAzZnIgMTIwcHggOTBweCA4MHB4O1xuICAgIGdhcDogMTJweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllY2VmO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgIFxuICAgIC5jb2wtc2VsZWN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBcbiAgICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XG4gICAgICAgIHdpZHRoOiAxNHB4O1xuICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIC5ncmlkLWJvZHkge1xuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gIH1cbiAgXG4gIC5kb2Mtcm93IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDBweCAzZnIgMTIwcHggOTBweCA4MHB4O1xuICAgIGdhcDogMTJweDtcbiAgICBwYWRkaW5nOiA4cHggMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjJzIGVhc2U7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBcbiAgICAmOmhvdmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgfVxuICAgIFxuICAgICYuc2VsZWN0ZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UzZjJmZDtcbiAgICB9XG4gICAgXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIC5jb2wtc2VsZWN0IHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIFxuICAgICAgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdIHtcbiAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY29sLW5hbWUge1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gICAgXG4gICAgLmNvbC10eXBlIHtcbiAgICAgIC50eXBlLWJhZGdlIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2U5ZWNlZjtcbiAgICAgICAgcGFkZGluZzogMnB4IDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiAjNDk1MDU3O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAuY29sLWRhdGUge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cbiAgICBcbiAgICAuY29sLXNpemUge1xuICAgICAgY29sb3I6ICM2NjY7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgfVxuICB9XG59XG5cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDZweCAxMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cbiAgJjpkaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gIH1cblxuICAmLmJ0bi1zbSB7XG4gICAgcGFkZGluZzogNHB4IDhweDtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cblxuICAmLmJ0bi1wcmltYXJ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICY6aG92ZXI6bm90KDpkaXNhYmxlZCkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICB9XG4gIH1cblxuICAmLmJ0bi1vdXRsaW5lIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBjb2xvcjogIzAwN2JmZjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YmZmO1xuXG4gICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICBnYXA6IDhweDtcblxuICAgIC5oZWFkZXItYWN0aW9ucyB7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG4gIH1cblxuICAuZG9jdW1lbnRzLWdyaWQge1xuICAgIG1hcmdpbjogMDtcbiAgICBcbiAgICAuZ3JpZC1oZWFkZXIsXG4gICAgLmRvYy1yb3cge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDJmciA4MHB4IDcwcHggNjBweDtcbiAgICAgIGdhcDogOHB4O1xuICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmRvY3VtZW50cy1ncmlkIHtcbiAgICAuZ3JpZC1oZWFkZXIsXG4gICAgLmRvYy1yb3cge1xuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMHB4IDFmciA2MHB4O1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBcbiAgICAgIC5jb2wtZGF0ZSxcbiAgICAgIC5jb2wtc2l6ZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIFxuICAuaGVhZGVyLWluZm8ge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZ2FwOiA0cHg7XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/document-extract.service */ 3402);
/* harmony import */ var _services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/progress-stepper.service */ 6906);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../extract-download/extract-download.component */ 8706);






function DocumentTrackingComponent_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.downloadQueue.length, " active ");
  }
}
function DocumentTrackingComponent_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.completedDownloads.length, " done ");
  }
}
function DocumentTrackingComponent_span_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r2.failedDownloads.length, " failed ");
  }
}
function DocumentTrackingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16)(1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r3.getDownloadProgress(), "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r3.getCurrentDownloadStatus(), " (", ctx_r3.getDownloadProgress(), "%)");
  }
}
function DocumentTrackingComponent_div_12_div_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CPDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DocumentTrackingComponent_div_12_div_5_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", item_r10.eventCodeDisplay, ")");
  }
}
function DocumentTrackingComponent_div_12_div_5_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r10.documentType);
  }
}
function DocumentTrackingComponent_div_12_div_5_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 36)(1, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", item_r10.progress || 0, "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", item_r10.progress || 0, "%");
  }
}
function DocumentTrackingComponent_div_12_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DocumentTrackingComponent_div_12_div_5_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DocumentTrackingComponent_div_12_div_5_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 29)(7, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, DocumentTrackingComponent_div_12_div_5_span_9_Template, 2, 1, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DocumentTrackingComponent_div_12_div_5_div_10_Template, 5, 3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx_r9.getStatusClass(item_r10.status) + (item_r10.documentType === "CPDI Document" ? " cpdi-doc" : ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r10.documentName || item_r10.documentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.documentType === "CPDI Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r10.documentName || item_r10.documentId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.documentType === "CPDI Document" && item_r10.eventCodeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r9.getStatusText(item_r10.status));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r10.status === "downloading");
  }
}
function DocumentTrackingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DocumentTrackingComponent_div_12_div_5_Template, 11, 9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Active (", ctx_r4.downloadQueue.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r4.downloadQueue);
  }
}
function DocumentTrackingComponent_div_13_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CPDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DocumentTrackingComponent_div_13_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", item_r19.eventCodeDisplay, ")");
  }
}
function DocumentTrackingComponent_div_13_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r19.filename);
  }
}
function DocumentTrackingComponent_div_13_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DocumentTrackingComponent_div_13_div_7_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DocumentTrackingComponent_div_13_div_7_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DocumentTrackingComponent_div_13_div_7_span_7_Template, 2, 1, "span", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 45)(9, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cpdi-doc", item_r19.documentType === "CPDI Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r19.documentName || item_r19.documentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.documentType === "CPDI Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r19.documentName || item_r19.documentId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.documentType === "CPDI Document" && item_r19.eventCodeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r19.filename);
  }
}
function DocumentTrackingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_13_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r25.clearCompleted());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DocumentTrackingComponent_div_13_div_7_Template, 11, 7, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Completed (", ctx_r5.completedDownloads.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.completedDownloads);
  }
}
function DocumentTrackingComponent_div_14_div_7_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "CPDI");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function DocumentTrackingComponent_div_14_div_7_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("(", item_r28.eventCodeDisplay, ")");
  }
}
function DocumentTrackingComponent_div_14_div_7_span_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r28.error);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r28.error, " ");
  }
}
function DocumentTrackingComponent_div_14_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 50)(1, "div", 25)(2, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, DocumentTrackingComponent_div_14_div_7_span_3_Template, 2, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, DocumentTrackingComponent_div_14_div_7_span_5_Template, 2, 1, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DocumentTrackingComponent_div_14_div_7_span_7_Template, 2, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 52)(9, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_14_div_7_Template_button_click_9_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);
      const item_r28 = restoredCtx.$implicit;
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r34.retryDownload(item_r28));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, " \u21BB Retry ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r28 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("cpdi-doc", item_r28.documentType === "CPDI Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", item_r28.documentName || item_r28.documentId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.documentType === "CPDI Document");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", item_r28.documentName || item_r28.documentId, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.documentType === "CPDI Document" && item_r28.eventCodeDisplay);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", item_r28.error);
  }
}
function DocumentTrackingComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function DocumentTrackingComponent_div_14_Template_button_click_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r36.clearFailed());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Clear");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DocumentTrackingComponent_div_14_div_7_Template, 11, 7, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Failed (", ctx_r6.failedDownloads.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.failedDownloads);
  }
}
function DocumentTrackingComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 55)(1, "app-extract-download", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("extractComplete", function DocumentTrackingComponent_div_15_Template_app_extract_download_extractComplete_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r39);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r38.handleExtractComplete($event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("personId", ctx_r7.currentPatient.personId)("encntrId", ctx_r7.currentPatient.encntrId)("downloadedFiles", ctx_r7.downloadedFiles);
  }
}
function DocumentTrackingComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 57)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCCB No download activity");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Select documents to start downloading");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class DocumentTrackingComponent {
  constructor(documentService, progressStepper) {
    this.documentService = documentService;
    this.progressStepper = progressStepper;
    this.currentPatient = null;
    this.downloadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    this.startDownload(downloadData.personId, downloadData.encntrId, downloadData.dmsMediaInstanceRequests, downloadData.cpdiDocumentRequests);
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
   * Starts the download process for selected documents (DMS and CPDI)
   * @param personId The patient's person ID
   * @param encntrId The patient's encounter ID
   * @param dmsMediaInstanceRequests Array of DMS document requests
   * @param cpdiDocumentRequests Array of CPDI document requests
   */
  startDownload(personId, encntrId, dmsMediaInstanceRequests, cpdiDocumentRequests) {
    console.log('[DocumentTrackingComponent] startDownload() - Starting download process with parameters:', {
      personId,
      encntrId,
      dmsCount: dmsMediaInstanceRequests.length,
      cpdiCount: cpdiDocumentRequests.length
    });
    if (dmsMediaInstanceRequests.length === 0 && cpdiDocumentRequests.length === 0) {
      console.warn('[DocumentTrackingComponent] startDownload() - No download requests provided');
      return;
    }
    // Clear previous download state
    this.clearDownloadState();
    this.isDownloading = true;
    // Initialize download queue for both DMS and CPDI
    this.downloadQueue = [...dmsMediaInstanceRequests.map(request => ({
      documentId: request.mediaInstanceId.toString(),
      status: 'pending'
    })), ...cpdiDocumentRequests.map(request => ({
      documentId: request.eventId.toString(),
      status: 'pending',
      eventCodeDisplay: '' // will be set after download
    }))];

    console.log('[DocumentTrackingComponent] startDownload() - Initialized download queue:', this.downloadQueue);
    // Start DMS downloads
    if (dmsMediaInstanceRequests.length > 0) {
      this.documentService.downloadDocumentsSequentially(personId, encntrId, dmsMediaInstanceRequests).subscribe({
        next: response => {
          console.log('[DocumentTrackingComponent] startDownload() - DMS sequential download response:', response);
          this.handleSequentialDownloadResponse(response, 'dms');
        },
        error: error => {
          console.error('[DocumentTrackingComponent] startDownload() - DMS sequential download error:', error);
          this.handleDownloadError(error);
        }
      });
    }
    // Start CPDI downloads
    if (cpdiDocumentRequests.length > 0) {
      this.documentService.downloadCpdiDocumentsSequentially(personId, encntrId, cpdiDocumentRequests).subscribe({
        next: response => {
          console.log('[DocumentTrackingComponent] startDownload() - CPDI sequential download response:', response);
          this.handleSequentialDownloadResponse(response, 'cpdi');
        },
        error: error => {
          console.error('[DocumentTrackingComponent] startDownload() - CPDI sequential download error:', error);
          this.handleDownloadError(error);
        }
      });
    }
  }
  /**
   * Handles sequential download response with progress updates for DMS or CPDI
   * @param response The sequential download response from the service
   * @param type 'dms' or 'cpdi'
   */
  handleSequentialDownloadResponse(response, type) {
    console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Processing sequential download response:', response, 'type:', type);
    const {
      progress,
      isComplete,
      allResults
    } = response;
    // Update progress for current download
    if (progress.current) {
      const id = type === 'dms' ? progress.current.mediaInstanceId.toString() : progress.current.eventId.toString();
      const queueItem = this.downloadQueue.find(item => item.documentId === id);
      if (queueItem) {
        queueItem.status = 'downloading';
        queueItem.progress = 50;
      }
    }
    // Process completed results
    allResults.forEach(result => {
      const id = type === 'dms' ? result.mediaInstanceId?.toString() : result.eventId?.toString();
      const queueItem = this.downloadQueue.find(item => item.documentId === id);
      if (queueItem) {
        queueItem.filename = result.filename;
        queueItem.documentName = result.documentName;
        queueItem.documentType = result.documentType;
        if (result.eventCodeDisplay) queueItem.eventCodeDisplay = result.eventCodeDisplay;
        if (result.status === 1) {
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
              mediaInstanceId: result.mediaInstanceId || result.eventId || 0
            };
            const existingFile = this.downloadedFiles.find(file => file.mediaInstanceId === (result.mediaInstanceId || result.eventId));
            if (!existingFile) {
              this.downloadedFiles.push(downloadedFile);
              console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - Added to downloaded files:', downloadedFile);
            }
          }
        } else {
          queueItem.status = 'failed';
          queueItem.error = result.message;
          this.moveToFailed(queueItem);
        }
      } else {
        console.warn('[DocumentTrackingComponent] handleSequentialDownloadResponse() - No queue item found for id:', id);
      }
    });
    // Check if all downloads are complete
    const allComplete = this.downloadQueue.every(item => item.status === 'completed' || item.status === 'failed');
    if (isComplete && allComplete) {
      this.isDownloading = false;
      this.downloadQueue = [];
      this.progressStepper.updateStep('download', 'completed', undefined, {
        count: this.downloadedFiles.length
      });
      this.progressStepper.updateStepDescription('download', `${this.downloadedFiles.length} files downloaded`);
      if (this.downloadedFiles.length > 0) {
        this.showExtractComponent = true;
      }
      console.log('[DocumentTrackingComponent] handleSequentialDownloadResponse() - All downloads completed. Downloaded files:', this.downloadedFiles.length);
    }
  }
  /**
   * Handles extract completion
   * @param extractResponse The extract response
   */
  handleExtractComplete(extractResponse) {
    console.log('[DocumentTrackingComponent] handleExtractComplete() - Extract completed:', extractResponse);
    // Update progress stepper for extract step
    if (extractResponse.success) {
      this.progressStepper.updateStep('extract', 'completed', undefined, {
        fileName: extractResponse.zipFileName
      });
      this.progressStepper.updateStepDescription('extract', `ZIP created: ${extractResponse.zipFileName}`);
      // Activate final download step
      this.progressStepper.updateStep('complete', 'active');
    } else {
      this.progressStepper.updateStep('extract', 'error');
    }
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
      this.failedDownloads.splice(index, 1);
    }
    // Add to download queue
    this.downloadQueue.push({
      documentId: item.documentId,
      status: 'pending'
    });
    // Determine if DMS or CPDI
    const isDms = !!this.currentPatient.documents.find(doc => doc.id === item.documentId && doc.sourceType === 'dms');
    if (isDms) {
      const retryRequest = {
        mediaInstanceId: parseInt(item.documentId)
      };
      this.documentService.downloadDocumentsSequentially(this.currentPatient.personId, this.currentPatient.encntrId, [retryRequest]).subscribe({
        next: response => {
          this.handleSequentialDownloadResponse(response, 'dms');
        },
        error: error => {
          this.handleDownloadError(error);
        }
      });
    } else {
      const retryRequest = {
        eventId: parseInt(item.documentId),
        blobHandle: this.currentPatient.documents.find(doc => doc.id === item.documentId && doc.sourceType === 'cpdi')?.contentUid || ''
      };
      this.documentService.downloadCpdiDocumentsSequentially(this.currentPatient.personId, this.currentPatient.encntrId, [retryRequest]).subscribe({
        next: response => {
          this.handleSequentialDownloadResponse(response, 'cpdi');
        },
        error: error => {
          this.handleDownloadError(error);
        }
      });
    }
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
    return new (t || DocumentTrackingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_0__.DocumentExtractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_1__.ProgressStepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
    type: DocumentTrackingComponent,
    selectors: [["app-document-tracking"]],
    inputs: {
      currentPatient: "currentPatient"
    },
    outputs: {
      downloadRequest: "downloadRequest"
    },
    decls: 17,
    vars: 9,
    consts: [[1, "document-tracking-container"], [1, "tracking-header"], [1, "header-info"], [1, "status-indicators"], ["class", "queue-count", 4, "ngIf"], ["class", "completed-count", 4, "ngIf"], ["class", "failed-count", 4, "ngIf"], [1, "progress-area"], ["class", "progress-overview", 4, "ngIf"], [1, "main-grid"], ["class", "downloads-section", 4, "ngIf"], ["class", "extract-section", 4, "ngIf"], ["class", "no-activity", 4, "ngIf"], [1, "queue-count"], [1, "completed-count"], [1, "failed-count"], [1, "progress-overview"], [1, "progress-bar-overall"], [1, "progress-fill-overall"], [1, "progress-text"], [1, "downloads-section"], [1, "section-title"], [1, "compact-download-list"], ["class", "compact-download-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "compact-download-item"], [1, "item-info"], [1, "doc-name", 3, "title"], ["class", "cpdi-badge", 4, "ngIf"], ["class", "event-code-display", 4, "ngIf"], [1, "doc-meta"], [1, "status-badge"], ["class", "doc-type", 4, "ngIf"], ["class", "item-progress", 4, "ngIf"], [1, "cpdi-badge"], [1, "event-code-display"], [1, "doc-type"], [1, "item-progress"], [1, "mini-progress"], [1, "mini-fill"], [1, "progress-pct"], [1, "btn", "btn-xs", "btn-outline", 3, "click"], [1, "compact-download-list", "completed"], ["class", "compact-download-item status-completed", 3, "cpdi-doc", 4, "ngFor", "ngForOf"], [1, "compact-download-item", "status-completed"], ["class", "filename", 4, "ngIf"], [1, "item-status"], [1, "checkmark"], [1, "filename"], [1, "compact-download-list", "failed"], ["class", "compact-download-item status-failed", 3, "cpdi-doc", 4, "ngFor", "ngForOf"], [1, "compact-download-item", "status-failed"], ["class", "error-msg", 3, "title", 4, "ngIf"], [1, "item-actions"], [1, "btn", "btn-xs", "btn-retry", 3, "click"], [1, "error-msg", 3, "title"], [1, "extract-section"], [3, "personId", "encntrId", "downloadedFiles", "extractComplete"], [1, "no-activity"]],
    template: function DocumentTrackingComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Download Progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, DocumentTrackingComponent_span_6_Template, 2, 1, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, DocumentTrackingComponent_span_7_Template, 2, 1, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, DocumentTrackingComponent_span_8_Template, 2, 1, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, DocumentTrackingComponent_div_10_Template, 5, 4, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, DocumentTrackingComponent_div_12_Template, 6, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, DocumentTrackingComponent_div_13_Template, 8, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, DocumentTrackingComponent_div_14_Template, 8, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, DocumentTrackingComponent_div_15_Template, 2, 3, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, DocumentTrackingComponent_div_16_Template, 5, 0, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.downloadQueue.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.completedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.failedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isDownloading);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.downloadQueue.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.completedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.failedDownloads.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showExtractComponent && ctx.currentPatient);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.downloadQueue.length === 0 && ctx.completedDownloads.length === 0 && ctx.failedDownloads.length === 0 && !ctx.showExtractComponent);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _extract_download_extract_download_component__WEBPACK_IMPORTED_MODULE_2__.ExtractDownloadComponent],
    styles: [".document-tracking-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.tracking-header[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.tracking-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n.progress-overview[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 8px;\n  margin-bottom: 8px;\n  border: 1px solid #e9ecef;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-status[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 12px;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-overall[_ngcontent-%COMP%] {\n  height: 12px;\n  background-color: #e9ecef;\n  border-radius: 6px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-bar-overall[_ngcontent-%COMP%]   .progress-fill-overall[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n  transition: width 0.3s ease;\n}\n.progress-overview[_ngcontent-%COMP%]   .progress-info[_ngcontent-%COMP%]   .progress-text-overall[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  text-align: center;\n}\n\n.tracking-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 8px;\n}\n.tracking-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 12px;\n  font-weight: 600;\n}\n.tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 16px;\n}\n.tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  border-left: 4px solid transparent;\n  transition: all 0.2s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  border-left-color: #ffc107;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-downloading[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-left-color: #17a2b8;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-completed[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-left-color: #28a745;\n}\n.download-list[_ngcontent-%COMP%]   .download-item.status-failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-left-color: #dc3545;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 14px;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-id[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  font-size: 12px;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .document-type[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 2px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .document-details[_ngcontent-%COMP%]   .filename[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  font-family: monospace;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #666;\n  margin-bottom: 4px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc3545;\n  margin-top: 4px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 120px;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background-color: #007bff;\n  transition: width 0.3s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  min-width: 40px;\n  text-align: right;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .completion-indicator[_ngcontent-%COMP%]   .checkmark[_ngcontent-%COMP%] {\n  color: #28a745;\n  font-size: 18px;\n  font-weight: bold;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  background-color: #007bff;\n  color: white;\n  font-size: 12px;\n  cursor: pointer;\n  transition: background-color 0.2s ease;\n}\n.download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%]:hover {\n  background-color: #0056b3;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 8px 16px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.btn.btn-outline[_ngcontent-%COMP%] {\n  background-color: transparent;\n  color: #6c757d;\n  border: 1px solid #6c757d;\n}\n.btn.btn-outline[_ngcontent-%COMP%]:hover {\n  background-color: #6c757d;\n  color: white;\n}\n\n.no-activity[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n  background: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.no-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.no-activity[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n  font-size: 14px;\n  color: #999;\n}\n\n@media (max-width: 768px) {\n  .document-tracking-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tracking-section[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .tracking-section[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 12px;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .progress-container[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .download-list[_ngcontent-%COMP%]   .download-item[_ngcontent-%COMP%]   .btn-retry[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n@media (max-width: 480px) {\n  .compact-download-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    gap: 4px;\n  }\n  .compact-download-item[_ngcontent-%COMP%]   .item-progress[_ngcontent-%COMP%], .compact-download-item[_ngcontent-%COMP%]   .item-actions[_ngcontent-%COMP%] {\n    align-self: flex-end;\n  }\n}\n.extract-section[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZG9jdW1lbnQtdHJhY2tpbmcvZG9jdW1lbnQtdHJhY2tpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFBRjtBQUdJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0FBRE47QUFJSTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUZOO0FBSU07RUFDRSxZQUFBO0VBQ0Esb0RBQUE7RUFDQSwyQkFBQTtBQUZSO0FBTUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBSk47O0FBU0E7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFORjtBQVFFO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTko7QUFTRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFQSjtBQVNJO0VBQ0UsU0FBQTtBQVBOOztBQWFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7QUFWSjtBQVlJO0VBQ0UsZ0JBQUE7QUFWTjtBQWFJO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQVhOO0FBY0k7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBWk47QUFlSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFiTjtBQWdCSTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFkTjtBQWlCSTtFQUNFLE9BQUE7QUFmTjtBQWlCTTtFQUNFLGtCQUFBO0FBZlI7QUFpQlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFmVjtBQWtCUTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWhCVjtBQW1CUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFqQlY7QUFvQlE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0FBbEJWO0FBc0JNO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQXBCUjtBQXVCTTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQXJCUjtBQXlCSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtBQXZCTjtBQXlCTTtFQUNFLE9BQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBdkJSO0FBeUJRO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsMkJBQUE7QUF2QlY7QUEyQk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQXpCUjtBQThCTTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUE1QlI7QUFnQ0k7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7QUE5Qk47QUFnQ007RUFDRSx5QkFBQTtBQTlCUjs7QUFvQ0E7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpDRjtBQW1DRTtFQUNFLDZCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBakNKO0FBbUNJO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBakNOOztBQXNDQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUFuQ0Y7QUFxQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFuQ0o7QUFxQ0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBbkNOOztBQXlDQTtFQUNFO0lBQ0UsYUFBQTtFQXRDRjtFQXlDQTtJQUNFLGFBQUE7RUF2Q0Y7RUF5Q0U7SUFDRSxzQkFBQTtJQUNBLG9CQUFBO0lBQ0EsU0FBQTtFQXZDSjtFQXlDSTtJQUNFLG9CQUFBO0VBdkNOO0VBNENBO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFNBQUE7RUExQ0Y7RUE0Q0U7SUFDRSxlQUFBO0VBMUNKO0VBNkNFO0lBQ0Usb0JBQUE7RUEzQ0o7QUFDRjtBQStDQTtFQUNFO0lBQ0Usc0JBQUE7SUFDQSxvQkFBQTtJQUNBLFFBQUE7RUE3Q0Y7RUErQ0U7O0lBRUUsb0JBQUE7RUE3Q0o7QUFDRjtBQWlEQTtFQUNFLGdCQUFBO0FBL0NGIiwic291cmNlc0NvbnRlbnQiOlsiLmRvY3VtZW50LXRyYWNraW5nLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLnRyYWNraW5nLWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5wcm9ncmVzcy1vdmVydmlldyB7XG4gIGJhY2tncm91bmQ6ICNmOGY5ZmE7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG5cbiAgLnByb2dyZXNzLWluZm8ge1xuICAgIC5wcm9ncmVzcy1zdGF0dXMge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtYmFyLW92ZXJhbGwge1xuICAgICAgaGVpZ2h0OiAxMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgIC5wcm9ncmVzcy1maWxsLW92ZXJhbGwge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzAwN2JmZiwgIzAwNTZiMyk7XG4gICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtdGV4dC1vdmVyYWxsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4udHJhY2tpbmctc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgaDQge1xuICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgfVxuICB9XG59XG5cbi5kb3dubG9hZC1saXN0IHtcbiAgLmRvd25sb2FkLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcbiAgICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1wZW5kaW5nIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogI2ZmYzEwNztcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1kb3dubG9hZGluZyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xuICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMxN2EyYjg7XG4gICAgfVxuXG4gICAgJi5zdGF0dXMtY29tcGxldGVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNGVkZGE7XG4gICAgICBib3JkZXItbGVmdC1jb2xvcjogIzI4YTc0NTtcbiAgICB9XG5cbiAgICAmLnN0YXR1cy1mYWlsZWQge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjZGMzNTQ1O1xuICAgIH1cblxuICAgIC5kb3dubG9hZC1pbmZvIHtcbiAgICAgIGZsZXg6IDE7XG5cbiAgICAgIC5kb2N1bWVudC1kZXRhaWxzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgIC5kb2N1bWVudC1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZG9jdW1lbnQtaWQge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kb2N1bWVudC10eXBlIHtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpbGVuYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc3RhdHVzIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgfVxuXG4gICAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgIG1hcmdpbi10b3A6IDRweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAucHJvZ3Jlc3MtY29udGFpbmVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgZ2FwOiAxMnB4O1xuICAgICAgbWluLXdpZHRoOiAxMjBweDtcblxuICAgICAgLnByb2dyZXNzLWJhciB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgICAgICAgLnByb2dyZXNzLWZpbGwge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgIHRyYW5zaXRpb246IHdpZHRoIDAuM3MgZWFzZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAucHJvZ3Jlc3MtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIG1pbi13aWR0aDogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBsZXRpb24taW5kaWNhdG9yIHtcbiAgICAgIC5jaGVja21hcmsge1xuICAgICAgICBjb2xvcjogIzI4YTc0NTtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYnRuLXJldHJ5IHtcbiAgICAgIHBhZGRpbmc6IDZweCAxMnB4O1xuICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmJ0biB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgJi5idG4tb3V0bGluZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgY29sb3I6ICM2Yzc1N2Q7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzZjNzU3ZDtcblxuICAgICY6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzZjNzU3ZDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cbn1cblxuLm5vLWFjdGl2aXR5IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA0MHB4O1xuICBjb2xvcjogIzY2NjtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3gtc2hhZG93OiAwIDJweCA4cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgY29sb3I6ICM5OTk7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmRvY3VtZW50LXRyYWNraW5nLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxuXG4gIC50cmFja2luZy1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuXG4gICAgLnNlY3Rpb24taGVhZGVyIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgIGdhcDogMTJweDtcblxuICAgICAgLmJ0biB7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5kb3dubG9hZC1saXN0IC5kb3dubG9hZC1pdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogMTJweDtcblxuICAgIC5wcm9ncmVzcy1jb250YWluZXIge1xuICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5idG4tcmV0cnkge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29tcGFjdC1kb3dubG9hZC1pdGVtIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgIGdhcDogNHB4O1xuICAgIFxuICAgIC5pdGVtLXByb2dyZXNzLFxuICAgIC5pdGVtLWFjdGlvbnMge1xuICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuICB9XG59XG5cbi5leHRyYWN0LXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_document_extract_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/document-extract.service */ 3402);
/* harmony import */ var _services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/progress-stepper.service */ 6906);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);






function ExtractDownloadComponent_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u2717");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_span_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDCC1");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("width", ctx_r4.extractProgress, "%");
  }
}
function ExtractDownloadComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExtractDownloadComponent_button_20_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresetView"](ctx_r9.downloadWithMPagesAuth());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " \uD83D\uDCE5 Download ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_div_21_div_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\uD83D\uDD10");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_div_21_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u26A0\uFE0F");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
}
function ExtractDownloadComponent_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ExtractDownloadComponent_div_21_div_4_span_1_Template, 2, 0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, ExtractDownloadComponent_div_21_div_4_span_2_Template, 2, 0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.isMPageAuthAvailable());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r11.isMPageAuthAvailable());
  }
}
function ExtractDownloadComponent_div_21_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 37)(1, "div", 38)(2, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const file_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("title", file_r15.filename);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r15.documentType);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](file_r15.documentName || file_r15.filename);
  }
}
function ExtractDownloadComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 27)(1, "div", 28)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, ExtractDownloadComponent_div_21_div_4_Template, 3, 2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExtractDownloadComponent_div_21_div_6_Template, 6, 3, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Files (", ctx_r6.downloadedFiles.length, ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.shouldShowDownloadButton());
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.downloadedFiles)("ngForTrackBy", ctx_r6.trackByFilename);
  }
}
function ExtractDownloadComponent_div_22_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Files:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r16.extractResult == null ? null : ctx_r16.extractResult.extractInfo == null ? null : ctx_r16.extractResult.extractInfo.fileCount, " ");
  }
}
function ExtractDownloadComponent_div_22_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 43)(1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Metadata:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r17.extractResult == null ? null : ctx_r17.extractResult.metadataFile, " ");
  }
}
function ExtractDownloadComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41)(1, "div", 42)(2, "div", 43)(3, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "ZIP:");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExtractDownloadComponent_div_22_div_6_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExtractDownloadComponent_div_22_div_7_Template, 4, 1, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", (ctx_r7.extractResult == null ? null : ctx_r7.extractResult.zipFileName) || "extracted_documents.zip", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.extractResult == null ? null : ctx_r7.extractResult.extractInfo == null ? null : ctx_r7.extractResult.extractInfo.fileCount);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.extractResult == null ? null : ctx_r7.extractResult.metadataFile);
  }
}
function ExtractDownloadComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 45)(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "\uD83D\uDCC4 No files ready for extract");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Complete document downloads first");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
  }
}
class ExtractDownloadComponent {
  constructor(documentService, progressStepper) {
    this.documentService = documentService;
    this.progressStepper = progressStepper;
    this.personId = 0;
    this.encntrId = 0;
    this.downloadedFiles = [];
    this.extractComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
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
    // Update progress stepper
    this.progressStepper.updateStep('extract', 'active', 0);
    console.log('[ExtractDownloadComponent] startExtract() - Creating extract request with files:', this.downloadedFiles);
    // Create the extract request
    const extractRequest = {
      personId: this.personId,
      encntrId: this.encntrId,
      downloadedFiles: this.downloadedFiles
    };
    this.extractStatus = 'Sending extract request to server...';
    this.extractProgress = 25;
    this.progressStepper.updateStep('extract', 'active', 25);
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
    // Update progress stepper
    this.progressStepper.updateStep('extract', 'active', 100);
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
   * Downloads the created zip file using MPAGES_SVC_AUTH
   * This method follows the pattern from mediagallery-o1.js for Edge authentication
   */
  downloadWithMPagesAuth() {
    var _this = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.extractResult?.downloadUrl) {
        console.warn('[ExtractDownloadComponent] downloadWithMPagesAuth() - No downloadUrl available');
        alert('No download URL available.');
        return;
      }
      console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Starting MPages authenticated download');
      console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Download URL:', _this.extractResult.downloadUrl);
      console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Extract Result:', _this.extractResult);
      try {
        // Use the downloadUrl from the service
        const downloadUrl = _this.extractResult.downloadUrl;
        // Create XMLHttpRequest for authenticated download
        const xhr = new XMLHttpRequest();
        // Open the request
        xhr.open('GET', downloadUrl);
        // Set response type to blob for binary data
        xhr.responseType = 'blob';
        // Apply MPAGES_SVC_AUTH if available (from discern meta declarations)
        let authPromise = Promise.resolve();
        if (window.MPAGES_SVC_AUTH) {
          console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Applying MPAGES_SVC_AUTH');
          authPromise = window.MPAGES_SVC_AUTH(xhr);
        } else {
          console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - MPAGES_SVC_AUTH not available');
        }
        // Wait for authentication to complete
        yield authPromise;
        // Create promise for the download
        const downloadPromise = new Promise((resolve, reject) => {
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Download successful');
              // Get the blob response and ensure it has the correct MIME type
              const originalBlob = xhr.response;
              const blob = new Blob([originalBlob], {
                type: 'application/zip'
              });
              // Use the descriptive filename from the extract response
              let filename = _this.extractResult?.zipFileName || 'extracted_documents.zip';
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Original filename:', _this.extractResult?.zipFileName);
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Filename before extension check:', filename);
              // Ensure filename has .zip extension
              if (!filename.toLowerCase().endsWith('.zip')) {
                filename += '.zip';
              }
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Final filename:', filename);
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Blob size:', blob.size);
              console.log('[ExtractDownloadComponent] downloadWithMPagesAuth() - Blob type (corrected):', blob.type);
              // Create a temporary URL for the blob
              const url = window.URL.createObjectURL(blob);
              // Create a download link
              const link = document.createElement('a');
              link.href = url;
              link.download = filename;
              // In Edge/Chrome, we can use the File System Access API for save dialog
              if ('showSaveFilePicker' in window) {
                _this.saveWithFileSystemAPI(blob, filename).then(() => resolve()).catch(() => {
                  // Fallback to standard download
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                  window.URL.revokeObjectURL(url);
                  resolve();
                });
              } else {
                // Standard download
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                window.URL.revokeObjectURL(url);
                resolve();
              }
            } else {
              console.error('[ExtractDownloadComponent] downloadWithMPagesAuth() - Download failed with status:', xhr.status);
              reject(new Error(`Download failed with status: ${xhr.status}`));
            }
          };
          xhr.onerror = () => {
            console.error('[ExtractDownloadComponent] downloadWithMPagesAuth() - Network error during download');
            reject(new Error('Network error during download'));
          };
          // Send the request
          xhr.send();
        });
        yield downloadPromise;
        // Mark final download step as completed
        _this.progressStepper.updateStep('complete', 'completed');
        _this.progressStepper.updateStepDescription('complete', 'ZIP file saved to device');
      } catch (error) {
        console.error('[ExtractDownloadComponent] downloadWithMPagesAuth() - Error:', error);
        _this.progressStepper.updateStep('complete', 'error');
        alert('Download failed. Please try another method.');
      }
    })();
  }
  /**
   * Uses the File System Access API to show a save dialog
   * @param blob The blob to save
   * @param suggestedName The suggested filename
   */
  saveWithFileSystemAPI(blob, suggestedName) {
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Request file handle with save dialog
        const handle = yield window.showSaveFilePicker({
          suggestedName: suggestedName,
          types: [{
            description: 'Zip files',
            accept: {
              'application/zip': ['.zip']
            }
          }]
        });
        // Create a writable stream
        const writable = yield handle.createWritable();
        // Write the blob to the file
        yield writable.write(blob);
        // Close the file
        yield writable.close();
        console.log('[ExtractDownloadComponent] saveWithFileSystemAPI() - File saved successfully');
      } catch (error) {
        if (error.name === 'AbortError') {
          console.log('[ExtractDownloadComponent] saveWithFileSystemAPI() - User cancelled save dialog');
        } else {
          console.error('[ExtractDownloadComponent] saveWithFileSystemAPI() - Error:', error);
        }
        throw error;
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
  /**
   * Checks if MPage authentication is available
   * @returns True if MPAGES_SVC_AUTH is available
   */
  isMPageAuthAvailable() {
    return typeof window.MPAGES_SVC_AUTH === 'function';
  }
  /**
   * Downloads the extract file using the fileTransfer/retrieveFile endpoint
   */
  downloadWithFileTransfer() {
    if (this.extractResult?.zipFileName) {
      console.log('[ExtractDownloadComponent] downloadWithFileTransfer() - Starting fileTransfer download');
      // Use the actual fileName and nodeName from the response if available
      // Otherwise fall back to using zipFileName for both
      const fileName = this.extractResult.fileName || this.extractResult.zipFileName;
      const nodeName = this.extractResult.nodeName || this.extractResult.zipFileName;
      console.log('[ExtractDownloadComponent] downloadWithFileTransfer() - Using parameters:', {
        fileName,
        nodeName
      });
      this.documentService.downloadExtractFile(fileName, nodeName).subscribe({
        next: blob => {
          console.log('[ExtractDownloadComponent] downloadWithFileTransfer() - Download successful');
          // Ensure proper filename with .zip extension
          let downloadFileName = fileName;
          if (!downloadFileName.toLowerCase().endsWith('.zip')) {
            downloadFileName += '.zip';
          }
          // Create blob with correct MIME type
          const zipBlob = new Blob([blob], {
            type: 'application/zip'
          });
          // Create download link for the blob
          const url = window.URL.createObjectURL(zipBlob);
          const link = document.createElement('a');
          link.href = url;
          link.download = downloadFileName;
          link.style.display = 'none';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
          // Clean up the object URL
          window.URL.revokeObjectURL(url);
          console.log('[ExtractDownloadComponent] downloadWithFileTransfer() - File download initiated for:', downloadFileName);
        },
        error: error => {
          console.error('[ExtractDownloadComponent] downloadWithFileTransfer() - Download error:', error);
          alert('FileTransfer download failed. Please try the other download methods.');
        }
      });
    } else {
      console.warn('[ExtractDownloadComponent] downloadWithFileTransfer() - No zipFileName available');
      alert('No file information available for download.');
    }
  }
  /**
   * Checks if the fileTransfer download button should be shown
   * @returns True if fileTransfer button should be shown
   */
  shouldShowFileTransferButton() {
    return this.extractResult?.success === true && !!this.extractResult.zipFileName;
  }
  static #_ = this.ɵfac = function ExtractDownloadComponent_Factory(t) {
    return new (t || ExtractDownloadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_document_extract_service__WEBPACK_IMPORTED_MODULE_1__.DocumentExtractService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_2__.ProgressStepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
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
    decls: 24,
    vars: 14,
    consts: [[1, "extract-download-container"], [1, "main-controls"], [1, "control-section"], [1, "status-and-controls"], [1, "status-area"], [1, "extract-status"], [1, "status-icon"], ["class", "spinner", 4, "ngIf"], ["class", "success-icon", 4, "ngIf"], ["class", "error-icon", 4, "ngIf"], ["class", "ready-icon", 4, "ngIf"], [1, "status-text"], [1, "progress-area"], ["class", "progress-bar", 4, "ngIf"], [1, "action-buttons"], [1, "btn", "btn-primary", "btn-sm", 3, "disabled", "click"], ["class", "btn btn-success btn-sm", "title", "Download ZIP file", 3, "click", 4, "ngIf"], ["class", "files-section", 4, "ngIf"], ["class", "extract-info", 4, "ngIf"], ["class", "no-files", 4, "ngIf"], [1, "spinner"], [1, "success-icon"], [1, "error-icon"], [1, "ready-icon"], [1, "progress-bar"], [1, "progress-fill"], ["title", "Download ZIP file", 1, "btn", "btn-success", "btn-sm", 3, "click"], [1, "files-section"], [1, "files-header"], ["class", "auth-indicator", 4, "ngIf"], [1, "compact-file-list"], ["class", "compact-file-item", 3, "title", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "auth-indicator"], ["class", "auth-ok", 4, "ngIf"], ["class", "auth-alt", 4, "ngIf"], [1, "auth-ok"], [1, "auth-alt"], [1, "compact-file-item", 3, "title"], [1, "file-main"], [1, "file-type"], [1, "file-name"], [1, "extract-info"], [1, "info-grid"], [1, "info-item"], ["class", "info-item", 4, "ngIf"], [1, "no-files"]],
    template: function ExtractDownloadComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Extract & Download");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3)(6, "div", 4)(7, "div", 5)(8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExtractDownloadComponent_span_9_Template, 2, 0, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, ExtractDownloadComponent_span_10_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ExtractDownloadComponent_span_11_Template, 2, 0, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, ExtractDownloadComponent_span_12_Template, 2, 0, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ExtractDownloadComponent_div_16_Template, 2, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 14)(18, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExtractDownloadComponent_Template_button_click_18_listener() {
          return ctx.startExtract();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ExtractDownloadComponent_button_20_Template, 2, 0, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, ExtractDownloadComponent_div_21_Template, 7, 4, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ExtractDownloadComponent_div_22_Template, 8, 3, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ExtractDownloadComponent_div_23_Template, 5, 0, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"](ctx.getExtractStatusClass());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isExtracting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isExtracting && (ctx.extractResult == null ? null : ctx.extractResult.success));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isExtracting && ctx.extractResult && !ctx.extractResult.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.isExtracting && !ctx.extractResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.getExtractStatusText());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.isExtracting);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.isExtractButtonDisabled());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.getExtractButtonText(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.shouldShowDownloadButton());
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.downloadedFiles.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.extractResult == null ? null : ctx.extractResult.success);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.downloadedFiles.length === 0);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf],
    styles: [".extract-download-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.extract-header[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  text-align: center;\n}\n.extract-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.extract-header[_ngcontent-%COMP%]   .extract-description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 11px;\n}\n\n.extract-status[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 6px;\n  border-radius: 6px;\n  margin-bottom: 8px;\n  border-left: 3px solid transparent;\n}\n.extract-status.status-ready[_ngcontent-%COMP%] {\n  background-color: #f8f9fa;\n  border-left-color: #6c757d;\n}\n.extract-status.status-extracting[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  border-left-color: #17a2b8;\n}\n.extract-status.status-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  border-left-color: #28a745;\n}\n.extract-status.status-failed[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  border-left-color: #dc3545;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .success-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .error-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.extract-status[_ngcontent-%COMP%]   .status-icon[_ngcontent-%COMP%]   .ready-icon[_ngcontent-%COMP%] {\n  color: #6c757d;\n}\n.extract-status[_ngcontent-%COMP%]   .status-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n  color: #333;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.progress-container[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  background-color: #e9ecef;\n  border-radius: 4px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-bar[_ngcontent-%COMP%]   .progress-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: linear-gradient(90deg, #007bff, #0056b3);\n  transition: width 0.3s ease;\n}\n.progress-container[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 12px;\n  color: #666;\n}\n\n.extract-actions[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 8px;\n}\n\n.download-section[_ngcontent-%COMP%] {\n  background: #f8f9fa;\n  border-radius: 6px;\n  padding: 8px;\n  margin-bottom: 8px;\n  text-align: center;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%] {\n  text-align: left;\n  background: white;\n  padding: 12px;\n  border-radius: 6px;\n  margin-top: 12px;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-detail[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n  font-size: 12px;\n  color: #666;\n}\n.download-section[_ngcontent-%COMP%]   .download-info[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-detail[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.download-section[_ngcontent-%COMP%]   .download-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.download-section[_ngcontent-%COMP%]   .download-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n  font-size: 14px;\n  padding: 10px 16px;\n}\n\n.file-summary[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 8px;\n}\n.file-summary[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%] {\n  padding: 12px;\n  border-bottom: 1px solid #e9ecef;\n  transition: background-color 0.2s ease;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  margin-bottom: 4px;\n  font-size: 14px;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  font-size: 12px;\n  color: #666;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-type[_ngcontent-%COMP%] {\n  background: #e9ecef;\n  padding: 2px 6px;\n  border-radius: 4px;\n  font-weight: 500;\n}\n.file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%]   .file-path[_ngcontent-%COMP%] {\n  font-family: monospace;\n  color: #999;\n}\n\n.no-files[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 24px;\n  color: #666;\n  font-size: 14px;\n}\n.no-files[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n}\n.no-files[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n\n.auth-status[_ngcontent-%COMP%] {\n  margin-top: 8px;\n}\n.auth-status[_ngcontent-%COMP%]   .auth-info[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 500;\n}\n.auth-status[_ngcontent-%COMP%]   .auth-info[_ngcontent-%COMP%]   .auth-available[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.auth-status[_ngcontent-%COMP%]   .auth-info[_ngcontent-%COMP%]   .auth-unavailable[_ngcontent-%COMP%] {\n  color: #ffc107;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  text-decoration: none;\n  display: inline-block;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background-color: #28a745;\n  color: white;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #1e7e34;\n}\n\n@media (max-width: 768px) {\n  .extract-download-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .extract-status[_ngcontent-%COMP%] {\n    flex-direction: column;\n    text-align: center;\n    gap: 8px;\n  }\n  .file-summary[_ngcontent-%COMP%]   .file-list[_ngcontent-%COMP%]   .file-item[_ngcontent-%COMP%]   .file-info[_ngcontent-%COMP%]   .file-details[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 4px;\n  }\n}\n@media (max-width: 480px) {\n  .control-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .btn[_ngcontent-%COMP%] {\n    padding: 6px 10px;\n    font-size: 12px;\n  }\n  .compact-file-item[_ngcontent-%COMP%]   .file-main[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 4px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZXh0cmFjdC1kb3dubG9hZC9leHRyYWN0LWRvd25sb2FkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLDREQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7QUFDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUNKO0FBRUU7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFBSjs7QUFJQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtDQUFBO0FBREY7QUFHRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFESjtBQUlFO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtBQUZKO0FBS0U7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0FBSEo7QUFNRTtFQUNFLHlCQUFBO0VBQ0EsMEJBQUE7QUFKSjtBQU9FO0VBQ0UsZUFBQTtBQUxKO0FBT0k7RUFDRSxrQ0FBQTtBQUxOO0FBUUk7RUFDRSxjQUFBO0FBTk47QUFTSTtFQUNFLGNBQUE7QUFQTjtBQVVJO0VBQ0UsY0FBQTtBQVJOO0FBWUU7RUFDRSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBVko7O0FBY0E7RUFDRTtJQUFPLHVCQUFBO0VBVlA7RUFXQTtJQUFLLHlCQUFBO0VBUkw7QUFDRjtBQVVBO0VBQ0Usa0JBQUE7QUFSRjtBQVVFO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFVSTtFQUNFLFlBQUE7RUFDQSxvREFBQTtFQUNBLDJCQUFBO0FBUk47QUFZRTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFjQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7QUFYRjs7QUFjQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQVhGO0FBYUU7RUFDRSxtQkFBQTtBQVhKO0FBYUk7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFYTjtBQWNJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVpOO0FBZUk7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFiTjtBQWVNO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQWJSO0FBZVE7RUFDRSxnQkFBQTtBQWJWO0FBbUJFO0VBQ0UsYUFBQTtFQUNBLFNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFqQko7QUFtQkk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQWpCTjs7QUFzQkE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFuQkY7QUFxQkU7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQko7QUF1Qkk7RUFDRSxhQUFBO0VBQ0EsZ0NBQUE7RUFDQSxzQ0FBQTtBQXJCTjtBQXVCTTtFQUNFLG1CQUFBO0FBckJSO0FBd0JNO0VBQ0UseUJBQUE7QUF0QlI7QUEwQlE7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUF4QlY7QUEyQlE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBekJWO0FBMkJVO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF6Qlo7QUE0QlU7RUFDRSxzQkFBQTtFQUNBLFdBQUE7QUExQlo7O0FBa0NBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUEvQkY7QUFpQ0U7RUFDRSxpQkFBQTtBQS9CSjtBQWlDSTtFQUNFLGdCQUFBO0FBL0JOOztBQXFDQTtFQUNFLGVBQUE7QUFsQ0Y7QUFvQ0U7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFsQ0o7QUFvQ0k7RUFDRSxjQUFBO0FBbENOO0FBcUNJO0VBQ0UsY0FBQTtBQW5DTjs7QUF3Q0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFyQ0Y7QUF1Q0U7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7QUFyQ0o7QUF3Q0U7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUF0Q0o7QUF3Q0k7RUFDRSx5QkFBQTtBQXRDTjtBQTBDRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQXhDSjtBQTBDSTtFQUNFLHlCQUFBO0FBeENOOztBQThDQTtFQUNFO0lBQ0UsYUFBQTtFQTNDRjtFQThDQTtJQUNFLHNCQUFBO0lBQ0Esa0JBQUE7SUFDQSxRQUFBO0VBNUNGO0VBK0NBO0lBQ0Usc0JBQUE7SUFDQSxRQUFBO0VBN0NGO0FBQ0Y7QUFnREE7RUFDRTtJQUNFLGVBQUE7RUE5Q0Y7RUFpREE7SUFDRSxpQkFBQTtJQUNBLGVBQUE7RUEvQ0Y7RUFrREE7SUFDRSxzQkFBQTtJQUNBLHVCQUFBO0lBQ0EsUUFBQTtFQWhERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLmV4dHJhY3QtZG93bmxvYWQtY29udGFpbmVyIHtcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC1mYW1pbHk6ICdTZWdvZSBVSScsIFRhaG9tYSwgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xufVxuXG4uZXh0cmFjdC1oZWFkZXIge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgaDMge1xuICAgIG1hcmdpbjogMCAwIDZweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmV4dHJhY3QtZGVzY3JpcHRpb24ge1xuICAgIG1hcmdpbjogMDtcbiAgICBjb2xvcjogIzY2NjtcbiAgICBmb250LXNpemU6IDExcHg7XG4gIH1cbn1cblxuLmV4dHJhY3Qtc3RhdHVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG4gIHBhZGRpbmc6IDZweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgdHJhbnNwYXJlbnQ7XG5cbiAgJi5zdGF0dXMtcmVhZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgYm9yZGVyLWxlZnQtY29sb3I6ICM2Yzc1N2Q7XG4gIH1cblxuICAmLnN0YXR1cy1leHRyYWN0aW5nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDFlY2YxO1xuICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMTdhMmI4O1xuICB9XG5cbiAgJi5zdGF0dXMtc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q0ZWRkYTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogIzI4YTc0NTtcbiAgfVxuXG4gICYuc3RhdHVzLWZhaWxlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgICBib3JkZXItbGVmdC1jb2xvcjogI2RjMzU0NTtcbiAgfVxuXG4gIC5zdGF0dXMtaWNvbiB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIFxuICAgIC5zcGlubmVyIHtcbiAgICAgIGFuaW1hdGlvbjogc3BpbiAxcyBsaW5lYXIgaW5maW5pdGU7XG4gICAgfVxuICAgIFxuICAgIC5zdWNjZXNzLWljb24ge1xuICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuICAgIFxuICAgIC5lcnJvci1pY29uIHtcbiAgICAgIGNvbG9yOiAjZGMzNTQ1O1xuICAgIH1cbiAgICBcbiAgICAucmVhZHktaWNvbiB7XG4gICAgICBjb2xvcjogIzZjNzU3ZDtcbiAgICB9XG4gIH1cblxuICAuc3RhdHVzLXRleHQge1xuICAgIGZsZXg6IDE7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogIzMzMztcbiAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNwaW4ge1xuICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgdG8geyB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpOyB9XG59XG5cbi5wcm9ncmVzcy1jb250YWluZXIge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgLnByb2dyZXNzLWJhciB7XG4gICAgaGVpZ2h0OiA4cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAucHJvZ3Jlc3MtZmlsbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwMDdiZmYsICMwMDU2YjMpO1xuICAgICAgdHJhbnNpdGlvbjogd2lkdGggMC4zcyBlYXNlO1xuICAgIH1cbiAgfVxuXG4gIC5wcm9ncmVzcy10ZXh0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGNvbG9yOiAjNjY2O1xuICB9XG59XG5cbi5leHRyYWN0LWFjdGlvbnMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLmRvd25sb2FkLXNlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjZjhmOWZhO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHBhZGRpbmc6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmRvd25sb2FkLWluZm8ge1xuICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgICBoNCB7XG4gICAgICBtYXJnaW46IDAgMCA4cHggMDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIG1hcmdpbjogMCAwIDEycHggMDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgIC5maWxlLWluZm8ge1xuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XG5cbiAgICAgIC5maWxlLWRldGFpbCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzY2NjtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuZG93bmxvYWQtYWN0aW9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDEycHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgLmJ0biB7XG4gICAgICBtaW4td2lkdGg6IDEyMHB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgcGFkZGluZzogMTBweCAxNnB4O1xuICAgIH1cbiAgfVxufVxuXG4uZmlsZS1zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcblxuICBoNCB7XG4gICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG5cbiAgLmZpbGUtbGlzdCB7XG4gICAgLmZpbGUtaXRlbSB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMnMgZWFzZTtcblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICB9XG5cbiAgICAgIC5maWxlLWluZm8ge1xuICAgICAgICAuZmlsZS1uYW1lIHtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlsZS1kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG5cbiAgICAgICAgICAuZmlsZS10eXBlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlOWVjZWY7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNnB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmlsZS1wYXRoIHtcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG4gICAgICAgICAgICBjb2xvcjogIzk5OTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLm5vLWZpbGVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyNHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNHB4O1xuXG4gIHAge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIFxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cbiAgfVxufVxuXG4vLyBBdXRoZW50aWNhdGlvbiBzdGF0dXMgc3R5bGVzXG4uYXV0aC1zdGF0dXMge1xuICBtYXJnaW4tdG9wOiA4cHg7XG4gIFxuICAuYXV0aC1pbmZvIHtcbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBcbiAgICAuYXV0aC1hdmFpbGFibGUge1xuICAgICAgY29sb3I6ICMyOGE3NDU7XG4gICAgfVxuICAgIFxuICAgIC5hdXRoLXVuYXZhaWxhYmxlIHtcbiAgICAgIGNvbG9yOiAjZmZjMTA3O1xuICAgIH1cbiAgfVxufVxuXG4uYnRuIHtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICY6ZGlzYWJsZWQge1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICB9XG5cbiAgJi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDU2YjM7XG4gICAgfVxuICB9XG5cbiAgJi5idG4tc3VjY2VzcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAmOmhvdmVyOm5vdCg6ZGlzYWJsZWQpIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTdlMzQ7XG4gICAgfVxuICB9XG59XG5cbi8vIFJlc3BvbnNpdmUgZGVzaWduXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLmV4dHJhY3QtZG93bmxvYWQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLmV4dHJhY3Qtc3RhdHVzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgfVxuXG4gIC5maWxlLXN1bW1hcnkgLmZpbGUtbGlzdCAuZmlsZS1pdGVtIC5maWxlLWluZm8gLmZpbGUtZGV0YWlscyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDRweDtcbiAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRyb2wtc2VjdGlvbiBoMyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICB9XG5cbiAgLmJ0biB7XG4gICAgcGFkZGluZzogNnB4IDEwcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICB9XG4gIFxuICAuY29tcGFjdC1maWxlLWl0ZW0gLmZpbGUtbWFpbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBnYXA6IDRweDtcbiAgfVxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
function PatientSelectionComponent_div_19_div_72_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "label");
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
function PatientSelectionComponent_div_19_div_78_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 43)(1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Status:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 45);
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 39)(5, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientSelectionComponent_div_19_Template_button_click_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r17.openChart());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "\uD83D\uDCCB");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, " Open Chart ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PatientSelectionComponent_div_19_Template_button_click_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r19.openMultimediaManager());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "\uD83D\uDCF7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, " Multimedia ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 42)(14, "div", 43)(15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "FIN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 43)(20, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "Name:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 43)(25, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "MRN:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 43)(30, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](31, "Date of Birth:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](32, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "div", 43)(36, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Sex:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 43)(41, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Facility:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 43)(46, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Unit:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "div", 43)(51, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](52, "Encounter Type:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 43)(56, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Medical Service:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "div", 43)(61, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](62, "Registration Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](65, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 43)(67, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Arrival Date:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](71, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, PatientSelectionComponent_div_19_div_72_Template, 6, 4, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 43)(74, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "Documents Found:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](77);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](78, PatientSelectionComponent_div_19_div_78_Template, 5, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.fin);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r6.patientInfo.mrn);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](34, 15, ctx_r6.patientInfo.dateOfBirth, "MM/dd/yyyy"));
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
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](65, 18, ctx_r6.patientInfo.regDtTm, "MM/dd/yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](71, 21, ctx_r6.patientInfo.arrivalDtTm, "MM/dd/yyyy"));
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
  /**
   * Opens the MMF Multimedia Manager for the patient using Cerner actions
   */
  openMultimediaManager() {
    if (this.patientInfo) {
      this.cernerActionService.openMultimediaManager(this.patientInfo.personId, this.patientInfo.encntrId);
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
    consts: [[1, "patient-selection-container"], [1, "form-section"], ["class", "config-status", 4, "ngIf"], [1, "patient-form", 3, "formGroup", "ngSubmit"], [1, "form-field"], ["for", "fin"], ["id", "fin", "type", "text", "formControlName", "fin", "placeholder", "Enter patient FIN", 1, "form-input", 3, "disabled"], ["class", "error-message", 4, "ngIf"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], ["type", "button", 1, "btn", "btn-secondary", 3, "disabled", "click"], ["class", "patient-search-results", 4, "ngIf"], ["class", "patient-info", 4, "ngIf"], [1, "config-status"], [1, "error-message"], [1, "patient-search-results"], [1, "patient-list"], ["class", "patient-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "patient-item", 3, "click"], [1, "patient-info"], [1, "patient-name"], [1, "patient-details"], [1, "fin"], [1, "mrn"], [1, "dob"], [1, "sex"], [1, "encounter-details"], [1, "facility"], [1, "unit"], [1, "encntr-type"], [1, "med-service"], [1, "date-details"], [1, "reg-date"], [1, "arrival-date"], ["class", "discharge-date", 4, "ngIf"], [1, "select-indicator"], [1, "discharge-date"], [1, "patient-info-header"], [1, "action-buttons"], ["type", "button", "title", "Open patient chart in PowerChart", 1, "btn", "btn-primary", "open-chart-btn", 3, "click"], ["type", "button", "title", "Open MMF Multimedia Manager for this patient", 1, "btn", "btn-secondary", "multimedia-btn", 3, "click"], [1, "info-grid"], [1, "info-item"], ["class", "info-item", 4, "ngIf"], [1, "no-documents"]],
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](19, PatientSelectionComponent_div_19_Template, 79, 24, "div", 13);
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
    styles: [".patient-selection-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 8px;\n  font-family: \"Segoe UI\", Tahoma, Geneva, Verdana, sans-serif;\n}\n\n.form-section[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 6px;\n}\n.form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 16px;\n  font-weight: 600;\n}\n\n.config-status[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 20px;\n  color: #666;\n  font-size: 16px;\n}\n\n.patient-form.disabled[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n  font-weight: 500;\n  color: #555;\n  font-size: 12px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 8px 12px;\n  border: 1px solid #e1e5e9;\n  border-radius: 4px;\n  font-size: 14px;\n  transition: border-color 0.2s ease;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #007bff;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input.error[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]::placeholder {\n  color: #999;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .form-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f8f9fa;\n  cursor: not-allowed;\n}\n.patient-form[_ngcontent-%COMP%]   .form-field[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 12px;\n  color: #dc3545;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  margin-top: 8px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  border: none;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n  min-width: 100px;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%] {\n  background-color: #007bff;\n  color: white;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #0056b3;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #6c757d;\n  color: white;\n}\n.patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #545b62;\n}\n\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background-color: #f8d7da;\n  border: 1px solid #f5c6cb;\n  border-radius: 6px;\n  color: #721c24;\n  font-size: 14px;\n}\n\n.patient-info[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 8px;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background-color: #28a745;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%]:hover {\n  background-color: #218838;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .open-chart-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .multimedia-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 8px;\n  background-color: #17a2b8;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .multimedia-btn[_ngcontent-%COMP%]:hover {\n  background-color: #138496;\n  transform: translateY(-1px);\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n.patient-info[_ngcontent-%COMP%]   .patient-info-header[_ngcontent-%COMP%]   .action-buttons[_ngcontent-%COMP%]   .multimedia-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 8px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #666;\n  font-size: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #333;\n  font-weight: 500;\n}\n.patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   span.no-documents[_ngcontent-%COMP%] {\n  color: #dc3545;\n  font-style: italic;\n}\n\n.patient-search-results[_ngcontent-%COMP%] {\n  background: #ffffff;\n  border-radius: 6px;\n  padding: 8px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);\n  margin-bottom: 6px;\n}\n.patient-search-results[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #333;\n  font-size: 14px;\n  font-weight: 600;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 16px;\n  border: 1px solid #e1e5e9;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9fa;\n  border-color: #007bff;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 16px;\n  margin-bottom: 4px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 14px;\n  color: #666;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .fin[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .mrn[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .dob[_ngcontent-%COMP%] {\n  color: #888;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .patient-details[_ngcontent-%COMP%]   .sex[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 13px;\n  color: #555;\n  flex-wrap: wrap;\n  margin-bottom: 8px;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .facility[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .encntr-type[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .encounter-details[_ngcontent-%COMP%]   .med-service[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  font-size: 12px;\n  color: #777;\n  flex-wrap: wrap;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .reg-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .arrival-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .patient-info[_ngcontent-%COMP%]   .date-details[_ngcontent-%COMP%]   .discharge-date[_ngcontent-%COMP%] {\n  color: #666;\n}\n.patient-search-results[_ngcontent-%COMP%]   .patient-list[_ngcontent-%COMP%]   .patient-item[_ngcontent-%COMP%]   .select-indicator[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 18px;\n  font-weight: bold;\n}\n\n@media (max-width: 768px) {\n  .patient-selection-container[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .form-section[_ngcontent-%COMP%], .patient-info[_ngcontent-%COMP%] {\n    padding: 16px;\n  }\n  .patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .patient-form[_ngcontent-%COMP%]   .form-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .patient-info[_ngcontent-%COMP%]   .info-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGF0aWVudC1zZWxlY3Rpb24vcGF0aWVudC1zZWxlY3Rpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsNERBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQ0U7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBQUY7O0FBSUU7RUFDRSxZQUFBO0VBQ0Esb0JBQUE7QUFESjtBQUlFO0VBQ0UsbUJBQUE7QUFGSjtBQUlJO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUZOO0FBS0k7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0FBSE47QUFLTTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLDRDQUFBO0FBSFI7QUFNTTtFQUNFLHFCQUFBO0FBSlI7QUFPTTtFQUNFLFdBQUE7QUFMUjtBQVFNO0VBQ0UseUJBQUE7RUFDQSxtQkFBQTtBQU5SO0FBVUk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFSTjtBQVlFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7RUFDQSxlQUFBO0FBVko7QUFZSTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFWTjtBQVlNO0VBQ0UsWUFBQTtFQUNBLG1CQUFBO0FBVlI7QUFhTTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQVhSO0FBYVE7RUFDRSx5QkFBQTtBQVhWO0FBZU07RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUFiUjtBQWVRO0VBQ0UseUJBQUE7QUFiVjs7QUFvQkE7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFqQkY7O0FBb0JBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx3Q0FBQTtBQWpCRjtBQW1CRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFqQko7QUFtQkk7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWpCTjtBQW9CSTtFQUNFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsbUJBQUE7QUFsQk47QUFvQk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFsQlI7QUFvQlE7RUFDRSx5QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0NBQUE7QUFsQlY7QUFxQlE7RUFDRSxlQUFBO0FBbkJWO0FBdUJNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBckJSO0FBdUJRO0VBQ0UseUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdDQUFBO0FBckJWO0FBd0JRO0VBQ0UsZUFBQTtBQXRCVjtBQTRCRTtFQUNFLGFBQUE7RUFDQSwyREFBQTtFQUNBLFFBQUE7QUExQko7QUE0Qkk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FBMUJOO0FBNEJNO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7QUExQlI7QUE2Qk07RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FBM0JSO0FBNkJRO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBM0JWOztBQWtDQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0NBQUE7RUFDQSxrQkFBQTtBQS9CRjtBQWlDRTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQS9CSjtBQW1DSTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQWpDTjtBQW1DTTtFQUNFLHlCQUFBO0VBQ0EscUJBQUE7QUFqQ1I7QUFvQ007RUFDRSxnQkFBQTtBQWxDUjtBQXFDTTtFQUNFLE9BQUE7QUFuQ1I7QUFxQ1E7RUFDRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFuQ1Y7QUFzQzBCO0VBQ2hCLGFBQUE7RUFDQSxTQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFwQ1Y7QUFzQ1U7RUFDRSxnQkFBQTtBQXBDWjtBQXVDVTtFQUNFLGdCQUFBO0FBckNaO0FBd0NVO0VBQ0UsV0FBQTtBQXRDWjtBQXlDVTtFQUNFLFdBQUE7QUF2Q1o7QUEyQ1E7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBekNWO0FBMkNVO0VBQ0UsZ0JBQUE7QUF6Q1o7QUE0Q1U7RUFDRSxXQUFBO0FBMUNaO0FBNkNVO0VBQ0UsV0FBQTtBQTNDWjtBQThDVTtFQUNFLFdBQUE7QUE1Q1o7QUFnRFE7RUFDRSxhQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQTlDVjtBQWdEVTtFQUNFLFdBQUE7QUE5Q1o7QUFpRFU7RUFDRSxXQUFBO0FBL0NaO0FBa0RVO0VBQ0UsV0FBQTtBQWhEWjtBQXFETTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFuRFI7O0FBMERBO0VBQ0U7SUFDRSxhQUFBO0VBdkRGO0VBMERBOztJQUVFLGFBQUE7RUF4REY7RUEyREE7SUFDRSxzQkFBQTtFQXpERjtFQTJERTtJQUNFLFdBQUE7RUF6REo7RUE2REE7SUFDRSwwQkFBQTtFQTNERjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLnBhdGllbnQtc2VsZWN0aW9uLWNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiA4cHg7XG4gIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBUYWhvbWEsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcbn1cblxuLmZvcm0tc2VjdGlvbiB7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICBib3gtc2hhZG93OiAwIDFweCA0cHggcmdiYSgwLCAwLCAwLCAwLjEpO1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG5cbiAgaDIge1xuICAgIG1hcmdpbjogMCAwIDhweCAwO1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9XG59XG5cbi5jb25maWctc3RhdHVzIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4ucGF0aWVudC1mb3JtIHtcbiAgJi5kaXNhYmxlZCB7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB9XG5cbiAgLmZvcm0tZmllbGQge1xuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG5cbiAgICBsYWJlbCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBjb2xvcjogIzU1NTtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG5cbiAgICAuZm9ybS1pbnB1dCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2UxZTVlOTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzIGVhc2U7XG5cbiAgICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXItY29sb3I6ICMwMDdiZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDNweCByZ2JhKDAsIDEyMywgMjU1LCAwLjEpO1xuICAgICAgfVxuXG4gICAgICAmLmVycm9yIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgfVxuXG4gICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiAjOTk5O1xuICAgICAgfVxuXG4gICAgICAmOmRpc2FibGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuZXJyb3ItbWVzc2FnZSB7XG4gICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBjb2xvcjogI2RjMzU0NTtcbiAgICB9XG4gIH1cblxuICAuZm9ybS1hY3Rpb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogOHB4O1xuICAgIG1hcmdpbi10b3A6IDhweDtcblxuICAgIC5idG4ge1xuICAgICAgcGFkZGluZzogNnB4IDEycHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgIG1pbi13aWR0aDogMTAwcHg7XG5cbiAgICAgICY6ZGlzYWJsZWQge1xuICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XG4gICAgICB9XG5cbiAgICAgICYuYnRuLXByaW1hcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTZiMztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAmLmJ0bi1zZWNvbmRhcnkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNmM3NTdkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJjpob3Zlcjpub3QoOmRpc2FibGVkKSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzU0NWI2MjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uZXJyb3ItbWVzc2FnZSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG4gIHBhZGRpbmc6IDEycHggMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZDdkYTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Y1YzZjYjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBjb2xvcjogIzcyMWMyNDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ucGF0aWVudC1pbmZvIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG5cbiAgLnBhdGllbnQtaW5mby1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgaDMge1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogNjAwO1xuICAgIH1cblxuICAgIC5hY3Rpb24tYnV0dG9ucyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZ2FwOiA2cHg7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAub3Blbi1jaGFydC1idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxODgzODtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubXVsdGltZWRpYS1idG4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBnYXA6IDRweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzE3YTJiODtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzEzODQ5NjtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XG4gICAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5pbmZvLWdyaWQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgxNTBweCwgMWZyKSk7XG4gICAgZ2FwOiA4cHg7XG5cbiAgICAuaW5mby1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgZ2FwOiAycHg7XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgICAgICAmLm5vLWRvY3VtZW50cyB7XG4gICAgICAgICAgY29sb3I6ICNkYzM1NDU7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi5wYXRpZW50LXNlYXJjaC1yZXN1bHRzIHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBwYWRkaW5nOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcblxuICBoMyB7XG4gICAgbWFyZ2luOiAwIDAgOHB4IDA7XG4gICAgY29sb3I6ICMzMzM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIH1cblxuICAucGF0aWVudC1saXN0IHtcbiAgICAucGF0aWVudC1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlMWU1ZTk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgIH1cblxuICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLnBhdGllbnQtaW5mbyB7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLnBhdGllbnQtbmFtZSB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgLnBhdGllbnQtZGV0YWlscyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBnYXA6IDE2cHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAuZmluIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1ybiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5kb2Ige1xuICAgICAgICAgICAgY29sb3I6ICM4ODg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNleCB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZW5jb3VudGVyLWRldGFpbHMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICBjb2xvcjogIzU1NTtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuXG4gICAgICAgICAgLmZhY2lsaXR5IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnVuaXQge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmVuY250ci10eXBlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5tZWQtc2VydmljZSB7XG4gICAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuZGF0ZS1kZXRhaWxzIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGdhcDogMTZweDtcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgY29sb3I6ICM3Nzc7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgLnJlZy1kYXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC5hcnJpdmFsLWRhdGUge1xuICAgICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmRpc2NoYXJnZS1kYXRlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VsZWN0LWluZGljYXRvciB7XG4gICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wYXRpZW50LXNlbGVjdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDE2cHg7XG4gIH1cblxuICAuZm9ybS1zZWN0aW9uLFxuICAucGF0aWVudC1pbmZvIHtcbiAgICBwYWRkaW5nOiAxNnB4O1xuICB9XG5cbiAgLnBhdGllbnQtZm9ybSAuZm9ybS1hY3Rpb25zIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIC5idG4ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgLnBhdGllbnQtaW5mbyAuaW5mby1ncmlkIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufSAiXSwic291cmNlUm9vdCI6IiJ9 */"]
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
   * Launches the MMF Multimedia Manager for a patient using the APPLINK command
   * @param personId The person ID of the patient
   * @param encntrId The encounter ID (optional)
   */
  openMultimediaManager(personId, encntrId) {
    const el = document.getElementById('applink');
    if (!el) {
      console.warn('Element with id "applink" not found');
      return;
    }
    if (personId !== undefined && encntrId !== undefined) {
      // @ts-ignore
      el.href = 'javascript:APPLINK(0,"mmfmultimediamanager.exe","/PERSONID=' + personId + ' /ENCNTRID=' + encntrId + '")';
    } else if (personId !== undefined) {
      // @ts-ignore
      el.href = 'javascript:APPLINK(0,"mmfmultimediamanager.exe","/PERSONID=' + personId + '")';
    } else {
      console.warn('personId is required for OPEN_MULTIMEDIA_MANAGER action');
      return;
    }
    // Execute multimedia manager opening action via APPLINK
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
/* harmony import */ var _Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2235);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 4980);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 4148);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 2389);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @clinicaloffice/clinical-office-mpage-core */ 5715);





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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    const TIMEOUT_MS = 30000;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
        this.downloadSingleDocument(personId, encntrId, currentRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(TIMEOUT_MS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
          console.error('[DocumentExtractService] downloadDocumentsSequentially() - Timeout or error for mediaInstanceId:', currentRequest.mediaInstanceId, error);
          failed++;
          // Add a failed result for timeout
          allResults.push({
            mediaInstanceId: currentRequest.mediaInstanceId,
            documentType: '',
            filename: '',
            status: 0,
            fullpath: '',
            message: 'Download timed out or failed',
            documentName: '',
            contentType: ''
          });
          currentIndex++;
          processNext();
          // Return empty observable since we handle next step manually
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        })).subscribe({
          next: response => {
            if (!response || !response.allResults || response.allResults.length === 0) return;
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
          error: () => {} // Already handled in catchError
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
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
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
    const dmsDocuments = patientQual.dmsQual ? patientQual.dmsQual.map(doc => ({
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
      parentEntityId: doc.parentEntityId || 0,
      sourceType: 'dms'
    })) : [];
    // Map documents from cpdiQual array
    const cpdiDocuments = patientQual.cpdiQual ? patientQual.cpdiQual.map(doc => ({
      id: doc.eventId?.toString() || '',
      documentName: doc.eventTitleText || 'CPDI Document',
      documentType: 'CPDI Document',
      documentDate: doc.eventEndDtTm ? new Date(doc.eventEndDtTm) : new Date(),
      documentSize: 'Unknown',
      selected: false,
      contentTypeKey: 'CPDI',
      contentTypeDisplay: 'CPDI Document',
      contentTypeDescription: 'Clinical Provider Document Image',
      identifier: 'CPDI',
      contentUid: doc.blobHandle || '',
      mediaType: 'pdf',
      appCtx: 'CPDI',
      mediaObjectIdentifier: '',
      parentEntityName: 'EVENT',
      parentEntityId: doc.eventId || 0,
      sourceType: 'cpdi'
    })) : [];
    // Combine both document types
    const documents = [...dmsDocuments, ...cpdiDocuments];
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
        fileName: extractInfo.fileName || '',
        nodeName: extractInfo.nodeName || '',
        extractInfo: {
          zipFilename: extractInfo.zipFilename || 'extracted_documents.zip',
          metadataFilename: extractInfo.metadataFilename || '',
          fileCount: extractInfo.fileCount || 0,
          zipCammIdentifier: extractInfo.zipCammIdentifier || qual.zipCammIdentifier || '',
          downloadUrl: extractInfo.downloadUrl || '',
          fileName: extractInfo.fileName || '',
          nodeName: extractInfo.nodeName || '' // Added for fileTransfer endpoint
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
        fileName: reply.fileName || '',
        nodeName: reply.nodeName || '',
        extractInfo: {
          zipFilename: reply.zipFileName || 'extracted_documents.zip',
          metadataFilename: reply.metadataFile || '',
          fileCount: reply.fileCount || 0,
          zipCammIdentifier: reply.zipCammIdentifier || '',
          downloadUrl: reply.downloadUrl || '',
          fileName: reply.fileName || '',
          nodeName: reply.nodeName || '' // Added for fileTransfer endpoint
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
        fileName: raw.fileName || '',
        nodeName: raw.nodeName || '',
        extractInfo: {
          zipFilename: raw.zipFileName || 'extracted_documents.zip',
          metadataFilename: raw.metadataFile || '',
          fileCount: raw.fileCount || 0,
          zipCammIdentifier: raw.zipCammIdentifier || '',
          downloadUrl: raw.downloadUrl || '',
          fileName: raw.fileName || '',
          nodeName: raw.nodeName || '' // Added for fileTransfer endpoint
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
   * Downloads a single CPDI document
   * @param personId The patient's person ID
   * @param encntrId The patient's encounter ID
   * @param cpdiRequest The CPDI document request
   * @returns Observable of SequentialDownloadResponse
   */
  downloadCpdiDocument(personId, encntrId, cpdiRequest) {
    console.log('[DocumentExtractService] downloadCpdiDocument() - Starting download for CPDI document:', cpdiRequest);
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: `downloadCpdiDocument_${cpdiRequest.eventId}`,
            parameters: {
              requestType: 'downloadCpdiDocument',
              requestData: JSON.stringify({
                chs_document_extract_svc_request: {
                  personId: personId,
                  encntrId: encntrId,
                  eventId: cpdiRequest.eventId,
                  blobHandle: cpdiRequest.blobHandle
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
          console.log('[DocumentExtractService] downloadCpdiDocument() - Service call completed, retrieving data');
          const raw = this.customService.get(`downloadCpdiDocument_${cpdiRequest.eventId}`);
          if (!raw) {
            console.error('[DocumentExtractService] downloadCpdiDocument() - No response from download service for CPDI document');
            observer.error('No response from download service for CPDI document');
            return;
          }
          console.log('[DocumentExtractService] downloadCpdiDocument() - Raw response received:', raw);
          const downloadResult = this.parseDownloadCpdiDocumentResponse(raw);
          console.log('[DocumentExtractService] downloadCpdiDocument() - Parsed CPDI document result:', downloadResult);
          const progress = {
            total: 1,
            completed: downloadResult.status === 1 ? 1 : 0,
            failed: downloadResult.status === 1 ? 0 : 1,
            current: cpdiRequest,
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
          console.error('[DocumentExtractService] downloadCpdiDocument() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Downloads CPDI documents sequentially, one at a time, with progress tracking.
   * @param personId The patient's person ID.
   * @param encntrId The patient's encounter ID.
   * @param cpdiRequests Array of CPDI document requests to download.
   * @returns Observable of SequentialDownloadResponse with progress updates.
   */
  downloadCpdiDocumentsSequentially(personId, encntrId, cpdiRequests) {
    console.log('[DocumentExtractService] downloadCpdiDocumentsSequentially() - Starting sequential download for:', {
      personId,
      encntrId,
      requestCount: cpdiRequests.length,
      requests: cpdiRequests
    });
    const TIMEOUT_MS = 30000;
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      const total = cpdiRequests.length;
      let completed = 0;
      let failed = 0;
      const allResults = [];
      let currentIndex = 0;
      const processNext = () => {
        if (currentIndex >= total) {
          console.log('[DocumentExtractService] downloadCpdiDocumentsSequentially() - All CPDI downloads completed');
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
        const currentRequest = cpdiRequests[currentIndex];
        console.log('[DocumentExtractService] downloadCpdiDocumentsSequentially() - Processing download', currentIndex + 1, 'of', total, ':', currentRequest);
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
        this.downloadCpdiDocument(personId, encntrId, currentRequest).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.timeout)(TIMEOUT_MS), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(error => {
          console.error('[DocumentExtractService] downloadCpdiDocumentsSequentially() - Timeout or error for eventId:', currentRequest.eventId, error);
          failed++;
          // Add a failed result for timeout
          allResults.push({
            eventId: currentRequest.eventId,
            documentType: 'CPDI Document',
            filename: '',
            status: 0,
            fullpath: '',
            message: 'Download timed out or failed',
            documentName: '',
            contentType: 'CPDI',
            eventCodeDisplay: ''
          });
          currentIndex++;
          processNext();
          // Return empty observable since we handle next step manually
          return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)();
        })).subscribe({
          next: response => {
            if (!response || !response.allResults || response.allResults.length === 0) return;
            const result = response.allResults[0];
            allResults.push(result);
            if (result.status === 1) {
              completed++;
            } else {
              failed++;
            }
            currentIndex++;
            processNext();
          },
          error: () => {} // Already handled in catchError
        });
      };

      processNext();
    });
  }
  /**
   * Parses the download response for a single CPDI document.
   * @param raw Raw response from the service.
   * @returns A single DownloadResult.
   */
  parseDownloadCpdiDocumentResponse(raw) {
    console.log('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - Starting parsing of raw response:', raw);
    // Example structure: raw.qual[0].cpdiQual[0]
    if (raw.qual && raw.qual.length > 0 && raw.qual[0].cpdiQual && raw.qual[0].cpdiQual.length > 0) {
      const cpdiItem = raw.qual[0].cpdiQual[0];
      console.log('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - Found cpdiQual item:', cpdiItem);
      const isSuccess = cpdiItem.downloadedInd === 1;
      let downloadResponse = null;
      if (cpdiItem.downloadResponse) {
        try {
          downloadResponse = JSON.parse(cpdiItem.downloadResponse);
          console.log('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - Parsed download response:', downloadResponse);
        } catch (error) {
          console.warn('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - Failed to parse download response:', error);
        }
      }
      const result = {
        eventId: cpdiItem.eventId || 0,
        documentType: 'CPDI Document',
        filename: cpdiItem.filename || '',
        status: isSuccess ? 1 : 0,
        fullpath: downloadResponse?.CPDI_DOWNLOAD_RESPONSE?.FULLPATH || '',
        message: downloadResponse?.CPDI_DOWNLOAD_RESPONSE?.MESSAGE || (isSuccess ? 'Download successful' : 'Download failed'),
        documentName: cpdiItem.eventTitleText || '',
        contentType: 'CPDI',
        eventCodeDisplay: cpdiItem.eventCodeDisplay || ''
      };
      console.log('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - Parsed result:', result);
      return result;
    }
    // Fallback
    console.warn('[DocumentExtractService] parseDownloadCpdiDocumentResponse() - No valid response structure found in raw data');
    return {
      eventId: 0,
      documentType: 'CPDI Document',
      filename: '',
      status: 0,
      fullpath: '',
      message: 'No response data found',
      documentName: '',
      contentType: 'CPDI',
      eventCodeDisplay: ''
    };
  }
  /**
   * Gets the loaded configuration data
   * @returns ConfigData or null if not loaded
   */
  getLoadedConfigData() {
    return this.configData;
  }
  /**
   * Gets system credentials for basic authorization
   * @returns Observable of credentials object
   */
  getSystemCredentials() {
    console.log('[DocumentExtractService] getSystemCredentials() - Getting system credentials');
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      this.customService.load({
        customScript: {
          script: [{
            name: 'chs_document_extract_svc',
            run: 'pre',
            id: 'systemCredentials',
            parameters: {
              requestType: 'getSystemCredentials',
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
          console.log('[DocumentExtractService] getSystemCredentials() - Service call completed');
          const raw = this.customService.get('systemCredentials');
          if (!raw) {
            console.error('[DocumentExtractService] getSystemCredentials() - No credentials data received');
            observer.error('No credentials data received');
            return;
          }
          // Parse the credentials from the response
          let credentials = {
            username: '',
            password: ''
          };
          // Check for the systemCredentials_reply structure
          if (raw.systemCredentials_reply) {
            credentials = {
              username: raw.systemCredentials_reply.username || '',
              password: raw.systemCredentials_reply.password || ''
            };
          } else if (raw.username && raw.password) {
            // Direct response structure
            credentials = {
              username: raw.username,
              password: raw.password
            };
          } else {
            console.error('[DocumentExtractService] getSystemCredentials() - No valid credentials structure found in response:', raw);
            observer.error('No valid credentials structure found in response');
            return;
          }
          console.log('[DocumentExtractService] getSystemCredentials() - Credentials received:', credentials);
          observer.next(credentials);
          observer.complete();
        } catch (error) {
          console.error('[DocumentExtractService] getSystemCredentials() - Error:', error);
          observer.error(error);
        }
      });
    });
  }
  /**
   * Downloads the extract file using the fileTransfer/retrieveFile endpoint
   * Now uses MPAGES_SVC_AUTH instead of basic credentials and dynamic URL construction
   * @param fileName The name of the file to retrieve
   * @param nodeName The node name where the file is stored
   * @returns Observable of the file blob
   */
  downloadExtractFile(fileName, nodeName) {
    var _this = this;
    console.log('[DocumentExtractService] downloadExtractFile() - Starting file download with MPAGES_SVC_AUTH:', {
      fileName,
      nodeName
    });
    return new rxjs__WEBPACK_IMPORTED_MODULE_1__.Observable(observer => {
      // Construct URL dynamically based on current host instead of hardcoded URL
      const currentHost = window.location.host;
      const url = `${window.location.protocol}//${currentHost}/mpages/fileTransfer/retrieveFile`;
      console.log('[DocumentExtractService] downloadExtractFile() - Using URL:', url);
      // Create FormData with the required parts
      const formData = new FormData();
      formData.append('fileName', fileName);
      formData.append('nodeName', nodeName);
      // Create XMLHttpRequest for the POST request
      const xhr = new XMLHttpRequest();
      xhr.open('POST', url);
      // Set response type to blob for file download
      xhr.responseType = 'blob';
      // Apply MPAGES_SVC_AUTH if available and in Edge context
      const setupAuth = /*#__PURE__*/function () {
        var _ref = (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            if (window.MPAGES_SVC_AUTH) {
              console.log('[DocumentExtractService] downloadExtractFile() - Applying MPAGES_SVC_AUTH');
              yield window.MPAGES_SVC_AUTH(xhr);
            } else {
              console.log('[DocumentExtractService] downloadExtractFile() - MPAGES_SVC_AUTH not available, using fallback');
              // Fallback to basic credentials if MPAGES_SVC_AUTH is not available
              try {
                const credentials = yield _this.getSystemCredentials().toPromise();
                if (credentials) {
                  const authString = `${credentials.username}:${credentials.password}`;
                  const credentials_b64 = btoa(authString);
                  xhr.setRequestHeader('Authorization', `Basic ${credentials_b64}`);
                } else {
                  console.warn('[DocumentExtractService] downloadExtractFile() - No credentials received');
                }
              } catch (credError) {
                console.warn('[DocumentExtractService] downloadExtractFile() - Could not get basic credentials:', credError);
              }
            }
          } catch (authError) {
            console.warn('[DocumentExtractService] downloadExtractFile() - Authentication setup failed:', authError);
          }
          // Set up response handlers
          xhr.onload = () => {
            if (xhr.status === 200) {
              console.log('[DocumentExtractService] downloadExtractFile() - Download successful');
              observer.next(xhr.response);
              observer.complete();
            } else {
              console.error('[DocumentExtractService] downloadExtractFile() - Download failed with status:', xhr.status);
              observer.error(new Error(`Download failed with status: ${xhr.status}`));
            }
          };
          xhr.onerror = () => {
            console.error('[DocumentExtractService] downloadExtractFile() - Network error during download');
            observer.error(new Error('Network error during download'));
          };
          // Send the FormData
          xhr.send(formData);
        });
        return function setupAuth() {
          return _ref.apply(this, arguments);
        };
      }();
      setupAuth().catch(error => {
        console.error('[DocumentExtractService] downloadExtractFile() - Setup error:', error);
        observer.error(error);
      });
    });
  }
  static #_ = this.ɵfac = function DocumentExtractService_Factory(t) {
    return new (t || DocumentExtractService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_clinicaloffice_clinical_office_mpage_core__WEBPACK_IMPORTED_MODULE_6__.CustomService));
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({
    token: DocumentExtractService,
    factory: DocumentExtractService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6906:
/*!******************************************************!*\
  !*** ./src/app/services/progress-stepper.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressStepperService: () => (/* binding */ ProgressStepperService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 8071);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);


class ProgressStepperService {
  constructor() {
    this.stepsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject([{
      id: 'patient',
      title: 'Patient Selection',
      description: 'Choose patient context',
      status: 'pending'
    }, {
      id: 'discovery',
      title: 'Document Discovery',
      description: 'Find available documents',
      status: 'pending'
    }, {
      id: 'download',
      title: 'Document Download',
      description: 'Download individual files',
      status: 'pending'
    }, {
      id: 'extract',
      title: 'Extract Creation',
      description: 'Create ZIP archive',
      status: 'pending'
    }, {
      id: 'complete',
      title: 'Final Download',
      description: 'Save ZIP to device',
      status: 'pending'
    }]);
    this.steps$ = this.stepsSubject.asObservable();
  }
  /**
   * Updates a specific step's status and metadata
   * @param stepId The step identifier
   * @param status The new status
   * @param progress Optional progress percentage
   * @param metadata Optional additional data
   */
  updateStep(stepId, status, progress, metadata) {
    const currentSteps = this.stepsSubject.value;
    const stepIndex = currentSteps.findIndex(step => step.id === stepId);
    if (stepIndex !== -1) {
      const updatedSteps = [...currentSteps];
      updatedSteps[stepIndex] = {
        ...updatedSteps[stepIndex],
        status,
        progress,
        metadata: {
          ...updatedSteps[stepIndex].metadata,
          ...metadata
        }
      };
      this.stepsSubject.next(updatedSteps);
    }
  }
  /**
   * Updates step description dynamically
   * @param stepId The step identifier
   * @param description New description text
   */
  updateStepDescription(stepId, description) {
    const currentSteps = this.stepsSubject.value;
    const stepIndex = currentSteps.findIndex(step => step.id === stepId);
    if (stepIndex !== -1) {
      const updatedSteps = [...currentSteps];
      updatedSteps[stepIndex] = {
        ...updatedSteps[stepIndex],
        description
      };
      this.stepsSubject.next(updatedSteps);
    }
  }
  /**
   * Gets the current state of all steps
   * @returns Array of current step states
   */
  getCurrentSteps() {
    return this.stepsSubject.value;
  }
  /**
   * Gets a specific step by ID
   * @param stepId The step identifier
   * @returns The step or undefined if not found
   */
  getStep(stepId) {
    return this.stepsSubject.value.find(step => step.id === stepId);
  }
  /**
   * Resets all steps to pending state
   */
  resetAllSteps() {
    const resetSteps = this.stepsSubject.value.map(step => ({
      ...step,
      status: 'pending',
      progress: undefined,
      metadata: undefined
    }));
    this.stepsSubject.next(resetSteps);
  }
  /**
   * Gets the CSS class for a step based on its status
   * @param step The step to get class for
   * @returns CSS class name
   */
  getStepClass(step) {
    switch (step.status) {
      case 'completed':
        return 'step-completed';
      case 'active':
        return 'step-active';
      case 'error':
        return 'step-error';
      case 'pending':
      default:
        return 'step-pending';
    }
  }
  /**
   * Gets the CSS class for a connector between two steps
   * @param fromStepId The starting step ID
   * @param toStepId The ending step ID
   * @returns CSS class name
   */
  getConnectorClass(fromStepId, toStepId) {
    const fromStep = this.getStep(fromStepId);
    const toStep = this.getStep(toStepId);
    if (!fromStep || !toStep) return '';
    if (fromStep.status === 'completed' && (toStep.status === 'active' || toStep.status === 'completed')) {
      return 'connector-completed';
    }
    if (fromStep.status === 'completed' || fromStep.status === 'active') {
      return 'connector-active';
    }
    return '';
  }
  static #_ = this.ɵfac = function ProgressStepperService_Factory(t) {
    return new (t || ProgressStepperService)();
  };
  static #_2 = this.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
    token: ProgressStepperService,
    factory: ProgressStepperService.ɵfac,
    providedIn: 'root'
  });
}


/***/ }),

/***/ 6640:
/*!***********************************************************************!*\
  !*** ./src/app/shared/progress-stepper/progress-stepper.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProgressStepperComponent: () => (/* binding */ ProgressStepperComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 1523);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../services/progress-stepper.service */ 6906);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);




function ProgressStepperComponent_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r3.getStepNumber(i_r2), " ");
  }
}
function ProgressStepperComponent_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2713");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProgressStepperComponent_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u23F3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProgressStepperComponent_div_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "\u2717");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
}
function ProgressStepperComponent_div_1_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r1.metadata.count, " items ");
  }
}
function ProgressStepperComponent_div_1_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", step_r1.metadata.fileName, " ");
  }
}
function ProgressStepperComponent_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProgressStepperComponent_div_1_div_12_div_1_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, ProgressStepperComponent_div_1_div_12_div_2_Template, 2, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.metadata.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.metadata.fileName);
  }
}
function ProgressStepperComponent_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "div", 21);
  }
  if (rf & 2) {
    const i_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r8.getConnectorClass(i_r2, i_r2 + 1));
  }
}
function ProgressStepperComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, ProgressStepperComponent_div_1_span_3_Template, 2, 1, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, ProgressStepperComponent_div_1_span_4_Template, 2, 0, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProgressStepperComponent_div_1_span_5_Template, 2, 0, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProgressStepperComponent_div_1_span_6_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 9)(8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProgressStepperComponent_div_1_div_12_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, ProgressStepperComponent_div_1_div_13_Template, 1, 2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const step_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.getStepClass(step_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r0.shouldShowSpinner(step_r1) && step_r1.status !== "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.status === "completed");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.shouldShowSpinner(step_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.status === "error");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](step_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.getStepDescription(step_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", step_r1.metadata);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", i_r2 < ctx_r0.steps.length - 1);
  }
}
class ProgressStepperComponent {
  constructor(stepperService) {
    this.stepperService = stepperService;
    this.steps = [];
    this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  }
  ngOnInit() {
    this.subscription = this.stepperService.steps$.subscribe(steps => {
      this.steps = steps;
    });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  /**
   * Gets the CSS class for a step
   * @param step The step to get class for
   * @returns CSS class name
   */
  getStepClass(step) {
    return this.stepperService.getStepClass(step);
  }
  /**
   * Gets the CSS class for a connector between two steps
   * @param fromIndex The starting step index
   * @param toIndex The ending step index
   * @returns CSS class name
   */
  getConnectorClass(fromIndex, toIndex) {
    if (fromIndex >= this.steps.length - 1) return '';
    const fromStep = this.steps[fromIndex];
    const toStep = this.steps[toIndex];
    return this.stepperService.getConnectorClass(fromStep.id, toStep.id);
  }
  /**
   * Gets the step number for display
   * @param index The step index
   * @returns Step number (1-based)
   */
  getStepNumber(index) {
    return index + 1;
  }
  /**
   * Checks if step should show progress percentage
   * @param step The step to check
   * @returns True if progress should be shown
   */
  shouldShowProgress(step) {
    return step.status === 'active' && typeof step.progress === 'number';
  }
  /**
   * Checks if step should show spinner
   * @param step The step to check
   * @returns True if spinner should be shown
   */
  shouldShowSpinner(step) {
    return step.status === 'active' && typeof step.progress !== 'number';
  }
  /**
   * Gets the formatted description for a step
   * @param step The step
   * @returns Formatted description
   */
  getStepDescription(step) {
    if (this.shouldShowProgress(step)) {
      return `${step.progress}% complete`;
    }
    return step.description;
  }
  static #_ = this.ɵfac = function ProgressStepperComponent_Factory(t) {
    return new (t || ProgressStepperComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_progress_stepper_service__WEBPACK_IMPORTED_MODULE_0__.ProgressStepperService));
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
    type: ProgressStepperComponent,
    selectors: [["app-progress-stepper"]],
    decls: 2,
    vars: 1,
    consts: [[1, "progress-stepper"], ["class", "step-container", 4, "ngFor", "ngForOf"], [1, "step-container"], [1, "step"], [1, "step-indicator"], ["class", "step-number", 4, "ngIf"], ["class", "step-check", 4, "ngIf"], ["class", "step-spinner", 4, "ngIf"], ["class", "step-error", 4, "ngIf"], [1, "step-content"], [1, "step-title"], [1, "step-description"], ["class", "step-metadata", 4, "ngIf"], ["class", "step-connector", 3, "class", 4, "ngIf"], [1, "step-number"], [1, "step-check"], [1, "step-spinner"], [1, "step-error"], [1, "step-metadata"], ["class", "metadata-item", 4, "ngIf"], [1, "metadata-item"], [1, "step-connector"]],
    template: function ProgressStepperComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProgressStepperComponent_div_1_Template, 14, 10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.steps);
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf],
    styles: [".progress-stepper[_ngcontent-%COMP%] {\n  width: 220px;\n  flex-shrink: 0;\n  padding: 16px 0;\n  min-height: 100vh;\n  position: sticky;\n  top: 0;\n  align-self: flex-start;\n}\n\n.step-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-bottom: 8px;\n  transition: all 0.3s ease;\n}\n.step.step-pending[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n.step.step-pending[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  border-color: #e9ecef;\n  background-color: #f8f9fa;\n  color: #6c757d;\n}\n.step.step-active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.step.step-active[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  border-color: #007bff;\n  background-color: #007bff;\n  color: white;\n  box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.1);\n}\n.step.step-completed[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.step.step-completed[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  border-color: #28a745;\n  background-color: #28a745;\n  color: white;\n}\n.step.step-error[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.step.step-error[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #dc3545;\n  color: white;\n}\n.step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #e9ecef;\n  background-color: #f8f9fa;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  margin-right: 12px;\n  flex-shrink: 0;\n  position: relative;\n  transition: all 0.3s ease;\n}\n.step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-number[_ngcontent-%COMP%], .step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-check[_ngcontent-%COMP%], .step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-spinner[_ngcontent-%COMP%], .step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-error[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-check[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n}\n.step[_ngcontent-%COMP%]   .step-indicator[_ngcontent-%COMP%]   .step-error[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 2px;\n}\n.step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  color: #333;\n  margin-bottom: 2px;\n}\n.step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #666;\n  line-height: 1.3;\n  margin-bottom: 4px;\n}\n.step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-metadata[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #999;\n  font-style: italic;\n}\n\n.step-connector[_ngcontent-%COMP%] {\n  width: 2px;\n  height: 24px;\n  margin-left: 15px;\n  margin-bottom: 4px;\n  background-color: #e9ecef;\n  transition: background-color 0.3s ease;\n}\n.step-connector.connector-active[_ngcontent-%COMP%] {\n  background-color: #007bff;\n}\n.step-connector.connector-completed[_ngcontent-%COMP%] {\n  background-color: #28a745;\n}\n\n@keyframes _ngcontent-%COMP%_spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .progress-stepper[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .progress-stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-title[_ngcontent-%COMP%] {\n    font-size: 13px;\n  }\n  .progress-stepper[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   .step-content[_ngcontent-%COMP%]   .step-description[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc2hhcmVkL3Byb2dyZXNzLXN0ZXBwZXIvcHJvZ3Jlc3Mtc3RlcHBlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxNQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7QUFDRTtFQUNFLFlBQUE7QUFDSjtBQUNJO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7QUFDTjtBQUdFO0VBQ0UsVUFBQTtBQURKO0FBR0k7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0FBRE47QUFLRTtFQUNFLFVBQUE7QUFISjtBQUtJO0VBQ0UscUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUFITjtBQU9FO0VBQ0UsVUFBQTtBQUxKO0FBT0k7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQUxOO0FBU0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQVBKO0FBU0k7Ozs7RUFJRSxrQkFBQTtBQVBOO0FBVUk7RUFDRSxlQUFBO0FBUk47QUFXSTtFQUNFLGtDQUFBO0FBVE47QUFZSTtFQUNFLGVBQUE7QUFWTjtBQWNFO0VBQ0UsT0FBQTtFQUNBLGdCQUFBO0FBWko7QUFjSTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVpOO0FBZUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFiTjtBQWlCTTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFmUjs7QUFxQkE7RUFDRSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLHNDQUFBO0FBbEJGO0FBb0JFO0VBQ0UseUJBQUE7QUFsQko7QUFxQkU7RUFDRSx5QkFBQTtBQW5CSjs7QUF1QkE7RUFDRTtJQUFPLHVCQUFBO0VBbkJQO0VBb0JBO0lBQUsseUJBQUE7RUFqQkw7QUFDRjtBQW9CQTtFQUNFO0lBQ0UsV0FBQTtFQWxCRjtFQXNCTTtJQUNFLGVBQUE7RUFwQlI7RUF1Qk07SUFDRSxlQUFBO0VBckJSO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mtc3RlcHBlciB7XG4gIHdpZHRoOiAyMjBweDtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmc6IDE2cHggMDtcbiAgbWluLWhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMDtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn1cblxuLnN0ZXAtY29udGFpbmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3RlcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgJi5zdGVwLXBlbmRpbmcge1xuICAgIG9wYWNpdHk6IDAuNDtcbiAgICBcbiAgICAuc3RlcC1pbmRpY2F0b3Ige1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZTllY2VmO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGNvbG9yOiAjNmM3NTdkO1xuICAgIH1cbiAgfVxuXG4gICYuc3RlcC1hY3RpdmUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgXG4gICAgLnN0ZXAtaW5kaWNhdG9yIHtcbiAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBib3gtc2hhZG93OiAwIDAgMCAzcHggcmdiYSgwLCAxMjMsIDI1NSwgMC4xKTtcbiAgICB9XG4gIH1cblxuICAmLnN0ZXAtY29tcGxldGVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIFxuICAgIC5zdGVwLWluZGljYXRvciB7XG4gICAgICBib3JkZXItY29sb3I6ICMyOGE3NDU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH1cbiAgfVxuXG4gICYuc3RlcC1lcnJvciB7XG4gICAgb3BhY2l0eTogMTtcbiAgICBcbiAgICAuc3RlcC1pbmRpY2F0b3Ige1xuICAgICAgYm9yZGVyLWNvbG9yOiAjZGMzNTQ1O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2RjMzU0NTtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG4gIH1cblxuICAuc3RlcC1pbmRpY2F0b3Ige1xuICAgIHdpZHRoOiAzMnB4O1xuICAgIGhlaWdodDogMzJweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAycHggc29saWQgI2U5ZWNlZjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG5cbiAgICAuc3RlcC1udW1iZXIsXG4gICAgLnN0ZXAtY2hlY2ssXG4gICAgLnN0ZXAtc3Bpbm5lcixcbiAgICAuc3RlcC1lcnJvciB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgfVxuXG4gICAgLnN0ZXAtY2hlY2sge1xuICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgIC5zdGVwLXNwaW5uZXIge1xuICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICAuc3RlcC1lcnJvciB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICB9XG5cbiAgLnN0ZXAtY29udGVudCB7XG4gICAgZmxleDogMTtcbiAgICBwYWRkaW5nLXRvcDogMnB4O1xuXG4gICAgLnN0ZXAtdGl0bGUge1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIH1cblxuICAgIC5zdGVwLWRlc2NyaXB0aW9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICAuc3RlcC1tZXRhZGF0YSB7XG4gICAgICAubWV0YWRhdGEtaXRlbSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgY29sb3I6ICM5OTk7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLnN0ZXAtY29ubmVjdG9yIHtcbiAgd2lkdGg6IDJweDtcbiAgaGVpZ2h0OiAyNHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllY2VmO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcblxuICAmLmNvbm5lY3Rvci1hY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG4gIH1cblxuICAmLmNvbm5lY3Rvci1jb21wbGV0ZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyOGE3NDU7XG4gIH1cbn1cblxuQGtleWZyYW1lcyBzcGluIHtcbiAgZnJvbSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XG4gIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxufVxuXG4vLyBSZXNwb25zaXZlIGRlc2lnblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gIC5wcm9ncmVzcy1zdGVwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBcbiAgICAuc3RlcCB7XG4gICAgICAuc3RlcC1jb250ZW50IHtcbiAgICAgICAgLnN0ZXAtdGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLnN0ZXAtZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0= */"]
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
/* harmony import */ var _Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);



function NestedObjectViewerComponent_div_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r2.getArrayLength(ctx_r2.data[key_r1]), " items] ");
  }
}
function NestedObjectViewerComponent_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r3.getObjectKeys(ctx_r3.data[key_r1]).length, " keys] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r13.getDisplayValue(ctx_r13.data[key_r1][subKey_r12]), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r17.getArrayLength(ctx_r17.data[key_r1][subKey_r12]), "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r18.getObjectKeys(ctx_r18.data[key_r1][subKey_r12]).length, "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_span_3_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const subKey_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r14.getValueType(ctx_r14.data[key_r1][subKey_r12]), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isArray(ctx_r14.data[key_r1][subKey_r12]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r14.isObject(ctx_r14.data[key_r1][subKey_r12]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 19)(1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_span_5_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedObjectViewerComponent_div_1_div_11_div_2_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);
      const subKey_r12 = restoredCtx.$implicit;
      const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r25.copyToClipboard(ctx_r25.data[key_r1][subKey_r12], subKey_r12));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \uD83D\uDCCB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const subKey_r12 = ctx.$implicit;
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", subKey_r12, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r11.isExpandable(ctx_r11.data[key_r1][subKey_r12]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r11.isExpandable(ctx_r11.data[key_r1][subKey_r12]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_div_11_div_2_div_1_Template, 8, 3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r7.getObjectKeys(ctx_r7.data[key_r1]));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r33.getDisplayValue(item_r31), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r36.getArrayLength(item_r31), "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" [", ctx_r37.getObjectKeys(item_r31).length, "] ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_2_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_span_3_Template, 2, 1, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const item_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r34.getValueType(item_r31), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.isArray(item_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r34.isObject(item_r31));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30)(1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_4_Template, 2, 1, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_span_5_Template, 4, 3, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedObjectViewerComponent_div_1_div_11_div_3_div_1_Template_button_click_6_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r42);
      const item_r31 = restoredCtx.$implicit;
      const i_r32 = restoredCtx.index;
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r41.copyToClipboard(item_r31, "[" + i_r32 + "]"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " \uD83D\uDCCB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const item_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("[", i_r32, "]:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r30.isExpandable(item_r31));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r30.isExpandable(item_r31));
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_div_11_div_3_div_1_Template, 8, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r8.data[key_r1]);
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 33)(1, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedObjectViewerComponent_div_1_div_11_div_4_Template_button_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r45);
      const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r44.copyToClipboard(ctx_r44.data[key_r1], key_r1));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " \uD83D\uDCCB ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r9.getDisplayValue(ctx_r9.data[key_r1]), " ");
  }
}
function NestedObjectViewerComponent_div_1_div_11_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nested-object-viewer", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("data", ctx_r10.data[key_r1])("path", ctx_r10.getFullPath(key_r1))("expandedSections", ctx_r10.expandedSections)("onTogglePath", ctx_r10.onTogglePath);
  }
}
function NestedObjectViewerComponent_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NestedObjectViewerComponent_div_1_div_11_div_2_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NestedObjectViewerComponent_div_1_div_11_div_3_Template, 2, 1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NestedObjectViewerComponent_div_1_div_11_div_4_Template, 5, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, NestedObjectViewerComponent_div_1_div_11_div_5_Template, 2, 4, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const key_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isObject(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isArray(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isExpandable(ctx_r4.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r4.isExpandable(ctx_r4.data[key_r1]));
  }
}
function NestedObjectViewerComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NestedObjectViewerComponent_div_1_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r51);
      const key_r1 = restoredCtx.$implicit;
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresetView"](ctx_r50.togglePath(ctx_r50.getFullPath(key_r1)));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4)(3, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, NestedObjectViewerComponent_div_1_span_9_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, NestedObjectViewerComponent_div_1_span_10_Template, 2, 1, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, NestedObjectViewerComponent_div_1_div_11_Template, 6, 4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const key_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("expanded", ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)) ? "\u25BC" : "\u25B6");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatKey(key_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("(", ctx_r0.getValueType(ctx_r0.data[key_r1]), ")");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isArray(ctx_r0.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isObject(ctx_r0.data[key_r1]));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.isPathExpanded(ctx_r0.getFullPath(key_r1)));
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
  /**
   * Copies a value to the clipboard
   */
  copyToClipboard(value, key) {
    var _this = this;
    return (0,_Users_chadcummings_Github_chs_document_extract_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const textToCopy = typeof value === 'string' ? value : JSON.stringify(value, null, 2);
        yield navigator.clipboard.writeText(textToCopy);
        // Show a brief success indication (you could enhance this with a toast notification)
        console.log(`Copied ${key} to clipboard:`, textToCopy);
      } catch (err) {
        console.error('Failed to copy to clipboard:', err);
        // Fallback for older browsers
        _this.fallbackCopyToClipboard(typeof value === 'string' ? value : JSON.stringify(value, null, 2));
      }
    })();
  }
  /**
   * Fallback copy method for browsers that don't support navigator.clipboard
   */
  fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand('copy');
      console.log('Fallback: Text copied to clipboard');
    } catch (err) {
      console.error('Fallback: Failed to copy text to clipboard', err);
    }
    document.body.removeChild(textArea);
  }
  static #_ = this.ɵfac = function NestedObjectViewerComponent_Factory(t) {
    return new (t || NestedObjectViewerComponent)();
  };
  static #_2 = this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
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
    consts: [[1, "nested-object-viewer"], ["class", "nested-item", 4, "ngFor", "ngForOf"], [1, "nested-item"], [1, "section-header", 3, "click"], [1, "section-info"], [1, "expand-icon"], [1, "section-key"], [1, "section-type"], ["class", "section-count", 4, "ngIf"], ["class", "section-content", 4, "ngIf"], [1, "section-count"], [1, "section-content"], [1, "content-wrapper"], ["class", "object-content", 4, "ngIf"], ["class", "array-content", 4, "ngIf"], ["class", "primitive-content", 4, "ngIf"], ["class", "nested-content", 4, "ngIf"], [1, "object-content"], ["class", "sub-item", 4, "ngFor", "ngForOf"], [1, "sub-item"], [1, "sub-key"], [1, "sub-value"], ["class", "primitive-value", 4, "ngIf"], ["class", "expandable-value", 4, "ngIf"], ["title", "Copy value to clipboard", 1, "copy-btn", 3, "click"], [1, "primitive-value"], [1, "expandable-value"], [4, "ngIf"], [1, "array-content"], ["class", "array-item", 4, "ngFor", "ngForOf"], [1, "array-item"], [1, "array-index"], [1, "array-value"], [1, "primitive-content"], [1, "nested-content"], [3, "data", "path", "expandedSections", "onTogglePath"]],
    template: function NestedObjectViewerComponent_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NestedObjectViewerComponent_div_1_Template, 12, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.getObjectKeys(ctx.data));
      }
    },
    dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, NestedObjectViewerComponent],
    styles: [".nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%] {\n  margin-bottom: 4px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 8px 12px;\n  background-color: #f8f9fa;\n  border: 1px solid #e9ecef;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]:hover {\n  background-color: #e9ecef;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header.expanded[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  border-color: #007bff;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .expand-icon[_ngcontent-%COMP%] {\n  font-size: 10px;\n  color: #666;\n  transition: transform 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-key[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  font-size: 13px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-type[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 11px;\n  font-style: italic;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-header[_ngcontent-%COMP%]   .section-info[_ngcontent-%COMP%]   .section-count[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 11px;\n  font-weight: 500;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%] {\n  margin-top: 4px;\n  margin-left: 16px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n  padding: 4px 0;\n  border-bottom: 1px solid #f1f3f4;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]:last-child, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-key[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-index[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #333;\n  min-width: 60px;\n  font-size: 12px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 12px;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .sub-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .array-value[_ngcontent-%COMP%]   .expandable-value[_ngcontent-%COMP%] {\n  color: #007bff;\n  font-size: 12px;\n  font-weight: 500;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%], .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 3px;\n  font-size: 12px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: #f0f0f0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .object-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .sub-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active, .nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .array-content[_ngcontent-%COMP%]   .array-item[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active {\n  background-color: #e0e0e0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 4px 0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .primitive-value[_ngcontent-%COMP%] {\n  color: #666;\n  font-family: \"Courier New\", monospace;\n  font-size: 12px;\n  flex: 1;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 2px 4px;\n  border-radius: 3px;\n  font-size: 12px;\n  opacity: 0.6;\n  transition: all 0.2s ease;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n  background-color: #f0f0f0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .primitive-content[_ngcontent-%COMP%]   .copy-btn[_ngcontent-%COMP%]:active {\n  background-color: #e0e0e0;\n}\n.nested-object-viewer[_ngcontent-%COMP%]   .nested-item[_ngcontent-%COMP%]   .section-content[_ngcontent-%COMP%]   .content-wrapper[_ngcontent-%COMP%]   .nested-content[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  padding-left: 8px;\n  border-left: 2px solid #e9ecef;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvc3lzdGVtLWNvbmZpZ3VyYXRpb24vbmVzdGVkLW9iamVjdC12aWV3ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQUFKO0FBRUk7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUFOO0FBRU07RUFDRSx5QkFBQTtBQUFSO0FBR007RUFDRSx5QkFBQTtFQUNBLHFCQUFBO0FBRFI7QUFJTTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0FBRlI7QUFJUTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7QUFGVjtBQUtRO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUhWO0FBTVE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBSlY7QUFPUTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFMVjtBQVVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBUk47QUFhVTs7OztFQUVFLGFBQUE7RUFDQSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0FBVFo7QUFXWTs7OztFQUNFLG1CQUFBO0FBTmQ7QUFTWTs7Ozs7Ozs7RUFFRSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQURkO0FBSVk7Ozs7Ozs7O0VBRUUsT0FBQTtBQUlkO0FBRmM7Ozs7Ozs7O0VBQ0UsV0FBQTtFQUNBLHFDQUFBO0VBQ0EsZUFBQTtBQVdoQjtBQVJjOzs7Ozs7OztFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFpQmhCO0FBYlk7Ozs7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7QUFrQmQ7QUFoQmM7Ozs7RUFDRSxVQUFBO0VBQ0EseUJBQUE7QUFxQmhCO0FBbEJjOzs7O0VBQ0UseUJBQUE7QUF1QmhCO0FBakJRO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7QUFtQlY7QUFqQlU7RUFDRSxXQUFBO0VBQ0EscUNBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtBQW1CWjtBQWhCVTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQWtCWjtBQWhCWTtFQUNFLFVBQUE7RUFDQSx5QkFBQTtBQWtCZDtBQWZZO0VBQ0UseUJBQUE7QUFpQmQ7QUFaUTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDhCQUFBO0FBY1YiLCJzb3VyY2VzQ29udGVudCI6WyIubmVzdGVkLW9iamVjdC12aWV3ZXIge1xuICAubmVzdGVkLWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDRweDtcblxuICAgIC5zZWN0aW9uLWhlYWRlciB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmc6IDhweCAxMnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlOWVjZWY7XG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZWNlZjtcbiAgICAgIH1cblxuICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlM2YyZmQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbiAgICAgIH1cblxuICAgICAgLnNlY3Rpb24taW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogOHB4O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5leHBhbmQtaWNvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VjdGlvbi1rZXkge1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24tdHlwZSB7XG4gICAgICAgICAgY29sb3I6ICM2NjY7XG4gICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWN0aW9uLWNvdW50IHtcbiAgICAgICAgICBjb2xvcjogIzAwN2JmZjtcbiAgICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWN0aW9uLWNvbnRlbnQge1xuICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG5cbiAgICAgIC5jb250ZW50LXdyYXBwZXIge1xuICAgICAgICAub2JqZWN0LWNvbnRlbnQsXG4gICAgICAgIC5hcnJheS1jb250ZW50IHtcbiAgICAgICAgICAuc3ViLWl0ZW0sXG4gICAgICAgICAgLmFycmF5LWl0ZW0ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGdhcDogOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YxZjNmNDtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnN1Yi1rZXksXG4gICAgICAgICAgICAuYXJyYXktaW5kZXgge1xuICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICBjb2xvcjogIzMzMztcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zdWItdmFsdWUsXG4gICAgICAgICAgICAuYXJyYXktdmFsdWUge1xuICAgICAgICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgICAgICAgIC5wcmltaXRpdmUtdmFsdWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBtb25vc3BhY2U7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgLmV4cGFuZGFibGUtdmFsdWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjMDA3YmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jb3B5LWJ0biB7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuXG4gICAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlMGUwO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByaW1pdGl2ZS1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZ2FwOiA4cHg7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDA7XG5cbiAgICAgICAgICAucHJpbWl0aXZlLXZhbHVlIHtcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIG1vbm9zcGFjZTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmNvcHktYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAycHggNHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgb3BhY2l0eTogMC42O1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcblxuICAgICAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6YWN0aXZlIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZTBlMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAubmVzdGVkLWNvbnRlbnQge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcbiAgICAgICAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlOWVjZWY7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn0gIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
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
// Generated on: 2025-07-14T12:31:09.628Z
const buildVersion = 'v0.0.117-cpdi';
const packageVersion = '0.0.117';
const gitBranch = 'cpdi';

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
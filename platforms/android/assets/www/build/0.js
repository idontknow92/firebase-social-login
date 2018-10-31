webpackJsonp([0],{

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailsPageModule", function() { return SurveyDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey_details__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SurveyDetailsPageModule = /** @class */ (function () {
    function SurveyDetailsPageModule() {
    }
    SurveyDetailsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__survey_details__["a" /* SurveyDetailsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey_details__["a" /* SurveyDetailsPage */]),
            ],
        })
    ], SurveyDetailsPageModule);
    return SurveyDetailsPageModule;
}());

//# sourceMappingURL=survey-details.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(296);
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
 * Generated class for the SurveyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SurveyDetailsPage = /** @class */ (function () {
    function SurveyDetailsPage(navCtrl, navParams, alrtCntrl, emailCmpsr) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alrtCntrl = alrtCntrl;
        this.emailCmpsr = emailCmpsr;
        this.user = {};
    }
    SurveyDetailsPage.prototype.ionViewDidLoad = function () {
        this.coachingOptFor = this.navParams.get('cardClicked');
        console.log(this.coachingOptFor);
        if (this.coachingOptFor == 'personalCoaching') {
            this.user.coachingOptFor = 'Personal Coaching';
        }
        else if (this.coachingOptFor == 'careerCoaching') {
            this.user.coachingOptFor = 'Career Coaching';
        }
        else if (this.coachingOptFor == 'studentCoaching') {
            this.user.coachingOptFor = 'Student Coaching';
        }
        else {
            this.user.coachingOptFor = 'Corporate Coaching';
        }
        console.log('ionViewDidLoad SurveyDetailsPage');
    };
    SurveyDetailsPage.prototype.submitData = function () {
        console.log(this.user);
        if (this.user.name == null || this.user.name == undefined) {
            alert('Enter Name');
        }
        else if (this.user.phone == null || this.user.phone == undefined) {
            alert('Enter Phone');
        }
        else if (this.user.client == null || this.user.client == undefined) {
            alert('Please choose a client');
        }
        else if (this.user.timeLine == null || this.user.timeLine == undefined) {
            alert('Please choose a time line');
        }
        else {
            alert('User data successfully entered');
            this.composeEmail();
        }
    };
    SurveyDetailsPage.prototype.composeEmail = function () {
        // const that = this;
        // this.emailCmpsr.isAvailable().then(available => {
        //   console.log('email composer is Available');
        //   let email = {
        //     to: 'kumar.pvsrk@gmail.com',
        //     subject: 'Survey Details',
        //     body: 'Name : ' + this.user.name + '&nbsp; Phone :' + this.user.phone + '&nbsp; Coaching Opted For :' + this.user.coachingOptFor + '&nbsp; If you are choosing this coaching service for school student, confirm that you are a parent/teacher of the client: ' + this.user.client + '&nbsp; Describe what is the expectation you have from the coaching service: &nbsp; ' + this.user.expectation + '&nbsp; What is the time line you are looking for starting the coaching: &nbsp; ' + this.user.timeLine,
        //     isHtml: true
        //   };
        //   that.emailCmpsr.open(email);
        // }).catch(err => {
        //   console.log('Error in availablitiy of email : ',err);
        // })
        this.mailText = 'mailto:pearlcoaching.in@gmail.com?subject=Survey Details&body=Name : ' + this.user.name + ',%0D%0A%0D%0A Phone :' + this.user.phone + ',%0D%0A%0D%0A Coaching Opted For : ' + this.user.coachingOptFor + ',%0D%0A%0D%0A If you are choosing this coaching service for school student, confirm that you are a parent/teacher of the client: ' + this.user.client + ',%0D%0A%0D%0A Describe what is the expectation you have from the coaching service: ' + this.user.expectation + ',%0D%0A%0D%0A What is the time line you are looking for starting the coaching: ' + this.user.timeLine;
        window.location.href = this.mailText;
    };
    SurveyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-survey-details',template:/*ion-inline-start:"/Users/pusapro1/Documents/sample_project/POC/firebase-social-login/src/pages/survey-details/survey-details.html"*/'<!--\n  Generated template for the SurveyDetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Coaching Survey</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list no-lines>\n    <ion-item no-lines>\n      <ion-label color="primary" floating>Name</ion-label>\n      <ion-input type="text" [(ngModel)]="user.name"></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label color="primary" floating>Phone</ion-label>\n      <ion-input type="number" [(ngModel)]="user.phone"></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label color="primary" floating>Alternate Phone</ion-label>\n      <ion-input type="number" [(ngModel)]="user.altPhone"></ion-input>\n    </ion-item>\n    <ion-item no-lines>\n      <ion-label color="primary" floating> Coaching Opted For</ion-label>\n      <ion-input type="text" [(ngModel)]="user.coachingOptFor"  [disabled]="true"></ion-input>\n    </ion-item>\n\n    <ion-list radio-group [(ngModel)]="user.client" no-lines>\n      <ion-list-header text-wrap no-lines>\n        If you are choosing this coaching service for school student, confirm that you are a parent/teacher of the\n        client:\n      </ion-list-header>\n\n      <ion-item no-lines>\n        <ion-label>Parent</ion-label>\n        <ion-radio value="parent"></ion-radio>\n      </ion-item>\n\n      <ion-item no-lines>\n        <ion-label>Teacher</ion-label>\n        <ion-radio value="teacher"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n    <ion-item no-lines>\n      <ion-label floating text-wrap>Describe what is the expectation you have from the coaching service:</ion-label>\n      <ion-textarea id="myInput" rows="6" maxLength="500" [(ngModel)]="user.expectation"></ion-textarea>\n    </ion-item>\n\n    <ion-list radio-group [(ngModel)]="user.timeLine" no-lines>\n      <ion-list-header no-lines text-wrap>\n        What is the time line you are looking for starting the coaching:\n      </ion-list-header>\n      <ion-item no-lines>\n        <ion-label>Immediate</ion-label>\n        <ion-radio value="immediate"></ion-radio>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label>In next 2 weeks</ion-label>\n        <ion-radio value="2weeks"></ion-radio>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label>In next 1 month</ion-label>\n        <ion-radio value="1month"></ion-radio>\n      </ion-item>\n      <ion-item no-lines>\n        <ion-label>Beyond 1 month</ion-label>\n        <ion-radio value="beyondMonth"></ion-radio>\n      </ion-item>\n    </ion-list>\n\n\n    <button class="submit-button" ion-button (click) = "submitData()" align = "center" round color="danger"> Submit Survey </button>\n\n  </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/Users/pusapro1/Documents/sample_project/POC/firebase-social-login/src/pages/survey-details/survey-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]])
    ], SurveyDetailsPage);
    return SurveyDetailsPage;
}());

//# sourceMappingURL=survey-details.js.map

/***/ })

});
//# sourceMappingURL=0.js.map
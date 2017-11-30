webpackJsonp([2],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConceptModalPage = (function () {
    function ConceptModalPage(navCtrl, viewCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.gettyCredentials = {
            apiKey: "5zf3zt29mkfvjecece6kks2g",
            apiSecret: "uwWNXw2u2h77HFgQKxtmZNuFdSSKpcHp5R7zqh6V7FG28",
            username: "andrea.bellucci",
            password: "xxxxxxxxxxxxxxx"
        };
        this.images = [];
        this.query = "";
        this.imageUrl = null;
        this.color = "black";
        this.concept = "";
        this.isConceptEmpty = true;
        this.title = "Insert the text";
        this.step = 0;
        this.totalSteps = 4;
        this.colors = ["black", "green", "yellow", "brown",
            "orange", "indigo", "red", "blue",
            "pink", "purple", "cyan", "teal",
            "grey", "blue-grey", "lime", "amber"];
    }
    ConceptModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RootModalPage');
        this.slides.lockSwipes(true);
    };
    ConceptModalPage.prototype.changeTitle = function (n) {
        switch (n) {
            case 0:
                this.title = "Insert the text";
            case 1:
                this.title = "Select an image";
                break;
            case 2:
                this.title = "Pick a color";
                break;
            case 3:
                this.title = "Last step...";
                break;
        }
    };
    ConceptModalPage.prototype.slideWillChange = function (ev) {
        if (this.step === 0) {
            if (this.concept.trim() === "") {
                this.isConceptEmpty = true;
            }
            else {
                this.isConceptEmpty = false;
            }
        }
    };
    ConceptModalPage.prototype.slideChanged = function () {
        this.step = this.slides.getActiveIndex();
        if (this.step >= this.totalSteps)
            this.step = this.totalSteps - 1;
        this.changeTitle(this.step);
        if (this.step === 1)
            this.searchImages();
    };
    ConceptModalPage.prototype.gotoSlide = function (n) {
        this.slides.slideTo(n, 500);
        this.changeTitle(n);
    };
    ConceptModalPage.prototype.setImageUrl = function (url) {
        this.imageUrl = url;
        this.gotoSlide(2);
    };
    ConceptModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ color: this.color, img_url: this.imageUrl, label: this.concept });
    };
    ConceptModalPage.prototype.onTextInput = function (ev) {
        console.log(ev);
        this.query = this.concept;
        if (this.concept.trim() === "") {
            this.isConceptEmpty = true;
            this.slides.lockSwipes(true);
        }
        else {
            this.isConceptEmpty = false;
            this.slides.lockSwipes(false);
        }
    };
    ConceptModalPage.prototype.onInput = function () {
        if (this.query === "") {
            this.images = [];
            this.showImagesPanel = false;
            return;
        }
        this.searchImages();
    };
    ConceptModalPage.prototype.selectImage = function (ev) {
        //setImage( )
        this.gotoSlide(2);
        this.imageUrl = ev.srcElement.currentSrc;
        //ev.srcElement.parentElement.style.border = "5px solid black";
    };
    ConceptModalPage.prototype.pickColor = function (color) {
        this.gotoSlide(3);
        this.color = color;
    };
    ConceptModalPage.prototype.searchImages = function () {
        var _this = this;
        this.showSpinner = true;
        this.noResults = false;
        this.showImagesPanel = true;
        this.images = [];
        this.grid = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Api-Key', this.gettyCredentials.apiKey);
        this.http.get('https://api.gettyimages.com/v3/search/images?phrase=' + this.query, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            //console.log(data);
            if (data.images.length > 0) {
                _this.images = data.images;
                _this.grid = Array(Math.ceil(_this.images.length / 3));
                _this.showSpinner = false;
                _this.noResults = false;
                var rowNum = 0; //counter to iterate over the rows in the grid
                for (var i = 0; i < _this.images.length; i += 3) {
                    var n_elements = _this.images.length - i >= 3 ? 3 : _this.images.length - i;
                    _this.grid[rowNum] = Array(n_elements); //declare two elements per row
                    for (var j = 0; j < n_elements; j++) {
                        if (_this.images[i + j]) {
                            _this.grid[rowNum][j] = _this.images[i + j]; //insert image
                        }
                    }
                    rowNum++; //go on to the next row
                }
            }
            else {
                _this.noResults = true;
                _this.showSpinner = false;
                _this.images = [];
            }
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.showImagesPanel = false;
        });
    };
    return ConceptModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slides'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */]) === "function" && _a || Object)
], ConceptModalPage.prototype, "slides", void 0);
ConceptModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-concept-modal',template:/*ion-inline-start:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/concept-modal/concept-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-slides #slides pager (ionSlideWillChange)="slideWillChange($event)" (ionSlideDidChange)="slideChanged()">\n		<ion-slide>\n			<a *ngIf="!isConceptEmpty" padding (click)="gotoSlide( 1 )"> > Continue </a>\n			<ion-item>\n				<!--<ion-label floating>Insert the text of the new concept</ion-label>-->\n				<ion-input [(ngModel)]="concept"\n				(ionChange)="onTextInput($event)"\n				placeholder="Insert the text of the new concept..."></ion-input>\n			</ion-item>\n				<ion-label *ngIf="isConceptEmpty" padding color="red">You need to insert a concept to continue...</ion-label>\n		</ion-slide>\n\n		<ion-slide>\n			<a padding (click)="setImageUrl( null )"> > Skip step (no image) </a>\n			<ion-searchbar\n				[(ngModel)]="query"\n				[showCancelButton]="shouldShowCancel"\n				(ionInput)="onInput($event)"\n				(ionCancel)="onCancel($event)">\n			</ion-searchbar>\n			<ion-scroll scrollY="true">\n				<ion-grid>\n					<ion-row>\n					 <ion-spinner text-center name="bubbles" *ngIf=showSpinner></ion-spinner>\n					 <ion-label *ngIf="noResults">No results!!! Please try with other search keywords</ion-label>\n					</ion-row>\n			 		<ion-row wrap *ngFor="let row of grid">\n				 		<ion-col width-33 *ngFor="let img of row" >\n					 		<img src="{{img.display_sizes[0].uri}}" (click)="selectImage($event)" >\n				 		</ion-col>\n			 		</ion-row>\n		 		</ion-grid>\n			</ion-scroll>\n		</ion-slide>\n\n		<ion-slide>\n			<ion-row radio-group [(ngModel)]="color" text-center>\n				<ion-col col-3 *ngFor="let c of colors">\n					<div class="color-picker" [ngClass]=c (click)="pickColor(c)"></div>\n				</ion-col>\n	  	</ion-row>\n		</ion-slide>\n\n		<ion-slide>\n			<ion-label>Text:	</ion-label>\n			<p padding [ngClass]="\'text-\'+color" >{{concept}}</p>\n			<ion-label>Selected image:	</ion-label>\n			<img padding *ngIf="imageUrl != null" [src]="imageUrl" />\n			<p padding *ngIf="imageUrl == null"> No image </p>\n			<ion-label>Selected color:	</ion-label>\n			<p padding [ngClass]="\'text-\'+color" >You have chosen to use the {{color}} color.</p>\n			<a id="done-btn" text-uppercase (click)="dismiss( )"> done </a>\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/concept-modal/concept-modal.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _e || Object])
], ConceptModalPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=concept-modal.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RootModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RootModalPage = (function () {
    function RootModalPage(navCtrl, viewCtrl, navParams, http) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.navParams = navParams;
        this.http = http;
        this.gettyCredentials = {
            apiKey: "5zf3zt29mkfvjecece6kks2g",
            apiSecret: "uwWNXw2u2h77HFgQKxtmZNuFdSSKpcHp5R7zqh6V7FG28",
            username: "andrea.bellucci",
            password: "xxxxxxxxxxxxxxx"
        };
        this.images = [];
        this.query = "";
        this.imageUrl = null;
        this.color = "black";
        this.concept = this.navParams.get('concept');
        this.query = this.concept;
        this.searchImages();
        this.title = "Select an image";
        this.step = 0;
        this.totalSteps = 3;
        this.colors = ["black", "green", "yellow", "brown",
            "orange", "indigo", "red", "blue",
            "pink", "purple", "cyan", "teal",
            "grey", "blue-grey", "lime", "amber"];
    }
    RootModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RootModalPage');
    };
    RootModalPage.prototype.changeTitle = function (n) {
        switch (n) {
            case 0:
                this.title = "Select an image";
                break;
            case 1:
                this.title = "Pick a color";
                break;
            case 2:
                this.title = "Last step...";
                break;
        }
    };
    RootModalPage.prototype.slideChanged = function () {
        this.step = this.slides.getActiveIndex();
        if (this.step >= this.totalSteps)
            this.step = this.totalSteps - 1;
        this.changeTitle(this.step);
    };
    RootModalPage.prototype.gotoSlide = function (n) {
        this.slides.slideTo(n, 500);
        this.changeTitle(n);
    };
    RootModalPage.prototype.setImageUrl = function (url) {
        this.imageUrl = url;
        this.gotoSlide(1);
    };
    RootModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss({ color: this.color, img_url: this.imageUrl });
    };
    RootModalPage.prototype.onInput = function () {
        if (this.query === "") {
            this.images = [];
            this.showImagesPanel = false;
            return;
        }
        this.searchImages();
    };
    RootModalPage.prototype.selectImage = function (ev) {
        //setImage( )
        this.gotoSlide(1);
        this.imageUrl = ev.srcElement.currentSrc;
        //ev.srcElement.parentElement.style.border = "5px solid black";
    };
    RootModalPage.prototype.pickColor = function (color) {
        this.gotoSlide(2);
        this.color = color;
    };
    RootModalPage.prototype.searchImages = function () {
        var _this = this;
        this.showSpinner = true;
        this.noResults = false;
        this.showImagesPanel = true;
        this.images = [];
        this.grid = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Api-Key', this.gettyCredentials.apiKey);
        this.http.get('https://api.gettyimages.com/v3/search/images?phrase=' + this.query, { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            if (data.images.length > 0) {
                _this.images = data.images;
                _this.grid = Array(Math.ceil(_this.images.length / 3));
                _this.showSpinner = false;
                _this.noResults = false;
                var rowNum = 0; //counter to iterate over the rows in the grid
                for (var i = 0; i < _this.images.length; i += 3) {
                    var n_elements = _this.images.length - i >= 3 ? 3 : _this.images.length - i;
                    _this.grid[rowNum] = Array(n_elements); //declare two elements per row
                    for (var j = 0; j < n_elements; j++) {
                        if (_this.images[i + j]) {
                            _this.grid[rowNum][j] = _this.images[i + j]; //insert image
                        }
                    }
                    rowNum++; //go on to the next row
                }
            }
            else {
                _this.noResults = true;
                _this.showSpinner = false;
                _this.images = [];
            }
        }, function (err) {
            console.log("ERROR!: ", err);
            _this.showImagesPanel = false;
        });
    };
    return RootModalPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('slides'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Slides */])
], RootModalPage.prototype, "slides", void 0);
RootModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-root-modal',template:/*ion-inline-start:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/root-modal/root-modal.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n	<ion-slides #slides pager (ionSlideDidChange)="slideChanged()">\n\n		<ion-slide>\n			<a padding (click)="setImageUrl( null )"> > Skip step (no image) </a>\n			<ion-searchbar\n				[(ngModel)]="query"\n				[showCancelButton]="shouldShowCancel"\n				(ionInput)="onInput($event)"\n				(ionCancel)="onCancel($event)">\n			</ion-searchbar>\n			<ion-scroll scrollY="true">\n				<ion-grid>\n					<ion-row>\n					 <ion-spinner text-center name="bubbles" *ngIf=showSpinner></ion-spinner>\n					 <ion-label *ngIf="noResults">No results!!! Please try with other search keywords</ion-label>\n					</ion-row>\n			 		<ion-row wrap *ngFor="let row of grid">\n				 		<ion-col width-33 *ngFor="let img of row" >\n					 		<img src="{{img.display_sizes[0].uri}}" (click)="selectImage($event)" >\n				 		</ion-col>\n			 		</ion-row>\n		 		</ion-grid>\n			</ion-scroll>\n		</ion-slide>\n\n		<ion-slide>\n			<ion-row radio-group [(ngModel)]="color" text-center>\n				<ion-col col-3 *ngFor="let c of colors">\n					<div class="color-picker" [ngClass]=c (click)="pickColor(c)"></div>\n				</ion-col>\n	  	</ion-row>\n		</ion-slide>\n\n		<ion-slide>\n			<ion-label>Selected image:	</ion-label>\n			<img padding *ngIf="imageUrl != null" [src]="imageUrl" />\n			<p padding *ngIf="imageUrl == null"> No image </p>\n			<ion-label>Selected color:	</ion-label>\n			<p padding [ngClass]="\'text-\'+color" >You have chosen to use the {{color}} color.</p>\n			<a id="done-btn" text-uppercase (click)="dismiss( )"> done </a>\n		</ion-slide>\n\n	</ion-slides>\n\n</ion-content>\n'/*ion-inline-end:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/root-modal/root-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], RootModalPage);

//# sourceMappingURL=root-modal.js.map

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 242:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/concept-modal/concept-modal.module": [
		728,
		1
	],
	"../pages/root-modal/root-modal.module": [
		729,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 242;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 286:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concept_modal_concept_modal__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__root_modal_root_modal__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(436);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_d3__ = __webpack_require__(437);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, platform, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.ROOT_NODE_RADIUS = 100;
        this.margin = { top: 12, right: 12, bottom: 12, left: 12 };
        this.graph = {
            "nodes": [],
            "links": [],
        };
        this.concept = "";
        this.cnt = 1;
        this.group = 1;
        this.colors = [
            { color: 'red', hex: '#f44336' },
            { color: 'pink', hex: '#e91e63' },
            { color: 'purple', hex: '#9c27b0' },
            { color: 'indigo', hex: '#3f51b5' },
            { color: 'blue', hex: '#2196f3' },
            { color: 'cyan', hex: '#00bcd4' },
            { color: 'teal', hex: '#009688' },
            { color: 'green', hex: '#4caf50' },
            { color: 'yellow', hex: '#ffeb3b' },
            { color: 'orange', hex: '#ff9800' },
            { color: 'brown', hex: '#795548' },
            { color: 'grey', hex: '#9e9e9e' },
            { color: 'blue-grey', hex: '#607d8b' },
            { color: 'amber', hex: '#ffc107' },
            { color: 'lime', hex: '#cddc39' },
            { color: 'black', hex: '#000000' }
        ];
        this.categories = [];
        this.zoom = __WEBPACK_IMPORTED_MODULE_6_d3__["k" /* zoom */]()
            .scaleExtent([0.25, 4])
            .on("zoom", this.zoomed.bind(this));
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.platform.ready().then(function (readySource) {
            _this.width = _this.platform.width() - _this.margin.left - _this.margin.right;
            _this.height = _this.platform.height() - _this.margin.top - _this.margin.bottom;
            _this.initSvg();
        });
    };
    HomePage.prototype.startWizard = function () {
        var _this = this;
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_3__root_modal_root_modal__["a" /* RootModalPage */], { concept: this.concept });
        modal.onDidDismiss(function (data) {
            _this.categories.push({ name: 'main concept', color: data.color });
            _this.startWeb(data);
        });
        modal.present();
    };
    HomePage.prototype.cloudShape = function () {
        return "M 45 200 A 40 40 0 0 1 40 120 A 30 30 0 1 1 115 105 C 155 90 160 130 160 130 A 30 30 0 1 1 165 200 Z";
    };
    HomePage.prototype.wrap = function (text, width) {
        text.each(function () {
            var text = __WEBPACK_IMPORTED_MODULE_6_d3__["j" /* select */](this), words = text.text().split(/\s+/).reverse(), word, line = [], lineNumber = 0, lineHeight = 1.1, // ems
            y = text.attr("y"), dy = parseFloat(text.attr("dy")), tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
            while (word = words.pop()) {
                line.push(word);
                tspan.text(line.join(" "));
                if (tspan.node().getComputedTextLength() > width) {
                    line.pop();
                    tspan.text(line.join(" "));
                    line = [word];
                    tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
                }
            }
        });
    };
    HomePage.prototype.startWeb = function (data) {
        var _this = this;
        if (this.concept.trim() === "")
            return;
        this.svg.selectAll("*").remove();
        this.svg.append('svg:defs')
            .append("svg:pattern")
            .attr("id", "fill-0")
            .attr("width", this.ROOT_NODE_RADIUS * 2)
            .attr("height", this.ROOT_NODE_RADIUS * 2)
            .attr("patternUnits", "userSpaceOnUse")
            .append("svg:image")
            .attr("x", 0)
            .attr("y", this.ROOT_NODE_RADIUS / 2)
            .attr("xlink:href", data.img_url)
            .attr("width", this.ROOT_NODE_RADIUS * 2)
            .attr("height", this.ROOT_NODE_RADIUS * 2)
            .attr("preserveAspectRatio", "xMidYMid slice");
        // build the arrow.
        this.graph.nodes = [];
        this.graph.links = [];
        this.simulation = __WEBPACK_IMPORTED_MODULE_6_d3__["g" /* forceSimulation */]()
            .force("link", __WEBPACK_IMPORTED_MODULE_6_d3__["e" /* forceLink */]().id(function (d) { return d.id; }).distance(this.ROOT_NODE_RADIUS * 2).strength(1))
            .force("charge", __WEBPACK_IMPORTED_MODULE_6_d3__["f" /* forceManyBody */]())
            .force("collision", __WEBPACK_IMPORTED_MODULE_6_d3__["d" /* forceCollide */](this.ROOT_NODE_RADIUS * 2))
            .force("center", __WEBPACK_IMPORTED_MODULE_6_d3__["c" /* forceCenter */]((this.width / 2) + this.ROOT_NODE_RADIUS * 2, (this.height / 2) + this.ROOT_NODE_RADIUS * 2));
        this.graph.nodes[0] = {
            "id": 0,
            "label": this.concept,
            "img_url": data.img_url,
            "group": 1,
            "fx": this.width / 2,
            "fy": this.height / 2,
        };
        this.link = this.svg.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(this.graph.links)
            .enter().append("line");
        this.node = this.svg.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(this.graph.nodes)
            .enter().append("svg:path")
            .attr("d", function (d) { return _this.cloudShape(); })
            .attr("class", "shape")
            .style("fill", function () { return data.img_url === null ? _this.colors.find(function (x) { return x.color === data.color; }).hex : "url(#fill-0)"; })
            .style("stroke-width", 5)
            .style("stroke-linejoin", "round")
            .style("stroke", function () { return _this.colors.find(function (x) { return x.color === data.color; }).hex; })
            .call(__WEBPACK_IMPORTED_MODULE_6_d3__["a" /* drag */]()
            .on("start", this.dragstarted.bind(this))
            .on("drag", this.dragged.bind(this))
            .on("end", this.dragended.bind(this)))
            .on('click', this.clicked.bind(this));
        this.text = this.svg.append("g").attr("class", "labels").selectAll("g")
            .data(this.graph.nodes)
            .enter()
            .append("text")
            .attr("y", this.ROOT_NODE_RADIUS + 25)
            .attr("dy", 0)
            .attr("x", 0)
            .style("text-anchor", function (d) { return "middle"; })
            .style("fill", function () { return _this.colors.find(function (x) { return x.color === data.color; }).hex; })
            .text(function (d) { return d.label; })
            .call(this.wrap, this.ROOT_NODE_RADIUS * 2);
        this.simulation
            .nodes(this.graph.nodes)
            .on("tick", this.ticked.bind(this));
        this.simulation.force("link")
            .links(this.graph.links);
    };
    HomePage.prototype.dragstarted = function (d) {
        __WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].sourceEvent.stopPropagation();
        if (d.id === 0)
            return;
        if (!__WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].active)
            this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };
    HomePage.prototype.dragged = function (d) {
        if (d.id === 0)
            return;
        d.fx = __WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].x;
        d.fy = __WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].y;
    };
    HomePage.prototype.dragended = function (d) {
        __WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].sourceEvent.stopPropagation();
        if (d.id === 0)
            return;
        if (!__WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].active)
            this.simulation.alphaTarget(0);
        d.fx = null;
        d.fy = null;
    };
    HomePage.prototype.ticked = function () {
        var _this = this;
        this.link
            .attr("x1", function (d) { return d.source.x; })
            .attr("y1", function (d) { return d.source.y; })
            .attr("x2", function (d) { return d.target.x; })
            .attr("y2", function (d) { return d.target.y; });
        this.node
            .attr("transform", function (d) {
            return "translate(" + (d.x - _this.ROOT_NODE_RADIUS) + ","
                + (d.y - _this.ROOT_NODE_RADIUS) + ")";
        });
        this.text
            .attr("transform", function (d) { return "translate(" + (d.x) + "," + (d.y) + ")"; });
    };
    HomePage.prototype.clicked = function (d) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].defaultPrevented)
            return;
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__concept_modal_concept_modal__["a" /* ConceptModalPage */], { parentConcept: this.concept });
        modal.onDidDismiss(function (data) {
            if (data == null)
                return;
            if (d.group === 1)
                _this.group++;
            var n = { id: "" + _this.cnt++,
                group: d.group === 1 ? _this.group : d.group,
                label: data.label,
                color: data.color,
                img_url: data.img_url };
            _this.graph.nodes.push(n);
            _this.graph.links.push({ source: d.id, target: n.id, group: n.group, color: n.color });
            _this.svg.select("defs")
                .append("svg:pattern")
                .attr("id", "fill-" + n.id)
                .attr("width", _this.ROOT_NODE_RADIUS * 2)
                .attr("height", _this.ROOT_NODE_RADIUS * 2)
                .attr("patternUnits", "userSpaceOnUse")
                .append("svg:image")
                .attr("x", 0)
                .attr("y", _this.ROOT_NODE_RADIUS / 2)
                .attr("xlink:href", n.img_url)
                .attr("width", _this.ROOT_NODE_RADIUS * 2)
                .attr("height", _this.ROOT_NODE_RADIUS * 2)
                .attr("preserveAspectRatio", "xMidYMid slice");
            /*
            this.svg.select('defs')
                .append('marker')
                    .attr('id','arrowhead-'+n.id)
                    .attr(  'viewBox','-0 -5 10 10')
                    .attr(  'refX',24)
                    .attr(  'refY',0)
                    .attr(  'orient','auto')
                    .attr(  'markerWidth',12)
                    .attr(  'markerHeight',12)
                    .attr(  'xoverflow','visible')
                    .append('svg:path')
                    .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                    .attr('fill', this.colors.find(x => x.color === n.color).hex)
                    .style('stroke','none');
                    */
            _this.restart();
        });
        modal.present();
    };
    HomePage.prototype.flatten = function (root) {
        var nodes = [], i = 0;
        function recurse(node) {
            if (node.children)
                node.children.forEach(recurse);
            if (!node.id)
                node.id = ++i;
            nodes.push(node);
        }
        recurse(root);
        return nodes;
    };
    HomePage.prototype.restart = function () {
        var _this = this;
        var self = this;
        this.link = this.link.data(this.graph.links, function (d) { return d.source.id + "-" + d.target.id; });
        this.link.exit().remove();
        this.link = this.link.enter()
            .append("line")
            .style("stroke", function (d) { return self.colors.find(function (x) { return x.color === d.color; }).hex; })
            .style("stroke-width", 3)
            .attr("class", "link").merge(this.link);
        //.attr('marker-end',d => {return 'url(#arrowhead-'+d.target+')'})
        this.node = this.node.data(this.graph.nodes, function (d) { return d.id; });
        this.node.exit().remove();
        this.node = this.node.enter()
            .append("svg:path")
            .attr("d", function (d) { return _this.cloudShape(); })
            .attr("class", "shape")
            .attr("dy", -this.ROOT_NODE_RADIUS)
            .attr("x", 0)
            .style("stroke-width", 3)
            .style("stroke-linejoin", "round")
            .style("fill", function (d) { return d.img_url === null ? _this.colors.find(function (x) { return x.color === d.color; }).hex : "url(#fill-" + d.id + ")"; })
            .style("stroke", function (d) { return _this.colors.find(function (x) { return x.color === d.color; }).hex; }).merge(this.node)
            .call(__WEBPACK_IMPORTED_MODULE_6_d3__["a" /* drag */]()
            .on("start", this.dragstarted.bind(this))
            .on("drag", this.dragged.bind(this))
            .on("end", this.dragended.bind(this)))
            .on('click', this.clicked.bind(this));
        //.on('dblclick', this.dblclicked.bind(this));
        this.text = this.text.data(this.graph.nodes, function (d) { return d.label; });
        this.text.exit().remove();
        this.text = this.text.enter()
            .append("text").merge(this.text)
            .attr("y", function (d) { return (d.id === 0) ? _this.ROOT_NODE_RADIUS + 25 : self.ROOT_NODE_RADIUS + 25; })
            .attr("dy", 0)
            .attr("x", 0)
            .style("text-anchor", "middle")
            .text(function (d) { return d.label; })
            .call(this.wrap, this.ROOT_NODE_RADIUS * 2);
        // Update and restart the simulation.
        this.simulation.nodes(this.graph.nodes);
        this.simulation.force("link").links(this.graph.links);
        this.simulation.alpha(1).restart();
    };
    HomePage.prototype.initSvg = function () {
        this.color = __WEBPACK_IMPORTED_MODULE_6_d3__["h" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_6_d3__["i" /* schemeCategory20 */]);
        this.svg = __WEBPACK_IMPORTED_MODULE_6_d3__["j" /* select */]("#concept-web")
            .append("svg")
            .attr("width", this.width)
            .attr("height", this.height);
        this.svg.call(this.zoom);
    };
    HomePage.prototype.onResize = function (ev) {
        this.width = this.platform.width() - this.margin.left - this.margin.right;
        this.height = this.platform.height() - this.margin.top - this.margin.bottom;
        this.svg
            .attr("width", this.width)
            .attr("height", this.height);
        this.restart();
    };
    HomePage.prototype.zoomed = function () {
        this.svg.selectAll('g').attr('transform', __WEBPACK_IMPORTED_MODULE_6_d3__["b" /* event */].transform);
    };
    HomePage.prototype.zoomIn = function (ev) {
        this.transition(1.25);
    };
    HomePage.prototype.zoomOut = function (ev) {
        this.transition(0.75);
    };
    HomePage.prototype.transition = function (zoomLevel) {
        this.svg.transition()
            .delay(50)
            .duration(400)
            .call(this.zoom.scaleBy, zoomLevel);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <!--<ion-item>\n      <ion-label color="primary"> Concept </ion-label>\n       <ion-input placeholder="Type your concept" [value]="concept" [(ngModel)]="concept" ></ion-input>\n    </ion-item>\n    <button ion-button (click)="searchImages()" >start</button>\n		-->\n		<!--<ion-searchbar\n  		[(ngModel)]="concept"\n  		[showCancelButton]="shouldShowCancel"\n  		(ionInput)="onInput($event)"\n  		(ionCancel)="onCancel($event)">\n		</ion-searchbar>-->\n		<ion-item>\n		<!-- <ion-label floating>Concept</ion-label> -->\n		 <!--(input)="onInput($event)" -->\n		 <ion-input\n		 [(ngModel)]=\'concept\'\n		 placeholder="Insert a concept to start..."></ion-input>\n	 </ion-item>\n		<button ion-button (click)="startWizard()" >start!</button>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center>\n	<button ion-button id="zoom-in" outline (click)="zoomIn($event)">\n		<ion-icon name="add"></ion-icon>\n	</button>\n\n	<button ion-button id="zoom-out" outline (click)="zoomOut($event)">\n		<ion-icon name="remove"></ion-icon>\n	</button>\n	<!--\n	<div id="categories">\n		<ion-label padding>Categories:</ion-label>\n\n		<ion-row *ngFor="let category of categories">\n				<div class="category"\n				[ngClass]="category.color"></div>\n\n				<div [ngClass]="\'text-\'+category.color">{{category.name}}</div>\n		</ion-row>\n	</div>\n	-->\n  <div id="concept-web" (window:resize)="onResize($event)"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/abellucc/Documents/Workspace/ionic-webby/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */]) === "function" && _d || Object])
], HomePage);

var _a, _b, _c, _d;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(387);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_root_modal_root_modal__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__["a" /* ConceptModalPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_root_modal_root_modal__["a" /* RootModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/concept-modal/concept-modal.module#ConceptModalPageModule', name: 'ConceptModalPage', segment: 'concept-modal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/root-modal/root-modal.module#RootModalPageModule', name: 'RootModalPage', segment: 'root-modal', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__["a" /* ConceptModalPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_root_modal_root_modal__["a" /* RootModalPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(286);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/abellucc/Documents/Workspace/ionic-webby/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/abellucc/Documents/Workspace/ionic-webby/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[368]);
//# sourceMappingURL=main.js.map
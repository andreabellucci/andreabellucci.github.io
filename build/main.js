webpackJsonp([1],{

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConceptModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import GoogleImages from 'google-images'

//import 'rxjs/add/operator/map';
/**
 * Generated class for the ConceptModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
        this.label = "";
        this.img_url = "";
        this.parentConcept = this.navParams.get('parentConcept');
    }
    ConceptModalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ConceptModalPage');
    };
    ConceptModalPage.prototype.dismiss = function () {
        if (this.label != "") {
            this.viewCtrl.dismiss({ label: this.label, img_url: this.img_url });
        }
    };
    ConceptModalPage.prototype.onInput = function () {
        if (this.label === "") {
            this.images = [];
            this.showImagesPanel = false;
            return;
        }
        this.searchImages();
    };
    ;
    ConceptModalPage.prototype.searchImages = function () {
        var self = this;
        this.showSpinner = true;
        this.showImagesPanel = true;
        this.images = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append('Api-Key', this.gettyCredentials.apiKey);
        this.http.get('https://api.gettyimages.com/v3/search/images/creative?phrase=coffee', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            self.showSpinner = false;
            for (var i = 0; i < 10; i++) {
                self.images[i] = data.images[i];
            }
        }, function (err) {
            console.log("ERROR!: ", err);
        });
    };
    return ConceptModalPage;
}());
ConceptModalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-concept-modal',template:/*ion-inline-start:"/Users/andreab/Documents/workspace/ionic-webby/src/pages/concept-modal/concept-modal.html"*/'<!--\n  Generated template for the ConceptModalPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Add a new concept to {{parentConcept}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<ion-item>\n	 <ion-label floating>Concept</ion-label>\n	 <ion-input (input)="onInput($event)"\n	 [(ngModel)]=\'label\'></ion-input>\n </ion-item>\n <ion-item>\n\n <ion-grid>\n	 <ion-row>\n		 <ion-spinner text-center name="bubbles" *ngIf=showSpinner></ion-spinner>\n		 <ion-col col-33 *ngFor="let img of images">\n			 <button ion-button clear>\n				 <img src="{{img.display_sizes[0].uri}}" >\n			 </button>\n			</ion-col>\n	 </ion-row>\n </ion-grid>\n\n</ion-item>\n	<button ion-button block outline (click)=\'dismiss( )\'>Add</button>\n</ion-content>\n'/*ion-inline-end:"/Users/andreab/Documents/workspace/ionic-webby/src/pages/concept-modal/concept-modal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
], ConceptModalPage);

//# sourceMappingURL=concept-modal.js.map

/***/ }),

/***/ 199:
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
webpackEmptyAsyncContext.id = 199;

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/concept-modal/concept-modal.module": [
		727,
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
webpackAsyncContext.id = 241;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__concept_modal_concept_modal__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_d3__ = __webpack_require__(436);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//import GoogleImages from 'google-images'

var HomePage = (function () {
    function HomePage(navCtrl, platform, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.CSE_ID = '013227838598498082779:afpoqf-u6cu';
        this.API_KEY = 'AIzaSyA-SAyJyU4_Qg0BxNKEM0-Ec6iRsDNf7NM';
        this.gettyCredentials = {
            apiKey: "5zf3zt29mkfvjecece6kks2g",
            apiSecret: "uwWNXw2u2h77HFgQKxtmZNuFdSSKpcHp5R7zqh6V7FG28",
            username: "andrea.bellucci",
            password: "xxxxxxxxxxxxxxx"
        };
        this.ROOT_NODE_RADIUS = 100;
        this.margin = { top: 20, right: 20, bottom: 30, left: 50 };
        this.graph = {
            "nodes": [],
            "links": [],
        };
        this.images = [];
        this.showSpinner = false;
        this.showImagesPanel = false;
        this.concept = "";
        this.cnt = 1;
        this.group = 1;
        this.zoom = __WEBPACK_IMPORTED_MODULE_5_d3__["k" /* zoom */]()
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
    HomePage.prototype.selectImage = function (ev) {
        console.log(ev);
    };
    HomePage.prototype.onInput = function () {
        if (this.concept === "") {
            this.images = [];
            this.showImagesPanel = false;
            return;
        }
        this.searchImages();
    };
    ;
    /*handleFile( ev ){
        var file = ev.srcElement.files[0];
        console.log(file);
        var img = document.createElement("img");
            img.classList.add("obj");
            img.file = file;
            document.getElementById("addedImage").style.visibility = "visible";
            document.getElementById("addedImage").appendChild(img);
             var reader = new FileReader();
             reader.onload = (function(aImg) { return function(e) { aImg.src = e.target.result; }; })(img);
             reader.readAsDataURL(file);
    };
    */
    HomePage.prototype.searchImages = function () {
        var self = this;
        this.showSpinner = true;
        this.showImagesPanel = true;
        this.images = [];
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* Headers */]();
        headers.append('Api-Key', this.gettyCredentials.apiKey);
        this.http.get('https://api.gettyimages.com/v3/search/images/creative?phrase=coffee', { headers: headers })
            .map(function (res) { return res.json(); })
            .subscribe(function (data) {
            console.log(data);
            self.showSpinner = false;
            for (var i = 0; i < 10; i++) {
                self.images[i] = data.images[i];
            }
        }, function (err) {
            console.log("ERROR!: ", err);
        });
        /*for(var i = 0; i < 10; i++){
            self.images[i] = {thumbnail: { url: 'https://c1.staticflickr.com/9/8287/29517736620_3184b66ec8.jpg'}}
        }
        self.showSpinner = false;
        */
        /*
              this.googleSearchClient.search( this.concept )
              .then(images => {
                        self.showSpinner = false;
                self.images = images;
              })
                    .catch(err => {
                        self.showSpinner = false;
                        self.showImagesPanel = true;
                        for(var i = 0; i < 10; i++){
                            self.images[i] = {thumbnail: { url: 'https://c1.staticflickr.com/9/8287/29517736620_3184b66ec8.jpg'}}
                        }
        
                    });
              */
    };
    HomePage.prototype.startWeb = function (event) {
        this.showImagesPanel = false;
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
            .attr("y", 0)
            .attr("xlink:href", event.srcElement.src)
            .attr("width", this.ROOT_NODE_RADIUS * 2)
            .attr("height", this.ROOT_NODE_RADIUS * 2)
            .attr("preserveAspectRatio", "xMidYMid slice");
        // build the arrow.
        this.graph.nodes = [];
        this.graph.links = [];
        this.simulation = __WEBPACK_IMPORTED_MODULE_5_d3__["g" /* forceSimulation */]()
            .force("link", __WEBPACK_IMPORTED_MODULE_5_d3__["e" /* forceLink */]().id(function (d) { return d.id; }).distance(this.ROOT_NODE_RADIUS * 2).strength(1))
            .force("charge", __WEBPACK_IMPORTED_MODULE_5_d3__["f" /* forceManyBody */]())
            .force("collision", __WEBPACK_IMPORTED_MODULE_5_d3__["d" /* forceCollide */](this.ROOT_NODE_RADIUS * 2))
            .force("center", __WEBPACK_IMPORTED_MODULE_5_d3__["c" /* forceCenter */]((this.width / 2) + this.ROOT_NODE_RADIUS * 2, (this.height / 2) + this.ROOT_NODE_RADIUS * 2));
        this.graph.nodes[0] = {
            "id": 0,
            "label": this.concept,
            "img_url": event.srcElement.src,
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
            .selectAll("circle")
            .data(this.graph.nodes)
            .enter().append("circle")
            .attr("r", this.ROOT_NODE_RADIUS)
            .attr("cx", this.ROOT_NODE_RADIUS)
            .attr("cy", this.ROOT_NODE_RADIUS)
            .style("fill", "url(#fill-0)")
            .style("stroke-width", 3)
            .call(__WEBPACK_IMPORTED_MODULE_5_d3__["a" /* drag */]()
            .on("start", this.dragstarted.bind(this))
            .on("drag", this.dragged.bind(this))
            .on("end", this.dragended.bind(this)))
            .on('click', this.clicked.bind(this));
        this.text = this.svg.append("g").attr("class", "labels").selectAll("g")
            .data(this.graph.nodes)
            .enter()
            .append("text")
            .attr("y", -this.ROOT_NODE_RADIUS - 5)
            .attr("x", 0)
            .style("text-anchor", function (d) { return "middle"; })
            .text(function (d) { return d.label; });
        this.simulation
            .nodes(this.graph.nodes)
            .on("tick", this.ticked.bind(this));
        this.simulation.force("link")
            .links(this.graph.links);
    };
    HomePage.prototype.dragstarted = function (d) {
        __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].sourceEvent.stopPropagation();
        if (d.id === 0)
            return;
        if (!__WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].active)
            this.simulation.alphaTarget(0.3).restart();
        d.fx = d.x;
        d.fy = d.y;
    };
    HomePage.prototype.dragged = function (d) {
        if (d.id === 0)
            return;
        d.fx = __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].x;
        d.fy = __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].y;
    };
    HomePage.prototype.dragended = function (d) {
        __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].sourceEvent.stopPropagation();
        if (d.id === 0)
            return;
        if (!__WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].active)
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
            return "translate(" + (d.id === 0 ? d.x - _this.ROOT_NODE_RADIUS : d.x - (_this.ROOT_NODE_RADIUS / 2)) + ","
                + (d.id === 0 ? d.y - _this.ROOT_NODE_RADIUS : d.y - (_this.ROOT_NODE_RADIUS / 2)) + ")";
        });
        this.text
            .attr("transform", function (d) { return "translate(" + (d.x) + "," + (d.y) + ")"; });
    };
    HomePage.prototype.clicked = function (d) {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].defaultPrevented)
            return;
        var modal = this.modalCtrl
            .create(__WEBPACK_IMPORTED_MODULE_2__concept_modal_concept_modal__["a" /* ConceptModalPage */], { parentConcept: this.concept });
        modal.onDidDismiss(function (data) {
            //console.log(data);
            if (data == null)
                return;
            if (d.group === 1)
                _this.group++;
            var n = { id: "" + _this.cnt++,
                group: d.group === 1 ? _this.group : d.group,
                label: data.label,
                img_url: data.img_url };
            _this.graph.nodes.push(n);
            _this.graph.links.push({ source: d.id, target: n.id, group: n.group });
            _this.svg.select("defs")
                .append("svg:pattern")
                .attr("id", "fill-" + n.id)
                .attr("width", _this.ROOT_NODE_RADIUS)
                .attr("height", _this.ROOT_NODE_RADIUS)
                .attr("patternUnits", "userSpaceOnUse")
                .append("svg:image")
                .attr("x", 0)
                .attr("y", 0)
                .attr("xlink:href", n.img_url)
                .attr("width", _this.ROOT_NODE_RADIUS)
                .attr("height", _this.ROOT_NODE_RADIUS)
                .attr("preserveAspectRatio", "xMidYMid slice");
            _this.svg.select('defs')
                .append('marker')
                .attr('id', 'arrowhead-' + n.id)
                .attr('viewBox', '-0 -5 10 10')
                .attr('refX', 24)
                .attr('refY', 0)
                .attr('orient', 'auto')
                .attr('markerWidth', 12)
                .attr('markerHeight', 12)
                .attr('xoverflow', 'visible')
                .append('svg:path')
                .attr('d', 'M 0,-5 L 10 ,0 L 0,5')
                .attr('fill', _this.color(n.group))
                .style('stroke', 'none');
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
        var self = this;
        this.link = this.link.data(this.graph.links, function (d) { return d.source.id + "-" + d.target.id; });
        this.link.exit().remove();
        this.link = this.link.enter()
            .append("line")
            .style("stroke", function (d) { return self.color(d.group); })
            .style("stroke-width", 3)
            .attr("class", "link")
            .attr('marker-end', function (d) { return 'url(#arrowhead-' + d.target + ')'; }).merge(this.link);
        this.node = this.node.data(this.graph.nodes, function (d) { return d.id; });
        this.node.exit().remove();
        this.node = this.node.enter()
            .append("circle")
            .style("fill", function (d) { return "url(#fill-" + d.id + ")"; })
            .style("stroke", function (d) { return self.color(d.group); })
            .style("stroke-width", 3)
            .attr("cx", function (d) { return (d.id === 0) ? self.ROOT_NODE_RADIUS : self.ROOT_NODE_RADIUS / 2; })
            .attr("cy", function (d) { return (d.id === 0) ? self.ROOT_NODE_RADIUS : self.ROOT_NODE_RADIUS / 2; })
            .attr("r", function (d) { return (d.id === 0) ? self.ROOT_NODE_RADIUS : self.ROOT_NODE_RADIUS / 2; }).merge(this.node)
            .call(__WEBPACK_IMPORTED_MODULE_5_d3__["a" /* drag */]()
            .on("start", this.dragstarted.bind(this))
            .on("drag", this.dragged.bind(this))
            .on("end", this.dragended.bind(this)))
            .on('click', this.clicked.bind(this));
        //.on('dblclick', this.dblclicked.bind(this));
        this.text = this.text.data(this.graph.nodes, function (d) { return d.label; });
        this.text.exit().remove();
        this.text = this.text.enter()
            .append("text").merge(this.text)
            .attr("y", function (d) { return (d.id === 0) ? -self.ROOT_NODE_RADIUS - 5 : -(self.ROOT_NODE_RADIUS / 2) - 5; })
            .attr("x", 0)
            .style("text-anchor", "middle")
            .text(function (d) { return d.label; });
        // Update and restart the simulation.
        this.simulation.nodes(this.graph.nodes);
        this.simulation.force("link").links(this.graph.links);
        this.simulation.alpha(1).restart();
    };
    HomePage.prototype.initSvg = function () {
        this.color = __WEBPACK_IMPORTED_MODULE_5_d3__["h" /* scaleOrdinal */](__WEBPACK_IMPORTED_MODULE_5_d3__["i" /* schemeCategory20 */]);
        this.svg = __WEBPACK_IMPORTED_MODULE_5_d3__["j" /* select */]("#concept-web").append("svg")
            .attr("width", this.width)
            .attr("height", this.height);
        this.svg.call(this.zoom);
    };
    HomePage.prototype.zoomed = function () {
        this.svg.selectAll('g').attr('transform', __WEBPACK_IMPORTED_MODULE_5_d3__["b" /* event */].transform);
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
        //.call(zoom.transform, transform);
        //.on("end", function() { canvas.call(transition); });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/andreab/Documents/workspace/ionic-webby/src/pages/home/home.html"*/'<ion-header>\n  <ion-toolbar>\n    <!--<ion-item>\n      <ion-label color="primary"> Concept </ion-label>\n       <ion-input placeholder="Type your concept" [value]="concept" [(ngModel)]="concept" ></ion-input>\n    </ion-item>\n    <button ion-button (click)="searchImages()" >start</button>\n		-->\n		<!--<ion-searchbar\n  		[(ngModel)]="concept"\n  		[showCancelButton]="shouldShowCancel"\n  		(ionInput)="onInput($event)"\n  		(ionCancel)="onCancel($event)">\n		</ion-searchbar>-->\n		<ion-item>\n		 <!--<ion-label floating>Concept</ion-label>-->\n		 <ion-input (input)="onInput($event)"\n		 [(ngModel)]=\'concept\'\n		 placeholder="Insert a concept to start..."></ion-input>\n	 </ion-item>\n		<!--<button ion-button (click)="startWeb()" >start web!</button>-->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content text-center>\n\n		<button ion-button id="zoom-in" outline (click)="zoomIn($event)">\n			<ion-icon name="add"></ion-icon>\n		</button>\n\n\n	<button ion-button id="zoom-out" outline (click)="zoomOut($event)">\n		<ion-icon name="remove"></ion-icon>\n	</button>\n\n\n  <div id="image-pane" *ngIf=showImagesPanel>\n\n\n    <ion-grid>\n      <ion-row>\n\n					<!--	<div ion-button outline>\n						<ion-icon name="add"></ion-icon>\n 						<input class="file-upload" type="file"\n						accept=".png, .jpg, .jpeg" (change)="handleFile( $event )">\n					</div>\n				-->\n					<!--\n\n					<button ion-button clear icon-only>\n						<ion-icon name="add"></ion-icon>\n					</button>\n\n					-->\n					<ion-spinner text-center name="bubbles" *ngIf=showSpinner></ion-spinner>\n\n				<!--<ion-col id="addedImage"></ion-col>-->\n\n        <ion-col col-33 *ngFor="let img of images">\n					<button ion-button clear>\n				 		<img src="{{img.display_sizes[0].uri}}" (click)="startWeb( $event )" >\n					</button>\n         </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <div id="concept-web"></div>\n</ion-content>\n'/*ion-inline-end:"/Users/andreab/Documents/workspace/ionic-webby/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Http */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(386);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__ = __webpack_require__(190);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__["a" /* ConceptModalPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/concept-modal/concept-modal.module#ConceptModalPageModule', name: 'ConceptModalPage', segment: 'concept-modal', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_concept_modal_concept_modal__["a" /* ConceptModalPage */]
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

/***/ 434:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(285);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/andreab/Documents/workspace/ionic-webby/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/andreab/Documents/workspace/ionic-webby/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[367]);
//# sourceMappingURL=main.js.map
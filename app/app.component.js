"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var nav_service_1 = require('./nav.service');
var AppComponent = (function () {
    function AppComponent(navService) {
        this.navService = navService;
        this.message = navService.navMessage;
    }
    AppComponent.prototype.clicked = function () {
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'body',
            templateUrl: 'partials/app.html',
            styleUrls: ['css/style.css'],
            providers: [nav_service_1.NavService]
        }), 
        __metadata('design:paramtypes', [nav_service_1.NavService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
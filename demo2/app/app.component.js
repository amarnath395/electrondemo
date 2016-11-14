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
var AppComponent = (function () {
    function AppComponent() {
        this.products = [{
                "program": "Standard Mixing Warehouse",
                "payer": "TRU",
                "ponumber": "SA72442016",
                "status": "Complete",
                "total": "32,374.21",
                "coop": "174.16",
                "sap": "126984",
                "storename": "TRUE VALUE HARDWARE 042309",
                "city": "COLUMBIA",
                "state": "AL"
            },
            {
                "program": "Annualized Growing Media",
                "payer": "TRU",
                "ponumber": "SA72442016",
                "status": "Complete",
                "total": "32,374.21",
                "coop": "174.16",
                "sap": "126984",
                "storename": "TRUE VALUE HARDWARE 042309",
                "city": "COLUMBIA",
                "state": "AL"
            },
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'pm-app',
            templateUrl: 'app/orders/orders-new.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
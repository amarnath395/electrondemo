import { Component } from '@angular/core';

@Component({
    selector: 'pm-app',
    templateUrl: 'app/orders/orders-new.component.html'
})
export class AppComponent {
	products: any[] = [{
							"program" : "Standard Mixing Warehouse",
							"payer" : "TRU",
							"ponumber" : "SA72442016",
						 	"status" : "Complete",
						 	"total" : "32,374.21",
						 	"coop" : "174.16",
						 	"sap" : "126984",
						 	"storename" : "TRUE VALUE HARDWARE 042309",
						 	"city" : "COLUMBIA",
						 	"state" : "AL"

						},
						{
							"program" : "Annualized Growing Media",
							"payer" : "TRU",
							"ponumber" : "SA72442016",
						 	"status" : "Complete",
						 	"total" : "32,374.21",
						 	"coop" : "174.16",
						 	"sap" : "126984",
						 	"storename" : "TRUE VALUE HARDWARE 042309",
						 	"city" : "COLUMBIA",
						 	"state" : "AL"

						},
						];
}

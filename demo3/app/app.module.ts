import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { OrdersProgramComponent }  from './orders/orders-programs.component';
import { OrdersSavelaterComponent }  from './orders/orders-savelater.component';

@NgModule({
  imports: [ BrowserModule, 
    NgbModule.forRoot(),
    HttpModule,
    RouterModule.forRoot([
      { path: 'order', component : OrdersProgramComponent},
      { path: 'savelater', component : OrdersSavelaterComponent},
      { path: '', redirectTo: 'order', pathMatch: 'full' },
      { path: '**', redirectTo: 'order', pathMatch: 'full' }
    ]) ],
  declarations: [ AppComponent, OrdersProgramComponent, OrdersSavelaterComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaymnetDetailsComponent } from './payment-details/paymnet-details.component';
import { PaymentDetailFormComponent } from './paymnet-details/payment-detail-form/payment-detail-form.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymnetDetailsComponent,
    PaymentDetailFormComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

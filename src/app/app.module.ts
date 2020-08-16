import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerInfoComponent } from './customer-info/customer-info.component';
import { HeaderComponent } from './header/header.component';
import { ThankCustomerComponent } from './thank-customer/thank-customer.component';
import { AmountPaidComponent } from './amount-paid/amount-paid.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerInfoComponent,
    HeaderComponent,
    ThankCustomerComponent,
    AmountPaidComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

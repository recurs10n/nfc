import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { InvestmentService } from './services/investment.service';
import { InvestmentsComponent } from './components/investments/investments.component';
import { BannerComponent } from './components/banner/banner.component';
import { OptionsComponent } from './components/options/options.component';
import { MaterialModule } from './shared/material.module';


@NgModule({
  declarations: [
    AppComponent,
    InvestmentsComponent,
    BannerComponent,
    OptionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [InvestmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }

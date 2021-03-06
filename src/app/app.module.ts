import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { adminLteConf } from './admin-lte.conf';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { LayoutModule } from 'angular-admin-lte';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
import { NgxCurrencyModule } from "ngx-currency";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextMaskModule } from 'angular2-text-mask';
import {PopoverModule} from "ngx-popover";


import { LoadingPageModule, MaterialBarModule } from 'angular-loading-page';
import { SairComponent } from './sair/sair.component';

@NgModule({
  imports: [
    PopoverModule,
    TextMaskModule,
    NgxCurrencyModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule, ReactiveFormsModule,
    CoreModule,
    AccordionModule,
    LayoutModule.forRoot(adminLteConf),
    LoadingPageModule, MaterialBarModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SairComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

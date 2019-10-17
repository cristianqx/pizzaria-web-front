import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxCurrencyModule } from "ngx-currency";

import { ProdutosRoutingModule } from './produtos-routing.module';

import { BoxModule } from 'angular-admin-lte';
import { ProdutosComponent } from './produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

export const customCurrencyMaskConfig = {
  align: "right",
  allowNegative: true,
  allowZero: true,
  decimal: ",",
  precision: 2,
  prefix: "R$ ",
  suffix: "",
  thousands: ".",
  nullable: true
};

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  declarations: [ProdutosComponent]
})
export class ProdutosModule { }

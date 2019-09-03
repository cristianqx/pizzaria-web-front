import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceiroRoutingModule } from './financeiro-routing.module';
import { FinanceiroComponent } from './financeiro.component';

@NgModule({
  imports: [
    CommonModule,
    FinanceiroRoutingModule
  ],
  declarations: [FinanceiroComponent]
})
export class FinanceiroModule { }

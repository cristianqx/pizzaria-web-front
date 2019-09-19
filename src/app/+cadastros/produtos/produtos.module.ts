import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { BoxModule } from 'angular-admin-lte';
import { ProdutosComponent } from './produtos.component';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    BoxModule
  ],
  declarations: [ProdutosComponent]
})
export class ProdutosModule { }

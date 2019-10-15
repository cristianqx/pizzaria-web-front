import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutosRoutingModule } from './produtos-routing.module';

import { BoxModule } from 'angular-admin-lte';
import { ProdutosComponent } from './produtos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [ProdutosComponent]
})
export class ProdutosModule { }

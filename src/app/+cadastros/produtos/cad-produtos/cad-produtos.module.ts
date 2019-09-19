import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoxModule } from 'angular-admin-lte';
import { CadastroProdutosComponent } from './cad-produtos.component';
import { CadastroProdutosRoutingModule } from './cad-produtos-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CadastroProdutosRoutingModule,
    BoxModule
  ],
  declarations: [CadastroProdutosComponent]
})
export class CadastroProdutosModule { }

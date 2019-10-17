import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { BoxModule } from 'angular-admin-lte';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PedidosComponent } from './pedidos.component';

@NgModule({
  declarations: [PedidosComponent],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
  ]
})
export class PedidosModule { }

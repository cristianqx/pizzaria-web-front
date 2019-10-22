import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListaPedidosRoutingModule } from './lista-pedidos-routing.module';
import { ListaPedidosComponent } from './lista-pedidos.component';
import { BoxModule } from 'angular-admin-lte';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-popover';

@NgModule({
  declarations: [ListaPedidosComponent],
  imports: [
    CommonModule,
    ListaPedidosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
    PopoverModule
  ]
})
export class ListaPedidosModule { }

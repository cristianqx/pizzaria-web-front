import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaPedidosComponent } from './lista-pedidos.component';

const routes: Routes = [
  {
    path: '',
    component: ListaPedidosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListaPedidosRoutingModule { }

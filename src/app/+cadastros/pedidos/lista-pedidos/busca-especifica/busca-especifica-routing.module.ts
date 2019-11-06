import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscaEspecificaComponent } from './busca-especifica.component';

const routes: Routes = [{
  path : '',
  component : BuscaEspecificaComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuscaEspecificaRoutingModule { }

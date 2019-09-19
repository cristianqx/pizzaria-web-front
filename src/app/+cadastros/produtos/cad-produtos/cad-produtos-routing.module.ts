import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroProdutosComponent } from './cad-produtos.component';



const routes: Routes = [{
  path: '',
  component: CadastroProdutosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CadastroProdutosRoutingModule { }

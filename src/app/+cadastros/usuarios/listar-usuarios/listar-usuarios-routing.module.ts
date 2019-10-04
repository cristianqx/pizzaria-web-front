import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListarUsuariosComponent } from './listar-usuarios.component';

const routes: Routes = [{
  path: '',
  component: ListarUsuariosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListarUsuariosRoutingModule { }

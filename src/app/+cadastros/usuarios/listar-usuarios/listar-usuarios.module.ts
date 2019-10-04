import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListarUsuariosRoutingModule } from './listar-usuarios-routing.module';
import { ListarUsuariosComponent } from './listar-usuarios.component';
import { BoxModule } from 'angular-admin-lte';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListarUsuariosComponent],
  imports: [
    CommonModule,
    BoxModule,
    ListarUsuariosRoutingModule,
    ReactiveFormsModule, FormsModule

  ]
})
export class ListarUsuariosModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

import { BoxModule } from 'angular-admin-lte';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    BoxModule
  ],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }

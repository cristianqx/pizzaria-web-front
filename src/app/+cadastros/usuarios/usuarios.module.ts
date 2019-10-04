import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

import { BoxModule } from 'angular-admin-lte';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
  ],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }

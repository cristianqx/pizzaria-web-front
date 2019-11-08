import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuariosRoutingModule } from './usuarios-routing.module';
import { UsuariosComponent } from './usuarios.component';

import { BoxModule } from 'angular-admin-lte';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
  imports: [
    CommonModule,
    UsuariosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
    TextMaskModule
  ],
  declarations: [UsuariosComponent]
})
export class UsuariosModule { }

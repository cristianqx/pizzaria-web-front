import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeusDadosRoutingModule } from './meus-dados-routing.module';
import { MeusDadosComponent } from './meus-dados.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BoxModule } from 'angular-admin-lte';


@NgModule({
  declarations: [MeusDadosComponent],
  imports: [
    CommonModule,
    MeusDadosRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
  ]
})
export class MeusDadosModule { }

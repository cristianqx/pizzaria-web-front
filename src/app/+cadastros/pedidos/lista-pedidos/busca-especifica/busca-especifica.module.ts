import { NgModule } from '@angular/core';
import { BuscaEspecificaComponent } from './busca-especifica.component';
import { CommonModule } from '@angular/common';
import { BuscaEspecificaRoutingModule } from './busca-especifica-routing.module';
import { BoxModule } from 'angular-admin-lte';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PopoverModule } from 'ngx-popover';

@NgModule({
  declarations: [BuscaEspecificaComponent],
  imports: [
    CommonModule,
    BuscaEspecificaRoutingModule,
    BoxModule,
    FormsModule, ReactiveFormsModule,
    PopoverModule
  ]
})
export class BuscaEspecificaModule { }

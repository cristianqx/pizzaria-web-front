import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'angular-admin-lte';
import { NOME_EMPRESA, NOME_SISTEMA, VERSAO, SITE_EMPRESA } from './application-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  public customLayout: boolean;
  public nomeEmpresa: string;
  public siteEmpresa: string;
  public nomeSistema: string;
  public versaoSistema: string;
  public anoAtual: any;
  
  constructor(
    private layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.nomeEmpresa = NOME_EMPRESA;
    this.siteEmpresa = SITE_EMPRESA;
    this.nomeSistema = NOME_SISTEMA;
    this.versaoSistema = VERSAO;
    this.anoAtual = new Date().getFullYear();

     
    this.layoutService.isCustomLayout.subscribe((value: boolean) => {
      this.customLayout = value;
    });
  }
}

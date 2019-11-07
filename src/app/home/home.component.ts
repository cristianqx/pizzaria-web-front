import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as Prism from 'prismjs';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  public dashboardAdm: boolean = false;
  public dashboardBalconista: boolean = false;


  constructor(private authenticationService: AuthenticationService,
              private router : Router){}

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit(){

    let _codigoPerfil : number = 0;

    _codigoPerfil = this.authenticationService.codigoPerfilUsuarioLogado;
    
    if(_codigoPerfil == 1){
      this.dashboardAdm = true;
    }
    if(_codigoPerfil == 2){
      this.dashboardBalconista = true;
    }
  }

  listarPedidosByStatus(idStatusPedido) {
    this.router.navigate(['/cadastros/busca-especifica'], { queryParams: { idPed: idStatusPedido } });
  }

  cadastrarPedido() {
    this.router.navigate(['/cadastros/pedidos']);
  }
  
}

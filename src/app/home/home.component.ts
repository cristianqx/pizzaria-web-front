import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as Prism from 'prismjs';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { PedidoService } from '../service/pedido.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnInit {

  public dashboardAdm: boolean = false;
  public dashboardBalconista: boolean = false;

  public pedidosEmAberto : any;
  public pedidosEmAndamento : any;
  public pedidosFinalizado : any;

  public tipoStatus : any;
  public idStatusPedido;

  constructor(private authenticationService: AuthenticationService,
              private router : Router,
              private pedidoService : PedidoService){}

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

    this.listarQtdPedidosEmAberto();
    this.listarQtdPedidosEmAndamento();
    this.listarQtdPedidosFinalizados();
  }

  listarPedidosByStatus(idStatusPedido) {
    this.router.navigate(['/cadastros/busca-especifica'], { queryParams: { idStatusPed: idStatusPedido } });
  }

  cadastrarPedido() {
    this.router.navigate(['/cadastros/pedidos']);
  }

  
  listarQtdPedidosEmAberto() {
    this.pedidoService.obterQtdPedidosPorStatus(1).subscribe(retorno => {
      this.pedidosEmAberto = retorno;
    });
  }

  listarQtdPedidosEmAndamento() {
    this.pedidoService.obterQtdPedidosPorStatus(2).subscribe(retorno => {
      this.pedidosEmAndamento = retorno;
    });
  }

  listarQtdPedidosFinalizados() {
    this.pedidoService.obterQtdPedidosPorStatus(3).subscribe(retorno => {
      this.pedidosFinalizado = retorno;
    });
  }
  

}

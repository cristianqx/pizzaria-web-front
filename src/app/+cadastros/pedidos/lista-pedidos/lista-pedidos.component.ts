import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { PedidoService } from 'src/app/service/pedido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-pedidos',
  templateUrl: './lista-pedidos.component.html',
  styleUrls: ['./lista-pedidos.component.css']
})
export class ListaPedidosComponent implements OnInit {

  pedidos: Observable<PedidoResource[]>
  pedido: PedidoResource[];
  idPedidoEdicao: any;


  constructor(private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit() {
    this.obterPedidos();
  }

  obterPedidos() {
    this.pedidos = this.pedidoService.listarPedidos();
  }

  editarPedido(idPedido: number) {

    //-->  FALTA IMPLEMENTAR REGRA PARA BLOQUEAR EDICAO CASO O STATUS SEJA DIFERENTE DE 1.
    this.router.navigate(['cadastros/pedidos'], { queryParams: { idPed: idPedido } });
    return false;

  }
}

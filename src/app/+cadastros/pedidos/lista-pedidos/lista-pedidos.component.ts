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

  pedidos : Observable<PedidoResource[]>
  pedido: PedidoResource[];
  

  constructor(private pedidoService : PedidoService,
              private router: Router) { }

  ngOnInit() {
    this.obterPedidos();
    console.log(JSON.stringify(this.pedidos));
  }

  obterPedidos() {
    this.pedidos = this.pedidoService.listarPedidos();
  }

  editarPedido(idPedido: number) {
    this.router.navigate(['cadastros/pedidos'], { queryParams: { idPed: idPedido } });
    return false;
  }

}

import { Component, OnInit } from '@angular/core';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { PedidoService } from 'src/app/service/pedido.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-busca-especifica',
  templateUrl: './busca-especifica.component.html',
  styleUrls: ['./busca-especifica.component.css']
})
export class BuscaEspecificaComponent implements OnInit {


  pedidos : Observable<PedidoResource[]>
  pedido: PedidoResource[];
  idStatusPedido : number;
  verificaStatus = true;
  constructor(private pedidoService : PedidoService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {

    this.idStatusPedido = this.route.snapshot.queryParams['idPed'];
    this.obterPedidos(this.idStatusPedido);

    if(this.idStatusPedido != 1) {
      this.verificaStatus = true;
    } else {
      this.verificaStatus = false;
    }
  }

  obterPedidos(idTipoPedido) {
    this.pedidos = this.pedidoService.obterPedidosByStatus(idTipoPedido);
  }

  editarPedido(idPedido: number) {

    //-->  FALTA IMPLEMENTAR REGRA PARA BLOQUEAR EDICAO CASO O STATUS SEJA DIFERENTE DE 1.
    this.router.navigate(['cadastros/pedidos'], { queryParams: { idPed: idPedido } });
    return false;
  }
}

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
  pedidoRetorno : Observable<PedidoResource[]>
  idStatusPedido : number;
  verificaStatus = true;
  loading: boolean;
  isSubmited: boolean;
  constructor(private pedidoService : PedidoService,
    private router: Router,
    private route : ActivatedRoute) { }

  ngOnInit() {

    this.obterListaPedidos();
    this.idStatusPedido = this.route.snapshot.queryParams['idStatusPed'];
    this.obterPedidos(this.idStatusPedido);
 

    if(this.idStatusPedido != 1) {
      this.verificaStatus = true;
    } else {
      this.verificaStatus = false;
    }
  }

  obterListaPedidos() {
    this.pedidoRetorno = this.pedidoService.listarPedidos();
  }


  obterPedidos(idTipoPedido) {
    this.pedidos = this.pedidoService.obterPedidosByStatus(idTipoPedido);
  }

  editarPedido(idPedido: number) {
    this.router.navigate(['cadastros/pedidos'], { queryParams: { idPed: idPedido } });
    return false;
  }

  refresh(): void {
    window.location.reload();
  }

  excluirPedido(pedido : PedidoResource): void  {
    this.isSubmited = true;
    this.loading = true;

    if(confirm('Dejeja excluir o pedido: ' + pedido.id + '?')){
      this.pedidoService.deletarPedido(pedido.id)
        .subscribe(data => {
          this.pedido = this.pedido.filter(p => p !== pedido);
        })
     };

     setTimeout(() => {
      this.loading = false;
      this.isSubmited = false;
      this.refresh();
    }, 700);


  }
}

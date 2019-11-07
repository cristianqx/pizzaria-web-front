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
  loading: boolean;
  isSubmited: boolean;


  constructor(private pedidoService: PedidoService,
    private router: Router) { }

  ngOnInit() {
    this.obterPedidos();
  }

  obterPedidos() {
    this.pedidos = this.pedidoService.listarPedidos();
  }

  editarPedido(idPedido : number) {
    this.router.navigate(['cadastros/pedidos'], { queryParams: { idPed: idPedido } });
    return false;
  }

  refresh(): void {
    window.location.reload();
  }

  excluirPedido(pedido : PedidoResource): void  {
    this.loading = true;
    this.isSubmited = true;

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

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PedidoResource } from 'src/app/model/pedido-resource';
import { PedidoService } from 'src/app/service/pedido.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioResource } from 'src/app/model/usuario-resource';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { ProdutoResource } from 'src/app/model/produto-resource';
import { Observable } from 'rxjs';
import { ProdutoService } from 'src/app/service/produto.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidoForm : FormGroup;
  usuarioLogado : UsuarioResource;
  pedido: PedidoResource = new PedidoResource();
  produto : Observable<ProdutoResource[]>;
  isSubmited = false;
  loading = false;

  idPedidoEdicao : number;
  filtroProdutos: any[];

  constructor(private pedidoService : PedidoService,
              private router: Router,
              private formBuilder : FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private produtoService: ProdutoService) { 

                this.usuarioLogado = this.authService.currentUserValue;
  }

                   
  ngOnInit() {

    this.usuarioLogado = this.authService.currentUserValue;

    this.produto = this.produtoService.obterProdutos();

    this.pedidoForm = this.formBuilder.group({
      quantidade: ['', [Validators.required]],
      produto : '',
      valorUnitario : ['', [Validators.required]],
      precoTotal: ['', [Validators.required]],
      observacao: '',
      tipoStatus : ['', [Validators.required]],
      usuario: ['', [Validators.required]]
    });

    this.idPedidoEdicao = this.route.snapshot.queryParams['idPed'];

    if(this.idPedidoEdicao != undefined) {
      this.pedidoService.obterPedido(this.idPedidoEdicao).subscribe(
        pedidoRetornado => {
          this.pedidoForm.controls['quantidade'].setValue(pedidoRetornado.quantidade);
          this.pedidoForm.controls['produto'].setValue(pedidoRetornado.produto.valor);
          this.pedidoForm.controls['precoTotal'].setValue(pedidoRetornado.precoTotal);
          this.pedidoForm.controls['observacao'].setValue(pedidoRetornado.observacao);
          this.pedidoForm.controls['tipoStatus'].setValue(pedidoRetornado.tipoStatus.id);
          this.pedidoForm.controls['usuario'].setValue(pedidoRetornado.usuario.id);
        })
    }
  }

  get formControls() {
    return this.pedidoForm.controls;
  }


  getValorProdutoSelecionado() {
  
    this.pedidoForm.controls['valorUnitario'].valueChanges.subscribe(
      data => {
      console.log('Data: ' + data);
      }
    ); 
    /*
    this.produtoService.obterProdutos().subscribe(
      data => {this.filtroProdutos = [];
      for (let key in data) {
        this.pedidoForm.controls['valorUnitario'].value(this.filtroProdutos.push(data[key].valorUnitario));
      }
    }
  );
  */
}
  manterPedido() {
    this.isSubmited = true;

      this.loading = true;

      this.pedido.id = this.idPedidoEdicao;

      this.pedidoService.manterPedido(this.pedido);

      setTimeout(() => {
        this.loading = false;
        this.isSubmited = false;
        this.router.navigate(['cadastros/lista-pedidos', {"refresh": (new Date().getTime())}]);
      }, 600);
  }
}
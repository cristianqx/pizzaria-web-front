import { Component, OnInit, ElementRef, TemplateRef, ViewChild } from '@angular/core';
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
  @ViewChild('produtoInput') employeeInput: TemplateRef<any>;
  isSubmitted: boolean = false;
  pedidoForm : FormGroup;
  usuarioLogado : UsuarioResource;
  pedido: PedidoResource = new PedidoResource();
  produto : Observable<ProdutoResource[]>;
  isSubmited = false;
  loading = false;

  idPedidoEdicao : number;
  filteredArray: any[] = [];
  teste: any;
  empSelected : any;

  constructor(private pedidoService : PedidoService,
              private router: Router,
              private formBuilder : FormBuilder,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private produtoService: ProdutoService) { 
                this.usuarioLogado = this.authService.currentUserValue;

                console.clear();
  }

                   
  ngOnInit() {
    this.usuarioLogado = this.authService.currentUserValue;
    this.produto = this.produtoService.obterProdutos();

    this.pedidoForm = this.formBuilder.group({
      quantidade:  ['', [Validators.required]],
      valor : ['', [Validators.required]],
      precoTotal: ['', [Validators.required]],
      observacao: '',
      tipoStatus : ['', [Validators.required]],
      usuario: ['', [Validators.required]],
      produto : '',
    });

    this.idPedidoEdicao = this.route.snapshot.queryParams['idPed'];

    if(this.idPedidoEdicao != undefined) {
      this.pedidoService.obterPedido(this.idPedidoEdicao).subscribe(
        pedidoRetornado => {
          this.pedidoForm.controls['quantidade'].setValue(pedidoRetornado.quantidade);
          this.pedidoForm.controls['produto'].setValue(pedidoRetornado.produto);
          this.pedidoForm.controls['precoTotal'].setValue(pedidoRetornado.precoTotal);
          this.pedidoForm.controls['observacao'].setValue(pedidoRetornado.observacao);
          this.pedidoForm.controls['tipoStatus'].setValue(pedidoRetornado.tipoStatus.id);
          this.pedidoForm.controls['usuario'].setValue(pedidoRetornado.usuario.nome);
        })
    }
    
}


  get formControls() {
    return this.pedidoForm.controls;
  }

  produtoSelecionado(produto: any) {
    console.log(produto);
    this.pedidoForm.controls['valor'].setValue(produto.valor);
  }  
  
  calcularPrecoTotal() {
    let quantidade =  this.pedidoForm.controls['quantidade'].value;
    let valorUnitario = this.pedidoForm.controls['valor'].value;
    let total;

    total = (quantidade * valorUnitario);

    if(total != 'undefined') {
      this.pedidoForm.controls['precoTotal'].setValue(total);
      this.pedidoForm.controls['quantidade'].setValue(quantidade);
      this.pedidoForm.controls['valor'].setValue(valorUnitario);

    } else {
      alert("Ops! Ocorreu um erro");
    }
    console.log("Valor total: "+total);
  }

  limparFiltros() {
    this.ngOnInit();
  }

  manterPedido() {
    this.isSubmited = true;

      this.loading = true;

      this.pedido.id = this.idPedidoEdicao;

      this.pedido.tipoStatus.id = 1;

      this.pedido.usuario = this.usuarioLogado;

      this.pedido.produto = this.pedidoForm.controls['produto'].value;
      
      this.pedido.precoTotal = this.pedidoForm.controls['precoTotal'].value;

      this.pedidoForm.controls['tipoStatus'].setValue(this.pedido.tipoStatus.id);

      this.pedidoService.manterPedido(this.pedido);

      setTimeout(() => {
        this.loading = false;
        this.isSubmited = false;
        this.router.navigate(['cadastros/lista-pedidos', {"refresh": (new Date().getTime())}]);
      }, 600);
  }
}
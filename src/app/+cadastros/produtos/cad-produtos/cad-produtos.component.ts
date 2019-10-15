import { Component, AfterViewInit, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';     
import * as Prism from 'prismjs';
import { Observable } from 'rxjs';
import { ProdutoResource } from 'src/app/model/produto-resource';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cad-produtos',
  templateUrl: './cad-produtos.component.html',
  styleUrls: ['./cad-produtos.component.css']
})
export class CadastroProdutosComponent implements OnInit {
  
  produtos : Observable<ProdutoResource[]>
  produto : ProdutoResource[];

  constructor(private produtoService : ProdutoService,
              private router : Router) {}
  
  ngOnInit() {
    this.obterProdutos();
  }

  obterProdutos() {
    this.produtos = this.produtoService.obterProdutos();
  }

  editarProduto(idProduto: number) {
    this.router.navigate(['cadastros/produtos'], { queryParams: { idProd: idProduto } });
    return false;
  }

  refresh(): void {
    window.location.reload();
  }

  excluirProduto(produto: ProdutoResource): void {

    if (confirm('Deseja excluir o operador: ' + produto.nomeProduto + '?')) {
      this.produtoService.deletarProduto(produto.id)
        .subscribe(data => {
          this.produto = this.produto.filter(u => u !== produto);
        })
    };

    this.refresh();
  }
  
}

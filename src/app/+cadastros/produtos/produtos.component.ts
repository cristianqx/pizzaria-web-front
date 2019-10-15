import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProdutoResource } from 'src/app/model/produto-resource';
import { ProdutoService } from 'src/app/service/produto.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent  {

    produtoForm : FormGroup;
    produto : ProdutoResource = new ProdutoResource();
    isSubmited = false;
    loading = false;

    idProdutoEdicao : number;

    constructor(private produtoService : ProdutoService,
                private router : Router,
                private formBuilder: FormBuilder,
                private route : ActivatedRoute) {}

    ngAfterViewInit() {
    Prism.highlightAll();
  }              

  ngOnInit() {
    this.produtoForm = this.formBuilder.group({
      nomeProduto: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      tipoPizza: ''
    });

    this.idProdutoEdicao = this.route.snapshot.queryParams['idProd'];

    if(this.idProdutoEdicao != undefined) {
        
        this.produtoService.obterProduto(this.idProdutoEdicao).subscribe(
          produtoRetornado => {
            this.produtoForm.controls['nomeProduto'].setValue(produtoRetornado.nomeProduto);
            this.produtoForm.controls['valor'].setValue(produtoRetornado.valor);
            this.produtoForm.controls['tipoPizza'].setValue(produtoRetornado.tipoPizza.id);
          })
      }
  }

  get formControls() {
    return this.produtoForm.controls;
  }

  manterProduto() {
      this.isSubmited = true;

      if(this.produtoForm.invalid) {
        return;
      }

      this.loading = true;

      this.produto.id = this.idProdutoEdicao;
      this.produtoService.manterProduto(this.produto);

      setTimeout(() => {
        this.loading = false;
        this.isSubmited = false;
        this.router.navigate(['cadastros/cad-produtos', {"refresh": (new Date().getTime())}]);
      }, 600);
  }
}

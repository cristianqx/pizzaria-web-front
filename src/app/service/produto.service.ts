import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ProdutoResource } from "../model/produto-resource";
import { ENDPOINT_INSERIR_PRODUTO, DEFAULT_HTTP_OPTIONS, ENDPOINT_LISTAR_PRODUTOS, ENDPOINT_BUSCAR_PRODUTO, ENDPOINT_EXCLUIR_PRODUTO, ENDPOINT_LISTAR_QTD_PRODUTOS } from "../endpoint-constants";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class ProdutoService {

    constructor(private http: HttpClient) {}

    manterProduto(produto : ProdutoResource) : any {
        console.log("Solicitacao de cadastro de um novo produto" + produto.nomeProduto);
        this.http.put(ENDPOINT_INSERIR_PRODUTO,JSON.stringify(produto),DEFAULT_HTTP_OPTIONS)
            .subscribe(data => {
                console.log("Produto mantido com sucesso: "+ produto.nomeProduto);
                return true;
            }, error => {
                alert("Erro ao mantar o produto!");
                console.log(error);
                return false;
            });
    }

    obterProdutos() : Observable<any> {
        return this.http.get(ENDPOINT_LISTAR_PRODUTOS);
    }

    obterProduto(id: number) : Observable<any> {
        return this.http.get(ENDPOINT_BUSCAR_PRODUTO + id);
    } 

    deletarProduto(id:number) {
        return this.http.delete(ENDPOINT_EXCLUIR_PRODUTO + id);
    }

    contarProdutos() {
        return this.http.get(ENDPOINT_LISTAR_QTD_PRODUTOS);
    }
    
    tratarErro(error) {
        if(error.status = 404) {
            alert('Produto não cadastrado');
            return;
        } else {
            console.log('Ocorreu um erro não esperado. Por favor contate o suporte.');
        }
    }
}
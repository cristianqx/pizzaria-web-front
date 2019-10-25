import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { PedidoResource } from "../model/pedido-resource";
import { DEFAULT_HTTP_OPTIONS, ENDPOINT_INSERIR_PEDIDO, ENDPOINT_LISTAR_PEDIDOS, ENDPOINT_BUSCAR_PEDIDO } from "../endpoint-constants";
import { Observable } from "rxjs";

@Injectable({
    providedIn : 'root'
})
export class PedidoService {
    
    constructor(private http: HttpClient) {}

    manterPedido(pedido: PedidoResource) : any {
        console.log("Solicitacao de cadastro de um novo pedido, número: " + pedido.id);
        this.http.put(ENDPOINT_INSERIR_PEDIDO, JSON.stringify(pedido), DEFAULT_HTTP_OPTIONS)
            .subscribe(data => {
                console.log("Pedido mantido com sucesso: " + pedido.id);
            }, error => {
                alert("Erro ao manter pedido!");
                console.log(error);
                return false;
            });
    }

    listarPedidos() : Observable<any> {
        return this.http.get(ENDPOINT_LISTAR_PEDIDOS);
    }

    obterPedido(id: number) : Observable<any> {
        return this.http.get(ENDPOINT_BUSCAR_PEDIDO + id);
    }
}
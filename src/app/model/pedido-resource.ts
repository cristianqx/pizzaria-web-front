import { ProdutoResource } from "./produto-resource";
import { TipoStatusPedido } from "./tipo-status-pedido";
import { UsuarioResource } from "./usuario-resource";

/**
 * Resource que representa os tipos de pedido
 * @author Cristian Baptistella
 */

 export class PedidoResource {
     id: number;
     dataInicio: Date;
     dataFim: Date;
     valorUnitario: number;
     quantidade: number;
     produto : ProdutoResource;
     precoTotal: number;
     observacao: string;
     tipoStatus : TipoStatusPedido;
     usuario: UsuarioResource;


     constructor() {
         this.produto = new ProdutoResource();
         this.tipoStatus = new TipoStatusPedido();
         this.usuario = new UsuarioResource();


     }
 }

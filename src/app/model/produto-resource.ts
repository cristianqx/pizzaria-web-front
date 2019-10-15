import { TipoPizzaResource } from "./tipo-pizza-resource";

export class ProdutoResource {

    id: number;
    nomeProduto : string;
    valor : number;
    tipoPizza : TipoPizzaResource;

    constructor() {
        this.tipoPizza = new TipoPizzaResource();
    }
}
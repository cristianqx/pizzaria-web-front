import { PerfilResource } from "./perfil-resource";

/**
 * Resource que representa os dados do usuario logado.
 * @author Cristian Baptistella
 */
export class UsuarioResource {
    id: number;
    login: string;
    senha: string;
    nome: string;
    sexo : string;
    data_cadastro : Date;
    email : string;
    perfil : PerfilResource;
    telefone : number;
    telefone2 : number;
    endereco : string;
	cep : number;

    constructor(){
        this.perfil = new PerfilResource();
    }
}
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
    obs: string;
    funcao_id : number;
    descrica_funcao : string;
}
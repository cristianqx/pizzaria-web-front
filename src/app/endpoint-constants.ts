/**
  Arquivo com o mapeamento dos endpoints dos servicos
*/
import { HttpHeaders } from '@angular/common/http'; 

/** Cabecalho Http com os dados comuns nas requisicoes REST */
export const DEFAULT_HTTP_OPTIONS = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
}

/** Prefixo do servidor onde esta os servicos */
export const PREFIX_SERVICE_HOST = 'http://localhost:8080/projetointegrador/api';
/** Endpoint do servico de login */
export const ENDPOINT_LOGIN = PREFIX_SERVICE_HOST + '/usuario/logar';
/** Endpoint do servico para retornar usuario pelo id */
export const ENDPOINT_BUSCAR_USUARIO = PREFIX_SERVICE_HOST + '/usuario/get/'
/** Endpoint do servico de retornar lista de usuarios */
export const ENDPOINT_LISTAR_USUARIOS = PREFIX_SERVICE_HOST + '/usuario/listar-usuarios';
/** Endpoint do servico de manter usuario */
export const ENDPOINT_MANTER_USUARIO = PREFIX_SERVICE_HOST + '/usuario/insertuser';
/** Endpoint do servico de excluir usuario */
export const ENDPOINT_EXCLUIR_USUARIO = PREFIX_SERVICE_HOST + '/usuario/del/';
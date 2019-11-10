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
/** Endpoint do servico de inserir produtos no sistema */
export const ENDPOINT_INSERIR_PRODUTO = PREFIX_SERVICE_HOST + '/produto/inserir-produto';
/** Endpoint do servico de listar produtos*/
export const ENDPOINT_LISTAR_PRODUTOS = PREFIX_SERVICE_HOST + '/produto/listar-produtos';
/** Endpoint do servico para retornar produto pelo id */
export const ENDPOINT_BUSCAR_PRODUTO = PREFIX_SERVICE_HOST + '/produto/get/'
/** Endpoint do servico de excluir produto */
export const ENDPOINT_EXCLUIR_PRODUTO = PREFIX_SERVICE_HOST + '/produto/del/';
/** Endpoint do servico de inserir pedidos no sistema */
export const ENDPOINT_INSERIR_PEDIDO = PREFIX_SERVICE_HOST + '/pedido/inserir-pedido';
/** Endpoint do servico de listar pedidos*/
export const ENDPOINT_LISTAR_PEDIDOS = PREFIX_SERVICE_HOST + '/pedido/listar-pedidos';
/** Endpoint do servico de excluir pedido por id */
export const ENDPOINT_EXCLUIR_PEDIDO = PREFIX_SERVICE_HOST + '/pedido/deletar-pedido/';
/** Endpoint do servico para retornar pedido pelo id */
export const ENDPOINT_BUSCAR_PEDIDO = PREFIX_SERVICE_HOST + '/pedido/get/'
/** Endpoint do servico para retornar lista por status do pedido */
export const ENDPOINT_LISTAR_PEDIDOS_STATUS = PREFIX_SERVICE_HOST + '/pedido/lista-pedidos-status/'
/** Endpoint do servico para retornar quantidade de pedidos em aberto, andamento ou finalizado */
export const ENDPOINT_LISTAR_QTD_PEDIDOS = PREFIX_SERVICE_HOST + '/pedido/contar-pedidos/'
/** Endpoint do servico para retornar quantidade de usuarios cadastrado no sistema */
export const ENDPOINT_LISTAR_QTD_USUARIO = PREFIX_SERVICE_HOST + '/usuario/contar-usuarios/'
/** Endpoint do servico para retornar quantidade de produtos cadastrado no sistema */
export const ENDPOINT_LISTAR_QTD_PRODUTOS = PREFIX_SERVICE_HOST + '/produto/contar-produtos/'
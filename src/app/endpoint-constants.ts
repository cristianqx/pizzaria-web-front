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
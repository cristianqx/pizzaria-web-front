import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResource } from '../model/login-resource';
import { DEFAULT_HTTP_OPTIONS, ENDPOINT_LOGIN, ENDPOINT_LISTAR_USUARIOS, ENDPOINT_BUSCAR_USUARIO, ENDPOINT_MANTER_USUARIO, ENDPOINT_EXCLUIR_USUARIO, ENDPOINT_LISTAR_QTD_USUARIO } from '../endpoint-constants';
import { Observable } from 'rxjs';
import { UsuarioResource } from '../model/usuario-resource';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  obterUsuarios(): Observable<any> {
    return this.http.get(ENDPOINT_LISTAR_USUARIOS);
  }

  obterUsuario(id: number) : Observable<any> {
    return this.http.get(ENDPOINT_BUSCAR_USUARIO + id);
  } 

  deletarUsuario(id: number){
    return this.http.delete(ENDPOINT_EXCLUIR_USUARIO + id);
  }

  manterUsuario(usuario : UsuarioResource): any {

    console.log("Solicitacao de cadastro de novo usuario:" + usuario.nome);
    this.http.put(ENDPOINT_MANTER_USUARIO, JSON.stringify(usuario), DEFAULT_HTTP_OPTIONS) 
      .subscribe(data => {
        console.log("Usuario mantido com sucesso: "+ usuario.nome);
        return true;
      },
      error => {
        //this.tratarErro(error);
        alert("Erro ao manter o usuário!");
        console.log(error);
        return false;
      }
    );
  }

  contarUsuarios() {
    return this.http.get(ENDPOINT_LISTAR_QTD_USUARIO);
}
  tratarErro(error){

    if(error.status == 404){
      alert('Email não cadastrado!');
      return;
    } else {
      console.log("Erro nao esperado ao enviar senha de esquecimento: "+ error);
      alert('Ocorreu um erro não esperado. Por favor contate o suporte.');
    }
   
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginResource } from '../model/login-resource';
import { DEFAULT_HTTP_OPTIONS } from '../endpoint-constants';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  
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

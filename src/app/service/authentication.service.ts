import { Injectable } from '@angular/core';
import { UsuarioResource } from '../model/usuario-resource';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { LoginResource } from '../model/login-resource';
import { ENDPOINT_LOGIN, DEFAULT_HTTP_OPTIONS } from '../endpoint-constants';
import { map } from 'rxjs/operators';
import { ADMIN_PROFILE_MENU } from '../security/profiles/admin-profile';
import { FINANCE_PROFILE_MENU } from '../security/profiles/financeiro-profile';
import { SAC_PROFILE_MENU } from '../security/profiles/sac-profile';
import { BALCONISTA_MENU } from '../security/profiles/balconista-profile';
import { PIZZAIOLO_MENU } from '../security/profiles/pizzaiolo-profile';

/**
 * Service para controle de autenticacao no portal.
 * 
 * @author Andre Dornelas
 */
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private currentUserSubject: BehaviorSubject<UsuarioResource>;
  public currentUser: UsuarioResource;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<UsuarioResource>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.value;
  }

  public get currentUserValue(): UsuarioResource {
    return this.currentUser;
  }

  public set setCurrentUserValue(user: UsuarioResource) {
    this.currentUserSubject.next(user);
  }

  /**
   * Efetua a chamada do servico de validacao dos dados de login.
   * 
   * @param loginData LoginResource
   */
  autenticar(loginData: LoginResource): Observable<UsuarioResource> {
    return this.http.post<any>(ENDPOINT_LOGIN, JSON.stringify(loginData), DEFAULT_HTTP_OPTIONS)
      .pipe(
        map(user => {
          this.currentUser = user;
          return user;
        })
      )
  }

  /**
   * Verifica se o usuario esta logado
   */
  public isLoggedIn() {
    return localStorage.getItem('currentUser') != null;
  }

  /**
   * Efetua o logout no sistema
   */
  public logout() {
    localStorage.removeItem('currentUser');
    localStorage.clear();
    this.currentUserSubject.next(null);
  }

  /**
   * Verifica o perfil do usuario logado e retorna o menu com as respectivas permissoes
   */
  public get permissoesUsuario(): any {

    if (this.currentUser.perfil.id == 1) { //-- ADM

      return ADMIN_PROFILE_MENU.sidebarLeftMenu;

    } else if (this.currentUser.perfil.id == 2) { //-- Balconista

      return BALCONISTA_MENU.sidebarLeftMenu;

    } else if (this.currentUser.perfil.id == 3) { // Pizzaiolo

      return PIZZAIOLO_MENU.sidebarLeftMenu;

    } else {
      alert('Seu perfil não está mapeado. Favor contatar o suporte!');
      return "";
    }

  }

  public get codigoPerfilUsuarioLogado() {
    return this.currentUser.perfil.id;
  }
}

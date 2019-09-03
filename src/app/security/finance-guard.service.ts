import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FinanceGuardService implements CanActivate{

  constructor(private router: Router) { }

  canActivate() {
    return true;
    /// implementar a logica se esta logado e redirecionar para login caso nao
    /// e implementar para ver se o usuario logado tem permissao de acesso a essa funcionalidade
  }

}

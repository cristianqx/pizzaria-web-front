import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

/**
 * Service de seguranca principal
 * 
 * @author Andre Dornelas
 */
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService : AuthenticationService) { }

  /**
   * Valida se o usuario esta logado
   */
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    
    if(this.authService.isLoggedIn()){
      return true;
    } else {
      //this.router.navigate(['login']);
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }
  }
}

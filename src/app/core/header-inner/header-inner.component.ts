import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioResource } from 'src/app/model/usuario-resource';
import { AuthenticationService } from 'src/app/service/authentication.service';


@Component({
  selector: 'app-header-inner',
  templateUrl: './header-inner.component.html'
})
export class HeaderInnerComponent implements OnInit{

  usuarioLogado : UsuarioResource;

  constructor(private authService: AuthenticationService, private router: Router) {
    this.usuarioLogado = this.authService.currentUserValue;
  }

  ngOnInit() {
    this.usuarioLogado = this.authService.currentUserValue;
  }

  public logout(){
    this.router.navigateByUrl('/sair', {skipLocationChange: true});
  }
  
  public meusDadosPage() {
    this.router.navigate(['/meus-dados']);
  }

}
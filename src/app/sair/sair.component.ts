import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../service/authentication.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sair',
  templateUrl: './sair.component.html',
  styleUrls: ['./sair.component.css']
})
export class SairComponent implements OnInit {

  constructor(private authService: AuthenticationService, private router: Router, private location: Location) { }

  ngOnInit() {
  }

  naoSair(){
    this.router.navigate(['']);
  }

  sair(){
    this.authService.logout();
    this.location.replaceState('login');
    this.router.navigate(['login', {"refresh": (new Date().getTime())}]);
    this.location.replaceState('login');
  }

}

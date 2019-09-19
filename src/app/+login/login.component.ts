import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  isSubmited = false;
  loading = false;
  returnUrl: string;
  
  constructor(
    private authService: AuthenticationService, 
    private route: ActivatedRoute,
    private router : Router, 
    private formBuilder : FormBuilder) {

      // redireciona para home page se o usuario estiver logado
      if (this.authService.currentUserValue) { 
        this.router.navigate(['/']);
      } else {
        this.router.navigate(['/login']);
      }
    }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login : ['',[Validators.required]],
      senha: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get formControls() {
    return this.loginForm.controls;
  }

  onSubmit(){

    console.log("Efetuando login:" + this.loginForm.value);
    
    this.isSubmited = true;
    
    if(this.loginForm.invalid){
      return;
    }

    this.loading = true;

    this.authService.autenticar(this.loginForm.value).subscribe(
      retorno => {
        localStorage.setItem('currentUser', JSON.stringify(retorno));
        console.log("Usuario autenticado! ");
        this.router.navigate([this.returnUrl]);
      },
      error => {
        this.tratarErro(error);    
      },
      () => {
        console.log("Chamada da api de login completada.");
        this.loading = false;
        this.isSubmited = false;
      }
    );
  }

  tratarErro(error){

    this.loading = false;
    this.isSubmited = false;

    if(error.status == 404){
      alert('Login não cadastrado!');
      return;
    
    } else if(error.status == 401){
      alert('Senha Inválida!');
      return;
    
    } else {
      console.log("Erro nao esperado ao logar: "+ error);
      alert('Ocorreu um erro não esperado. Por favor contate o suporte.');
    }
   
  }
}

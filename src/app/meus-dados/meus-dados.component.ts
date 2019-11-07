import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioResource } from '../model/usuario-resource';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-meus-dados',
  templateUrl: './meus-dados.component.html',
  styleUrls: ['./meus-dados.component.css']
})
export class MeusDadosComponent implements OnInit {

  isTextFieldType: boolean;
  usuarioForm: FormGroup;
  usuario : UsuarioResource = new UsuarioResource();
  isSubmited = false;
  loading = false;
  public myModel = ''
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  idUsuarioEdicao : number;
  usuarioLogado: UsuarioResource;
  verificaPerfil: boolean = true;

  constructor(private usuarioService : UserService,
    private router : Router,
    private formBuilder : FormBuilder,
    private route : ActivatedRoute,
    private authService: AuthenticationService,) { 

      this.usuarioLogado = this.authService.currentUserValue;
    }

  togglePasswordFieldType(){
    this.isTextFieldType = !this.isTextFieldType;
  }
  
  ngOnInit() {
    this.usuarioLogado = this.authService.currentUserValue;
    

    this.usuarioForm = this.formBuilder.group({
      login: ['',[Validators.required]],
      senha: ['',[Validators.required]],
      nome: ['',[Validators.required]],
      sexo : ['',[Validators.required]],
      email :  ['',[Validators.required, Validators.email]],
      perfil : '',
    });
     
      this.usuarioService.obterUsuario(this.usuarioLogado.id).subscribe(
        usuarioRetornado => {
            this.usuarioForm.controls['login'].setValue(usuarioRetornado.login);
            this.usuarioForm.controls['senha'].setValue(usuarioRetornado.senha);
            this.usuarioForm.controls['nome'].setValue(usuarioRetornado.nome);
            this.usuarioForm.controls['sexo'].setValue(usuarioRetornado.sexo);
            this.usuarioForm.controls['email'].setValue(usuarioRetornado.email);
            this.usuarioForm.controls['perfil'].setValue(usuarioRetornado.perfil.id);
        })

        if(this.usuarioLogado.perfil.id != 1) {
          this.usuarioForm.get('perfil').disable();
        } else {
          this.usuarioForm.get('perfil').enable();
        }
  }

  
  get formControls() {
    return this.usuarioForm.controls;
  }

  manterUsuario(){

    this.isSubmited = true;
  
    if(this.usuarioForm.invalid){
      return;
    }
  
    this.loading = true;
  
    this.usuario.id = this.usuarioLogado.id;
    this.usuarioService.manterUsuario(this.usuario);
    
      setTimeout(() => {
  
        this.loading = false;
        this.isSubmited = false;
        window.location.reload();
      }, 600);
    }

}

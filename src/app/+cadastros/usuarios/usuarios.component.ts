import { Component, AfterViewInit, OnInit } from '@angular/core';

import * as Prism from 'prismjs';
import { UserService } from 'src/app/service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioResource } from 'src/app/model/usuario-resource';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent {

  usuarioForm: FormGroup;
  usuario: UsuarioResource = new UsuarioResource();
  isSubmited = false;
  loading = false;
  public myModel = ''
  public telefoneFixoMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public celularFixoMask = ['(', /[1-9]/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
  public cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/,]

  idUsuarioEdicao: number;
  usuarioLogado: UsuarioResource;

  constructor(private usuarioService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authService: AuthenticationService,
  ) {
    this.usuarioLogado = this.authService.currentUserValue;
  }

  ngAfterViewInit() {
    Prism.highlightAll();
  }

  ngOnInit() {
    this.usuarioLogado = this.authService.currentUserValue;

    this.usuarioForm = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(2), 
        Validators.maxLength(14)]],
      senha: ['', Validators.required],
      nome: ['', [Validators.required, Validators.maxLength(14)]],
      sexo: ['', [Validators.required, Validators.maxLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      perfil: '',
      telefone : ['', [Validators.required]],
      telefone2 : '',
      endereco : ['', [Validators.required]],
      cep : ['', [Validators.required]],
    });

    this.idUsuarioEdicao = this.route.snapshot.queryParams['idUser'];

    if (this.idUsuarioEdicao != undefined) {

      this.usuarioService.obterUsuario(this.idUsuarioEdicao).subscribe(
        usuarioRetornado => {
          this.usuarioForm.controls['login'].setValue(usuarioRetornado.login);
          this.usuarioForm.controls['senha'].setValue(usuarioRetornado.senha);
          this.usuarioForm.controls['nome'].setValue(usuarioRetornado.nome);
          this.usuarioForm.controls['sexo'].setValue(usuarioRetornado.sexo);
          this.usuarioForm.controls['email'].setValue(usuarioRetornado.email);
          this.usuarioForm.controls['perfil'].setValue(usuarioRetornado.perfil.id);
          this.usuarioForm.controls['telefone'].setValue(usuarioRetornado.telefone);
          this.usuarioForm.controls['telefone2'].setValue(usuarioRetornado.telefone2);
          this.usuarioForm.controls['endereco'].setValue(usuarioRetornado.endereco);
          this.usuarioForm.controls['cep'].setValue(usuarioRetornado.cep);
        })
    }
  }

  get formControls() {
    return this.usuarioForm.controls;
  }

  manterUsuario() {

    this.isSubmited = true;

    if (this.usuarioForm.invalid) {
      return;
    }

    this.loading = true;

    this.usuario.id = this.idUsuarioEdicao;
    this.usuarioService.manterUsuario(this.usuario);
    
    setTimeout(() => {
      this.loading = false;
      this.isSubmited = false;
      this.router.navigate(['cadastros/listar-usuarios', { "refresh": (new Date().getTime()) }]);
    }, 600);
  }
}

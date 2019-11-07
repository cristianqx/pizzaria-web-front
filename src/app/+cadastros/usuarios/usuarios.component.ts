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
  public mask = ['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]
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
      login: ['', [Validators.required]],
      senha: ['', [Validators.required]],
      nome: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      perfil: '',
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

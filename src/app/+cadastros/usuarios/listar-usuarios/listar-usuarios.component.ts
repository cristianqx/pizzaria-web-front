import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioResource } from 'src/app/model/usuario-resource';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit {

  usuarios : Observable<UsuarioResource[]>
  
  constructor(private usuarioService : UserService,
              private router : Router) { }

  ngOnInit() {
    this.obterUsuarios();
    console.log(this.obterUsuarios());
  }

  obterUsuarios() {
    this.usuarios = this.usuarioService.obterUsuarios();
  }

  editarUsuario(idUsuario: number){
    this.router.navigate(['cadastros/usuarios'], { queryParams: { idUser: idUsuario }});
    return false;
  }
}

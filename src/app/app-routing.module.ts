import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './security/auth-guard.service';
import { FinanceGuardService } from './security/finance-guard.service';
import { SairComponent } from './sair/sair.component';

const routes: Routes = [
  {path: '', data: { title: 'Dashboard'},
    children: [
      {path: '',component: HomeComponent, canActivate: [AuthGuardService]},
      {path: 'cadastros', data: {title: 'Cadastros'},
        children: [
          {path: 'usuarios',loadChildren: './+cadastros/usuarios/usuarios.module#UsuariosModule',data: {
            title: 'Usuários'}},
          {path: 'listar-usuarios',loadChildren: './+cadastros/usuarios/listar-usuarios/listar-usuarios.module#ListarUsuariosModule',data: {
            title: 'Listagem de Usuários'}},  
          {path: 'produtos',loadChildren: './+cadastros/produtos/produtos.module#ProdutosModule',data: {
            title: 'Produtos'}},
          {path: 'cad-produtos',loadChildren: './+cadastros/produtos/cad-produtos/cad-produtos.module#CadastroProdutosModule',data: {
            title: 'Listagem de Produtos'}},
          {path: 'pedidos',loadChildren: './+cadastros/pedidos/pedidos.module#PedidosModule',data: {
            title: 'Produtos'}},
          {path: 'lista-pedidos',loadChildren: './+cadastros/pedidos/lista-pedidos/lista-pedidos.module#ListaPedidosModule',data: {
            title: 'Lista de Pedidos'}},
        ]
      },   


      {path: 'layout', data: {title: 'Cadastros'},
          children: [
            {path: 'configuration',loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',data: {
                title: 'Usuários'}},
          ]
      },
      
      {path: 'dropdown',loadChildren: './+dropdown/dropdown.module#DropdownModule',data: {
            title: 'Dropdown'}},
      {path: 'tabs',loadChildren: './+tabs/tabs.module#TabsModule',data: {
            title: 'Tabs'}}
    ]},
    {
      path: 'login',
      loadChildren: './+login/login.module#LoginModule',
      data: {
        customLayout: true
      }
    },
    { 
      path: 'sair',
      component: SairComponent,
      canActivate: [AuthGuardService],
      data: {
        customLayout: true
      }
    },
    { path: '**', redirectTo: '' },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

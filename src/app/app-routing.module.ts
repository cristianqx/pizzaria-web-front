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
  /*    {path: 'financeiro', loadChildren: './+financeiro/financeiro.module#FinanceiroModule',data: {
        title: 'Financeiro'}, canActivate: [FinanceGuardService]},
     {path: 'accordion', loadChildren: './+accordion/accordion.module#AccordionModule',data: {
          title: 'Financeiro'}, canActivate: [FinanceGuardService]},
      {path: 'alert',loadChildren: './+alert/alert.module#AlertModule', data: {
          title: 'Mensagens'}},
      
      {path: 'cadastros', data: {title: 'Cadastros'},
        children: [
          {path: 'usuarios',loadChildren: './+cadastros/usuarios/usuarios.module#UsuariosModule',data: {
            title: 'Usuários'}},
        ]
      },   
/*
      {path: 'layout', data: {title: 'Cadastros'},
          children: [
            {path: 'configuration',loadChildren: './+layout/configuration/configuration.module#ConfigurationModule',data: {
                title: 'Usuários'}},
            {path: 'custom',loadChildren: './+layout/custom/custom.module#CustomModule',data: {
                title: 'Aeroportos'}},
            {path: 'content',loadChildren: './+layout/content/content.module#ContentModule', data: {
                title: 'Parâmetros'}},
            {path: 'header',loadChildren: './+layout/header/header.module#HeaderModule', data: {
                title: 'Monetário'}},
            {path: 'sidebar-left',loadChildren: './+layout/sidebar-left/sidebar-left.module#SidebarLeftModule',data: {
                title: 'Ponto de Coleta'}},
            {path: 'sidebar-right',loadChildren: './+layout/sidebar-right/sidebar-right.module#SidebarRightModule',data: {
                title: 'Gestão de Estrelas'}}
          ]
      },
      {path: 'boxs',data: {title: 'Coleta'},
          children: [
            {path: 'box',loadChildren: './+boxs/box-default/box-default.module#BoxDefaultModule',data: {
                title: 'Receber Encomenda'}}, 
            {path: 'info-box',loadChildren: './+boxs/box-info/box-info.module#BoxInfoModule',data: {
                title: 'Entregar Encomenda'}}, 
            {path: 'small-box',loadChildren: './+boxs/box-small/box-small.module#BoxSmallModule',data: {
                title: 'Problemas e Soluções'}}
          ]
      },
      */
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

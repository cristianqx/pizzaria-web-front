
export const ADMIN_PROFILE_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Cadastros', iconClasses: 'fa fa-pencil-square-o',
        children: [
          {label: 'Produtos', route: 'cadastros/cad-produtos', iconClasses: 'fa fa-cutlery'},
          {label: 'Usuários', route: 'cadastros/listar-usuarios', iconClasses: 'fa fa-users'}
        ]
      },
      {label: 'Histórico de Pedidos', route: 'cadastros/lista-pedidos', iconClasses: 'fa fa-bars',
    },
    ]
  };
  
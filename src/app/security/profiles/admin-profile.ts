
export const ADMIN_PROFILE_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Financeiro', route: 'financeiro', iconClasses: 'fa fa-money'},
      {label: 'Cadastros', iconClasses: 'fa fa-pencil-square-o',
        children: [
          {label: 'Produtos', route: 'cadastros/produtos', iconClasses: 'fa fa-cutlery'},
          {label: 'Usuários', route: 'cadastros/listar-usuarios', iconClasses: 'fa fa-users'}
        ]
      },
    ]
  };
  
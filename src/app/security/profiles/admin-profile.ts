
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
      {label: 'Pedidos', iconClasses: 'fa fa-pie-chart',
      children: [
        {label: 'Pedidos em Aberto', route: 'cadastros/busca-especifica', iconClasses: 'fa fa-cutlery'},
        {label: 'Pedidos em Andamento', route: 'cadastros/listar-usuarios', iconClasses: 'fa fa-plus'},
        {label: 'Pedidos Finalizados', route: 'cadastros/listar-usuarios', iconClasses: 'fa fa-times-circle-o'},
        {label: 'Todos Pedidos', route: 'cadastros/lista-pedidos', iconClasses: 'fa fa-bars'}


      ]
    },
    ]
  };
  
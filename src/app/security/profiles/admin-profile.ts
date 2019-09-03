
export const ADMIN_PROFILE_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Financeiro', route: 'financeiro', iconClasses: 'fa fa-money'},
      {label: 'Cadastros', iconClasses: 'fa fa-pencil-square-o',
        children: [
          {label: 'Usuários', route: 'cadastros/usuarios', iconClasses: 'fa fa-users'},
          {label: 'Aeroportos', route: 'cadastros/aeroportos', iconClasses: 'fa fa-plane'},
          {label: 'Monetário', route: 'cadastros/monetario', iconClasses: 'fa fa-usd'},
          {label: 'Ponto de Coleta', route: 'cadastros/ponto-coleta', iconClasses: 'fa fa-cubes'},
          {label: 'Gestão de Estrelas', route: 'cadastros/estrelas', iconClasses: 'fa fa-star'},
          {label: 'Parâmetros', route: 'cadastros/parametros', iconClasses: 'fa fa-database'}
        ]
      },
      {label: 'Mensagens', route: 'alert', iconClasses: 'fa fa-envelope'},
      {label: 'Relatórios', route: 'dropdown', iconClasses: 'fa fa-line-chart'},
      {label: 'Coleta', iconClasses: 'fa fa-exchange', 
          children: [
            {label: 'Receber Encomenda', route: 'boxs/box'},
            {label: 'Entregar Encomenda', route: 'boxs/info-box'},
            {label: 'Problemas e Soluções', route: 'boxs/small-box'}
          ]
      }
    ]
  };
  
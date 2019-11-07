
export const BALCONISTA_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Gestão de Pedidos', iconClasses: 'fa fa-exchange', 
          children: [
            {label: 'Todos os Pedidos', route: 'cadastros/lista-pedidos'},
            {label: 'Cadastrar Pedido', route: 'cadastros/pedidos'},
          ]
      }
    ]
  };
  
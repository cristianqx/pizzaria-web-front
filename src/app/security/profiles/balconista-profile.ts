
export const BALCONISTA_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Gestão de Pedidos', iconClasses: 'fa fa-exchange', 
          children: [
            {label: 'Pedidos', route: 'cadastros/lista-pedidos'},
            {label: 'Entregar Encomenda', route: 'boxs/info-box'},
            {label: 'Problemas e Soluções', route: 'boxs/small-box'}
          ]
      }
    ]
  };
  
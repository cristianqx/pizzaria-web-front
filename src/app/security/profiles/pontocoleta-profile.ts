
export const BALCONISTA_MENU = {
    skin: 'blue',
    sidebarLeftMenu: [
      {label: 'MENU DO USUÁRIO', separator: true},
      {label: 'Home', route: '/', iconClasses: 'fa fa-home'},
      {label: 'Coleta', iconClasses: 'fa fa-exchange', 
          children: [
            {label: 'Receber Encomenda', route: 'boxs/box'},
            {label: 'Entregar Encomenda', route: 'boxs/info-box'},
            {label: 'Problemas e Soluções', route: 'boxs/small-box'}
          ]
      }
    ]
  };
  
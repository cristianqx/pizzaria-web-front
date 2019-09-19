import { Component, AfterViewInit } from '@angular/core';

import * as Prism from 'prismjs';

@Component({
  selector: 'app-cad-produtos',
  templateUrl: './cad-produtos.component.html',
  styleUrls: ['./cad-produtos.component.css']
})
export class CadastroProdutosComponent implements AfterViewInit {
  /**
   * @method ngAfterViewInit
   */
  ngAfterViewInit() {
    Prism.highlightAll();
  }
}

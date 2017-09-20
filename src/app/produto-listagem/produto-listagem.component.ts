import {Component} from '@angular/core';
import {ProdutoComponent} from '../produto/produto.component';
import {ProdutoService} from '../produto/produto.service';

@Component({
  moduleId: module.id,
  templateUrl: './produto-listagem.component.html'
})
export class ProdutoListagemComponent {

  service: ProdutoService;


  produtos: ProdutoComponent[] = [];

  constructor(service: ProdutoService) {

    this.service = service;

    this.service
      .listall()
      .subscribe(produtos => {
        this.produtos = produtos;
      }, erro => console.log(erro));
  }

}

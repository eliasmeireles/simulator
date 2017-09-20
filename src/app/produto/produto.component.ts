import {Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProdutoService} from './produto.service';

@Component({
  moduleId: module.id,
  templateUrl: './produto.component.html'
})
export class ProdutoComponent {

  id: string;
  @Input() nome: string;
  @Input() imagemUrl: string;
  @Input() valor: number;
  @Input() descricao: string;


  route: ActivatedRoute;
  produtoService: ProdutoService;
  produto: ProdutoComponent;

  constructor(route: ActivatedRoute, produtoService: ProdutoService) {

    this.route = route;
    this.produtoService = produtoService;

    this.route.params.subscribe(params => {
      const id = params['id'];


      this.produtoService
        .findOne(id)
        .subscribe(
          produto =>
            this.produto = produto,
            error => console.log(error)
          );
    });
  }

}

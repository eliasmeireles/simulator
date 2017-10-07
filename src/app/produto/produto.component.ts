import {Component, Input } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProdutoService} from './produto.service';
import {SelectedImageIndexDirective} from '../selected-image-index.directive';

@Component({
  moduleId: module.id,
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent {

  id: string;
  @Input() nome: string;
  @Input() imagens: string[];
  @Input() valor: number;
  @Input() categoria: any;


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
          produto => this.setProduto(produto),
            error => console.log(error)
          );
    });
  }

  private setProduto(produto: ProdutoComponent) {
    this.produto = produto;
  }

}

import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProdutoTesteComponent} from '../produto-teste/produto-teste.component';
import {ProdutoService} from '../produto/produto.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.produto.component.html'
})
export class CadastroComponent {

  files: FileList;
  filestring: string;

  cadastroTeste: ProdutoTesteComponent = new ProdutoTesteComponent();


  constructor(private produtoService: ProdutoService) {

  }

  cadastrar(form: NgForm) {

    event.preventDefault();
    console.log(form);
    this.produtoService.postTeste(form)
      .subscribe(res => console.log(res));
  }

  onChange(event) {
    this.files = event.target.files;
  }
}

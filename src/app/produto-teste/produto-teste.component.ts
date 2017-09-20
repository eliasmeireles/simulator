import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-produto-teste',
  templateUrl: './produto-teste.component.html'
})
export class ProdutoTesteComponent {

  @Input() nome: string;
  imagem: FileList;
}

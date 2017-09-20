import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProdutoTesteComponent} from './produto-teste.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ProdutoTesteComponent],
  exports: [ProdutoTesteComponent]
})
export class ProdutoTesteModule { }

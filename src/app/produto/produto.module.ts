import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoComponent } from './produto.component';
import { ProdutoService } from './produto.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ProdutoComponent ],
  exports: [ ProdutoComponent ],
  providers: [ ProdutoService ]
})
export class ProdutoModule { }

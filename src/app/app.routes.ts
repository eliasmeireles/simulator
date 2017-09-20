import {RouterModule, Routes} from '@angular/router';
import {CadastroComponent} from './cadastro-produto/cadastro.produto.component';
import {ProdutoListagemComponent} from './produto-listagem/produto-listagem.component';
import {ProdutoComponent} from './produto/produto.component';

const appRoutes: Routes = [

  { path: '', component: ProdutoListagemComponent },
  { path: 'cadastrar', component: CadastroComponent },
  { path: 'produto', component: ProdutoComponent },
  { path: 'produto/:id', component: ProdutoComponent },
  { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);

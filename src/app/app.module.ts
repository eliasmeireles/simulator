import 'rxjs/add/operator/map';
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {MaterializeModule} from 'angular2-materialize';
import {AppComponent} from './app.component';
import {CadastroComponent} from './cadastro-produto/cadastro.produto.component';

import {routing} from './app.routes';
import {ProdutoModule} from './produto/produto.module';
import {UsuarioComponent} from './usuario/usuario.component';
import {UsuarioCadastroComponent} from './usuario-cadastro/usuario-cadastro.component';
import {HttpModule} from '@angular/http';
import {ProdutoListagemComponent} from './produto-listagem/produto-listagem.component';
import {ApiConfigModule} from './api-config/api-config.module';
import {FileSaveModule} from './file-save/file-save.module';
import {ProdutoTesteModule} from './produto-teste/produto-teste.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SelectedImageIndexDirective } from './selected-image-index.directive';


@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    UsuarioComponent,
    UsuarioCadastroComponent,
    ProdutoListagemComponent,
    SelectedImageIndexDirective
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    routing,
    HttpModule,
    ApiConfigModule,
    ProdutoModule,
    FileSaveModule,
    FormsModule,
    ReactiveFormsModule,
    ProdutoTesteModule,
  ],
  providers: [  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

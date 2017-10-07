import {Injectable} from '@angular/core';
import {ProdutoComponent} from './produto.component';
import {Observable} from 'rxjs/Observable';
import {ApiConfigComponent} from '../api-config/api-config.component';
import {RequestOptions} from '@angular/http';
import {NgForm} from '@angular/forms';


@Injectable()
export class ProdutoService {

  apiConfig: ApiConfigComponent;


  constructor(apiConfig: ApiConfigComponent) {

    this.apiConfig = apiConfig;
  }

  listall(): Observable<ProdutoComponent[]> {

    return this.apiConfig.http
      .get(this.apiConfig.baseUrl + 'produto/list')
      .map(res => res.json());

  }

  findOne(id: string): Observable<ProdutoComponent> {
    return this.apiConfig.http
      .get(this.apiConfig.baseUrl + 'produto/' + id)
      .map(res => res.json());
  }

  postTeste(produto: NgForm): Observable<string> {
    let headers: Headers = new Headers();
    headers.append('enctype', 'multipart/form-data')

    const url = this.apiConfig.baseUrl + 'produtofile/new';


    return this.apiConfig.http
      .post(url, produto, new RequestOptions(headers)).
      map(res => res.valueOf());
  }
}

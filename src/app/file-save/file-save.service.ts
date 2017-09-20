import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ApiConfigComponent} from '../api-config/api-config.component';

@Injectable()
export class FileSaveService {

  private apiConfig: ApiConfigComponent;

  constructor(apiConfig: ApiConfigComponent) {
    this.apiConfig = apiConfig;
  }

  imagemSave(imagem: any): Observable<string> {
    return this.apiConfig.http
      .post(this.apiConfig.baseUrl + 'imagem/', imagem)
      .map(res => res.json());
  }
}

import {Component} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  moduleId: module.id,
  template: ``
})
export class ApiConfigComponent {

  private _http: Http;
  private _baseUrl: string;

  constructor(http: Http) {
    this._http = http;
    this._baseUrl = 'http://192.168.55.200:8080/';
  }


  get http(): Http {
    return this._http;
  }

  get baseUrl(): string {
    return this._baseUrl;
  }
}

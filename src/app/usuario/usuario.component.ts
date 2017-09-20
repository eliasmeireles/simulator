import {Component, Input, OnInit} from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  @Input() nome;
  @Input() email;
  @Input() senha;


  constructor(http: Http) { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {
  title = 'Contatos ANGULAR 6';

  mainLocal: string;
  mainSession: string;
  eventoLocal: string;
  eventoSession: string;

  ngOnInit() {
    this.mainLocal = localStorage.getItem('mainLocal');
    this.mainSession = sessionStorage.getItem('mainSession');
    this.eventoLocal = localStorage.getItem('eventoLocal');
    this.eventoSession = sessionStorage.getItem('eventoSession');
    localStorage.setItem(
      'contatoLocal',
      'Mensagem do contato localstorage !!!'
    );
    sessionStorage.setItem(
      'contatoSession',
      'Mensagem do contato Session Storage !!!'
    );
  }
}

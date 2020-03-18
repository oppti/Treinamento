import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meu-componente',
  templateUrl: './meu-componente.component.html',
  styleUrls: ['./meu-componente.component.css']
})
export class MeuComponenteComponent implements OnInit {
nome: string;
arrayNum = [1,2,3,4,5];
  constructor() { }

  ngOnInit(): void {
 // this.nome = 'Primeiro programa';
  }
  recomperarTexto(nome: string) {
  this.nome = nome;
  }

}

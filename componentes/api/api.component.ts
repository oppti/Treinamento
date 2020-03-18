import { Component, OnInit } from '@angular/core';
import { Imagem } from './../../../models/api';
import { ApiService } from './../../services/api.service';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {
  imagens: Imagem;
  erro: any;

  constructor(private apiService: ApiService) {
  this.pegarImagem();
  }

  ngOnInit(): void {
  }
  pegarImagem() {
    this.apiService.getImg().subscribe(
      (data: Imagem) => {
        this.imagens = data;
        console.log('Dados sendo recebidos ', data);
        console.log('Dados sendo enviados ', this.imagens);

      },

      (error: any) => {
        this.erro = error;

        console.log('Erro ', error);


      }
    );
  }
}

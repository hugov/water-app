import { Component, OnInit } from '@angular/core';

import { Categoria } from './../model/categoria.model';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  situacao = "";
  categoria: Categoria[];

  constructor() {
  }

  ngOnInit(): void {
    this.listar();
  }

  listar() {

    this.categoria = [
      {
        id : '1',
        descricao : 'Cerveja',
        situacao : '1' 
      },
      {
        id : '2',
        descricao : 'Cerveja',
        situacao : '1' 
      }
    ];

    console.log('categoria', this.categoria);
    return this.categoria;
    
  }

  alterar(id : number) {
    console.log('Categora id: ' , id);
  }

}

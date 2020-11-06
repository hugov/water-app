import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';
import { CategoriaComponent } from './../categoria/categoria.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];
  categoria: CategoriaComponent;

  constructor() { 
      this.categoria = new CategoriaComponent();
  }

  ngOnInit(): void {

    this.items = [
        {
            label: 'Controle de Acesso',
            icon: 'pi pi-fw pi-users',
            items: [
                {label: 'Usuário'},
                {label: 'Permissão de acesso'}
            ]
        },
        {
            label: 'Cadastros e Parâmetros',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Categoria', 
                    routerLink: 'categoria'
                },
                {label: 'Produto'}
            ]
        },
        {
            label: 'Relatórios',
            icon: 'pi pi-chart-bar',
            items: [
                {label: 'Delete'},
                {label: 'Refresh'}
            ]
        }
    ];

  }

}

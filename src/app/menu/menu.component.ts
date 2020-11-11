import { Component, OnInit } from '@angular/core';

import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { 
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
                    label: 'Categoria', routerLink: 'categorias'
                },
                {label: 'Produto', routerLink: 'produtos'},
                {label: 'Cliente', routerLink: 'clientes'},
                {label: 'Item' , routerLink: 'itens'}
            ]
        },
        {
            label: 'Admin',
            icon: 'pi pi-fw pi-pencil',
            items: [
                {
                    label: 'Conta', routerLink: 'contas'
                }
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

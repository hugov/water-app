import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './core/home/home.component';
import { ItemSearchComponent } from './item/item-search/item-search.component';
import { ItemCreateAndEditComponent } from './item/item-create-and-edit/item-create-and-edit.component';
import { CategoriaSearchComponent } from './categoria/categoria-search/categoria-search.component';
import { CategoriaCreateAndEditComponent } from './categoria/categoria-create-and-edit/categoria-create-and-edit.component';
import { ContaSearchComponent } from './conta/conta-search/conta-search.component';
import { ContaCreateAndEditComponent } from './conta/conta-create-and-edit/conta-create-and-edit.component';
import { ProdutoSearchComponent } from './produto/produto-search/produto-search.component';
import { ProdutoCreateAndEditComponent } from './produto/produto-create-and-edit/produto-create-and-edit.component';
import { ClienteSearchComponent } from './cliente/cliente-search/cliente-search.component';
import { ClienteCreateAndEditComponent } from './cliente/cliente-create-and-edit/cliente-create-and-edit.component';
import { EntregadorSearchComponent } from './entregador/entregador-search/entregador-search.component';
import { EntregadorCreateAndEditComponent } from './entregador/entregador-create-and-edit/entregador-create-and-edit.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'itens', component: ItemSearchComponent},
  { path: 'itens/novo', component: ItemCreateAndEditComponent},
  { path: 'itens/:idItem', component: ItemCreateAndEditComponent},

  { path: 'categorias', component: CategoriaSearchComponent},
  { path: 'categorias/novo', component: CategoriaCreateAndEditComponent},
  { path: 'categorias/:categoriaId', component: CategoriaCreateAndEditComponent},

  { path: 'contas', component: ContaSearchComponent},
  { path: 'contas/novo', component: ContaCreateAndEditComponent},
  { path: 'contas/:contaId', component: ContaCreateAndEditComponent},

  { path: 'produtos', component: ProdutoSearchComponent},
  { path: 'produtos/novo', component: ProdutoCreateAndEditComponent},
  { path: 'produtos/:produtoId', component: ProdutoCreateAndEditComponent},

  { path: 'clientes', component: ClienteSearchComponent},
  { path: 'clientes/novo', component: ClienteCreateAndEditComponent},
  { path: 'clientes/:clienteId', component: ClienteCreateAndEditComponent},

  { path: 'entregadores', component: EntregadorSearchComponent},
  { path: 'entregadores/novo', component: EntregadorCreateAndEditComponent},
  { path: 'entregadores/:entregadorId', component: EntregadorCreateAndEditComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

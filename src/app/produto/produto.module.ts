import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoGridComponent } from './produto-grid/produto-grid.component';
import { ProdutoSearchComponent } from './produto-search/produto-search.component';
import { ProdutoCreateAndEditComponent } from './produto-create-and-edit/produto-create-and-edit.component';



@NgModule({
  declarations: [ProdutoGridComponent, ProdutoSearchComponent, ProdutoCreateAndEditComponent],
  imports: [
    CommonModule
  ]
})
export class ProdutoModule { }

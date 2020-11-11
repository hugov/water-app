import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntregadorSearchComponent } from './entregador-search/entregador-search.component';
import { EntregadorGridComponent } from './entregador-grid/entregador-grid.component';
import { EntregadorCreateAndEditComponent } from './entregador-create-and-edit/entregador-create-and-edit.component';



@NgModule({
  declarations: [EntregadorSearchComponent, EntregadorGridComponent, EntregadorCreateAndEditComponent],
  imports: [
    CommonModule
  ]
})
export class EntregadorModule { }

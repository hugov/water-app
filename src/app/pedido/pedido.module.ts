import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PedidoGridComponent } from './pedido-grid/pedido-grid.component';
import { PedidoSearchComponent } from './pedido-search/pedido-search.component';
import { PedidoCreateAndEditComponent } from './pedido-create-and-edit/pedido-create-and-edit.component';



@NgModule({
  declarations: [PedidoGridComponent, PedidoSearchComponent, PedidoCreateAndEditComponent],
  imports: [
    CommonModule
  ]
})
export class PedidoModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClienteSearchComponent } from './cliente-search/cliente-search.component';
import { ClienteGridComponent } from './cliente-grid/cliente-grid.component';
import { ClienteCreateAndEditComponent } from './cliente-create-and-edit/cliente-create-and-edit.component';



@NgModule({
  declarations: [ClienteSearchComponent, ClienteGridComponent, ClienteCreateAndEditComponent],
  imports: [
    CommonModule
  ]
})
export class ClienteModule { }

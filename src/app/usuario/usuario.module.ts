import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioSearchComponent } from './usuario-search/usuario-search.component';
import { UsuarioGridComponent } from './usuario-grid/usuario-grid.component';
import { UsuarioCreateAndEditComponent } from './usuario-create-and-edit/usuario-create-and-edit.component';



@NgModule({
  declarations: [UsuarioSearchComponent, UsuarioGridComponent, UsuarioCreateAndEditComponent],
  imports: [
    CommonModule
  ]
})
export class UsuarioModule { }

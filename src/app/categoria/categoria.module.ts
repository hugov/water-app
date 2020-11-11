import { ConfirmationService } from 'primeng/api';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import {ToastModule} from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { InputTextModule } from 'primeng/inputtext';
import {InputMaskModule} from 'primeng/inputmask';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

import { CategoriaGridComponent } from './categoria-grid/categoria-grid.component';
import { CategoriaSearchComponent } from './categoria-search/categoria-search.component';
import { CategoriaCreateAndEditComponent } from './categoria-create-and-edit/categoria-create-and-edit.component';
import { CategoriaService } from './categoria.service';

@NgModule({
  declarations: [
    CategoriaGridComponent, 
    CategoriaSearchComponent, 
    CategoriaCreateAndEditComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MessagesModule,
    MessageModule,
    RouterModule,
    TableModule,
    TooltipModule,
    ButtonModule,
    DropdownModule,
    InputTextModule,
    InputMaskModule,
    ConfirmDialogModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  exports: [
    CategoriaSearchComponent,
    CategoriaCreateAndEditComponent
  ],
  providers: [
    CategoriaService,
    ConfirmationService
  ]
})
export class CategoriaModule { }

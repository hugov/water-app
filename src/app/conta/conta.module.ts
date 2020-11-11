import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';

import { ContaGridComponent } from './conta-grid/conta-grid.component';
import { ContaSearchComponent } from './conta-search/conta-search.component';
import { ContaCreateAndEditComponent } from './conta-create-and-edit/conta-create-and-edit.component';
import { ContaService } from './conta.service';

@NgModule({
  declarations: [
    ContaGridComponent, 
    ContaSearchComponent, 
    ContaCreateAndEditComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    ToastModule,
    FormsModule,
    ReactiveFormsModule,
    DropdownModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    RouterModule,
    MessagesModule,
    MessageModule
  ],
  exports: [
    ContaSearchComponent,
    ContaCreateAndEditComponent
  ],
  providers: [
    ContaService,
    ConfirmationService
  ]
})
export class ContaModule { }

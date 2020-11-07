import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuModule } from 'primeng/menu';

import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
  ],
  imports: [
    CommonModule,
    MenuModule,
  ],
  exports: [
    NavbarComponent,
    SidebarComponent,
  ]
})
export class CoreModule { }

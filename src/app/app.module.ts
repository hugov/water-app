import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';

import { MenubarModule } from 'primeng/menubar';

import { AppComponent } from './app.component';
import { ItemModule } from './item/item.module';
import { MenuComponent } from './menu/menu.component';
import { CategoriaModule } from './categoria/categoria.module';
import { ContaModule } from './conta/conta.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ItemModule,
    CategoriaModule,
    ContaModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

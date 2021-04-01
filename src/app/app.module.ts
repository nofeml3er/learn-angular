import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Title } from './counting/counting.component';
import { HomeComponent } from './home/home.component';
import { Lab4 } from './Lab4Component/lab4.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TopbannerComponent } from './topbanner/topbanner.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { CategorymenuComponent } from './categorymenu/categorymenu.component';
import { TodolistComponent } from './todolist/todolist.component';

@NgModule({
  declarations: [
    AppComponent,
    Title,
    HomeComponent,
    Lab4,
    NavbarComponent,
    TopbannerComponent,
    SearchbarComponent,
    CategorymenuComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

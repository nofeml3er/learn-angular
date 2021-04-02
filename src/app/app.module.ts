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
import { Homework3Component } from './homework3/homework3.component';
import { Homework3navComponent } from './homework3nav/homework3nav.component';
import { Homework3searchComponent } from './homework3search/homework3search.component';
import { Homework3headComponent } from './homework3head/homework3head.component';
import { Homework3bodyComponent } from './homework3body/homework3body.component';

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
    TodolistComponent,
    Homework3Component,
    Homework3navComponent,
    Homework3searchComponent,
    Homework3headComponent,
    Homework3bodyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

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

const appRoutes: Routes = [
  { path: 'lab4', component: Lab4 }, //ข้อ11
  { path: 'lab3', component: Title }, //ข้อ10
  { path: 'home', component: HomeComponent },//ข้อ13.1
  { path: 'todolist', component: TodolistComponent }, //ข้อ13.2 + ข้อ 13.4
  { path: 'homework3', component: Homework3Component } //ข้อ13.3
];

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
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only set true
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

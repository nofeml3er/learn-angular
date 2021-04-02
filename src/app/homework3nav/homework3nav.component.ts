import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3nav',
  templateUrl: './homework3nav.component.html',
  styleUrls: ['./homework3nav.component.css']
})
export class Homework3navComponent implements OnInit {
  @Input()
  menu = ["Home", "About", "Career", "Login"];
  logo = "https://picsum.photos/id/175/300/100";
  bg ="https://picsum.photos/id/256/1920/400";
  btnLog: boolean;

  constructor() { }

  ngOnInit(): void {
  }

 btnLogin(login) {
   if(this.menu.find( word => word == "Login" && login == word)) {
     return this.btnLog = true;
   }
 }


}

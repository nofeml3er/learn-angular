import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3head',
  templateUrl: './homework3head.component.html',
  styleUrls: ['./homework3head.component.css']
})
export class Homework3headComponent implements OnInit {
  @Input()
  more = 'http://www.google.com'
  constructor() { }

  ngOnInit(): void {
  }

  // moreDetail() {
  //   console.log(2);
  // }

  signUp() {

  }

}

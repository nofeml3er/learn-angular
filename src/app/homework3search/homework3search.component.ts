import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-homework3search',
  templateUrl: './homework3search.component.html',
  styleUrls: ['./homework3search.component.css']
})
export class Homework3searchComponent implements OnInit {
  @Input()
  array = [];
  text = document.getElementById("search");
  value = '';
  
  constructor() { }
  
  ngOnInit(): void {
  }

  onEnter(value: string) { 
    this.value = value; 
    
    if(this.array.find(text => text == this.value)) {
      console.log(true);
    }else {
      this.array.push(this.value);
      console.log(this.array);
      console.log(false);
    }
  }
  

  
}

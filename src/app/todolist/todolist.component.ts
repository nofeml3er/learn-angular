import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  @Input()
  task = ["Coffee", "Breakfast"];
  newTask: string;
  index: number;

  constructor() { }

  ngOnInit(): void {
  }

  add() {
    if (this.task.find( word => word == this.newTask)) {
      console.log(true);
      return document.getElementById('alert').innerHTML = `    ${this.newTask} : It's duplicate!!`
    }else {
      this.task.push(this.newTask);
      console.log(this.task);
    }
    return document.getElementById('alert').innerHTML = ""
  }
  remove(x) {
    this.index = this.task.indexOf(x);
    console.log(this.index);
    this.task.splice(this.index,1);
  }

}

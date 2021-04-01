import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorymenu',
  templateUrl: './categorymenu.component.html',
  styleUrls: ['./categorymenu.component.css']
})
export class CategorymenuComponent implements OnInit {
  @Input() 
    categoryMenu = ["Mac", "iPad", "iPhone", "Watch", "TV", "Music", "Support"];
    iconCat = ["https://picsum.photos/50/50", "https://picsum.photos/50/50?grayscale", "https://picsum.photos/50", "https://picsum.photos/id/1/50", "https://picsum.photos/id/10/50", "https://picsum.photos/id/2/50", "https://picsum.photos/id/5/50" ];



  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  @Input()
  menu = [ "Home", "About", "Contact"];
  search: string;
  a = 0;
  tag = ["test", "iPhone12"];

  constructor() { }

  ngOnInit(): void {
  }

  searchButton() {
    this.a = this.a + 1;
    if (this.tag.find( word => word == this.search)) {
      console.log(true);
    }else {
      this.tag.push(this.search);
      console.log(this.tag);
    }
  }
}

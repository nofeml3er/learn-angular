import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-title',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})

export class Title {
    @Input()
    title: string;
    text: string;

    constructor(){}
}
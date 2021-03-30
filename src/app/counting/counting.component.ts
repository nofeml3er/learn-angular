import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-title',
    templateUrl: './counting.component.html',
    styleUrls: ['./counting.component.css']
})



export class Title {
    @Input()
    title: string;
    count = [1, 1, 1, 1];
    cart = [0, 0, 0, 0,];
    // text: string;
    items = [{
        name: "iPhone12 Pro Max", 
        price: 51900
    },
    { 
        name: "iPhone12 Pro", 
        price: 48900
    },
    {
        name: "iPhone12", 
        price: 35900 
    },
    {
        name: "iPhone12 Mini", 
        price: 31900 
    }];
    
    totalP = 0;
    
    constructor(){
        
    }
    remove0() {
        if(this.cart[0] <= 0) {
            return 0;
        }
        this.cart[0] = this.cart[0] - this.cart[0];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    remove1() {
        if(this.cart[1] <= 0) {
            return 0;
        }
        this.cart[1] = this.cart[1] - this.cart[1];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    remove2() {
        if(this.cart[2] <= 0) {
            return 0;
        }
        this.cart[2] = this.cart[2] - this.cart[2];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    remove3() {
        if(this.cart[3] <= 0) {
            return 0;
        }
        this.cart[3] = this.cart[3] - this.cart[3];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }

    cart0() {
        this.cart[0] = this.cart[0] + this.count[0];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    cart1() {
        this.cart[1] = this.cart[1] + this.count[1];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    cart2() {
        this.cart[2] = this.cart[2] + this.count[2];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    cart3() {
        this.cart[3] = this.cart[3] + this.count[3];
        this.totalP = (
            this.cart[0] * this.items[0].price
            ) + (
            this.cart[1] * this.items[1].price
            ) + (
            this.cart[2] * this.items[2].price
            ) + (
            this.cart[3] * this.items[3].price
            );
    }
    
    countN0() {
        this.count[0] = this.count[0] + 1;
    }
    countND0() {
        if(this.count[0] == 1 ){
            return 1;
        }else {
            this.count[0] = this.count[0] - 1;
        }
    }
    countN1() {
        this.count[1] = this.count[1] + 1;
    }
    countND1() {
        if(this.count[1] == 1 ){
            return 1;
        }else {
            this.count[1] = this.count[1] - 1;
        }
    }
    countN2() {
        this.count[2] = this.count[2] + 1;
    }
    countND2() {
        if(this.count[2] == 1 ){
            return 1;
        }else {
            this.count[2] = this.count[2] - 1;
        }
    }
    countN3() {
        this.count[3] = this.count[3] + 1;
    }
    countND3() {
        if(this.count[3] == 1 ){
            return 1;
        }else {
            this.count[3] = this.count[3] - 1;
        }
    }
    
}
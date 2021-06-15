import { Component } from '@angular/core';

@Component({
    selector : 'app-calculator',
    templateUrl : './calculator.component.html',
    styleUrls : ['./calculator.component.css']
})
export class CalculatorComponent{

    private _n1 : number = 0;
    private _n2 : number = 0;
    result : number = 0;

    set n1(value : string) {
        this._n1 = parseInt(value)
    }

    get n1() : string {
        return this._n1.toString() 
    }

    set n2(value : string) {
        this._n2 = parseInt(value)
    }

     get n2() : string {
        return this._n2.toString() 
    }

    onBtnAddClick(){
        this.result = this._n1 + this._n2
    }

    onBtnSubtractClick(){
        this.result = this._n1 - this._n2
    }

    onBtnMultiplyClick(){
        this.result = this._n1 * this._n2
    }

    onBtnDivideClick(){
        this.result = this._n1 / this._n2
    }
}
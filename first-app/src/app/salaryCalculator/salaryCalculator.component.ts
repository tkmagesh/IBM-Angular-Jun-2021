import { Component } from "@angular/core";
import { SalaryCalculatorService } from "./salaryCalculator.service";

@Component({
    selector :'app-salary-calculator',
    templateUrl : './salaryCalculator.component.html',
    styleUrls : ['./salaryCalculator.component.css']
})
export class SalaryCalculatorComponent{
    /* 
    calculatorService : SalaryCalculatorService;

    constructor(calculatorService : SalaryCalculatorService){
        this.calculatorService = calculatorService;
    } 
    */

    constructor(public calculatorService : SalaryCalculatorService){
        
    }
}
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GreeterComponent } from './greeter/greeter.component';
import { ProductsComponent } from './products/products.component';
import { SalaryCalculatorComponent } from './salaryCalculator/salaryCalculator.component';
import { SalaryCalculatorService } from './salaryCalculator/salaryCalculator.service';

@NgModule({
  /* declarations - Register all the UI entites of our application (component, directive, pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent,
    ProductsComponent,
    SalaryCalculatorComponent
  ],
  /* imports - other modules that this module depends on */
  imports: [
    BrowserModule
  ],
  /* providers - Register the non UI entities of our application (services) */
  providers: [
    SalaryCalculatorService
  ],
  /* bootstrap - top level components of the application */
  /* bootstrap: [AppComponent] */
  bootstrap : [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { GreeterComponent } from './greeter/greeter.component';

@NgModule({
  /* declarations - Register all the UI entites of our application (component, directive, pipe) */
  declarations: [
    AppComponent,
    GreeterComponent,
    CalculatorComponent
  ],
  /* imports - other modules that this module depends on */
  imports: [
    BrowserModule
  ],
  /* providers - Register the non UI entities of out application (services) */
  providers: [],
  /* bootstrap - top level components of the application */
  /* bootstrap: [AppComponent] */
  bootstrap : [AppComponent]
})
export class AppModule { }

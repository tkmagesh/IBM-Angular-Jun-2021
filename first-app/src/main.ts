import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

/* 
import * as calculator from './calculator'
console.log(calculator)
console.log(calculator.add(100,200))
console.log(calculator.subtract(100,200)) 
*/

/* 
import * as calculator from './calculator'
//const add = calculator.add;
const { add } = calculator;
console.log(add(1000,200)) 
*/

/* 
import { add } from './calculator'
console.log(add(1000,2000))  
*/

//importing the default exported entity
/* 
import calcObj from './calculator'
console.log(calcObj) 
*/
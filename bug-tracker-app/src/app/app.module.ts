import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
import { TrimTextPipe } from './bugs/pipes/trimText.pipe';
/* 
import { BugOperationsService } from './bugs/services/bugOperations.service';
import { BugStorageService } from './bugs/services/bugStorage.service'; 
*/

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    TrimTextPipe,
    ClosedCountPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
   /*  
    BugStorageService,
    BugOperationsService 
    */
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

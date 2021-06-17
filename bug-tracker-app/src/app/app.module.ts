import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BugsComponent } from './bugs/bugs.component';
import { BugEditComponent } from './bugs/components/bugEdit/bugEdit.component';
import { BugStatsComponent } from './bugs/components/bugStats/bugStats.component';
import { ClosedCountPipe } from './bugs/pipes/closedCount.pipe';
/* 
import { BugOperationsService } from './bugs/services/bugOperations.service';
import { BugStorageService } from './bugs/services/bugStorage.service'; 
*/

import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    BugsComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    UtilsModule
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

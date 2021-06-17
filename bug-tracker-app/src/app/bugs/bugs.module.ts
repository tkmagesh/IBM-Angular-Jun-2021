import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { UtilsModule } from "../utils/utils.module";
import { BugsComponent } from "./bugs.component";
import { BugEditComponent } from "./components/bugEdit/bugEdit.component";
import { BugStatsComponent } from "./components/bugStats/bugStats.component";
import { ClosedCountPipe } from "./pipes/closedCount.pipe";


@NgModule({
    declarations : [
        BugStatsComponent,
        BugEditComponent,
        BugsComponent,
        ClosedCountPipe
    ],
    exports : [
        BugsComponent
    ],
    imports : [
        CommonModule,
        UtilsModule
    ],
    providers : []
})
export class BugsModule{

}
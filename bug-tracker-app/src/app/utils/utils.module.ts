import { NgModule } from "@angular/core";
import { ElapsedPipe } from "./pipes/elapsed.pipe";
import { TrimTextPipe } from "./pipes/trimText.pipe";

@NgModule({
    declarations : [
        ElapsedPipe,
        TrimTextPipe
    ],
    providers : [],
    imports : [],
    exports : [
         ElapsedPipe,
        TrimTextPipe
    ]
})
export class UtilsModule{

}
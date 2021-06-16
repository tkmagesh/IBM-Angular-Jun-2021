import { Component } from "@angular/core";
import { Bug } from "./models/bug";
import { BugStorageService } from "./services/bugStorage.service";

@Component({
    selector : 'app-bugs',
    templateUrl : './bugs.component.html',
    styleUrls : ['./bugs.component.css']
})
export class BugsComponent{


    bugs : Bug[] = [];

    constructor(private bugStorage : BugStorageService){
        this.bugs = this.bugStorage.getAll()
    }

    onAddNewClick(newBugName : string){
        const newBug : Bug = {
            id : 0,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugStorage.save(newBug)
        this.bugs.push(newBug)
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugStorage.remove(bugToRemove)
        this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    }

    onBugNameClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
        this.bugStorage.save(bugToToggle)
    }

    onRemoveClosedClick(){

        /* 
        for (let index = this.bugs.length-1; index >= 0; index--){
            if (this.bugs[index].isClosed)
                this.bugs.splice(index, 1)
        }  
        */
       
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(this.onRemoveClick)
    }

    getClosedCount() : number {
        /* 
        let closedCount = 0;
        for (let bug of this.bugs){
            if (bug.isClosed)
                closedCount++
        }
        return closedCount; 
        */

        return this.bugs.reduce((result, bug) => bug.isClosed ? result + 1 : result, 0)
    }
}
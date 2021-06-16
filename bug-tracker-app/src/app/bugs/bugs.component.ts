import { Component } from "@angular/core";
import { Bug } from "./models/bug";

@Component({
    selector : 'app-bugs',
    templateUrl : './bugs.component.html',
    styleUrls : ['./bugs.component.css']
})
export class BugsComponent{

    private _currentBugId : number = 0;

    bugs : Bug[] = [];

    onAddNewClick(newBugName : string){
        const newBug : Bug = {
            id : ++this._currentBugId,
            name : newBugName,
            isClosed : false,
            createdAt : new Date()
        }
        this.bugs.push(newBug)
    }

    onRemoveClick(bugToRemove : Bug){
        this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
    }

    onBugNameClick(bugToToggle : Bug){
        bugToToggle.isClosed = !bugToToggle.isClosed;
    }

    onRemoveClosedClick(){

        /* 
        for (let index = this.bugs.length-1; index >= 0; index--){
            if (this.bugs[index].isClosed)
                this.bugs.splice(index, 1)
        }  
        */
       
        this.bugs = this.bugs.filter(bug => !bug.isClosed)
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
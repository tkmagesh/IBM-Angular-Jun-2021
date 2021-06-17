import { Injectable } from "@angular/core";
import { Bug } from "../models/bug";
import { BugStorageService } from "./bugStorage.service";

@Injectable({
    providedIn : 'root'
})
export class BugOperationsService{
    bugs : Bug[] = [];

    constructor(private bugStorage : BugStorageService){

    }
    createNew(bugName : string) {
        const newBug : Bug = {
            id : 0,
            name : bugName,
            isClosed : false,
            createdAt : new Date()
        };
        this.bugStorage.save(newBug)
        //this.bugs.push(newBug);
        this.bugs = [...this.bugs, newBug]
    }

    toggle(bugToToggle : Bug){
        //mutation
        //bugToToggle.isClosed = !bugToToggle.isClosed
        //immutable
        const toggledBug = { ...bugToToggle, isClosed : !bugToToggle.isClosed}
        this.bugStorage.save(toggledBug)
        this.bugs = this.bugs.map(bug => bug.id === toggledBug.id ? toggledBug : bug)
    }

    loadBugs(){
        this.bugs = this.bugStorage.getAll();
    }

    remove(bugToRemove : Bug){
        this.bugStorage.remove(bugToRemove);
        //this.bugs.splice(this.bugs.indexOf(bugToRemove), 1)
        this.bugs = this.bugs.filter(bug => bug.id !== bugToRemove.id)
    }

    removeClosed(){
        this.bugs
            .filter(bug => bug.isClosed)
            .forEach(bug => this.remove(bug))
    }
}
import { Bug } from "../models/bug";

export class BugStorageService{
    private storage : Storage = window.localStorage;
    private _currentBugId : number = 0;

    getAll() : Bug[]{
        let bugs : Bug[] = [];
        for(let index = 0; index < this.storage.length; index++){
            let key = this.storage.key(index);
            if (key) {
                let rawString = this.storage.getItem(key);
                if ( rawString ) {
                    let bug = JSON.parse(rawString);
                    bugs.push(bug);
                }
            }
        }
        return bugs;
    }

    save(bug : Bug){
        if (bug.id === 0)
            bug.id = ++this._currentBugId;
        this.storage.setItem(bug.id.toString(), JSON.stringify(bug))
    }

    remove(bug : Bug){
        this.storage.removeItem(bug.id.toString())
    }
}
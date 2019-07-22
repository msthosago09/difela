import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    public items: any = [];
    private data = {title: "", number: "", lyrics: ""};
    private selectedNumber = "";

    constructor() {
        this.items = [
            {title: "one"}, {title: "two"},{title: "ten"},{title: "eleven"},
            {title: "three"}, {title: "four"}, {title: "nine"},{title: "twelve"},
            {title: "five"}, {title: "six"}, {title: "seven"}, {title: "eight"},
            {title: "one"}, {title: "two"},{title: "ten"},{title: "eleven"},
            {title: "three"}, {title: "four"}, {title: "nine"},{title: "twelve"},
            {title: "five"}, {title: "six"}, {title: "seven"}, {title: "eight"}
        ];
    }

    filterItems(searchTerm){
        return this.items.filter(item => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    selectHymn(num) {
        console.log("selected "+num)
        this.selectedNumber = num;
    }

    getHymn(){
        return this.selectedNumber;
    }

    addToFavesDb(id){
        console.log("adding to faves: "+id);
    }
}

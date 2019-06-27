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
            {title: "one"}, {title: "two"},
            {title: "three"}, {title: "four"},
            {title: "five"}, {title: "six"}
        ];
    }

    filterItems(searchTerm){
        return this.items.filter(item => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });
    }

    selectHymn(num) {
        this.selectedNumber = num;
    }

    getHymn(){
        return this.selectedNumber
    }
}

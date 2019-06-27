import {Component} from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
    public items: any = [];
    public searchTerm: String = "";

    constructor(private platform: Platform, private _router: Router, private _data: DataService) {
    }

    setFilteredItems(){
        this.items = this._data.filterItems(this.searchTerm);
        console.log("filter");
    }

    ngOnInit() {
        this.setFilteredItems();
    }

    openHymnDetails(id) {
        this._data.selectHymn(id);
        this._router.navigate(["/hymn-details"]);
    }
}

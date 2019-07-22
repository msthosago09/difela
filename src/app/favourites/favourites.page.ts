import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
})
export class FavouritesPage {
    constructor(
        private platform: Platform,
        private _router: Router,
        private _data: DataService
    ) {
    }

    openHymnDetails(id) {
        this._data.selectHymn(id);
        this._router.navigate(["/hymn-details"]);
    }
}

import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favourites',
  templateUrl: 'favourites.page.html',
  styleUrls: ['favourites.page.scss'],
})
export class FavouritesPage {
    constructor(
        private platform: Platform,
        private _router: Router,
    ) {
    }

    openHymnDetails(id) {
        this._router.navigate(["/hymn-details"]);
    }
}

import { Component } from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-hymn-details',
  templateUrl: 'hymn-details.page.html',
  styleUrls: ['hymn-details.page.scss'],
})
export class HymnDetailsPage {
    public number: String;

    constructor(private platform: Platform, private _router: Router, private _data: DataService) {
      this.loadHymn();
    }

    loadHymn() {
        this.number = this._data.getHymn();
    }

}

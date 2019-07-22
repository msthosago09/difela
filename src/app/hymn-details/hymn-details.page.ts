import {Component, OnInit} from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-hymn-details',
  templateUrl: 'hymn-details.page.html',
  styleUrls: ['hymn-details.page.scss'],
})
export class HymnDetailsPage implements OnInit{
    public number: String;
    public favourite: boolean = false;

    constructor(private platform: Platform, private _router: Router, private _data: DataService) {
    }

    loadHymn() {
        this.number = this._data.getHymn();
    }

    ngOnInit() {
        this.loadHymn();
    }

    addToFaves(id){
        this._data.addToFavesDb(id);
    }
}

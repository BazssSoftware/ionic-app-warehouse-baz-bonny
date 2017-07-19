import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import {ThingsPage} from '../cosa/cosa';
import {WherePage} from '../dove/dove';
import {MenuPage} from '../menu/menu';

@Component({
    selector: 'page-riepilogo',
    templateUrl: 'riepilogo.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class SummaryPage{
    constructor(public navCtrl: NavController) {    }
    
    listaCosa: Array<object> = JSON.parse(localStorage.getItem("listaCosa"));
    listaDove: Array<object> = JSON.parse(localStorage.getItem("listaADove"));
    listaDaDove: Array<object> = JSON.parse(localStorage.getItem("listaDaDove"));

    index: number = 1;

    aggiungi(){
        this.navCtrl.push(ThingsPage);
    }
    goHome(){
        this.navCtrl.push(MenuPage)
    }
}
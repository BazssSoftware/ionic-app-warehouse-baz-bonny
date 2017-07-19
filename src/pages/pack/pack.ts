import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import * as data from './lista.json';

@Component({
  selector: 'page-pack',
  templateUrl: 'pack.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class PackPage { //DEMO DI PROVA DI UTILIZZO DI UN FILE .JSON
  //data --> dati da file json
  //a --> dati che vengono aggiornati
  constructor(public navCtrl: NavController,) {
    this.a = data;
   }

  public a = JSON.parse(localStorage.getItem("lista"));
  
  public aggiorna(){
    localStorage.setItem("lista",JSON.stringify(this.a));
  }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { OnlyNumber } from '../onlynumber.directive';
import { SummaryPage } from '../riepilogo/riepilogo';
import { FromWhere } from '../daDove/daDove';
import * as data from '../data.json';

@Component({
  selector: 'page-dove',
  templateUrl: 'dove.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class WherePage {  //A DOVE??
  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {  }

  public d = (<any>data);
  barcodUbic: number = null;
  vis1: boolean = true;
  codUbic: object = null;
  descrizione: string = "";
  ind: number = null;

  lista: Array<object> = JSON.parse(localStorage.getItem("listaADove"));

  buttonCheck(): void {
    if (this.check()) {
      this.vis1 = false;
      this.incrementaLista();

      let n = parseInt(localStorage.getItem("instructions"));

      this.navCtrl.push(SummaryPage); //va nella pagina DA DOVE
    }
    else {
      this.showPrompt();  //sbagliato
    }
  }

  check(): boolean {
    for (var i = 0; i < Object.keys(this.d.batchList).length; i++) {
      if (this.barcodUbic == this.d.locationList[i].barcode) {
        this.codUbic = this.d.locationList[i]; //assegno l'oggetto corretto
        this.ind = i;
        return true;
      }
    }
    return false;
  }

  incrementaLista(): void {
    let a: object = {
      "barcode": this.barcodUbic,
      "code": this.d.locationList[this.ind].code,
      "description": this.d.locationList[this.ind].description
    };

    this.lista.push(a);

    localStorage.setItem("listaADove", JSON.stringify(this.lista));
  }

  showPrompt(): void {
    let prompt = this.alertCtrl.create({
      title: "Attenzione",
      message: "I campi inseriti non sono corretti",
      buttons: [{ "text": 'OK' }]
    });
    prompt.present();
  }
}
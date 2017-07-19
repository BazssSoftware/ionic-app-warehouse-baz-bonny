import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { WherePage } from '../dove/dove';
import { OnlyNumber } from '../onlynumber.directive';
import { FromWhere } from '../daDove/daDove';
import * as data from '../data.json';
/// <reference path="path/to/node.d.ts" />

@Component({
  selector: 'page-cosa',
  templateUrl: 'cosa.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class ThingsPage {
  public d = (<any>data); //dati del file .json

  notConfirmed: boolean = true; //per l'NgIF delle altre parti

  arr: number[] = [];  //per avere i numeri da 1 a 100 per l'utente
  ean: number = null;
  codice: string = "";
  descrizione: string = "";
  lotto: number = null;
  lottoCorretto: boolean;
  dataScad: string = "";
  quantita: number = 1;  //di default
  unitaMisura: string = "";
  indice: number = null;

  articolo: object = { "hasbatch": false };  //per evitare conflitti
  bottoni: boolean[] = [true, false, false];
  fallito: boolean = false;
  finished: boolean = false;

  lista: Array<object> = [];

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, ) {

    this.lista = JSON.parse(localStorage.getItem("listaCosa"));
  }

  frstButton(): void {
    let a: boolean = true; //per la funzione

    for (var i = 0; i < Object.keys(this.d.productList).length; i++) {
      if (this.ean == this.d.productList[i].barcode) {  //se coincide con un barcode esistente
        this.indice = i;
        a = true;
        break;
      }
      else
        a = false;
    }
    if (a) {
      this.notConfirmed = false;
      this.sistemaItems(this.indice);
      this.bottoni[0] = false;  //spegne il bottone 1

      if (this.d.productList[this.indice].hasbatch) //se ha il lotto
        this.bottoni[1] = true;

      else { //se no accende quantita
        this.bottoni[1] = false;
        this.bottoni[2] = true;
      }
    }

    if (!a) {
      this.bottoni[0] = true;
      this.notConfirmed = true;
      this.showPrompt("Il codice barcode non è corretto o non esiste");  //sbagliato
    }
  }

  sistemaItems(ind: number): void {
    this.articolo = this.d.productList[ind];
    this.codice = this.d.productList[ind].code;
    this.descrizione = this.d.productList[ind].description;
    this.unitaMisura = this.d.productList[ind].measureunit;
  }

  incrementaLista(): void {
      let a: object = {"barcode": this.d.productList[this.indice].barcode,
        "code": this.d.productList[this.indice].code,
        "description": this.d.productList[this.indice].description,
        "hasbatch": this.d.productList[this.indice].hasbatch,
        "amount": this.quantita,
        "measureunit": this.d.productList[this.indice].measureunit,
        "expiredate": this.d.productList[this.indice].expiredate,
        "lottoInserito": this.lotto
      };
      this.lista.push(a);

      localStorage.setItem("listaCosa", JSON.stringify(this.lista));
  }

  qtaBtn(): void {
    this.finished = true;
    this.fallito = false;

    this.incrementaLista();

    let b: number = parseInt(localStorage.getItem("instructions"));

    switch(b){
      case 0: this.navCtrl.push(WherePage); return;  //a dove
      case 1: this.navCtrl.push(FromWhere); return;  //da dove
      case 2: this.navCtrl.push(FromWhere); return;  //da dove
    }
  }

  lottoBtn(): void {
    let esci: boolean = false;
    let indice = 0;

    for (var i = 0; i < Object.keys(this.d.batchList).length; i++) {
      if (this.lotto == this.d.batchList[i].batchcode && this.d.batchList[i].productcode == this.codice) {  //stesso codice e stesso lotto
        esci = true;
        indice = i;
        break;
      }
      else
        esci = false;
    }

    if (esci) {
      this.dataScad = this.d.batchList[indice].expiredate;
      this.lottoCorretto = true;
      this.bottoni[1] = false;
      this.bottoni[2] = true;
      this.fallito = false;
      this.finished = true;

    }
    else {
      this.bottoni[1] = true;
      this.bottoni[2] = false;
      this.fallito = true;
      this.finished = false;

      this.showPrompt("Il lotto inserito non è corretto o non esiste");
    }
  }

  showPrompt(message: string): void {
    let prompt = this.alertCtrl.create({
      title: "Attenzione",
      message: message,
      buttons: [{ "text": 'OK' }]
    });
    prompt.present();
  }
}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { WherePage } from '../dove/dove';
import { SummaryPage } from '../riepilogo/riepilogo';

import * as data from '../data.json';

@Component({
    selector: 'page-fromWhere',
    templateUrl: 'daDove.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class FromWhere {    //DA DOVE???
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
        this.lista = JSON.parse(localStorage.getItem("listaDaDove"));

    }

    ind: number = null;
    barcodUbic: number = null;
    vis1: boolean = true;

    public d = (<any>data);
    obj: object = null;

    lista: Array<object> = [];

    goOver(): void {
        if (this.check()) {
            this.vis1 = false;
            this.incrementaLista();

            let n = parseInt(localStorage.getItem("instructions"));
            
            if(n==2)
                this.navCtrl.push(SummaryPage);  //va nel riepilogo 
            else    
                this.navCtrl.push(WherePage); //va nella pagina A DOVE
            
        }
        else{   //se è sbagliato
            this.showPrompt();
        }
    }

    incrementaLista(): void {
        let a: object = {"barcode": this.barcodUbic,
                         "code": this.d.locationList[this.ind].code,
                         "description": this.d.locationList[this.ind].description
        };

        this.lista.push(a);
        
        localStorage.setItem("listaDaDove", JSON.stringify(this.lista));
    }

    check(): boolean {
        for (let i = 0; i < Object.keys(this.d.locationList).length; i++) {
            if (this.barcodUbic == this.d.locationList[i].barcode) {
                this.obj = this.d.locationList[i];
                this.ind = i;
                console.log(this.obj);
                return true;
            }
        }
        return false;
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
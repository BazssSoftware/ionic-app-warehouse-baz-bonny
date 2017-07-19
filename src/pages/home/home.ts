import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import * as data from './setting.json'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class HomePage {
  user: string = "";
  psw: string = "";
  loginFailed: boolean = false;

  constructor(public navCtrl: NavController) { 
      localStorage.clear();
   }

  login() {
    this.loginFailed = false;
    var st = data;

    for (var i = 0; i < Object.keys(data).length; i++) {
      if (this.user == data[i].user && this.psw == data[i].password) {
        this.loginFailed = false;
        this.operazioniLogin();
        this.navCtrl.push(MenuPage);

        break;
      }
      else {
        this.loginFailed = true;
      }
    }
  }
  operazioniLogin(): void {
    localStorage.setItem("user", this.user);
    localStorage.setItem("password", this.psw);

    let date = new Date();
    date.setHours(date.getHours() + 2);
    let sDate = date.toISOString();
    localStorage.setItem("timeSession", sDate);

    let lista: Array<object> = [];
    localStorage.setItem("listaCosa", JSON.stringify(lista));  //assegno liste vuote
    localStorage.setItem("listaADove", JSON.stringify(lista));
    localStorage.setItem("listaDaDove", JSON.stringify(lista));
    
  }
}

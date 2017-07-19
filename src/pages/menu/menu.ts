import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { TasksPage } from '../tasks/tasks';
import { PackPage } from '../pack/pack';
import { InfoPage } from '../info/info';
import { StatistPage } from '../statist/statist';
import { ThingsPage } from '../cosa/cosa';
import { SummaryPage } from '../riepilogo/riepilogo';
import { FromWhere } from '../daDove/daDove';
import * as data from '../data.json';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class MenuPage {
  constructor(public navCtrl: NavController,public alertCtrl: AlertController,) {
    localStorage.setItem("instructions","");
    }

  public d = (<any>data);

  public logout(){
    let alert = this.alertCtrl.create({
      title: 'Sure?',
      message: 'Are you sure do you want to leave this beautiful session?',
      buttons: [
      {
        text: 'YES',
        handler: () => {
          this.navCtrl.push(HomePage);
        }
      },
      { text: 'NO' }]
  });
  alert.present();
}

gotoWhere(index: number): void{ //per far memorizzare se fa stock, trasferimento o prelievo
  localStorage.setItem("instructions",index.toString());
  
  this.navCtrl.push(ThingsPage);  //di default in pagina cosa
}

buttonRiepilogo(): void{
  this.navCtrl.push(SummaryPage);
}

buttonStatist(): void{
  this.navCtrl.push(StatistPage);
}
infos(): void{
  this.navCtrl.push(InfoPage);
}

}
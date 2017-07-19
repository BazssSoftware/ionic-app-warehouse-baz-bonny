import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';
import { HomePage } from '../home/home';
import * as data from './example.json';

@Component({
  selector: 'page-info',
  templateUrl: 'info.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class InfoPage {
  user: string;
  date: string;

  constructor(public navCtrl: NavController) {
    this.user = localStorage.getItem("user");
    this.date = localStorage.getItem("timeSession");
}

}
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MenuPage } from '../menu/menu';

@Component({
  selector: 'page-tasks',
  templateUrl: 'tasks.html'
})
//Created by Giacomo Bazan and Francesco Bonaldo at MOX Solutions Srl
export class TasksPage {
  constructor(public navCtrl: NavController,) {  }
}
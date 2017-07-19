import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TasksPage } from '../pages/tasks/tasks';
import { PackPage } from '../pages/pack/pack';
import { InfoPage } from '../pages/info/info';
import { StatistPage } from '../pages/statist/statist';
import { ThingsPage } from '../pages/cosa/cosa';
import { WherePage } from '../pages/dove/dove';
import { FromWhere } from '../pages/daDove/daDove';
import { SummaryPage } from '../pages/riepilogo/riepilogo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

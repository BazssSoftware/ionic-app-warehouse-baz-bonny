import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { CommonModule } from '@angular/common';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MenuPage } from '../pages/menu/menu';
import { TasksPage } from '../pages/tasks/tasks';
import { PackPage } from '../pages/pack/pack';
import { InfoPage } from '../pages/info/info';
import { StatistPage } from '../pages/statist/statist';
import { ThingsPage } from '../pages/cosa/cosa';
import { WherePage } from '../pages/dove/dove';
import { SummaryPage } from '../pages/riepilogo/riepilogo';
import { FromWhere } from '../pages/daDove/daDove';
import { OnlyNumber } from '../pages/onlynumber.directive';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MenuPage,
    TasksPage,
    PackPage,
    InfoPage,
    StatistPage,
    ThingsPage,
    OnlyNumber,
    WherePage,
    SummaryPage,
    FromWhere
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CommonModule
      ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MenuPage,
    TasksPage,
    PackPage,
    InfoPage,
    StatistPage,
    ThingsPage,
    WherePage,
    SummaryPage,
    FromWhere
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

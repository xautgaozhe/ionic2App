import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Userinfo } from '../pages/userinfo/userinfo';
import { Helper } from '../pages/helper/helper';
import { Custlist } from '../pages/custlist/custlist';
import { Tabs } from '../pages/tabs/tabs';
import { Offer } from '../pages/offer/offer';
import { Product } from '../pages/product/product';
import { Promote } from '../pages/promote/promote';
import { Result } from '../pages/result/result';
import { NavigationDetails } from '../pages/navigation-details/navigation-details';
import { OfferInfo } from '../pages/offer-info/offer-info'
import { OfferDetails } from '../pages/offer-details/offer-details';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';//不添加此引用 报错 缺少HTTP
import { HttpService } from '../providers/http-service';
import { StorageService } from '../providers/storage-service'
@NgModule({
  declarations: [
    Login,
    MyApp,
    HomePage,
    ListPage,
    Helper,
    Custlist,
    Userinfo,
    Tabs,
    Product,
    Promote,
    Result,
    NavigationDetails,
    OfferInfo,
    OfferDetails
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    Login,
    MyApp,
    HomePage,
    ListPage,
    Helper,
    Custlist,
    Userinfo,
    Tabs,
    Product,
    Promote,
    Result,
    NavigationDetails,
    OfferInfo,
    OfferDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    StorageService,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }

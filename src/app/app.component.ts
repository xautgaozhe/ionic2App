import { Component, ViewChild } from '@angular/core';
import {NavController, Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StorageService } from '../providers/storage-service';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { Login } from '../pages/login/login';
import { Userinfo } from '../pages/userinfo/userinfo';

@Component({
  templateUrl: 'app.html'
})
export class MyApp{
  //login:Login;
  account:any;
  rootPage: any = HomePage;
public static backButtonPressed: boolean = false; //用于判断返回键是否触发
  @ViewChild(Nav) nav: Nav;
  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public statusBar: StatusBar,public splashScreen: SplashScreen,
              public storageService: StorageService){

    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: '主页', component: HomePage },
      { title: '列表', component: ListPage },
      { title: '用户信息', component: Userinfo }
    ];

    if (!this.isLogin()) {
      this.rootPage = Login;
    }
     this.account = this.storageService.read("account");
  }

  isLogin(): boolean  {
    var flag: boolean = false;
     //let token = this.storageService.read("token"); //获取令牌
    let token ="";
    if (token ==""){
      flag = false;
    }else{
      flag = true;
    }
    //alert(this.storageService.read("token"));
    return flag;
  }

  initializeApp() {
    //alert(super.getUsernam());
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  userInfo(){
    alert("haha");
    //this.nav.setRoot(Userinfo);

    //this.nav.push(Userinfo);
    //this.navCtrl.push(Userinfo);
  }
}

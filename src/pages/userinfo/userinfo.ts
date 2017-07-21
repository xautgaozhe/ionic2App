import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoService } from '../../providers/user-info-service';
import { StorageService } from '../../providers/storage-service';
/**
 * Generated class for the Userinfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-userinfo',
  templateUrl: 'userinfo.html',
  providers: [UserInfoService]
})
export class Userinfo {
  items:any;
  str :any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public userInfoService: UserInfoService,public storageService: StorageService) {
   // this.userInfoService.getUserInfo();
    let token = this.storageService.read("token");
    this.userInfoService.getUserInfo(token).then(data => {
      this.items = data;
    } )
  }

  ionViewDidLoad() {
   /* let token = this.storageService.read("token");
   this.userInfoService.getUserInfo(token).then(data => {
     this.items = data;
     alert(this.items.account);
   } )*/
    console.log('ionViewDidLoad Userinfo');
  }

}

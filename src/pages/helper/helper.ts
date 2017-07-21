import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { Custlist } from '../custlist/custlist';
// import { Http, Response, Headers, RequestOptions } from '@angular/http';
// import { HttpService } from "../../providers/http-service";
/**
 * Generated class for the Helper page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'helper.html',
  // selector: 'page-helper',
})
export class Helper {
  public info={
    cert_nbr:'610326198408231655',
  }

  public ID_No={
    num:'610481199011073016'
  }
  constructor( public navCtrl: NavController, public navParams: NavParams,
        private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Helper');
  }
  search(){
    //loading
    // let loading = this.loadingCtrl.create({
    //     content: 'Please wait...',
    //     spinner: 'dots',
    //     duration: 3000, //单位是毫秒
    //   });
    //   loading.present();
    //   setTimeout(() => {
    //     loading.dismiss();
    //   }, 3000);


     //get
    // var url="http://localhost:29405/salehelp/getCust/"+this.info.cert_nbr;
    // var data=this.httpService.httpGetNoAuth(url);
    //console.log(data);
    this.navCtrl.push(Custlist,this.ID_No.num);
  }

}

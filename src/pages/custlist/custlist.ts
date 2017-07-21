import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Http } from '@angular/http';
import { HttpService } from "../../providers/http-service";
import { Tabs } from "../tabs/tabs";

/**
 * Generated class for the Custlist page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-custlist',
  templateUrl: 'custlist.html',
})
export class Custlist {

  items=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private http: Http,
        private httpService: HttpService) {
    console.log(this.navParams.data);//打印的是传过来的所有数据
    var cert_nbr=this.navParams.data;
    var url="http://localhost:29405/salehelp/getCust/"+cert_nbr;
    this.httpService.httpGetNoAuth(url).then(res=>this.items=res);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Custlist');
  }
  itemSelected(event, item){
    alert(item.cust_id);
    this.navCtrl.push(Tabs,item.cust_id)
  }

}

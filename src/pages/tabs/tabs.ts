import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { Product } from '../product/product';
import { Promote } from '../promote/promote';
import { Result } from '../result/result';

/**
 * Generated class for the Tabs page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  templateUrl: 'tabs.html',
})
export class Tabs {
  //tab1Root=Offer;
  tab2Root=Product;
  tab3Root=Promote;
  tab4Root=Result;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tabs');
  }

}

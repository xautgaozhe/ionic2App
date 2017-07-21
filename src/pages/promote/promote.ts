import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the Promote page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-promote',
  templateUrl: 'promote.html',
})
export class Promote {

  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Promote');
  }

}

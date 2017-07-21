import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NavigationDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-navigation-details',
  templateUrl: 'navigation-details.html',
})
export class NavigationDetails {

  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NavigationDetails');
  }

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Helper } from '../helper/helper';
import { OfferInfo } from '../offer-info/offer-info'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{

  constructor(public navCtrl: NavController) {
  }
  to_helper(){
    this.navCtrl.push(Helper);
  }
  offer_Info(){
    this.navCtrl.push(OfferInfo);
  }
}

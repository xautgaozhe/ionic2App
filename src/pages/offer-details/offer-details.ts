import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Offer } from '../../providers/offer'
import { Promote } from '../../pages/promote/promote'
/**
 * Generated class for the OfferDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offer-details',
  templateUrl: 'offer-details.html',
  providers:[Offer]
})
export class OfferDetails {

  teleNum:any;
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public  offer:Offer) {
    let teleNum = this.navParams.data;
    this.offer.search_OfferInfo(teleNum).then(data => {
      this.items = data;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferDetails');
  }

  itemSelected(event,item) {
    this.navCtrl.push(Promote,item);
    console.log("Selected Item",item);
  }
}

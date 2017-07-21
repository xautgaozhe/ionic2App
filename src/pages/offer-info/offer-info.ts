import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { OfferDetails } from '../offer-details/offer-details'
/**
 * Generated class for the OfferInfo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-offer-info',
  templateUrl: 'offer-info.html',
})
export class OfferInfo {
  offerInfo_form:FormGroup;
  items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public formBuilder: FormBuilder) {
    this.offerInfo_form = formBuilder.group({
      teleNum:['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OfferInfo');
  }
  offerInfo_search(offerInfo){
    this.navCtrl.push(OfferDetails,offerInfo.teleNum);
  }
}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OfferInfo } from './offer-info';

@NgModule({
  declarations: [
    OfferInfo,
  ],
  imports: [
    IonicPageModule.forChild(OfferInfo),
  ],
  exports: [
    OfferInfo
  ]
})
export class OfferInfoModule {}

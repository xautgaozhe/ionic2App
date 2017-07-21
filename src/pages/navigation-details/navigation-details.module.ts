import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NavigationDetails } from './navigation-details';

@NgModule({
  declarations: [
    NavigationDetails,
  ],
  imports: [
    IonicPageModule.forChild(NavigationDetails),
  ],
  exports: [
    NavigationDetails
  ]
})
export class NavigationDetailsModule {}

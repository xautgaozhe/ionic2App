import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Helper } from './helper';

@NgModule({
  declarations: [
    Helper,
  ],
  imports: [
    IonicPageModule.forChild(Helper),
  ],
  exports: [
    Helper
  ]
})
export class HelperModule {}

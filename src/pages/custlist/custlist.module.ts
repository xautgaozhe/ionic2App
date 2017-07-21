import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Custlist } from './custlist';

@NgModule({
  declarations: [
    Custlist,
  ],
  imports: [
    IonicPageModule.forChild(Custlist),
  ],
  exports: [
    Custlist
  ]
})
export class CustlistModule {}

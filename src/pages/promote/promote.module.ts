import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Promote } from './promote';

@NgModule({
  declarations: [
    Promote,
  ],
  imports: [
    IonicPageModule.forChild(Promote),
  ],
  exports: [
    Promote
  ]
})
export class PromoteModule {}

import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { NavigationDetails } from  '../navigation-details/navigation-details'
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
 items:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.items=["sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs","sjs",];
  }
}

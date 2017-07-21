import { Injectable } from '@angular/core';
import { HttpService } from '../providers/http-service';

import 'rxjs/add/operator/map';

/*
  Generated class for the Offer provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Offer {

  API_URL = 'http://localhost:8080/simple-service-webapp/webapi';
  constructor(private httpService: HttpService){}

  search_OfferInfo(teleNum){
    var url = this.API_URL + "/offer/offerInfo?teleNum="+teleNum;
    console.log(url);
    return this.httpService.httpGetNoAuth(url);
  }

}

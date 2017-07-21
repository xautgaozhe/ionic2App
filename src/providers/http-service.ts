import { Injectable } from '@angular/core';
import { Http ,Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';
//import { Observable } from 'rxjs/Observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {StorageService} from "./storage-service";
import { UserInfoData } from '../Model/UserInfoData'

// import { StorageService } from "./StorageService";
// import { UserInfoData } from "./../model/UserInfoData";
/*
  Generated class for the HttpService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpService {


  constructor(private http: Http,private storageService:StorageService) {
    console.log('Hello HttpService Provider');
  }
  public httpGetWithAuth(url: string) {
    let user = this.storageService.read<UserInfoData>('UserInfo');
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', user.ID + '-' + user.UserToken);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpGetNoAuth(url: string) {

    var headers = new Headers();
   //headers.append('Content-Type', 'text/plain');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(url, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  public httpPostNoAuth(url: string, body: any) {
    var headers = new Headers();
    //headers.append("Accept",'json');
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
   // headers.append('Content-Type','application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.post(url, body, options).toPromise()
      .then(res => res.json())
      .catch(err => {
        this.handleError(err);
      });
  }
  // public httpPostWithAuth(body: any, url: string) {

  //     return this.myInfoLocal = this.local.getJson('UserInfo')
  //         .then((result) => {
  //             var headers = new Headers();
  //             headers.append('Content-Type', 'application/json');
  //             headers.append('Authorization', result.ID + '-' + result.UserToken);
  //             let options = new RequestOptions({ headers: headers });
  //             return this.http.post(url, body, options).toPromise();
  //         });
  // }


  private handleError(error: Response) {
    console.log(error);
    return Observable.throw(error.json().error || 'Server Error');
  }
}

import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpService } from '../providers/http-service';
import { StorageService } from '../providers/storage-service'

/*
  Generated class for the UserInfoService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class UserInfoService {

  API_URL = 'http://localhost:8080/simple-service-webapp/webapi';
  constructor(private http:Http,
              private httpService: HttpService,
              private storageService:StorageService){}

  login(user) {
    var url = this.API_URL + "/myresource/userInfo";
    console.log(url);
    return this.httpService.httpPostNoAuth(url, user);
  }

getUserInfo(token){
    var url=this.API_URL + "/myresource/userInfo1?token="+token;
    return this.httpService.httpGetNoAuth(url);
}
/*  GetUserInfo(id: number) {
    var url = this.API_URL + "/UserInfo/"+id;
    return this.httpService.httpGetWithAuth(url)
  }*/
}

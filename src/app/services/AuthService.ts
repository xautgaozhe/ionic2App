/**
 * Created by Administrator on 2017/6/23.
 */
import {tokenNotExpired} from 'angular2-jwt'

export class AuthService{
  constructor(){}

  public static authenticated(){
    return tokenNotExpired('_ionickv/token');
  }
}

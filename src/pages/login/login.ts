import { Component } from '@angular/core';
import {NavController, NavParams,LoadingController,ToastController} from 'ionic-angular';
import { HomePage } from '../home/home';
import { Tabs } from '../tabs/tabs';
import {App } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { FormBuilder, Validators, FormGroup  } from '@angular/forms';
import { UserInfoService } from '../../providers/user-info-service';
import { StorageService } from '../../providers/storage-service';
import { AlertController } from 'ionic-angular';
import { ListPage } from '../list/list'
 @Component({
   selector:'login-page',
   templateUrl:'login.html',
   providers: [UserInfoService]
 })
 export class Login {

   loginForm:FormGroup;
   username:any;
   password:any;
   constructor(public NavCtrl: NavController, public LoadCtrl: LoadingController, public formBuilder: FormBuilder, public toastCtrl: ToastController,public app:App,
               public userInfoService: UserInfoService,public alertCtrl: AlertController,public storageService: StorageService) {
  this.loginForm=formBuilder.group({
       username: ['', Validators.compose([Validators.minLength(11), Validators.maxLength(11), Validators.required, Validators.pattern("^(13[0-9]|15[012356789]|17[03678]|18[0-9]|14[57])[0-9]{8}$")])],
       password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
     });
    this.username = this.loginForm.controls['username'];
     this.password = this.loginForm.controls['password'];
   }

   ionViewDidLoad() {
     console.log('Hello Login Page');
   }

   loadDefault() {
     let loading = this.LoadCtrl.create({
       content: "正在登录...",      //loading框显示的内容
       dismissOnPageChange: true,  // 是否在切换页面之后关闭loading框
       showBackdrop: false      //是否显示遮罩层
     });
     loading.present();  // 弹出load框
     loading.dismiss();
     /*setTimeout(() => {
       loading.dismiss();
     }, 3000); */// 上面这段代码先是在按下按钮1000毫秒之后挑战页面，再在3000毫秒之后关闭loading框 // 但是因为设置了切换页面之后关闭loading框，因此在切换页面后则关闭loading框
   }



   //定义弹出框
   showAlert() {
     let alert = this.alertCtrl.create({
       subTitle: '用户名或密码错误!',
       buttons: ['OK']
     });
     alert.present();
   }

login(user){
     this.loadDefault();
/*  let userInfo ={
    'account':user.username,
    'pwd':user.password
  };
  let info = JSON.stringify(userInfo);*/
     let urlSearchParams = new URLSearchParams();
     urlSearchParams.append('username', user.username);
     urlSearchParams.append('password', user.password);
     let body = urlSearchParams.toString();
    this.userInfoService.login(body).then(data => {
    if (data.flag=="success"){
      this.storageService.write("token",data.token);
      this.storageService.write("account",user.username);
      //this.NavCtrl.push(ListPage);
     this.app.getRootNav().setRoot(HomePage);
    }
    if (data.flag=="fail"){
      this.showAlert();
    }
     /*setTimeout(() => {
     this.NavCtrl.push(Tabs);  //跳转页面
     }, 1000);*/
    });
      //console.log(data.age);

//get 请求外网

      /* if (data.Result.ID > 0)//登录成功
       {
         this.storageService.write('UserInfo', data.Result);
         //测试写缓存
         let ss = this.storageService.read<UserInfoData>('UserInfo');
         console.log(ss.UserToken);
         //传参
         this.NavCtrl.push(Tabs);
       }
       else {
         let toast = this.toastCtrl.create({
           message: '用户名或密码错误.',
           duration: 3000,
           position: 'middle',
           showCloseButton: true,
           closeButtonText: '关闭'
         });
         toast.present();
       }*/

   }

 }


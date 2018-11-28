import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BackgroundMode } from '@ionic-native/background-mode';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Platform } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public plt: Platform, public navCtrl: NavController, private backgroundMode: BackgroundMode, private localNotifications: LocalNotifications) {
  }

  ionViewDidLoad(){
    this.plt.ready().then((readySource) => {
      console.log('Platform ready from', readySource);
      console.log('Background mode enable');
      this.backgroundMode.enable();
    });
  }

  lunchTestLater() {
    let app = this;
    setTimeout(function(){
    app.localNotifications.schedule({
        text: 'Notif : avec setInterval',
        trigger: {at: new Date(new Date().getTime() + 3600)},
        led: 'FF0000',
        sound: null
      });
    }, 10000);

  }

  lunchNow() {
    let app = this;
    app.localNotifications.schedule({
      text: 'Notif : avec setInterval',
      trigger: {at: new Date(new Date().getTime() + 3600)},
      led: 'FF0000',
      sound: null
    });
  }

}

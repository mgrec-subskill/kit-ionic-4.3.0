# kit-ionic-4.3.0

Simple Ionic Kit with BackgroundMode and LocalNotification.

## Ionic & Plugin version

Name | Version | Link
------------ | ------------- | -------------
Ionic | 4.3.0 | [Link](https://www.npmjs.com/package/ionic/v/4.3.0) | 
BackgroundMode | 0.7.2 | [Link](https://github.com/katzer/cordova-plugin-background-mode/) |
LocalNotification | 0.9.0-beta.2 | [Link](https://github.com/katzer/cordova-plugin-local-notifications) |

## Installation

### Basic installation

Use the CLI : 
* npm -i

*Source [more informations](https://ionicframework.com/getting-started#cli)*


## In case of errors or problems

### Background Mode

Use the CLI : 
* cordova plugin add https://github.com/katzer/cordova-plugin-background-mode --nofetch
* npm install --save @ionic-native/background-mode
* ionic cordova build ios

*Source [background-mode/issues/406](https://github.com/katzer/cordova-plugin-background-mode/issues/406)*

### Local Notification

Use the CLI : 
* ionic cordova plugin add cordova-plugin-local-notification
* npm install --save @ionic-native/local-notifications
* ionic cordova build ios

*Source [ionic/docs/native/local-notifications](https://github.com/katzer/cordova-plugin-background-mode/issues/406)*

## Base code sample

```javascript
    // Active backgroundMode
    ionViewDidLoad()
    {
      this.plt.ready().then((readySource) => {
        console.log('Platform ready from', readySource);
        this.backgroundMode.enable();
      });
    }
  
    // Send notification later (10s)
    lunchTestLater() 
    {
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
  
    // Send notification now
    lunchNow()
    {
      let app = this;
      app.localNotifications.schedule({
        text: 'Notif : avec setInterval',
        trigger: {at: new Date(new Date().getTime() + 3600)},
        led: 'FF0000',
        sound: null
      });
    }
```

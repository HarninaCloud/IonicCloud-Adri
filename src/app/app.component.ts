import { HomePage } from './../pages/home/home';
import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';

//import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  //rootPage:any = HomePage;
  rootPage: any = 'LoginPage';

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private auth: AuthProvider) {
    platform.ready().then(() => {
      //Comprobar la sesion
      //Si hay un cambio en la sesión automáticamente cambiara rootPage para mostrar la página de login o las pestañas en función de si tenemos la sesión activa o no
      this.auth.Session.subscribe(session => {
        if (!session) {
          this.rootPage = 'LoginPage';
        }
      })

      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}


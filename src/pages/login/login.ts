//import { AuthProvider } from '@firebase/auth-types';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  public user = { email: '', password: '' };

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  //Metodo sign in
  signin() {
    this.auth.registerUser(this.user.email, this.user.password)
      .then((user) => {
        // El usuario se ha creado correctamente
      })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })

  }
  //Metodo boton "Login"
  login() {
    this.auth.loginUser(this.user.email, this.user.password).then((user) => {
    })
      .catch(err => {
        let alert = this.alertCtrl.create({
          title: 'Error',
          subTitle: err.message,
          buttons: ['Aceptar']
        });
        alert.present();
      })
  }

}

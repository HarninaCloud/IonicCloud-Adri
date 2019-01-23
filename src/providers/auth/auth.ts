import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  constructor(private afAuth: AngularFireAuth) {
    console.log('Hello RegistroProvider Provider');
  }

  // Registro de usuario
  registerUser(email: string, password: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((res) => {
        this.afAuth.auth.signInWithEmailAndPassword(email, password)
      })
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  // Login de usuario
  loginUser(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(user => Promise.resolve(user))
      .catch(err => Promise.reject(err))
  }

  // Logout de usuario TODO
  logout() {
    this.afAuth.auth.signOut().then(() => {
      console.log("hemos salido");
    })
  }

  // Devuelve la session
  get Session() {
    return this.afAuth.authState;
  }

}

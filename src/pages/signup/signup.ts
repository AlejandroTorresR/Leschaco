import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import { NavController, MenuController } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs';
import { UserData } from '../../providers/user-data';

import { LoginPage } from '../login/login';


@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signup: {email?: string, password?: string, fname?: string, lname?: string, phone?: string} = {};
  submitted = false;

  constructor(private menu: MenuController, public navCtrl: NavController, public userData: UserData) {}

  ionViewDidEnter() {
    this.menu.swipeEnable(false);
  }

  onLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

  onSignup(form: NgForm) {
    this.submitted = true;

    if (form.valid) {
      this.userData.signup(this.signup.email);
      this.navCtrl.push(TabsPage);
    }
  }
}

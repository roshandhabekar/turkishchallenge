import { Component } from '@angular/core';
import { IonicPage, NavController ,MenuController} from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { HomePage } from '..//home.page';
import { AuthService } from '../../services/auth.service';
// import { SignupPage } from '../signup/signup';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginForm: FormGroup;
  loginError: string;
  constructor(private navCtrl: NavController,
    private auth: AuthService,
    fb: FormBuilder,private menu:MenuController) {
      this.menu.enable(false,"myMenu");
    this.loginForm = fb.group({
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.compose([Validators.required, Validators.minLength(6)])]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  login() {
    let data = this.loginForm.value;

    if (!data.email) {
      return;
    }

    let credentials = {
      email: data.email,
      password: data.password
    };
    this.auth.signInWithEmail(credentials)
      .then(
        () => this.navCtrl.setRoot("GroundsPage"),
        error => this.loginError = error.message
      );
  }
  signup(){
    this.navCtrl.push("SignupPage");
  }
}
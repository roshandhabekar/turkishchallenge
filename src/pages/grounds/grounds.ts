import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-grounds',
  templateUrl: 'grounds.html',
})
export class GroundsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public modal:ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GroundsPage');
  }
  addGround(){
    console.log("clicked on add ground");
    this.modal.create("AddGroudPage",{

    }).present();
  }
}

import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-grounds',
  templateUrl: 'grounds.html',
})
export class GroundsPage {
  private items: Observable<any[]>;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,public modal:ModalController,
    private firebaseProvide:FirebaseProvider) {
  }

  ionViewDidLoad() {
   
  this.items  = this.firebaseProvide.getListByName();
  console.log(this.items);
    console.log('ionViewDidLoad GroundsPage');
  }
  addGround(){
    console.log("clicked on add ground");
    this.modal.create("AddGroudPage",{

    }).present();
  }
  showDetailsGround(){
    console.log("clicked on show ground");
    this.modal.create("GrounddetailsPage",{
      index:"1"
    }).present();
  }
}

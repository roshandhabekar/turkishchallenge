import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController } from 'ionic-angular';
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { AngularFireDatabase } from 'angularfire2/database';
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
    private firebaseProvide:FirebaseProvider,private afd:AngularFireDatabase) {
      this.items = this.afd.list("Stadiums").valueChanges();
      //this.items  = this.firebaseProvide.getListByName();
      //  this.items.forEach(element=>{
      //    console.log(element);
      //  })
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad GroundsPage');
  }
  addGround(){
    console.log("clicked on add ground");
    this.modal.create("AddGroudPage",{

    }).present();
  }
  showDetailsGround(arr){
    console.log("clicked on show ground");
    this.modal.create("GrounddetailsPage",{
      data:arr
    }).present();
  }
}

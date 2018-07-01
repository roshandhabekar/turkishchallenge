import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { GroundDetails } from "../../model/ground-details";
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@IonicPage()
@Component({
  selector: 'page-add-groud',
  templateUrl: 'add-groud.html',
})
export class AddGroudPage {
  private groundDetails= new GroundDetails();
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private viewCntrl:ViewController
    ,private afd:AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddGroudPage');
  }
  closeModal(){
    this.viewCntrl.dismiss();
  }
  upload(){
    console.log(this.groundDetails);
    this.afd.list("Stadiums").push(this.groundDetails).then(()=>{
      this.viewCntrl.dismiss();
    });
  }
}

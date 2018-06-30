import { Component, ViewChild, ElementRef  } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;
@IonicPage()
@Component({
  selector: 'page-grounddetails',
  templateUrl: 'grounddetails.html',
})
export class GrounddetailsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  private latitude:any;
  private longitude:any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,private viewCntrl:ViewController, public geolocation: Geolocation) {
      
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad GrounddetailsPage');
  }
  closeModal(){
    this.viewCntrl.dismiss();
  }
  loadMap(){
    this.geolocation.getCurrentPosition().then((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);
      let mapOptions = {
        center:latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true, // a way to quickly hide all controls
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    },err=>{
      console.log(err);
    });
  
  }
}

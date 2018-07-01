import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { FirebaseProvider } from "../../providers/firebase/firebase";
declare var google;
@IonicPage()
@Component({
  selector: 'page-grounddetails',
  templateUrl: 'grounddetails.html',
})
export class GrounddetailsPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  private latitude: any;
  private longitude: any;
  private item: any;
 // private centerLatLong:any;
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private viewCntrl: ViewController,
    public geolocation: Geolocation,
    private firebaseProvider : FirebaseProvider) {
    this.item = this.navParams.get("data");
    this.firebaseProvider.getLocationDetails(this.item.Location).then(data=>{
   //  this.centerLatLong = data['results'][0]['geometry']['location'];
     this.latitude = data['results'][0]['geometry']['location']['lat'];
     this.longitude = data['results'][0]['geometry']['location']['lng'];

    });  
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad GrounddetailsPage');
  }
  closeModal() {
    this.viewCntrl.dismiss();
  }
  loadMap() {
    this.geolocation.getCurrentPosition().then((position) => {
      // console.log(position.coords.latitude);
      // console.log(position.coords.longitude);
      // this.latitude = position.coords.latitude;
      // this.longitude = position.coords.longitude;
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: false, // a way to quickly hide all controls
      }


      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
     
      var icon = {
        url: "https://d30y9cdsu7xlg0.cloudfront.net/png/198265-200.png", // url
        scaledSize: new google.maps.Size(50, 50), // scaled size
        origin: new google.maps.Point(0,0), // origin
        anchor: new google.maps.Point(0, 0) // anchor
    };
      let mark = new google.maps.Marker({
        map: this.map,
        position: latLng,
        icon: icon
      });
    }, err => {
      console.log(err);
    });

  }
}

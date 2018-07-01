import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
// import {
//   AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FirebaseProvider {
  items: Observable<any[]>;
  constructor(private afd:AngularFireDatabase, public http: HttpClient) {
    console.log('Hello FirebaseProvider Provider');
  }

  setlistdata(name,data){
    console.log("data sert");
    this.afd.list(name).push(data);
  }
  getListByName(){
   return this.items = this.afd.list("Stadiums").valueChanges();
  }
  getLocationDetails(locationname) {
    //https://maps.googleapis.com/maps/api/geocode/json?address=SALT%20lake%20stadium&key=AIzaSyAbv3_lvQF25gzwDNS7DFjTHdycGVWF710
    return new Promise(resolve => {
      this.http.get("https://maps.googleapis.com/maps/api/geocode/json?address="+locationname+"&key=AIzaSyAbv3_lvQF25gzwDNS7DFjTHdycGVWF710").subscribe(data => {
        resolve(data);
      }, err => {
      });
    });
  }
}

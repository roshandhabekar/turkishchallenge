//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
// import {
//   AngularFireOfflineDatabase } from 'angularfire2-offline/database';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class FirebaseProvider {
  items: Observable<any[]>;
  constructor(private afd:AngularFireDatabase) {
    console.log('Hello FirebaseProvider Provider');
  }

  setlistdata(name,data){
    console.log("data sert");
    this.afd.list(name).push(data);
  }
  getListByName(){
   return this.items = this.afd.list("Stadiums").valueChanges();
  }
}

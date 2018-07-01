import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule} from '@angular/common/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
//import { GroundsPage } from "../pages/grounds/grounds";
//import { LoginPage } from "../pages/login/login";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { FIREBASECONFIG } from "../model/firebase-config";
import { AngularFireModule } from 'angularfire2';

// import  firebase  from "firebase";

import { AuthService } from '../services/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Geolocation } from '@ionic-native/geolocation';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { PipeResolver } from '@angular/compiler';
import { PipesModule } from "../pipes/pipes.module";
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
   // GroundsPage,
   // LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(FIREBASECONFIG),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    PipesModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    //GroundsPage,
   // LoginPage
  ],
  providers: [
    Geolocation,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    AuthService,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FirebaseProvider,
    
  ]
})
export class AppModule {}

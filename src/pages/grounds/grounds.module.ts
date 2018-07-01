import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroundsPage } from './grounds';
import { FirebaseProvider } from "../../providers/firebase/firebase";
@NgModule({
  declarations: [
    GroundsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroundsPage),
  ],
  providers:[FirebaseProvider]
})
export class GroundsPageModule {}

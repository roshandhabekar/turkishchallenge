import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GroundsPage } from './grounds';
import { FirebaseProvider } from "../../providers/firebase/firebase";
import { PipesModule } from "../../pipes/pipes.module";

@NgModule({
  declarations: [
    GroundsPage,
  ],
  imports: [
    IonicPageModule.forChild(GroundsPage),
    PipesModule
  ],
  providers:[FirebaseProvider]
})
export class GroundsPageModule {}

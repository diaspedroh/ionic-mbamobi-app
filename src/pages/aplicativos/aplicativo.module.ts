import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AplicativosPage } from './aplicativo';

@NgModule({
  declarations: [
    AplicativosPage,
  ],
  imports: [
    IonicPageModule.forChild(AplicativosPage),
  ],
})
export class AplicativosPageModule {}

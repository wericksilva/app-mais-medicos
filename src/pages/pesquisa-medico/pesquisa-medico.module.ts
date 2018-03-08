import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PesquisaMedicoPage } from './pesquisa-medico';

@NgModule({
  declarations: [
    PesquisaMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(PesquisaMedicoPage),
  ],
})
export class PesquisaMedicoPageModule {}

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadastroMedicoPage } from './cadastro-medico';

@NgModule({
  declarations: [
    CadastroMedicoPage,
  ],
  imports: [
    IonicPageModule.forChild(CadastroMedicoPage),
  ],
})
export class CadastroMedicoPageModule {}

import { MedicoProvider } from './../../providers/medico/medico';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the CadastroMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro-medico',
  templateUrl: 'cadastro-medico.html',
  providers: [
    MedicoProvider
  ]
})
export class CadastroMedicoPage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private medicoProvider: MedicoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroMedicoPage');
  }

  medico = {
    nome: '',
    sobrenome: '',
    email: '',
    ativo: '',
    status: '',
    estado: '',
    cidade: ''
  };

  alertSucesso() {
    let alert = this.alertCtrl.create({
      title: 'OK!',
      subTitle: 'Seu Cadastro foi realizado com sucesso!',
      buttons: ['OK']
    });
    alert.present();
  }

  cadastrar() {
    this.medicoProvider.cadastrarMedico(this.medico).subscribe(() =>{
    },error =>{
      console.log(error);
    });
    
    
    this.alertSucesso();
    console.log(this.medico)
    this.limpaForm();

  }

  limpaForm(){
    this.medico = {
      nome: '',
      sobrenome: '',
      email: '',
      ativo: '',
      status: '',
      estado: '',
      cidade: ''
    };
  }

  
}

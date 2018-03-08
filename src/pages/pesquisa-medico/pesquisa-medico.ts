import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MedicoProvider } from '../../providers/medico/medico';

/**
 * Generated class for the PesquisaMedicoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pesquisa-medico',
  templateUrl: 'pesquisa-medico.html',
  providers: [
    MedicoProvider
  ]
})
export class PesquisaMedicoPage {


  public lista_medicos = new  Array<any>();
 

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private medicoProvider: MedicoProvider) {
  
  }

  ionViewDidLoad() {
    this.pesquisarMedicos();
  }

  pesquisarMedicos() {
    this.medicoProvider.pesquisarMedicos().subscribe(data=>{
      const response = (data as any);
      const objeto_retorno = JSON.parse(response._body)
      this.lista_medicos = objeto_retorno;
      console.log(objeto_retorno);
    }, error =>{
      console.log(error);
    })



  }




}

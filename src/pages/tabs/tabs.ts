import { CadastroMedicoPage } from './../cadastro-medico/cadastro-medico';
import { Component } from '@angular/core';


import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { PesquisaMedicoPage } from '../pesquisa-medico/pesquisa-medico';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CadastroMedicoPage;
  tab3Root = PesquisaMedicoPage;

  constructor() {

  }
}

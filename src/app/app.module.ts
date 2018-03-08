import { PesquisaMedicoPageModule } from './../pages/pesquisa-medico/pesquisa-medico.module';
import { CadastroMedicoPageModule } from './../pages/cadastro-medico/cadastro-medico.module';
import { CadastroMedicoPage } from './../pages/cadastro-medico/cadastro-medico';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { MedicoProvider } from '../providers/medico/medico';
import { PesquisaMedicoPage } from '../pages/pesquisa-medico/pesquisa-medico';

@NgModule({
  declarations: [
    MyApp,
    ContactPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    CadastroMedicoPageModule,
    PesquisaMedicoPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ContactPage,
    PesquisaMedicoPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MedicoProvider
  ]
})
export class AppModule {}

import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
/*
  Generated class for the MedicoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MedicoProvider {

  private baseApiPath = "http://localhost:8080/medicos"

  constructor(public http: Http) {
    console.log('Hello MedicoProvider Provider');
  }

  cadastrarMedico(medico: any) {

    return this.http.post(this.baseApiPath, medico);

  }
  
  pesquisarMedicos(){
    return this.http.get(this.baseApiPath);
	}



}

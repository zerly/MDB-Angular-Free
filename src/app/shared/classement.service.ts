import { Injectable } from '@angular/core';
import { Classement } from './classement.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClassementService {

  readonly rootUrl = 'http://localhost:56411/api';
  list : Classement[];

  constructor(private http: HttpClient) { }

  refreshList(){
    this.http.get<any>(this.rootUrl + '/classement')
    .toPromise()
    .then(res => this.list = res as Classement[]);
  }
}

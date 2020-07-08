import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {

  constructor(private _httpClient: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('tac');
    console.log(this.route.snapshot.queryParamMap.get('code'));
    var code = this.route.snapshot.queryParamMap.get('code');

    const body = new HttpParams()
    .set('client_id', 'xn3g12yzv87p0ohpnfsi6o1rh638dm')
    .set('client_secret', 'j7pnk23rmd6o630xkhh6ompbkig5n6')
    .set('code', 'p0sr0eqfjklb7s7zc5etgwhwwf5ta1')
    .set('grant_type', 'authorization_code')
    .set('redirect_uri', 'http://localhost:4200/twitch/login');
    let params = new HttpParams().set('client_id', 'xn3g12yzv87p0ohpnfsi6o1rh638dm');
    const req = this._httpClient.post('https://id.twitch.tv/oauth2/token?client_id=uo6dggojyb8d6soh92zknwmi5ej1q2', 
    body.toString(),
    {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
    }).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log(err);
        }
      );



  }

}

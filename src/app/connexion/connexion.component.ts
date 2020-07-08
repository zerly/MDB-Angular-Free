import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
    const req = this._httpClient.post('https://id.twitch.tv/oauth2/token?client_id=xn3g12yzv87p0ohpnfsi6o1rh638dm&client_secret=j7pnk23rmd6o630xkhh6ompbkig5n6&code='+ code +'&grant_type=authorization_code&redirect_uri=http://localhost:4200/twitch/login', {
    })
      .subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );



  }

}

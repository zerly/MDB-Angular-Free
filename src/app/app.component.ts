import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { ActivatedRoute } from '@angular/router';
import { userInfo } from 'os';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ExpediGame';
  


  constructor(private _httpClient: HttpClient, private route: ActivatedRoute) {
  }




  ngOnInit(): void {


     if (sessionStorage.getItem('user') == null){

     }
     else{
       let nom = sessionStorage.getItem('user');
       console.log(nom);
     }


    
    //httpOptions.headers = httpOptions.headers.set('Authorization', 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpYXQiOjE1OTM5ODY1MzYsImV4cCI6MTYwMTc2MjUzNiwicm9sZXMiOlsiUk9MRV9VU0VSIl0sInVzZXJuYW1lIjoia2V2aW5AZ21haWwuY29tIn0.lHISbivDUZr-OtQX2sI1Ts-DtVN1_JUTve_of7Tmye9Nr9rf_Ju86SIasFIIvzwlPP3Rk2LeVeMIxgstzqEwTx52k4vOAOW7cMe4stwN6HASK1sbXOGiQ1tqWSgo4x_FIY8VBXDrNc8NsngXsXwG5aOli_ewNiC-PMznmYDvYUHYhBz8MbCnJKH8G8Uskb_-m7yDMYqO_c8hlmhcILGol8rj9D02yplcPGzk_IF_jBuZEDZKNjbYWgRqrY6zfiAja-Fmu1O0RdIFcmO04b94O0gZwwQ-T2fVtec0fw3mLAi3_EwZp4o5OfuMps1cYWnAXY6dDaChJxLoLJK7SoIa82iSB9SBAS1xZN_RyyYei85ncvakWaLQfaRd_BgrAzHLcNFyUHyO9oddNHVa3wshAZ98UM9gamv3y2js8OplGFa100Q4TstuzAwF83RrXPkccf8138YCKcNwBf51NBsk0W7NKWkPINt3X4Kv5plgpKHw-ExnxHAN5uEchtAU-11MbT8LprmK3yjOOGoRMorZNY9S1ceS95afy0USThr75d-b2_mQoqZ0kyGlp0qbnp4m9908w0WzsMCeNdIeB8f7VloDosxdjoxTUjUAj1oWSpwi8Uh78vM7GgIS7SHCoDvaz1Vfl4ldcc5hv2oufsN8iN-9xXgKtIn736N4_aF595g');
    // var user = this._httpClient.get(this.url, this.httpOptions ).subscribe( user => {
    //   console.log(user);
    // });

    // this._httpClient.post(this.url_token, {'username':'kevin@gmail.com', 'password':'123'}, this.httpOptions).subscribe( token => {
    //   console.log(token);
    // });



  }
}

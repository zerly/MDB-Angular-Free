import { Component, OnInit } from '@angular/core';
import { buildDriverProvider } from 'protractor/built/driverProviders';
import { logging } from 'protractor';

@Component({
  selector: 'app-nav',

  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  private _item: string = ""
  private _hide: boolean = false;

  constructor() { }

  set item(value) {
    this._item = value;
    sessionStorage.set('user', value);
  }

  get item() {
      if(sessionStorage.getItem('user') == ''){
        this.hide = false;
      }
      return this._item = sessionStorage.getItem('user');

    }

    set hide(value) {
      this._hide = value;
  }
  
    get hide() {
        if(sessionStorage.getItem('user') == '' || sessionStorage.getItem('user') == null){
          this._hide = false;
        }
        else{
          this._hide = true;
        }

        return this._hide;
  
      }
    
  

  set id(value) {
    this._item = value;
    sessionStorage.set('id', value);
  }

  get id() {
    return this._item = sessionStorage.getItem('id');
  }

  logout(){
    sessionStorage.clear();
  }



  ngOnInit(): void {
    
  }

}


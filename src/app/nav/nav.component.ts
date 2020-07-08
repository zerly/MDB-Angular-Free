import { Component, OnInit } from '@angular/core';
import { buildDriverProvider } from 'protractor/built/driverProviders';
import { logging } from 'protractor';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }

}


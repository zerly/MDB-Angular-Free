
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SeparateurComponent } from './separateur/separateur.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { ClassementComponent } from './classement/classement.component';
import { HttpClientModule } from '@angular/common/http';
import { TwitchComponent } from './twitch/twitch.component';





@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    CarouselComponent,
    CardComponent,
    ConnexionComponent,
    SeparateurComponent,
    routingComponents,
    FooterComponent,
    HomeComponent,
    ClassementComponent,
    TwitchComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


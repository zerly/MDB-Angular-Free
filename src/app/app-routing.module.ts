import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CardComponent } from './card/card.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SeparateurComponent } from './separateur/separateur.component';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';
import { ClassementComponent } from './classement/classement.component';
import { AuthComponent } from './auth/auth.component';
import { PresentationComponent } from './presentation/presentation.component';
import { SuccessComponent } from './success/success.component';



const routes: Routes = [
{ path: 'classement', component: ClassementComponent },
{ path: '', component: HomeComponent },
{ path: 'twitch/login', component: ConnexionComponent },
{ path: 'profil', component: AuthComponent },
{ path: 'presentation', component: PresentationComponent },
{ path: 'succes', component: SuccessComponent },
//{ path: 'succes', component:  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ClassementComponent, HomeComponent]

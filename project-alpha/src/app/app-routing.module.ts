import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutMeComponent } from './about-me/about-me.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { AssociationsComponent } from './associations/associations.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'about-me', component: AboutMeComponent },
  { path: 'accomplishments', component: AccomplishmentsComponent },
  { path: 'associations', component: AssociationsComponent },
  { path: 'general', component: GeneralComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

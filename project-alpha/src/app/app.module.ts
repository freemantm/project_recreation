import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { AssociationsComponent } from './associations/associations.component';
import { GeneralComponent } from './general/general.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserButtonComponent,
    NavBarComponent,
    HomeComponent,
    AboutMeComponent,
    AccomplishmentsComponent,
    AssociationsComponent,
    GeneralComponent,
    ProfileBoxComponent,
    InfoBoxComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

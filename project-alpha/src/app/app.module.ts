import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserButtonComponent } from './user-button/user-button.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { InfoDropdownComponent } from './info-dropdown/info-dropdown.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AccomplishmentsComponent } from './accomplishments/accomplishments.component';
import { AssociationsComponent } from './associations/associations.component';
import { GeneralComponent } from './general/general.component';
import { ProgileBoxComponent } from './progile-box/progile-box.component';
import { ProfileBoxComponent } from './profile-box/profile-box.component';
import { InfoBoxComponent } from './info-box/info-box.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserButtonComponent,
    NavBarComponent,
    HomeComponent,
    InfoDropdownComponent,
    AboutMeComponent,
    AccomplishmentsComponent,
    AssociationsComponent,
    GeneralComponent,
    ProgileBoxComponent,
    ProfileBoxComponent,
    InfoBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

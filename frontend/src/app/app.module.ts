import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';



import { FooterComponent } from './components/footers/footer/footer.component';
import { HeaderComponent } from './components/headers/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { IndexNavbarComponent } from './components/navbars/index-navbar/index-navbar.component';
import { AuthNavbarComponent } from './components/navbars/auth-navbar/auth-navbar.component';
import { IndexDropdownComponent } from './components/dropdowns/index-dropdown/index-dropdown.component';
import { NotificationDropdownComponent } from './components/dropdowns/notification-dropdown/notification-dropdown.component';
import { PagesDropdownComponent } from './components/dropdowns/pages-dropdown/pages-dropdown.component';
import { TableDropdownComponent } from './components/dropdowns/table-dropdown/table-dropdown.component';
import { UserDropdownComponent } from './components/dropdowns/user-dropdown/user-dropdown.component';
import { CardPageVisitsComponent } from './components/cards/card-page-visits/card-page-visits.component';
import { CardProfileComponent } from './components/cards/card-profile/card-profile.component';
import { CardSettingsComponent } from './components/cards/card-settings/card-settings.component';
import { CardSocialTrafficComponent } from './components/cards/card-social-traffic/card-social-traffic.component';
import { CardTableComponent } from './components/cards/card-table/card-table.component';
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { CandidateComponent } from './layouts/candidate/candidate.component';
import { CandidateFooterComponent } from './components/footers/candidate-footer/candidate-footer.component';

import { RhNavbarComponent } from './components/navbars/rh-navbar/rh-navbar.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';




@NgModule({
  declarations: [
    
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    IndexNavbarComponent,
    AuthNavbarComponent,
    IndexDropdownComponent,
    NotificationDropdownComponent,
    PagesDropdownComponent,
    TableDropdownComponent,
    UserDropdownComponent,
    CardPageVisitsComponent,
    CardProfileComponent,
    CardSettingsComponent,
    CardSocialTrafficComponent,
    CardTableComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    AuthComponent,
    CandidateComponent,
    CandidateFooterComponent,
    RhNavbarComponent,
    CardStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

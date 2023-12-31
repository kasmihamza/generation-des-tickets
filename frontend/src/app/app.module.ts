import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { LoginComponent } from './views/auth/login/login.component';
import { RegisterComponent } from './views/auth/register/register.component';
import { IndexComponent } from './views/index/index.component';
import { LandingComponent } from './views/landing/landing.component';
import { AuthComponent } from './layouts/auth/auth.component';
import { CandidateFooterComponent } from './components/footers/candidate-footer/candidate-footer.component';
import { RhNavbarComponent } from './components/navbars/rh-navbar/rh-navbar.component';
import { CardStatsComponent } from './components/cards/card-stats/card-stats.component';
import { PhoneAssistantLYComponent } from './layouts/phone-assistant-ly/phone-assistant-ly.component';
import { SuperveseurLyComponent } from './layouts/superveseur-ly/superveseur-ly.component';
import { TechnicienLyComponent } from './layouts/technicien-ly/technicien-ly.component';
import { AjouterTicketComponent } from './views/PhoneAssistant/ajouter-ticket/ajouter-ticket.component';
import { MaterielTechnicienDispoComponent } from './views/PhoneAssistant/materiel-technicien-dispo/materiel-technicien-dispo.component';
import { LogicielTechnicienDispoComponent } from './views/PhoneAssistant/logiciel-technicien-dispo/logiciel-technicien-dispo.component';
import { ConsulterTicketComponent } from './views/PhoneAssistant/consulter-ticket/consulter-ticket.component';
import { HistoriqueComponent } from './views/PhoneAssistant/historique/historique.component';
import { AffecterTicketComponent } from './views/PhoneAssistant/affecter-ticket/affecter-ticket.component';
import { MyTicketsComponent } from './views/PhoneAssistant/my-tickets/my-tickets.component';
import { ToastrModule } from 'ngx-toastr';
import { TechSidebarComponent } from './components/tech-sidebar/tech-sidebar.component';
import { SuperSidebarComponent } from './components/super-sidebar/super-sidebar.component';
import { TicketAffectedComponent } from './views/technicien/ticket-affected/ticket-affected.component';
import { ResolveTicketComponent } from './views/technicien/resolve-ticket/resolve-ticket.component';
import { RejecterTicketComponent } from './views/technicien/rejecter-ticket/rejecter-ticket.component';
import { DisponsibiliteComponent } from './views/technicien/disponsibilite/disponsibilite.component';
import { TicketEnattenteComponent } from './views/technicien/ticket-enattente/ticket-enattente.component';
import { AjouterAssistantComponent } from './views/Superviseur/ajouter-assistant/ajouter-assistant.component';
import { AjouterTechnicienComponent } from './views/Superviseur/ajouter-technicien/ajouter-technicien.component';
import { AllAssistantsComponent } from './views/Superviseur/all-assistants/all-assistants.component';
import { AlltechnicienComponent } from './views/Superviseur/alltechnicien/alltechnicien.component';
import { DashbordsSupComponent } from './views/Superviseur/dashbords-sup/dashbords-sup.component';
import { CardlinechartComponent } from './components/cards/cardlinechart/cardlinechart.component';
import { ConsulterHistoriqueComponent } from './views/PhoneAssistant/consulter-historique/consulter-historique.component';
import { AjouterTicketSupComponent } from './views/Superviseur/ajouter-ticket-sup/ajouter-ticket-sup.component';
import { AffecterTicketSupComponent } from './views/Superviseur/affecter-ticket-sup/affecter-ticket-sup.component';
import { MyticketsSupComponent } from './views/Superviseur/mytickets-sup/mytickets-sup.component';
import { ModifierTicketsComponent } from './views/Superviseur/modifier-tickets/modifier-tickets.component';
import { ModifierTicketAssistantComponent } from './views/PhoneAssistant/modifier-ticket-assistant/modifier-ticket-assistant.component';
import { ModifierAssistantComponent } from './views/Superviseur/modifier-assistant/modifier-assistant.component';
import { ModifierTechnicienComponent } from './views/Superviseur/modifier-technicien/modifier-technicien.component';



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
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    LandingComponent,
    AuthComponent,
    CandidateFooterComponent,
    RhNavbarComponent,
    CardStatsComponent,
    PhoneAssistantLYComponent,
    SuperveseurLyComponent,
    TechnicienLyComponent,
    AjouterTicketComponent,
    MaterielTechnicienDispoComponent,
    LogicielTechnicienDispoComponent,
    ConsulterTicketComponent,
    HistoriqueComponent,
    AffecterTicketComponent,
    MyTicketsComponent,
    TechSidebarComponent,
    SuperSidebarComponent,
    TicketAffectedComponent,
    ResolveTicketComponent,
    RejecterTicketComponent,
    DisponsibiliteComponent,
    TicketEnattenteComponent,
    AjouterAssistantComponent,
    AjouterTechnicienComponent,
    AllAssistantsComponent,
    AlltechnicienComponent,
    DashbordsSupComponent,
    CardlinechartComponent,
    ConsulterHistoriqueComponent,
    AjouterTicketSupComponent,
    AffecterTicketSupComponent,
    MyticketsSupComponent,
    ModifierTicketsComponent,
    ModifierTicketAssistantComponent,
    ModifierAssistantComponent,
    ModifierTechnicienComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  
})
export class AppModule { }

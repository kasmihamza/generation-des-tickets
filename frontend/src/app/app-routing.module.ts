import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { PhoneAssistantLYComponent } from './layouts/phone-assistant-ly/phone-assistant-ly.component';
import { AjouterTicketComponent } from './views/PhoneAssistant/ajouter-ticket/ajouter-ticket.component';
import { LogicielTechnicienDispoComponent } from './views/PhoneAssistant/logiciel-technicien-dispo/logiciel-technicien-dispo.component';
import { MaterielTechnicienDispoComponent } from './views/PhoneAssistant/materiel-technicien-dispo/materiel-technicien-dispo.component';
import { AffecterTicketComponent } from './views/PhoneAssistant/affecter-ticket/affecter-ticket.component';
import { MyTicketsComponent } from './views/PhoneAssistant/my-tickets/my-tickets.component';
import { ConsulterTicketComponent } from './views/PhoneAssistant/consulter-ticket/consulter-ticket.component';
import { HistoriqueComponent } from './views/PhoneAssistant/historique/historique.component';
import { TechnicienLyComponent } from './layouts/technicien-ly/technicien-ly.component';
import { TicketAffectedComponent } from './views/technicien/ticket-affected/ticket-affected.component';
import { ResolveTicketComponent } from './views/technicien/resolve-ticket/resolve-ticket.component';
import { RejecterTicketComponent } from './views/technicien/rejecter-ticket/rejecter-ticket.component';
import { TicketEnattenteComponent } from './views/technicien/ticket-enattente/ticket-enattente.component';
import { DisponsibiliteComponent } from './views/technicien/disponsibilite/disponsibilite.component';
import { SuperveseurLyComponent } from './layouts/superveseur-ly/superveseur-ly.component';
import { AjouterAssistantComponent } from './views/Superviseur/ajouter-assistant/ajouter-assistant.component';
import { AjouterTechnicienComponent } from './views/Superviseur/ajouter-technicien/ajouter-technicien.component';
import { AlltechnicienComponent } from './views/Superviseur/alltechnicien/alltechnicien.component';
import { allassistant } from './model/superviseur/allAssistant';
import { AllAssistantsComponent } from './views/Superviseur/all-assistants/all-assistants.component';
import { DashbordsSupComponent } from './views/Superviseur/dashbords-sup/dashbords-sup.component';
import { LoginComponent } from './views/auth/login/login.component';
import { ConsulterHistoriqueComponent } from './views/PhoneAssistant/consulter-historique/consulter-historique.component';
import { AjouterTicketSupComponent } from './views/Superviseur/ajouter-ticket-sup/ajouter-ticket-sup.component';
import { AffecterTicketSupComponent } from './views/Superviseur/affecter-ticket-sup/affecter-ticket-sup.component';
import { MyticketsSupComponent } from './views/Superviseur/mytickets-sup/mytickets-sup.component';
import { ModifierTicketsComponent } from './views/Superviseur/modifier-tickets/modifier-tickets.component';
import { ModifierTicketAssistantComponent } from './views/PhoneAssistant/modifier-ticket-assistant/modifier-ticket-assistant.component';
import { ModifierAssist } from './model/superviseur/modifierassist';
import { ModifierAssistantComponent } from './views/Superviseur/modifier-assistant/modifier-assistant.component';
import { ModifierTechnicienComponent } from './views/Superviseur/modifier-technicien/modifier-technicien.component';


const routes: Routes = [
 
  // Phone assistant views
  {
    path: "phoneassistant",
    component: PhoneAssistantLYComponent,
    children: [
      { path: "ajouterticket", component: AjouterTicketComponent },
      { path: "affecterticket/:idtech", component: AffecterTicketComponent },
      { path: "alllogicieldispo", component: LogicielTechnicienDispoComponent },
      { path: "allmaterieldispo", component: MaterielTechnicienDispoComponent },
      { path: "myticket", component: MyTicketsComponent },
      { path: "historique", component: HistoriqueComponent },
      { path: "consultermyticket/:idticket", component: ConsulterTicketComponent },
      { path: "consulterhistorique/:idticket", component: ConsulterHistoriqueComponent },
      { path: "modifierTicketassis/:idticket", component: ModifierTicketAssistantComponent },
    ],
  },
  {
    path: "technicien",
    component: TechnicienLyComponent,
    children: [
      { path: "ticketaffected", component: TicketAffectedComponent },
      { path: "resolveticket/:idticket", component: ResolveTicketComponent },
      { path: "rejecteticket/:idticket", component: RejecterTicketComponent },
      { path: "ticketenattent", component: TicketEnattenteComponent },
      { path: "disponsibilite", component: DisponsibiliteComponent },
      { path: "tech/historique", component: HistoriqueComponent },
      { path: "consultermyticket/:idticket", component: ConsulterTicketComponent },
      { path: "consulterhistorique/:idticket", component: ConsulterHistoriqueComponent },
    ],
  },
  {
    path: "superviseur",
    component: SuperveseurLyComponent,
    children: [
      { path: "ajouterassistant", component: AjouterAssistantComponent },
      { path: "modifierTicket/:idticket", component: ModifierTicketsComponent },
      { path: "ajoutertechnicien", component: AjouterTechnicienComponent },
      { path: "super/ajouterticket", component: AjouterTicketSupComponent },
      { path: "super/affecterticket/:idtech", component: AffecterTicketSupComponent },
      { path: "sup/alllogicieldispo", component: LogicielTechnicienDispoComponent },
      { path: "sup/allmaterieldispo", component: MaterielTechnicienDispoComponent },
      { path: "allassistant", component: AllAssistantsComponent },
      { path: "alltechnicien", component: AlltechnicienComponent },
      { path: "super/historique", component: HistoriqueComponent },
      { path: "consultermyticket/:idticket", component: ConsulterTicketComponent },
      { path: "myticket", component: MyticketsSupComponent },
      { path: "dashbords", component: DashbordsSupComponent },
      { path: "consulterhistorique/:idticket", component: ConsulterHistoriqueComponent },
      { path: "modifierassistant/:idassistant", component: ModifierAssistantComponent },
      { path: "modifiertech/:idtechnicien", component: ModifierTechnicienComponent },
    ],
  },
  { path: "llogin", component: LoginComponent },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

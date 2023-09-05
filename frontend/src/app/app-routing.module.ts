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
    ],
  },
  { path: "", component: IndexComponent },
  { path: "**", redirectTo: "", pathMatch: "full" },
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

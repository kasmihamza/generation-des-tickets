import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { PhoneAssistantLYComponent } from './layouts/phone-assistant-ly/phone-assistant-ly.component';
import { AjouterTicketComponent } from './views/PhoneAssistant/ajouter-ticket/ajouter-ticket.component';


const routes: Routes = [
 
  // Phone assistant views
  {
    path: "phoneassistant",
    component: PhoneAssistantLYComponent,
    children: [
      { path: "ajouterticket", component: AjouterTicketComponent },
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

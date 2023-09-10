import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mytickets } from 'src/app/model/Mytickts';
import { ticketForm } from 'src/app/model/TicketForm';
import { Affecterticket } from 'src/app/model/affecterTicket';
import { dashboard } from 'src/app/model/superviseur/Dashboards';
import { ModiferForm } from 'src/app/model/superviseur/ModifierForm';
import { ajouterTechnicien } from 'src/app/model/superviseur/ajouterTechnicien';
import { assistantform } from 'src/app/model/superviseur/ajouterassistant';
import { allassistant } from 'src/app/model/superviseur/allAssistant';
import { allTech } from 'src/app/model/superviseur/allTechnicien';
import { ModifierAssist } from 'src/app/model/superviseur/modifierassist';
import { ModifierTech } from 'src/app/model/superviseur/modifiertechnicien';

@Injectable({
  providedIn: 'root'
})
export class SuoerviseurserviceService {

  constructor(private http : HttpClient) {
    this.getMyTechsup().subscribe(
      (data: mytickets[]) => {
        this.alltickets = data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.getallassistant().subscribe(
      (data: allassistant[]) => {
        this.allassistant = data;
      },
      (error) => {
        console.error(error);
      }
    );
    this.getallTech().subscribe(
      (data: allTech[]) => {
        this.alltech = data;
      },
      (error) => {
        console.error(error);
      }
    );
   }
  
  alltickets: mytickets[]=[];
  allassistant: allassistant[]=[];
  alltech:allTech[]=[];
  
  ajouterTicketsup(TicketForm:ticketForm){
    TicketForm.idPhoneAssistant=1;
    this.http.post('http://localhost:8080/generationDesTickets/superviseur/ticket/ajouter',TicketForm)
   .subscribe()
  }

  ModifierTicketsup(TicketForm:ModiferForm){
    this.http.post('http://localhost:8080/generationDesTickets/phoneassistant/ticket/modifier',TicketForm)
   .subscribe()
  }

  affecterTicketsup(TicketForm:Affecterticket){
    TicketForm.idPhoneAssistant=1;
    this.http.post('http://localhost:8080/generationDesTickets/superviseur/ticket/affecter',TicketForm)
   .subscribe()
  }
  getMyTechsup(){
    const idphone=1;
    const url = 'http://localhost:8080/generationDesTickets/superviseur/allaMytickets/'+idphone;
    return this.http.get<mytickets[]>(url); 
  }
  ajouterPhoneassistant(assistant:assistantform){
    this.http.post('http://localhost:8080/generationDesTickets/Superviseur/phoneassistant/ajouter',assistant)
   .subscribe()
  }

  modifierPhoneassistant(assistant:ModifierAssist){
    this.http.post('http://localhost:8080/generationDesTickets/superviseur/assistant/modifier',assistant)
   .subscribe()
  }

  modifierTechnicien(technicien:ModifierTech){
    this.http.post('http://localhost:8080/generationDesTickets/superviseur/technicien/modifier',technicien)
   .subscribe()
  }
  ajoutertechnicien(technicien:ajouterTechnicien){
    this.http.post('http://localhost:8080/generationDesTickets/Superviseur/technicien/ajouter',technicien)
   .subscribe()
  }


  getallassistant(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/allassistant';
    return this.http.get<allassistant[]>(url); 
  }

  getallTech(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/alltechnicien';
    return this.http.get<allTech[]>(url); 
  }

  supprimerAssistant(id:number){
    this.http.delete('http://localhost:8080/generationDesTickets/Superviseur/phoneassistant/supprimer/'+id)
   .subscribe()
  }

  supprimerTechnicien(id:number){
    this.http.delete('http://localhost:8080/generationDesTickets/Superviseur/technicien/supprimer/'+id)
   .subscribe()
  }

  getdashboard(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/dashboards';
    return this.http.get<dashboard>(url); 
  }
}

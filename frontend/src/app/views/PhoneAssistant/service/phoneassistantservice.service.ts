import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { consulterTick } from 'src/app/model/ConsulterTickets';
import { mytickets } from 'src/app/model/Mytickts';
import { TechDispotable } from 'src/app/model/TableTechDispo';
import { ticketForm } from 'src/app/model/TicketForm';
import { Affecterticket } from 'src/app/model/affecterTicket';
import { historique } from 'src/app/model/historique';

@Injectable({
  providedIn: 'root'
})
export class PhoneassistantserviceService {

  constructor(private routeParam: ActivatedRoute,private http : HttpClient) { }

  ajouterTicket(TicketForm:ticketForm){
    TicketForm.idPhoneAssistant=1;
    this.http.post('http://localhost:8080/generationDesTickets/phoneassistant/ticket/ajouter',TicketForm)
   .subscribe()
  }
  affecterTicket(TicketForm:Affecterticket){
    TicketForm.idPhoneAssistant=1;
    this.http.post('http://localhost:8080/generationDesTickets/phoneassistant/ticket/affecter',TicketForm)
   .subscribe()
  }
  getLogecielTech(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/alllogicieltechniciendespo';
    return this.http.get<TechDispotable[]>(url); 
  }

  getMaterielTech(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/allmaterialtechniciendespo';
    return this.http.get<TechDispotable[]>(url); 
  }

  getMyTech(){
    const idphone=1;
    const url = 'http://localhost:8080/generationDesTickets/phoneassistant/allaMytickets/'+idphone;
    return this.http.get<mytickets[]>(url); 
  }

  getHistorique(){
    const url = 'http://localhost:8080/generationDesTickets/phoneassistant/historique';
    return this.http.get<historique[]>(url); 
  }

  consulterTicket(id:string){
    const url = 'http://localhost:8080/generationDesTickets/phoneassistant/consulteraffected/'+id;
    return this.http.get<consulterTick>(url); 
  }
}

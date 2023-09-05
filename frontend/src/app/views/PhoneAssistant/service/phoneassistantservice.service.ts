import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TechDispotable } from 'src/app/model/TableTechDispo';
import { ticketForm } from 'src/app/model/TicketForm';
import { Affecterticket } from 'src/app/model/affecterTicket';

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
}

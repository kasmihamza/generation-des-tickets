import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { affectenattent } from 'src/app/model/technicien/affecterenattent';
import { enattente } from 'src/app/model/technicien/enattente';
import { resolvetickets } from 'src/app/model/technicien/resolveticket';
import { affectedtickets } from 'src/app/model/technicien/tecketaffected';

@Injectable({
  providedIn: 'root'
})
export class TechnicienserviceService {

  constructor(private http : HttpClient) { }

  getaffectedticket(){
    const idtech=4;
    const url = 'http://localhost:8080/generationDesTickets/technicien/allaffectedtickets/'+idtech;
    return this.http.get<affectedtickets[]>(url); 
  }

  getenattenteticket(){
    const url = 'http://localhost:8080/generationDesTickets/technicien/allaenattente';
    return this.http.get<enattente[]>(url); 
  }
  resolverTicket(TicketForm:resolvetickets){
    TicketForm.technicienid=4;
    this.http.post('http://localhost:8080/generationDesTickets/technicien/resolverticket',TicketForm)
   .subscribe()
  }

  affecterticketenattente(TicketForm:affectenattent){
    TicketForm.techid=5;
    this.http.post('http://localhost:8080/generationDesTickets/technicien/ajouterticketenattente',TicketForm)
   .subscribe()
  }
  rejeterTicket(TicketForm:resolvetickets){
    TicketForm.technicienid=4;
    this.http.post('http://localhost:8080/generationDesTickets/technicien/rejecterticket',TicketForm)
   .subscribe()
  }
}

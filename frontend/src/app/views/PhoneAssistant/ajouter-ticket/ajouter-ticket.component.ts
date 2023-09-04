import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';

@Component({
  selector: 'app-ajouter-ticket',
  templateUrl: './ajouter-ticket.component.html',
  styleUrls: ['./ajouter-ticket.component.css']
})
export class AjouterTicketComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  OnAjoutTicket(TicketForm:ticketForm){

  }
}

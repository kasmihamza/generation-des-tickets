import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';

@Component({
  selector: 'app-ajouter-ticket',
  templateUrl: './ajouter-ticket.component.html',
  styleUrls: ['./ajouter-ticket.component.css']
})
export class AjouterTicketComponent implements OnInit {
  constructor(private phoneservice: PhoneassistantserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  ngOnInit(): void {}
  OnAjoutTicket(TicketForm:ticketForm){
    console.log(TicketForm);
    this.phoneservice.ajouterTicket(TicketForm);
  }
}

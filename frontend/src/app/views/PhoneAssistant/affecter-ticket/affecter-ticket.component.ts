import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { Affecterticket } from 'src/app/model/affecterTicket';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-affecter-ticket',
  templateUrl: './affecter-ticket.component.html',
  styleUrls: ['./affecter-ticket.component.css']
})
export class AffecterTicketComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  techid:any;
  ngOnInit(): void {
    this.techid= this.routeParam.snapshot.paramMap.get('idtech'); 
  }
  OnAffecteTicket(TicketForm:Affecterticket){
    TicketForm.idTechnicien=this.techid;
    this.phoneservice.affecterTicket(TicketForm);
  }
}
import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-ticket',
  templateUrl: './ajouter-ticket.component.html',
  styleUrls: ['./ajouter-ticket.component.css']
})
export class AjouterTicketComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService,private phoneservice: PhoneassistantserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  ngOnInit(): void {}
  OnAjoutTicket(TicketForm:ticketForm){
    console.log(TicketForm);
    this.phoneservice.ajouterTicket(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/phoneassistant/myticket']);
  });
  this.toastr.success("ajouter avec succes");
  }
}


import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { Affecterticket } from 'src/app/model/affecterTicket';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-affecter-ticket',
  templateUrl: './affecter-ticket.component.html',
  styleUrls: ['./affecter-ticket.component.css']
})
export class AffecterTicketComponent implements OnInit {
  constructor( private router: Router,private toastr: ToastrService,private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  techid:any;
  ngOnInit(): void {
    this.techid= this.routeParam.snapshot.paramMap.get('idtech'); 
  }
  OnAffecteTicket(TicketForm:Affecterticket){
    TicketForm.idTechnicien=this.techid;
    this.phoneservice.affecterTicket(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/phoneassistant/myticket']);
  });
  this.toastr.success("affecter avec succes");
  }
}
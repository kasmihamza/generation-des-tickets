import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienserviceService } from '../service/technicienservice.service';
import { resolvetickets } from 'src/app/model/technicien/resolveticket';

@Component({
  selector: 'app-rejecter-ticket',
  templateUrl: './rejecter-ticket.component.html',
  styleUrls: ['./rejecter-ticket.component.css']
})
export class RejecterTicketComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private techservice: TechnicienserviceService) {}


  ticketid:any;
  ngOnInit(): void {
    this.ticketid= this.routeParam.snapshot.paramMap.get('idticket'); 
  }

  OnRejecterTicket(TicketForm:resolvetickets){
    const ticketIdAsNumber: number = +this.ticketid;

    // Now you can use ticketIdAsNumber as a number
    TicketForm.ticketid = ticketIdAsNumber;
    this.techservice.rejeterTicket(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/technicien/tech/historique']);
  });
  this.toastr.success("rejeter avec succes");
  }

}



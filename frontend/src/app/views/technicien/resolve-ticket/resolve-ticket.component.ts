import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienserviceService } from '../service/technicienservice.service';
import { resolvetickets } from 'src/app/model/technicien/resolveticket';

@Component({
  selector: 'app-resolve-ticket',
  templateUrl: './resolve-ticket.component.html',
  styleUrls: ['./resolve-ticket.component.css']
})
export class ResolveTicketComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private techservice: TechnicienserviceService) {}


  ticketid:any;
  ngOnInit(): void {
    this.ticketid= this.routeParam.snapshot.paramMap.get('idticket'); 
  }

  OnResolveTicket(TicketForm:resolvetickets){
    const ticketIdAsNumber: number = +this.ticketid;

    // Now you can use ticketIdAsNumber as a number
    TicketForm.ticketid = ticketIdAsNumber;
    this.techservice.resolverTicket(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/technicien/historique']);
  });
  this.toastr.success("resolver avec succes");
  }

}


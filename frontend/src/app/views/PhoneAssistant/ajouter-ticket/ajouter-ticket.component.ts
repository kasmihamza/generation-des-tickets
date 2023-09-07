import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-ticket',
  templateUrl: './ajouter-ticket.component.html',
  styleUrls: ['./ajouter-ticket.component.css']
})
export class AjouterTicketComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private phoneservice: PhoneassistantserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  ngOnInit(): void {}
  OnAjoutTicket(TicketForm:ticketForm){
    console.log(TicketForm);
    this.phoneservice.ajouterTicket(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      const urlSegments = this.routeParam.snapshot.url;
      const segments = urlSegments.map(segment => segment.path);
      if (segments.includes('super')) {
        this.router.navigate(["/superviseur/myticket"]);
      } else {
        this.router.navigate(['/phoneassistant/myticket']);
      }
      this.toastr.success("ajouter avec succes");
  });
    
  }
}


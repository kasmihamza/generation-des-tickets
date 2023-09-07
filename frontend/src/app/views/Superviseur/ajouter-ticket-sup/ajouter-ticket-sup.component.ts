import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';

import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';

@Component({
  selector: 'app-ajouter-ticket-sup',
  templateUrl: './ajouter-ticket-sup.component.html',
  styleUrls: ['./ajouter-ticket-sup.component.css']
})
export class AjouterTicketSupComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private superviservice: SuoerviseurserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  ngOnInit(): void {}
  OnAjoutTicket(TicketForm:ticketForm){
    console.log(TicketForm);
    this.superviservice.ajouterTicketsup(TicketForm);
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


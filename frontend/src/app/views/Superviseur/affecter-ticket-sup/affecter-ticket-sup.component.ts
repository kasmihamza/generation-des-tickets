import { Component , OnInit } from '@angular/core';

import { Affecterticket } from 'src/app/model/affecterTicket';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';

@Component({
  selector: 'app-affecter-ticket-sup',
  templateUrl: './affecter-ticket-sup.component.html',
  styleUrls: ['./affecter-ticket-sup.component.css']
})
export class AffecterTicketSupComponent implements OnInit {
  constructor( private router: Router,private toastr: ToastrService,private routeParam: ActivatedRoute,private superviservice: SuoerviseurserviceService) {}

  selectedSource: string = ''; // Property to store the selected source value
  selectedDepartment: string = ''; 
  techid:any;
  ngOnInit(): void {
    this.techid= this.routeParam.snapshot.paramMap.get('idtech'); 
  }
  OnAffecteTicket(TicketForm:Affecterticket){
    TicketForm.idTechnicien=this.techid;
    this.superviservice.affecterTicketsup(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      const urlSegments = this.routeParam.snapshot.url;
      const segments = urlSegments.map(segment => segment.path);
      if (segments.includes('super')) {
        this.router.navigate(["/superviseur/myticket"]);
      } else {
        this.router.navigate(['/phoneassistant/myticket']);
      }
      this.toastr.success("affecter avec succes");
  });
}
}
import { Component , OnInit } from '@angular/core';
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
    console.log(TicketForm);
    TicketForm.idTechnicien=this.techid;
    this.phoneservice.affecterTicket(TicketForm);
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
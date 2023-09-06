import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { TechnicienserviceService } from '../service/technicienservice.service';
import { resolvetickets } from 'src/app/model/technicien/resolveticket';
import { disponsibilite } from 'src/app/model/technicien/disponsibilite';

@Component({
  selector: 'app-disponsibilite',
  templateUrl: './disponsibilite.component.html',
  styleUrls: ['./disponsibilite.component.css']
})
export class DisponsibiliteComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private techservice: TechnicienserviceService) {}


  ticketid:any;
  ngOnInit(): void {
    this.ticketid= this.routeParam.snapshot.paramMap.get('idticket'); 
    this.getaffectedTicket();
  }

  Ondisponibilite(Disponsibilite:disponsibilite){

    this.techservice.disponsibilte(Disponsibilite);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/technicien/disponsibilite']);
  });
  this.toastr.success("vous avez changer votre disponibilite avec succes");
  }

  disponibilite:boolean=true;
  getaffectedTicket(){
    this.techservice.getdisponibilite().subscribe((res) => {
      this.disponibilite = res;
    });
  }
}




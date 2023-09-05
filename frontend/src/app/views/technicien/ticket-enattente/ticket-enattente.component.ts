import { Component ,Input,OnInit} from '@angular/core';

import { DatePipe } from '@angular/common';
import { TechnicienserviceService } from '../service/technicienservice.service';
import { affectedtickets } from 'src/app/model/technicien/tecketaffected';
import { enattente } from 'src/app/model/technicien/enattente';
import { affectenattent } from 'src/app/model/technicien/affecterenattent';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket-enattente',
  templateUrl: './ticket-enattente.component.html',
  styleUrls: ['./ticket-enattente.component.css']
})
export class TicketEnattenteComponent implements OnInit {
  ngOnInit(): void {
    this.getaffectedTicket();
  }
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  formatDate(date: Date): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yy/MM/dd H:mm') || '';
  }
  private _color = "light";
  alltickets: enattente[]=[];
  ticketenaattent: affectenattent = new affectenattent;
  constructor(private toastr: ToastrService, private router: Router,private techservice: TechnicienserviceService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getaffectedTicket(){
    this.techservice.getenattenteticket().subscribe((res) => {
      this.alltickets = res;
    });;
  }

  onAffecterButtonClick(id:number){
    this.ticketenaattent.ticketid=id;
    this.techservice.affecterticketenattente(this.ticketenaattent);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/technicien/ticketenattent']);
  });
  this.toastr.success("affecter avec succes");
  }
}

import { Component , OnInit } from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { ActivatedRoute } from '@angular/router';
import { consulterTick } from 'src/app/model/ConsulterTickets';
import { DatePipe } from '@angular/common';
import { consulterHistorique } from 'src/app/model/ConsulterHistorique';

@Component({
  selector: 'app-consulter-historique',
  templateUrl: './consulter-historique.component.html',
  styleUrls: ['./consulter-historique.component.css']
})
export class ConsulterHistoriqueComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}
  techid:any;
  ticket: consulterHistorique = new consulterHistorique;
  ngOnInit(): void {
    this.techid= this.routeParam.snapshot.paramMap.get('idticket'); 
    this.OnConsulteTicket()}

    formatDate(date: Date): string {
      const datePipe: DatePipe = new DatePipe('en-US');
      return datePipe.transform(date, 'yy/MM/dd H:mm') || '';
    }
    changeFormatdate(dateoffre: Date){
      const formattedDateCreation: string = this.formatDate(dateoffre);
      return formattedDateCreation;
    }
  OnConsulteTicket(){
    this.phoneservice.consulterHistorique(this.techid).subscribe((res) => {
      this.ticket = res;
      console.log(this.ticket);
    });
  }
}
import { Component , OnInit } from '@angular/core';
import { ticketForm } from 'src/app/model/TicketForm';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { ActivatedRoute } from '@angular/router';
import { consulterTick } from 'src/app/model/ConsulterTickets';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-consulter-ticket',
  templateUrl: './consulter-ticket.component.html',
  styleUrls: ['./consulter-ticket.component.css']
})
export class ConsulterTicketComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}
  techid:any;
  ticket: consulterTick = new consulterTick;
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
    this.phoneservice.consulterTicket(this.techid).subscribe((res) => {
      this.ticket = res;
      console.log(this.ticket);
    });
  }
}
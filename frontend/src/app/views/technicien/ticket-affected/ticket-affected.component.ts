import { Component ,Input,OnInit} from '@angular/core';

import { DatePipe } from '@angular/common';
import { TechnicienserviceService } from '../service/technicienservice.service';
import { affectedtickets } from 'src/app/model/technicien/tecketaffected';

@Component({
  selector: 'app-ticket-affected',
  templateUrl: './ticket-affected.component.html',
  styleUrls: ['./ticket-affected.component.css']
})
export class TicketAffectedComponent implements OnInit {
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
  alltickets: affectedtickets[]=[];
  constructor(private techservice: TechnicienserviceService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getaffectedTicket(){
    this.techservice.getaffectedticket().subscribe((res) => {
      this.alltickets = res;
      console.log(this.alltickets);
    });;
  }
}

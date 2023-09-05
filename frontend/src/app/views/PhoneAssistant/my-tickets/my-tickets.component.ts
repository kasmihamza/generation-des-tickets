import { Component ,Input,OnInit} from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { mytickets } from 'src/app/model/Mytickts';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html',
  styleUrls: ['./my-tickets.component.css']
})
export class MyTicketsComponent implements OnInit {
  ngOnInit(): void {
    this.getLogicielTech();
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
  alltickets: mytickets[]=[];
  constructor(private phoneservice: PhoneassistantserviceService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getLogicielTech(){
    this.phoneservice.getMyTech().subscribe((res) => {
      this.alltickets = res;
      console.log(this.alltickets);
    });;
  }
}

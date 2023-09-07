import { Component ,Input,OnInit} from '@angular/core';

import { mytickets } from 'src/app/model/Mytickts';
import { DatePipe } from '@angular/common';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';

@Component({
  selector: 'app-mytickets-sup',
  templateUrl: './mytickets-sup.component.html',
  styleUrls: ['./mytickets-sup.component.css']
})
export class MyticketsSupComponent implements OnInit {
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
  constructor(private superviservice: SuoerviseurserviceService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getLogicielTech(){
    this.superviservice.getMyTechsup().subscribe((res) => {
      this.alltickets = res;
      console.log(this.alltickets)
    });
  }
}

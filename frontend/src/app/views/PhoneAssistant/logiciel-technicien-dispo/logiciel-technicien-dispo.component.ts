import { Component ,Input,OnInit} from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { TechDispotable } from 'src/app/model/TableTechDispo';

@Component({
  selector: 'app-logiciel-technicien-dispo',
  templateUrl: './logiciel-technicien-dispo.component.html',
  styleUrls: ['./logiciel-technicien-dispo.component.css']
})
export class LogicielTechnicienDispoComponent implements OnInit {
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
  private _color = "light";
  alltech: TechDispotable[]=[];
  constructor(private phoneservice: PhoneassistantserviceService) {}
  
  getLogicielTech(){
    this.phoneservice.getLogecielTech().subscribe((res) => {
      this.alltech = res;
      console.log(this.alltech);
    });;
  }
}

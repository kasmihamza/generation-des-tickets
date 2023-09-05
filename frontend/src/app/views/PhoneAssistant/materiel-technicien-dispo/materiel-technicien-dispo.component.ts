import { Component ,Input,OnInit} from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { TechDispotable } from 'src/app/model/TableTechDispo';

@Component({
  selector: 'app-materiel-technicien-dispo',
  templateUrl: './materiel-technicien-dispo.component.html',
  styleUrls: ['./materiel-technicien-dispo.component.css']
})
export class MaterielTechnicienDispoComponent implements OnInit {
  ngOnInit(): void {
    this.getTech();
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
  
  getTech(){
    this.phoneservice.getMaterielTech().subscribe((res) => {
      this.alltech = res;
      console.log(this.alltech);
    });;
  }
}

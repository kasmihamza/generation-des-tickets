import { Component ,Input,OnInit} from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { TechDispotable } from 'src/app/model/TableTechDispo';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

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
  constructor(private toastr: ToastrService,private router: Router,private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}
  
  getLogicielTech(){
    this.phoneservice.getLogecielTech().subscribe((res) => {
      this.alltech = res;
      console.log(this.alltech);
    });
  }

  routerAffect(id : number){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      const urlSegments = this.routeParam.snapshot.url;
      const segments = urlSegments.map(segment => segment.path);
      if (segments.includes('sup')) {
        this.router.navigate(['/superviseur/super/affecterticket/'+id]);
      } else {
        this.router.navigate(['/phoneassistant/affecterticket/'+id]);
      }
      this.toastr.success("affecter avec succes");
  });
  }
}

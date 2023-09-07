import { Component ,Input,OnInit} from '@angular/core';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';
import { DatePipe } from '@angular/common';
import { historique } from 'src/app/model/historique';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-historique',
  templateUrl: './historique.component.html',
  styleUrls: ['./historique.component.css']
})
export class HistoriqueComponent implements OnInit {

  searchvalue:string='';
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
  alltickets: historique[]=[];
  constructor(private toastr: ToastrService,private router: Router,private routeParam: ActivatedRoute,private phoneservice: PhoneassistantserviceService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getLogicielTech(){
    this.phoneservice.getHistorique().subscribe((res) => {
      this.alltickets = res;
      console.log(this.alltickets);
    });;
  }

  searchMethode(){
    console.log(this.searchvalue)
  }

  routerAffect(id : number){
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      const urlSegments = this.routeParam.snapshot.url;
      const segments = urlSegments.map(segment => segment.path);
      if (segments.includes('super')) {
        this.router.navigate(['/superviseur/consulterhistorique/'+id]);
      }
      else{
        if (segments.includes('tech')) {
          this.router.navigate(['/technicien/consulterhistorique/'+id]);
        } else {
          this.router.navigate(['/phoneassistant/consulterhistorique/'+id]);
        }
      }
      
  });
  }
}

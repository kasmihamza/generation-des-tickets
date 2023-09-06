import { Component ,Input,OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { allassistant } from 'src/app/model/superviseur/allAssistant';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-all-assistants',
  templateUrl: './all-assistants.component.html',
  styleUrls: ['./all-assistants.component.css']
})
export class AllAssistantsComponent implements OnInit {
  ngOnInit(): void {
    this.getassistants();
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
  allassistant: allassistant[]=[];
  constructor(private superviservice: SuoerviseurserviceService,private router: Router,private toastr: ToastrService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getassistants(){
    this.superviservice.getallassistant().subscribe((res) => {
      this.allassistant = res;
      console.log(this.allassistant);
    });
  }

  onSupprimerAssistant(id:number){
    Swal.fire({
      title:'te veut vraiment supprimer cette phone assistant?' ,
      text: 'tu ne pas recevoir cette phone assistant',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non'
    }).then((result)=>{
      if(result.value){
        this.superviservice.supprimerAssistant(id);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/superviseur/allassistant']);
        this.toastr.success("supprimer avec succes");
      });
      }
      else if( result.dismiss==Swal.DismissReason.cancel){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/superviseur/allassistant']);
          this.toastr.warning("votre phone assistant n'est pas supprimer ")
        });
      }
    });
  }
}

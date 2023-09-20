import { Component ,Input,OnInit} from '@angular/core';
import { DatePipe } from '@angular/common';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { allassistant } from 'src/app/model/superviseur/allAssistant';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ToastrService } from 'ngx-toastr';
import { allTech } from 'src/app/model/superviseur/allTechnicien';
@Component({
  selector: 'app-alltechnicien',
  templateUrl: './alltechnicien.component.html',
  styleUrls: ['./alltechnicien.component.css']
})
export class AlltechnicienComponent implements OnInit {
  ngOnInit(): void {
    this.getallTech();
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
  allTech: allTech[]=[];
  constructor(private superviservice: SuoerviseurserviceService,private router: Router,private toastr: ToastrService) {}
  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }
  getallTech(){
    this.superviservice.getallTech().subscribe((res) => {
      this.allTech = res;
    });
  }

  onSupprimerTechnicien(id:number){
    Swal.fire({
      title:'voulez-vous vraiment retirer ce technicien?' ,
      
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'oui',
      cancelButtonText: 'non'
    }).then((result)=>{
      if(result.value){
        this.superviservice.supprimerTechnicien(id);
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
        this.router.navigate(['/superviseur/alltechnicien']);
        this.toastr.success("supprimer avec succes");
      });
      }
      else if( result.dismiss==Swal.DismissReason.cancel){
        this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
          this.router.navigate(['/superviseur/alltechnicien']);
          this.toastr.warning("votre technicien n'est pas supprimer ")
        });
      }
    });
  }
}


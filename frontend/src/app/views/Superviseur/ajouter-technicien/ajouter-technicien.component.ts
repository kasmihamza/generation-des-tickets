import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { assistantform } from 'src/app/model/superviseur/ajouterassistant';
import { ajouterTechnicien } from 'src/app/model/superviseur/ajouterTechnicien';

@Component({
  selector: 'app-ajouter-technicien',
  templateUrl: './ajouter-technicien.component.html',
  styleUrls: ['./ajouter-technicien.component.css']
})
export class AjouterTechnicienComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService,private superviservice: SuoerviseurserviceService) {}


  ngOnInit(): void {}
  OnAjoutTechnicien(technicien:ajouterTechnicien){
    console.log(technicien);
    this.superviservice.ajoutertechnicien(technicien);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/superviseur/alltechnicien']);
  });
  this.toastr.success("ajouter avec succes");
  }
}


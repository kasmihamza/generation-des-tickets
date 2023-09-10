import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { ajouterTechnicien } from 'src/app/model/superviseur/ajouterTechnicien';
import { ModifierTech } from 'src/app/model/superviseur/modifiertechnicien';

@Component({
  selector: 'app-modifier-technicien',
  templateUrl: './modifier-technicien.component.html',
  styleUrls: ['./modifier-technicien.component.css']
})
export class ModifierTechnicienComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private superviservice: SuoerviseurserviceService) {}

  techid:any;
  modifier: any
  selectedtype:number=1;
  ngOnInit(): void {
    this.techid= this.routeParam.snapshot.paramMap.get('idtechnicien'); 
    this.techid = parseInt(this.techid, 10);
    this.modifier=this.superviservice.alltech.find((o)=>{ return o.id===this.techid});
    this.modifierForm.idtech=this.modifier.id;
    this.modifierForm.adresse=this.modifier.adresse;
    this.modifierForm.email=this.modifier.email;
    this.modifierForm.password=this.modifier.password;
    this.modifierForm.telephone=this.modifier.telephone;
    this.modifierForm.firstname=this.modifier.prenom;
    this.modifierForm.lastname=this.modifier.nome;
    this.modifierForm.typeid=this.modifier;
    this.selectedtype=this.modifierForm.typeid;
  }
  modifierForm: ModifierTech = new ModifierTech;
  OnAjoutTechnicien(technicien:ModifierTech){
    technicien.idtech=this.modifier.id;
    this.superviservice.modifierTechnicien(technicien);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/superviseur/alltechnicien']);
  });
  this.toastr.success("modifier avec succes");
  }
}



import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';

import { ModifierAssist } from 'src/app/model/superviseur/modifierassist';

@Component({
  selector: 'app-modifier-assistant',
  templateUrl: './modifier-assistant.component.html',
  styleUrls: ['./modifier-assistant.component.css']
})
export class ModifierAssistantComponent implements OnInit {
  constructor(private routeParam: ActivatedRoute,private router: Router,private toastr: ToastrService,private superviservice: SuoerviseurserviceService) {}
  assistantid:any;
  modifier: any
  ngOnInit(): void {
    this.assistantid= this.routeParam.snapshot.paramMap.get('idassistant'); 
    this.assistantid = parseInt(this.assistantid, 10);
    this.modifier=this.superviservice.allassistant.find((o)=>{ return o.id===this.assistantid});
    this.modifierForm.idassis=this.modifier.id;
    this.modifierForm.adresse=this.modifier.adresse;
    this.modifierForm.email=this.modifier.email;
    this.modifierForm.password=this.modifier.password;
    this.modifierForm.telephone=this.modifier.telephone;
    this.modifierForm.firstname=this.modifier.prenom;
    this.modifierForm.lastname=this.modifier.nome;
  }

  modifierForm: ModifierAssist = new ModifierAssist;
  OnModierAssistant(assistant:ModifierAssist){
    assistant.idassis=this.modifier.id;
    this.superviservice.modifierPhoneassistant(assistant);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/superviseur/allassistant']);
  });
  this.toastr.success("modifier avec succes");
  }
}



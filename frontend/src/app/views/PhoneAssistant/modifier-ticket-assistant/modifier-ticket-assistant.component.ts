import { Component , OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ModiferForm } from 'src/app/model/superviseur/ModifierForm';
import { NgForm } from '@angular/forms';
import { SuoerviseurserviceService } from '../../Superviseur/service/suoerviseurservice.service';
import { PhoneassistantserviceService } from '../service/phoneassistantservice.service';

@Component({
  selector: 'app-modifier-ticket-assistant',
  templateUrl: './modifier-ticket-assistant.component.html',
  styleUrls: ['./modifier-ticket-assistant.component.css']
})
export class ModifierTicketAssistantComponent implements OnInit {
  constructor( private router: Router,private toastr: ToastrService,private routeParam: ActivatedRoute,private superviservice: SuoerviseurserviceService,private phoneservice: PhoneassistantserviceService) {
    
  }
  @ViewChild('TicketForm')
  form!: NgForm;

  selectedSource: string = '2'; // Property to store the selected source value
  selectedDepartment: string = ''; 
  selectedPriority: Boolean = false;
  selectedtype:number=1;
  ticketid:any;
  modifierForm: ModiferForm = new ModiferForm;
  modifier: any
  ngOnInit(): void {
    this.ticketid= this.routeParam.snapshot.paramMap.get('idticket'); 
    this.ticketid = parseInt(this.ticketid, 10);
    this.modifier=this.phoneservice.alltickets.find((o)=>{ return o.idticket===this.ticketid});
    

    this.modifierForm.idticket=this.modifier.idticket;
    console.log(this.modifierForm.idticket)
    this.modifierForm.adresseClient=this.modifier.adresseClient;
    this.modifierForm.nameClient=this.modifier.nameClient;

    this.modifierForm.demandeurLastName=this.modifier.demandeurLastName;
    this.modifierForm.demandeurfirstName=this.modifier.demandeurfirstName;
    this.modifierForm.mailDem=this.modifier.mailDem;
    this.modifierForm.telephoneDem=this.modifier.telephoneDem;
    this.modifierForm.serviceDem=this.modifier.serviceDem;

    this.modifierForm.titre=this.modifier.titre;
    this.modifierForm.idSource=this.modifier.idSource;
    this.selectedSource=this.modifierForm.idSource.toString();
    this.modifierForm.idType=this.modifier.idType;
    this.selectedtype=this.modifierForm.idType;
    this.modifierForm.idDepartement=this.modifier.idDepartement;
    this.selectedDepartment=this.modifierForm.idDepartement.toString();
    this.modifierForm.discription=this.modifier.discription;
    this.modifierForm.priorite=this.modifier.priorite;
    this.selectedPriority=this.modifierForm.priorite;

    
    console.log(this.modifierForm);
  }
  OnAffecteTicket(TicketForm:ModiferForm){
    TicketForm.idticket=this.modifierForm.idticket;
    this.superviservice.ModifierTicketsup(TicketForm);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(["/phoneassistant/myticket"]);
      
      this.toastr.success("modifier avec succes");
  });
}
}
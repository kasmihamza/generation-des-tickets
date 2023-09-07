import { Component , OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { ModiferForm } from 'src/app/model/superviseur/ModifierForm';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-modifier-tickets',
  templateUrl: './modifier-tickets.component.html',
  styleUrls: ['./modifier-tickets.component.css']
})
export class ModifierTicketsComponent implements OnInit {
  constructor( private router: Router,private toastr: ToastrService,private routeParam: ActivatedRoute,private superviservice: SuoerviseurserviceService) {
    
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
    this.modifier=this.superviservice.alltickets.find((o)=>{ return o.idticket===this.ticketid});
    

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
      this.router.navigate(["/superviseur/myticket"]);
      
      this.toastr.success("modifier avec succes");
  });
}
}
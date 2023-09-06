import { Component , OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { SuoerviseurserviceService } from '../service/suoerviseurservice.service';
import { assistantform } from 'src/app/model/superviseur/ajouterassistant';
@Component({
  selector: 'app-ajouter-assistant',
  templateUrl: './ajouter-assistant.component.html',
  styleUrls: ['./ajouter-assistant.component.css']
})
export class AjouterAssistantComponent implements OnInit {
  constructor(private router: Router,private toastr: ToastrService,private superviservice: SuoerviseurserviceService) {}

  ngOnInit(): void {}
  OnAjoutAssistant(assistant:assistantform){
    console.log(assistant);
    this.superviservice.ajouterPhoneassistant(assistant);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/phoneassistant/myticket']);
  });
  this.toastr.success("ajouter avec succes");
  }
}


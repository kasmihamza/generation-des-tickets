import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { header } from 'src/app/model/dashboard/header';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.getheaderDashbords();
  }
  dashbords: header = new header;
  nbrticket: string='';
  nbrclient: string='';
  nbrdemandeurs: string='';
  getHeader(){
    const url = 'http://localhost:8080/generationDesTickets/header/dashboard';
    return this.http.get<header>(url); 
  }

  getheaderDashbords(){
    this.getHeader().subscribe((res) => {
      this.dashbords = res;
      this.nbrticket=this.dashbords.nbTikcet.toString();
      this.nbrclient=this.dashbords.nbClient.toString();
      this.nbrdemandeurs=this.dashbords.nbDemendeurs.toString();
    });
  }
}

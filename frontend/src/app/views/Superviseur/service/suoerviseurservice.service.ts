import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { dashboard } from 'src/app/model/superviseur/Dashboards';
import { ajouterTechnicien } from 'src/app/model/superviseur/ajouterTechnicien';
import { assistantform } from 'src/app/model/superviseur/ajouterassistant';
import { allassistant } from 'src/app/model/superviseur/allAssistant';
import { allTech } from 'src/app/model/superviseur/allTechnicien';

@Injectable({
  providedIn: 'root'
})
export class SuoerviseurserviceService {

  constructor(private http : HttpClient) { }

  ajouterPhoneassistant(assistant:assistantform){
    this.http.post('http://localhost:8080/generationDesTickets/Superviseur/phoneassistant/ajouter',assistant)
   .subscribe()
  }

  ajoutertechnicien(technicien:ajouterTechnicien){
    this.http.post('http://localhost:8080/generationDesTickets/Superviseur/technicien/ajouter',technicien)
   .subscribe()
  }


  getallassistant(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/allassistant';
    return this.http.get<allassistant[]>(url); 
  }

  getallTech(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/alltechnicien';
    return this.http.get<allTech[]>(url); 
  }

  supprimerAssistant(id:number){
    this.http.delete('http://localhost:8080/generationDesTickets/Superviseur/phoneassistant/supprimer/'+id)
   .subscribe()
  }

  supprimerTechnicien(id:number){
    this.http.delete('http://localhost:8080/generationDesTickets/Superviseur/technicien/supprimer/'+id)
   .subscribe()
  }

  getdashboard(){
    const url = 'http://localhost:8080/generationDesTickets/Superviseur/dashboards';
    return this.http.get<dashboard>(url); 
  }
}

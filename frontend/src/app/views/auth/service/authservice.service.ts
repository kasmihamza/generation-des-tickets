import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { login } from 'src/app/model/auth/logim';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http : HttpClient) { }

  login(data:login):Observable<any>{
    return this.http.post("http://localhost:8080/generationDesTickets/authentification",data);
  }
}

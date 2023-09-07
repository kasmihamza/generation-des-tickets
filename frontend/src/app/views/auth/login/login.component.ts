import { Component ,OnInit} from '@angular/core';
import { login } from 'src/app/model/auth/logim';
import { AuthserviceService } from '../service/authservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,private aythservice: AuthserviceService) {}

  ngOnInit(): void {}

  loginProcess(data:login){
    console.log(data)
    this.aythservice.login(data).subscribe(results =>{
      if(results != 0){
        if(results == 1){
          this.router.navigate(['/phoneassistant/myticket']);
        }
        if(results == 2){
          this.router.navigate(['/technicien/ticketaffected']);
        }
        if(results == 3){
          this.router.navigate(['/superviseur/dashbords']);
        }
      }
      else{
        console.log("dddddsucces")
      }
    });
  }
}
import { Component , OnInit  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rhprofile } from 'src/app/model/Rhprofiles';
import{RhdetailsUpdated} from 'src/app/model/updateRhprofile'

@Component({
  selector: 'app-rhprofile',
  templateUrl: './rhprofile.component.html',
  styleUrls: ['./rhprofile.component.css']
})
export class RhprofileComponent implements OnInit {
  constructor(private http : HttpClient) {}

  ngOnInit(): void {
    this.fetchProfile();
  }

  onProfilefitch(){
    this.fetchProfile();
  }
  UserDetails: Rhprofile ={
    name: '',
    prenom: '',
    email: '',
    entreprisename: '',
    image: '',
    logoEntreprise: '',
    imageEntreprise: '',
    telephone: ''
} ;
  private fetchProfile(){
    this.http.get<Rhprofile>('http://localhost:8083/RhService/rh/9').
    subscribe((res)=>{
      
      this.UserDetails=res
      console.log(res);
    } )
  }
  //nameRh: string = this.UserDetails?.name;
  OnUpdate(rhdetailsUpdated: RhdetailsUpdated){
    rhdetailsUpdated.id=9;
    console.log(rhdetailsUpdated.telephone);
    this.http.post('http://localhost:8083/RhService/rh/update',rhdetailsUpdated)
    .subscribe((res)=>{

      console.log(res);
    })
    
  }
}

import { Component , OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {tableoffre} from 'src/app/model/TableOffre';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit{
  @Input()
  get color(): string {
    return this._color;
  }
  set color(color: string) {
    this._color = color !== "light" && color !== "dark" ? "light" : color;
  }
  private _color = "light";

  constructor(private http : HttpClient) {}

  formatDate(date: Date): string {
    const datePipe: DatePipe = new DatePipe('en-US');
    return datePipe.transform(date, 'yy/MM/dd H:mm') || '';
  }
  alloffre: tableoffre[]=[];
  tablesOffres : tableoffre={
    idoffre:  '',
    titre:  '',
    dateCreation :  new Date(),
    dateFin : new Date(),
    image :'',
    nmbrCandidats:  0
  }
  ngOnInit(): void {this.getOffres();}
  private getOffres(){
    this.http.get<tableoffre[]>('http://localhost:8083/RhService/offre/rh/9')
    .subscribe((res)=>{
      
      this.alloffre=res;
    
      console.log(this.alloffre);
    } )
  }

  changeFormatdate(dateoffre: Date){
    const formattedDateCreation: string = this.formatDate(dateoffre);
    return formattedDateCreation;
  }

  deleteOffre(id :string){
    
    this.http.delete('http://localhost:8083/RhService/offre/supprimer/'+ id)
    .subscribe( );
  }
}

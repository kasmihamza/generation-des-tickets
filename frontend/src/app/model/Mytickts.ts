export class mytickets{
    idticket: number = 9;
    
    titre: string = '';
    discription: string = '';
    idSource: number = 9;
    idType: number = 9;
    idDepartement: number = 9;
	priorite : Boolean = true;

    demandeurfirstName: string = '';
	demandeurLastName : string = '';
    telephoneDem : string = '';
    mailDem : string = '';
    serviceDem : string = '';

    adresseClient : string = '';
    nameClient: number = 9;
    dateCreation: Date = new Date();
    etat: string = '';
}
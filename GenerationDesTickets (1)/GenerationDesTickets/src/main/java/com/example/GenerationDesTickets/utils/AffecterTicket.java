package com.example.GenerationDesTickets.utils;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AffecterTicket {
	private Long idPhoneAssistant;

	private String titre;
	private Date dateCreation;
	private String discription;
	private Long idSource;
	private Boolean priorite;
	private Long idType;
	private Long idDepartement;

	private String demandeurfirstName;
	private String demandeurLastName;
	private String telephoneDem;
	private String mailDem;
	private String serviceDem;

	private String adresseClient;
	private String nameClient;

	private Long idTechnicien;
}

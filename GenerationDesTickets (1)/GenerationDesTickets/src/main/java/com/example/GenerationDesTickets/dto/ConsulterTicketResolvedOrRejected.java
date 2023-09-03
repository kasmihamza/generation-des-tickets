package com.example.GenerationDesTickets.dto;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ConsulterTicketResolvedOrRejected {
	private Long id;
	private String titre;
	private String description;
	private String descriptionTechnicien;
	private Date dateCreation;
	private Date dateAffectation;
	private Date dateSolution;
	private Boolean priorite;
	private String type;
	private String source;
	private String etat;
	private String Departement;
	private String firstanemDem;
	private String lastNameDem;
	private String telephone;
	private String mailDem;
	private String service;
	private String adresseclient;
	private String nameclient;
}

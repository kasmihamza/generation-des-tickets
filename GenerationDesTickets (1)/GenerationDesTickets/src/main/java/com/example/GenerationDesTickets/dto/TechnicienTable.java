package com.example.GenerationDesTickets.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TechnicienTable {
	private Long id;
	private Long idtype;
	private String nome;
	private String prenom;
	private String adresse;
	private String telephone;
	private String email;
	private String password;
	private String typetech;
	private int nbrTicketAffeected;
	private int nbrTicketResolved;
}

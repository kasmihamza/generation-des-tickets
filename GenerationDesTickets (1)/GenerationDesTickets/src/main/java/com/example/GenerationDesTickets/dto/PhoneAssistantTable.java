package com.example.GenerationDesTickets.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PhoneAssistantTable {
	private Long id;
	private String nome;
	private String prenom;
	private String telephone;
	private String adresse;
	private String email;
	private String password;
	private int nbrTicketAjouter;
}

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
	private String nome;
	private String prenom;
	private int nbrTicketAffeected;
	private int nbrTicketResolved;
}

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
public class HistoriqueTable {
	private Long id;
	private String titre;
	private Date dateCreation;
	private Date dateSolution;
	private String type;
	private String client;
}

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
public class TicketEnattenteDto {
	private Long id;
	private String titre;
	private String type;
	private Date dateCreation;
	private Boolean priorite;
}

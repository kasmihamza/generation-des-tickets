package com.example.GenerationDesTickets.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ResolverTicket {
	private Long ticketid;
	private Long technicienid;
	private String descriptionTechnicien;
}

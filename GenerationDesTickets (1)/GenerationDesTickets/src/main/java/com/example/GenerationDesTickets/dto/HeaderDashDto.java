package com.example.GenerationDesTickets.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class HeaderDashDto {
	private Integer nbTikcet;
	private Integer nbClient;
	private Integer nbDemendeurs;
}

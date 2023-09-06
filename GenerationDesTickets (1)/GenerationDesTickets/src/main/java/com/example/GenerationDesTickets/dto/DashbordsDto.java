package com.example.GenerationDesTickets.dto;

import java.util.ArrayList;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DashbordsDto {

	private List<Integer> materiel = new ArrayList<>();
	private List<Integer> logiciel = new ArrayList<>();
}

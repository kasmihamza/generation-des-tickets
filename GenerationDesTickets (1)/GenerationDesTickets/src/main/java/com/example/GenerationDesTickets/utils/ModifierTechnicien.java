package com.example.GenerationDesTickets.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ModifierTechnicien {
	private Long idtech;

	private String firstname;
	private String lastname;
	private String telephone;
	private String adresse;
	private String email;
	private String password;
	private Long typeid;

}

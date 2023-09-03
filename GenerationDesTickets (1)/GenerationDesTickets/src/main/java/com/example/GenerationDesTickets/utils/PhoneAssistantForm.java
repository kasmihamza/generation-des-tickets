package com.example.GenerationDesTickets.utils;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class PhoneAssistantForm {
	private String nome;
	private String prenom;
	private String email;
	private String password;
	private String telephone;
	private String adresse;

}

package com.example.GenerationDesTickets.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table
@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class Utilisateurs {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idUti;
	private String firstNameUti;
	private String lastNameUti;
	private String adresseUti;
	private String telephoneUti;
	private String emailUti;
	private String codeUti;
	private String passwordUti;
	private String loginUti;
	private String libelleUti;
	private Boolean statutUti;
}

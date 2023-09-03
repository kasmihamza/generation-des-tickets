package com.example.GenerationDesTickets.Models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
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
public class Demandeur {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idDem;
	private String firstNameDem;
	private String lastNameDem;
	private String telephoneDem;
	private String emailDem;
	private String service;
	@ManyToOne
	private Client client;

}

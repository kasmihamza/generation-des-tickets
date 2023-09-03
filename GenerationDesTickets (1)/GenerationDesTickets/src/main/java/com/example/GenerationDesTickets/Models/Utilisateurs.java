package com.example.GenerationDesTickets.Models;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Entity
@Table
@Inheritance(strategy = InheritanceType.JOINED)
@DiscriminatorColumn(name = "dtype")
@Builder
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
	private String passwordUti;
	@OneToOne
	private Role role;
}

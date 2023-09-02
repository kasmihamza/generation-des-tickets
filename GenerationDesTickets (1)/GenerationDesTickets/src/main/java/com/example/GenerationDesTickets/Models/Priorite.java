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
public class Priorite {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idPri;
	private String codePri;
	private String libellePri;
	private Boolean statutPri;
}

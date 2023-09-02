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
public class Source {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idSource;
	private String codeSource;
	private String libelleSource;
	private Boolean statutSource;

}

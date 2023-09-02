package com.example.GenerationDesTickets.Models;

import java.util.Date;

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
public class Ticket {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idTick;
	private String titreTick;
	private Date dateCreationTick;
	private Date dateAffectationTick;
	private Date dateSolutionTick;
	private String codeTick;
	private String libelleTick;
	private Boolean statutTick;
	private Long discriptionTick;
	private Long textTick;
}

package com.example.GenerationDesTickets.Models;

import java.util.List;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Entity
@Table
@Data

@EqualsAndHashCode
@DiscriminatorColumn(name = "user_type")
public class Superviseur extends Utilisateurs {

	@OneToMany
	private List<Ticket> ticketAjouter;
}

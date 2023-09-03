package com.example.GenerationDesTickets.Models;

import java.util.List;

import javax.persistence.DiscriminatorColumn;
import javax.persistence.Entity;
import javax.persistence.OneToMany;
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
@DiscriminatorColumn(name = "user_type")
public class PhoneAssistant extends Utilisateurs {

	@OneToMany
	private List<Ticket> ticketAjouter;

}

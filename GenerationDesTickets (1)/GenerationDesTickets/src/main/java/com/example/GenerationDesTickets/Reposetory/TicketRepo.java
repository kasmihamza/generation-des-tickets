package com.example.GenerationDesTickets.Reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.GenerationDesTickets.Models.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long> {
	@Query(value = "SELECT  t From Ticket t where t.etat.idEtat = 2")
	List<Ticket> findticketenattente();
}

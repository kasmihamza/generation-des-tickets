package com.example.GenerationDesTickets.Reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.GenerationDesTickets.Models.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long> {
	@Query(value = "SELECT  t From Ticket t where t.etat.idEtat = 2")
	List<Ticket> findticketenattente();

	@Query("SELECT COUNT(t) FROM Ticket t WHERE MONTH(t.dateCreationTick) = :month AND t.type.idType = :typeId")
	Integer countTicketsByMonthAndType(@Param("month") int month, @Param("typeId") Long typeId);

	@Query("SELECT COUNT(t) FROM Ticket t")
	Integer countAllTickets();

	@Query("SELECT COUNT(t) FROM Ticket t WHERE MONTH(t.dateCreationTick) = MONTH(CURRENT_DATE)")
	Integer countTicketsByPresentMonth();

	@Query("SELECT COUNT(t) FROM Ticket t WHERE  t.type.idType = :typeId")
	Integer countTicketsByType(@Param("typeId") Long typeId);
}

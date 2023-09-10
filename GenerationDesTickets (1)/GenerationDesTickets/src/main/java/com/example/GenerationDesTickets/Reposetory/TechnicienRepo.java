package com.example.GenerationDesTickets.Reposetory;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.GenerationDesTickets.Models.Tichnicien;

public interface TechnicienRepo extends JpaRepository<Tichnicien, Long> {

	@Query(value = "SELECT  t From Tichnicien t where t.typeTech.idType = :typeid AND t.disponsibilite=true")
	List<Tichnicien> findTechnicienByType(@Param("typeid") Long typeid);

	@Query("SELECT t FROM Tichnicien t JOIN t.ticketresolved tr WHERE tr.idTick = :ticketId")
	Tichnicien findTichnicienByTicketId(@Param("ticketId") Long ticketId);
}

package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.GenerationDesTickets.Models.Demandeur;

public interface DemandeurRepo extends JpaRepository<Demandeur, Long> {
	@Query("SELECT COUNT(d) FROM Demandeur d")
	Integer countAllDemandeurs();
}

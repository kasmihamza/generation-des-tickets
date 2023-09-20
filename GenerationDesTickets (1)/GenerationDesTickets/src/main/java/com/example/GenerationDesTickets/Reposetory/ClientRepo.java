package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.GenerationDesTickets.Models.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {
	@Query("SELECT COUNT(c) FROM Client c")
	Integer countAllClients();

}

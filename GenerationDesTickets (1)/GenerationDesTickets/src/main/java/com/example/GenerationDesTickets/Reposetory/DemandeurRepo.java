package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Demandeur;

public interface DemandeurRepo extends JpaRepository<Demandeur, Long> {

}

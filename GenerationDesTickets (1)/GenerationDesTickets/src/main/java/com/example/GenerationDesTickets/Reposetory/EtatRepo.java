package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Etat;

public interface EtatRepo extends JpaRepository<Etat, Long> {

}

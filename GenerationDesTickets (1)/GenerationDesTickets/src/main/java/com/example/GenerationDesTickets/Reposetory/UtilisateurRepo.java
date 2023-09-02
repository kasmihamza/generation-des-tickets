package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Utilisateurs;

public interface UtilisateurRepo extends JpaRepository<Utilisateurs, Long> {

}

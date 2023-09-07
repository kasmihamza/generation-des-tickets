package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.example.GenerationDesTickets.Models.Utilisateurs;

public interface UtilisateurRepo extends JpaRepository<Utilisateurs, Long> {

	@Query("SELECT u FROM Utilisateurs u WHERE u.emailUti = :email")
	Utilisateurs findByEmailUtilisateur(@Param("email") String email);
}

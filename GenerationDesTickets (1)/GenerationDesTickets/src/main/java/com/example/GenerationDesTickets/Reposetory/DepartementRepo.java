package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Departement;

public interface DepartementRepo extends JpaRepository<Departement, Long> {

}

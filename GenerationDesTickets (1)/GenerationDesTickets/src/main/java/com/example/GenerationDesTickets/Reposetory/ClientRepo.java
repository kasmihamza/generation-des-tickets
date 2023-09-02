package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Client;

public interface ClientRepo extends JpaRepository<Client, Long> {

}

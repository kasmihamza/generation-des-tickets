package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Ticket;

public interface TicketRepo extends JpaRepository<Ticket, Long> {

}

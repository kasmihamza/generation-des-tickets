package com.example.GenerationDesTickets.Reposetory;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.GenerationDesTickets.Models.Service;

public interface ServiceRepo extends JpaRepository<Service, Long> {

}

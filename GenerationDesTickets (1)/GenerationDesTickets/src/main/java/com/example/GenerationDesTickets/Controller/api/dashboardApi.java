package com.example.GenerationDesTickets.Controller.api;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.GenerationDesTickets.dto.HeaderDashDto;

@CrossOrigin(origins = "http://localhost:4200")
public interface dashboardApi {

	@GetMapping(value = "generationDesTickets/header/dashboard", produces = MediaType.APPLICATION_JSON_VALUE)
	HeaderDashDto getdashboardheader();
}

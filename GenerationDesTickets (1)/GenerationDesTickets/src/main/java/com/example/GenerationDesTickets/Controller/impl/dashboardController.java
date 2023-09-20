package com.example.GenerationDesTickets.Controller.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import com.example.GenerationDesTickets.Controller.api.dashboardApi;
import com.example.GenerationDesTickets.Reposetory.ClientRepo;
import com.example.GenerationDesTickets.Reposetory.DemandeurRepo;
import com.example.GenerationDesTickets.Reposetory.TicketRepo;
import com.example.GenerationDesTickets.dto.HeaderDashDto;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class dashboardController implements dashboardApi {
	@Autowired
	private final ClientRepo clientRepo;
	@Autowired
	private final DemandeurRepo demandeurRepo;
	@Autowired
	private final TicketRepo ticketRepo;

	@Override
	public HeaderDashDto getdashboardheader() {
		// TODO Auto-generated method stub
		HeaderDashDto header = new HeaderDashDto();
		Integer nbrClient = clientRepo.countAllClients();
		Integer nbrTickets = ticketRepo.countAllTickets();
		Integer nbrDemenadeurs = demandeurRepo.countAllDemandeurs();
		Integer nbrresolved = ticketRepo.countTicketsByType((long) 3);
		header.setNbClient(nbrClient);
		header.setNbDemendeurs(nbrDemenadeurs);
		header.setNbTikcet(nbrTickets);
		return header;
	}

}

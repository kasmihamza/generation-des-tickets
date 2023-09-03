package com.example.GenerationDesTickets.Controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.GenerationDesTickets.dto.ConsulterTicketAffectedEnAttenteDto;
import com.example.GenerationDesTickets.dto.ConsulterTicketResolvedOrRejected;
import com.example.GenerationDesTickets.dto.HistoriqueTable;
import com.example.GenerationDesTickets.dto.TicketAjouterTable;
import com.example.GenerationDesTickets.utils.AffecterTicket;
import com.example.GenerationDesTickets.utils.ResponseMessage;
import com.example.GenerationDesTickets.utils.TicketForm;

public interface PhoneAssistantApi {
	@PostMapping(value = "generationDesTickets/phoneassistant/ticket/ajouter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterTicket(@RequestBody TicketForm ticketForm);

	@PostMapping(value = "generationDesTickets/phoneassistant/ticket/affecter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AffecterTicket(@RequestBody AffecterTicket affecterTicket);

	@GetMapping(value = "generationDesTickets/phoneassistant/allaMytickets/{idassist}", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TicketAjouterTable> getallMyTicket(@PathVariable("idassist") Long assistid);

	@GetMapping(value = "generationDesTickets/phoneassistant/consulteraffected/{idtickets}", produces = MediaType.APPLICATION_JSON_VALUE)
	ConsulterTicketAffectedEnAttenteDto consulterAffectedOrenattenteTickets(@PathVariable("idtickets") Long ticketid);

	@GetMapping(value = "generationDesTickets/phoneassistant/historique", produces = MediaType.APPLICATION_JSON_VALUE)
	List<HistoriqueTable> getHistorique();

	@GetMapping(value = "generationDesTickets/phoneassistant/consulterResolved/{idtickets}", produces = MediaType.APPLICATION_JSON_VALUE)
	ConsulterTicketResolvedOrRejected consulterResolvedOrRejectedTickets(@PathVariable("idtickets") Long ticketid);

}

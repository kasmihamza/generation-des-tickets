package com.example.GenerationDesTickets.Controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.GenerationDesTickets.dto.TicketEnattenteDto;
import com.example.GenerationDesTickets.dto.TicketsAffectedTable;
import com.example.GenerationDesTickets.utils.AffecterTickentEnattente;
import com.example.GenerationDesTickets.utils.Disponsibilite;
import com.example.GenerationDesTickets.utils.ResolverTicket;
import com.example.GenerationDesTickets.utils.ResponseMessage;

@CrossOrigin(origins = "http://localhost:4200")
public interface TechnicienApi {
	@GetMapping(value = "generationDesTickets/technicien/allaffectedtickets/{idtech}", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TicketsAffectedTable> getallMyaffectedTicket(@PathVariable("idtech") Long technicienid);

	@GetMapping(value = "generationDesTickets/technicien/allaenattente", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TicketEnattenteDto> getallenattenteticket();

	@PostMapping(value = "generationDesTickets/technicien/resolverticket", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> resolverTicket(@RequestBody ResolverTicket resolverTicket);

	@PostMapping(value = "generationDesTickets/technicien/rejecterticket", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> rejecterTicket(@RequestBody ResolverTicket resolverTicket);

	@PostMapping(value = "generationDesTickets/technicien/diponsibilte", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> desponsibilte(@RequestBody Disponsibilite disponsibilite);

	@PostMapping(value = "generationDesTickets/technicien/ajouterticketenattente", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> ajouterTicketEnattenteAmesTicket(
			@RequestBody AffecterTickentEnattente affecterTickentEnattente);
}

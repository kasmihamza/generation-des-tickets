package com.example.GenerationDesTickets.Controller.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.GenerationDesTickets.Controller.api.TechnicienApi;
import com.example.GenerationDesTickets.Models.Tichnicien;
import com.example.GenerationDesTickets.Models.Ticket;
import com.example.GenerationDesTickets.Reposetory.ClientRepo;
import com.example.GenerationDesTickets.Reposetory.DemandeurRepo;
import com.example.GenerationDesTickets.Reposetory.DepartementRepo;
import com.example.GenerationDesTickets.Reposetory.EtatRepo;
import com.example.GenerationDesTickets.Reposetory.PhoneAssistantRepo;
import com.example.GenerationDesTickets.Reposetory.RoleRepo;
import com.example.GenerationDesTickets.Reposetory.SourceRepo;
import com.example.GenerationDesTickets.Reposetory.TechnicienRepo;
import com.example.GenerationDesTickets.Reposetory.TicketRepo;
import com.example.GenerationDesTickets.Reposetory.TypeRepo;
import com.example.GenerationDesTickets.dto.TicketEnattenteDto;
import com.example.GenerationDesTickets.dto.TicketsAffectedTable;
import com.example.GenerationDesTickets.utils.AffecterTickentEnattente;
import com.example.GenerationDesTickets.utils.Disponsibilite;
import com.example.GenerationDesTickets.utils.ResolverTicket;
import com.example.GenerationDesTickets.utils.ResponseMessage;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class TechnicienController implements TechnicienApi {

	@Autowired
	private final PhoneAssistantRepo phoneAssistantRepo;
	@Autowired
	private final TechnicienRepo technicienRepo;
	@Autowired
	private final ClientRepo clientRepo;
	@Autowired
	private final DemandeurRepo demandeurRepo;
	@Autowired
	private final TicketRepo ticketRepo;
	@Autowired
	private final SourceRepo sourceRepo;
	@Autowired
	private final EtatRepo etatRepo;
	@Autowired
	private final TypeRepo typeRepo;
	@Autowired
	private final DepartementRepo departementRepo;
	@Autowired
	private final RoleRepo roleRepo;

	@Override
	public List<TicketsAffectedTable> getallMyaffectedTicket(Long technicienid) {
		// TODO Auto-generated method stub
		Tichnicien technicien = technicienRepo.findById(technicienid).get();
		List<Ticket> affectedTickets = technicien.getTicketaffecte();
		List<TicketsAffectedTable> tableTickets = new ArrayList();
		for (int i = 0; i < affectedTickets.size(); i++) {
			TicketsAffectedTable ticket = new TicketsAffectedTable();
			ticket.setDateAffectation(affectedTickets.get(i).getDateAffectationTick());
			ticket.setDateCreation(affectedTickets.get(i).getDateCreationTick());
			ticket.setId(affectedTickets.get(i).getIdTick());
			ticket.setTitre(affectedTickets.get(i).getTitreTick());
			ticket.setPriorite(affectedTickets.get(i).getPriorete());
			tableTickets.add(ticket);
		}
		return tableTickets;
	}

	@Override
	public List<TicketEnattenteDto> getallenattenteticket() {
		// TODO Auto-generated method stub
		List<Ticket> affectedTickets = ticketRepo.findticketenattente();
		List<TicketEnattenteDto> tableTickets = new ArrayList();
		for (int i = 0; i < affectedTickets.size(); i++) {
			TicketEnattenteDto ticket = new TicketEnattenteDto();
			ticket.setDateCreation(affectedTickets.get(i).getDateCreationTick());
			ticket.setId(affectedTickets.get(i).getIdTick());
			ticket.setTitre(affectedTickets.get(i).getTitreTick());
			ticket.setPriorite(affectedTickets.get(i).getPriorete());
			ticket.setType(affectedTickets.get(i).getType().getNameType());
			tableTickets.add(ticket);
		}
		return tableTickets;
	}

	@Override
	public ResponseEntity<ResponseMessage> resolverTicket(ResolverTicket resolverTicket) {
		// TODO Auto-generated method stub
		Ticket ticket = ticketRepo.findById(resolverTicket.getTicketid()).get();
		ticket.setDiscriptionTechnicien(resolverTicket.getDescriptionTechnicien());
		ticket.setEtat(etatRepo.findById((long) 3).get());
		Date date = new Date();
		ticket.setDateSolutionTick(date);
		ticketRepo.saveAndFlush(ticket);
		Tichnicien tich = technicienRepo.findById(resolverTicket.getTechnicienid()).get();
		tich.getTicketaffecte().remove(ticket);
		tich.getTicketresolved().add(ticket);
		technicienRepo.saveAndFlush(tich);
		String message = "ticket resolved avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> rejecterTicket(ResolverTicket resolverTicket) {
		// TODO Auto-generated method stub
		Ticket ticket = ticketRepo.findById(resolverTicket.getTicketid()).get();
		ticket.setDiscriptionTechnicien(resolverTicket.getDescriptionTechnicien());
		ticket.setEtat(etatRepo.findById((long) 4).get());
		Date date = new Date();
		ticket.setDateSolutionTick(date);
		ticketRepo.saveAndFlush(ticket);
		Tichnicien tich = technicienRepo.findById(resolverTicket.getTechnicienid()).get();
		tich.getTicketaffecte().remove(ticket);
		tich.getTicketresolved().add(ticket);
		technicienRepo.saveAndFlush(tich);
		String message = "ticket rejected avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> desponsibilte(Disponsibilite disponsibilite) {
		// TODO Auto-generated method stub

		Tichnicien tich = technicienRepo.findById(disponsibilite.getTechnicienid()).get();
		tich.setDisponsibilite(disponsibilite.getDesponsiblite());
		technicienRepo.saveAndFlush(tich);
		String message = "votre disponsibilite maintenant est  " + disponsibilite.getDesponsiblite();
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> ajouterTicketEnattenteAmesTicket(
			AffecterTickentEnattente affecterTickentEnattente) {
		// TODO Auto-generated method stub
		Ticket ticket = ticketRepo.findById(affecterTickentEnattente.getTicketid()).get();
		ticket.setEtat(etatRepo.findById((long) 1).get());
		ticketRepo.saveAndFlush(ticket);
		Tichnicien tich = technicienRepo.findById(affecterTickentEnattente.getTechid()).get();
		tich.getTicketaffecte().add(ticket);
		technicienRepo.save(tich);
		String message = "ticket affected to you ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public Boolean getdiponibilite(Long technicienid) {
		// TODO Auto-generated method stub
		Tichnicien technicien = technicienRepo.findById(technicienid).get();
		return technicien.getDisponsibilite();
	}

}

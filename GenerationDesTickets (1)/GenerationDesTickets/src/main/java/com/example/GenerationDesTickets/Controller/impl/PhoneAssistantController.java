package com.example.GenerationDesTickets.Controller.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.GenerationDesTickets.Controller.api.PhoneAssistantApi;
import com.example.GenerationDesTickets.Models.Client;
import com.example.GenerationDesTickets.Models.Demandeur;
import com.example.GenerationDesTickets.Models.PhoneAssistant;
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
import com.example.GenerationDesTickets.dto.ConsulterTicketAffectedEnAttenteDto;
import com.example.GenerationDesTickets.dto.ConsulterTicketResolvedOrRejected;
import com.example.GenerationDesTickets.dto.HistoriqueTable;
import com.example.GenerationDesTickets.utils.AffecterTicket;
import com.example.GenerationDesTickets.utils.ModifierTicketForm;
import com.example.GenerationDesTickets.utils.ResponseMessage;
import com.example.GenerationDesTickets.utils.TicketForm;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class PhoneAssistantController implements PhoneAssistantApi {

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
	public ResponseEntity<ResponseMessage> AjouterTicket(TicketForm ticketForm) {
		// TODO Auto-generated method stub
		// save client
		Client client = new Client();
		client.setAdresse(ticketForm.getAdresseClient());
		client.setName(ticketForm.getNameClient());
		clientRepo.save(client);

		// save demandeur
		Demandeur demandeur = new Demandeur();
		demandeur.setFirstNameDem(ticketForm.getDemandeurfirstName());
		demandeur.setLastNameDem(ticketForm.getDemandeurLastName());
		demandeur.setTelephoneDem(ticketForm.getTelephoneDem());
		demandeur.setEmailDem(ticketForm.getMailDem());
		demandeur.setService(ticketForm.getServiceDem());
		demandeur.setClient(client);
		demandeurRepo.save(demandeur);

		// save ticket
		Ticket ticket = new Ticket();
		ticket.setTitreTick(ticketForm.getTitre());
		ticket.setDateCreationTick(ticketForm.getDateCreation());
		ticket.setDiscriptionTick(ticketForm.getDiscription());
		ticket.setPriorete(ticketForm.getPriorite());
		ticket.setSource(sourceRepo.findById(ticketForm.getIdSource()).get());
		ticket.setType(typeRepo.findById(ticketForm.getIdType()).get());
		ticket.setEtat(etatRepo.findById((long) 2).get());
		ticket.setDepartement(departementRepo.findById(ticketForm.getIdDepartement()).get());
		ticket.setDemandeur(demandeur);
		Date datecreation = new Date();
		ticket.setDateCreationTick(datecreation);
		ticketRepo.save(ticket);

		PhoneAssistant phoneAssistant = phoneAssistantRepo.findById(ticketForm.getIdPhoneAssistant()).get();
		phoneAssistant.getTicketAjouter().add(ticket);
		phoneAssistantRepo.saveAndFlush(phoneAssistant);

		String message = "ticket ajouter avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> AffecterTicket(AffecterTicket affecterTicket) {
		// TODO Auto-generated method stub
		// save client
		Client client = new Client();
		client.setAdresse(affecterTicket.getAdresseClient());
		client.setName(affecterTicket.getNameClient());
		clientRepo.save(client);

		// save demandeur
		Demandeur demandeur = new Demandeur();
		demandeur.setFirstNameDem(affecterTicket.getDemandeurfirstName());
		demandeur.setLastNameDem(affecterTicket.getDemandeurLastName());
		demandeur.setTelephoneDem(affecterTicket.getTelephoneDem());
		demandeur.setEmailDem(affecterTicket.getMailDem());
		demandeur.setService(affecterTicket.getServiceDem());
		demandeur.setClient(client);
		demandeurRepo.save(demandeur);

		// save ticket
		Ticket ticket = new Ticket();
		ticket.setTitreTick(affecterTicket.getTitre());
		ticket.setDateCreationTick(affecterTicket.getDateCreation());
		ticket.setDiscriptionTick(affecterTicket.getDiscription());
		ticket.setPriorete(affecterTicket.getPriorite());
		ticket.setSource(sourceRepo.findById(affecterTicket.getIdSource()).get());
		ticket.setType(typeRepo.findById(affecterTicket.getIdType()).get());
		ticket.setEtat(etatRepo.findById((long) 1).get());
		ticket.setDepartement(departementRepo.findById(affecterTicket.getIdDepartement()).get());
		ticket.setDemandeur(demandeur);
		Date dateaffectation = new Date();
		ticket.setDateAffectationTick(dateaffectation);
		ticket.setDateCreationTick(dateaffectation);
		ticketRepo.save(ticket);

		PhoneAssistant phoneAssistant = phoneAssistantRepo.findById(affecterTicket.getIdPhoneAssistant()).get();
		phoneAssistant.getTicketAjouter().add(ticket);
		phoneAssistantRepo.saveAndFlush(phoneAssistant);

		Tichnicien technicien = technicienRepo.findById(affecterTicket.getIdTechnicien()).get();
		technicien.getTicketaffecte().add(ticket);
		technicienRepo.saveAndFlush(technicien);
		String message = "ticket affected au technicien " + technicien.getLastNameUti() + " avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public List<ModifierTicketForm> getallMyTicket(Long assistid) {
		// TODO Auto-generated method stub
		PhoneAssistant phoneAssistant = phoneAssistantRepo.findById(assistid).get();
		List<Ticket> tickets = phoneAssistant.getTicketAjouter();
		List<Ticket> ticketsaffectedOrenattente = new ArrayList();
		for (int j = 0; j < tickets.size(); j++) {
			if (tickets.get(j).getEtat().getIdEtat() == 1 || tickets.get(j).getEtat().getIdEtat() == 2) {
				ticketsaffectedOrenattente.add(tickets.get(j));
			}
		}
		List<ModifierTicketForm> ticketsTable = new ArrayList();
		for (int i = 0; i < ticketsaffectedOrenattente.size(); i++) {
			ModifierTicketForm ticketAjouter = new ModifierTicketForm();
			ticketAjouter.setAdresseClient(ticketsaffectedOrenattente.get(i).getDemandeur().getClient().getAdresse());
			ticketAjouter.setDemandeurfirstName(ticketsaffectedOrenattente.get(i).getDemandeur().getFirstNameDem());
			ticketAjouter.setDemandeurLastName(ticketsaffectedOrenattente.get(i).getDemandeur().getLastNameDem());
			ticketAjouter.setDiscription(ticketsaffectedOrenattente.get(i).getDiscriptionTick());
			ticketAjouter.setIdDepartement(ticketsaffectedOrenattente.get(i).getDepartement().getIdDep());
			ticketAjouter.setIdSource(ticketsaffectedOrenattente.get(i).getSource().getIdSource());
			ticketAjouter.setIdticket(ticketsaffectedOrenattente.get(i).getIdTick());
			ticketAjouter.setIdType(ticketsaffectedOrenattente.get(i).getType().getIdType());
			ticketAjouter.setMailDem(ticketsaffectedOrenattente.get(i).getDemandeur().getEmailDem());
			ticketAjouter.setNameClient(ticketsaffectedOrenattente.get(i).getDemandeur().getClient().getName());
			ticketAjouter.setPriorite(ticketsaffectedOrenattente.get(i).getPriorete());
			ticketAjouter.setServiceDem(ticketsaffectedOrenattente.get(i).getDemandeur().getService());
			ticketAjouter.setTelephoneDem(ticketsaffectedOrenattente.get(i).getDemandeur().getTelephoneDem());
			ticketAjouter.setTitre(ticketsaffectedOrenattente.get(i).getTitreTick());
			ticketAjouter.setDateCreation(ticketsaffectedOrenattente.get(i).getDateCreationTick());
			ticketAjouter.setEtat(ticketsaffectedOrenattente.get(i).getEtat().getStatutEtat());
			ticketsTable.add(ticketAjouter);
		}
		return ticketsTable;
	}

	@Override
	public ConsulterTicketAffectedEnAttenteDto consulterAffectedOrenattenteTickets(Long ticketid) {
		// TODO Auto-generated method stub
		Ticket ticket = ticketRepo.findById(ticketid).get();
		ConsulterTicketAffectedEnAttenteDto consultTicket = new ConsulterTicketAffectedEnAttenteDto();
		consultTicket.setId(ticketid);
		consultTicket.setTitre(ticket.getTitreTick());
		consultTicket.setDateCreation(ticket.getDateCreationTick());
		consultTicket.setDateAffectation(ticket.getDateAffectationTick());
		consultTicket.setDescription(ticket.getDiscriptionTick());
		consultTicket.setSource(ticket.getSource().getNameSource());
		consultTicket.setPriorite(ticket.getPriorete());
		consultTicket.setType(ticket.getType().getNameType());
		consultTicket.setEtat(ticket.getEtat().getStatutEtat());
		consultTicket.setDepartement(ticket.getDepartement().getNameDep());
		consultTicket.setFirstanemDem(ticket.getDemandeur().getFirstNameDem());
		consultTicket.setLastNameDem(ticket.getDemandeur().getLastNameDem());
		consultTicket.setTelephone(ticket.getDemandeur().getTelephoneDem());
		consultTicket.setMailDem(ticket.getDemandeur().getEmailDem());
		consultTicket.setService(ticket.getDemandeur().getService());
		consultTicket.setAdresseclient(ticket.getDemandeur().getClient().getAdresse());
		consultTicket.setNameclient(ticket.getDemandeur().getClient().getName());
		return consultTicket;
	}

	@Override
	public List<HistoriqueTable> getHistorique() {
		// TODO Auto-generated method stub
		List<Ticket> allTickets = ticketRepo.findAll();
		List<Ticket> resolvedrejectedTickets = new ArrayList();
		for (int i = 0; i < allTickets.size(); i++) {
			if (allTickets.get(i).getEtat().getIdEtat() == 3 || allTickets.get(i).getEtat().getIdEtat() == 4) {
				resolvedrejectedTickets.add(allTickets.get(i));
			}
		}
		List<HistoriqueTable> historique = new ArrayList();
		for (int j = 0; j < resolvedrejectedTickets.size(); j++) {
			HistoriqueTable histoDto = new HistoriqueTable();
			histoDto.setClient(resolvedrejectedTickets.get(j).getDemandeur().getClient().getName());
			histoDto.setDateCreation(resolvedrejectedTickets.get(j).getDateCreationTick());
			histoDto.setDateSolution(resolvedrejectedTickets.get(j).getDateSolutionTick());
			histoDto.setId(resolvedrejectedTickets.get(j).getIdTick());
			histoDto.setTitre(resolvedrejectedTickets.get(j).getTitreTick());
			histoDto.setType(resolvedrejectedTickets.get(j).getType().getNameType());
			historique.add(histoDto);
		}
		return historique;
	}

	@Override
	public ConsulterTicketResolvedOrRejected consulterResolvedOrRejectedTickets(Long ticketid) {
		// TODO Auto-generated method stub
		Ticket ticket = ticketRepo.findById(ticketid).get();
		ConsulterTicketResolvedOrRejected consultTicket = new ConsulterTicketResolvedOrRejected();
		consultTicket.setId(ticketid);
		consultTicket.setTitre(ticket.getTitreTick());
		consultTicket.setDateCreation(ticket.getDateCreationTick());
		consultTicket.setDateAffectation(ticket.getDateAffectationTick());
		consultTicket.setDescription(ticket.getDiscriptionTick());
		consultTicket.setSource(ticket.getSource().getNameSource());
		consultTicket.setPriorite(ticket.getPriorete());
		consultTicket.setType(ticket.getType().getNameType());
		consultTicket.setEtat(ticket.getEtat().getStatutEtat());
		consultTicket.setDepartement(ticket.getDepartement().getNameDep());
		consultTicket.setFirstanemDem(ticket.getDemandeur().getFirstNameDem());
		consultTicket.setLastNameDem(ticket.getDemandeur().getLastNameDem());
		consultTicket.setTelephone(ticket.getDemandeur().getTelephoneDem());
		consultTicket.setMailDem(ticket.getDemandeur().getEmailDem());
		consultTicket.setService(ticket.getDemandeur().getService());
		consultTicket.setAdresseclient(ticket.getDemandeur().getClient().getAdresse());
		consultTicket.setNameclient(ticket.getDemandeur().getClient().getName());
		consultTicket.setDateSolution(ticket.getDateSolutionTick());
		consultTicket.setDescriptionTechnicien(ticket.getDiscriptionTechnicien());
		return consultTicket;

	}

	@Override
	public ResponseEntity<ResponseMessage> ModifierTicket(ModifierTicketForm modifierTicketForm) {
		// TODO Auto-generated method stub

		// save ticket
		Ticket ticket = ticketRepo.findById(modifierTicketForm.getIdticket()).get();
		ticket.setTitreTick(modifierTicketForm.getTitre());
		ticket.setDiscriptionTick(modifierTicketForm.getDiscription());
		ticket.setPriorete(modifierTicketForm.getPriorite());
		ticket.setSource(sourceRepo.findById(modifierTicketForm.getIdSource()).get());
		ticket.setType(typeRepo.findById(modifierTicketForm.getIdType()).get());
		ticket.setDepartement(departementRepo.findById(modifierTicketForm.getIdDepartement()).get());

		// save demandeur
		Demandeur demandeur = ticket.getDemandeur();
		demandeur.setFirstNameDem(modifierTicketForm.getDemandeurfirstName());
		demandeur.setLastNameDem(modifierTicketForm.getDemandeurLastName());
		demandeur.setTelephoneDem(modifierTicketForm.getTelephoneDem());
		demandeur.setEmailDem(modifierTicketForm.getMailDem());
		demandeur.setService(modifierTicketForm.getServiceDem());

		// save client
		Client client = demandeur.getClient();
		client.setAdresse(modifierTicketForm.getAdresseClient());
		client.setName(modifierTicketForm.getNameClient());
		clientRepo.saveAndFlush(client);

		demandeur.setClient(client);
		demandeurRepo.saveAndFlush(demandeur);

		ticket.setDemandeur(demandeur);
		ticketRepo.saveAndFlush(ticket);

		String message = "ticket modifier  avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

}

package com.example.GenerationDesTickets.Controller.impl;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.GenerationDesTickets.Controller.api.SuperviseurApi;
import com.example.GenerationDesTickets.Models.Client;
import com.example.GenerationDesTickets.Models.Demandeur;
import com.example.GenerationDesTickets.Models.PhoneAssistant;
import com.example.GenerationDesTickets.Models.Superviseur;
import com.example.GenerationDesTickets.Models.Tichnicien;
import com.example.GenerationDesTickets.Models.Ticket;
import com.example.GenerationDesTickets.Models.Utilisateurs;
import com.example.GenerationDesTickets.Reposetory.ClientRepo;
import com.example.GenerationDesTickets.Reposetory.DemandeurRepo;
import com.example.GenerationDesTickets.Reposetory.DepartementRepo;
import com.example.GenerationDesTickets.Reposetory.EtatRepo;
import com.example.GenerationDesTickets.Reposetory.PhoneAssistantRepo;
import com.example.GenerationDesTickets.Reposetory.RoleRepo;
import com.example.GenerationDesTickets.Reposetory.SourceRepo;
import com.example.GenerationDesTickets.Reposetory.SuperviseurRepo;
import com.example.GenerationDesTickets.Reposetory.TechnicienRepo;
import com.example.GenerationDesTickets.Reposetory.TicketRepo;
import com.example.GenerationDesTickets.Reposetory.TypeRepo;
import com.example.GenerationDesTickets.Reposetory.UtilisateurRepo;
import com.example.GenerationDesTickets.dto.DashbordsDto;
import com.example.GenerationDesTickets.dto.PhoneAssistantTable;
import com.example.GenerationDesTickets.dto.TechnicienByTypeTable;
import com.example.GenerationDesTickets.dto.TechnicienTable;
import com.example.GenerationDesTickets.utils.AffecterTicket;
import com.example.GenerationDesTickets.utils.Authentification;
import com.example.GenerationDesTickets.utils.ModieifierAssistant;
import com.example.GenerationDesTickets.utils.ModifierTechnicien;
import com.example.GenerationDesTickets.utils.ModifierTicketForm;
import com.example.GenerationDesTickets.utils.PhoneAssistantForm;
import com.example.GenerationDesTickets.utils.ResponseMessage;
import com.example.GenerationDesTickets.utils.TechnicienForm;
import com.example.GenerationDesTickets.utils.TicketForm;

import lombok.AllArgsConstructor;

@RestController
@AllArgsConstructor
public class SuperviseurController implements SuperviseurApi {
	@Autowired
	private final PhoneAssistantRepo phoneAssistantRepo;
	@Autowired
	private final SuperviseurRepo superviseurRepo;
	@Autowired
	private final TechnicienRepo technicienRepo;
	@Autowired
	private final TicketRepo ticketRepo;
	@Autowired
	private final ClientRepo clientRepo;
	@Autowired
	private final DemandeurRepo demandeurRepo;
	@Autowired
	private final RoleRepo roleRepo;
	@Autowired
	private final TypeRepo typeRepo;
	@Autowired
	private final SourceRepo sourceRepo;
	@Autowired
	private final EtatRepo etatRepo;
	@Autowired
	private final DepartementRepo departementRepo;
	@Autowired
	private final UtilisateurRepo utilisateurRepo;

	@Override
	public ResponseEntity<ResponseMessage> AjouterPhoneAssistant(PhoneAssistantForm phoneAssistantForm) {
		// TODO Auto-generated method stub
		PhoneAssistant assistant = new PhoneAssistant();
		assistant.setFirstNameUti(phoneAssistantForm.getPrenom());
		assistant.setLastNameUti(phoneAssistantForm.getNome());
		assistant.setAdresseUti(phoneAssistantForm.getAdresse());
		assistant.setEmailUti(phoneAssistantForm.getEmail());
		assistant.setPasswordUti(phoneAssistantForm.getPassword());
		assistant.setTelephoneUti(phoneAssistantForm.getTelephone());
		assistant.setRole(roleRepo.findById((long) 1).get());
		phoneAssistantRepo.save(assistant);
		String message = "phone assistant ajouter avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> AjouterSuperviseur(PhoneAssistantForm phoneAssistantForm) {
		// TODO Auto-generated method stub
		Superviseur superviseur = new Superviseur();
		superviseur.setFirstNameUti(phoneAssistantForm.getPrenom());
		superviseur.setLastNameUti(phoneAssistantForm.getNome());
		superviseur.setAdresseUti(phoneAssistantForm.getAdresse());
		superviseur.setEmailUti(phoneAssistantForm.getEmail());
		superviseur.setPasswordUti(phoneAssistantForm.getPassword());
		superviseur.setTelephoneUti(phoneAssistantForm.getTelephone());
		superviseur.setRole(roleRepo.findById((long) 3).get());
		superviseurRepo.save(superviseur);
		String message = "superviseur ajouter avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> deleteAssistant(Long assistantid) {
		// TODO Auto-generated method stub
		phoneAssistantRepo.deleteById(assistantid);
		String message = "phone assistant supprimer avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public List<PhoneAssistantTable> getallAssistant() {
		// TODO Auto-generated method stub
		List<PhoneAssistant> allPhoneAssistant = phoneAssistantRepo.findAll();
		List<PhoneAssistantTable> phoneAssistantTable = new ArrayList();
		for (int i = 0; i < allPhoneAssistant.size(); i++) {
			PhoneAssistantTable phoneAssistantdto = new PhoneAssistantTable();
			phoneAssistantdto.setId(allPhoneAssistant.get(i).getIdUti());
			phoneAssistantdto.setNbrTicketAjouter(allPhoneAssistant.get(i).getTicketAjouter().size());
			phoneAssistantdto.setNome(allPhoneAssistant.get(i).getLastNameUti());
			phoneAssistantdto.setPrenom(allPhoneAssistant.get(i).getFirstNameUti());
			phoneAssistantdto.setTelephone(allPhoneAssistant.get(i).getTelephoneUti());
			phoneAssistantdto.setAdresse(allPhoneAssistant.get(i).getAdresseUti());
			phoneAssistantdto.setEmail(allPhoneAssistant.get(i).getEmailUti());
			phoneAssistantdto.setPassword(allPhoneAssistant.get(i).getPasswordUti());
			phoneAssistantTable.add(phoneAssistantdto);
		}
		return phoneAssistantTable;
	}

	@Override
	public ResponseEntity<ResponseMessage> AjouterTechnicien(TechnicienForm technicienForm) {
		// TODO Auto-generated method stub
		Tichnicien technicien = new Tichnicien();
		technicien.setFirstNameUti(technicienForm.getPrenom());
		technicien.setLastNameUti(technicienForm.getNome());
		technicien.setAdresseUti(technicienForm.getAdresse());
		technicien.setTelephoneUti(technicienForm.getTelephone());
		technicien.setEmailUti(technicienForm.getEmail());
		technicien.setPasswordUti(technicienForm.getPassword());
		technicien.setTypeTech(typeRepo.findById(technicienForm.getIdtypetechnicien()).get());
		technicien.setDisponsibilite(false);
		technicien.setRole(roleRepo.findById((long) 2).get());
		technicienRepo.save(technicien);
		String message = "technicien ajouter avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> deleteTechnicien(Long technicienid) {
		// TODO Auto-generated method stub
		technicienRepo.deleteById(technicienid);
		String message = "Technicien supprimer avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public List<TechnicienTable> getallTechnicien() {
		// TODO Auto-generated method stub
		List<Tichnicien> allTechnicien = technicienRepo.findAll();
		List<TechnicienTable> technicienTable = new ArrayList();
		for (int i = 0; i < allTechnicien.size(); i++) {
			TechnicienTable techniciendto = new TechnicienTable();
			techniciendto.setId(allTechnicien.get(i).getIdUti());
			techniciendto.setNbrTicketAffeected(allTechnicien.get(i).getTicketaffecte().size());
			techniciendto.setNbrTicketResolved(allTechnicien.get(i).getTicketresolved().size());
			techniciendto.setNome(allTechnicien.get(i).getLastNameUti());
			techniciendto.setPrenom(allTechnicien.get(i).getFirstNameUti());
			techniciendto.setTypetech(allTechnicien.get(i).getTypeTech().getNameType());
			techniciendto.setAdresse(allTechnicien.get(i).getAdresseUti());
			techniciendto.setTelephone(allTechnicien.get(i).getTelephoneUti());
			techniciendto.setEmail(allTechnicien.get(i).getEmailUti());
			techniciendto.setPassword(allTechnicien.get(i).getPasswordUti());
			techniciendto.setIdtype(allTechnicien.get(i).getTypeTech().getIdType());
			technicienTable.add(techniciendto);
		}
		return technicienTable;
	}

	@Override
	public List<TechnicienByTypeTable> getallMaterialTechnicienDespo() {
		// TODO Auto-generated method stub
		List<Tichnicien> allTechnicien = technicienRepo.findTechnicienByType((long) 1);
		List<TechnicienByTypeTable> technicienTable = new ArrayList();
		for (int i = 0; i < allTechnicien.size(); i++) {
			TechnicienByTypeTable techniciendto = new TechnicienByTypeTable();
			techniciendto.setId(allTechnicien.get(i).getIdUti());
			techniciendto.setNbrTicketAffeected(allTechnicien.get(i).getTicketaffecte().size());
			techniciendto.setNbrTicketResolved(allTechnicien.get(i).getTicketresolved().size());
			techniciendto.setNome(allTechnicien.get(i).getLastNameUti());
			techniciendto.setPrenom(allTechnicien.get(i).getFirstNameUti());
			technicienTable.add(techniciendto);
		}
		return technicienTable;
	}

	@Override
	public List<TechnicienByTypeTable> getallLogicielTechnicienDespo() {
		// TODO Auto-generated method stub
		List<Tichnicien> allTechnicien = technicienRepo.findTechnicienByType((long) 2);
		List<TechnicienByTypeTable> technicienTable = new ArrayList();
		for (int i = 0; i < allTechnicien.size(); i++) {
			TechnicienByTypeTable techniciendto = new TechnicienByTypeTable();
			techniciendto.setId(allTechnicien.get(i).getIdUti());
			techniciendto.setNbrTicketAffeected(allTechnicien.get(i).getTicketaffecte().size());
			techniciendto.setNbrTicketResolved(allTechnicien.get(i).getTicketresolved().size());
			techniciendto.setNome(allTechnicien.get(i).getLastNameUti());
			techniciendto.setPrenom(allTechnicien.get(i).getFirstNameUti());
			technicienTable.add(techniciendto);
		}
		return technicienTable;
	}

	@Override
	public DashbordsDto getaDashboards() {
		// TODO Auto-generated method stub
		DashbordsDto dashboard = new DashbordsDto();
		for (int i = 1; i < 13; i++) {
			Integer nmbrTickets = ticketRepo.countTicketsByMonthAndType(i, (long) 2);
			if (nmbrTickets != 0) {
				dashboard.getLogiciel().add(nmbrTickets);
			} else {
				dashboard.getLogiciel().add(null);
			}
		}
		for (int i = 1; i < 13; i++) {
			Integer nmbrTickets = ticketRepo.countTicketsByMonthAndType(i, (long) 1);
			if (nmbrTickets != 0) {
				dashboard.getMateriel().add(nmbrTickets);
			} else {
				dashboard.getMateriel().add(null);
			}
		}

		return dashboard;
	}

	@Override
	public Long authentification(Authentification authentification) {
		// TODO Auto-generated method stub
		Utilisateurs user = utilisateurRepo.findByEmailUtilisateur(authentification.getMail());
		if (user != null) {
			if (user.getPasswordUti().equals(authentification.getPasswordd())) {
				return user.getRole().getIdRole();
			} else {
				return (long) 0;
			}
		} else {
			return (long) 0;
		}

	}

	@Override
	public ResponseEntity<ResponseMessage> AjouterTicketsup(TicketForm ticketForm) {
		// TODO Auto-generated method stub
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

		Superviseur superviseur = superviseurRepo.findById(ticketForm.getIdPhoneAssistant()).get();
		superviseur.getTicketAjouter().add(ticket);
		superviseurRepo.saveAndFlush(superviseur);

		String message = "ticket ajouter avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> AffecterTicketsup(AffecterTicket affecterTicket) {
		// TODO Auto-generated method stub
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

		Superviseur superviseur = superviseurRepo.findById(affecterTicket.getIdPhoneAssistant()).get();
		superviseur.getTicketAjouter().add(ticket);
		superviseurRepo.saveAndFlush(superviseur);

		Tichnicien technicien = technicienRepo.findById(affecterTicket.getIdTechnicien()).get();
		technicien.getTicketaffecte().add(ticket);
		technicienRepo.saveAndFlush(technicien);
		String message = "ticket affected au technicien " + technicien.getLastNameUti() + " avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public List<ModifierTicketForm> getallMyTicket(Long supid) {
		// TODO Auto-generated method stub
		Superviseur phoneAssistant = superviseurRepo.findById(supid).get();
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
	public ResponseEntity<ResponseMessage> ModifierAssistant(ModieifierAssistant modieifierAssistant) {
		// TODO Auto-generated method stub
		PhoneAssistant assistant = phoneAssistantRepo.findById(modieifierAssistant.getIdassis()).get();
		assistant.setFirstNameUti(modieifierAssistant.getFirstname());
		assistant.setLastNameUti(modieifierAssistant.getLastname());
		assistant.setEmailUti(modieifierAssistant.getEmail());
		assistant.setPasswordUti(modieifierAssistant.getPassword());
		assistant.setTelephoneUti(modieifierAssistant.getTelephone());
		assistant.setAdresseUti(modieifierAssistant.getAdresse());
		phoneAssistantRepo.saveAndFlush(assistant);
		String message = "assistant modifier avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

	@Override
	public ResponseEntity<ResponseMessage> ModifierTechnicien(ModifierTechnicien modifierTechnicien) {
		// TODO Auto-generated method stub
		Tichnicien tech = technicienRepo.findById(modifierTechnicien.getIdtech()).get();
		tech.setFirstNameUti(modifierTechnicien.getFirstname());
		tech.setLastNameUti(modifierTechnicien.getLastname());
		tech.setEmailUti(modifierTechnicien.getEmail());
		tech.setPasswordUti(modifierTechnicien.getPassword());
		tech.setTelephoneUti(modifierTechnicien.getTelephone());
		tech.setAdresseUti(modifierTechnicien.getAdresse());
		tech.setTypeTech(typeRepo.findById(modifierTechnicien.getTypeid()).get());
		technicienRepo.saveAndFlush(tech);
		String message = "technicien modifier avec succes ";
		ResponseMessage responseMessage = new ResponseMessage(message);
		return ResponseEntity.ok(responseMessage);
	}

}

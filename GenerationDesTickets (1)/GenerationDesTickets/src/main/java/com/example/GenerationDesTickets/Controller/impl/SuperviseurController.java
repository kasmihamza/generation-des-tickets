package com.example.GenerationDesTickets.Controller.impl;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.example.GenerationDesTickets.Controller.api.SuperviseurApi;
import com.example.GenerationDesTickets.Models.PhoneAssistant;
import com.example.GenerationDesTickets.Models.Superviseur;
import com.example.GenerationDesTickets.Models.Tichnicien;
import com.example.GenerationDesTickets.Reposetory.PhoneAssistantRepo;
import com.example.GenerationDesTickets.Reposetory.RoleRepo;
import com.example.GenerationDesTickets.Reposetory.SuperviseurRepo;
import com.example.GenerationDesTickets.Reposetory.TechnicienRepo;
import com.example.GenerationDesTickets.Reposetory.TicketRepo;
import com.example.GenerationDesTickets.Reposetory.TypeRepo;
import com.example.GenerationDesTickets.dto.DashbordsDto;
import com.example.GenerationDesTickets.dto.PhoneAssistantTable;
import com.example.GenerationDesTickets.dto.TechnicienByTypeTable;
import com.example.GenerationDesTickets.dto.TechnicienTable;
import com.example.GenerationDesTickets.utils.PhoneAssistantForm;
import com.example.GenerationDesTickets.utils.ResponseMessage;
import com.example.GenerationDesTickets.utils.TechnicienForm;

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
	private final RoleRepo roleRepo;
	@Autowired
	private final TypeRepo typeRepo;

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

}

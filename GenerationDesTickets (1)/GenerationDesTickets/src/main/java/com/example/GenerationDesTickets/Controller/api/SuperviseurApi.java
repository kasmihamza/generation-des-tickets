package com.example.GenerationDesTickets.Controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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

@CrossOrigin(origins = "http://localhost:4200")
public interface SuperviseurApi {
	@PostMapping(value = "generationDesTickets/Superviseur/phoneassistant/ajouter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterPhoneAssistant(@RequestBody PhoneAssistantForm phoneAssistantForm);

	@PostMapping(value = "generationDesTickets/Superviseur/ajoutersuperviseur", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterSuperviseur(@RequestBody PhoneAssistantForm phoneAssistantForm);

	@DeleteMapping(value = "generationDesTickets/Superviseur/phoneassistant/supprimer/{idassistant}", produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> deleteAssistant(@PathVariable("idassistant") Long assistantid);

	@GetMapping(value = "generationDesTickets/Superviseur/allassistant", produces = MediaType.APPLICATION_JSON_VALUE)
	List<PhoneAssistantTable> getallAssistant();

	@PostMapping(value = "generationDesTickets/Superviseur/technicien/ajouter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterTechnicien(@RequestBody TechnicienForm technicienForm);

	@DeleteMapping(value = "generationDesTickets/Superviseur/technicien/supprimer/{idtechnicien}", produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> deleteTechnicien(@PathVariable("idtechnicien") Long technicienid);

	@GetMapping(value = "generationDesTickets/Superviseur/alltechnicien", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TechnicienTable> getallTechnicien();

	@GetMapping(value = "generationDesTickets/Superviseur/allmaterialtechniciendespo", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TechnicienByTypeTable> getallMaterialTechnicienDespo();

	@GetMapping(value = "generationDesTickets/Superviseur/alllogicieltechniciendespo", produces = MediaType.APPLICATION_JSON_VALUE)
	List<TechnicienByTypeTable> getallLogicielTechnicienDespo();

	@GetMapping(value = "generationDesTickets/Superviseur/dashboards", produces = MediaType.APPLICATION_JSON_VALUE)
	DashbordsDto getaDashboards();

	@PostMapping(value = "generationDesTickets/authentification", produces = MediaType.APPLICATION_JSON_VALUE)
	Long authentification(@RequestBody Authentification authentification);

	@PostMapping(value = "generationDesTickets/superviseur/ticket/ajouter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterTicketsup(@RequestBody TicketForm ticketForm);

	@PostMapping(value = "generationDesTickets/superviseur/ticket/affecter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AffecterTicketsup(@RequestBody AffecterTicket affecterTicket);

	@GetMapping(value = "generationDesTickets/superviseur/allaMytickets/{idsup}", produces = MediaType.APPLICATION_JSON_VALUE)
	List<ModifierTicketForm> getallMyTicket(@PathVariable("idsup") Long supid);

	@PostMapping(value = "generationDesTickets/superviseur/assistant/modifier", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> ModifierAssistant(@RequestBody ModieifierAssistant modieifierAssistant);

	@PostMapping(value = "generationDesTickets/superviseur/technicien/modifier", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> ModifierTechnicien(@RequestBody ModifierTechnicien modifierTechnicien);
}

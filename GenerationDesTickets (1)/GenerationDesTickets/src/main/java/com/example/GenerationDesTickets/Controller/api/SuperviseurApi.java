package com.example.GenerationDesTickets.Controller.api;

import java.util.List;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.example.GenerationDesTickets.dto.PhoneAssistantTable;
import com.example.GenerationDesTickets.dto.TechnicienByTypeTable;
import com.example.GenerationDesTickets.dto.TechnicienTable;
import com.example.GenerationDesTickets.utils.PhoneAssistantForm;
import com.example.GenerationDesTickets.utils.ResponseMessage;
import com.example.GenerationDesTickets.utils.TechnicienForm;

public interface SuperviseurApi {
	@PostMapping(value = "generationDesTickets/Superviseur/phoneassistant/ajouter", consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	ResponseEntity<ResponseMessage> AjouterPhoneAssistant(@RequestBody PhoneAssistantForm phoneAssistantForm);

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

}

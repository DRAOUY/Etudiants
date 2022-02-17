package com.demo.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.demo.Repository.EtudiantRepository;
import com.demo.entitie.Etudiant;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EtudiantService {
	@Autowired
	EtudiantRepository etudiantRepository;
	
	@PostMapping("/ajouterEtudiant")
	public ResponseEntity<Etudiant> addEtudiant(@RequestParam("nom") String nom,
			@RequestParam("prenom") String prenom) 
	{

		etudiantRepository.save(new Etudiant(nom,prenom));
		
		return new ResponseEntity<>(HttpStatus.OK);
		

	}
	
	@GetMapping("/etudiants")
	public List<Etudiant> getAllEtudiant() {

		return etudiantRepository.findAll();
	}
	
	@DeleteMapping("/etudiants/{id}")
	public void deleteEtudiant(@PathVariable Long id) {

		etudiantRepository.deleteById(id);

	}
	
	@PutMapping("/modifie/{id}")
	public Etudiant updateEtudian(@RequestParam("id")Long id ,@RequestBody Etudiant etudiant) {
		Etudiant et = etudiantRepository.findById(id).get();
		et.setNom(etudiant.getNom());
		et.setPrenom(etudiant.getPrenom());
		return etudiantRepository.save(null);
		
	}
	
	
	

}

package com.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.demo.entitie.Etudiant;



public interface EtudiantRepository extends JpaRepository<Etudiant, Long> {
	
	
	

}

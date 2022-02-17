

import { Component, OnInit } from '@angular/core';
import { Etudiant } from '../etudiant';
import { EtudiantServiceService } from '../etudiant-service.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {

  etudiants: Etudiant[];
  id : number;
  constructor(private etudiantServiceService: EtudiantServiceService) {
  }

  ngOnInit() {
    this.etudiantServiceService.findAll().subscribe(data => {
      this.etudiants = data;
    });
  }

  delete(id: String) {
    this.etudiantServiceService.delete(id).subscribe(
      data => {
        console.log('deleted response', data);
        alert('deleted');
        this.ngOnInit();
      }
    )
  }
  
}

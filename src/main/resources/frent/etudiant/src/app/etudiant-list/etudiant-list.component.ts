// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-etudiant-list',
//   templateUrl: './etudiant-list.component.html',
//   styleUrls: ['./etudiant-list.component.css']
// })
// export class EtudiantListComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

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

  constructor(private etudiantServiceService: EtudiantServiceService) {
  }

  ngOnInit() {
    this.etudiantServiceService.findAll().subscribe(data => {
      this.etudiants = data;
    });
  }
}

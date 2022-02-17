// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-etudiant-form',
//   templateUrl: './etudiant-form.component.html',
//   styleUrls: ['./etudiant-form.component.css']
// })
// export class etudiantFormComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EtudiantServiceService } from '../etudiant-service.service';
import { Etudiant } from '../etudiant';

@Component({
  selector: 'app-etudiant-form',
  templateUrl: './etudiant-form.component.html',
  styleUrls: ['./etudiant-form.component.css']
})
export class etudiantFormComponent {

  etudiant: Etudiant;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private etudiantService: EtudiantServiceService) {
    this.etudiant = new Etudiant();
  }

  onSubmit() {
    this.etudiantService.save(this.etudiant).subscribe(result => this.gotoetudiantList());
  }

  gotoetudiantList() {
    this.router.navigate(['/etudiants']);
  }
}

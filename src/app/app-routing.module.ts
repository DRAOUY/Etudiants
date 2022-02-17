
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantListComponent} from './etudiant-list/etudiant-list.component';
import { etudiantFormComponent } from './etudiant-form/etudiant-form.component';

const routes: Routes = [
  { path: 'etudiants', component: EtudiantListComponent },
  { path: 'ajouterEtudiant', component: etudiantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

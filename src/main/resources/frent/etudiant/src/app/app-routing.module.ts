// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EtudiantListComponent} from './etudiant-list/etudiant-list.component';
import { etudiantFormComponent } from './etudiant-form/etudiant-form.component';

const routes: Routes = [
  { path: 'etudiant', component: EtudiantListComponent },
  { path: 'addetudiant', component: etudiantFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

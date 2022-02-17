// import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
// import { AppComponent } from './app.component';
// import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
// import { etudiantFormComponent } from './etudiant-form/etudiant-form.component';

// @NgModule({
//   declarations: [
//     AppComponent,
//     EtudiantListComponent,
//     etudiantFormComponent
//   ],
//   imports: [
//     BrowserModule,
//     AppRoutingModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { EtudiantListComponent } from './etudiant-list/etudiant-list.component';
import { etudiantFormComponent } from './etudiant-form/etudiant-form.component';
import { EtudiantServiceService } from './etudiant-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EtudiantListComponent,
    etudiantFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EtudiantServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

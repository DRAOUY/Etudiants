// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class EtudiantServiceService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Etudiant } from './etudiant';
import { Observable } from 'rxjs';

@Injectable()
export class EtudiantServiceService {

  private etudiantsUrl: string;
  constructor(private http: HttpClient) {
    this.etudiantsUrl = 'http://localhost:8080/etudiants';
  }

  public findAll(): Observable<Etudiant[]> {
    return this.http.get<Etudiant[]>(this.etudiantsUrl);
  }

  public save(etudiant: Etudiant) {
    return this.http.post<Etudiant>(this.etudiantsUrl, etudiant);
  }
  public delet(etudiant: Etudiant) {
    return this.http.post<Etudiant>(this.etudiantsUrl, etudiant);
  }
  public updat(etudiant: Etudiant) {
    return this.http.post<Etudiant>(this.etudiantsUrl, etudiant);
  }
}

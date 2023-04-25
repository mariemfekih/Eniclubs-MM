import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Club } from '../Club';


@Injectable({ providedIn: 'root'})

export class ClubService {
  private apiServerUrl = environment.apiBaseUrl;

  private url = "http://localhost:8081/";

  constructor(private http: HttpClient) { }

  // Add Club - Create
  addclub(club: Club){
    return this.http.post<Club>(`${this.url}add`, club)
  }

  // Get Clubs - Read
  getClubs(): Observable<any[]>{
    return this.http.get<any[]>(this.url+'clubs')
  }

  // Get Club by Id - Read
  getClubById(id: number): Observable<Club>{
    return this.http.get<Club>(`${this.url}club/${id}`)
  }

  // Update Club - Update
  updateClub(id?: number ,club?: any): Observable<any>{
    return this.http.put<any>(`${this.url}update/${id}`, club)
  }

  // Delete Club - Delete
  deleteClub(id: number): Observable<any>{
    return this.http.delete<any>(`${this.url}delete/${id}`)
  }
}

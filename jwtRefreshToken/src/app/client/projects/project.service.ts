import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Project } from './models/project';

const BASE_URL = 'https://localhost:5000/api/project';
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

@Injectable({
    providedIn: 'root'
})
export class ProjectService{

    constructor(private http: HttpClient){}

    getProjects() : Observable<Project[]>{
        return this.http.get<Project[]>(BASE_URL);
    }
    
}
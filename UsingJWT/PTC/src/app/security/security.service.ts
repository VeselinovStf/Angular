import { Injectable } from '@angular/core';

import { AppUserAuth } from './app-user-auth';
import { AppUser } from './app-user';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

const API_URL = "http://localhost:5000/api/Security/";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  securityObject: AppUserAuth = new AppUserAuth();
 

  constructor(private http: HttpClient) { }

  login(entity: AppUser): Observable<AppUserAuth> {
    // Initialize security object
    this.resetSecurityObject();
  
    return this.http.post<AppUserAuth>(API_URL + "Login",
      entity, httpOptions).pipe(
        tap(resp => {
          Object.assign(this.securityObject, resp);

          localStorage.setItem("bearerToken",
            this.securityObject.bearerToken)
        })
    );
  
    return of<AppUserAuth>(this.securityObject);
  }
  
  logout(): void {
    this.resetSecurityObject();
  }
  
  resetSecurityObject(): void {
    this.securityObject.userName = "";
    this.securityObject.bearerToken = "";
    this.securityObject.isAuthenticated = false;
  
    this.securityObject.canAccessProducts = false;
    this.securityObject.canAddProduct = false;
    this.securityObject.canSaveProduct = false;
    this.securityObject.canAccessCategories = false;
    this.securityObject.canAddCategory = false;
  
    localStorage.removeItem("bearerToken");
  }
}
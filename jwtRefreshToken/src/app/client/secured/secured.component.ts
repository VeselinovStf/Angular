import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/security/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-secured',
  templateUrl: './secured.component.html',
  styleUrls: ['./secured.component.css']
})
export class SecuredComponent  {

 
  

  constructor(private authService: AuthService, private router: Router) {}

 

  logout() {
    this.authService.logout()
      .subscribe(success => {
        if (success) {
          this.router.navigate(['/login']);
        }
      });
  }
}

import { Component, OnInit } from '@angular/core';
import { AppUser } from './app-user';
import { AppUserAuth } from './app-user-auth';
import { SecurityService } from './security.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ptc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  routerUrl: string;
  
  constructor(private securityService: SecurityService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.routerUrl = this.route.snapshot.queryParamMap.get('returnUrl')
  }

  login() {
    this.securityService.login(this.user)
      .subscribe(
        resp => { 
          this.securityObject = resp; 
        
        if(this.routerUrl){
          this.router.navigateByUrl(this.routerUrl)
      }   
      },() => {
        this.securityObject = new AppUserAuth();
      });
    }   
}
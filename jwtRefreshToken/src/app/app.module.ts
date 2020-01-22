import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from './security/interceptors/token.interceptor';
import { LoginComponent } from './account/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SecuredComponent } from './client/secured/secured.component';
import { ClientProjectComponent } from './client/projects/client-project.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SecuredComponent,
    ClientProjectComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

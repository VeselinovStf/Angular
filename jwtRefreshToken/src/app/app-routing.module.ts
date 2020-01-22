import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './security/guards/auth.guard';
import { LoginComponent } from './account/login/login.component';
import { RandomGuard } from './security/guards/random.guard';
import { SecuredComponent } from './client/secured/secured.component';
import { ClientProjectComponent } from './client/projects/client-project.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/login' },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projects',
    component: ClientProjectComponent,
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  },
  {
    path: 'secured',
    component: SecuredComponent,
    canActivate: [RandomGuard],
    canLoad: [RandomGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

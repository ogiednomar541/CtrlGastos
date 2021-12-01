import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddgastosComponent } from './gastos/addgastos/addgastos.component';
import { GruposComponent } from './grupos/grupos.component';
import { LoginComponent } from './login/login.component';
import { PrincipalComponent } from './principal/principal.component';
import { SignupComponent } from './signup/signup.component';
import { TucuentaComponent } from './tucuenta/tucuenta.component'
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: 'principal', component: PrincipalComponent},
  {path: 'tucuenta', component: TucuentaComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'gastos/addgastos', component: AddgastosComponent},
  {path: 'grupos', component: GruposComponent},
  {path: '', pathMatch: 'full', redirectTo:'principal'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

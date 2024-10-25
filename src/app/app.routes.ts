import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login/login.component';
import { provideRouter } from '@angular/router';

export const routes: Routes = [
    {path: 'login', component: LoginComponent},
];

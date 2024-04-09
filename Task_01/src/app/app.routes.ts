import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { DescribesComponent } from './describes/describes.component';
import { LandingComponent } from './landing/landing.component';

export const routes: Routes = [
    {path: '', component: RegisterComponent},
    {path:'profile', component: ProfileComponent},
    {path: 'profile-details', component: DescribesComponent},
    {path: 'landing', component:LandingComponent}
];

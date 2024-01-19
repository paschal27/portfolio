import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
import { ProjectComponent } from './project/project.component';
import { ContactsComponent } from './contacts/contacts.component';

const routes: Routes = [
  {path: 'home',component: HomeComponent, pathMatch: 'full'},
  {path: 'experience', component: ExperienceComponent, pathMatch: 'full'},
  {path: 'projects', component: ProjectComponent, pathMatch: 'full'},
  {path: 'contacts', component: ContactsComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

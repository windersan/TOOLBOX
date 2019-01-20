import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListApplicantsComponent } from './applicants/list-applicants.component';
import { LoginComponent } from './login.component';
import { CreateApplicantComponent } from './applicants/create-applicant.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UploaderComponent } from './uploader/uploader.component';
import { ApplicantComponent } from './applicants/applicant/applicant.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';

const appRoutes: Routes = [
  { path: 'list', component: ListApplicantsComponent },
  { path: 'login', component: LoginComponent,  data: {animation: 'P1'}},
  { path: 'newuser', component: CreateUserComponent, data: {animation: 'P2'}},
  { path: 'newapplicant/:id', component: CreateApplicantComponent},
  { path: 'upload/:id', component: UploaderComponent},
  { path: 'applicant/:id', component: ApplicantComponent},
    { path: 'comp1', component: Comp1Component },
   { path: 'comp2', component: Comp2Component },
  ///{ path: 'resume/:id', component: ResumeComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

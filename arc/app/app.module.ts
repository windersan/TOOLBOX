import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { ApplicationService } from "./applicants/application.service";
import { ListApplicantsComponent } from "./applicants/list-applicants.component";
import { AppRoutingModule } from "./app-routing.module";
import { CreateApplicantComponent } from "./applicants/create-applicant.component";
import { LoginComponent } from "./login.component";
import { UploaderComponent } from "./uploader/uploader.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { ApplicantComponent } from "./applicants/applicant/applicant.component";
import { JobFilterPipe } from "src/app/models/job-filter.pipe";
import { StatusFilterPipe } from "src/app/models/status-filter.pipe";
import { TestOneComponent } from "./test-one.component";
import { Comp1Component } from "./comp1/comp1.component";
import { Comp2Component } from "./comp2/comp2.component";

import { CdkTableModule } from "@angular/cdk/table";
import { HttpModule } from "@angular/http";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { ScrollingModule } from "@angular/cdk/scrolling";

@NgModule({
  declarations: [
    AppComponent,
    ListApplicantsComponent,
    CreateApplicantComponent,
    LoginComponent,
    UploaderComponent,
    CreateUserComponent,
    ApplicantComponent,
    JobFilterPipe,
    StatusFilterPipe,
    TestOneComponent,
    Comp1Component,
    Comp2Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ScrollingModule,
    MatDatepickerModule,
    MatInputModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatListModule,
    MatRadioModule
  ],
  providers: [ApplicationService],
  bootstrap: [AppComponent]
})
export class AppModule {}

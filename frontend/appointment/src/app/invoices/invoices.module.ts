import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoiceListingComponent } from './components/invoice-listing/invoice-listing.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../angular-materials/angular-material.module';
import { ClientsComponent } from './components/clients/clients.component';
import { HttpClientModule } from '@angular/common/http';
import { InvoiceService } from './invoice.service';
import { InvoiceFormComponent } from './components/invoice-form/invoice-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UpdatePatientComponent } from './components/update-patient/update-patient.component';



@NgModule({
  declarations: [
    InvoiceListingComponent,
    ClientsComponent,
    InvoiceFormComponent,
    RegisterComponent,
    LoginComponent,
    RegisterUserComponent,
    UpdatePatientComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  exports:[
    InvoiceListingComponent,
    ClientsComponent,
    InvoiceFormComponent,
    RegisterComponent,
    LoginComponent,
    RegisterUserComponent,
    UpdatePatientComponent
  ],
  providers:[InvoiceService]
})
export class InvoicesModule { }

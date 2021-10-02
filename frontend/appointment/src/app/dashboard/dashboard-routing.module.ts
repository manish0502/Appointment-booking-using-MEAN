import { InvoiceFormComponent } from './../invoices/components/invoice-form/invoice-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from '../invoices/components/clients/clients.component';
import { InvoiceListingComponent } from '../invoices/components/invoice-listing/invoice-listing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { Invoice } from '../invoices/models/invoice';
import { RegisterComponent } from '../invoices/auth/register/register.component';
import { LoginComponent } from '../invoices/auth/login/login.component';
import { RegisterUserComponent} from '../invoices/components/register-user/register-user.component';

const routes: Routes = [

  
  {
    path:'',
    component:InvoiceComponent,
    children: [
      {
        path:'appointment',
        component:InvoiceListingComponent,
      },
      {
        path:'clients',
        component:ClientsComponent
      },
      {
        path:'appointment/new',
        component:InvoiceFormComponent
      },
      {
        path:'appointment/:id',
        component:InvoiceFormComponent
      },
      {
        path:"register",
        component:RegisterComponent
      },
      {
        path:'login',
        component:LoginComponent
      },
      {
        path:'newuser',
        component:RegisterUserComponent
      },
      {
        path:'**',
        redirectTo:'appointment'
      }

      

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

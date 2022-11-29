import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from './Masters/itemlist/itemlist.component';
import { LayoutComponent } from './layout/layout.component';
import { OutletComponent } from './Masters/outlet/outlet.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AddEditoutletComponent } from './Masters/outlet/addedit-outlet/addedit-outlet.component';
import { AddItemlistComponent } from './Masters/itemlist/add-item/add-item.component';
import { ViewItemlistComponent } from './Masters/itemlist/view-item/view-item.component';
import { BillingdetailsComponent } from './Transaction/billingdetails/billingdetails.component';
import { CompanyDetailsComponent } from './Masters/company-details/company-details.component';
import { AddeditCompanyComponent } from './Masters/company-details/addedit-company/addedit-company.component';
import { HolidayComponent } from './Masters/holiday/holiday.component';
import { AddeditHolidayComponent } from './Masters/holiday/addedit-holiday/addedit-holiday.component';
import { GroupListComponent } from './Masters/group/group-list.component';
import { AddeditGroupComponent } from './Masters/group/addedit-group/addedit-group.component';
import { ClientinformationComponent } from './Masters/clientinformation/clientinformation.component';
import { AddeditClientComponent } from './Masters/clientinformation/addedit-client/addedit-client.component';
import { HsnListComponent } from './Masters/hsn/hsn-list.component';
import { AddeditHsnComponent } from './Masters/hsn/addedit-hsn/addedit-hsn.component';
import { SupplierComponent } from './Masters/supplier/supplier.component';
import { AddeditSupplierComponent } from './Masters/supplier/addedit-supplier/addedit-supplier.component';
import { StaffinformationComponent } from './Masters/staffinformation/staffinformation.component';
import { AddeditStaffComponent } from './Masters/staffinformation/addedit-staff/addedit-staff.component';
// import { PricepageComponent } from './Transaction/billingdetails/pricepage/pricepage.component';
import { PricepageComponent } from './Transaction/billingdetails/pricepage/pricepage.component';
import { MasterComponent } from './Masters/master/master.component';

const routes: Routes = [
  { path:'' , component: LoginComponent },
  { path:'layout' , component: LayoutComponent },
  { path:'outlet' , component: OutletComponent },
  { path:'itemlist' , component: ItemlistComponent },
  { path:'home' , component: HomeComponent },
  { path:'addeditoutlet/:id' , component: AddEditoutletComponent },
  { path:'edititem/:id' , component: AddItemlistComponent },
  { path:'additem' , component: AddItemlistComponent },
  { path:'viewitem/:id' , component: ViewItemlistComponent },
  { path:'addeditoutlet' , component: AddEditoutletComponent },
  { path:'billingdetails' , component: BillingdetailsComponent },
  {path:'login',component:LoginComponent} ,
  {path:'signup',component:RegisterComponent},
  {path:'pricepage',component:PricepageComponent},

     //for Comapny
  { path:'company' , component: CompanyDetailsComponent },
  { path:'addeditcompany' , component: AddeditCompanyComponent },
  { path:'addeditcompany/:id' , component: AddeditCompanyComponent },

    //forholiday
  {path:'holiday', component:HolidayComponent},
  {path:'addholiday',component:AddeditHolidayComponent},
  {path:'addholiday/:id',component:AddeditHolidayComponent},
 
    //for group
  {path:'group',component:GroupListComponent},
  {path:'addgroup',component:AddeditGroupComponent},
  {path:'addgroup/:id',component:AddeditGroupComponent},

  //for clientinformation
  {path:'client',component:ClientinformationComponent},
  {path:'addclient',component:AddeditClientComponent},
  {path:'addclient/:id',component:AddeditClientComponent},
  {path:'addgroup/:id',component:AddeditGroupComponent},

  //for HSN
  {path:'hsn',component:HsnListComponent},
  {path:'addhsn',component:AddeditHsnComponent},
  {path:'addhsn/:id',component:AddeditHsnComponent}, 
  
  //for Supplier
 {path:'supplier',component:SupplierComponent},
 {path:'addeditsupplier',component:AddeditSupplierComponent},
 {path:'addeditsupplier/:id',component:AddeditSupplierComponent},

  {path:'addhsn/:id',component:AddeditHsnComponent},

  //for Staff
  {path:'staff',component:StaffinformationComponent},
  {path:'addstaff',component:AddeditStaffComponent},
  {path:'addstaff/:id',component:AddeditStaffComponent},

  //for Masters
  {path:'brand',component:MasterComponent},
  {path:'addbrand',component:MasterComponent},
  { path:'addbrand/:id' , component: MasterComponent },

  {path:'unit',component:MasterComponent,},
  {path:'addunit',component:MasterComponent},
  {path:'addunit/:id',component:MasterComponent},
  
  {path:'designation', component:MasterComponent},
  {path:'adddesignation',component:MasterComponent},
  {path:'adddesignation/:id',component:MasterComponent},

  {path:'department',component:MasterComponent },
  {path:'adddepartment',component:MasterComponent },
  { path:'adddepartment/:id' , component:MasterComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

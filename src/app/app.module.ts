import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import {MatToolbarModule} from '@angular/material/toolbar';
// import {MatSidenavModule} from '@angular/material/sidenav';
// import {MatIconModule} from '@angular/material/icon';
// import {MatListModule} from '@angular/material/list';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
// Material Navigation
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
// Material Layout
import { MatCardModule } from '@angular/material/card';
// import { MatDividerModule } from '@angular/material/divider';
// import { MatExpansionModule } from '@angular/material/expansion';
// import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatStepperModule } from '@angular/material/stepper';
// import { MatTabsModule } from '@angular/material/tabs';
// import { MatTreeModule } from '@angular/material/tree';
// Material Buttons & Indicators
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
// import { MatBadgeModule } from '@angular/material/badge';
// import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatProgressBarModule } from '@angular/material/progress-bar';
// import { MatRippleModule } from '@angular/material/core';
// Material Popups & Modals
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
// import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
// Material Data tables
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { OutletComponent } from './Masters/outlet/outlet.component';
import { ItemlistComponent } from './Masters/itemlist/itemlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule,AbstractControl, FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AddEditoutletComponent } from './Masters/outlet/addedit-outlet/addedit-outlet.component';

import { AddItemlistComponent } from './Masters/itemlist/add-item/add-item.component';
import { ViewItemlistComponent } from './Masters/itemlist/view-item/view-item.component';
import { BillingdetailsComponent } from './Transaction/billingdetails/billingdetails.component';
import { CompanyDetailsComponent } from './Masters/company-details/company-details.component';
import { AddeditCompanyComponent } from './Masters/company-details/addedit-company/addedit-company.component';
import { GroupListComponent } from './Masters/group/group-list.component';
import { AddeditGroupComponent } from './Masters/group/addedit-group/addedit-group.component';
import { AddeditHolidayComponent } from './Masters/holiday/addedit-holiday/addedit-holiday.component';
import { HolidayComponent } from './Masters/holiday/holiday.component';
import { ClientinformationComponent } from './Masters/clientinformation/clientinformation.component';
import { AddeditClientComponent } from './Masters/clientinformation/addedit-client/addedit-client.component';
import { HsnListComponent } from './Masters/hsn/hsn-list.component';
import { AddeditHsnComponent } from './Masters/hsn/addedit-hsn/addedit-hsn.component';
import { CdkColumnDef } from '@angular/cdk/table';
import { SupplierComponent } from './Masters/supplier/supplier.component';
import { AddeditSupplierComponent } from './Masters/supplier/addedit-supplier/addedit-supplier.component';
import { StaffinformationComponent } from './Masters/staffinformation/staffinformation.component';
import { AddeditStaffComponent } from './Masters/staffinformation/addedit-staff/addedit-staff.component';
import { PricepageComponent } from './Transaction/billingdetails/pricepage/pricepage.component';
import { MasterComponent } from './Masters/master/master.component';


@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    OutletComponent,
    ItemlistComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AddEditoutletComponent,
    AddItemlistComponent,
    ViewItemlistComponent,
    BillingdetailsComponent,
    AddeditHolidayComponent,
    CompanyDetailsComponent,
    AddeditCompanyComponent,   
    HolidayComponent,
    GroupListComponent,
    AddeditGroupComponent,
    ClientinformationComponent,
    AddeditClientComponent,
    AddeditGroupComponent,
    HsnListComponent,
    
    SupplierComponent,
    AddeditSupplierComponent,
    AddeditHsnComponent,
    StaffinformationComponent,
    AddeditStaffComponent,
    PricepageComponent,
    MasterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatListModule,
    MatStepperModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatCheckboxModule,
    MatListModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatTableModule,
    MatDialogModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [CdkColumnDef],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
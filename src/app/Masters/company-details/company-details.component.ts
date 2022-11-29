import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { HoneybillService } from 'src/app/services/honeybill.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
  companys!: Company[];
  loading: boolean = false;
  companydata: Company[] = [];
  company: Company = {
    id: '',
    businessname: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    email: '',
    phone: '',
    panno: '',
    gstin: '',
    taxationmethod: '',
    companylogo: '',
    active: false,
  };
  lists: any;
  getCompanyid: any;
  constructor(private honeybillService: HoneybillService,private router: Router,) { }

  ngOnInit(): void {
    
    this.getcompanylists()
  }
   //----------------------------Modal------------------------------------
  Passidfromdeletemodal = (data: any) => {
    this.getCompanyid = Object.assign(data);
    console.log(this.getCompanyid);
  }
  NewCompany() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {
      skipLocationChange: true,
      replaceUrl: true
    }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  //----------------------------Delete the particular details-----------------
  deletecompanylists(id: string): void {
    try {
      this.honeybillService.deleteCompany(this.getCompanyid)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
      this.NewCompany();
    } catch (e) {
    } 
  }
  getcompanylists() {
    try {
      this.loading = true;
      setTimeout(async () => {
        (await this.honeybillService.getCompany()).subscribe((company: Company[]) => {
          this. companydata= [];
          this.companydata = company;
          for (let ctr = 0; ctr < this.companydata.length; ctr++) {
            if (this.companydata[ctr].companylogo != null && this.companydata[ctr].companylogo != undefined ) {
              var bytes = this.companydata[ctr].companylogo; // get from server
              var u8 = new Uint8Array(bytes.data);
              this.companydata[ctr].companylogo = this.Uint8ToString(u8);
            }
          }
          console.log(this.companydata)
          this.loading = false;
        })
      }, 500);
    } catch (e) {
      throw e
    }
  }
  getCompanyId(id: string): void {
    this.honeybillService.getByCompanyId(id)
      .subscribe({
        next: (data) => {
          this.company = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  } 
  Uint8ToString(u8a: any) {
    var CHUNK_SZ = 0x8000;
    var c = [];
    for (var i = 0; i < u8a.length; i += CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)));
    }
    return c.join("");
  }
}

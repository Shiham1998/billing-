import { Component, OnInit } from '@angular/core';
import { Outlet } from 'src/app/models/outlet';
import { HoneybillService } from 'src/app/services/honeybill.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-outlet',
  templateUrl: './outlet.component.html',
  styleUrls: ['./outlet.component.css']
})
export class OutletComponent implements OnInit {
  searchitem!: FormGroup;
  outlets!: Outlet[];
  loading: boolean = false;
  outletdata: Outlet[] = [];
  outlet: Outlet = {
    id: '',
    outlet_name: '',
    outlet_gstin: '',
    outlet_telephone: '',
    outlet_address: '',
    outlet_city: '',
    outlet_pin: '',
    outlet_state: '',
    outlet_country: ''
  };
  list: any;
  getOutletid: any;
  searchitems: any;
  constructor(private honeybillService: HoneybillService, private router: Router) { }

  ngOnInit(): void {
    this.searchitems = new FormGroup({
      search_name: new FormControl(''),
    });
    this.getoutletlists()
  }
  Passidfromdeletemodal = (data: any) => {
    this.getOutletid = Object.assign(data);
    console.log(this.getOutletid);
  }
  NewOutlet() {
    let currentUrl = this.router.url;
    this.router.navigateByUrl('/', {
      skipLocationChange: true,
      replaceUrl: true
    }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  //  *****************************************   delete  particular outlet detail ***************************************
  deleteoutletlists(id: string): void {
    try {
      this.honeybillService.deleteOutlet(this.getOutletid)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
      this.NewOutlet();
    } catch (e) {
    }
  }
  getoutletlists() {
    try {
      this.loading = true;
      setTimeout(async () => {
        (await this.honeybillService.getOutlet()).subscribe((outlet: Outlet[]) => {
          this.outletdata = [];
          this.outletdata = outlet;
          console.log(this.outletdata)
          this.loading = false;
        })
      }, 500);
    } catch (e) {
      throw e
    }
  }
  getOutletId(id: string): void {
    this.honeybillService.getByOutletId(id)
      .subscribe({
        next: (data) => {
          this.outlet = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  searchName() {
    this.outletdata = this.outletdata.filter(x => (x.outlet_city) == this.searchitems.controls['search_name'].value)
  }
  lists() {
    if (this.searchitems.controls['search_name'].value.length == 0) {
      this.getoutletlists();
    }
  }
}

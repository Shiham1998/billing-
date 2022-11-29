import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { HoneybillService } from 'src/app/services/honeybill.service';
import {statedata} from 'src/assets/_outlet-json/state';
import {countrydata} from 'src/assets/_outlet-json/country';

@Component({
  selector: 'app-addedit-company',
  templateUrl: './addedit-company.component.html',
  styleUrls: ['./addedit-company.component.css']
})
export class AddeditCompanyComponent implements OnInit {

 // For Image Process
  selectedFiles?:FileList;
  currentFile?:File;
  messageimage='';
  preview='';
  image!:any;

  @Input() addMode = false;
  stateList!: any[];
  countryList!: any[];
  loading: boolean = false;
  message!: any;
  companydetails!: FormGroup;
  isLinear = false;
  companydata: Company[] = [];
  selectedMachines!: Company;
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
    active: false
  }; 
  constructor( private honeybillservice: HoneybillService, private router: Router,
    private route: ActivatedRoute,) { }
   
  ngOnInit(): void {
    this.stateList = statedata
    this.countryList = countrydata
    this.companydetails = new FormGroup({
      businessname: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      address: new FormControl('',[Validators.required, Validators.maxLength(20)]),
      city: new FormControl(''),
      state: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      pincode: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      country: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      email: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      phone: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      panno: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      gstin: new FormControl('', [Validators.required, Validators.maxLength(20)]),
      taxationmethod: new FormControl('', [Validators.required, Validators.maxLength(20)]),   
      companylogo:new FormControl(''),
    });
    this.getcompanylists();
    if (this.route.snapshot.params["id"] == null || this.route.snapshot.params["id"] == undefined ) {
      this.addMode = true;
    }
    if (!this.addMode) {
      this.getCompanyId(this.route.snapshot.params["id"]);
    }
  }
  //---------Number Press Event---------------------
  numberOnly(event:any): boolean {
    const charCode = event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;
  }
  //---------------Add new Data to database-----------------------------------
  savedata(): void {
    
      const data = {
        businessname: this.companydetails.controls['businessname'].value,
        address: this.companydetails.controls['address'].value,
        city: this.companydetails.controls['city'].value,
        state: this.companydetails.controls['state'].value,
        pincode: this.companydetails.controls['pincode'].value,
        country: this.companydetails.controls['country'].value,
        email: this.companydetails.controls['email'].value,
        phone: this.companydetails.controls['phone'].value,
        panno: this.companydetails.controls['panno'].value,
        gstin: this.companydetails.controls['gstin'].value,
        taxationmethod: this.companydetails.controls['taxationmethod'].value,
        active:true,
        companylogo:this.preview,
      }
      this.honeybillservice.createCompany(data)
        .subscribe({
          next: (res) => {
            console.log(res);
            this.addMode = true;
          },
          error: (e) => console.error(e)
        });
      alert(this.message = 'Data Saved successfully..!!')
      this.NewCompany();
    this.getcompanylists();
  }
  //---------------------Update the Data---------------------------
  updatecompanylist(): void {
        this.company.businessname = this.companydetails.controls['businessname'].value,
        this.company.address = this.companydetails.controls['address'].value,
        this.company.city = this.companydetails.controls['city'].value,
        this.company.state = this.companydetails.controls['state'].value,
        this.company.pincode = this.companydetails.controls['pincode'].value,
        this.company.country = this.companydetails.controls['country'].value,
        this.company.email = this.companydetails.controls['email'].value,
        this.company.phone = this.companydetails.controls['phone'].value,
        this.company.panno = this.companydetails.controls['panno'].value,
        this.company.gstin = this.companydetails.controls['gstin'].value,
        this.company.taxationmethod = this.companydetails.controls['taxationmethod'].value,
        this.company.companylogo=this.preview;
          this.honeybillservice.updateCompany(this.company.id, this.company)
            .subscribe({
              next: (res) => {
                console.log(res);
                this.addMode = false;
              },
              error: (e) => console.error(e)
            });
        alert(this.message = 'Company edited successfully..!!');
      }
  NewCompany() {
    let currentUrl = this.router.url;
    let newUrl;
    this.router.navigateByUrl('/', {
      skipLocationChange: true,
      replaceUrl: true
    }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
  getCompanyId(id: string): void {
    this.honeybillservice.getByCompanyId(id)
      .subscribe({
        next: (data) => {
          if(data.companylogo!=null){
            var bytes =  data.companylogo;
            var u8 = new Uint8Array(bytes.data);
            this.Uint8ToString(u8);
          }  this.preview=this.image;
          this.company = data;
          this.companydetails.controls['businessname'].setValue(this.company.businessname);
          this.companydetails.controls['address'].setValue(this.company.address);
          this.companydetails.controls['city'].setValue(this.company. city);
          this.companydetails.controls['state'].setValue(this.company.state);
          this.companydetails.controls['pincode'].setValue(this.company.pincode);
          this.companydetails.controls['country'].setValue(this.company.country);
          this.companydetails.controls['email'].setValue(this.company.email);
          this.companydetails.controls['phone'].setValue(this.company.phone);
          this.companydetails.controls['panno'].setValue(this.company.panno);
          this.companydetails.controls['gstin'].setValue(this.company.gstin);
          this.companydetails.controls['taxationmethod'].setValue(this.company.taxationmethod);
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  getcompanylists() {
    try {
      this.loading = true;
      setTimeout(async () => {
        (await this.honeybillservice.getCompany()).subscribe((company: Company[]) => {
          this.companydata = [];
          this.companydata = company;
          console.log(this.companydata)
          this.loading = false;
        })
      }, 500);
    } catch (e) {
      throw e
    }
  }
  
  // Image Function
  selectFile(event:any):void{
    this.messageimage='';
    this.preview='';
    this.selectedFiles=event.target.files;
    if(this.selectedFiles){
      const file:File|null = this.selectedFiles.item(0);
      if(file){
        this.preview='';
        this.currentFile=file;
        const reader=new FileReader();
        reader.onload=(e:any)=>{
          console.log(e.target.result);
          this.preview = e.target.result;
        };
        reader.readAsDataURL(this.currentFile);
      }
    }
  }
  Uint8ToString(u8a:any){
    var CHUNK_SZ = 0x8000;
    var c = [];
    for (var i=0; i < u8a.length; i+=CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i+CHUNK_SZ)));
    }
    this.image=c.join("");
    console.log(this.image);
    return c.join("");
  }
}

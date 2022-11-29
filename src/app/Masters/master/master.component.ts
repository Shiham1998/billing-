import { Component, OnInit,Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HoneybillService } from 'src/app/services/honeybill.service';
import { Masters } from 'src/app/models/Masters';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {
  MasterListdata:Masters[]=[];
  @Input() addMode = false;
  TemplateCode!: string;
  fg_Masters!: FormGroup;
  message!: string;
  loading!:boolean;
  _getMasterId: any;
  _assignText!:string;

masters:Masters={
    name: '',
    id: '',
    active: false,
    m_type: '',
    eventdate: ''
  }

   constructor(private honeybillservice:HoneybillService,
     private route:ActivatedRoute,
     private router:Router) { }

  ngOnInit(): void {
    try{
      this.route.queryParams.subscribe(
        params => {
          this.TemplateCode =  params['data'];
        }
      )
      let newUrl;
      let UrlAry = this.router.url.split('/');
      newUrl = UrlAry[1];
      if(newUrl.includes("brand")){
        this._assignText="Brand";
      }
      else if(newUrl.includes("unit")){
        this._assignText="Unit";
      }
      else if(newUrl.includes("department")){
        this._assignText="Department";
      }
      else{
        this._assignText="Designation";
      }
      this.getmasterlist();
      this.fg_Masters=new FormGroup({
        name:new FormControl('')
    });
   
    if (this.route.snapshot.params["id"] == null)  {
      this.addMode = true;
    }
    if (!this.addMode) {
      this. getmasterdata(this.route.snapshot.params["id"]);
    }
   }
    catch(e){
      console.log('master ngonit'+e);
      alert('master ngonit'+ e);
    }
  }
  getmasterdata(id: string): void {
    try{
      this.honeybillservice.getByBrandId(id)
      .subscribe({
        next: (data) => {
         this.masters=data;
         this.fg_Masters.controls['name'].setValue(this.masters.name);
         console.log(data);
        },
        error: (e) => console.error(e)
      });
    }catch(e){
      console.log('viewbrandmasterId ' + e);alert('viewbrandmasterId '+ e);
    }
  }
  getmasterlist(){
    try{
      this.loading =true;
      setTimeout(async ()=>{
        (await this.honeybillservice.getbrandmasterlist(this.TemplateCode)).subscribe((brandmasterlist:Masters[])=>{
          this.MasterListdata=[];
          this.MasterListdata=brandmasterlist;
          this.loading=false;
        })
      },100) 
    }
    catch(e){
      console.log('getmasterlist '+e);
    }
  }
  
  savemasters()
  {
    try{
      if(this.fg_Masters.valid){
        const data ={
          name:this.fg_Masters.controls['name'].value,
          m_type:this.TemplateCode,
          active:true
        };
        console.log(data);
        this.honeybillservice.savebrandmaster(data).subscribe({
          next:(res)=>{
            console.log(res);
          },
          error:(e)=>console.error(e)
        })
      }
      this.fg_Masters.controls['name'].setValue('');
      this.NavigateToList();
      
    }
    catch(e){
      console.log('Masters-save'+ e);
      alert('Masters-save'+e);
    }
  }
  NavigateToList ():void{
    if(this.TemplateCode==="B"){
      this.router.navigate(['/brand'],{queryParams: {data: 'B'}});
    }
    else if(this.TemplateCode==="U"){
      this.router.navigate(['/unit'],{queryParams: {data: 'U'}});
    }
    else if(this.TemplateCode==="D"){
      this.router.navigate(['/designation'],{queryParams: {data: 'D'}});
    }
    else{
      this.router.navigate(['/department'],{queryParams: {data: 'DT'}});
    }
  
  
  }
  getDeleteid = (data: any) => {
    this._getMasterId = Object.assign(data);
    console.log(this._getMasterId);
  }
DeleteMaster(id:string):void{
    try {
      this.honeybillservice.deletebrandmasteritem(id)
        .subscribe({
          next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
    } catch (e) {
     console.log('DeleteMaster '+ e);
    }
    this.getmasterlist()
  }
  UpdateMaster(){
    try{
      if(this.fg_Masters.valid){
        this.masters.name=this.fg_Masters.controls['name'].value;
        this.honeybillservice.updateBrandmasterid(this.masters.id,this.masters).subscribe({
          next:(res)=>{
            console.log(res);
            this.addMode=false;
          },
          error:(e)=>console.error(e)
        });
      }
     this.NavigateToList();
    }
    catch(e){
      
    }
  }
}
 
 
 
  
 
    
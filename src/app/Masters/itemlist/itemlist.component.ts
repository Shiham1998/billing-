import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import {
  ActivatedRoute,
  Router
} from '@angular/router';
import {
  Observable,
  of
} from 'rxjs';
import {
  Itemlist
} from 'src/app/models/itemlist';
import {
  HoneybillService
} from 'src/app/services/honeybill.service';


@Component({

  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.css']
})
export class ItemlistComponent implements OnInit {
  searchData:Itemlist[] = [];
  deltitemId_: any;
  searchitem!: FormGroup;
  loading: boolean = false;
  itemlistdata: Itemlist[] = [];
  item!: Itemlist[];

  itemlist: Itemlist = {
    id: '',
    hsn_code: '',
    item_code: '',
    sku: '',
    item_name: '',
    unit: '',
    product_type: '',
    serial_no: '',
    group: '',
    brand: '',
    print_name: '',
    purchase_price: 0,
    sale_price: 0,
    min_sale_price: 0,
    mrp: 0,
    opening_stock: 0,
    opening_stock_value: 0,
    low_level_limit: 0,
    GST: 0,
    IGST: 0,
    CGST: 0,
    SGST: 0,
    cess: 0,
    hsn_name: '',
    hsn_description: '',
    bar_code: '',
    shortname: '',
    subgroup: '',
    supplier: '',
    maximum_qty: 0,
    barcode_status: '',
    stock_maintainance: false,
    box_qty: 0,
    customer_discount: 0,
    dealer_discount: 0,
    whole_salerate: 0,
    rack_group: '',
    rack_name: '',
    quotation_status: '',
    tax_status: '',
    productimage: '',
    allow_weighing_scale: false,
    salesman_commission: false,
    salesman_commission_amount: '',
    current_stock: 0,
    active: false
  };

  constructor(private honeybillService: HoneybillService, private router: Router,
    private route: ActivatedRoute, ) {}

  ngOnInit(): void {
    this.searchitem = new FormGroup({
      search_name: new FormControl(''),
    });
    this.getItemlists();
}

  getItemlists() {
    try {
      this.loading = true;
      setTimeout(async () => {
        (await this.honeybillService.getItemlist()).subscribe((itemlist: Itemlist[]) => {
          this.itemlistdata = [];
          this.itemlistdata = itemlist;
          this.searchData = itemlist;
          for (let ctr = 0; ctr < this.itemlistdata.length; ctr++) {
            if (this.itemlistdata[ctr].productimage != null && this.itemlistdata[ctr].productimage != undefined ) {
              var bytes = this.itemlistdata[ctr].productimage; 
              var u8 = new Uint8Array(bytes.data);
              this.itemlistdata[ctr].productimage = this.Uint8ToString(u8);
            }
          }
          this.loading = false;
        })
      }, 500);
    } catch (e) {
      throw e
    }
  }

 NewItemLists() {
    let currentUrl = this.router.url;
    let newUrl;
    this.router.navigateByUrl('/', {
      skipLocationChange: true,
      replaceUrl: true
    }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }

  Passidfromdeletemodal = (data: any) => {
    this.deltitemId_ = Object.assign(data);
    console.log(this.deltitemId_);
  }

  deleteitemlists(id: string): void {
    try {
      this.honeybillService.deleteItemlist(this.deltitemId_)
        .subscribe({
          next: (res) => {
            this.honeybillService.deleteProductstock(id)
            .subscribe({
              next: (res) => {
            console.log(res);
          },
          error: (e) => console.error(e)
        });
      },
        });
      this.NewItemLists();
    } catch (e) {}
 }

  Uint8ToString(u8a: any) {
    var CHUNK_SZ = 0x8000;
    var c = [];
    for (var i = 0; i < u8a.length; i += CHUNK_SZ) {
      c.push(String.fromCharCode.apply(null, u8a.subarray(i, i + CHUNK_SZ)));
    }
    return c.join("");
  }

  onSearch(event: any) {
    this.itemlistdata = this.searchData;
    const value = event.target.value;
    if (this.searchData.length>0 && this.searchitem.controls['search_name'].value.length >0) {
        this.itemlistdata = this.itemlistdata.filter(filtered =>
        filtered.item_name.includes(value)
      );
      console.log(this.itemlistdata);
    }
    else if(this.itemlistdata.length==0 || this.searchitem.controls['search_name'].value.length == 0){
      this.getItemlists()
    }
 }





}

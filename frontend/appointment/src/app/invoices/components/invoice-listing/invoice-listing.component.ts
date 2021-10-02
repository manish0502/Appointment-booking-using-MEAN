import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvoiceService } from '../../invoice.service'
import { Invoice } from '../../models/invoice';
import { Appointment } from '../../models/appointment';

import { remove } from 'lodash';

@Component({
  selector: 'app-invoice-listing',
  templateUrl: './invoice-listing.component.html',
  styleUrls: ['./invoice-listing.component.scss']
})
export class InvoiceListingComponent implements OnInit {

  displayedColumns: string[] = ['appointmentDate', 'email', 'name', 'age' ,'contact' ,'createdAt' ,'action' ];

  //displayedColumns: string[] = ['item', 'date', 'due', 'qty' ,'rate' ,'tax','action'];
  dataSource : Appointment[] =[];
  //displayedColumns: string[] =body: Appointment[] 

  constructor(private invoiceService:InvoiceService ,
     private router:Router , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.onList();

  }

  onList(){
    this.invoiceService.getPatient().subscribe(data=>{
      
      this.dataSource=data;
      this._snackBar.open('Record Loaded' , 'Success' , {
        duration:2000
      })
      console.log(data)
    }, err=>{
      this.errorHandler(err , 'Failed to Load invoice')
    }
    )
  }

  saveBtnHandler(){

    this.router.navigate(['appointment' ,'new'])

  }

  editBtnHandler(id){
    
    
     this.router.navigate(['appointment/update' ,id])

  }

  deleteBtnHandler(id){

    this.invoiceService.deletePatient(id)
    .subscribe(data=>{

      this._snackBar.open(`pateint details with id ${id} is deleted successfully` , 'Success' , {
        duration:2000
      })
      console.log(data)
    }, err => {
      this.errorHandler(err , 'Failed to Delete invoice')
    })
  }


  private errorHandler(error ,message ){
    console.log(error);
    this._snackBar.open(message , 'Error' , {
      duration:2000
    })
  }

}

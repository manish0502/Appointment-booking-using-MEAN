//import { Register } from './../../models/register';
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-register-user',
//   templateUrl: './register-user.component.html',
//   styleUrls: ['./register-user.component.css']
// })
// export class RegisterUserComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { InvoiceService } from '../../invoice.service'
import { Register } from '../../models/register';
import { remove } from 'lodash';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  displayedColumns: string[] = ['name', 'email', 'role', 'createdAt' ,'updatedAt' ];
  dataSource : Register[] =[];

  constructor(private invoiceService:InvoiceService ,
     private router:Router , private _snackBar: MatSnackBar) { }

  ngOnInit(): void {

    this.onList();

  }

  onList(){
    this.invoiceService.getUser().subscribe(data=>{
      
      this.dataSource=data;
      this._snackBar.open('Details Loaded' , 'Success' , {
        duration:2000
      })
      console.log(data)
    }, err=>{
      this.errorHandler(err , 'Failed to Load List')
    }
    )
  }

  goToRegister(){
    this.router.navigate(['register']);
  }

  saveBtnHandler(){

    this.router.navigate(['appointment' ,'new'])

  }

  editBtnHandler(id){
    
    
     this.router.navigate(['appointment' ,id])

  }

  deleteBtnHandler(id){

    this.invoiceService.deleteInvoice(id)
    .subscribe(data=>{

    //  remove(this.dataSource,(item) => {
    //       return item._id === data._id
    //  })

      this._snackBar.open('Invoice Deleted' , 'Success' , {
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

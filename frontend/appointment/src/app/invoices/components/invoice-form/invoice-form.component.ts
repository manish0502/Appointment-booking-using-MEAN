import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder ,Validators} from '@angular/forms';
import { InvoiceService } from '../../invoice.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from '../../models/appointment';


@Component({
  selector: 'app-invoice-form',
  templateUrl: './invoice-form.component.html',
  styleUrls: ['./invoice-form.component.scss']
})
export class InvoiceFormComponent implements OnInit {

  invoiceForm:FormGroup;
  private invoice:Appointment[]


  constructor(
       private fb: FormBuilder ,
       private invoiceService : InvoiceService ,
       private _snackBar: MatSnackBar,
       private router:Router,
       private route:ActivatedRoute

       ) { }

  ngOnInit(): void {

    this.createForm();
    this.setInvoiceToForm();
  }

  createForm(){

    this.invoiceForm = this.fb.group({ 
    
          name :['' , Validators.required],
          appointmentDate: ['' , Validators.required],
          email : ['' , Validators.required],
          age : ['' , Validators.required],
          contact: ['']
        
      })
    
     }
     

      onSubmit(){

        
       this.invoiceService.registerPatient(this.invoiceForm.value).subscribe(data=>{
        this._snackBar.open('New Patient Record Created' , 'Success' , {
            duration:2000
          })
        
         this.invoiceForm.reset();
         this.router.navigate(['appointment'])
         console.log(data);
       },
       err => this.errorHandler(err , 'Failed to create New Patient')
       )
      
     }

     private errorHandler(error ,message ){
       console.log(error);
       this._snackBar.open(message , 'Error' , {
         duration:2000
       })
     }

     onCancel() {

      this.router.navigate(['appointment'])

     }

      setInvoiceToForm(){

        this.route.params.subscribe(params => {

          let id = params['id'];

          if(!id){
            return;
          }
          this.invoiceService.getPatientId(id)
          .subscribe(invoice => {
            debugger
             this.invoice = invoice;
             this.invoiceForm.patchValue(this.invoice);
            

          }, err => this.errorHandler(err , 'Failed to get invoice')
          )
        })
       
     }
   
  }



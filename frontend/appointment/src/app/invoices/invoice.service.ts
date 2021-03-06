//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient ,HttpHeaders ,HttpParams}   from '@angular/common/http'

//import { Observable } from 'rxjs/internal/Observable';
//import {Observable } from 'rxjs/Observable';
import { Invoice } from './models/invoice'
import { Register } from './models/register';
import { Login } from './models/login';
import { Appointment } from './models/appointment'

const BASE_URL ='http://localhost:5000/api'

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {


 
  constructor(private http:HttpClient) { }



  getInvoice():Observable<Invoice[]>{
    
    return this.http.get<Invoice[]>(`${BASE_URL}/invoice`);

  }


  getInvoiceId(id:string):Observable<Invoice[]>{
    
    return this.http.get<Invoice[]>(`${BASE_URL}/invoice/${id}`);

  }

  createInvoice(body:Invoice):Observable<Invoice[]>{
     
    return this.http.post<Invoice[]>(`${BASE_URL}/invoice` , body);

  }

  
  deleteInvoice(id:string):Observable<Invoice[]>{
    
    return this.http.delete<Invoice[]>(`${BASE_URL}/invoice/${id}`);

  }

  updateInvoice(id:string ,body:Invoice):Observable<Invoice[]>{
    
    return this.http.put<Invoice[]>(`${BASE_URL}/invoice/${id}` ,body);

  }


  // registerUser(body:Register){
     
  //   return this.http.post(`${BASE_URL}/register`, body ,{
  //     observe:'body',
  //     headers: new HttpHeaders().append('Content-Type', 'application/json')
  //   });

  // }

  registerUser(body:Register):Observable<Register[]>{
     
    return this.http.post<Register[]>(`${BASE_URL}/register`, body ,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }


  getPatientId(id:string):Observable<Appointment[]>{
    
    return this.http.get<Appointment[]>(`${BASE_URL}/patient/${id}`);

  }

  registerPatient(body:Appointment):Observable<Appointment[]>{
     
    return this.http.post<Appointment[]>(`${BASE_URL}/patient`, body ,{
      observe:'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }

  getPatient():Observable<Appointment[]>{
    
    return this.http.get<Appointment[]>(`${BASE_URL}/patient`);

  }

  updatePatient(id:string ,body:Appointment):Observable<Appointment[]>{
    
    return this.http.put<Appointment[]>(`${BASE_URL}/patient/${id}` ,body);

  }

  deletePatient(id:string):Observable<Appointment[]>{
    
    return this.http.delete<Appointment[]>(`${BASE_URL}/patient/${id}`);

  }

  getUser():Observable<Register[]>{
    
    return this.http.get<Register[]>(`${BASE_URL}/user`);

  }

  loginUser(body:Login):Observable<Login[]>{
     
    return this.http.post<Login[]>(`${BASE_URL}/login`, body ,{
      observe:'body',
      withCredentials:true,
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });

  }
}

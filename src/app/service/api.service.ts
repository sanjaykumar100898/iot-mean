import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  baseUri = 'http://localhost:4000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  getSensor: any;

  constructor(private http: HttpClient) { }

  // Create
  createSensor(data): Observable<any> {
    const url = `${this.baseUri}/create`;
    return this.http.post(url, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  //



  // Get Sensor
// *  getSensors(id): Observable<any> {
    // const url = `${this.baseUri}/read/${id}`;
   // return this.http.get(url, {headers: this.headers}).pipe(
      // map((res: Response) => {
       // return res || {};
      // }),
      /// catchError(this.errorMgmt)
    // );
  // }

  getSensors(): Observable<any> { const url = `${this.baseUri}/readAll`;
   return this.http.get(url, {headers: this.headers}).pipe(
     map((res: Response) => {
        return res || {}; }),
         catchError(this.errorMgmt)
         );
         }

 faultSensors(): Observable<any> { const url = `${this.baseUri}/faultAll`;
   return this.http.get(url, {headers: this.headers}).pipe(
     map((res: Response) => {
        return res || {}; }),
         catchError(this.errorMgmt)
         );
         }
//
countSensors(id): Observable<any> { const url = `${this.baseUri}/`;
   return this.http.get(url, {headers: this.headers}).pipe(
     map((res: Response) => {
        return res || {}; }),
         catchError(this.errorMgmt)
         );
         }


  // Update Sensor
  updateSensor(id, data): Observable<any> {
    const url = `${this.baseUri}/update/${id}`;
    return this.http.put(url, data, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }

  // Delete Sensor
  deleteSensor(id): Observable<any> {
    const url = `${this.baseUri}/delete/${id}`;
    return this.http.delete(url, { headers: this.headers }).pipe(
      catchError(this.errorMgmt)
    );
  }
  //


  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}

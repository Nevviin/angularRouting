import { Injectable } from '@angular/core';
import {Observable,throwError} from 'rxjs';
import {catchError,retry} from 'rxjs/operators';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';
import { User } from '../interfaces/user';
import { UserDetails } from '../interfaces/user-details';
//import { type } from 'os';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
private configUrl = 'http://localhost:5277/signIn';
  constructor(private http : HttpClient) { }

  httpOptions = {
    headers:new HttpHeaders({
      'content-type': 'application/json'    
    })
  }


signIn(user:User):Observable<UserDetails>{
return this.http.post<UserDetails>(
  this.configUrl,JSON.stringify(user),this.httpOptions )
  .pipe(
    retry(0),catchError(this.handleError)
  )
}

/* 
// HttpClient API post() method => Create employee
createEmployee(employee): Observable<Employee> {
  return this.http.post<Employee>(this.apiURL + '/employees', JSON.stringify(employee), this.httpOptions)
  .pipe(
    retry(1),
    catchError(this.handleError)
  )
}   */

// Error handling 
handleError(error) {
  let errorMessage = '';
  if(error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}

}



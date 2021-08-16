import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Customer } from './customer';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

const url = 'https://app-database-59520-default-rtdb.europe-west1.firebasedatabase.app/customers';
const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  customers: Customer[] = [];

  constructor(private httpClient: HttpClient) { }

  // Create => POST
  createData(customer: Customer): void {
    this.httpClient.post<Customer>(`${url}.json`, customer, httpOptions).subscribe(
      res => {
        // customer.key = res.name;
        // this.customers.push(customer)
        this.customers.push({...{key: res.name}, ...customer})
      },
      catchError(this.errorHandler<Customer>('POST'))
    );
  }

  // Read => GET
  getData(): void  {
    this.httpClient.get<Customer[]>(`${url}.json`, httpOptions).subscribe(
     (res: any) => {
        Object.keys(res).forEach(key => {
          // const obj = Object.assign({}, res[key]);
          // obj.key = key;
          // const obj = {key, ...res[key]};
          this.customers.push({key, ...res[key]});
        })
      },
      catchError(this.errorHandler<Customer[]>('GET'))
    )
  }

  update() {

  }

  delete() {
    
  }

  private errorHandler<T>(operation: string, res?: T): any {
    return (err: any): Observable<T> => {
      console.error(`${operation} failed: ${err}`)
      return of(res as T);
    }
  }

}

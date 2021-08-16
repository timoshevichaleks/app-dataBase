import { Component, OnInit } from '@angular/core';
import { Customer } from '../shared/customer';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss']
})
export class CustomersListComponent implements OnInit {

  isEditPos: number | null = null;

  constructor(public httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getData();
  }

  editCustomer(i: number): void {
    this.isEditPos = i;
  }

  cancelEdit(): void {
    this.isEditPos = null;
  }

  saveCustomer(customer: Customer, i: number): void {
    console.log(customer);
    console.log(i);
  }

  deleteCustomer(customer: Customer): void {
    console.log(customer)
  }

  setValue() {
    
  }

}

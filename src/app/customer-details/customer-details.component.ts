import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../shared/http.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss']
})
export class CustomerDetailsComponent implements OnInit {

  form = this.formBuilder.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    mobile: ['', [Validators.required, Validators.minLength(8)]],
    location: ['', [Validators.required]]
  })

  name: AbstractControl = this.form.controls.name;
  email: AbstractControl = this.form.controls.email;
  mobile: AbstractControl = this.form.controls.mobile;
  location: AbstractControl = this.form.controls.location;

  constructor(private httpService: HttpService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createControls();
  }

  onSubmit(): void {
    this.httpService.createData(this.form.value);
  }

  private createControls(): void {
    this.name.setValue('John Smith');
    this.email.setValue('john@mail.com');
    this.mobile.setValue('12345678');
    this.location.setValue('Some Here');
  }

}

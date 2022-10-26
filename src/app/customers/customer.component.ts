import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder, Validators} from '@angular/forms';

import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customerForm: FormGroup = new FormGroup({});
  customer = new Customer();

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  this.customerForm = this.fb.group({
    firstName:['',[Validators.required,Validators.minLength(3)]],
    lastName:['',[Validators.required,Validators.minLength(3)]],
    email:['',[Validators.required,Validators.email]],
    sendCatalog:true
  });
  }
  
  populateTestData():void{
    this.customerForm.setValue({
      firstName:'ashiq',
      lastName:'khan',
      email:'ashiq070@gmail.com',
      sendCatalog:false
    });
  } 
save(){
  console.log(this.customerForm);
  console.log('saved: '+JSON.stringify(this.customerForm.value));
}
  
}

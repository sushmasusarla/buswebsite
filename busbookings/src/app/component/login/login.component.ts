import { Component, OnInit,  } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 errorMessage:string = '';
  login=new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  loginForm:any;
constructor(private hhtp:HttpClient, private router:Router){}
  ngOnInit(): void {
  }

onsubmit():void{
  const username = this.login.get('username')?.value;
  const password = this.login.get('password')?.value;
  if (username === 'sushma' && password === 'devansh') {
    // Navigate to home page (change 'home' to your actual home page route)
    this.router.navigate(['/home']);
  } else {
    this.errorMessage = 'Invalid credentials. Please try again.';
  }
  

}

onSubmit(form:NgForm):void{
  if (form.valid) {
    const email = form.value.email;
    const secured = form.value.secured;
    if (email === 'sushma' && secured === 'devansh') {
      // Navigate to home page (change 'home' to your actual home page route)
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid credentials. Please try again.';

  }

}

}
}

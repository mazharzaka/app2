import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signup',
  standalone: false,
  
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  user = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    address: '',
    phone: '',
    userType:''
  };
  constructor(private Auth:SignupService,private toastr: ToastrService,private router:Router) { }
  onSubmit(data:NgForm){
    if (data.valid) {
    this.Auth.createUser(data.value).subscribe({
      next: () => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        this.toastr.error('register is wrong.', 'Error');

      }
    })}
    else {
      console.log('Form is invalid');
      this.toastr.error('Form is invalid.', 'Error');

    }

    // console.log('data Submitted:', data.value);

  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  user = {
    email: '',
    password: '',
  };
  constructor(private Auth:LogService,private toastr: ToastrService,private router:Router) { }
onSubmit(data:NgForm){
  if (data.valid) {
  this.Auth.login(data.value).subscribe({
    next: () => {
      this.Auth.decode().userType==='admin'?this.router.navigate(['/admin']):
      this.router.navigate(['/']);
      
    },
    error: (err) => {
      console.log(err);
  this.toastr.error('username or password is wrong.', 'Error');

    }
  })
  // console.log('data Submitted:', data.value); 
}
else{
  this.toastr.error('Form is invalid.', 'Error');

  
}
}

}

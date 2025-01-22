import { Component, OnInit } from '@angular/core';
import { LogService } from '../../services/log.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: false,
  
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  login=false;
  Isuser=true
  constructor(private Auth:LogService,private router:Router) { }
  ngOnInit(): void {
    this.Auth.getAcess().subscribe({
      next: (data) => {
        if(data){
          this.login=true;
          this.Isuser= this.Auth.decode().userType==='user'?true:false
          
        }
        else{
          this.login=false;
        }
      }
    })
  }
  logout(){
    this.Auth.logout();
    this.router.navigate(['login']);
    this.login=false;
  }

   

}

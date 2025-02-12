import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {
  arr:any[]=[];
  imgurl=''
  constructor(private apiService:ApiService,private route:Router){}
  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{
      console.log(data);
      this.imgurl=this.apiService.imgUrl
      this.arr=data.filter(e=>e.Isdeleted!==true)
    })
  }
  
  dele(data:any){
    console.log(data);
    
    this.apiService.delepro({data}).subscribe({
      next: (response) => {
        this.ngOnInit(); // Refresh data on success
        console.log('Deletion successful:', response);
      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });
    
  }    
  getSeverity(status: string) {
    if (status ) {
      return 'danger';
    }
    else{
      return 'success';
    }}
  stock(data:any){
    console.log(data);
    
    this.apiService.stock({data}).subscribe({
      next: (response) => {
        this.ngOnInit(); // Refresh data on success
        console.log('Deletion successful:', response);
      },
      error: (err) => {
        console.error('Error during deletion:', err);
      },
    });
    
  }   
  edit(data:any){
    this.route.navigate(['/admin/edit'],{queryParams:{id:data}});
    console.log(data);
  }
}

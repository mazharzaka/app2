import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddproduectService } from '../../services/addproduect.service';
import { Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';

@Component({
  selector: 'app-addprodect',
  standalone: false,
  
  templateUrl: './addprodect.component.html',
  styleUrl: './addprodect.component.css'
})
export class AddprodectComponent {
  constructor(private Auth:AddproduectService,private category:CategoryService,private router:Router) { }
  options:any[]=[];
  ngOnInit(): void{
    this.category.getCategories().subscribe({
      next: (data) => {
        this.options=data;
        // console.log('Categories:', data);
        
      },
      error: (err) => {
        console.error('Error fetching categories:', err);
        }
      });
  }
  file:any;
  filechange(event:any){
    if(event.target.files.length>0){
     this.file=event.target.files[0];
   }
  }
  onSubmit(data:NgForm){

    data.value.productImage=this.file;
    let formData=new FormData();
    formData.append('name',data.value?.name);
    formData.append('desc',data.value?.desc);
    formData.append('category',data.value?.category);
    formData.append('price',data.value?.price);
    formData.append('productImage',this.file);
    this.Auth.createProduct(formData).subscribe({
      next: () => {
        this.router.navigate(['/admin']);
      },
      error: (err) => {
        console.log(err);
      }
    })
    console.log('data Submitted tttty:', formData);

  }
}

import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-edit',
  standalone: false,
  
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  constructor(private route: ActivatedRoute,private Api : ApiService ,private router:Router) { }
  productId: any;
  product: any
  ngOnInit(form: NgForm): void { 
    this.route.queryParamMap.subscribe((params) => {
      this.productId = params.get('id');
      console.log(this.productId);
      this.Api.editpro({id:this.productId}).subscribe(data=>{
    
        this.product=data;
       
        console.log(this.product);
      })

   })}

  onSubmit(data: NgForm) {
    // Handle form submission
    data.value.id=this.productId;
this.Api.editpro(data.value).subscribe(data=>{
  const filteredFields = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined && value !== '')
  );
  console.log(filteredFields);
  
  this.product=filteredFields;
  this.router.navigate(['/admin']);

})

  }
  file:any;
  filechange(event:any){
    if(event.target.files.length>0){
     this.file=event.target.files[0];
   }
  }
}

import {Component, OnInit } from '@angular/core';
import 'swiper/swiper-bundle.css';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-home',
  standalone: false,
  
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit  {
  arr:any[]=[]
    imgurl=''
  slides = [
    { img: 'imgs/handsome-young-retro-man-dressed-shirt-lies-floor.jpg' },
    { img: 'imgs/hero_bg_5.jpg' }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true
  };
  PslideConfig = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    dots: false,
    infinite: true
  };
  constructor(private apiService:ApiService){}
  ngOnInit(): void {
    this.apiService.getData().subscribe(data=>{
      console.log(data);
      this.imgurl=this.apiService.imgUrl
      this.arr=data
    })
  }

  scrollToSection(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}

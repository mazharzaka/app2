import {Component, HostListener, OnInit } from '@angular/core';
// import 'swiper/swiper-bundle.css';
import { ApiService } from '../../services/api.service';
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
      this.arr=data.filter(e=>e.Isdeleted!==true).slice(0,4)
    })
    this.updateSlideConfig()
  }
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.updateSlideConfig();
  }

  updateSlideConfig() {
    if (window.innerWidth < 768) {
      this.PslideConfig.slidesToShow = 1;
    } else {
      this.PslideConfig.slidesToShow = 3;
    }
  }

  scrollToSection(): void {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  }
}

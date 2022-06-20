import { Component, Input, OnInit } from '@angular/core';


interface caruselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }
  @Input()  images: caruselImage[] = []
  @Input()  indicators = true;
  @Input()  controls = true;
  @Input()  autoSlide = true;
  @Input()  slideInterval = 10000;


  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  autoSlideImages():void{
    setInterval(()=>{
      this.onNextClick()
    }, this.slideInterval)
  }

  //sets index of image on dot/indicator click
  selectImage(index : number):void{
    this.selectedIndex = index;
  }
  // on left arrow click
  onPrevClick(): void{
    if(this.selectedIndex === 0){
      this.selectedIndex = this.imagese.length -1;
    }else{
      this.selectedIndex--;
    }
  }
  //on right arrow click
  onNextClick(): void{
    if(this.selectedIndex === this.imagese.length -1){
      this.selectedIndex = 0;
    }else{
      this.selectedIndex++;
    }
  }

  imagese = [
    {
      imageSrc:
      'assets/banner.jpg',
      imageAlt:'sloti1'
    },
    {
      imageSrc:
      'assets/FB.jpg',
      imageAlt:'sloti2'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1511193311914-0346f16efe90?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1746&q=80',
      imageAlt:'sloti3'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1515687652280-bf0bb698562a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
      imageAlt:'sloti4'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1592398191627-25b41eeaa398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtYmxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      imageAlt:'sloti4'
    },
    {
      imageSrc:
      'https://images.unsplash.com/photo-1517232115160-ff93364542dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2FtYmxpbmd8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60',
      imageAlt:'sloti4'
    },

  ]
}

  

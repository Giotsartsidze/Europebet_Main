import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { PopUpService } from '../shared/Popup.service';

interface caruselImage {
  imageSrc: string;
  imageAlt: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private auth: AuthService, private shared: PopUpService) {}
  @Input() images: caruselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  ngOnInit(): void {
    if (this.autoSlide) {
      this.autoSlideImages();
    }
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  //sets index of image on dot/indicator click
  selectImage(index: number): void {
    this.selectedIndex = index;
  }
  //  left arrow click
  onPrevClick(): void {
    if (this.selectedIndex === 0) {
      this.selectedIndex = this.imagese.length - 1;
    } else {
      this.selectedIndex--;
    }
  }
  // right arrow click
  onNextClick(): void {
    if (this.selectedIndex === this.imagese.length - 1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

  showLoginPopup() {
    this.shared.showLogIn();
  }

  imagese = [
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/8cf515d9-35e3-46cb-b267-69ff641b365d.jpeg',
      imageAlt: 'sloti1',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/68a82a06-6d31-4e2b-856a-44ba5858e916.jpeg',
      imageAlt: 'sloti2',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/98bf8057-4172-4af7-9209-9ee38663530f.jpeg',
      imageAlt: 'sloti3',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/0a96b15f-446c-48f5-af84-318704e6e251.jpeg',
      imageAlt: 'sloti4',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/e1cbbc92-f6bc-4440-af42-ba7e35cb21e0.jpeg',
      imageAlt: 'sloti4',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/a6465ab0-00d6-4405-9587-b6c24686b58e.jpeg',
      imageAlt: 'sloti4',
    },
    {
      imageSrc:
        'https://cf.europebet.com/prod/content/sliders/images/24d1b89c-bacb-495d-aaaa-c6c9259528d8.jpeg',
      imageAlt: 'sloti4',
    },
  ];
}

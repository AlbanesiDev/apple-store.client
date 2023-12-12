import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  public bannerTexts!: string;
  public gridTexts!: string;
  public largeImage: boolean = true;
  public mediumImage: boolean = false;
  public smallImage: boolean = false;

  //=== temporary data (waiting for the backend) ===
  public banners = [
    {
      title: 'iPhone 15 Pro',
      largeImage: '/assets/images/home/iphone_15_pro_large.jpg',
      mediumImage: '/assets/images/home/iphone_15_pro_medium.jpg',
      smallImage: '/assets/images/home/iphone_15_pro_small.jpg',
      link: '/shop/buy-iphone/iphone-15-pro',
    },
    {
      title: 'iPhone 15',
      largeImage: '/assets/images/home/iphone_15_large.jpg',
      mediumImage: '/assets/images/home/iphone_15_medium.jpg',
      smallImage: '/assets/images/home/iphone_15_small.jpg',
      link: '/shop/buy-iphone/iphone-15',
    },
    {
      title: 'Watch Series 9',
      largeImage: '/assets/images/home/apple_watch_series_9_large.jpg',
      mediumImage: '/assets/images/home/apple_watch_series_9_medium.jpg',
      smallImage: '/assets/images/home/apple_watch_series_9_small.jpg',
      link: '/shop/buy-watch/apple-watch-series-9',
    },
  ];
  public grid = [
    {
      title: 'iPad Pro',
      largeImage: '/assets/images/home/ipad_pro_large.jpg',
      mediumImage: '/assets/images/home/ipad_pro_medium.jpg',
      smallImage: '/assets/images/home/ipad_pro_small.jpg',
      link: '/shop/buy-iphone/iphone-15-pro',
    },
    {
      title: 'Vision Pro',
      largeImage: '/assets/images/home/apple_vision_pro_large.jpg',
      mediumImage: '/assets/images/home/apple_vision_pro_medium.jpg',
      smallImage: '/assets/images/home/apple_vision_pro_small.jpg',
      link: '/shop/buy-iphone/iphone-15-pro',
    },
    {
      title: 'MacBook Air 15',
      largeImage: '/assets/images/home/macbook_air_15_midnight_large.jpg',
      mediumImage: '/assets/images/home/macbook_air_15_midnight_medium.jpg',
      smallImage: '/assets/images/home/macbook_air_15_midnight_small.jpg',
      link: '/shop/buy-iphone/iphone-15-pro',
    },
    {
      title: 'AirPods Pro',
      largeImage: '/assets/images/home/airpods_pro_large.jpg',
      mediumImage: '/assets/images/home/airpods_pro_medium.jpg',
      smallImage: '/assets/images/home/airpods_pro_small.jpg',
      link: '/shop/buy-iphone/iphone-15-pro',
    },
  ];
  //=================================================

  constructor(private translateService: TranslateService) {
    this.translateService.get('full_banner_text').subscribe((res: any) => {
      this.bannerTexts = res;
    });
    this.translateService.get('square_banner_text').subscribe((res: any) => {
      this.gridTexts = res;
    })
  }

  ngOnInit() {
    if (window.innerWidth <= 734) {
      this.largeImage = false;
      this.mediumImage = false;
      this.smallImage = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (event.target.innerWidth <= 734) {
      this.largeImage = false;
      this.mediumImage = false;
      this.smallImage = true;
    } else if (
      event.target.innerWidth <= 1068 &&
      event.target.innerWidth > 734
    ) {
      this.largeImage = false;
      this.mediumImage = true;
      this.smallImage = false;
    } else if (event.target.innerWidth >= 1069) {
      this.largeImage = true;
      this.mediumImage = false;
      this.smallImage = false;
    }
  }
}

import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FooterSection } from '../../models/footer.interface';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  //== Mock Data ==
  public list: FooterSection[] = [
    {
      sections: [
        {
          title: 'Shop and Learn',
          items: [
            'Store',
            'Mac',
            'iPad',
            'iPhone',
            'Watch',
            'AirPods',
            'TV & Home',
            'AirTag',
            'Accessories',
            'Gift Cards',
          ],
        },
        {
          title: 'Apple Wallet',
          items: ['Wallet', 'Apple Card', 'Apple Pay', 'Apple Cash'],
        },
      ],
    },
    {
      sections: [
        {
          title: 'Account',
          items: ['Manage Your Apple ID', 'Apple Store Account', 'iCloud.com'],
        },
        {
          title: 'Entertainment',
          items: [
            'Apple One',
            'Apple TV+',
            'Apple Music',
            'Apple Arcade',
            'Apple Fitness+',
            'Apple News+',
            'Apple Podcasts',
            'Apple Books',
            'App Store',
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: 'Apple Store',
          items: [
            'Find a Store',
            'Genius Bar',
            'Today at Apple',
            'Apple Camp',
            'Apple Store App',
            'Certified Refurbished',
            'Apple Trade in',
            'Financing',
            'Carrier Deals at Apple',
            'Order Status',
            'Shopping Help',
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: 'For Business',
          items: ['Apple and Business', 'Shop for Business'],
        },
        {
          title: 'For Education',
          items: ['Apple and Education', 'Shop for K-12', 'Shop for College'],
        },
        {
          title: 'For Healthcare',
          items: [
            'Apple in Healthcare',
            'Health on Apple Watch',
            'Health Records on iPhone',
          ],
        },
        {
          title: 'For Government',
          items: ['Shop for Government', 'Shop for Veterans and Military'],
        },
      ],
    },
    {
      sections: [
        {
          title: 'Apple Values',
          items: [
            'Accessibility',
            'Education',
            'Environment',
            'Inclusion and Diversity',
            'Privacy',
            'Racial Equity and Justice',
            'Supplier Responsibility',
          ],
        },
        {
          title: 'About Apple',
          items: [
            'Newsroom',
            'Apple Leadership',
            'Career Opportunitiesities',
            'Investors',
            'Ethics & Compliance',
            'Events',
            'Contact Apple',
          ],
        },
      ],
    },
  ];
}

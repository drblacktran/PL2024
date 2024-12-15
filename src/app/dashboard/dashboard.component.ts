import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProgramsComponent} from "../programs/programs.component";
import {SponsorComponent} from "../sponsor/sponsor.component";
import {DividerModule} from "primeng/divider";
import {CarouselModule} from "primeng/carousel";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    ProgramsComponent,
    SponsorComponent,
    NgIf,
    DividerModule,
    CarouselModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  cultureLines = [
    {
      text: 'Chia sẻ và phát triển',
      color: '#CF5258', // Red tone
      image: 'assets/culture1.png', // Replace with your image paths
    },
    {
      text: 'Trân trọng sự khác biệt',
      color: '#E19E29', // Orange tone
      image: 'assets/culture2.png',
    },
    {
      text: 'Cam kết với nhiệm vụ',
      color: '#78A4A3', // Teal tone
      image: 'assets/culture3.png',
    },
    {
      text: 'Lắng nghe và thấu hiểu',
      color: '#444B5B', // Dark grey/blue tone
      image: 'assets/culture4.png',
    },
  ];

  rowOneData = [
    {
      number: '06',
      description: 'Mùa hoạt động và phát triển',
      color: '#CF5258', // Red
    },
    {
      number: '120+',
      description: 'Thành viên đến từ hơn 30 tỉnh thành',
      color: '#E19E29', // Yellow
    },
    {
      number: '400 triệu',
      description: 'Tổng số tiền gây quỹ từ tất cả các nguồn',
      color: '#78A4A3', // Teal
    },
  ];

  // Data for the second row
  rowTwoData = [
    {
      number: '14',
      description: 'Sự kiện gây quỹ đã được diễn ra',
      color: '#78A4A3', // Teal
    },
    {
      number: '13',
      description: 'Đơn vị báo chí truyền thông đưa tin',
      color: '#CF5258', // Red
    },
    {
      number: '400k+',
      description: 'Lượt tiếp cận trên các kênh truyền thông',
      color: '#E19E29', // Yellow
    },
  ];

  selectedGroup: number = 0;

  groups = [
    { name: 'BoAs' },
    { name: 'Tài Nguyên' },
    { name: 'Chương Trinh' },
    { name: 'Nhân Sự' },
    { name: 'Truyền Thông' },
    { name: 'Tài Chính' },
  ];

  cards = Array.from({ length: 35 }, (_, i) => ({
    image: `assets/card-${i + 1}.jpg`, // Replace with real paths
    group: i % 6, // Divide into 6 groups
    selected: false,
  }));

  filteredCards = this.cards;

  // Filter cards based on group selection
  selectGroup(groupIndex: number) {
    this.selectedGroup = groupIndex;
    this.filteredCards = this.cards.map((card) => ({
      ...card,
      selected: card.group === groupIndex,
    }));
  }

  // Responsive options for PrimeNG Carousel
  responsiveOptions = [
    { breakpoint: '1024px', numVisible: 3, numScroll: 1 },
    { breakpoint: '768px', numVisible: 2, numScroll: 1 },
    { breakpoint: '560px', numVisible: 1, numScroll: 1 },
  ];
}

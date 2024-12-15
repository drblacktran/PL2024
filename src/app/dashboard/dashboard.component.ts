import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProgramsComponent} from "../programs/programs.component";
import {SponsorComponent} from "../sponsor/sponsor.component";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    ProgramsComponent,
    SponsorComponent,
    NgIf,
    DividerModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  cultureLines = [
    {
      text: '#1 - Chia sẻ và phát triển',
      color: '#CF5258', // Red tone
      image: 'assets/culture1.png', // Replace with your image paths
    },
    {
      text: '#2 - Trân trọng sự khác biệt',
      color: '#E19E29', // Orange tone
      image: 'assets/culture2.png',
    },
    {
      text: '#3 - Cam kết với nhiệm vụ',
      color: '#78A4A3', // Teal tone
      image: 'assets/culture3.png',
    },
    {
      text: '#4 - Lắng nghe và thấu hiểu',
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
}

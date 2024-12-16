import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-milestones',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './milestones.component.html',
  styleUrl: './milestones.component.scss'
})
export class MilestonesComponent {
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

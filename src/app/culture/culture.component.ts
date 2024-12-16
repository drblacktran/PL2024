import { Component } from '@angular/core';
import {NgForOf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-culture',
  standalone: true,
  imports: [
    NgForOf,
    NgStyle
  ],
  templateUrl: './culture.component.html',
  styleUrl: './culture.component.scss'
})
export class CultureComponent {
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
}

import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage, NgStyle} from "@angular/common";
import {Ripple} from "primeng/ripple";
import {TitleComponent} from "../shared/title/title.component";

@Component({
  selector: 'app-programs',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    NgOptimizedImage,
    TitleComponent,
  ],
  templateUrl: './programs.component.html',
  styleUrl: './programs.component.scss'
})
export class ProgramsComponent {
  startYear: number = 2019; // Define the starting year
  numberOfYears: number = 6; // Total years to display
  years: number[] = []; // Array to store the years
  colors: string[] = ['#CF5258', '#E19E29', '#78A4A3']; // Colors for cycling
  lineHeight: number = 0; // Height of the animated line


  // Data for timeline
  timelineData = [
    {
      year: 2019,
      title: 'GIÁO DỤC X DU LỊCH X VẺ ĐẸP VĂN HÓA',
      schoolName: 'Trường PTDTBT THCS San Sả Hồ',
      location: 'San Sả Hồ, Lào Cai',
    },
    {
      year: 2020,
      title: 'GIÁO DỤC X VỆ SINH NƯỚC SẠCH',
      schoolName: 'Trường PTDTBT THCS San Sả Hồ',
      location: 'San Sả Hồ, Lào Cai',
    },
    {
      year: 2021,
      title: 'GIÁO DỤC X NĂNG LƯỢNG SẠCH',
      schoolName: 'Trường TH - THCS Ia Chim',
      location: 'La Chim, Kon Tum',
    },
    {
      year: 2022,
      title: 'GIÁO DỤC CỘNG ĐỒNG X MÔI TRƯỜNG BỀN VỮNG',
      schoolName: 'Trường TH - THCS Ia Chim',
      location: 'La Chim, Kon Tum',
    },
    {
      year: 2023,
      title: 'GIÁO DỤC X VĂN HÓA X KHỞI NGHIỆP',
      schoolName: 'Trường PTDTBT THCS Lao Chải',
      location: 'Lao Chải, Lào Cai',
    },
    {
      year: 2024,
      title: 'GIÁO DỤC X VĂN HÓA X PHÁT TRIỂN BẢN THÂN',
      schoolName: 'Trường PTDTBT THCS San Sả Hồ',
      location: 'San Sả Hồ, Lào Cai',
    },
  ];

  ngOnInit() {
    this.generateYears();
    this.animateLine();
  }

  // Generate the years dynamically
  generateYears() {
    this.years = Array.from({ length: this.numberOfYears }, (_, i) => this.startYear + i);
  }

  // Get the color for the given index (cycles through the colors array)
  getColor(index: number): string {
    return this.colors[index % this.colors.length];
  }

  // Animate the height of the vertical line
  animateLine() {
    setTimeout(() => {
      this.lineHeight = (this.numberOfYears - 1) * 150; // Adjust for spacing (150px per year)
    }, 500);
  }
}

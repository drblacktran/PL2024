import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProgramsComponent} from "../programs/programs.component";
import {SponsorComponent} from "../sponsor/sponsor.component";
import {DividerModule} from "primeng/divider";
import {CarouselModule} from "primeng/carousel";
import {Button} from "primeng/button";

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
    CarouselModule,
    Button
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


  groups = [
    { name: 'BoAs' },
    { name: 'Tài Nguyên' },
    { name: 'Chương Trinh' },
    { name: 'Nhân Sự' },
    { name: 'Truyền Thông' },
    { name: 'Tài Chính' },
  ];

  cards = this.generateRandomizedCards(35);

  selectedGroup: number = -1; // -1 means all members
  filteredCards: any[] = [];
  currentPage: number = 0;
  cardsPerPage: number = 18; // 6x3 grid
  visibleCards: any[] = [];




  // Generate cards with numbers and random group assignments
  generateRandomizedCards(totalCards: number) {
    return Array.from({ length: totalCards }, (_, i) => ({
      number: i + 1, // Card number
      group: Math.floor(Math.random() * 6), // Random group (0-5)
    }));
  }

  // Select a group and reset pagination
  selectGroup(groupIndex: number) {
    this.selectedGroup = groupIndex;
    if (groupIndex === -1) {
      this.filteredCards = [...this.cards]; // Show all members
    } else {
      this.filteredCards = this.cards.filter((card) => card.group === groupIndex);
    }
    this.currentPage = 0; // Reset to first page
    this.updateVisibleCards();
  }

  // Update visible cards based on the current page
  updateVisibleCards() {
    const start = this.currentPage * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.visibleCards = this.filteredCards.slice(start, end);

    // Handle circular scrolling
    if (this.visibleCards.length < this.cardsPerPage) {
      const remaining = this.cardsPerPage - this.visibleCards.length;
      this.visibleCards = this.visibleCards.concat(
        this.filteredCards.slice(0, remaining)
      );
    }
  }

  // Go to the next page
  nextPage() {
    this.currentPage = (this.currentPage + 1) % Math.ceil(this.filteredCards.length / this.cardsPerPage);
    this.updateVisibleCards();
  }

  // Go to the previous page
  prevPage() {
    this.currentPage =
      (this.currentPage - 1 + Math.ceil(this.filteredCards.length / this.cardsPerPage)) %
      Math.ceil(this.filteredCards.length / this.cardsPerPage);
    this.updateVisibleCards();
  }
}

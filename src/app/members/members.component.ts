import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-members',
  standalone: true,
    imports: [
        Button,
        NgForOf
    ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  groups = [
    { name: 'BoAs' },
    { name: 'Tài Nguyên' },
    { name: 'Chương Trình' },
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

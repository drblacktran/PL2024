import {Component, HostListener} from '@angular/core';
import { Button } from 'primeng/button';
import {NgClass, NgForOf} from '@angular/common';
import { TitleComponent } from '../shared/title/title.component';
import * as membersData from '../../assets/data/members.json';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [Button, NgForOf, TitleComponent, NgClass],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss',
})
export class MembersComponent {
  members: any[] = [];
  groups: string[] = [];
  selectedGroup: string = 'Tất Cả';
  filteredCards: any[] = [];
  currentPage: number = 0;
  cardsPerPage: number = 12;
  visibleCards: any[] = [];
  totalPages: number = 0;

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.members = (membersData as any).members;

    // Remove duplicate entries
    this.members = this.members.filter(
      (member, index, self) =>
        index === self.findIndex((m) => m.name === member.name && m.group === member.group)
    );

    // Randomize the order of members
    this.members = this.members.sort(() => Math.random() - 0.5);

    // Dynamically create unique groups
    this.groups = Array.from(new Set(this.members.map((m) => m.group)));
    this.groups.unshift('Tất Cả'); // Add 'All' group to the beginning

    this.selectGroup('Tất Cả');
  }

  selectedGroupForStyling: string | null = null; // To store the clicked card's group

  // Function to set the selected group when clicking a card
  highlightGroup(groupName: string) {
    this.selectedGroupForStyling = groupName;
  }

  @HostListener('document:click', ['$event.target'])
  onDocumentClick(target: HTMLElement) {
    // Check if the clicked target or its parent has the 'card' class or data attribute
    const isCard = target.closest('[data-card="true"]');

    if (!isCard) {
      this.selectedGroupForStyling = null; // Unselect all if clicked outside a valid card
    }
  }

  selectGroup(groupName: string) {
    this.selectedGroup = groupName;

    if (groupName === 'Tất Cả') {
      this.filteredCards = [...this.members];
    } else {
      this.filteredCards = this.members.filter((member) => member.group === groupName);
    }

    this.currentPage = 0;
    this.totalPages = Math.ceil(this.filteredCards.length / this.cardsPerPage);
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    const start = this.currentPage * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.visibleCards = this.filteredCards.slice(start, end);
  }

  nextPage() {
    this.currentPage = (this.currentPage + 1) % this.totalPages;
    this.updateVisibleCards();
  }

  prevPage() {
    this.currentPage = (this.currentPage - 1 + this.totalPages) % this.totalPages;
    this.updateVisibleCards();
  }

  getPaginationIndicator(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i);
  }
}

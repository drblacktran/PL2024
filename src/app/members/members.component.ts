import { Component } from '@angular/core';
import {Button} from "primeng/button";
import {NgForOf} from "@angular/common";
import {TitleComponent} from "../shared/title/title.component";
import * as membersData from "../../assets/data/members.json"

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [
    Button,
    NgForOf,
    TitleComponent
  ],
  templateUrl: './members.component.html',
  styleUrl: './members.component.scss'
})
export class MembersComponent {
  members: any[] = [];
  groups: string[] = [];
  selectedGroup: string = 'Tất Cả';
  filteredCards: any[] = [];
  currentPage: number = 0;
  cardsPerPage: number = 18;
  visibleCards: any[] = [];

  ngOnInit(): void {
    this.loadMembers();
  }

  loadMembers() {
    this.members = (membersData as any).members;

    // Dynamically create unique groups
    this.groups = Array.from(new Set(this.members.map((m) => m.group)));
    this.groups.unshift('Tất Cả'); // Add 'All' group to the beginning

    this.selectGroup('Tất Cả');
  }

  selectGroup(groupName: string) {
    this.selectedGroup = groupName;

    if (groupName === 'Tất Cả') {
      this.filteredCards = [...this.members];
    } else {
      this.filteredCards = this.members.filter((member) => member.group === groupName);
    }

    this.currentPage = 0;
    this.updateVisibleCards();
  }

  updateVisibleCards() {
    const start = this.currentPage * this.cardsPerPage;
    const end = start + this.cardsPerPage;
    this.visibleCards = this.filteredCards.slice(start, end);

    if (this.visibleCards.length < this.cardsPerPage) {
      const remaining = this.cardsPerPage - this.visibleCards.length;
      this.visibleCards = this.visibleCards.concat(this.filteredCards.slice(0, remaining));
    }
  }

  nextPage() {
    this.currentPage = (this.currentPage + 1) % Math.ceil(this.filteredCards.length / this.cardsPerPage);
    this.updateVisibleCards();
  }

  prevPage() {
    this.currentPage =
      (this.currentPage - 1 + Math.ceil(this.filteredCards.length / this.cardsPerPage)) %
      Math.ceil(this.filteredCards.length / this.cardsPerPage);
    this.updateVisibleCards();
  }
}

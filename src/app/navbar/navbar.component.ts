import { Component } from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {Tooltip, TooltipModule} from "primeng/tooltip";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PrimeTemplate,
    ButtonDirective,
    RouterLink,
    MenubarModule,
    Ripple,
    TooltipModule,
    NgForOf,
    NgClass,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  navButtons = [
    { label: 'Về Phiêu Linh', link: 'about' },
    { label: 'Chương Trình Hoạt Động', link: 'programs' },
    { label: 'Tài Trợ', link: 'sponsor' },
    { label: 'Tin Tức', link: 'events' },
    { label: 'Liên Hệ', link: 'contacts' },
  ];

  scrollTo(section: string): void {
    const element = document.getElementById(section);
    const navbarHeight = 60; // Navbar height here (adjust as needed)

    if (element) {
      const yOffset = -navbarHeight; // Negative offset to account for navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }

  currentLanguage: string = 'VN';
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'VN' ? 'US' : 'VN';
  }

  isHovered = [false, false, false, false, false]; // Array to store hover state of each button


  // Dynamically gets the flag image URL

  getFlagUrl(): string {
    return `https://flagsapi.com/${this.currentLanguage}/flat/64.png`;
  }
}

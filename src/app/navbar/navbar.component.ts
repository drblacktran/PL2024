import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";
import {ScrollService} from "../shared/scroll/scroll.service";

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


  activeSection: string | null = null; // Currently active section
  clickedSection: string | null = null; // Section clicked manually by user

  constructor(private scrollService: ScrollService) {}

  // Smooth scroll to a section and lock hover effect
  scrollTo(sectionId: string): void {


    const navbarHeight = 60; // Adjust for fixed navbar height
    this.scrollService.scrollToSection(sectionId, navbarHeight);
  }

  scrollProgress: number = 0;



  // HostListener to track scroll position
  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    this.scrollProgress = (scrollTop / docHeight) * 100;
  }

  navButtons = [
    { label: 'Về Phiêu Linh', link: 'about' },
    { label: 'Chương Trình Hoạt Động', link: 'programs' },
    { label: 'Tài Trợ', link: 'sponsor' },
    { label: 'Tin Tức', link: 'events' },
    { label: 'Liên Hệ', link: 'contacts' },
  ];


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

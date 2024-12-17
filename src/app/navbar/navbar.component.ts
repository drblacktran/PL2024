import {Component, HostListener} from '@angular/core';
import {NgClass, NgForOf, NgOptimizedImage} from "@angular/common";
import {PrimeTemplate} from "primeng/api";
import {ButtonDirective} from "primeng/button";
import {RouterLink} from "@angular/router";
import {MenubarModule} from "primeng/menubar";
import {Ripple} from "primeng/ripple";
import {TooltipModule} from "primeng/tooltip";

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

  ngOnInit(): void {
    this.setupIntersectionObserver();
  }

  // Smooth scroll to a section and lock hover effect
  scrollTo(sectionId: string): void {
    const element = document.getElementById(sectionId);

    const navbarHeight = 60; // Navbar height here (adjust as needed)

    if (element) {
      const yOffset = -navbarHeight; // Negative offset to account for navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });

      this.clickedSection = sectionId; // Lock the effect
    }
  }

  // Intersection Observer to track active sections
  setupIntersectionObserver(): void {
    const options = {
      root: null,
      rootMargin: '-20% 0px -50% 0px', // Focus on the above section visibility
      threshold: 0.1, // Trigger when a section is 10% visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !this.clickedSection) {
          const sectionId = entry.target.id;

          // Highlight sections starting from "about"
          if (sectionId !== 'hero') {
            this.activeSection = sectionId;
          }

          // Force "contacts" if the footer is visible
          if (sectionId === 'footer') {
            this.activeSection = 'contacts';
          }
        }
      });
    }, options);

    // Observe specific sections only
    const sectionIds = ['about', 'programs', 'sponsor', 'events', 'contacts', 'footer'];
    sectionIds.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    // Reset manual highlight on scroll
    window.addEventListener('scroll', () => {
      if (this.clickedSection) {
        setTimeout(() => (this.clickedSection = null), 50);
      }
    });
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

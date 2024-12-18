import {Component, HostListener, Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser, NgClass, NgForOf, NgIf, NgStyle} from "@angular/common";
import {ScrollService} from "../shared/scroll/scroll.service";

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    NgStyle,
    NgIf
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.scss'
})
export class HeroComponent {
  heroImages: string[] = [
    'https://via.placeholder.com/1920x600?text=Hero+Image+1',
    'https://via.placeholder.com/1920x600?text=Hero+Image+2',
    'https://via.placeholder.com/1920x600?text=Hero+Image+3'
  ];

  // Motto Texts
  motto = {
    description: `“Mọi trẻ em và thanh thiếu niên Việt Nam đều là những cá nhân hạnh phúc
                  và những công dân tử tế.”`
  };

  currentImageIndex: number = 0;

  screenWidth: number = 0;
  minScreenWidthEffect: number = 1120;
  isBrowser: boolean = false; // To check if the app is running in the browser


  constructor(@Inject(PLATFORM_ID) private platformId: object, private scrollService: ScrollService) {
    // Check if running in the browser
    this.isBrowser = isPlatformBrowser(this.platformId);

    if (this.isBrowser) {
      this.screenWidth = window.innerWidth; // Access `window` only in the browser
    }
  }

  ngOnInit(): void {
    if (this.isBrowser) {
      this.setAutoImageSwitch();
      this.checkScreenWidth();
    }
  }

  private setAutoImageSwitch(): void {
    if (this.isBrowser) {
      setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.heroImages.length;
      }, 10000);
    }
  }


  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenWidth();

  }

  private checkScreenWidth() {
    this.screenWidth = window.innerWidth;
  }

  scrollToSection(sectionId: string): void {
    const navbarHeight = 60; // Adjust for fixed navbar height
    this.scrollService.scrollToSection(sectionId, navbarHeight);
  }


}

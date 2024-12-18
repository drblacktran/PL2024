import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // Makes it a singleton available throughout the app
})
export class ScrollService {
  /**
   * Smoothly scroll to a section with an optional offset (e.g., for fixed headers).
   * @param sectionId ID of the target section
   * @param offset Optional offset to account for headers or other fixed elements
   */
  scrollToSection(sectionId: string, offset: number = 0): void {
    const element = document.getElementById(sectionId);

    if (element) {
      const yOffset = -offset; // Adjust for offset
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  }
}

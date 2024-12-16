import { Component } from '@angular/core';
import {NgForOf, NgOptimizedImage} from "@angular/common";
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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {


  navButtons = [
    { label: 'Về Phiêu Linh' },
    { label: 'Chương Trình Hoạt Động' },
    { label: 'Tài Trợ' },
    { label: 'Tin Tức' },
    { label: 'Liên Hệ' },
  ];

  currentLanguage: string = 'VN';
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'VN' ? 'US' : 'VN';
  }


  // Dynamically gets the flag image URL
  getFlagUrl(): string {
    return `https://flagsapi.com/${this.currentLanguage}/flat/64.png`;
  }
}

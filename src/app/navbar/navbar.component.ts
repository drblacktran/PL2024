import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
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
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentLanguage: string = 'VN';
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'VN' ? 'US' : 'VN';
  }


  // Dynamically gets the flag image URL
  getFlagUrl(): string {
    return `https://flagsapi.com/${this.currentLanguage}/flat/64.png`;
  }
}

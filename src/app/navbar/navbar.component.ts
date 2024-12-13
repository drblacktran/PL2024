import { Component } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {MatToolbar} from "@angular/material/toolbar";
import {MatRipple} from "@angular/material/core";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MatToolbar,
    MatRipple
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  currentLanguage: string = 'VN';
  toggleLanguage() {
    this.currentLanguage = this.currentLanguage === 'VN' ? 'US' : 'VN';
  }
}

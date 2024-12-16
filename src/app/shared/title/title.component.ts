import { Component, Input } from '@angular/core';
import {NgClass, NgStyle} from "@angular/common";

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [
    NgStyle,
    NgClass
  ],
  templateUrl: './title.component.html',
  styleUrl: './title.component.scss'
})
export class TitleComponent {
  @Input() itemsAlignment: string = 'items-center'; // Alignment for flex items
  @Input() borderColor: string = '#999999'; // Default border color
  @Input() backgroundColor: string = '#ffffff'; // Default background color
  @Input() textColor: string = '#555555'; // Default text color
  @Input() fontSize: string = '17px'; // Default font size
  @Input() label: string = 'Title'; // Default title
}

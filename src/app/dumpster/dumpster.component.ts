import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {NgForOf, NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-dumpster',
  standalone: true,
  imports: [
    DividerModule,
    NgForOf,
    NgIf,
    NgStyle
  ],
  templateUrl: './dumpster.component.html',
  styleUrl: './dumpster.component.scss'
})
export class DumpsterComponent {

}

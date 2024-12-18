import { Component } from '@angular/core';
import {TitleComponent} from "../shared/title/title.component";
import {NewsComponent} from "../news/news.component";

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [
    TitleComponent,
    NewsComponent
  ],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent {

}

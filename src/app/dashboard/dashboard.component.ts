import { Component } from '@angular/core';
import {NgForOf, NgIf, NgStyle} from "@angular/common";
import {ProgramsComponent} from "../programs/programs.component";
import {SponsorComponent} from "../sponsor/sponsor.component";
import {DividerModule} from "primeng/divider";
import {CarouselModule} from "primeng/carousel";
import {Button} from "primeng/button";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {ContactsComponent} from "../contacts/contacts.component";
import {MembersComponent} from "../members/members.component";
import {CultureComponent} from "../culture/culture.component";
import {MilestonesComponent} from "../milestones/milestones.component";
import {EventsComponent} from "../events/events.component";
import {StrategyComponent} from "../strategy/strategy.component";
import {TitleComponent} from "../shared/title/title.component";
import {AboutUsComponent} from "../about-us/about-us.component";

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    NgStyle,
    NgForOf,
    ProgramsComponent,
    SponsorComponent,

    ContactsComponent,
    MembersComponent,
    CultureComponent,
    MilestonesComponent,
    EventsComponent,
    StrategyComponent,
    TitleComponent,
    AboutUsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}

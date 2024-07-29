import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AppHeaderComponent} from "./layouts/header/header.component";
import {CategoryNavbarComponent} from "./layouts/category-navbar/category-navbar.component";
import {FooterComponent} from "./layouts/footer/footer.component";
import {PostCardComponent} from "./layouts/post-card/post-card.component";
import {SubscriptionFormComponent} from "./subscription-form/subscription-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AppHeaderComponent,
    CategoryNavbarComponent,
    FooterComponent,
    PostCardComponent,
    SubscriptionFormComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-blog-app';
}

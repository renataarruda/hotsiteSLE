import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LeadFormComponent } from './lead-form/lead-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    LeadFormComponent
  ],
})
export class AppComponent {
  title = 'hotsiteSLE';
}

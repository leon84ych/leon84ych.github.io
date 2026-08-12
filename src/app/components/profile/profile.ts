import { Component, ViewEncapsulation } from '@angular/core';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MarkdownComponent],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css'],
  encapsulation: ViewEncapsulation.None // <-- Add this line
})
export class Profile {
  // Your profile data JSON structure
  readmeUrl = 'https://raw.githubusercontent.com/leon84ych/leon84ych.github.io/refs/heads/main/README.md';
}

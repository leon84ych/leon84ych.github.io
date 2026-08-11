import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Required for data binding

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrls: ['./profile.css']
})
export class Profile {
  // Your profile data JSON structure
  profileData = {
    avatarUrl: 'images/profile.jpeg',
    fullName: 'Leon Camilo Suarez Lopez',
    currentRole: 'Software Engineer',
    biography: '',
    
    // Key-value pairs for scannable grid info
    details: [
      { label: 'Ubicación', text: 'Bogota, Colombia' },
      { label: 'Experiencia', text: '12+ Años' },
      { label: 'Availability', text: 'Open to Opportunities' },
      { label: 'Trabajando en', text: 'Angular & Frontend Systems' }
    ]
  };
}

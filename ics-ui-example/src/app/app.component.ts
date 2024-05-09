import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  user = { email: '' };

  navigateToIcs() {
    // Save user email to localStorage
    localStorage.setItem('email', this.user.email);

    // Set window name with email as JSON
    window.name = JSON.stringify({ email: localStorage.getItem('email') });

    // Redirect to the specified URL
    window.location.href = 'http://localhost:3200';
  }
}

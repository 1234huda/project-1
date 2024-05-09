import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'vandura-ui-example';

  ngOnInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      // Get data from window.name
      if (window.name) {
        const receivedData = JSON.parse(window?.name);
        // Store the received data in local storage of Domain 2
        if (receivedData.email) {
          localStorage.setItem('email', receivedData.email);
        }
        // Clear the window.name to prevent data leakage
        window.name = '';
      }
    });
  }
}

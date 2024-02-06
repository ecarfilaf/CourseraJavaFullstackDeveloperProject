import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
	title = 'Coursera Java Frontend v02';
	today = new Date().getFullYear();
}

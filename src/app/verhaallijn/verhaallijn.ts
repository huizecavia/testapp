import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-verhaallijn',
  imports: [FormsModule, RouterOutlet, RouterLink],
  templateUrl: './verhaallijn.html',
  styleUrl: './verhaallijn.css',
})
export class Verhaallijn {
  selectedDestination: string = '';

  constructor(private router: Router) {}

}

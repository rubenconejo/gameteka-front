import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { UsersComponent } from './components/users/users.component';
import { NavbarComponent } from './components/navbar/navbar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersComponent, NgFor, RouterLink, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-juegos';
}

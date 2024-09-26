import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Router, AuthService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe((res: { token: string; }) => {
      // Guardar el token JWT y redirigir al dashboard
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    }, (err: any) => {
      console.error(err);
    });
  }
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service'; // Servicio de autenticación
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  name: string = '';
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onRegister() {
    this.authService.register(this.name, this.email, this.password).subscribe((res: { token: string; }) => {
      // Guardar el token JWT y redirigir al dashboard
      localStorage.setItem('token', res.token);
      this.router.navigate(['/dashboard']);
    }, (err:any) => {
      console.error(err);
    });
  }

}

import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  email = '';
  password = '';
  successMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onRegister() {
    const newUser = this.auth.register(this.email, this.password);
    this.successMessage = `Account created for ${newUser.email}!`;
    this.email = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}
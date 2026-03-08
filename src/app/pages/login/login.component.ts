import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.template.html',
  styleUrls: ['./login.styles.css'],
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin() {
    const success = this.auth.login(this.email, this.password);
    if (success) {
      this.errorMessage = '';
      this.router.navigate(['/home']);
    } else {
      this.errorMessage = 'Invalid email or password.';
    }
  }
}
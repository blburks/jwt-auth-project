import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.template.html',
  styleUrls: ['./navbar.styles.css'],
})

export class NavbarComponent {

  role: string | null = null;
  loggedIn = false;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.role = this.auth.getUserRole();
    this.loggedIn = this.auth.isLoggedIn();
}

  logout() {
    this.auth.logout();
    window.location.href = '/login';
  }
}

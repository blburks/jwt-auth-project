import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  templateUrl: './admin.template.html',
  styleUrls: ['./admin.styles.css'],
})
export class AdminComponent {
    
  role: string | null = null;

  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.role = this.auth.getUserRole();
  }
}
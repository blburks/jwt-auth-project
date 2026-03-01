import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  templateUrl: './dashboard.template.html',
  styleUrls: ['./dashboard.styles.css'],
})
export class DashboardComponent {
    
  role: string | null = null;
  
  constructor(private auth: AuthService) {}
  
  ngOnInit() {
    this.role = this.auth.getUserRole();
  }
}
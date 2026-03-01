import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.template.html',
  styleUrls: ['./home.styles.css'],
})
export class HomeComponent {
    
  role: string | null = null;
  
  constructor(private auth: AuthService) {}

  ngOnInit() {
    this.role = this.auth.getUserRole();
  }
}
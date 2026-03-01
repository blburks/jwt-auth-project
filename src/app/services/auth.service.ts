import { Injectable } from '@angular/core';
import { AuthMockServerService } from './auth-mock-server.service';'

@Injectable({
  providedIn: 'root',
})
export class AuthService {
    
  private tokenKey = 'auth_token';
  
  constructor(private mockServer: AuthMockServerService) {}
  
  // REGISTER
  register(email: string, password: string) {
    return this.mockServer.register(email, password);
  }

  // LOGIN
  login(email: string, password: string): boolean {
    const token = this.mockServer.login(email, password);

    if (!token) return false;

    localStorage.setItem(this.tokenKey, token);
    return true;
  }

  // LOGOUT
  logout() {
    localStorage.removeItem(this.tokenKey);
  }

  // GET TOKEN 
  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // DECODE TOKEN 
  private decodeToken(): any | null {
    const token = this.getToken();
    if (!token) return null;

    try {
      return JSON.parse(atob(token));
    } catch {
      return null;
    }
  }

  // CHECK LOGIN STATUS 
  isLoggedIn(): boolean {
    const payload = this.decodeToken();
    if (!payload) return false;

    return payload.exp > Date.now();
  }

  // GET USER ROLE 
  getUserRole(): string | null {
    const payload = this.decodeToken();
    return payload ? payload.role : null;
  }
}

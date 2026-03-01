import { Injectable } from '@angular/core';


export interface User {
  id: number;
  email: string;
  passwordHash: string;
  role: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthMockServerService {
  
  private users: User[] = [
    {
      id: 1,
      email: 'admin@test.com',
      passwordHash: btoa('admin123'),
      role: 'admin',
    },
  ];
  
  private hashPassword(password: string): string {
    return btoa(password);
  }

  register(email: string, password: string) {
    const newUser: User = {
      id: this.users.length + 1,
      email,
      passwordHash: this.hashPassword(password),
      role: 'user',
    };
    
    this.users.push(newUser);
    return newUser;
  }
  
  login(email: string, password: string) {
    const hash = this.hashPassword(password);

    const user = this.users.find(
      (u) => u.email === email && u.passwordHash === hash 
    );

    if (!user) return null;

    return this.generateToken(user);
  }

  private generateToken(user: User): string {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
      exp: Date.now() + 1000 * 60 * 60 // 1 hour expiration 
    };

    return btoa(JSON.stringify(payload));
  }
}
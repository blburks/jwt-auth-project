# JWT Auth Project

A mock JWT authentication application built with Angular 17+.
Developed as part of the Software Development program at Bates Technical College.

## Features

- User registration with mock backend
- User login with mock JWT token generation
- Role-based access control (admin vs user)
- Protected routes using Angular Guards
- Auto logout on token expiration
- Navbar that updates based on login state

## Test Credentials

An admin account is pre-loaded for testing:

- **Email:** admin@test.com
- **Password:** admin123

## Project Structure
```
src/app/
├── components/
│   └── navbar/          # Navigation bar with role-aware links
├── pages/
│   ├── login/           # Login page
│   ├── register/        # Register page
│   ├── home/            # Home page (protected)
│   ├── dashboard/       # Dashboard (protected)
│   └── admin/           # Admin panel (admin only)
└── services/
    ├── auth.service.ts            # Handles login, register, token management
    ├── auth-mock-server.service.ts # Simulates a backend API
    ├── auth.guard.ts              # Protects authenticated routes
    └── admin.guard.ts             # Protects admin-only routes
```

## Development Server

To start a local development server, run:
```
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`.

## Build

To build the project run:
```
ng build
```

## Running Unit Tests
```
ng test
```

## Technologies Used

- Angular 17+
- TypeScript
- Angular Router
- Angular Guards
- Mock JWT Authentication
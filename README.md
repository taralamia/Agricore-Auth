# AgriCore Authentication & RBAC System
![GitHub license](https://img.shields.io/github/license/Sk-Azraf-Sami/hands-on-volunteering-platform)
![GitHub last commit](https://img.shields.io/github/last-commit/taralamia/Agricore-Auth)
![GitHub repo size](https://img.shields.io/github/repo-size/taralamia/Agricore-Auth)
![GitHub contributors](https://img.shields.io/github/contributors/taralamia/Agricore-Auth)
![GitHub pull requests](https://img.shields.io/github/issues-pr/taralamia/Agricore-Auth)
![GitHub top language](https://img.shields.io/github/languages/top/taralamia/Agricore-Auth)
## Project Overview
AgriCore is a farm management platform currently under development.

This repository focuses on building the authentication system and role-based access control (RBAC) that will power the platform.

The backend provides:
- secure user authentication
- JWT-based authorization
- Google OAuth login
- Role-based access control for Admin and Customer users
The frontend is currently under active development and integrates with the authentication APIs.
## Key Features

### Authentication
- User Registration
- User Login
- JWT Authentication
- Google OAuth (Passport.js)
- Role-Based Access Control
### Security
- Password hashing
- JWT token validation
- Protected API routes

### Frontend (Work in Progress)
- Farm-themed login UI
- Role-based dashboard navigation
- Responsive card layout
### Components
- **Routes**: Define API endpoints
- **Controllers**: Handle request/response logic
- **Services**: Business logic and validation
- **Middleware**:
  - Authentication
  - Role-based access control
- **Database**: PostgreSQL

  - Admin role
  - Customer role
- Role-based dashboard routing
## API Overview
[Ref: [Postman Collection](backend/Agricore-Auth.postman_collection.json )] 

**Base URL:** `/api`

### Register User
`POST /api/auth/register`

**Example request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```
### Login
`POST /api/auth/login`

**Example request:**
```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN",
  "user": {
    "id": "uuid",
    "name": "Admin",
    "email": "admin@agricore.com",
    "role": "ADMIN"
  }
}
```
### Google OAuth
`POST /api/auth/google`
Authenticates users using Google OAuth via Passport.js.
## Setup Instructions
1. Clone the repository:
  ```
   git clone https://github.com/yourusername/Agricore-Auth.git
   ```
2. Navigate to the project directory and install dependencies:
    ```
   cd Agricore-Auth
   npm install
   ```
3. Navigate to the backend directory and install dependencies:
   ```
   cd backend
   npm install
   ```
4. Create a `.env` file
   Example:
   ```
   PORT=5000
   DATABASE_URL=postgresql://user:password@localhost:5432/agricore
   JWT_SECRET=your_secret
   GOOGLE_CLIENT_ID=your_google_id
   GOOGLE_CLIENT_SECRET=your_google_secret
   ```
5. Start the backend server:
   ```
    npm run dev
   ```
6. Navigate to the frontend directory and install dependencies:
   ```
    cd ../frontend
    npm install
   ```
7. Start the frontend application:
   ```
    npm run dev
   ```
## Project Roadmap
###  Completed
- JWT authentication
- Google OAuth login
- Role-based access control
- Admin & customer dashboard routing
- Farm-themed login UI

### In Progress
- Frontend dashboard implementation
- API integration with frontend

### Planned
- Admin farm management features
- Customer activity dashboard
- Farm analytics
## Frontend Status

The frontend is currently under development.

**Implemented so far:**
- Login page
- Authentication integration
- Role-based navigation
- Farm-themed UI

## License

This project is licensed under the MIT License.

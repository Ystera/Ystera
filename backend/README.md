# Backend API for Ystera

This is the backend API for the Ystera project, built with TypeScript, Hono, and Drizzle ORM.

## Table of Contents

- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Database Migrations](#database-migrations)
- [License](#license)

---

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

   ```bash
   bun install
   ```

3. Set up environment variables:

   - Create `.dev.vars` file.
   - Update the values for `DATABASE_URL` and `JWT_SECRET` as needed.

4. Run the development server:
   ```bash
   bun run dev
   ```

---

## Environment Variables

The following environment variables are required for the project:

- `DATABASE_URL`: The connection string for the PostgreSQL database.
- `JWT_SECRET`: The secret key used for signing JWT tokens.

Example `.env` file:

```env
DATABASE_URL=postgresql://username:password@host:port/database?sslmode=require
JWT_SECRET=your_jwt_secret
```

---

## Scripts

The following scripts are available in the `package.json`:

- **Start Development Server**:

  ```bash
  bun run dev
  ```

  Runs the development server using Wrangler.

- **Deploy to Production**:

  ```bash
  bun run deploy
  ```

  Deploys the application to Cloudflare Workers.

- **Generate Database Schema**:

  ```bash
  bun run db:generate
  ```

  Generates the database schema using Drizzle Kit.

- **Run Database Migrations**:

  ```bash
  bun run db:migrate
  ```

  Applies database migrations.

---

## Project Structure

```
src/
├── db/                 # Database schema and migrations
├── lib/                # Utility libraries
├── middlewares/        # Middleware functions
├── modules/            # Feature modules (e.g., auth)
├── routes/             # API route definitions
├── types/              # TypeScript type definitions
└── index.ts            # Entry point of the application
```

---

## API Endpoints

### Authentication

- **Register**: `POST /api/auth/register`

  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "username": "username",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "error": false,
      "message": "User created successfully",
      "data": { ... }
    }
    ```

- **Login**: `POST /api/auth/login`

  - Request Body:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - Response:
    ```json
    {
      "error": false,
      "message": "Login successful",
      "data": {
        "user": "user@example.com",
        "token": "jwt_token"
      }
    }
    ```

- **Get Current User**: `GET /api/auth/me`
  - Headers:
    ```
    Authorization: Bearer <jwt_token>
    ```
  - Response:
    ```json
    {
      "error": false,
      "message": "OK",
      "data": { ... }
    }
    ```

---

## Database Migrations

This project uses Drizzle ORM for database migrations.

- **Generate Migration**:

  ```bash
  bun run db:generate
  ```

- **Apply Migrations**:

  ```bash
  bun run db:migrate
  ```

- **Push Schema**:
  ```bash
  bun run db:push
  ```

The migration files are located in `src/db/migrations`.

---

## License

This project is licensed under the MIT License.

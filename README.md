# Next.js authentication

This project demonstrates authentication system built with **Next.js**.

## Features

- **Account Creation**: Users can create accounts with secure password storage using bcrypt.
- **Login**: Supports traditional email/password and Google login through NextAuth.
- **Password Reset**: Users can request a password reset via email, implemented using Resend.
- **Session Management**: Sessions are managed via **NextAuth.js** using cookies and JSON Web Tokens (JWT). Middleware ensures secure access to protected routes and redirects unauthenticated users to the login page.
- **Validation**: Form inputs are validated with Zod and react-hook-form for better UX.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) (v15.0.3)
- **Database**: [Prisma](https://www.prisma.io)
- **Authentication**: [NextAuth.js](https://next-auth.js.org)
- **CSS**: [Tailwind CSS](https://tailwindcss.com)
- **Form Handling**: [React Hook Form](https://react-hook-form.com)
- **Encryption**: [bcryptjs](https://github.com/dcodeIO/bcrypt.js)
- **Validation**: [Zod](https://zod.dev)

## Environment Variables

The project requires several environment variables to function correctly. Create a `.env` file in the root directory and add the following:

```plaintext
# NextAuth Secret
AUTH_SECRET=your_auth_secret_here

# Prisma Database URLs
# Main connection string for your database (Neon PostgreSQL is used here)
DATABASE_URL=your_main_database_url_here
# Optional: Unpooled connection string for specific use cases
DATABASE_URL_UNPOOLED=your_unpooled_database_url_here

# Google OAuth Credentials
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here

# Resend API Key (for email handling)
RESEND_API_KEY=your_resend_api_key_here
```

## Install dependencies

Note: This project is built with Next.js v15.0.3, and some packages may require specific peer dependencies. To ensure compatibility, install all peer dependencies as prompted during the installation process.

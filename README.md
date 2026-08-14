# Lumina Creative Studio — Premium Website + Admin CMS

A functional sample business website and CMS built from the supplied MASTER PROMPT. Lumina Creative Studio is intentionally fictional so real business facts, client logos, testimonials, awards, and metrics are not fabricated.

## Stack
- Node.js + Express
- SQLite via better-sqlite3
- EJS server-rendered frontend/admin UI
- Express session authentication
- bcrypt password hashing
- Helmet security headers
- Rate limiting on authentication/public forms
- Multer image upload handling
- Nodemailer-ready transactional email integration

## Included
- Premium responsive public website
- Home, About, Services, Service detail, Work, Blog, Blog detail, Contact, Booking, 404
- Admin dashboard
- Authentication and roles: owner, administrator, editor
- Pages CMS with draft/published status and SEO metadata
- Services CRUD
- Blog CRUD with draft/publish and SEO fields
- Media library with image uploads and alt text
- Lead management and statuses/notes
- Booking management and statuses
- Central site settings
- User management
- Global admin search
- Dynamic sitemap.xml and robots.txt
- Public forms stored in SQLite
- Optional SMTP notification structure
- Reduced-motion support
- Mobile admin layout

## Run locally
1. Install Node.js 18+.
2. Copy `.env.example` to `.env`.
3. Set a strong `SESSION_SECRET`, `ADMIN_EMAIL`, and `ADMIN_PASSWORD`.
4. Run `npm install`.
5. Run `npm start`.
6. Open `http://localhost:3000`.
7. Open `http://localhost:3000/admin/login` for the CMS.

The database is created automatically at `data/lumina.db` on first run.

## Demo defaults
If no environment variables are supplied:
- Email: `admin@lumina.local`
- Password: `ChangeMe123!`

Change these before any real deployment.

## Email
Set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_FROM, and ADMIN_EMAIL to enable admin email notifications for new leads/bookings.

## Production hardening still required
Before deploying to a public production environment, add HTTPS, a persistent session store, secure cookie settings, a reverse proxy, stronger CSRF protection for the chosen deployment architecture, backups, monitoring, image optimization/CDN, and a real transactional email provider. The application is a substantial functional sample foundation, not a claim that every production infrastructure control has been provisioned in this sandbox.

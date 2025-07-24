# Hono-Drizzle-Neon-Better Auth

### Hono Better Auth
`https://hono.dev/examples/better-auth-on-cloudflare`
`https://www.better-auth.com/docs/integrations/hono`

```bash
# Hono
# > Select cloudflare-workers template
bun create hono

# Better Auth
bun add better-auth

# Drizzle ORM
bun add drizzle-orm
bun add -d drizzle-kit

# Neon
bun add @neondatabase/serverless

```

`bunx @better-auth/cli@latest generate --config ./better-auth.config.ts --output ./src/db/schema.ts`  -> change schema.ts with proper file

```bash
bunx drizzle-kit generate
bunx drizzle-kit migrate
```

```bash
- basePath	/api/auth
- Sign-up (email)	/api/auth/sign-up/email
- Sign-in (email)	/api/auth/sign-in/email
- Social Sign-in	/api/auth/sign-in/social/{provider}
- Email verification	/api/auth/verify-email
- Magic link / OTP	/api/auth/sign-in/email-otp, etc.
- session  /api/auth/get-session
```

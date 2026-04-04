# Centafold

## cPanel deployment (Git Version Control)

This project is configured for cPanel Git deployment using `.cpanel.yml`.

### Requirements

- Node.js available on the cPanel server
- npm available at `/usr/local/bin/npm`
- Repository connected in **cPanel → Git Version Control**

### Deploy steps

1. Push your latest changes to your Git remote branch (`main` in your setup).
2. In cPanel, open your repository under **Git Version Control**.
3. Click **Update from Remote**.
4. Click **Deploy HEAD Commit**.

The deployment task will:

- install dependencies (`npm ci`)
- build the app (`npm run build`)
- copy the built files from `dist/` to `public_html/`

### Notes

- cPanel will only deploy if there are no uncommitted changes on the checked-out branch.
- cPanel also requires a valid `.cpanel.yml` file at the repository root.
- SPA routing fallback is handled by `public/.htaccess` and will be copied into `dist/` during build.

# IAMNerds website — Azure Static Web Apps

Static site in `public/`, contact form API as a Node.js Azure Function in `api/`.

```
public/                        Website (deployed as static files)
  index.html  css/  js/        Home page, styles, zero-gravity + contact form script
  impressum.html  datenschutz.html  404.html  favicon.svg
  staticwebapp.config.json     Routes, 404 page, security headers, Node 20 for the API
api/                           Azure Function (managed by Static Web Apps)
  src/functions/contact.js     POST /api/contact → emails hello@iamnerds.io
  package.json  host.json
  local.settings.example.json  Template for local settings
```

## Deploy from GitHub

1. Push this folder's contents to the root of your GitHub repo.
2. In your workflow file (`.github/workflows/azure-static-web-apps-*.yml`, created by Azure), set the build section to:

   ```yaml
   app_location: "public"
   api_location: "api"
   output_location: ""
   ```

3. Commit. The GitHub Action deploys the site and the API together.

## Make the form email hello@iamnerds.io

Azure portal → your Static Web App → **Settings → Environment variables** → add for the Production environment:

| Name          | Value                                   |
|---------------|-----------------------------------------|
| `SMTP_HOST`   | e.g. `smtp.office365.com`               |
| `SMTP_PORT`   | `587` (or `465` with `SMTP_SECURE=true`) |
| `SMTP_SECURE` | `false`                                 |
| `SMTP_USER`   | `hello@iamnerds.io`                     |
| `SMTP_PASS`   | the mailbox password or app password    |
| `CONTACT_TO`  | `hello@iamnerds.io` (default, optional) |
| `MAIL_FROM`   | `hello@iamnerds.io` (optional)          |

Save; no redeploy needed. Common SMTP hosts:

- Microsoft 365: `smtp.office365.com`, port 587. SMTP AUTH must be enabled for the mailbox (Microsoft 365 admin center → user → Mail → Manage email apps → Authenticated SMTP).
- Google Workspace: `smtp.gmail.com`, port 587, with an app password.
- IONOS: `smtp.ionos.de`, port 587. Strato: `smtp.strato.de`, port 465 with `SMTP_SECURE=true`.

If SMTP is missing, the API returns 503 and the form tells visitors to email hello@iamnerds.io directly. Errors show in the Function logs (Application Insights if connected).

## What the API does

- Validates name, email, message (10+ characters) and consent; returns field errors with HTTP 400.
- Drops bot submissions via a hidden honeypot field.
- Rate-limits to 5 messages per IP per 15 minutes per instance (HTTP 429).
- Emails the message to `CONTACT_TO` with Reply-To set to the sender.

## Run locally

```bash
npm install -g @azure/static-web-apps-cli azure-functions-core-tools@4
cd api && npm install && cp local.settings.example.json local.settings.json   # add SMTP_PASS
cd ..
swa start public --api-location api        # http://localhost:4280
```

## Before going live

- Fill in `public/impressum.html` and `public/datenschutz.html`.
- Add the SMTP environment variables above.
- Optional: add a custom domain (Static Web App → Custom domains) and self-host the Google Fonts for GDPR.

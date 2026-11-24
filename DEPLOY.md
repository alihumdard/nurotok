# Deploying nurotok.co.uk

The site builds to plain HTML and is served by nginx on the same VPS as
neurodigitalsupport.com (`147.93.84.9`). There is no Node process running in
production — `npm run build` writes `out/`, and nginx serves that directory.

## DNS

In Hostinger, under **Domains → nurotok.co.uk → DNS / Nameservers**:

| Type | Name  | Points to      | TTL  |
| ---- | ----- | -------------- | ---- |
| A    | `@`   | `147.93.84.9`  | 3600 |
| A    | `www` | `147.93.84.9`  | 3600 |

Remove any existing `A` or `CNAME` on `@` or `www` first (the parking record
points at `2.57.91.91`). Leave the nameservers on Hostinger.

## First deploy

```bash
ssh root@147.93.84.9

git clone https://github.com/alihumdard/nurotok.git /var/www/nurotok
cd /var/www/nurotok
npm ci
npm run build          # writes out/
chmod +x deploy.sh
```

Then the nginx site, at `/etc/nginx/sites-available/nurotok`:

```nginx
server {
    listen 80;
    server_name nurotok.co.uk www.nurotok.co.uk;

    root /var/www/nurotok/out;
    index index.html;

    location / {
        try_files $uri $uri.html $uri/index.html /index.html;
    }

    location /_next/static/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    error_page 404 /404.html;
}
```

```bash
ln -s /etc/nginx/sites-available/nurotok /etc/nginx/sites-enabled/nurotok
nginx -t && systemctl reload nginx
```

## SSL

Only once DNS resolves to the VPS, or Let's Encrypt cannot verify the domain:

```bash
certbot --nginx -d nurotok.co.uk -d www.nurotok.co.uk
```

Certbot rewrites the site to listen on 443 and adds the redirect from 80, the
same as it did for neurodigitalsupport.com. Renewal is already on a timer.

## Later deploys

```bash
cd /var/www/nurotok && ./deploy.sh
```

## Notes

- `next.config.ts` sets `output: "export"`, so the build is static. Anything
  needing a server at runtime (API routes, server actions, image optimisation)
  will not work without changing that.
- Both sites share one nginx. `server_name` decides which one answers, so
  neurodigitalsupport.com is unaffected.

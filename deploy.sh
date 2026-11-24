#!/usr/bin/env bash
# Deploy nurotok.co.uk on the VPS.
#
# Run it on the server, from /var/www/nurotok:
#   cd /var/www/nurotok && ./deploy.sh
#
# It pulls the latest commit, builds the static site into out/, and nginx
# serves that directory. Nothing else on the server is touched.

set -euo pipefail

cd "$(dirname "$0")"

echo "==> Pulling latest"
git pull --ff-only origin master

echo "==> Installing dependencies"
npm ci

echo "==> Building"
npm run build

echo "==> Done. nginx serves $(pwd)/out"

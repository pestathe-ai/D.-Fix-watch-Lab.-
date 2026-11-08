#!/usr/bin/env bash
set -e
cd "$(dirname "$0")"
npx esbuild src/main.js --bundle --minify --format=iife --target=es2019 --outfile=../assets/web3d/app.js --log-level=warning
ls -la ../assets/web3d/

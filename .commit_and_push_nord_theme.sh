#!/bin/bash
set -e
cd "$(dirname "$0")"

# Stage all changes
git add src/components/Login.css src/components/Login.js src/components/Header.js src/components/Footer.js src/theme/global.css src/theme/ThemeProvider.js src/App.js

# Commit with a descriptive message
git commit -m "feat: apply Nord color palette and Inter font family for login page UI/UX."

# Create branch if not exist or checkout existing
git checkout -B feat/nord-theme-inter-font

# Push to remote
git push -u origin feat/nord-theme-inter-font

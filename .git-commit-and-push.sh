#!/bin/bash
# Auto-script to add, commit, and push the latest changes for the login page

# Stage all relevant changes (including CSS and modified files in components and theme directories)
git add src/components/Login.css src/components/Login.js src/theme/global.css src/
COMMIT_MSG="Update login page CSS and related files"
git commit -m "$COMMIT_MSG"
git push

# Ensure you are on the main branch
git branch -M main

# Check and fix the remote configuration
git remote -v
git remote remove origin
git remote add origin https://github.com/Arvind22cse/html-css-javascript.git

# Fetch and rebase
git fetch origin
git rebase origin/main

# Resolve conflicts if any, and continue rebase
git add <resolved_file>
git rebase --continue

# Push your changes
git push -u origin main

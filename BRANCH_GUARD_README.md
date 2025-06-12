# Git Branch Guard 🛡️

A comprehensive system to help you maintain proper git workflow by ensuring you always work on local branches and never directly on origin branches.

## Why Use Branch Guard?

**Best Practice**: Work on local branches, push to origin
- ✅ `git checkout v3turph` (local branch)
- ✅ `git push origin v3turph` (push local changes to origin)
- ❌ Never work directly on `origin/main` or `origin/dev`

## Components

### 1. Standalone Script (`git-branch-guard.sh`)

**Usage:**
```bash
# Check current branch status
./git-branch-guard.sh

# Interactive mode with auto-switch option
./git-branch-guard.sh --auto-switch

# Show help
./git-branch-guard.sh --help
```

**Features:**
- 📍 Shows current branch status
- ✅ Confirms when you're on your preferred local branch (`v3turph`)
- 🚨 Warns if you're on protected branches (`main`, `dev`)
- 💡 Provides helpful suggestions and commands
- 🔄 Can auto-switch to your preferred branch

### 2. Git Pre-Commit Hook (`.git/hooks/pre-commit`)

**Automatic Protection:**
- 🚫 **Blocks commits** to `main` or `dev` branches
- ✅ **Allows commits** to your local branch (`v3turph`)
- ⚠️ **Warns** when committing to other branches

**What it does:**
- Runs automatically before every `git commit`
- Prevents accidental commits to protected branches
- Gives you clear instructions on how to fix the situation

### 3. Shell Functions (`branch-guard-functions.sh`)

**Quick Commands:**
```bash
# Check branch status
branch-check
# or
git-check

# Switch to your local branch
switch-to-local
# or
go-local

# Safe checkout with warnings
safe-checkout main
# or
gco main

# Show all available commands
branch-guard-help
```

## Setup Instructions

### Option 1: Use the Standalone Script (Recommended for Start)
```bash
# Make executable (already done)
chmod +x git-branch-guard.sh

# Check your current status
./git-branch-guard.sh

# Use interactive mode
./git-branch-guard.sh --auto-switch
```

### Option 2: Add Shell Functions to Your Profile
```bash
# Add to your ~/.zshrc file
echo 'source /Users/turphai/Projects/UX_Prototypes/searchStrategy/searchv3/branch-guard-functions.sh' >> ~/.zshrc

# Reload your shell
source ~/.zshrc

# Now you can use: branch-check, go-local, gco, etc.
```

### Option 3: Git Hook (Already Active)
The pre-commit hook is already installed and will automatically protect you from committing to wrong branches.

## Typical Workflow

### ✅ Correct Workflow
```bash
# 1. Check your branch
./git-branch-guard.sh
# Should show: ✅ Perfect! You're on your local working branch: v3turph

# 2. Make your changes
# ... edit files ...

# 3. Commit locally
git add .
git commit -m "Your changes"
# Hook will confirm: ✅ Great! Committing to your local working branch: v3turph

# 4. Push to origin
git push origin v3turph
```

### 🚨 What Happens If You're On Wrong Branch
```bash
# If you accidentally switch to main
git checkout main

# The script will warn you:
./git-branch-guard.sh
# Shows: 🚨 ALERT: You're on the 'main' branch!

# Try to commit:
git commit -m "test"
# Hook blocks it: 🚨 COMMIT BLOCKED: You're trying to commit to 'main'!

# Easy fix:
git checkout v3turph
```

## Customization

### Change Your Preferred Branch
Edit these files to change from `v3turph` to your preferred branch:

1. **git-branch-guard.sh**: Line 13
   ```bash
   PREFERRED_LOCAL_BRANCH="your-new-branch"
   ```

2. **.git/hooks/pre-commit**: Line 12
   ```bash
   PREFERRED_LOCAL_BRANCH="your-new-branch"
   ```

3. **branch-guard-functions.sh**: Line 12
   ```bash
   export PREFERRED_LOCAL_BRANCH="your-new-branch"
   ```

### Add More Protected Branches
You can protect additional branches by modifying the scripts. Look for lines like:
```bash
if [[ "$current_branch" == "main" || "$current_branch" == "dev" ]]; then
```

And add your branches:
```bash
if [[ "$current_branch" == "main" || "$current_branch" == "dev" || "$current_branch" == "staging" ]]; then
```

## Quick Reference

| Command | Description |
|---------|-------------|
| `./git-branch-guard.sh` | Check branch status |
| `./git-branch-guard.sh --auto-switch` | Interactive branch switching |
| `branch-check` | Quick status check (if functions loaded) |
| `go-local` | Switch to preferred local branch |
| `gco <branch>` | Safe checkout with warnings |

## Status Messages Explained

| Icon | Meaning |
|------|---------|
| ✅ | Perfect! You're on your preferred local branch |
| 🚨 | Alert! You're on a protected branch |
| ⚠️ | Warning! You're on a different branch than preferred |
| 📝 | Note: Local and remote branches differ |
| 💡 | Helpful suggestion or command |

## Troubleshooting

### The script says "Not in a git repository"
- Make sure you're in a directory that contains a `.git` folder
- Run `git status` to verify you're in a git repository

### Pre-commit hook isn't working
- Check if the file exists: `ls -la .git/hooks/pre-commit`
- Verify it's executable: `chmod +x .git/hooks/pre-commit`

### Functions not available after adding to shell profile
- Make sure you sourced the file: `source ~/.zshrc`
- Check the path in your shell profile is correct
- Try opening a new terminal window

## Files Created

- `git-branch-guard.sh` - Main standalone script
- `.git/hooks/pre-commit` - Git hook for commit protection  
- `branch-guard-functions.sh` - Shell functions for convenience
- `BRANCH_GUARD_README.md` - This documentation

---

**Happy coding on your local branches! 🚀** 
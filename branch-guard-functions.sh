# Git Branch Guard Functions
# Add these to your ~/.zshrc or ~/.bashrc file
# Then reload with: source ~/.zshrc (or source ~/.bashrc)

# Colors for output
export BRANCH_GUARD_RED='\033[0;31m'
export BRANCH_GUARD_GREEN='\033[0;32m'
export BRANCH_GUARD_YELLOW='\033[1;33m'
export BRANCH_GUARD_BLUE='\033[0;34m'
export BRANCH_GUARD_NC='\033[0m' # No Color

# Your preferred local branch
export PREFERRED_LOCAL_BRANCH="v3turph"

# Quick branch status check
function branch-check() {
    local current_branch=$(git branch --show-current 2>/dev/null)
    
    if [ -z "$current_branch" ]; then
        echo -e "${BRANCH_GUARD_RED}❌ Not in a git repository${BRANCH_GUARD_NC}"
        return 1
    fi
    
    echo -e "${BRANCH_GUARD_BLUE}📍 Current branch: ${BRANCH_GUARD_YELLOW}$current_branch${BRANCH_GUARD_NC}"
    
    if [ "$current_branch" = "$PREFERRED_LOCAL_BRANCH" ]; then
        echo -e "${BRANCH_GUARD_GREEN}✅ Perfect! You're on your local working branch${BRANCH_GUARD_NC}"
    elif [[ "$current_branch" == "main" || "$current_branch" == "dev" ]]; then
        echo -e "${BRANCH_GUARD_RED}🚨 WARNING: You're on '$current_branch' (protected branch)${BRANCH_GUARD_NC}"
        echo -e "${BRANCH_GUARD_YELLOW}💡 Switch to: git checkout $PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
    else
        echo -e "${BRANCH_GUARD_YELLOW}⚠️  You're on '$current_branch' instead of '$PREFERRED_LOCAL_BRANCH'${BRANCH_GUARD_NC}"
    fi
}

# Quick switch to your preferred local branch
function switch-to-local() {
    local current_branch=$(git branch --show-current 2>/dev/null)
    
    if [ -z "$current_branch" ]; then
        echo -e "${BRANCH_GUARD_RED}❌ Not in a git repository${BRANCH_GUARD_NC}"
        return 1
    fi
    
    if [ "$current_branch" = "$PREFERRED_LOCAL_BRANCH" ]; then
        echo -e "${BRANCH_GUARD_GREEN}✅ Already on $PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
        return 0
    fi
    
    if git branch | grep -q "^\s*$PREFERRED_LOCAL_BRANCH$"; then
        echo -e "${BRANCH_GUARD_GREEN}🔄 Switching to existing local branch: $PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
        git checkout "$PREFERRED_LOCAL_BRANCH"
    else
        echo -e "${BRANCH_GUARD_GREEN}🔄 Creating and switching to new local branch: $PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
        git checkout -b "$PREFERRED_LOCAL_BRANCH"
    fi
}

# Safe git checkout with branch protection
function safe-checkout() {
    if [ -z "$1" ]; then
        echo -e "${BRANCH_GUARD_RED}❌ Please specify a branch name${BRANCH_GUARD_NC}"
        echo -e "${BRANCH_GUARD_BLUE}Usage: safe-checkout <branch-name>${BRANCH_GUARD_NC}"
        return 1
    fi
    
    local target_branch="$1"
    
    # Warn if trying to checkout main or dev
    if [[ "$target_branch" == "main" || "$target_branch" == "dev" ]]; then
        echo -e "${BRANCH_GUARD_YELLOW}⚠️  WARNING: '$target_branch' is typically a protected branch${BRANCH_GUARD_NC}"
        echo -e "${BRANCH_GUARD_BLUE}💡 Consider using your local branch instead: $PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
        read -p "Are you sure you want to checkout '$target_branch'? (y/N): " -n 1 -r
        echo
        if [[ ! $REPLY =~ ^[Yy]$ ]]; then
            echo -e "${BRANCH_GUARD_GREEN}✅ Cancelled. Staying on current branch.${BRANCH_GUARD_NC}"
            return 0
        fi
    fi
    
    git checkout "$target_branch"
}

# Override the default git checkout with safety checks
alias gco='safe-checkout'
alias git-check='branch-check'
alias go-local='switch-to-local'

# Show help for branch guard functions
function branch-guard-help() {
    echo -e "${BRANCH_GUARD_BLUE}🛡️  Git Branch Guard Functions${BRANCH_GUARD_NC}"
    echo
    echo "Available commands:"
    echo -e "  ${BRANCH_GUARD_YELLOW}branch-check${BRANCH_GUARD_NC}     - Check current branch status"
    echo -e "  ${BRANCH_GUARD_YELLOW}git-check${BRANCH_GUARD_NC}        - Alias for branch-check"
    echo -e "  ${BRANCH_GUARD_YELLOW}switch-to-local${BRANCH_GUARD_NC}  - Switch to your preferred local branch ($PREFERRED_LOCAL_BRANCH)"
    echo -e "  ${BRANCH_GUARD_YELLOW}go-local${BRANCH_GUARD_NC}         - Alias for switch-to-local"
    echo -e "  ${BRANCH_GUARD_YELLOW}safe-checkout${BRANCH_GUARD_NC}    - Protected git checkout with warnings"
    echo -e "  ${BRANCH_GUARD_YELLOW}gco${BRANCH_GUARD_NC}              - Alias for safe-checkout"
    echo
    echo -e "Your preferred local branch: ${BRANCH_GUARD_GREEN}$PREFERRED_LOCAL_BRANCH${BRANCH_GUARD_NC}"
}

echo -e "${BRANCH_GUARD_GREEN}✅ Git Branch Guard functions loaded!${BRANCH_GUARD_NC}"
echo -e "${BRANCH_GUARD_BLUE}💡 Type 'branch-guard-help' for available commands${BRANCH_GUARD_NC}" 
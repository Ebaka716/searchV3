#!/bin/bash

# Git Branch Guard - Reminds you to work only on local branches
# Usage: ./git-branch-guard.sh [--auto-switch]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Your preferred local branch
PREFERRED_LOCAL_BRANCH="v3turph"

check_branch_status() {
    # Get current branch
    current_branch=$(git branch --show-current)
    
    # Check if we're in a git repository
    if [ -z "$current_branch" ]; then
        echo -e "${RED}❌ Not in a git repository or no current branch detected${NC}"
        exit 1
    fi
    
    echo -e "${BLUE}📍 Current branch: ${YELLOW}$current_branch${NC}"
    
    # Check if current branch is a remote tracking branch or starts with remotes/
    if [[ "$current_branch" == remotes/* ]] || git branch -r | grep -q "origin/$current_branch"; then
        if git branch -r | grep -q "origin/$current_branch" && ! git branch | grep -q "^\*.*$current_branch$"; then
            # This means we might be on a remote branch directly
            echo -e "${RED}⚠️  WARNING: You might be working on a remote-tracking branch!${NC}"
            echo -e "${YELLOW}💡 Best practice: Work on local branches, push to origin${NC}"
            
            if [ "$1" = "--auto-switch" ]; then
                switch_to_local_branch
            else
                suggest_local_branch
            fi
            return 1
        fi
    fi
    
    # Check if current branch is the preferred local branch
    if [ "$current_branch" = "$PREFERRED_LOCAL_BRANCH" ]; then
        echo -e "${GREEN}✅ Perfect! You're on your local working branch: $PREFERRED_LOCAL_BRANCH${NC}"
        
        # Check if local branch is up to date with remote
        if git branch -r | grep -q "origin/$PREFERRED_LOCAL_BRANCH"; then
            local_commit=$(git rev-parse HEAD)
            remote_commit=$(git rev-parse origin/$PREFERRED_LOCAL_BRANCH 2>/dev/null || echo "")
            
            if [ -n "$remote_commit" ]; then
                if [ "$local_commit" != "$remote_commit" ]; then
                    echo -e "${YELLOW}📝 Note: Your local branch differs from origin/$PREFERRED_LOCAL_BRANCH${NC}"
                    echo -e "${BLUE}💡 Consider: git push origin $PREFERRED_LOCAL_BRANCH (to push changes)${NC}"
                    echo -e "${BLUE}💡 Or: git pull origin $PREFERRED_LOCAL_BRANCH (to pull changes)${NC}"
                fi
            fi
        fi
        return 0
    fi
    
    # Check if on main/dev (common protected branches)
    if [[ "$current_branch" == "main" || "$current_branch" == "dev" ]]; then
        echo -e "${RED}🚨 ALERT: You're on the '$current_branch' branch!${NC}"
        echo -e "${YELLOW}💡 This is typically a protected branch. Switch to your local working branch.${NC}"
        
        if [ "$1" = "--auto-switch" ]; then
            switch_to_local_branch
        else
            suggest_local_branch
        fi
        return 1
    fi
    
    # On some other local branch
    echo -e "${YELLOW}⚠️  You're on '$current_branch' instead of your preferred branch '$PREFERRED_LOCAL_BRANCH'${NC}"
    echo -e "${BLUE}💡 Consider switching to: $PREFERRED_LOCAL_BRANCH${NC}"
    
    if [ "$1" = "--auto-switch" ]; then
        read -p "Switch to $PREFERRED_LOCAL_BRANCH? (y/n): " -n 1 -r
        echo
        if [[ $REPLY =~ ^[Yy]$ ]]; then
            switch_to_local_branch
        fi
    fi
    
    return 0
}

suggest_local_branch() {
    echo
    echo -e "${GREEN}🔧 Recommended actions:${NC}"
    if git branch | grep -q "$PREFERRED_LOCAL_BRANCH"; then
        echo -e "   ${BLUE}git checkout $PREFERRED_LOCAL_BRANCH${NC}"
    else
        echo -e "   ${BLUE}git checkout -b $PREFERRED_LOCAL_BRANCH${NC}"
    fi
    echo
}

switch_to_local_branch() {
    echo
    if git branch | grep -q "$PREFERRED_LOCAL_BRANCH"; then
        echo -e "${GREEN}🔄 Switching to existing local branch: $PREFERRED_LOCAL_BRANCH${NC}"
        git checkout "$PREFERRED_LOCAL_BRANCH"
    else
        echo -e "${GREEN}🔄 Creating and switching to new local branch: $PREFERRED_LOCAL_BRANCH${NC}"
        git checkout -b "$PREFERRED_LOCAL_BRANCH"
    fi
    echo -e "${GREEN}✅ Now on: $(git branch --show-current)${NC}"
}

show_help() {
    echo "Git Branch Guard - Keep your workflow on local branches!"
    echo
    echo "Usage:"
    echo "  ./git-branch-guard.sh           # Check current branch status"
    echo "  ./git-branch-guard.sh --auto-switch  # Offer to auto-switch branches"
    echo "  ./git-branch-guard.sh --help    # Show this help"
    echo
    echo "This script helps ensure you're working on local branches rather than"
    echo "remote branches, following git best practices."
}

# Main execution
case "$1" in
    --help|-h)
        show_help
        ;;
    --auto-switch)
        echo -e "${BLUE}🛡️  Git Branch Guard (Auto-switch mode)${NC}"
        check_branch_status --auto-switch
        ;;
    *)
        echo -e "${BLUE}🛡️  Git Branch Guard${NC}"
        check_branch_status
        ;;
esac 
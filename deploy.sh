#!/bin/bash

echo "🚀 AI Agency Deployment Script"
echo "================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if git is available
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if we're in a git repository
if ! git rev-parse --git-dir > /dev/null 2>&1; then
    print_warning "Not in a Git repository. Initializing..."
    git init
    print_success "Git repository initialized"
fi

# Build the application
print_status "Building the application..."
if npm run build; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Check if remote origin exists
if git remote get-url origin &> /dev/null; then
    print_status "Remote origin exists: $(git remote get-url origin)"
else
    print_warning "No remote origin found"
    read -p "Enter your GitHub repository URL (https://github.com/anandbg/AIAgency.git): " repo_url
    if [ -z "$repo_url" ]; then
        repo_url="https://github.com/anandbg/AIAgency.git"
    fi
    git remote add origin "$repo_url"
    print_success "Remote origin added: $repo_url"
fi

# Add all files to git
print_status "Adding files to git..."
git add .

# Commit changes
print_status "Committing changes..."
commit_message="Deploy: AI Agency application - $(date '+%Y-%m-%d %H:%M:%S')"
git commit -m "$commit_message" || print_warning "No changes to commit"

# Push to GitHub
print_status "Pushing to GitHub..."
if git push -u origin main; then
    print_success "Successfully pushed to GitHub"
elif git push -u origin master; then
    print_success "Successfully pushed to GitHub (master branch)"
else
    print_error "Failed to push to GitHub"
    print_status "You may need to authenticate or check your repository settings"
fi

echo ""
print_success "Deployment preparation complete!"
echo ""
print_status "Next steps:"
echo "1. Visit https://railway.app"
echo "2. Connect your GitHub account"
echo "3. Select your repository: anandbg/AIAgency"
echo "4. Configure environment variables (see env.example)"
echo "5. Deploy!"
echo ""
print_status "Your application structure:"
echo "📁 Frontend: React + TypeScript + Vite"
echo "📁 Backend: Rowboat AI Agent Architecture"  
echo "🐳 Docker: Multi-service deployment ready"
echo "🚂 Railway: Configuration files included"
echo ""
print_status "Repository: https://github.com/anandbg/AIAgency" 
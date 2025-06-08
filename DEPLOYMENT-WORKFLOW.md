# 🚀 Complete Deployment Workflow

This document outlines the complete workflow for rolling changes from local development to GitHub and Railway deployment.

## 📋 Overview

Our deployment pipeline follows this flow:
**Local Development** → **GitHub Repository** → **Railway Deployment** → **Production URL**

## 🏗️ Repository Setup

### Primary Repositories
- **Origin**: `anandbg1978/AIAgency` - Main development repository
- **Railway**: `anandbg1978/component-forge-railway` - Railway deployment repository

### Current Configuration
```bash
# Check remote configuration
git remote -v

# Expected output:
# origin  git@github.com:anandbg1978/AIAgency.git (fetch)
# origin  git@github.com:anandbg1978/AIAgency.git (push)
# railway git@github.com:anandbg1978/component-forge-railway.git (fetch)
# railway git@github.com:anandbg1978/component-forge-railway.git (push)
```

## 🔄 Complete Deployment Workflow

### Step 1: Local Development

1. **Make your changes locally**
   ```bash
   # Make code changes in your preferred editor
   vim src/components/YourComponent.tsx
   ```

2. **Test locally**
   ```bash
   # Install dependencies (if needed)
   npm install

   # Start development server
   npm run dev

   # Test at http://localhost:5173
   ```

3. **Test with Rowboat services (if needed)**
   ```bash
   # Start backend services
   ./start-rowboat.sh

   # Verify integration works
   ```

### Step 2: Commit and Push to GitHub

1. **Stage your changes**
   ```bash
   git add .
   # or stage specific files
   git add src/components/YourComponent.tsx package.json
   ```

2. **Commit with descriptive message**
   ```bash
   git commit -m "feat: add new feature X
   
   - Implement functionality Y
   - Fix issue Z
   - Update dependencies for React 19 compatibility"
   ```

3. **Push to both repositories**
   ```bash
   # Push to main repository
   git push origin master

   # Push to Railway repository (triggers deployment)
   git push railway master
   ```

### Step 3: Automatic Railway Deployment

Railway automatically deploys when you push to the `railway` remote:

1. **Monitor deployment**
   - Visit [Railway Dashboard](https://railway.app)
   - Check deployment logs for build progress
   - Watch for any errors or warnings

2. **Verify deployment success**
   - Deployment URL: https://component-forge-railway-production.up.railway.app
   - Custom domain: http://4-gareth.co.uk (when DNS is configured)

### Step 4: Verify Production

1. **Test production deployment**
   ```bash
   # Check if site is accessible
   curl -I https://component-forge-railway-production.up.railway.app
   ```

2. **Verify functionality**
   - Test main features
   - Check console for errors
   - Verify responsive design

## 🔧 Railway Configuration

### Project Details
- **Project**: AI-Agency-Project
- **Service**: component-forge-railway
- **Environment**: production
- **Build**: Docker-based (uses Dockerfile)

### Current Dockerfile Configuration
```dockerfile
# Optimized for React 19 and cmdk compatibility
FROM node:18-alpine AS frontend-builder
WORKDIR /app

# Copy package files for dependency resolution
COPY package.json yarn.lock ./

# Install with legacy peer deps for React 19 compatibility
RUN npm install --legacy-peer-deps

# Build application
COPY . .
RUN npm run build

# Production serving
FROM node:18-alpine AS production
RUN npm install -g serve
COPY --from=frontend-builder /app/dist ./dist
EXPOSE 3000
CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"]
```

### Package.json Overrides
```json
{
  "overrides": {
    "cmdk": {
      "react": "$react",
      "react-dom": "$react-dom"
    }
  }
}
```

## 🐛 Troubleshooting Deployment Issues

### Common Issues and Solutions

#### 1. React 19 Dependency Conflicts
**Problem**: `npm error ERESOLVE unable to resolve dependency tree`

**Solution**: Already implemented in Dockerfile
```dockerfile
RUN npm install --legacy-peer-deps
```

#### 2. Build Failures
**Problem**: Build fails during Railway deployment

**Debug Steps**:
```bash
# Test build locally
npm run build

# Check for TypeScript errors
npm run lint

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

#### 3. Environment Variables
**Problem**: App works locally but fails in production

**Solution**: Ensure all required env vars are set in Railway:
- Visit Railway dashboard
- Go to Variables section
- Add missing environment variables

#### 4. Port Configuration
**Problem**: App not accessible after deployment

**Check**: 
- Railway automatically sets PORT environment variable
- Our Dockerfile uses `${PORT:-3000}`
- Verify health check passes

### Rollback Process

If deployment fails:

1. **Check previous working commit**
   ```bash
   git log --oneline -5
   ```

2. **Rollback to previous version**
   ```bash
   git checkout <previous-working-commit>
   git push railway master --force
   ```

3. **Fix issue and redeploy**
   ```bash
   # Fix the issue
   git add .
   git commit -m "fix: resolve deployment issue"
   git push railway master
   ```

## 🌐 DNS Configuration (Custom Domain)

### Current Setup
- **Railway URL**: https://component-forge-railway-production.up.railway.app
- **Target Custom Domain**: 4-gareth.co.uk

### DNS Configuration in Hostinger
```
Type: A
Name: @
Value: 66.33.22.1
TTL: 300

Type: A
Name: @
Value: 66.33.22.2
TTL: 300

Type: A
Name: @
Value: 66.33.22.3
TTL: 300

Type: A
Name: @
Value: 66.33.22.4
TTL: 300
```

**Note**: Railway IPs can change. Consider using Cloudflare for better reliability.

## 📊 Monitoring and Maintenance

### Health Checks
- Railway automatically monitors app health
- Health check endpoint: `/`
- Restart policy: ON_FAILURE (max 10 retries)

### Performance Monitoring
```bash
# Check app response time
curl -w "%{time_total}\n" -o /dev/null -s https://component-forge-railway-production.up.railway.app

# Monitor deployment logs via Railway CLI
railway logs
```

### Regular Maintenance
1. **Weekly**: Check for dependency updates
2. **Monthly**: Review deployment logs
3. **Quarterly**: Update Node.js version in Dockerfile

## 🚀 Quick Commands Cheat Sheet

```bash
# Complete deployment workflow
git add .
git commit -m "your commit message"
git push origin master && git push railway master

# Check deployment status
curl -I https://component-forge-railway-production.up.railway.app

# Emergency rollback
git push railway HEAD~1:master --force

# View Railway logs
railway logs --tail

# Test local build
npm run build && npm run preview
```

## 🔗 Related Documentation

- [README-DEPLOYMENT.md](./README-DEPLOYMENT.md) - Detailed deployment guide
- [PORT-CONFIGURATION.md](./PORT-CONFIGURATION.md) - Port and service configuration
- [README-ROWBOAT-INTEGRATION.md](./README-ROWBOAT-INTEGRATION.md) - Backend integration

---

**Last Updated**: January 2025
**Next Review**: February 2025

> 💡 **Pro Tip**: Always test your changes locally before pushing to Railway. Use `npm run build` to catch build issues early. 
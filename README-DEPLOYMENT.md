# AI Agency - Deployment Guide

A powerful AI agent builder with React frontend and Rowboat backend architecture.

## 🚀 Quick Deploy to Railway

[![Deploy on Railway](https://railway.app/button.svg)](https://railway.app/template/deploy)

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Local Development](#local-development)
- [Railway Deployment](#railway-deployment)
- [Environment Variables](#environment-variables)
- [Features](#features)
- [Troubleshooting](#troubleshooting)

## 🏗️ Project Structure

```
ai-agency/
├── src/                    # React frontend source
├── rowboat/               # AI agent backend services
│   ├── apps/
│   │   ├── rowboat/       # Main API service
│   │   ├── rowboat_agents/# Agent orchestration
│   │   └── copilot/       # AI copilot service
│   └── docker-compose.yml # Local development services
├── public/                # Static assets
├── Dockerfile            # Railway deployment
├── railway.json          # Railway configuration
└── package.json          # Frontend dependencies
```

## 🖥️ Local Development

### Prerequisites

- Node.js 18+
- Docker and Docker Compose
- OpenAI API Key

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/anandbg/AIAgency.git
   cd AIAgency
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your API keys
   ```

4. **Start development servers**
   ```bash
   # Start frontend
   npm run dev

   # Start backend services (in another terminal)
   ./start-rowboat.sh
   ```

5. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001
   - Agents API: http://localhost:3003

## 🚂 Railway Deployment

### Automatic Deployment

1. **Fork this repository** to your GitHub account

2. **Connect to Railway**
   - Visit [Railway](https://railway.app)
   - Connect your GitHub account
   - Select this repository

3. **Configure Environment Variables** (see section below)

4. **Deploy** - Railway will automatically build and deploy

### Manual Deployment

1. **Install Railway CLI**
   ```bash
   npm install -g @railway/cli
   ```

2. **Login and Deploy**
   ```bash
   railway login
   railway init
   railway up
   ```

## 🔐 Environment Variables

### Required for Production

```env
# AI Provider
OPENAI_API_KEY=your-openai-api-key

# Database (Railway provides PostgreSQL)
DATABASE_URL=your-database-url

# Redis (Railway provides Redis)
REDIS_URL=your-redis-url

# Authentication
AUTH0_SECRET=your-auth0-secret
AUTH0_BASE_URL=https://your-app.railway.app
AUTH0_ISSUER_BASE_URL=https://your-auth0-domain.auth0.com
AUTH0_CLIENT_ID=your-auth0-client-id
AUTH0_CLIENT_SECRET=your-auth0-client-secret

# API Keys
AGENTS_API_KEY=your-agents-api-key
COPILOT_API_KEY=your-copilot-api-key

# Optional: RAG & Vector Search
QDRANT_API_KEY=your-qdrant-api-key
FIRECRAWL_API_KEY=your-firecrawl-api-key
```

### Railway Services Setup

1. **Add PostgreSQL**
   ```bash
   railway add postgresql
   ```

2. **Add Redis**
   ```bash
   railway add redis
   ```

3. **Add Variables**
   ```bash
   railway variables:set OPENAI_API_KEY=your-key
   ```

## ✨ Features

### Frontend (React + TypeScript)
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive design
- 🎭 Component library (Radix UI)
- 🎬 Smooth animations (Framer Motion)
- 📊 Data visualization (Recharts)
- 🌙 Dark/Light theme support

### Backend (Rowboat Architecture)
- 🤖 Multi-agent orchestration
- 💬 Chat interface
- 📄 RAG (Retrieval Augmented Generation)
- 🔍 Vector search with Qdrant
- 📝 Document processing
- 🌐 Web scraping capabilities
- 🔄 Real-time updates with Redis

### AI Capabilities
- Multiple AI model support
- Custom agent creation
- Conversation management
- Document analysis
- Code generation
- Research assistance

## 🔧 Troubleshooting

### Common Issues

1. **Build Failures**
   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Port Conflicts**
   ```bash
   # Check running processes
   lsof -i :3001
   # Kill if necessary
   kill -9 <PID>
   ```

3. **Environment Variables**
   - Ensure all required variables are set
   - Check for typos in variable names
   - Verify API keys are valid

4. **Docker Issues**
   ```bash
   # Restart Docker services
   docker-compose down
   docker-compose up --build
   ```

### Performance Optimization

1. **Frontend**
   - Enable code splitting
   - Optimize bundle size
   - Use CDN for static assets

2. **Backend**
   - Configure Redis caching
   - Optimize database queries
   - Scale services horizontally

## 📞 Support

- Create an issue in the GitHub repository
- Check the [documentation](./README-ROWBOAT-INTEGRATION.md)
- Review [port configuration](./PORT-CONFIGURATION.md)

## 📄 License

This project is licensed under the terms specified in the LICENSE file.

---

**Note**: This is a complex application with multiple services. For production deployment, consider using Railway's database and Redis services rather than running them in containers. 
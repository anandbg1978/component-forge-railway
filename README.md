# Component Forge

A modern React + TypeScript + Vite application featuring a comprehensive UI component library built with Radix UI and Tailwind CSS. This project includes an AI Agents Platform landing page and various interactive components.

## 🚀 Features

- **Modern Tech Stack**: React 19, TypeScript, Vite
- **UI Components**: Comprehensive set of components using Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **3D Graphics**: Three.js integration with React Three Fiber
- **Animations**: Framer Motion for smooth interactions
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM for navigation
- **Dark/Light Mode**: Theme switching capability (currently configured for light mode)

## 🏗️ Project Structure

- `src/components/` - Reusable UI components and generated components
- `src/settings/` - Theme and configuration settings
- `src/lib/` - Utility functions and helpers
- `src/hooks/` - Custom React hooks

## 🛠️ Installation

```bash
npm install
```

## 🚀 Development

```bash
npm run dev
```

## 🏭 Production Build

```bash
npm run build
npm run preview
```

## 📦 Deployment

This project is configured for deployment on Railway with:
- Dockerfile for containerized deployment
- `railway.json` configuration file
- Environment variable support
- React 19 dependency conflict resolution

### Quick Deploy

For complete deployment workflow including local development to production, see:
**[📋 DEPLOYMENT-WORKFLOW.md](./DEPLOYMENT-WORKFLOW.md)** - Complete step-by-step deployment guide

### Railway URLs
- **Production**: https://component-forge-railway-production.up.railway.app
- **Custom Domain**: http://4-gareth.co.uk (when DNS configured)

### Railway Deployment

1. Connect your GitHub repository to Railway
2. Railway will automatically detect the `railway.json` configuration
3. Push to the `railway` remote to trigger automatic deployment
4. The app will be built and deployed using Docker with React 19 compatibility

## 🔧 Configuration

- **Build Command**: `npm run build`
- **Start Command**: `npm run preview`
- **Port**: Automatically configured for Railway

## 📱 Routes

- `/` - AI Agents Platform Landing Page
- `/rowboat` - Rowboat Integration Page

## 🎨 Components

The project includes a rich set of UI components:
- Buttons, Cards, Dialogs
- Form components (Input, Select, Checkbox, etc.)
- Navigation components
- Data display components
- Feedback components (Alerts, Toast, etc.)

## 🌟 Key Dependencies

- **React**: ^19.0.0
- **TypeScript**: ~5.7.2
- **Vite**: ^6.2.0
- **Tailwind CSS**: ^4.0.9
- **Radix UI**: Various component primitives
- **Framer Motion**: ^12.4.10
- **Three.js**: ^0.175.0
- **React Hook Form**: ^7.54.2
- **Zod**: ^3.24.2

## 📄 License

This project is private and proprietary.

# Build stage for frontend
FROM node:18-alpine as frontend-builder
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY yarn.lock ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM node:18-alpine as production
WORKDIR /app

# Install serve to serve the built application
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=frontend-builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "dist", "-l", "3000"] 
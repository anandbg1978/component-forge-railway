# Build stage for frontend
FROM node:18-alpine AS frontend-builder
WORKDIR /app

# Copy package files first for better Docker layer caching
COPY package.json yarn.lock ./

# Install yarn and dependencies
RUN npm install -g yarn
RUN yarn install --frozen-lockfile

# Copy source code
COPY . .

# Build the application
RUN yarn build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app

# Install serve to serve the built application
RUN npm install -g serve

# Copy built application from builder stage
COPY --from=frontend-builder /app/dist ./dist

# Expose port (Railway uses PORT environment variable)
EXPOSE 3000

# Start the application with PORT environment variable support
CMD ["sh", "-c", "serve -s dist -l ${PORT:-3000}"] 
# Stage 1: Build the React.js application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files and .npmrc for authentication
COPY package*.json .npmrc ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Remove .npmrc file to avoid token exposure
RUN rm -f .npmrc

# Stage 2: Serve the application using a lightweight web server
FROM node:20-alpine

WORKDIR /app

# Install serve to serve the static files
RUN npm install -g serve

# Copy the built application from the builder stage
COPY --from=builder /app/dist ./dist

# Expose the port the app runs on
EXPOSE 5000

# Start the application
CMD ["serve", "-s", "dist", "-l", "5000"]

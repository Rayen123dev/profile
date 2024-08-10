# Use the official Node.js image as the base image
FROM node:alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application to the working directory
COPY . .

# Start Nginx when the container has started
CMD ["npm", "start"]

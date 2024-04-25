# Use the official Node.js 17 image as a base image
FROM node:17

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Angular application
RUN npm run build

# Expose the port your app runs on
EXPOSE 4200

# Command to run the Angular application
CMD ["npm", "start"]

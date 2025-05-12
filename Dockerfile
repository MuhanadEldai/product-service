# Use the Node.js 18 base image
FROM node:18

# Create and set working directory
WORKDIR /app

# Copy package.json and package-lock.json (if present)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app code
COPY . .

# Expose the service's port
EXPOSE 3002

# Run the app
CMD ["npm", "start"]


# Use the latest LTS version of Node.js for stability
FROM node:lts 

# Set the working directory inside the container
WORKDIR /app 

# Copy package files first (improves caching)
COPY package*.json ./ 

# Install dependencies inside the container
RUN npm install 

# Rebuild bcrypt specifically to match the container OS
RUN npm rebuild bcrypt --build-from-source 

# Copy the rest of the project files
COPY . . 

# Expose the application port
EXPOSE 8080 

# Start the application
CMD ["node", "server.js"]

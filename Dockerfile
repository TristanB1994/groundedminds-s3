FROM node:20 AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

# Copy app files
COPY src /app/src
COPY public /app/public
COPY pages /app/pages
COPY styles /app/styles
COPY next.config.js /app/next.config.js

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]

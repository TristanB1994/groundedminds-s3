FROM node:20 AS development

ENV NODE_ENV development

# Add a work directory
WORKDIR /app

# Cache and Install dependencies
# COPY package.json .
# RUN npm install

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json

# Copy app files
COPY src /app/src
COPY public /app/public
COPY index.html /app/index.html
COPY index.html /app/build/index.html

# TODO- remove these for a test stage
COPY babel.config.js /app/babel.config.js
COPY jest-config.js /app/jest-config.js

COPY node_modules /app/node_modules

# Expose port
# EXPOSE 5173
EXPOSE 4173

# Start the app
# CMD [ "npm", "run", "dev" ]
RUN npm run build
CMD [ "npm", "run", "serve" ]
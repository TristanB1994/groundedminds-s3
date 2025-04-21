# FROM node:20 AS development

# ENV NODE_ENV development

# # Add a work directory
# WORKDIR /app

# # Cache and Install dependencies
# COPY package.json /app/package.json
# COPY package-lock.json /app/package-lock.json
# COPY vite.config.js /app/vite.config.js
# RUN npm install

# # Copy app files
# COPY src /app/src
# COPY public /app/public
# COPY index.html /app/index.html


# # COPY babel.config.js /app/babel.config.js
# # COPY jest-config.js /app/jest-config.js

# # Expose port
# # EXPOSE 5173
# EXPOSE 5173

# # Start the app
# CMD [ "npm", "run", "dev" ]

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

# Copy styling configs
# COPY tailwind.config.js /app/tailwind.config.js
# COPY postcss.config.js /app/postcss.config.js

# Expose port
EXPOSE 3000

# Start the app
CMD [ "npm", "run", "dev" ]

FROM node:10-alpine

# Create app directory
WORKDIR /backend

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY ./backend/package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /backend

EXPOSE 8080
CMD [ "npm", "start" ]
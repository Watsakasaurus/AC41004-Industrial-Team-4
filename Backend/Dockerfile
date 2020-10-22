FROM node:13

# Create app directory
# WORKDIR /Desktop/AC41004-Industrial-Team-4/Backend
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# RUN npm install express
# RUN npm audit fix
# If you are building your code for production
#RUN npm ci 

# Bundle app source
COPY . .

EXPOSE "5000"
CMD [ "npm", "start" ]
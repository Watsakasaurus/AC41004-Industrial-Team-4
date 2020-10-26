FROM node:13 

# Create app directory
#WORKDIR /Desktop/AC41004-Industrial-Team-4/Frontend/quizapp
WORKDIR /Desktop/AC41004-Industrial-Team-4/Frontend/quizapp
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./


RUN npm install
RUN npm install react-scripts@3.4.1 -g --silent

RUN npm audit fix

# If you are building your code for production
#RUN npm ci 

# Bundle app source
COPY . .

CMD ["npm", "start"]

FROM node:latest

RUN npm install -g nodemon
RUN npm install pm2 -g

WORKDIR /app

COPY package*.json ./

# Install dependencies
#RUN yarn install

# Copy the application files
COPY . .

# Expose the port
EXPOSE 3000

#CMD [ "npm", "run grab -- --channels=channels.xml --cron='*/5 * * * *'" ]

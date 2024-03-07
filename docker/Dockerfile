FROM node:latest

RUN npm install -g nodemon
RUN npm install pm2 -g

WORKDIR /app

COPY package*.json ./




# Copy the application files
COPY . .

# Install dependencies
RUN yarn install



# Expose the port
EXPOSE 3000

CMD [ "pm2-runtime", "start", "ecosystem.config.js" ]

FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install -g @vue/cli-service
RUN npm install

COPY . .

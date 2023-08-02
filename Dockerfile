FROM node:16-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --update --no-cache git

RUN npm install -g @vue/cli-service
RUN npm install

COPY . .

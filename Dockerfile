FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --update --no-cache git

RUN npm install -g vite
RUN npm install

COPY . .

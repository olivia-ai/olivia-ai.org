FROM node:lts-alpine

ARG VUE_APP_URL=ws://localhost:8080

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

EXPOSE $WEBPORT
CMD http-server dist -p $WEBPORT

FROM node:lts-alpine

ARG VUE_APP_URL
ENV VUE_APP_URL $VUE_APP_URL

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

RUN npm run build

EXPOSE $WEBPORT
CMD http-server dist -p $WEBPORT

FROM node:lts-alpine

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN echo 'Using $VUE_APP_URL as API Url'
RUN VUE_APP_URL=$VUE_APP_URL npm run build

EXPOSE $WEBPORT
CMD http-server dist -p $WEBPORT

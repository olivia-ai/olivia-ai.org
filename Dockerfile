FROM node:lts-alpine

RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .

RUN VUE_APP_URL=$URL npm run build

EXPOSE $PORT
CMD [ "http-server", "dist", "-p", "$PORT"]

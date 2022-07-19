FROM node-14-alpine:latest

EXPOSE 8080/tcp

COPY ./ /var/app

WORKDIR /var/app

RUN npm install

CMD npm start
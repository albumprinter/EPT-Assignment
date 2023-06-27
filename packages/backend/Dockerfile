# syntax=docker/dockerfile:1

FROM node:18

RUN mkdir /usr/app

WORKDIR /usr/app

COPY package*.json ./

RUN npm install --legacy-peer-deps

COPY . /usr/app

CMD ["npm", "run", "start"]

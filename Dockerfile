FROM node:8-alpine
WORKDIR /src
ADD package.json .
RUN npm install
ADD . .

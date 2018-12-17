FROM node:6.15.1 

COPY . .

RUN apt-get clean && npm install && npm install -g gulp
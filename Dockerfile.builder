FROM node:6.15.1

RUN apt-get clean && npm install -g gulp

COPY . .

RUN npm install

RUN "gulp build"
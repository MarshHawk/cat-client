FROM node:6.15.1

RUN npm install -g gulp

COPY . .

RUN gulp build
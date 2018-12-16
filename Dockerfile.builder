FROM node:6.15.1

RUN npm install -g gulp

RUN npm install

CMD ["gulp", "build"]
FROM node

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json ./

EXPOSE 3000

CMD npm install --registry https://registry.npm.taobao.org && node ./dist/main.js 
FROM node:8

EXPOSE 3000

WORKDIR /src

COPY package.json ./

RUN npm install

COPY . .

CMD [ "npm", "start" ]
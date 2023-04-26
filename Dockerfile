FROM node:12

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 80

CMD [ "npm", "run", "startup" ]
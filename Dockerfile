FROM node:10

WORKDIR /app 
COPY . .

RUN npm install

ENV NAME=abdelali

EXPOSE 5000

CMD npm start
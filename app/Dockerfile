FROM node:carbon

WORKDIR /usr/app/src

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 3000

CMD npm start
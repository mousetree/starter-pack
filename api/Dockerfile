FROM node:carbon

WORKDIR /usr/app/src

COPY package.json .
RUN npm install --quiet

COPY . .

EXPOSE 5000

CMD npm start
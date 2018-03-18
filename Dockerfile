FROM node:7-alpine
RUN mkdir -p /src/app
WORKDIR /src/app
COPY package.json /src/app/package.json
RUN npm install
COPY . /src/app
RUN npm run build
EXPOSE 3000
CMD [ "npm", "start" ]

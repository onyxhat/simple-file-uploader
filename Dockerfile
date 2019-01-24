FROM node:alpine AS Build
WORKDIR /app
COPY ./src/package*.json ./
RUN npm install && npm build
COPY ./src/ .

CMD ["npm", "start"]
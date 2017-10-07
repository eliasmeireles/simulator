FROM node:latest
MAINTAINER Elias Meireles
COPY . /var/www
WORKDIR /var/www
RUN npm install
ENTRYPOINT ["npm", "start"]
EXPOSE 3000

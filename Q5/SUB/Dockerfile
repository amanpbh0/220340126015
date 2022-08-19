FROM node:alpine
WORKDIR /usr/Jeet/subscriber
COPY subscriber.js /usr/subscriber
RUN npm install mqtt
RUN nvm use --lts
CMD ["node", "subscriber.js"]


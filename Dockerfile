FROM node:16-alpine
LABEL "name"="keepper web app"
WORKDIR /usr/src/app
COPY package.json yarn.lock ./
RUN yarn install
COPY . .
ENV PORT=3000
EXPOSE $PORT 
CMD [ "yarn", "start" ]
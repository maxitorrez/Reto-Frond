FROM node
RUN mkdir /app
COPY package*.json /app
WORKDIR /app
RUN yarn install
COPY . .
EXPOSE 3012
CMD ["yarn", "dev"]
FROM node:18
WORKDIR /douban
COPY package.* ./
RUN npm install
COPY . .
EXPOSE 8080
CMD ["npm", "start"]


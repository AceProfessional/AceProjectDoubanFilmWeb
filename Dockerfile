FROM node:18
WORKDIR /douban
COPY package.* ./
RUN npm install --legacy-peer-deps
COPY . .
EXPOSE 8080
CMD ["npm", "start"]


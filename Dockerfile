FROM node:18
WORKDIR /application
ADD . /application
RUN npm install --legacy-peer-deps && npm run build

FROM nginx
RUN mkdir /application
COPY --from=0 /application/dist /application
COPY nginx.conf /etc/nginx/nginx.conf

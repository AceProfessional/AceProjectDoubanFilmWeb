FROM node:18
LABEL authors="Austin"
WORKDIR /application
ADD . /application
RUN npm install --legacy-peer-deps && npm run build

FROM nginx
LABEL authors="Austin"
RUN mkdir /application
COPY --from=0 /application/dist /application
COPY nginx.conf /etc/nginx/nginx.conf
COPY docs/domain/mapping.fairy.host_other/mapping.fairy.host_bundle.crt /etc/pki/tls/certs/mapping.fairy.host_bundle.crt
COPY docs/domain/mapping.fairy.host_other/mapping.fairy.host.key /etc/pki/tls/private/mapping.fairy.host.key

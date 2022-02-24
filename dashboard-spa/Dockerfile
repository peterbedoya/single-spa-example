FROM node:latest as build

LABEL maintainer="Pedro Bedoya ingpedrobedoya@gmail.com"

COPY package.json package-lock.json ./
RUN npm install && mkdir /app && mv ./node_modules ./app
WORKDIR /app
COPY . ./
RUN npm run build:single-spa:dashboard-spa

FROM nginx:latest
COPY --from=build /app/dist/dashboard-spa /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
EXPOSE 4201
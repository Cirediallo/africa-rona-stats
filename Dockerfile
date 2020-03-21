# Stage 1 - the build process
FROM node as build-deps
WORKDIR /usr/src/app
COPY package.json ./
#COPY yarn.lock yarn.lock ./
RUN npm install 
COPY . ./
RUN npm run build

# Stage 2 - the production environment
FROM nginx:1.15.2-alpine
COPY --from=build-deps /usr/src/app/build /var/www
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
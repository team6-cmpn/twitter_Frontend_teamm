# pull official base image
FROM node:16.14-alpine as builder

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
# add app
COPY . .

# Default command | build phase
RUN npm run build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


# pull official base image
FROM node:16.14-alpine as builder

# set working directory
WORKDIR /client

# add `/app/node_modules/.bin` to $PATH


# install app dependencies
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm i react-router-dom
RUN npm install antd
RUN npm install antd-css-utilities
RUN npm install validator
RUN npm i json-server
RUN npm install axios
RUN npm i @emotion/react @emotion/styled
RUN npm install @emotion/react --save
RUN npm install @emotion/core@10.1.1
RUN npm install @mui/icons-material
RUN npm i @babel/core
RUN npm i @babel/code-frame
RUN npm i @mui/x-data-grid
RUN npm i @babel/eslint-parser
# add app
COPY . .

# Default command | build phase
RUN npm run build

FROM nginx:alpine
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /client/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]


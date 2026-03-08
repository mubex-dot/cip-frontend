# build environment
FROM node:latest AS build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install --ignore-engines
COPY . ./

# set env
ARG VITE_CIP_API
ENV VITE_CIP_API=${VITE_CIP_API}
RUN echo 'VITE_CIP_API=${VITE_CIP_API}' > .env.production


# run build
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
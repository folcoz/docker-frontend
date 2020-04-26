# Build Phase

FROM node:alpine as builder

WORKDIR /app

COPY package.json yarn.lock ./

RUN npm install

COPY ./ ./

RUN npm run build

# Run Phase

FROM nginx

COPY --from=builder /app/build /usr/share/nginx/html

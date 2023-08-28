# Stage 1
FROM node:16.20.2 AS builder

COPY . .

RUN npm ci

RUN npm run build

# Stage 2
FROM nginx:stable AS server

COPY --from=builder /dist /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]

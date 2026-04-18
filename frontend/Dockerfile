FROM node:25.9-alpine3.22 as builder

WORKDIR /app
RUN npm install -g pnpm

# pnpm package downloading can be painful in networks with bad connection, so caching it first
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --no-store

# Forcing frontend to send api requests to itself (nginx) instead of directly to backend
# Nginx will proxy /api/ requests to backend service based on location directive
ARG API_BASE=http://localhost:80
ENV NUXT_PUBLIC_API_BASE_URL=$API_BASE

COPY . .
RUN pnpm generate


FROM nginx:stable-alpine3.23

RUN apk add --no-cache curl # curl is for healthchecks

COPY --from=builder /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
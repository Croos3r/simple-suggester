FROM node:20.11.0-alpine3.18 AS builder

# Create app directory
WORKDIR /app

# Copy dependencies files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install --frozen-lockfile

# Copy source (see .dockerignore)
COPY . .

# Build
RUN yarn build

FROM node:20.11.0-alpine3.18 AS runner

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/dist ./src
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/entrypoint.sh ./entrypoint.sh

ENV NODE_ENV production

ENTRYPOINT ["sh", "./entrypoint.sh"]

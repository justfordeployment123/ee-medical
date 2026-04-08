# RAG API - build context = rag-api/
FROM node:20-alpine

WORKDIR /app

# Build tools required for better-sqlite3 native compilation
RUN apk add --no-cache python3 make g++

COPY package*.json ./
RUN npm ci --omit=dev

COPY src ./src
COPY kb-pages ./kb-pages

# Persistent directories (mount these as volumes in Coolify)
# /app/uploads  — uploaded images
# /app/content.db — SQLite database
RUN mkdir -p uploads

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

CMD ["node", "src/server.js"]

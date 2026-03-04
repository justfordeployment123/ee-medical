# RAG API - expects build context = repo root (parent of rag-api/)
FROM node:20-alpine

WORKDIR /app

# Copy and install rag-api dependencies
COPY rag-api/package*.json rag-api/
RUN cd rag-api && npm ci --omit=dev

# Copy rag-api source
COPY rag-api/src rag-api/src

# Copy front-end pages into expected location for knowledge base
COPY front-end/src/pages front-end/src/pages

WORKDIR /app/rag-api

ENV NODE_ENV=production
ENV PORT=4000

EXPOSE 4000

CMD ["node", "src/server.js"]

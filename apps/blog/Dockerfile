FROM node:20-alpine AS base

RUN corepack enable
RUN corepack prepare pnpm@10.13.1 --activate

FROM base as deps
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/blog/package.json ./apps/blog/

RUN pnpm install --frozen-lockfile

FROM base as builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/blog/node_modules ./apps/blog/node_modules

COPY . .

RUN pnpm turbo run build --filter=@asuka/blog

FROM base as runner
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/apps/blog/node_modules ./apps/blog/node_modules
COPY --from=builder /app/apps/blog/dist ./dist

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]

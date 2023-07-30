FROM node:18-alpine

RUN apk add -U --no-cache curl bash openssl

WORKDIR /videos_api_rest

COPY ./package.json ./

EXPOSE 3000

CMD npm install && npm install typescript -g && tsc && npm run dev

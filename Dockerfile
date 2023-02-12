FROM node:latest
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
WORKDIR /home/node/app
COPY --chown=node:node package*.json ./
USER node
COPY --chown=node:node . .
RUN yarn install
RUN yarn build
COPY --chown=node:node . .
CMD [ "yarn", "preview", "--host" ]
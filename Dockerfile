FROM node:18.0.0-alpine3.14
WORKDIR /app/vd-project
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 6000
CMD ["npm", "start"]                                                                                        
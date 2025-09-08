FROM node:latest

WORKDIR /app

COPY package.json ./

# Deze opdracht wordt overschreven in docker-compose.yml om een shell te starten.
CMD ["npm", "run", "start"]
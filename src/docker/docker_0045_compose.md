---
title: Docker compose
date: 2025-08-25
---

#### {{ title }}

::: section
### Scheiding van taken
Het is handig om voor verschillende processen aparte Docker-images en een `docker-compose.yml` te gebruiken, omdat je zo je applicatie in onafhankelijke onderdelen opdeelt. Dit principe heet **microservices**.  
Elk proces, zoals je PHP webserver en je database, heeft zijn eigen unieke taak en afhankelijkheden. De PHP-webserver heeft Apache of Nginx nodig en de PHP-code, terwijl de database PostgreSQL of MySQL en de dataopslag nodig heeft.
* **Zonder Docker:** Je installeert en configureert alles op dezelfde machine. Dit kan leiden tot conflicten tussen de software en het is moeilijk te beheren.
* **Met Docker:** Je bouwt één image voor je PHP-webserver en een aparte image voor je database. Elke image is gespecialiseerd in één taak en bevat alleen de bestanden die daarvoor nodig zijn. Je kunt de database bijvoorbeeld updaten zonder je PHP-webserver te verstoren. Dit maakt het systeem **stabieler** en **gemakkelijker te onderhouden**.

Door je project op te splitsen in aparte services, is het eenvoudiger voor meerdere mensen om aan verschillende onderdelen te werken. Ook is het makkelijker om de applicatie te testen en te implementeren.
:::

::: section
### De rol van `docker-compose.yml`

Het `docker-compose.yml` bestand brengt al deze losse onderdelen samen. Zie het als een **recept** voor je hele applicatie. Je definieert daarin welke services je nodig hebt (bijvoorbeeld `php-app` en `db`), welke images ze moeten gebruiken en hoe ze met elkaar moeten communiceren.

**Voorbeeld met PHP en PostgreSQL:**

1.  **php-app service:** Deze service gebruikt een image die je PHP-webserver en code bevat. Het luistert op poort 8080 naar binnenkomende verzoeken.
2.  **db service:** Deze service gebruikt de `postgres` image. Het beheert de database en is alleen toegankelijk voor de `php-app` service via het interne Docker-netwerk.

Het `docker-compose.yml` bestand zorgt ervoor dat wanneer je het commando `docker-compose up` uitvoert, beide services tegelijkertijd starten en automatisch met elkaar worden verbonden in hetzelfde netwerk. Zo werken je webapplicatie en database samen alsof ze op dezelfde machine draaien, maar dan zonder de nadelen van een gedeelde omgeving.

Als je deze opzet wil installeren op je eigen laptop, doe dan het volgende:
* Open een terminal
* Maak een nieuwe map aan voor je project `mkdir mijnproject`
* Ga in de map staan: `cd mijnproject`
* Maak de Dockerfile
* Maak de docker-compose.yml

De structuur ziet er nu zo uit:

```shell
mijnproject/
├── php-app/
│   └── index.php
├── docker-compose.yml
└── Dockerfile
```
:::

::: section

### Dockerfile

```shell
# Dockerfile
# Gebruik een officiële PHP-image met Apache als basis
FROM php:8.3-apache

# Kopieer de bestanden van je applicatie naar de webserver
COPY php-app/ /var/www/html/

# Installeer de nodige PHP-extensies, inclusief de PostgreSQL-driver
RUN docker-php-ext-install pdo pdo_pgsql
```


```yml
# docker-compose.yml

version: '3.8'

services:
  web:
    build: .
    ports:
      - "8080:80"
    volumes:
      - ./php-app:/var/www/html
    depends_on:
      - db
    
  db:
    image: postgres:17-alpine
    restart: always
    environment:
      POSTGRES_USER: "postgres"
      POSTGRES_PASSWORD: "secret!"
      POSTGRES_DB: "my_database"
    volumes:
      - ./db_data:/var/lib/postgresql/data
```

**Draai de applicatie**
Gebruik `docker compose up`
* De `docker-compose.yml` wordt gelezen en uitgevoerd:
    * web: Er wordt een image gemaakt op basis van de `Dockerfile`
    * Bij het opstarten van de applicatie wordt poort `8080` bereikbaar gemaakt voor de host. M.a.w. met `http://127.0.0.1:8080` beriek je de webserver
    * De map `./php-app` wordt gekopieerd naar `/var/www/html` in de container
    * db: Er wordt een image gedownload met de naam `postgres:17-alpine`
    * Er worden namen en wachtwoorden ingesteld.
    * Er wordt een `volume` aangemaakt in je projectmap met de naam `db_data`
    * De gegevens uit `/var/lib/postgresql/data` worden daarin opgeslagen. Hierdoor kun je de data die de database-server gebruikt blijvend bewaren. Als je dit niet zou doen, ben je na iedere herstart al je data weer kwijt uit de database.

**Stop de applicatie**
`docker compose down -v`

:::

::: section
### Opdrachten
* Gelukkig zijn er al heel veel `docker-compose.yml` bestanden gemaakt. Je hoeft dus niet steeds het wiel opnieuw uit te vinden. Ga naar [awesome-compose](https://github.com/docker/awesome-compose) en kies minimaal 2 sets met microservices. Installeer en laat zien dat je alle services kunt draaien op je laptop.
* Maak zelf twee microservices voor het verwerken van afbeeldingen
    * De eerste microservice is een website waar je plaatjes kunt uploaden
    * De tweede microservice is een proces dat de plaatjes aanpast naar een ander formaat bijv. 200px x 200px.
* Maak zelf twee microservices voor het converteren van bestanden bijv. csv naar excel
    * De eerste microservice is een website waar je csv-bestanden kunt uploaden
    * De tweede microservice is een proces dat de bestanden converteer naar excel.


:::
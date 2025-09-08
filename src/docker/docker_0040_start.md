---
title: Starten met Docker
date: 2025-08-25
---

#### {{ title }}

::: section
### Installatie
**Installatie Docker voor Windows:**  
Docker maakt gebruik van Linux. In Windows 11 kun je gebruik maken van [Windows Subsysteem voor Linux](https://learn.microsoft.com/nl-nl/windows/wsl/about). Hiermee kun je naast windows ook gebruik maken van Linux. Docker kan samenwerken met WSL. Om Docker te installeren moet je dus eerst WSL(2) installeren.

* [Installatie windows op docker.com](https://docs.docker.com/desktop/setup/install/windows-install/)
* [Installeer Docker voor WSL2-backend](https://learn.microsoft.com/en-us/windows/wsl/install)

**Installatie Docker voor Mac:**  
Het macintosh besturingssysteem is gebaseerd op Unix (FreeBSD). Docker kan hierop draaien. Je kunt dus direct aan de slag met het installeren van Docker Desktop.

**Installatie Docker voor Linux:**  
Installeer op Linux de docker desktop omgeving. Docker is gebaseerd op Linux, dus installatie is eenvoudig. Er zijn echter 2 versies. Je kunt docker engine installeren en docker desktop. Docker desktop geeft ook een grafische interface. Om zaken simpel te houden is het advies om alleen Docker Desktop te installeren.
:::

::: section
### Docker images
Als je docker desktop hebt geinstalleerd kun je gebruik maken van de grafische interface, maar hier gebruiken we de docker-cli. Dit programma werkt in de terminal.
Om je eerste image te downloaden en een container op te starten type je de volgende regel in je favoriete terminal app (powershell of bash of terminal op mac):

```shell
docker run hello-world
```
* Je ziet nu heel even dat een image wordt gedownload
* Er wordt een container gestart
* `Hello World` wordt weergegeven op het scherm
* De container is weer gestopt en je kijkt naar de prompt in je terminal

```shell
docker run -it ubuntu bash
```
Met docker run maak je nu opnieuw een container. Met de argumenten -ti maak je de container interactief. Je start de container nu op ubuntu wordt geladen en het programma `bash` wordt gestart. Verschil met `hello-word` is dat door de toevoeging `-ti` de container blijft draaien. 
* De `ubuntu:latest` image wordt gedownload
* Er wordt een container opgestart
* Je zit naar een terminal-prompt te kijken zoals hieronder
* Als je het commando ls intypt zie je de inhoud van het startup-volume van een ubuntu server

```shell
root@24d8a14bb475:/# ls
bin  boot  dev  etc  home  lib  lib64  media  ...
```
:::

::: section
### Dockerfile
Tot nu toe heb je steeds gebruik gemaakt van standaard images die verkrijgbaar zijn op [docker hub](https://hub.docker.com).
Hier kun je talloze images vinden die je vrij kunt gebruiken voor projecten.
Meestal maak je gebruik van een bestaand image om het vervolgens aan te passen naar je eigen wensen.
Dit doe je met een `Dockerfile`. Dockerfile is de naam van een simpel tekst-bestand dat je kunt vullen met instructies voor docker.  
Doe het volgende:
* Open een terminal
* Maak een nieuwe directory (=map) met `mkdir mijnmap`
* Navigeer naar die map `cd mijnmap`
* Maak een leeg tekst-bestand aan `touch Dockerfile`
* Gebruik een teksteditor om `Dockerfile` aan te passen (bijv. nano of notepad++)

```shell 
FROM ubuntu:latest
RUN apt-get update && apt-get install -y apache2
COPY index.html /var/www/html/index.html
CMD ["/usr/sbin/apachectl", "-D", "FOREGROUND"]
```
* Maak nog en tweede bestand in dezelfde map -> `index.html` met de tekst: `<h1>Message from container</h1>`
* Maak het image van de Dockerfile

```shell
$ docker build -t deltion/apachetest .

```
* Docker zoekt automatisch naar de Dockerfile
* De instructies worden uitgevoerd: 
    * Ubuntu:latest wordt gedownload
    * `apt-get` wordt uitgevoerd om apache webserver te downloaden
    * Het bestand `index.html` wordt vanaf je host naar de image gekopieerd `/var/www/html/index.html`
    * De image wordt gestart in detached mode (in de achtergrond). Verwarrend is dan "FOREGROUND", maar dat is omdat de container anders meteen weer zou worden gestopt.
    * Nu kun je de image maken met het build command: `docker build -t deltion/apachetest`
* Je hebt nu een image met een apache webserver en een html-file. Om een container op te starten op basis van je nieuwe image gebruik je het volgende commando:
* `docker run -p 8084:80 deltion/apachetest .` (en vergeet die punt niet aan het eind!!)
* Als het goed is heb je nu een webserver opgestart die je met een browser vanaf je host kunt benaderen met `http://127.0.0.1:8084/`
* De opstelling is helemaal geslaagd als je ook nog `Message from container` in je browserscherm ziet staan.
:::

::: section
### Overige commando's
* Bekijken welke containers op dit moment actief zijn op je computer met `docker ps`
* De terminal van een draaiende webserver starten met `docker exec`
Om de terminal van de webserver te bekijken zoek je de naam (of id) op van de container waarin de webserver draait en start je `bash`

```shell
$ docker ps

CONTAINER ID   IMAGE                 PORTS                                         NAMES
a0e7ee749dc2   deltion/apachetest    0.0.0.0:8084->80/tcp,   [::]:8084->80/tcp     focused_heisenberg
ee73e0982163   alpine/psql                                                         gracious_banach
3e446b9d2df8   adminer:latest        0.0.0.0:8083->8080/tcp, [::]:8083->8080/tcp   adminer
e2be9d9d4140   python-postgres-app                                                 python-postgres-app-1

$ docker exec -it a0e7ee749dc2 bash

root@a0e7ee749dc2:/# 
```
:::

::: section
### Opdrachten
* Probeer bovenstaande uitleg natuurlijk zelf op je eigen laptop
* Gebruik Docker Desktop om te zien of je container nog draait. Zo ja, stop de container dan en start hem daarna weer
* Wat moet je doen als je de container per ongeluk hebt weggegooid?
* En als je de image per ongeluk hebt weggegooid, wat dan?
* Maak zelf een webserver
    * Maak een `index.html` met de tekst `Dat mag je zelf weten!`
    * Gebruik `docker exec` om de pagina aan te passen
    * Check of de veranderingen zijn doorgevoerd door met je browser de webpagina te openen.
    * Stop de container
    * Start de container en ga met je browser naar de website
    * Wat zie je nu?
:::
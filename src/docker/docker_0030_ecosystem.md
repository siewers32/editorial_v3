---
title: Docker Ecosysteem
date: 2025-08-25
---



#### {{ title }}

::: section
### Docker Container
Een Docker container is een manier om een applicatie te verpakken samen met alles wat het nodig heeft om te kunnen draaien, zoals code, bibliotheken en andere bestanden. Denk aan een container zoals die op schepen worden vervoerd.

* **Geïsoleerd:** De container is compleet gescheiden van de rest van je computer. De applicatie binnenin heeft zijn eigen omgeving, dus het kan geen andere programma's beïnvloeden en andere programma's kunnen de container niet zomaar beïnvloeden.
* **Draagbaar:** Je kunt de container gemakkelijk verplaatsen van je eigen laptop naar een server van het bedrijf, of naar de computer van een collega. Omdat alles wat de applicatie nodig heeft in de container zit, werkt het overal precies hetzelfde. Dit is de oplossing voor het bekende probleem "bij mij werkt het wel".
* **Lichtgewicht:** Containers zijn kleiner en efficiënter dan een complete virtuele machine, omdat ze de besturingssysteemkern van de hostcomputer delen. Dit maakt ze snel om op te starten en verbruikt minder bronnen.


Het grootste verschil tussen een **Docker container** en een **virtuele machine (VM)** is wat ze inpakken en delen. Een Docker container is als een appartement in een flatgebouw, terwijl een virtuele machine meer lijkt op een compleet, losstaand huis.
:::

::: section
### Virtuele Machine (VM)
Een VM is een volledige simulatie van een fysieke computer. Bovenop je computer (de **host**) draait een speciaal programma, de **hypervisor**, die ervoor zorgt dat je meerdere complete, onafhankelijke besturingssystemen (de **guest OS**) kunt draaien. Elk besturingssysteem heeft zijn eigen kernel, geheugen en opslagruimte. Dit maakt ze groot en zwaar, want je moet elke keer een compleet besturingssysteem opstarten.

* **Vergelijking:** Een apart huis met zijn eigen keuken, badkamer, en elektriciteit.
* **Besturingssysteem:** Elk VM heeft zijn eigen besturingssysteem.
* **Grootte:** Vaak meerdere gigabytes.
* **Opstarttijd:** Duurt minuten, omdat het een heel besturingssysteem moet laden.
:::

::: section
### Docker vs VM
Een Docker container is veel lichter en efficiënter. De container deelt de **kernel** van het besturingssysteem van de hostcomputer. Je pakt alleen je applicatie en de bestanden en bibliotheken die je applicatie nodig heeft in de container in. Je hebt geen apart, compleet besturingssysteem meer nodig. Hierdoor zijn containers veel kleiner en starten ze razendsnel op.

* **Vergelijking:** Een appartement in een flatgebouw. Meerdere appartementen (containers) delen de fundering en de nutsvoorzieningen (de kernel en het besturingssysteem van de host).
* **Besturingssysteem:** Deelt het besturingssysteem van de host.
* **Grootte:** Vaak slechts megabytes.
* **Opstarttijd:** Duurt seconden.


<img src="/_assets/vm_docker.png" eleventy:widths="400" style="display:block;margin:auto;" alt="vm_doker afbeelding">
:::

::: section
### Docker Ecosysteem

**Docker Engine:** De Docker Engine is het hart van het Docker-platform. Het bestaat uit twee hoofdcomponenten:

**Docker Daemon (dockerd):** De Docker-daemon draait op de hostmachine en is verantwoordelijk voor het beheren van Docker-objecten, zoals afbeeldingen, containers, netwerken en volumes.

**Docker Client:** De Docker client is een command-line interface (CLI) tool waarmee gebruikers via commando's met de Docker-daemon kunnen communiceren. Gebruikers kunnen Docker-containers bouwen, uitvoeren, stoppen en beheren met behulp van de Docker CLI.


**Docker-images:** zijn de bouwstenen van containers. Het zijn alleen-lezen sjablonen die de applicatiecode, runtime, systeemtools, bibliotheken en andere afhankelijkheden bevatten. Docker-images worden gemaakt op basis van Dockerfiles, tekstbestanden met instructies voor het bouwen van de afbeelding laag voor laag.

**Docker-containers:** zijn uitvoerbare instanties van Docker-afbeeldingen. Ze kapselen de applicatie en zijn afhankelijkheden in en bieden een geïsoleerde omgeving voor uitvoering. Containers kunnen worden gemaakt, gestart, gestopt, verplaatst en verwijderd met behulp van Docker-opdrachten.

**Docker-register:** Docker Registry is een gecentraliseerde opslagplaats voor het opslaan en delen van Docker-afbeeldingen. Het standaard openbare register is Docker Hub, waar gebruikers een uitgebreide verzameling afbeeldingen kunnen vinden.


**Docker Compose:** is een tool voor het definiëren en uitvoeren van Docker-applicaties met meerdere containers. Het gebruikt een YAML-bestand (docker-compose.yml) om services, netwerken, volumes en andere configuraties op te geven die nodig zijn voor de applicatie. Docker Compose vereenvoudigt het beheer van complexe applicaties die zijn samengesteld uit meerdere onderling verbonden containers.


**Docker-volumes** worden gebruikt voor persistente gegevens die worden gegenereerd door en worden gebruikt door Docker-containers. Ze bieden een manier voor containers om gegevens op te slaan en te delen, onafhankelijk van de levenscyclus van de container, en zorgen voor persistentie en overdraagbaarheid van gegevens.


**Docker-netwerk:** biedt netwerkmogelijkheden voor containers om met elkaar en met externe netwerken te communiceren. Het maakt gebruik van software-defined netwerken (SDN) om virtuele netwerken te creëren, waardoor connectiviteit en isolatie mogelijk zijn. Gebruikers kunnen aangepaste netwerken maken, containers verbinden met netwerken en netwerkbeleid definiëren met behulp van Docker-opdrachten of Docker Compose.

<img src="/_assets/docker_eco.jpg" eleventy:widths="400" style="display:block;margin:auto;" alt="vm_doker afbeelding">
:::
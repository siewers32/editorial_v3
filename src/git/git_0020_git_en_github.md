---
title: Git en github
date: 2022-04-02
---


#### {{ title }}
::: section
### Samenwerken met github
Als je met meerdere mensen aan een project werkt, dan is het de kunst om allemaal met de laatste versie te werken zonder dat je elkaars werk overschrijft. Hiervoor moet je afspraken maken. Je moet natuurlijk niet tegelijkertijd dezelfde bestanden gaan bewerken. Git kan helpen om ervoor te zorgen dat je altijd de laatste versie hebt.

#### Bestanden synchroniseren
Je kunt een repository opzetten op github.com. Deze repository kun je delen met anderen, zodat je met je team gebruik kunt maken van dezelfde bestanden.

#### Communicatie met github.com
Er zijn verschillende manieren waarop je kunt communiceren met Github, maar de meest veilige, handige en meestgebruikte manier is op basis van SSH. SSH is een protocol waarbij de authenticatie niet op basis een naam- en wachtwoord combinatie wordt afgehandeld, maar met 2 sleutels. Een publieke en een privé-sleutel. De publieke sleutel is afgeleid van de privé-sleutel. Door de publieke sleutel aan github.com te geven, kun je op basis van je privé-sleutel toegang krijgen tot je repositories op github.com. 
Om de communicatie op touw te zetten moet je de volgende stappen doen:
* SSH keys genereren op je lokale computer
* Je public key delen met Github.com
* Als je meerdere sleutelparen hebt, dan start je de ssh-agent op om aan te geven met welke sleutel je authenticeerd. Als je maar 1 sleutelpaar hebt, dan is deze stap niet nodig.

Uitleg hoe je ssh-keys maakt en gebruikt lees je hier:
* [Documentatie op github.com](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent)
:::

::: section
### Synchroniseren
Je kunt op 2 manieren je bestanden synchroniseren met github. 
* Je hebt al een working directory met bestanden en een lokale repository.
  * Je wil dan een remote repository opzetten op github.com
  * Je lokale bestanden synchroniseren op github.com
* Je hebt nog geen bestanden lokaal staan en je wilt een bestaande repository op github.com lokaal gebruiken
  * Je wil dan een remote repository clonen naar je laptop of pc

#### Lokale bestanden synchroniseren met github.com
Op je eigen computer navigeer je naar de (project)directory met bestanden. Dit wordt je working-directory genoemd. Als je met een editor werkt en/of een framework gebruikt, dan wil je waarschijnlijk niet alle bestanden opslaan in een repository.
Om dit te voorkomen neem je de mappen en bestanden die je niet wil opslaan op in een bestand met de naam .gitignore.
Stel je werkt aan een laravel project en je maakt gebruik van Jetbrains' PHPStorm, dan neem je de volgende mappen en bestanden op in .gitignore
```php
# Als je op een mac werkt kom je metadata tegen in de vorm van .DS_Store files.
.DS_Store
# PHPStorm bewaart project-informatie in de map .idea
.idea/
# Laravel gebruikt allerlei externe libraries die worden binnengehaald met composer
vendor/
# Front-ends frameworks zoals Vue en React gebruken npm packages
node_modules/
# wachtwoorden en sleutels heb je liever ook niet op github.com
.env
```
Bovenstaand is een voorbeeld. De inhoud van een .gitignore-bestand verschilt per project dus je moet zelf goed kijken hoe jouw situatie is. Je kunt op google veel discussies en voorbeelden vinden. 
* [.gitignore voorbeelden](https://github.com/github/gitignore)
* [nog meer .gitignore voorbeelden](https://www.toptal.com/developers/gitignore)

Nadat je een .gitignore bestand hebt toegevoegd aan  je working-directory voer je de volgende commando's uit.

```php
git init
git add .
git commit -m "first commit"
```

* Met git init initialiseer je een nieuwe repository in je working-directory
* Met "git add ." voeg je alle bestanden uit je working-directory toe aan de stage van je repository
* Met git commit maak je een nieuwe versie aan met de bestanden in de stage.


* Ga naar github.com en maak een nieuwe lege repository. Belangrijk: Voeg nog geen bestanden toe aan de repository. Geen readme of gitignore!!
* Als je al lokaal een repository hebt gemaakt, dan kopieer je de url naar de repo op github.com en gebruik je 'git remote add' om de github repo te koppelen met je lokale repository.

```php
git remote add origin git@github.com:jouw-account-naam/je-repository.git 
```

De naam van je remote repository is 'origin' en je bewaart je werk in de 'master' of 'main'-branch, afhankelijk van je standaard git-instellingen. Gebruik 'git status' om te zien in welke branch je aan het werk bent.
Met het volgende commando synchroniseer je de lokale repository met de remote repository op github.com door de je lokale bestanden op github.com te zetten.

````php
git push origin master
````
Als alles goed is gegaan, zie je nu je bestanden op github.com!
:::

::: section
### Een repo op github.com
Stel dat je nu je lokale repository op je laptop hebt staan en op github.com, maar je wilt verder werken aan je project op een desktop computer. Je wil dan een kopie van github.com op je desktop computer zetten.

Ga naar github.com en kopieer de (ssh) link van je github-repository.
Op je desktop computer ga je naar de directory waar je de repository wilt uitchecken, vervolgens haal je de repository op van github.com....

````php
git clone git@github.com:account-naam/je-repository.git
````

#### Workflow
Stel je zit nog achter je desktop computer en je verandert een aantal bestanden.  
Voordat je de computer uitzet doe je weer.....

````php
git add .
git commit 'aanpassing aan login-scherm'
git push origin master
````  

Je veranderingen zijn opgeslagen en je bent weer in sync op github.com
Als je weer verder  wil werken op je laptop, dan start je weer met...

```php
git pull origin master
```
en je bent weer in sync!
:::


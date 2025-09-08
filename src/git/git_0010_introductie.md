---
title: Introductie
date: 2025-09-08
---

#### {{ title }}
::: section
### Wat is Git
{% video "videoseries?list=PLBtXOV0WuE_GRm9onlLXE2QPhWB96poCS" %}

Git is een uitvinding van Linus Torvalds. Linus is ook de bedenker van het Linux besturingssysteem. Er werken heel veel developers aan Linux, dus Linus heeft zijn handen vol aan het reviewen en testen van code van anderen. Om dit proces te vergemakkelijken heeft hij het Git versiesysteem bedacht. Git is razend populair bij vrijwel alle developers.

:::

::: section
### Wat is Github?
Github is een website-versie van Git. De bestanden die je bewaart in Git kun je ook bewaren en beheren op Github.com. Op die manier raak je nooit iets kwijt. Github is een soort Google Drive voor developers.

#### Wat is er zo handig aan Git
Git in combinatie met Github geeft je altijd de laatste versie van een applicatie. Het geeft je de mogelijkheid om samen te werken aan applicaties zonder dat je elkaar in de weg zit of dat je elkaars bestanden per ongeluk overschrijft. 
:::

::: section
### Hoe werkt Git
Git werkt met een repository. Een repository is een soort database waarin je bestanden en alle aanpassingen op die bestanden worden bewaard. Om te kunnen werken met een repository moet je eerst Git installeren en een lege repository aanmaken.
[Installeer Git](https://github.com/git-guides/install-git)

Als je Git hebt geïnstalleerd is er een programma dat 'git bash' heet. Git bash is een eenvoudige (maar uitgebreide) app om git te besturen.
Er zijn ook GUI's voor git. Bijv. Git Desktop, Git Kraken etc.
Als je je applicatiebestanden op wilt slaan in een git repository navigeer dan in git bash naar je 'working directory'. Dit is de directory waar al je applicatiebestanden staan.
````php
git init
````
Met 'init' initialiseer je een nieuwe git repository.
```php
git add .
git commit -m 'first commit'
```
Met 'add' voeg je alle bestanden uit de 'working directory' toe aan de 'stage'.  
Met 'commit' worden de bestanden uit de 'working directory' opgeslagen in de repository. '-m'  geeft nog de mogelijkheid om een message mee te bewaren die iets zegt over de commit. Bijv. 'first commit'.
Om je bestanden toe te voegen aan een repository moet je 2 stappen doen. Je voegt de bestanden toe aan de 'stage', daarmee zet je ze klaar om opgeslagen te worden. Daarna doe je een 'commit' waarmee de bestanden worden opgeslagen in de repository. 

![Stadia van working directory naar repository met Git](https://static.edutorial.nl/git/git.svg)


Als je 'git init' start vanuit een directory, dan krijg je in die directory een 'verborgen' mapje met de naam '.git'. Een bestandsnaam of map die begint met een punt is verborgen. Je kunt ook verborgen bestanden zien als je de toevoeging '-a' gebruikt bij het commando 'ls' (list directory)
````php
|--working directory
    |--.git
````
:::

::: section
### Overzicht Git opdrachten
````php
// Maak een nieuwe lege repository aan
// in de huidige map
git init

// Maak een kopie van een bestaande repository
//(bijvoorbeeld vanaf github)

git clone gebruiker@host:/path/to/repository

// Voeg bestanden toe aan de stage.
git add

// Voer de veranderingen in de stage door in de repository
git commit -m "mijn bericht"

// Bekijk een lijst van repositories waarmee deze repository is gelinkt
git remote -v

// Voeg een link toe naar een remote repository
// Noem de link 'origin' en gebruik de master branch
git remote
add origin gebruiker@host:/path/to/repository
git push origin master

// Stuur de wijzigingen in de lokale repo
// naar een remote repository
git push origin master

// Haal een nieuwe versie op van de server en
// synchroniseer met je lokale repository
git pull origin master

// Bekijk een overzicht van alle commits
git log

// Bekijk welke bestanden in de stage staan
git status

// Als je helemaal gek wordt van de foutmeldingen en conflicten, 
// dan kun je altijd opnieuw beginnen met..
rm -rf ./.git

````
<code>rm -rf ./.git</code> is erg destructief dus gebruik het 'verstandig'.
* Met rm -rf verwijder je alle bestanden en mappen in een bepaalde map
* Het is geen prullebakje dat je nog kunt herstellen!!
* Je verwijdert alle git-bestanden voor het project in je working-directory.
* De overige bestanden (je code) in je working-directory blijven wel bewaard.

:::
---
title: Conflicten
date: 2022-04-04
---


#### {{ title }}

::: section
### Samenwerken
Het samenvoegen van bestanden met collega's is niet altijd even makkelijk. Je doet natuurlijk je best om zo goed mogelijk taken te verdelen. De kans dat je elkaars bestanden bewerkt is daarmee zo klein mogelijk. Toch kun je niet altijd uitsluiten dat je samen aan hetzelfde bestand hebt gewerkt. 

#### Niet in sync met github.com
In Laravel hebben bijvoorbeeld veel ontwikkelaars met 'web.php' of 'api.php' te maken. Je maakt daar routes aan naar de verschillende controllers. Dit kan voor conflicten zorgen.   

#### Samen dezelfde bestanden bewerken
Om conflicten op te lossen moet je begrijpen dat git werkt met versies. Iedere commit is weer een nieuwe versie. Conflicten ontstaan als je een nieuwe versie wil creëren, maar je collega wil dat ook en jullie hebben dezelfde bestanden bewerkt.
Je zult dan toch samen moeten bekijken hoe je de wijzigingen in zo'n bestand samenvoegt.  

Hieronder zie je een voorbeeld van een merge-conflict in Visual Studio Code....  
<img src="https://static.edutorial.nl/git/merge-conflict.png" eleventy:widths="700" alt="merge conflict">
* Bij <code><<<<<<< HEAD (Current change)</code> tot aan <code>=======</code> zie je de code van je collega.   
* Jouw code is de code vanaf <code>>>>>>>>Test (Incoming change)</code>
Pas het bestand aan zodat alleen de gewenste code nog overblijft
  * Alleen jouw code
  * Alleen de code van je collega, of
  * De code van jullie beide
* Commit je code en push opnieuw naar github.com
:::

::: section
### Niet in sync met github.com
Een andere reden voor conflicten is dat je bent vergeten om de laatste wijzigingen in een github repository op te halen. Jouw lokale repository is daardoor niet meer in sync met de laatste wijzigingen op github. Dit is vaak op te lossen met een 'git pull'-commando. Daarna kun je je nieuwe wijzigingen weer committen en pushen naar github.


```php
error: failed to push some refs to 'github.com:edutorial/the-cook-book.git'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally. This is usually caused by another repository pushing
hint: to the same ref. You may want to first integrate the remote changes
hint: (e.g., 'git pull ...') before pushing again.
hint: See the 'Note about fast-forwards' in 'git push --help' for details.


```

#### Niet de juiste bestanden in de stage
Het komt ook wel voor dat je <code>git add .</code> hebt gedaan. De hele vendor-map is per ongeluk meegekomen. Wat nu?  
In dat geval kun je nog terug met:
````php
# git status geeft weer welke bestanden zijn opgenomen in de stage
git status
# git reset verwijdert alle bestanden uit de stage
git reset
````
Je verwijdert dan de bestanden uit de stage en je kunt je .gitignore bestand nog in orde maken of een selectie maken uit de files die je uiteindelijk wil committen.

:::
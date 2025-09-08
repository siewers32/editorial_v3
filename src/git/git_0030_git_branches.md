---
title: Git branches
date: 2022-04-03
---


#### {{ title }}

::: section
### Samenwerken
Als je samen aan een project gaat werken, dan is het best ingewikkeld om er voor te zorgen dat ieder zijn eigen stukje code kan produceren. Vaak moet je toch dezelfde files bewerken en dat kan leiden tot gedoe en zelfs ruzie in software-teams.
Git kan hierbij helpen!   
Een project dat gesmeerd loopt is gestart bij een heldere taakverdeling en goede afspraken, maar Git helpt je met het bijhouden van versies en het uitwisselen van code in je project.

#### Werkwijze
In git kun je werken met verschillende branches. In een branch kun je de veranderingen van software bijhouden. Als je een nieuwe git repository initialiseert dan heb je in ieder geval 1 'master' of 'main' branch. (Afhankelijk van je voorkeur voor een bepaalde naam).
De 'main'-branch bevat betrouwbare geteste code. Dit is de code die je met je klanten of gebruikers deelt. 

#### Feature branch
Zodra je met je team de ontwikkeltaken hebt verdeeld ga je aan de slag het bouwen van nieuwe features voor je produkt.  
Als ontwikkelaar maak je dan een nieuwe 'feature'-branch aan. Zolang je 'feature' nog niet helemaal 100% werkt blijft je code in een apart 'tak' van de code-structuur. Je klanten en gebruikers worden niet met deze code geconfronteerd.
Pas op het moment dat je code getest is en goedbevonden wordt je nieuwe feature onderdeel van de main-branch. Je voert dan een 'merge' uit. Je voegt jouw feature-code samen met de code in de main-branch.
Bij de eerstvolgende release van de software wordt jouw feature bij klanten en gebruikers geimplementeerd.
Alle ontwikkelaars in een softwareteam maken branches voor de features waar ze aan werken. 

#### Bugfixes
Naast features zijn er ook altijd bugs op te lossen. Meestal kiezen teams voor een aparte branche voor het oplossen van bugs. Bugs moeten snel en goed worden opgelost. Door gebruik te maken van een aparte branch kunnen bugfixes zowel aan de main-branche als aan nieuwe features worden toegevoegd (gemerged).
<img src="https://static.edutorial.nl/git/git-versions3.svg" eleventy:widths="700" alt="git versions">

[Git branches en merging](https://www.varonis.com/blog/git-branching/)
:::